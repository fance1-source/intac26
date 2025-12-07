<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'phpmailer/phpmailer/src/Exception.php';
require 'phpmailer/phpmailer/src/PHPMailer.php';
require 'phpmailer/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName  = htmlspecialchars($_POST['lastName']);
    $email     = htmlspecialchars($_POST['email']);
    $phone     = htmlspecialchars($_POST['phone']);
    $subject   = htmlspecialchars($_POST['subject']);
    $message   = htmlspecialchars($_POST['message']);
    $newsletter = isset($_POST['newsletter']) ? 'Yes' : 'No';

    $mail = new PHPMailer(true);

    try {
        // --- SMTP Configuration for SendGrid ---
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey'; // this stays literally "apikey"
        $mail->Password = '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'; // replace with your real key
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // --- Sender and Recipient ---
        $mail->setFrom('fharhaan987@gmail.com', 'INTAC Contact Form'); // verified sender
        $mail->addAddress('fharhaan987@gmail.com'); // where you receive messages
        $mail->addReplyTo($email, "$firstName $lastName");

        // --- Email Content ---
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Message: $subject";
        $mail->Body = "
            <h3>New Message from INTAC Contact Form</h3>
            <p><strong>Name:</strong> $firstName $lastName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Newsletter Subscription:</strong> $newsletter</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        // --- Send the email ---
        $mail->send();

        // --- Success redirect ---
        echo "<script>window.location.href='contact.html?sent=1';</script>";

    } catch (Exception $e) {
        // --- Error handling ---
        echo "<script>alert('Message could not be sent. Mailer Error: " . addslashes($mail->ErrorInfo) . "'); window.history.back();</script>";
    }
}
?>
