<html>
<body>

<?php

$to = "kuba__koziol@op.pl";
$subject = $_POST["temat"];
$txt = $_POST["wiadomosc"];
$headers = "From: ". $_POST["email"] . "\r\n" .
"CC: kuba__koziol@op.p";

if(mail($to,$subject,$txt,$headers))
{
	echo "Wiadomość została wysłana !";
}
else
{
	echo "Nie udało się wysłać wiadomości !";
}







?>
<body>

</html>