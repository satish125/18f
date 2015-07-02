
<h2>Latest Recalls in the U.S.</h2>

<?php /* Top 5 Info: Start */ ?>
<div class="col-sm-6 top5info">
	
	<table class="recalltable">
		<thead>
			<tr>
				<th>Location</th>
				<th>Recalling Firm</th>
				<th>Type</th>
				<th>Date</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="recall in lastestRecalls">
				<td>{{recall.city + ', ' + (recall.state ? recall.state : recall.country)}}</td>
				<td>{{recall.recalling_firm}}</td>
				<td>{{recall.product_type}}</td>
				<td>{{addDashes(recall.recall_initiation_date)}}</td>
			</tr>
		</tbody>
	</table>
	
	<div class="clear"></div>
</div>
<?php /* Top 5 Info: End */ ?>

<?php /* Twitter: Start */ ?>
<div class="col-sm-6 twitterfeed">
	
	
	<div class="clear"></div>
</div>
<?php /* Twitter: End */ ?>