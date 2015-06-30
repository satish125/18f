<?php /* Angular Controllers: Start */ ?>
	<div ng-controller="mainCtrl">
		<div ng-controller="enforcementCtrl">

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
					<!--tabset>
						<tab heading="Dashboard"-->
							<?php /* Dashboard: Start */ ?>
							<div class="row dashboardmain">
								<div class="col-md-12">
									<mv-body mv-cols="4">
										<div class="titleLabel">{{titleLabel}}</div>
										<div>
											<button type="button" class="btn btn-default" ng-click="selectClass('Class I')">Class I</button>
											<button type="button" class="btn btn-default" ng-click="selectClass('Class II')">Class II</button>
											<button type="button" class="btn btn-default" ng-click="selectClass('Class III')">Class III</button>
										</div>
										<mv-group mv-size="1x2"></mv-group>
										<mv-any-num mv-size="1x2" mv-data="statusData" mv-style="{'font-size':'1.1em'}"></mv-any-num>
										<!--mv-id-box mv-size="1x3" mv-title="Classification Description" mv-body-id="infoBox">{{classInfo}}</mv-id-box>
										<mv-id-box mv-size="1x1" mv-title="Today's Critical Recalls" mv-body-id="recallBox"><pre>{{recallInfo}}</pre></mv-id-box-->
										<tabset>
											<tab heading="US Map">
												<mv-id-box mv-size="3x4" mv-title="{{mapLabel}}">
													<mv-chart mv-data="mapData" mv-options="mapOptions"></mv-chart>
												</mv-id-box>
											</tab>
											<tab heading="Bar Chart">
												<mv-id-box mv-size="3x4" mv-title="{{chartLabel}}">
													<mv-chart mv-data="chartData" mv-options="chartOptions"></mv-chart>
												</mv-id-box>
											</tab>
										</tabset>
										<div class="css3gradient legendbar"><span class="legendnumber">0</span><span class="pull-right legendnumber">100</span></div>
									</mv-body>
									
									<div class="clear"></div>
								</div>
									
								<div class="clear"></div>
							</div>
							<?php /* Dashboard: End */ ?>
						<!--/tab>	
						<tab heading="Table">
							<?php /* Data Grid: Start */ ?>-->
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
						<!--/tab>
					</tabset-->
					<div class="clear"></div>	
				</div>
				
				<div class="clear"></div>
			</div>
		</section>
		<?php /* Page Content (Main Content): End */ ?>

		<?php include_once 'inc/footer.php'; ?>
	</div>
</div>
<?php /* Angular Controllers: End */ ?>