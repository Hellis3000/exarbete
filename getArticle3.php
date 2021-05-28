<!DOCTYPE html>
<html>
<body>

<?php


$mysqli = new mysqli("localhost", "root", "", "hellatronstudios");
if($mysqli->connect_error) {
  exit('Could not connect');
}


$sql = "SELECT `Author`, `summary` , `date` FROM `articles` WHERE id = (SELECT MAX(`id`)-2 FROM `articles`)";

$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($author, $summary, $date);
$stmt->fetch();
$stmt->close();



echo "<h3 class='sideBar__gridArticles__item3__newTitle'>" . $author . "</h3>";
echo "<p>" . $date . "</p>";
echo "<p class='sideBar__gridArticles__item3__newsummary'>" . $summary . "</p>";


?>