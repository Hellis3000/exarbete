<!DOCTYPE html>
<html>
<body>

<?php


$mysqli = new mysqli("localhost", "root", "", "hellatronstudios");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT `Author`, `Content` , `date` FROM `articles` WHERE id = (SELECT MAX(`id`) FROM `articles`)";

$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->bind_result($author, $content, $date);
$stmt->fetch();
$stmt->close();

echo "<div class='devblog__articles__info1'>";
echo "<h3 class='devblog_articles__info1__newTitle'>" . $author . "</h3>";
echo "<p>" . $date . "</p>";
echo "<p class='devblog__articles__info1__newContent'>" . $content . "</p>";
echo "</div>";

echo "<div class='devblog__articles__image'>";
echo "</div>";

?>