<?php
$todoList = file_get_contents('database.json');
$todoListDecoded = json_decode($todoList, true);
echo $todoList;

$newTodo = [
    'title' => $_POST['Todo'],
    'done' => false
];
$todoDecoded[] = $newTodo;

$todoListEncoded = json_encode($todoDecoded);

file_put_contents('database.json', $todoListEncoded);
header('Content-Type: application/json');

echo $todoListEncoded;
?>