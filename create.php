<?php
$todoList = file_get_contents('database.json');
$todoListDecoded = json_decode($todoList, true);

header('content-type: application/json');

$todoListDecoded[] = [
    'title' => $_POST['todo']['title'],
    'done' => false
];

$todoListEncoded = json_encode($todoListDecoded);
echo $todoListEncoded;

file_put_contents('database.json', $todoListEncoded);
?>