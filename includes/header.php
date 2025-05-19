<?php
session_start();
?>

<?php 
include("products/product_array.php");
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Louisa Gemstones</title>
    <link rel="stylesheet" href="/module3.1/assets/css/mainpage.css">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
    <script src="/module3.1/assets/js/header.js" defer></script>
</head>
<body>

    <div class="header">
        <div class="nav-left">
            <div class="dropdown" data-dropdown>
                <div class="dropdown-trigger">
                    <button class="hamburger-button link" data-dropdown-button>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>
                <div class="dropdown-menu information-grid">
                    <div class="dropdown-section">
                        <div class="dropdown-heading">Precious Stones</div>
                        <div class="dropdown-links">
                            <a href="#" class="gemstone">Diamond</a>
                            <a href="#" class="gemstone">Ruby</a>
                            <a href="#" class="gemstone">Sapphire</a>
                            <a href="#" class="gemstone">Emerald</a>
                        </div>
                    </div>
                    <div class="dropdown-section">
                        <div class="dropdown-heading">Semi-Precious Stones</div>
                        <div class="dropdown-links">
                            <a href="#" class="gemstone">Amethyst</a>
                            <a href="#" class="gemstone">Citrine</a>
                            <a href="#" class="gemstone">Moonstone</a>
                            <a href="#" class="gemstone">Opal</a>
                        </div>
                    </div>
                    <div class="dropdown-section">
                        <div class="dropdown-heading">Healing Stones</div>
                        <div class="dropdown-links">
                            <a href="#" class="gemstone">Rose Quartz</a>
                            <a href="#" class="gemstone">Jade</a>
                            <a href="#" class="gemstone">Turquoise</a>
                            <a href="#" class="gemstone">Lapis Lazuli</a>
                        </div>
                    </div>
                    <div class="dropdown-section">
                        <div class="dropdown-heading">Raw Stones</div>
                        <div class="dropdown-links">
                            <a href="#" class="gemstone">Carnelian</a>
                            <a href="#" class="gemstone">Fluorite</a>
                            <a href="#" class="gemstone">Malachite</a>
                            <a href="#" class="gemstone">Tiger's Eye</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="logo-container">
                <a href="/weekopdracht/index.php">
                    <img src="/weekopdracht/assets/photos/logogemstone.JPG" alt="Louisa Gemstones Logo" class="logo">
                </a>
            </div>
            <a href="#" class="link">About Us</a>
        </div>

        <div class="nav-right">
            <a href="/weekopdracht/login.php" class="link user-icon"><i class="bx bx-user"></i></a>
            <div class="cart-dropdown" data-dropdown>
                <button class="link cart-icon" data-dropdown-button>
                    <i class="bx bx-cart"></i>
                </button>
                <div class="cart-popup" id="cart-popup">
                    <div class="cart-header">
                        <h3>Shopping Cart</h3>
                        <button class="close-cart"><i class="bx bx-x"></i></button>
                    </div>
                    <div class="cart-items" id="cart-items">
<?php 
if (!empty($_SESSION['cart'])) {
  foreach( $_SESSION['cart'] as $productid) {

   foreach ($products as $product) {
     if ($product['id'] == $productid) {
       print '<div>' . $product['name'] . '</div>';
       print '<div class="price">' . $product['price'] . '</div>';
    //    print '<img src="' . $product['image'] . '" alt="' . $product['alt'] . '" class="product-image">';
    //    $product_found = true;
     }
   }
  }
 }
?>
                    </div>
                    <div class="cart-footer">
                        <div class="cart-total">
                            <span>Total:</span>
                            <span id="cart-total">€<?php// echo number_format($cartTotal, 2); ?></span>
                        </div>
                        <a href="/weekopdracht/checkout.php" class="checkout-btn" <?php echo (empty($_SESSION['cart']) ? 'style="opacity: 0.5; pointer-events: none;"' : ''); ?>>
                            <i class="bx bx-cart-alt"></i>
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
