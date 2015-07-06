#RECALL.IT INSTALLATION

The Agile BPA prototype was developed using PHP and MySQL for the backend functionality. PHP traditionally runs natively in a LAMP stack, but can be ran in both Windows and Mac operating systems as well.

###Installation Instructions

Since the prototype was developed using PHP, the site can be ran using LAMP, WAMP or MAMP stacks. All stacks run Apache, MySQL and PHP. The URLs for the application are accessible using rewritten URLs - this feature allows for the removal of the extension from the URL. An example is http://mysite.com/about.php, which, with mod_rewrite enabled, would be http://mysite.com/about. To support this addition (implemented in .htaccess), mod_rewrite should be enabled on the server.

Next, open MySQL, and create a database with the desired name. Then import the openfda.sql database dump found in the ROOT directory into the newly created database.

Once one of the mentioned environments (LAMP, WAMP or MAMP) has been correctly set up, browse to and open ROOT/inc/config.php. Inside config.php, modify the options for your database connection as well as specify your BASE_URL path. The BASE_URL path should be your domain name. Once your modifications to config.php have been saved, load the application.
