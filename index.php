<?php
include("includes/header.php");
require_once("products/product_array.php");
?>
<?php
  if (!empty ($_POST)) {
  echo "hier komen de post data";

  print_r($_POST);
  echo "<br>";
  $_SESSION['cart'][] = $_POST['productId'];
  echo "<br>";
  print_r($_SESSION);
  
}
?>
<div class="container">
<?php
include("includes/sidebar.php");
?>

  <div class="product-list" style="flex-direction: column;">
  <?php
    foreach ($products as $product) {
      echo '<form method="POST" class="product" data-stone-type="' . $product['type'] . '" data-color="' . $product['color'] . '">';
      echo '<img src="' . $product['image'] . '" alt="' . $product['alt'] . '">';
      echo '<p>Price: &euro;' . $product['price'] . '</p>';
      echo '<text>' . $product['name'] . '</text>';
      echo '<input type="hidden" name="productId" value="' . $product['id'] . '">';
      echo '<button type="submit" name="addProducts" class="shop-button"><i class="bx bx-cart"></i></button>';
      echo '<a href="detail_product.php?id=' . $product['id'] . '">Lees meer</a>';
      echo '</form>';
    }
  ?>


  </div>
</div>


<?php include("includes/footer.php"); ?>
