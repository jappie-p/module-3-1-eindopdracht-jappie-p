document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');
    
    // Input fields
    const voornaamInput = document.querySelector('input[name="voornaam"]');
    const achternaamInput = document.querySelector('input[name="achternaam"]');
    const straatnaamInput = document.querySelector('input[name="straatnaam"]');
    const huisnummerInput = document.querySelector('input[name="huisnummer"]');
    const postcodeInput = document.querySelector('input[name="postcode"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telefoonnummerInput = document.querySelector('input[name="telefoonnummer"]');
    const geboortedatumInput = document.querySelector('input[name="geboortedatum"]');
    const wachtwoordInput = document.querySelector('input[name="wachtwoord"]');
    const wachtwoordBevestigenInput = document.querySelector('input[name="wachtwoord_bevestigen"]');
    const algemeneVoorwaardenCheckbox = document.querySelector('input[name="algemene_voorwaarden"]');
    
    // Track which fields have been interacted with
    const fieldInteracted = {
        voornaam: false,
        achternaam: false,
        straatnaam: false,
        huisnummer: false,
        postcode: false,
        email: false,
        telefoonnummer: false,
        geboortedatum: false,
        wachtwoord: false,
        wachtwoordBevestigen: false,
        algemeneVoorwaarden: false
    };
    
    // Validation state - all fields start as valid until interacted with
    const validationState = {
        voornaam: true,
        achternaam: true,
        straatnaam: true,
        huisnummer: true,
        postcode: true,
        email: true,
        telefoonnummer: true,
        geboortedatum: true,
        wachtwoord: true,
        wachtwoordBevestigen: true,
        algemeneVoorwaarden: true
    };
    
    // Create error message element
    function createErrorElement(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '5px';
        return errorDiv;
    }
    
    // Show error message and mark as invalid
    function showError(input, message) {
        // Remove any existing error messages
        removeError(input);
        
        // Create and show new error message
        const errorDiv = createErrorElement(message);
        input.parentNode.appendChild(errorDiv);
        
        // Add invalid class for text inputs
        if (input.type !== 'checkbox') {
            input.classList.remove('interacted-valid');
            input.classList.add('interacted-invalid');
        }
    }
    
    // Remove error message and reset border
    function removeError(input) {
        const parent = input.parentNode;
        const existingError = parent.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }
    
    // Mark field as valid
    function markFieldValid(input) {
        removeError(input);
        if (input.type !== 'checkbox') {
            input.classList.remove('interacted-invalid');
            input.classList.add('interacted-valid');
        }
    }
    
    // Mark field as interacted
    function markFieldInteracted(fieldName) {
        fieldInteracted[fieldName] = true;
    }
    
    // Validate voornaam
    function validateVoornaam() {
        if (!fieldInteracted.voornaam) return;
        
        const value = voornaamInput.value.trim();
        if (value === '') {
            showError(voornaamInput, 'Voornaam is verplicht');
            validationState.voornaam = false;
        } else if (value.length < 2) {
            showError(voornaamInput, 'Voornaam moet minimaal 2 karakters bevatten');
            validationState.voornaam = false;
        } else {
            markFieldValid(voornaamInput);
            validationState.voornaam = true;
        }
        checkFormValidity();
    }
    
    // Validate achternaam
    function validateAchternaam() {
        if (!fieldInteracted.achternaam) return;
        
        const value = achternaamInput.value.trim();
        if (value === '') {
            showError(achternaamInput, 'Achternaam is verplicht');
            validationState.achternaam = false;
        } else if (value.length < 2) {
            showError(achternaamInput, 'Achternaam moet minimaal 2 karakters bevatten');
            validationState.achternaam = false;
        } else {
            markFieldValid(achternaamInput);
            validationState.achternaam = true;
        }
        checkFormValidity();
    }
    
    // Validate straatnaam
    function validateStraatnaam() {
        if (!fieldInteracted.straatnaam) return;
        
        const value = straatnaamInput.value.trim();
        if (value === '') {
            showError(straatnaamInput, 'Straatnaam is verplicht');
            validationState.straatnaam = false;
        } else {
            markFieldValid(straatnaamInput);
            validationState.straatnaam = true;
        }
        checkFormValidity();
    }
    
    // Validate huisnummer
    function validateHuisnummer() {
        if (!fieldInteracted.huisnummer) return;
        
        const value = huisnummerInput.value.trim();
        if (value === '') {
            showError(huisnummerInput, 'Huisnummer is verplicht');
            validationState.huisnummer = false;
        } else if (!/^\d+[a-zA-Z]?$/.test(value)) {
            showError(huisnummerInput, 'Voer een geldig huisnummer in (bijv. 123 of 123a)');
            validationState.huisnummer = false;
        } else {
            markFieldValid(huisnummerInput);
            validationState.huisnummer = true;
        }
        checkFormValidity();
    }
    
    // Validate postcode
    function validatePostcode() {
        if (!fieldInteracted.postcode) return;
        
        const value = postcodeInput.value.trim();
        if (value === '') {
            showError(postcodeInput, 'Postcode is verplicht');
            validationState.postcode = false;
        } else if (!/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value)) {
            showError(postcodeInput, 'Voer een geldige postcode in (bijv. 1234AB)');
            validationState.postcode = false;
        } else {
            markFieldValid(postcodeInput);
            validationState.postcode = true;
        }
        checkFormValidity();
    }
    
    // Validate email
    function validateEmail() {
        if (!fieldInteracted.email) return;
        
        const value = emailInput.value.trim();
        if (value === '') {
            showError(emailInput, 'E-mailadres is verplicht');
            validationState.email = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showError(emailInput, 'Voer een geldig e-mailadres in');
            validationState.email = false;
        } else {
            markFieldValid(emailInput);
            validationState.email = true;
        }
        checkFormValidity();
    }
    
    // Validate telefoonnummer
    function validateTelefoonnummer() {
        if (!fieldInteracted.telefoonnummer) return;
        
        const value = telefoonnummerInput.value.trim();
        if (value === '') {
            showError(telefoonnummerInput, 'Telefoonnummer is verplicht');
            validationState.telefoonnummer = false;
        } else if (!/^(06|00316|\+316)[0-9]{8}$/.test(value.replace(/\s/g, ''))) {
            showError(telefoonnummerInput, 'Voer een geldig Nederlands mobiel nummer in');
            validationState.telefoonnummer = false;
        } else {
            markFieldValid(telefoonnummerInput);
            validationState.telefoonnummer = true;
        }
        checkFormValidity();
    }
    
    // Validate geboortedatum
    function validateGeboortedatum() {
        if (!fieldInteracted.geboortedatum) return;
        
        const value = geboortedatumInput.value;
        if (value === '') {
            showError(geboortedatumInput, 'Geboortedatum is verplicht');
            validationState.geboortedatum = false;
        } else {
            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            
            if (age < 18) {
                showError(geboortedatumInput, 'Je moet minimaal 18 jaar oud zijn');
                validationState.geboortedatum = false;
            } else {
                markFieldValid(geboortedatumInput);
                validationState.geboortedatum = true;
            }
        }
        checkFormValidity();
    }
    
    // Validate wachtwoord and wachtwoordBevestigen together
    function validateWachtwoorden() {
        // Only validate if either field has been interacted with
        if (!fieldInteracted.wachtwoord && !fieldInteracted.wachtwoordBevestigen) return;
        
        const wachtwoord = wachtwoordInput.value;
        const wachtwoordBevestigen = wachtwoordBevestigenInput.value;
        
        // Only validate if both fields have values
        if (wachtwoord !== '' || wachtwoordBevestigen !== '') {
            // If one field is filled but the other is empty
            if (wachtwoord === '' && wachtwoordBevestigen !== '') {
                showError(wachtwoordInput, 'Vul ook het wachtwoord in');
                markFieldValid(wachtwoordBevestigenInput);
                validationState.wachtwoord = false;
                validationState.wachtwoordBevestigen = true; 
            } else if (wachtwoord !== '' && wachtwoordBevestigen === '') {
                markFieldValid(wachtwoordInput);
                showError(wachtwoordBevestigenInput, 'Bevestig je wachtwoord');
                validationState.wachtwoord = true; 
                validationState.wachtwoordBevestigen = false;
            } else if (wachtwoord !== wachtwoordBevestigen) {
                // Both fields are filled but don't match
                markFieldValid(wachtwoordInput);
                showError(wachtwoordBevestigenInput, 'Wachtwoorden komen niet overeen');
                validationState.wachtwoord = true;
                validationState.wachtwoordBevestigen = false;
            } else {
                // Both fields are filled and match
                markFieldValid(wachtwoordInput);
                markFieldValid(wachtwoordBevestigenInput);
                validationState.wachtwoord = true;
                validationState.wachtwoordBevestigen = true;
            }
        } else {
            // Both fields are empty, which is fine (optional)
            removeError(wachtwoordInput);
            removeError(wachtwoordBevestigenInput);
            wachtwoordInput.classList.remove('interacted-invalid');
            wachtwoordInput.classList.remove('interacted-valid');
            wachtwoordBevestigenInput.classList.remove('interacted-invalid');
            wachtwoordBevestigenInput.classList.remove('interacted-valid');
            validationState.wachtwoord = true;
            validationState.wachtwoordBevestigen = true;
        }
        
        checkFormValidity();
    }
    
    // Validate algemene voorwaarden
    function validateAlgemeneVoorwaarden() {
        if (!fieldInteracted.algemeneVoorwaarden) return;
        
        if (!algemeneVoorwaardenCheckbox.checked) {
            showError(algemeneVoorwaardenCheckbox, 'Je moet akkoord gaan met de algemene voorwaarden');
            validationState.algemeneVoorwaarden = false;
        } else {
            removeError(algemeneVoorwaardenCheckbox);
            validationState.algemeneVoorwaarden = true;
        }
        
        checkFormValidity();
    }
    
    // Validate all fields on form submission
    function validateAllFields() {
        // Mark all fields as interacted with
        Object.keys(fieldInteracted).forEach(field => {
            fieldInteracted[field] = true;
        });
        
        // Validate all fields
        validateVoornaam();
        validateAchternaam();
        validateStraatnaam();
        validateHuisnummer();
        validatePostcode();
        validateEmail();
        validateTelefoonnummer();
        validateGeboortedatum();
        validateWachtwoorden();
        validateAlgemeneVoorwaarden();
        
        return checkFormValidity();
    }
    
    // Check if all fields are valid
    function checkFormValidity() {
        const isValid = Object.values(validationState).every(state => state === true);
        
        if (isValid) {
            submitButton.classList.add('valid');
        } else {
            submitButton.classList.remove('valid');
        }
        
        return isValid;
    }
    
    // Transform button into rocket ship animation
    function transformButtonToAirplane(e) {
        e.preventDefault();
        
        // Validate all fields before submission
        if (validateAllFields()) {
            // Create rocket ship container
            const rocketShip = document.createElement('div');
            rocketShip.className = 'rocket-ship';
            
            // Create rocket parts
            const rocketBody = document.createElement('div');
            rocketBody.className = 'rocket-body';
            
            const rocketNose = document.createElement('div');
            rocketNose.className = 'rocket-nose';
            
            const rocketFinLeft = document.createElement('div');
            rocketFinLeft.className = 'rocket-fin-left';
            
            const rocketFinRight = document.createElement('div');
            rocketFinRight.className = 'rocket-fin-right';
            
            const rocketWindow = document.createElement('div');
            rocketWindow.className = 'rocket-window';
            
            const rocketFlames = document.createElement('div');
            rocketFlames.className = 'rocket-flames';
            
            const flame = document.createElement('div');
            flame.className = 'flame';
            
            // Assemble rocket
            rocketFlames.appendChild(flame);
            rocketShip.appendChild(rocketBody);
            rocketShip.appendChild(rocketNose);
            rocketShip.appendChild(rocketFinLeft);
            rocketShip.appendChild(rocketFinRight);
            rocketShip.appendChild(rocketWindow);
            rocketShip.appendChild(rocketFlames);
            
            document.body.appendChild(rocketShip);
            
            // Position rocket at button position
            const buttonRect = submitButton.getBoundingClientRect();
            rocketShip.style.position = 'fixed';
            rocketShip.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
            rocketShip.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
            
            // Hide the button
            submitButton.style.opacity = '0';
            
            // Start animation after a small delay
            setTimeout(() => {
                // Rocket flies up and slightly to the right
                rocketShip.style.top = `-100px`;
                rocketShip.style.left = `${buttonRect.left + buttonRect.width / 2 + 100}px`;
                
                // Submit the form after animation completes
                setTimeout(() => {
                    form.submit();
                }, 2000);
            }, 100);
        }
    }
    
    // Add event listeners for input and focus events
    function setupFieldListeners(input, fieldName) {
        // Validate on input or change (for checkboxes)
        const eventType = input.type === 'checkbox' ? 'change' : 'input';
        input.addEventListener(eventType, () => {
            markFieldInteracted(fieldName);
            switch(fieldName) {
                case 'voornaam': validateVoornaam(); break;
                case 'achternaam': validateAchternaam(); break;
                case 'straatnaam': validateStraatnaam(); break;
                case 'huisnummer': validateHuisnummer(); break;
                case 'postcode': validatePostcode(); break;
                case 'email': validateEmail(); break;
                case 'telefoonnummer': validateTelefoonnummer(); break;
                case 'geboortedatum': validateGeboortedatum(); break;
                case 'wachtwoord': 
                case 'wachtwoordBevestigen': validateWachtwoorden(); break;
                case 'algemeneVoorwaarden': validateAlgemeneVoorwaarden(); break;
            }
        });
        
        // Mark as interacted on focus out (blur)
        input.addEventListener('blur', () => {
            markFieldInteracted(fieldName);
            switch(fieldName) {
                case 'voornaam': validateVoornaam(); break;
                case 'achternaam': validateAchternaam(); break;
                case 'straatnaam': validateStraatnaam(); break;
                case 'huisnummer': validateHuisnummer(); break;
                case 'postcode': validatePostcode(); break;
                case 'email': validateEmail(); break;
                case 'telefoonnummer': validateTelefoonnummer(); break;
                case 'geboortedatum': validateGeboortedatum(); break;
                case 'wachtwoord': 
                case 'wachtwoordBevestigen': validateWachtwoorden(); break;
                case 'algemeneVoorwaarden': validateAlgemeneVoorwaarden(); break;
            }
        });
    }
    
    // Setup field listeners
    setupFieldListeners(voornaamInput, 'voornaam');
    setupFieldListeners(achternaamInput, 'achternaam');
    setupFieldListeners(straatnaamInput, 'straatnaam');
    setupFieldListeners(huisnummerInput, 'huisnummer');
    setupFieldListeners(postcodeInput, 'postcode');
    setupFieldListeners(emailInput, 'email');
    setupFieldListeners(telefoonnummerInput, 'telefoonnummer');
    setupFieldListeners(geboortedatumInput, 'geboortedatum');
    setupFieldListeners(wachtwoordInput, 'wachtwoord');
    setupFieldListeners(wachtwoordBevestigenInput, 'wachtwoordBevestigen');
    setupFieldListeners(algemeneVoorwaardenCheckbox, 'algemeneVoorwaarden');
    
    // Add event listener for form submission
    form.addEventListener('submit', transformButtonToAirplane);
});
