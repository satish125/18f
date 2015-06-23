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
	<link href="<?php echo BASE_URL; ?>css/bootstrap.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/minerva.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/font-awesome.min.css" rel="stylesheet" media="all" />
	<link href="<?php echo BASE_URL; ?>css/styles.css" rel="stylesheet" media="all" />
	
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
	
	<script src="<?php echo BASE_URL; ?>js/18f.js"></script>
	
	<?php /* Application JS Files */ ?>
	<script src="<?php echo BASE_URL; ?>app.js"></script>
	<script src="<?php echo BASE_URL; ?>js/services/openFDA.factory.js"></script>
	<script src="<?php echo BASE_URL; ?>js/features/enforcement/openFDA.enforcement.js"></script>
	<script src="<?php echo BASE_URL; ?>js/features/enforcement/openFDA.enforcement.factory.js"></script>
	
	<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body ng-app="openFDAApp">

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
					
					<div class="sectioninside container">
						<div class="row">
							<div class="col-md-12">
						
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
										
										<?php /* Login/Logout: Start */ ?>
										<li class="loginlogout">
											
											<?php if (login_check($mysqli) == true) : ?>
											
											<a href="<?php echo BASE_URL; ?>inc/logout">Logout</a>
											
											<?php else : ?>
											
											<span class="loginparent">Login</span>
											
											<div class="logindropdown">

												<h3>Login Form</h3>
												
												<?php
													if (isset($_GET['error'])) {
														echo '
															<div class="notice error">
																<div class="notice_inner">
																	Error Logging In!
																</div>
															</div>';
													}
												?> 
												
												<?php /* Login Form: Start */ ?>
												<div class="formholder">
													<div class="formholder_inner">
														
														<form action="<?php echo BASE_URL; ?>inc/process_login" method="POST" name="login_form">
															
															<?php /* Username/Email: Start */ ?>
															<div class="formrow">
																<label for="email" class="hploginlbl">Email Address</label>
																<div class="formfld icon email">
																	<input type="text" name="email" id="email" class="text" value="" placeholder="Email Address" />
																	
																	<div class="clear"></div>
																</div>
																
																<div class="clear"></div>
															</div>
															<?php /* Username/Email: End */ ?>
															
															<?php /* Password: Start */ ?>
															<div class="formrow passwordrow">
																<label for="Password" class="hploginlbl">Password</label>
																<div class="formfld">
																	<input type="password" name="password" id="Password" class="text password" value="" placeholder="Enter your password" />
																	
																	<div class="clear"></div>
																</div>
																
																<div class="clear"></div>
															</div>
															<?php /* Password: End */ ?>
															
															<?php /* Sign In: Start */ ?>
															<div class="formrow buttonrow">
																<div class="formfld">
																	<button id="loginbutton" class="button" onclick="formhash(this.form, this.form.password);">
																		<span>Log In</span>
																	</button>
																</div>
																
																<div class="clear"></div>
															</div>
															<?php /* Sign In: End */ ?>
															
														</form>
														
														<div class="clear"></div>
													</div>
													
													<div class="clear"></div>
												</div>
												<?php /* Login Form: End */ ?>
												
											</div>
											
											<?php endif; ?>
											
										</li>
										<?php /* Login/Logout: End */ ?>
										
									</ul>
								</nav>
								<?php /* Header User Links: End */ ?>
								
								<div class="clear"></div>
							</div>
							
							<div class="clear"></div>
						</div>
						
						<div class="clear"></div>
					</div>
					
					<div class="clear"></div>
				</div>
			</header>
			<?php /* Page Header: Start */ ?>
