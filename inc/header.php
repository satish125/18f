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
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,600,700,800,100italic,200italic,300italic,600italic' rel='stylesheet' />
	<link href="<?php echo BASE_URL; ?>css/bootstrap.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/minerva.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/font-awesome.min.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/dataTables.responsive.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/recallit.css" rel="stylesheet" media="all" />
	
	<?php /* Dependencies */ ?>
	<script src="<?php echo BASE_URL; ?>js/jquery-2.1.3.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/angular.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/minerva.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/d3.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/d3.tip.v0.6.3.js"></script>
	<script src="<?php echo BASE_URL; ?>js/ui-bootstrap-tpls-0.13.0.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/underscore-min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/topojson.v1.min.js"></script>
	
	<?php if (login_check($mysqli) == false) : ?>
	<script src="<?php echo BASE_URL; ?>js/form.js"></script>
	<script src="<?php echo BASE_URL; ?>js/sha512.js"></script>
	<?php endif; ?>
	
	<script src="<?php echo BASE_URL; ?>js/jquery.dataTables.min.js"></script>
	<script src="<?php echo BASE_URL; ?>js/dataTables.responsive.js"></script>
	<script src="<?php echo BASE_URL; ?>js/18f.js"></script>
	
	<?php /* Application JS Files */ ?>
	<script src="<?php echo BASE_URL; ?>app.js"></script>
	<script src="<?php echo BASE_URL; ?>js/services/openFDA.factory.js"></script>
	<script src="<?php echo BASE_URL; ?>js/features/enforcement/openFDA.enforcement.js"></script>
	<script src="<?php echo BASE_URL; ?>js/features/enforcement/openFDA.enforcement.factory.js"></script>
	
	<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body ng-app="openFDAApp">

<?php /* Angular Controllers: Start */ ?>
<div ng-controller="mainCtrl" class="mainctrl">
	<div ng-controller="enforcementCtrl" class="enforcementctrl">
		
		<div class="wrapper container-fluid">
			<div class="wrapperouter">
				<div class="wrapperinner container-fluid">
					
					<?php /* No Script: Start */ ?>
					<noscript>
						<div class="container noscriptnotice" aria-labelledby="javascript-required">
							<div class="row noscriptnotice_inner">
								<div class="col-sm-12">
									You must have JavaScript enabled in order to properly use this site.
									
									<div class="clear"></div>
								</div>
							</div>
							
							<div class="clear"></div>
						</div>
					</noscript>
					<?php /* No Script: End */ ?>
					
					<?php /* Navigation: Start */ ?>
					<nav class="sidebarnavigation" aria-controls="main-navigation">
						<div class="container-fluid navsidebar">
							<div class="row">
								<div class="col-sm-12">
									
									<?php /* Mobile Handle: Start */ ?>
									<div class="mobilehandle" aria-hidden="true">
										<div class="mobilehandlelbl">Menu</div>
										<div class="mobilehandler_inner">
											<span></span>
											<span></span>
											<span></span>
										</div>
									</div>
									<?php /* Mobile Handle: End */ ?>
									
									<?php /* Primary Navigation List: Start */ ?>
									<ul class="prinavlist">
										
										<?php if (basename($_SERVER['PHP_SELF'], '.php') == 'index' ) : ?>
										<?php /* Show Food, Drugs, Devices on only Homepage */ ?>
										<li class="navitem navfdd navfoods active">
											<a href="#" ng-click="selectType('food')" title="View Food Information">
												<img class="bttnicon" src="<?php echo BASE_URL; ?>images/icon_nav_fork_lg.png" alt="Open FDA Foods" />
												<span>Foods</span>
											</a>
											
											<div class="clear"></div>
										</li>
										<li class="navitem navfdd navdrugs">
											<a href="#" ng-click="selectType('drug')" title="View Drug Information">
												<img class="bttnicon" src="<?php echo BASE_URL; ?>images/icon_nav_pill_lg.png" alt="Open FDA Drugs" />
												<span>Drugs</span>
											</a>
											
											<div class="clear"></div>
										</li>
										<li class="navitem navfdd navdevices">
											<a href="#" ng-click="selectType('device')" title="View Device Information">
												<img class="bttnicon" src="<?php echo BASE_URL; ?>images/icon_nav_device_lg.png" alt="Open FDA Devices" />
												<span>Devices</span>
											</a>
											
											<div class="clear"></div>
										</li>
										<?php endif; ?>
										
										<li class="navitem navabout<?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'about' ) ? ' active' : ''); ?>">
											<a href="<?php echo BASE_URL; ?>about" title="View About Page">
												<img class="bttnicon" src="<?php echo BASE_URL; ?>images/icon_nav_lexicon_lg.png" alt="About Open FDA" />
												<span>About</span>
											</a>
											
											<div class="clear"></div>
										</li>
										<li class="navitem navlogin loginlogout<?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'login' ) ? ' active' : ''); ?>">
											
											<?php if (login_check($mysqli) == true) : ?>
											
											<a href="<?php echo BASE_URL; ?>inc/logout" class="logout" title="Log out">
												<img class="bttnicon" src="<?php echo BASE_URL; ?>images/icon_nav_login_lg.png" alt="Open FDA Log Out" />
												<span>Log Out</span>
											</a>
											
											<?php else : ?>
											
											<a href="<?php echo BASE_URL; ?>login" class="login" title="Log In">
												<img class="bttnicon" src="<?php echo BASE_URL; ?>images/icon_nav_login_lg.png" alt="Open FDA Login" />
												<span>Log In</span>
											</a>
											
											<?php endif; ?>
											
											<div class="clear"></div>
										</li>
									</ul>
									<?php /* Primary Navigation List: End */ ?>
									
									<div class="clear"></div>
								</div>
								
								<div class="clear"></div>
							</div>
							
							<div class="clear"></div>
						</div>
						
						<div class="clear"></div>
					</nav>
					<?php /* Navigation: End */ ?>
					
					<?php /* Content Region Wrapper: Start */ ?>
					<div class="contentregionwrapper">
						<div class="contentregionwrapper_inner">
							
							<?php /* Header: Start */ ?>
							<header class="headerregion" aria-labelledby="top-logo">
								<div class="headerlogo">
									<div class="col-sm-12">
										
										<?php /* Logo: Start */ ?>
										<a class="logo" href="<?php echo BASE_URL; ?>" title="RECALL.IT Logo">
											<img src="<?php echo BASE_URL; ?>images/logo_recallit.png" alt="RECALL.IT" />
										</a>
										<?php /* Logo: End */ ?>
										
										<?php /* Supported Header Text: Start */ ?>
										<h5>Food, drug &amp device Recall information<br/>
											for federal health inspectors</h5>
										<?php /* Supported Header Text: End */ ?>
										
										<div class="clear"></div>
									</div>
									
									<div class="clear"></div>
								</div>
								
								<div class="clear"></div>
							</header>
							<?php /* Header: End */ ?>
					