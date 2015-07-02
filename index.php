
<?php

include_once 'inc/db_connect.php';
include_once 'inc/functions.php';

// Start Session
sec_session_start();

// Session Status
(login_check($mysqli) == true) ? $logged = 'in' : $logged = 'out';

// Page Title
$pageTitle = 'Welcome to the RECALL.IT Dashboard';

// Include Header
include_once 'inc/header.php';
?>

<?php /* Main Content: Start */ ?>
<section class="contentregion" aria-labelledby="main-body">
	<div class="container-fluid contentmain">
		<div class="row">
			
			<?php /* Loading: Start */ ?>
			<div class="col-sm-12 col-sm-offset-5" ng-show="pageState.isLoading">
				<div style="font-size: 4em; padding-bottom: .5em; padding-top: 2em;">
					<i class="fa fa-circle-o-notch fa-spin"></i>
				</div>
				<h1>Loading</h1>
			</div>
			<?php /* Loading: End */ ?>
			
			<div class="col-sm-12" ng-hide="pageState.isLoading">
				
				<?php /* Top Info: Start */ ?>
				<section class="topinforegion" aria-labelledby="main-content-top">
					<div class="container-fluid dataregion_top">
						<div class="row">
							
							<?php include_once 'inc/feeds.php'; ?>
							
							<div class="clear"></div>
						</div>
					</div>
				</section>
				<?php /* Top Info: End */ ?>
				
				<?php /* Main Info: Start */ ?>
				<section class="maininforegion" aria-labelledby="main-content-data">
					<div class="container-fluid dataregion_main">
						<div class="row">
							<div class="col-sm-12">
								
								<?php /* Data Information: Start */ ?>
								<section class="datainfooutput" aria-labelledby="data-information">
									<div class="classelection">
										<div class="row">
											<div class="col-sm-12">
												
												<!--tabset>
												<tab heading="Dashboard"-->
												
												<?php /* Dashboard: Start */ ?>
												<div class="row dashboardmain">
													<div class="col-md-12">
														<mv-body mv-cols="4">
															<div class="titleLabel">{{titleLabel}}</div>
															
															<?php /* Class Selection Navigation: Start */ ?>
															<div class="classnavregion" aria-labelledby="class-select-navigation" aria-controls="class-navigation">
																<div class="classelection">
																	
																	<ul class="classselectlist">
																		<li class="classitem class1 active">
																			<a href="#" class="btn btn-default" ng-click="selectClass('Class I')" title="Class I Data Filter" tabindex="<?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'index' ) ? '7' : ''); ?>">
																				Class I
																			</a>
																		</li>
																		<li class="classitem class2">
																			<a href="#" class="btn btn-default" ng-click="selectClass('Class II')" title="Class II Data Filter" tabindex="<?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'index' ) ? '8' : ''); ?>">
																				Class II
																			</a>
																		</li>
																		<li class="classitem class3">
																			<a href="#" class="btn btn-default" ng-click="selectClass('Class III')" title="Class III Data Filter" tabindex="<?php echo ((basename($_SERVER['PHP_SELF'], '.php') == 'index' ) ? '9' : ''); ?>">
																				Class III
																			</a>
																		</li>
																	</ul>
																	
																	<div class="clear"></div>
																</div>
																
																<div class="clear"></div>
															</div>
															<?php /* Class Selection Navigation: End */ ?>
															
															<mv-group mv-size="1x2"></mv-group>
															<mv-any-num mv-size="1x2" mv-data="statusData" mv-style="{'font-size':'1.3em'}" mv-id="statusNumbers"></mv-any-num>
															
															<!--
															mv-id-box mv-size="1x3" mv-title="Classification Description" mv-body-id="infoBox">{{classInfo}}</mv-id-box>
															<mv-id-box mv-size="1x1" mv-title="Today's Critical Recalls" mv-body-id="recallBox"><pre>{{recallInfo}}</pre></mv-id-box
															-->
															
															<tabset>
																<tab heading="US Map">
																	<mv-id-box mv-size="3x4" mv-title="{{mapLabel}}" mv-id="mapChart">
																		<mv-chart mv-data="mapData" mv-options="mapOptions"></mv-chart>
																	</mv-id-box>
																</tab>
																<tab heading="Bar Chart">
																	<mv-id-box mv-size="3x4" mv-title="{{chartLabel}}" mv-id="barChart">
																		<mv-chart mv-data="chartData" mv-options="chartOptions"></mv-chart>
																	</mv-id-box>
																</tab>
															</tabset>
															
															<div class="legendouter">
																<div class="legendinner">
																	<div class="legendtext">
																		<span class="legendnumber">0</span>
																		<span class="pull-right legendnumber">100</span>
																	</div>
																	<div class="css3gradient"></div>
																</div>
															</div>
														</mv-body>
														
														<div class="clear"></div>
													</div>
														
													<div class="clear"></div>
												</div>
												<?php /* Dashboard: End */ ?>
												
												<!--/tab>	
												<tab heading="Table">-->
												
												<?php /* Data Grid: Start */ ?>
												<style>
													div.DTTT_container{
														padding-right: 12px;
													}
												</style>
												<div class="row datagridmain">
													<div class="col-md-12 datagridcol">
														<table id="datagridinfo" class="datagrid dataTable drugs state table-striped" cellspacing="0" width="100%">
															<thead>
																<tr>
																	<th>Recall Date</th>
																	<th>City</th>
																	<th>State</th>
																	<th>Recalling Firm</th>
																	<th># of Products Recalled</th>
																	<th>Status</th>
																	<th>Product Description</th>
																	<th>Reason for Recall</th>
																</tr>
															</thead>
														</table>
													</div>
												</div>
												<?php /* Data Grid: End */ ?>
												
												<!--/tab>
												</tabset-->
												
												<div class="clear"></div>
											</div>
										</div>
									</div>
								</section>
								<?php /* Data Information: End */ ?>
								
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
