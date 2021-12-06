<html>
    <head> 
        <?php
$name = $_POST ["name"];
$mail = $_POST ["email"];
$phone = $_POST ["phone"];
$message = $_POST ["message"];
 
$conteudo="
Nome: $name
Email: $mail
Telemovel: $phone
Mensagem: $message




";

$archivo = fopen("dados/$nome.txt", "w");
fwrite($archivo,$conteudo);

?>
</head>

