<?php

$regleNomPrenom = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regleMessage = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/";

if((isset($_POST['nom']))&&(preg_match($regleNomPrenom, $_POST['nom']))){
    $nom = $_POST['nom'];
}
if((isset($_POST['email']))&&(preg_match($regleEmail, $_POST['email']))){
    $email = $_POST['email'];
}
if((isset($_POST['message']))&&(preg_match($regleMessage, $_POST['message']))){
    $message = $_POST['message'];
}
if(($nom)&&($email)&&($message)){
    $res = array('validation' => "Email envoyé");
    echo json_encode($res);
    mail("wcpdduddstfm@midiharmonica.com", "Bonjour, $nom", $message, "From: $email");
}

?>