<!-- This code block was previously handling the cart functionality but has been replaced with the implementation below -->

<?php
session_start();
require_once("../products/product_array.php");

// Initialize cart if it doesn't exist
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Add product to cart
if (isset($_POST['addProduct'], $_POST['productId'])) {
    $productId = (int)$_POST['productId'];
    
    // Find the product in the products array
    $productToAdd = null;
    foreach ($products as $product) {
        if ($product['id'] === $productId) {
            $productToAdd = $product;
            break;
        }
    }
    
    // If product exists, add to cart
    if ($productToAdd) {
        // Check if product already in cart
        $found = false;
        foreach ($_SESSION['cart'] as &$item) {
            if ($item['id'] === $productId) {
                // Product already in cart, increment quantity
                $item['quantity'] += 1;
                $found = true;
                break;
            }
        }
        
        // If product not in cart, add it with quantity 1
        if (!$found) {
            $productToAdd['quantity'] = 1;
            $_SESSION['cart'][] = $productToAdd;
        }
        
        // Redirect back to prevent form resubmission
        header("Location: " . $_SERVER['HTTP_REFERER']);
        exit();
    }
}

// Update product quantity
if (isset($_POST['updateQuantity'], $_POST['productId'], $_POST['quantity'])) {
    $productId = (int)$_POST['productId'];
    $quantity = (int)$_POST['quantity'];
    
    // Update quantity or remove if zero
    if ($quantity > 0) {
        foreach ($_SESSION['cart'] as &$item) {
            if ($item['id'] === $productId) {
                $item['quantity'] = $quantity;
                break;
            }
        }
    } else {
        // Remove item if quantity is zero
        foreach ($_SESSION['cart'] as $key => $item) {
            if ($item['id'] === $productId) {
                unset($_SESSION['cart'][$key]);
                // Reindex array
                $_SESSION['cart'] = array_values($_SESSION['cart']);
                break;
            }
        }
    }
    
    // Redirect back
    header("Location: " . $_SERVER['HTTP_REFERER']);
    exit();
}

// Remove product from cart
if (isset($_POST['removeProduct'], $_POST['productId'])) {
    $productId = (int)$_POST['productId'];
    
    foreach ($_SESSION['cart'] as $key => $item) {
        if ($item['id'] === $productId) {
            unset($_SESSION['cart'][$key]);
            // Reindex array
            $_SESSION['cart'] = array_values($_SESSION['cart']);
            break;
        }
    }
    
    // Redirect back
    header("Location: " . $_SERVER['HTTP_REFERER']);
    exit();
}
?>