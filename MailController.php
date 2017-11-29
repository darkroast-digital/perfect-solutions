<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

$params = $request->getParams();
$mail = new PHPMailer;

$name = $params['name'];
$email = $params['email'];
$phone = $params['phone'];
$message = $params['message'];

$mail->setFrom($email, $name);
$mail->addAddress('mattsyring@hotmail.com', 'Perfect Solutions Ltd.');
$mail->addReplyTo('mattsyring@hotmail.com', 'Perfect Solutions Ltd.');
$mail->ReutrnPath='mattsyring@hotmail.com';

$mail->isHTML(true);

$body = 'Name: ' . $name . "<br/>" .
        'Email: ' . $email . "<br/>" .
        'Phone: ' . $phone . "<br/>" .
        'Message: ' . $message;

$mail->Subject = "New message from Perfect Solutions website!";
$mail->Body    = $body;
$mail->AltBody = $body;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Success!';
}