<?php

include_once 'inc/db_connect.php';
include_once 'inc/functions.php';

// Start Session
sec_session_start();

// Session Status
(login_check($mysqli) == true) ? $logged = 'in' : $logged = 'out';

// Page Title
$pageTitle = 'Welcome to the Open FDA Dashboard';

// Include Header
include_once 'inc/header.php';
?>

<?php /* Page Content (Main Content): Start */ ?>
<section class="secpagecontent">
	<div class="sectionwrapper pagecontent homepageinfo">
		<div class="sectioninside container">
			<div class="row dashboardmain">
				<div class="col-md-12">
					
					<div ng-controller="mainCtrl">
						<mv-header mv-title="{{title}}"></mv-header>
						<div ng-controller="enforcementCtrl">
							<mv-body mv-cols="6">
								<mv-id-box mv-size="3x4" mv-title="{{mapLabel}}">
									<mv-chart mv-data="mapData" mv-options="mapOptions"></mv-chart>
								</mv-id-box>
								<mv-id-box mv-size="2x2" mv-title="{{chartLabel}}">
									<mv-chart mv-data="chartData" mv-options="chartOptions"></mv-chart>
								</mv-id-box>
								<mv-any-num mv-size="1x2" mv-title="{{statusLabel}}" mv-data="statusData"></mv-any-num>

								<div class="buttonContainer pull-right">
									<span>Drug Classification: </span>
									<button class="btn btn-primary" ng-click="selectClass('Class I')">Class I</button>
									<button class="btn btn-primary" ng-click="selectClass('Class II')">Class II</button>
									<button class="btn btn-primary" ng-click="selectClass('Class III')">Class III</button>
								</div>
							</mv-body>
						</div>
					</div>
					
					<div class="clear"></div>
				</div>
				
				<div class="clear"></div>
			</div>
			
			<div class="clear"></div>
		</div>
		
		<div class="clear"></div>
	</div>
</section>
<?php /* Page Content (Main Content): End */ ?>

<?php include_once 'inc/footer.php'; ?>