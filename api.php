<?php
$todoList = file_get_contents('database.json');
$todoListDecoded = json_decode($todoList, true);

// $response = [
//     'success' => true,
//     'message' => 'Ok',
//     'code' => 2003,
// ];

// $jsonResponse = json_encode($response);

// header('Content-Type: application/json');

// echo $jsonResponse;
?>