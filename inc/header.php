<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<meta content="policyref=http://www.doi.gov/w3c/p3p.xml" http-equiv="P3P">
	<meta content="no-cache" http-equiv="Cache-control">
	<meta content="This is the page and site description that needs to be added. This is a generic description only." name="description">
	<meta content="FDA,Open,Prescription,Drug,Biological,Products,Labeling,Approval,Safety,Effectiveness" name="keywords">
	<meta content="U.S. Food and Drug Administration" name="author">
	<meta content="noindex,nofollow" name="robots">
	
	<title><?php echo $pageTitle; ?></title>
	
	<link href="<?php echo BASE_URL; ?>favicon.ico" rel="shortcut icon" />
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,600italic' rel='stylesheet' />
	<link href="<?php echo BASE_URL; ?>css/styles.css" rel="stylesheet" media="all" />
	
	<script src="<?php echo BASE_URL; ?>js/jquery-2.1.3.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/18f.js"></script>
	
	<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>

<div class="wrapper">
	<div class="wrapperouter">
		<div class="wrapperinner">
			
			<?php /* No Script: Start */ ?>
			<noscript>
				<div class="noscriptnotice">
					<div class="noscriptnotice_inner">
						You must have JavaScript enabled in order to properly use this site.
					</div>
					
					<div class="clear"></div>
				</div>
			</noscript>
			<?php /* No Script: End */ ?>
			
			<?php /* Page Header: Start */ ?>
			<header class="secpageheader">
				<div class="sectionwrapper pageheader">
					
					<div class="sectioninside">
						
						<?php /* Header Logo: Start */ ?>
						<div class="headerlogo">
							<a href="<?php echo BASE_URL; ?>">
								<img src="<?php echo BASE_URL; ?>images/logo_ntc.png" alt="Next Tier Concepts" />
							</a>
						</div>
						<?php /* Header Logo: End */ ?>
						
						<?php /* Header User Links: Start */ ?>
						<nav class="prinavigation">
							<ul class="headerlinkslist">
								
								<li <?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'index' ) ? 'class="active"' : ''); ?>>
									<a href="<?php echo BASE_URL; ?>">Home</a>
								</li>
								<li <?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'about' ) ? 'class="active"' : ''); ?>>
									<a href="<?php echo BASE_URL; ?>about">About</a>
								</li>
								
							</ul>
						</nav>
						<?php /* Header User Links: End */ ?>
						
						<div class="clear"></div>
					</div>
					
					<div class="clear"></div>
				</div>
			</header>
			<?php /* Page Header: Start */ ?>
