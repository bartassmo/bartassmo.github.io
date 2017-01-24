<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$odkogo = "";
$dokogo = "bartlomiej.smolucha@gmail.com";
$tytul = "Wiadomość z Portfolio";

$wiadomosc = "";
$wiadomosc .= "Imie i nazwisko: " . $name . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

$naglowek = "";
$naglowek .= "Od:" . $odkogo . " \n";
$naglowek .= "Content-Type:text/plain;charset=utf-8";

$sukces = mail($dokogo, $tytul, $wiadomosc, $naglowek);

?>