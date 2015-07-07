<?php

// Database Login Details
define("HOST", "demo.ntconcepts.com");
define("USER", "root");
define("PASSWORD", "r00t");
define("DATABASE", "openfda");

define("CAN_REGISTER", "any");
define("DEFAULT_ROLE", "member");

// Set to true for site to use https
define("SECURE", false);

// Site path without protocol. Protocol determined by SECURE
define("BASE_URL_PATH", "//demo.ntconcepts.com/recallit/");

// Condition to specify BASE_URL constant
if(SECURE == true){
	define("BASE_URL", "https:" . BASE_URL_PATH);
} else {
	define("BASE_URL", "http:" . BASE_URL_PATH);
}
