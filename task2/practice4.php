<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <form action="practice4.php" method="post">
    <label for="number">Enter a number to generate a multiplication table of</label>
    <input type="number" name="number" id="number">
    <input type="submit" value="Submit">
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST["number"];
    echo "<table border='1'>";
    echo "<tr>";
    echo "<th></th>";
    for ($i = 1; $i <= $number; $i++) {
      echo "<th>$i</th>";
    }
    echo "</tr>";
    for ($i = 1; $i <= $number; $i++) {
      echo "<tr>";
      echo "<th>$i</th>";
      for ($j = 1; $j <= $number; $j++) {
        echo "<td>" . $i * $j . "</td>";
      }
      echo "</tr>";
    }
    echo "</table>";
  }
  ?>
</body>
</html>
