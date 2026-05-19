<?php
// Варіант 1 Локалізований вивід дати та часу з cookie

// Масив доступних мов
$languages = [
    "uk" => "Українська",
    "en" => "English",
    "de" => "Deutsch",
    "fr" => "Français"
];

$lang = "uk";

if (isset($_COOKIE["language"]) && array_key_exists($_COOKIE["language"], $languages)) {
    $lang = $_COOKIE["language"];
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["language"])) {
    $selectedLang = $_POST["language"];

    if (array_key_exists($selectedLang, $languages)) {
        $lang = $selectedLang;

        setcookie("language", $lang, time() + 60 * 60 * 24 * 30);
    }
}

$date = new DateTime();

switch ($lang) {
    case "en":
        $formattedDate = $date->format("F d, Y H:i:s");
        break;
    case "de":
        $formattedDate = $date->format("d.m.Y H:i:s");
        break;
    case "fr":
        $formattedDate = $date->format("d/m/Y H:i:s");
        break;
    default:
        $formattedDate = $date->format("d.m.Y H:i:s");
}

$userIP = $_SERVER["REMOTE_ADDR"];
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Варіант 1</title>
</head>
<body>

<h1>Локалізований вивід дати та часу</h1>

<form method="post">
    <label for="language">Оберіть мову:</label>

    <select name="language" id="language">
        <?php foreach ($languages as $code => $name): ?>
            <option value="<?php echo $code; ?>" <?php if ($lang == $code) echo "selected"; ?>>
                <?php echo $name; ?>
            </option>
        <?php endforeach; ?>
    </select>

    <button type="submit">Зберегти</button>
</form>

<hr>

<p><b>Обрана мова:</b> <?php echo $languages[$lang]; ?></p>

<p><b>Дата і час:</b> <?php echo $formattedDate; ?></p>
<p><b>IP користувача:</b> <?php echo $userIP; ?></p>

</body>
</html>
