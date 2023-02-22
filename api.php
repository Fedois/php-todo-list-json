<?php
$todoList = file_get_contents('database.json');
var_dump($todoList);
$todoListDecoded = json_decode($todoList, true);
var_dump($todoListDecoded)
?>