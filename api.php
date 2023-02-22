<?php
$todoList = file_get_contents('database.json');
$todoListDecoded = json_decode($todoList, true);

var_dump($todoList);
?>