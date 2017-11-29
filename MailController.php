<?php
require 'vendor/autoload.php';
use Mailgun\Mailgun;

$mg = Mailgun::create('key-1715c074f053673f6e3c4c79e8595390');

# Now, compose and send your message.
# $mg->messages()->send($domain, $params);
$mg->messages()->send('sandbox54da33a8b2644faebc547af411755bc1.mailgun.org', [
  'from'    => $_POST['email'],
  'to'      => 'kim@darkroast.co',
  'subject' => 'New message from Perfect Solutions LTD',
  'html'    => "Name: " . $_POST['name'] . "<br/>" .
                "Email: " . $_POST['email'] . "<br/>" .
                "Phone: " . $_POST['phone'] . "<br/>" .
                "Message: " . $_POST['message']
]);