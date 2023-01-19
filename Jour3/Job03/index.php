<!DOCTYPE html>
<html>
<head>
  <script src="script.js"></script>
</head>
<body>
<div id="taquin">
  <?php
    $images = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png", "image9.png"];
    shuffle($images);
    for ($i = 0; $i < 9; $i++) {
      echo "<div class='case'>";
      if ($images[$i] != "image9.png") {
        echo "<img src='$images[$i]'>";
      }
      echo "</div>";
    }
  ?>
</div>

</body>
</html>
