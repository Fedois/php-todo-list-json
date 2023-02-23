<?php
$todoList = file_get_contents('database.json');
$todoListDecoded = json_decode($todoList, true);

header('content-type: application/json');

$todoListDecoded[] = [
    'title' => $_POST['todocreated']['title'],
    'done' => false
];

$todoListEncoded = json_encode($todoListDecoded);
echo $todoListEncoded;

header('Content-Type: application/json');

file_put_contents('database.json', $todoListEncoded);
?>