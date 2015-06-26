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
			
			<?php /* Dashboard: Start */ ?>
			<div class="row dashboardmain">
				<div class="col-md-12">
					
					<div ng-controller="mainCtrl">
						<div ng-controller="enforcementCtrl">
							<mv-header mv-title="{{title}}">
								<button class="btn btn-default btn-sm" ng-click="selectType('drug')">Drugs</button>
								<button class="btn btn-default btn-sm" ng-click="selectType('device')">Devices</button>
								<button class="btn btn-default btn-sm" ng-click="selectType('food')">Foods</button>
							</mv-header>
							<mv-body mv-cols="6">
								<div class="classButtons">
									<button class="btn btn-primary" ng-click="selectClass('Class I')">Class I</button>
									<button class="btn btn-primary" ng-click="selectClass('Class II')">Class II</button>
									<button class="btn btn-primary" ng-click="selectClass('Class III')">Class III</button>
								</div>
								<mv-any-num mv-size="1x3" mv-title="{{statusLabel}}" mv-data="statusData" mv-style="{'font-size':'1.1em'}"></mv-any-num>
								<mv-id-box mv-size="1x3" mv-title="Classification Description" mv-body-id="infoBox">{{classInfo}}</mv-id-box>
								<mv-id-box mv-size="3x4" mv-title="{{mapLabel}}">
									<mv-chart mv-data="mapData" mv-options="mapOptions"></mv-chart>
								</mv-id-box>
								<mv-id-box mv-size="3x2" mv-title="{{chartLabel}}">
									<mv-chart mv-data="chartData" mv-options="chartOptions"></mv-chart>
								</mv-id-box>
							</mv-body>
						</div>
					</div>
					
					<div class="clear"></div>
				</div>
					
				<div class="clear"></div>
			</div>
			<?php /* Dashboard: End */ ?>
			
			<?php /* Data Grid: Start */ ?>
			<div class="row datagridmain">
				<div class="col-md-12">
					
					<table id="datagridinfo" class="datagrid drugs state" cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>Recall #</th>
								<th>Reason for Recall</th>
								<th>Status</th>
								<th>Quantity</th>
								<th>Initiation Date</th>
								<th>State</th>
							</tr>
						</thead>
						
						<tbody></tbody>
					</table>

				</div>
			</div>
			<?php /* Data Grid: End */ ?>
			
			<div class="clear"></div>
		</div>
		
		<div class="clear"></div>
	</div>
</section>
<?php /* Page Content (Main Content): End */ ?>

<?php include_once 'inc/footer.php'; ?>