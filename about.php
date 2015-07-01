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
	<div class="container-fluid contentmain">
		<div class="row">
			<div class="col-sm-12">
				
				<?php /* Main Info: Start */ ?>
				<section class="maininforegion" aria-labelledby="main-content-data">
					<div class="container-fluid dataregion_main pagecopy">
						<div class="row">
							<div class="col-sm-12">
								
								<h1>RECALL.IT</h1>
								
								<p>RECALL.IT is a open source dashboard primarily for federal health inspector use that displays FDA recall data (circa 2004-2015) for foods, drugs, and devices. Users can view recall data statistics, filter the data by geographic area (city/state), and view specific details about the data in a sortable, filterable, and exportable table format. Its purpose is to give the federal health inspector a daily snapshot of current events, as well as provide historical insight to past recalls.</p>
								
								<p>Recalls are almost always voluntary, meaning a company discovers a problem and recalls a product on its own. Other times a company recalls a product after FDA raises concerns. Only in rare cases will FDA request or order a recall. But in every case, FDA's role is to oversee a company's strategy, classify the recalled products according to the level of hazard involved, and assess the adequacy of the recall. Recall information is posted in the Enforcement Reports once the products are classified.</p>

								<p><strong>For more information about this tool, please contact us at <a href="mailto:sales@ntconcepts.com">sales@ntconcepts.com</a>.</strong></p>
								
								<h2>Understanding General Recall Classifications</h2>
								
								<p>These guidelines from <a href="http://www.fda.gov/ForConsumers/ConsumerUpdates/ucm049070.htm#RecallClassifications" target="_blank">FDA 101: Product Recalls</a> categorize all recalls into one of three classes, according to the level of hazard involved:</p>
								
								<ul>
									<li><strong>Class I</strong>: Dangerous or defective products that predictably could cause serious health problems or death. Examples include: food found to contain botulinum toxin, food with undeclared allergens, a label mix-up on a lifesaving drug, or a defective artificial heart valve.</li>
									<li><strong>Class II</strong>: Products that might cause a temporary health problem, or pose only a slight threat of a serious nature. Example: a drug that is under-strength but that is not used to treat life-threatening situations.</li>
									<li><strong>Class III</strong>: Products that are unlikely to cause any adverse health reaction, but that violate FDA labeling or manufacturing laws. Examples include: a minor container defect and lack of English labeling in a retail food.</li>
								</ul>
								
								<h2>VIEW SOURCE</h2>
								
								<p><a href="https://github.com/NTConcepts/18f">Fork us on Github (Button)</a></p>

								<h3>Data</h3>
								
								<p>RECALL.IT consumes and displays open source APIs on food, drugs, and devices from <a href="http://open.fda.gov" target="_blank">http://open.fda.gov</a>. The datasets and data include:</p>
								
								<ul>
									<li>Food enforcement reports</li>
									<li>Drug enforcement reports</li>
									<li>Device enforcement reports</li>
								</ul>

								<h3>Libraries</h3>
								
								<p><a href="https://jquery.com/" target="_blank">Jquery</a></p>

								<h3>Frameworks</h3>
								
								<p><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a><br/>
									Minerva: Minerva combines the best of <a  href="https://angularjs.org/" target="_blank">AngularJS</a> and <a href="http://d3js.org/" target="_blank">D3.js</a> to create simple and responsive dashboard components.</p>

								<h3>Plugins</p>
								
								<p><a href="https://www.datatables.net/" target="_blank">Datatables.net</a></p>
								
								<h2>ACCESSIBILITY STATEMENT</h2>
								
								<p>NT Concepts is committed to making our electronic and information technologies accessible to individuals with disabilities by meeting or exceeding the requirements of Section 508 of the Rehabilitation Act (29 U.S.C. 794d), as amended in 1998. Section 508 is a federal law that requires agencies to provide individuals with disabilities equal access to electronic information and data comparable to those who do not have disabilities, unless an undue burden would be imposed on the agency. The Section 508 standards are the technical requirements and criteria that are used to measure conformance within this law. More information on Section 508 and the technical standards can be found at <a href="http://www.section508.gov" target="_blank">www.section508.gov</a>.</p>
								
								<p>If you require assistance or wish to report an issue related to the accessibility of any content on this website, please email <a  href="mailto:section508@ntconcepts.com">section508@ntconcepts.com</a>, or call 703-752-8919. If applicable, please include the web address or URL and the specific problems you have encountered.</p>
								
								<h2>ABOUT NT CONCEPTS<h2>
								
								<p>NT Concepts delivers data analytics, software engineering, geospatial, and business process operations solutions and services to enable their customers’ success. NT Concepts designs and builds comprehensive, scalable solutions on a diverse set of platforms and frameworks in enterprise, cloud, secured, and mobile environments. Founded in 1998, NT Concepts employs over 1000 professionals supporting intelligence, defense, and civilian government customers. For more information visit <a  href="http://www.ntconcepts.com" target="_blank">http://www.ntconcepts.com</a>.</p>
								
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
	
	<div class="clear"></div>
</section>
<?php /* Main Content: End */ ?>
