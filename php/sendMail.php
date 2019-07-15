<?php 
	if(isset($_POST['submit'])){
	    $to = "comercial@jmgsolutions.com.br"; // this is your Email address
	    $from = $_POST['email']; // this is the sender's Email address
	    $first_name = $_POST['name'];
	    $subject = "Envio pela Form";
	    $subject2 = "JMG Solutions";
	    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['text'];
	    $message2 = "Aqui está uma copia da sua mensagem " . $first_name . "\n\n" . $_POST['text'];
	    $headers = "From:" . $from;
	    $headers2 = "From:" . $to;
	    mail($to,$subject,$message,$headers);
	    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	    
	    // You can also use header('Location: thank_you.php'); to redirect to another page.
	    echo '<script language="javascript">';
		echo 'alert("Email enviado. Agradecemos o contato. Iremos entrar em contato em breve.")';
		echo '</script>';
	}
?>