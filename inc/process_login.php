<?php
include_once 'db_connect.php';
include_once 'functions.php';

// Our custom secure way of starting a PHP session.
sec_session_start();
 
if (isset($_POST['email'], $_POST['p'])) {
    $email = $_POST['email'];
	
	// The hashed password.
    $password = $_POST['p'];
	
    if (login($email, $password, $mysqli) == true) {
        
		// Login success 
        header('Location: ../index?notice=loggedin');
    } else {
        
		// Login failed 
        header('Location: ../login?notice=loginerror');
    }
} else {
    
	// The correct POST variables were not sent to this page.
    echo 'Invalid Request';
}