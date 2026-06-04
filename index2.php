<?php
function clean($data) {
    return htmlspecialchars(trim($data));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = clean($_POST["name"] ?? "");
    $email = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);
    $price = (int)($_POST["product"] ?? 0);
    $quantity = (int)($_POST["quantity"] ?? 0);

    if (!$email) {
        echo "Невірний email";
        exit;
    }

    if ($quantity < 1 || $quantity > 100) {
        echo "Кількість має бути 1-100";
        exit;
    }

    $total = $price * $quantity;

    echo "Замовлення прийнято<br>";
    echo "Сума: " . $total . " грн";
}
