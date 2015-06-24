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
		<div class="sectioninside">
			
			<?php /*
			<h2>18F Prototype Homepage</h2>
			
			<div id="fdabarchart"></div>
			
			<p><a href="#">Donec ut leo odio</a>. Quisque eget tempor ante, eu porta diam. Nulla in tellus egestas arcu gravida porttitor consequat et ligula. Suspendisse vitae dictum velit, nec volutpat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique fermentum mauris pellentesque ullamcorper. Quisque pharetra sit amet quam vitae finibus.</p>
			
			<p>Etiam sed congue nisi, sit amet consequat mi. Proin non urna et mi pretium tincidunt vitae at enim.</p>
			
			<p>Fusce vitae luctus lacus. In vitae eleifend purus. Vestibulum rutrum est id dolor sagittis pharetra. Mauris fringilla ex nec turpis lacinia pharetra. Sed nunc lectus, molestie nec enim in, dapibus hendrerit ligula. Donec facilisis est ut erat feugiat, nec elementum nisi dapibus. Praesent hendrerit lorem vulputate urna posuere tempus. Curabitur fermentum id ligula vitae imperdiet. Maecenas non consectetur ex.</p>
			
			<p>Phasellus pharetra posuere libero quis imperdiet. Donec gravida vulputate justo, condimentum tristique turpis.</p>
			
			<p>Donec ut leo odio. Quisque eget tempor ante, eu porta diam. Nulla in tellus egestas arcu gravida porttitor consequat et ligula. Suspendisse vitae dictum velit, nec volutpat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tristique fermentum mauris pellentesque ullamcorper. Quisque pharetra sit amet quam vitae finibus.</p>
			*/ ?>
			
			<div ng-controller="mainCtrl">
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/dashboard
					</mv-body>
				</div>
			</div>
			
			<div class="clear"></div>
		</div>
		
		<div class="clear"></div>
	</div>
</section>
<?php /* Page Content (Main Content): End */ ?>

<?php include_once 'inc/footer.php'; ?>