<?php

include_once 'inc/db_connect.php';
include_once 'inc/functions.php';

// Start Session
sec_session_start();

// Session Status
(login_check($mysqli) == true) ? $logged = 'in' : $logged = 'out';

// Page Title
$pageTitle = 'About the RECALL.IT Dashboard';

// Include Header
include_once 'inc/header.php';
?>

<?php /* Main Content: Start */ ?>
<section class="contentregion" aria-labelledby="main-body">
	<div class="container contentmain">
		<div class="row">
			<div class="col-sm-12">
				
				<?php /* Main Info: Start */ ?>
				<section class="maininforegion" aria-labelledby="main-content-data">
					<div class="container dataregion_main">
						<div class="row">
							<div class="col-sm-12">
								
								<h1>About the RECALL.IT Dashboard</h1>
								
								<p>This is about us text. Please enter it here so it makes sense. It is always good to have great text so it makes sense and flows well on the page. If you don't like good text, then you may not have successful application. Please start writing your content now. This is about us text. Please enter it here so it makes sense. It is always good to have great text so it makes sense and flows well on the page. If you don't like good text, then you may not have successful application. Please start writing your content now. This is about us text. Please enter it here so it makes sense. It is always good to have great text so it makes sense and flows well on the page. If you don't like good text, then you may not have successful application. Please start writing your content now.</p>
								
								<h2>This is about us text.</h2>
								
								<p>This is about us text. Please enter it here so it makes sense. It is always good to have great text so it makes sense and flows well on the page. If you don't like good text, then you may not have successful application. Please start writing your content now.</p>
								
								<div class="clear"></div>
							</div>
						</div>
					</div>
				</section>
				<?php /* Main Info: End */ ?>
				
				<div class="clear"></div>
			</div>
		</div>
	</div>
</section>
<?php /* Main Content: End */ ?>
