<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

// Данные
$name = $data['name'];
$tel = $data['tel'];
$msg = $data['msg'];

// Контент письма
$title = 'Заявка с сайта'; // Название письма
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Телефон: <strong>'.$tel.'</strong></p>'.
        '<p>Сообщение: <strong>'.$msg.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth = true;

  // Настройки почты отправителя (ваша почта Gmail)
  $mail->Host       = 'smtp.gmail.com';
  $mail->Username   = 'lorddragon7215@gmail.com'; // Ваша почта Gmail
  $mail->Password   = 'gage iuev aeyc bibx '; // Пароль от вашей почты Gmail
  $mail->SMTPSecure = 'tls';
  $mail->Port       = 587;

  $mail->setFrom('lorddragon7215@gmail.com', 'Заявка с сайта'); // Адрес вашей почты Gmail и имя отправителя

  // Получатель письма (ваша почта Gmail)
  $mail->addAddress('nurysovbekzan@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body    = $body;

  $mail->send();

  // Сообщение об успешной отправке
  echo ('Сообщение отправлено успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено! Причина ошибки: ' . $mail->ErrorInfo);
}
?>
