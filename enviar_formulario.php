<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $interes = $_POST['interes'];
    $comentarios = $_POST['comentarios'];

    // Validate email
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo "$correo is not a valid email address";
        exit;
    }

    // Correo al que se enviará el formulario
    $destinatario = "enactova@gmail.com";

    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto desde el sitio web";

    // Construir el cuerpo del correo
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo electrónico: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Interés en: $interes\n";
    $cuerpo .= "Comentarios: $comentarios\n";

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Specify your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com';  // SMTP username
        $mail->Password = 'your-password';  // SMTP password
        $mail->SMTPSecure = 'ssl';  // Use SSL encryption
        $mail->Port = 465;  // SMTP SSL port

        //Recipients
        $mail->setFrom($correo, $nombre);
        $mail->addAddress($destinatario);

        //Content
        $mail->isHTML(false);  // Set email format to HTML
        $mail->Subject = $asunto;
        $mail->Body    = $cuerpo;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
?>