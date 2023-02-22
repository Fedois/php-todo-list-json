<?php
$todoList = file_get_contents('database.json');
$todoListDecoded = json_decode($todoList, true);

// var_dump($todoList);

$response = [
    'success' => true,
    'message' => 'Ok',
    'code' => 200,
    'data' => $todoListDecoded
];

$todoListEncode = json_encode($response);
header('Content-Type: application/json');

echo $todoListEncode;
?>