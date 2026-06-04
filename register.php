<?php
$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $login = $_POST["login"] ?? "";
    $password = $_POST["password"] ?? "";
    $confirm = $_POST["confirm"] ?? "";

    if (!filter_var($login, FILTER_VALIDATE_REGEXP, [
        "options" => ["regexp" => "/^[a-zA-Z0-9]+$/"]
    ])) {
        $message = "Невірний логін";
    } elseif ($password !== $confirm) {
        $message = "Паролі не співпадають";
    } else {
        $message = "Реєстрація успішна";
    }
}

echo $message;
