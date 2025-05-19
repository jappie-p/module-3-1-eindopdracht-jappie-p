document.addEventListener('DOMContentLoaded', () => {
    // Filter elements
    const priceSlider = document.getElementById('price-slider');
    const priceDisplay = document.getElementById('price-display');
    const colorPicker = document.getElementById('color-picker');
    const stoneTypeCheckboxes = document.querySelectorAll('input[name="stone-type"]');
    const products = document.querySelectorAll('.product');

    function updateProductVisibility() {
        const maxPrice = parseInt(priceSlider.value);
        const selectedColor = colorPicker.value;
        const selectedTypes = Array.from(stoneTypeCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        products.forEach(product => {
            const priceText = product.querySelector('p').textContent;
            const price = parseInt(priceText.match(/\d+/)[0]);
            const stoneType = product.dataset.stoneType; 
            const stoneColor = product.dataset.color; 
            
            const matchesPrice = price <= maxPrice;
            const matchesType = selectedTypes.includes(stoneType);
            const matchesColor = !stoneColor || stoneColor.toLowerCase() === selectedColor.toLowerCase();
            
            if (matchesPrice && matchesType && matchesColor) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Event listeners for filters
    priceSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        priceDisplay.textContent = `€${value}`;
        updateProductVisibility();
    });

    colorPicker.addEventListener('input', updateProductVisibility);

    stoneTypeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProductVisibility);
    });

    // Handle burger menu dropdown
    const burgerDropdowns = document.querySelectorAll('.dropdown[data-dropdown]');
    
    burgerDropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('[data-dropdown-button]');
        const menu = dropdown.querySelector('.dropdown-menu');
        let isOpen = false;
        let isHovering = false;
        
        // Handle hover on burger button
        button?.addEventListener('mouseenter', () => {
            isHovering = true;
            dropdown.classList.add('active');
        });
        
        // Handle hover on menu
        menu?.addEventListener('mouseenter', () => {
            isHovering = true;
            dropdown.classList.add('active');
        });
        
        // Handle mouse leave from button
        button?.addEventListener('mouseleave', () => {
            // Small delay to allow mouse to move to the menu
            setTimeout(() => {
                if (!menu.matches(':hover') && !isOpen) {
                    isHovering = false;
                    dropdown.classList.remove('active');
                }
            }, 50);
        });
        
        // Handle mouse leave from menu
        menu?.addEventListener('mouseleave', () => {
            isHovering = false;
            // Only close if it wasn't opened by clicking
            if (!isOpen) {
                dropdown.classList.remove('active');
            }
        });
        
        // Toggle menu on click
        button?.addEventListener('click', (e) => {
            e.stopPropagation();
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                isOpen = false;
            } else {
                dropdown.classList.add('active');
                isOpen = true;
            }
        });
    });
    
    // Handle shopping cart popup
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartIcon = cartDropdown?.querySelector('.cart-icon');
    const cartPopup = document.getElementById('cart-popup');
    const closeCartBtn = document.querySelector('.close-cart');
    let isCartOpen = false;
    
    // Show cart on hover
    cartIcon?.addEventListener('mouseenter', () => {
        cartDropdown.classList.add('active');
    });
    
    cartPopup?.addEventListener('mouseenter', () => {
        cartDropdown.classList.add('active');
    });
    
    // Hide cart on mouse leave
    cartDropdown?.addEventListener('mouseleave', () => {
        // Only close if it wasn't opened by clicking
        if (!isCartOpen) {
            cartDropdown.classList.remove('active');
        }
    });
    
    // Toggle cart on click
    cartIcon?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (cartDropdown.classList.contains('active')) {
            cartDropdown.classList.remove('active');
            isCartOpen = false;
        } else {
            cartDropdown.classList.add('active');
            isCartOpen = true;
        }
    });
    
    // Close cart when close button is clicked
    closeCartBtn?.addEventListener('click', () => {
        cartDropdown.classList.remove('active');
        isCartOpen = false;
    });
    
    // Handle user icon click - redirect to login page
    const userIcon = document.querySelector('.user-icon');
    userIcon?.addEventListener('click', () => {
        window.location.href = 'loginpage.html';
    });
    
    // Close popups only when explicitly requested
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown') && !e.target.closest('.cart-dropdown')) {
            // Reset all menus
            document.querySelectorAll('.dropdown').forEach(el => {
                el.classList.remove('active');
            });
            
            // Reset cart
            if (cartDropdown) {
                cartDropdown.classList.remove('active');
                isCartOpen = false;
            }
        }
    });
});
