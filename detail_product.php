<?php
include("includes/header.php");
require_once("products/product_array.php");
?>

<div class="container">

  <div class="product-detail" style="display: flex; flex-direction: column; align-items: center;">

    <?php
    $product_found = false;
    $id = $_GET['id'];

    foreach ($products as $product) {
      if ($product['id'] == $id) {
        print '<h1>' . $product['name'] . '</h1>';
        print '<div class="price">' . $product['price'] . '</div>';
        print '<img src="' . $product['image'] . '" alt="' . $product['alt'] . '" class="product-image">';
        $product_found = true;
      }
    }
    if ($product_found == false) {
      print '<p>Product not found</p>';
    }

    ?>

  </div>
</div>

<?php include("includes/footer.php"); ?>
