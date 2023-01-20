<?php
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "utilisateurs";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, nom, prenom, email FROM utilisateurs";
$result = $conn->query($sql);

$outp = array();
while($row = $result->fetch_assoc()) {
    $outp[] = $row;
}

echo json_encode($outp);

$conn->close();
?>
