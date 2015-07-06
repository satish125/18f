#RECALL.IT 

The prototype was developed using PHP and MySQL, which works natively in a LAMP environment. 

###Installation Instructions

Since the prototype was developed using PHP, the site can be ran using LAMP, WAMP or MAMP, all of which uses Apache, MySQL and PHP. The urls for the application are accessed using rewritten urls. To support this code, found in .htaccess, mod_rewrite should be enabled through Apache.

Next, open MySQL, create a database, and import the databasse dump found in the ROOT direction named openfda.sql into the newly created database.

Once one of the mentioned environments (LAMP, WAMP or MAMP) has been correctly set up, browse to and open ROOT/inc/config.php. Inside config.php, modify the options for your database connection as well as specify your BASE_URL path. The BASE_URL path should be your domain name.
