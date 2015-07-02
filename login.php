<?php

include_once 'inc/db_connect.php';
include_once 'inc/functions.php';

// Start Session
sec_session_start();

// Session Status
(login_check($mysqli) == true) ? $logged = 'in' : $logged = 'out';

// Page Title
$pageTitle = 'Log In to the RECALL.IT Dashboard';

// Include Header
include_once 'inc/header.php';
?>

<?php /* Main Content: Start */ ?>
<section class="contentregion" aria-labelledby="main-body">
	<div class="container-fluid contentmain">
		<div class="row">
			<div class="col-sm-12">
				
				<?php /* Main Info: Start */ ?>
				<section class="maininforegion" aria-labelledby="main-content-data">
					<div class="container-fluid dataregion_main pagecopy">
						<div class="row">
							<div class="col-sm-12">
								
								<h1>Log In to RECALL.IT</h1>
								
								<div class="requirednoticetxt" style="">
									Fields marked with <span class="req">*</span> are required.
								</div>
								
								<?php
									parse_str($_SERVER['QUERY_STRING']);
									if ($_SERVER['QUERY_STRING'] == ''){
										// Null
									} else {
										if ($notice == 'loginerror'){
											echo '
												<div class="loginnotice">
													<p class="bg-danger notice error">
														<span class="notice_inner">
															There was a problem with logging in. Please check your email address and password and try again.
														</span>
													</p>
													
													<div class="clear"></div>
												</div>';
										}
									}
								?>
								
								<?php /* Login Form: Start */ ?>
								<div class="loginform">
									<div class="loginform_inner">
										<form action="<?php echo BASE_URL; ?>inc/process_login" method="POST" name="login_form">
											<div class="form-group">
												<label for="email" class="control-label hploginlbl">
													Email Address
													<span class="req">*
														<span class="sr-only">Required</span>
													</span>
												</label>
												<div class="formfld icon email">
													<input type="text" name="email" id="email" class="form-control text required" value="" placeholder="Email Address" required tabindex="4" />
												</div>
											</div>
											<div class="form-group">
												<label for="Password" class="control-label hploginlbl">
													Password
													<span class="req">*
														<span class="sr-only">Required</span>
													</span>
												</label>
												<div class="formfld icon password">
													<input type="password" name="password" id="Password" class="form-control text password required" value="" placeholder="Enter your password" tabindex="5" />
												</div>
											</div>
											
											<button id="loginbutton" class="btn btn-primary button" onclick="formhash(this.form, this.form.password);" tabindex="6">
												<span>Log In</span>
											</button>
										</form>
										
										<div class="clear"></div>
									</div>
									
									<div class="clear"></div>
								</div>
								<?php /* Login Form: End */ ?>
								
								<div class="clear"></div>
							</div>
							
							<div class="clear"></div>
						</div>
						
						<div class="clear"></div>
					</div>
					
					<div class="clear"></div>
				</section>
				<?php /* Main Info: End */ ?>
				
				<div class="clear"></div>
			</div>
			
			<div class="clear"></div>
		</div>
		
		<div class="clear"></div>
	</div>
</section>
<?php /* Main Content: End */ ?>
