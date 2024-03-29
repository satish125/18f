
<?php /* Top 5 Info: Start */ ?>
<div class="col-sm-6 top5info">
	<div class="recallheader">Latest Recalls</div>
	
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
	<div class="twitterheader">@FDArecalls</div>
	
	<a class="twitter-timeline" href="https://twitter.com/FDArecalls" data-widget-id="616626947565690880" data-chrome="noheader nofooter noborders noscrollbar transparent" data-show-replies="false" data-tweet-limit="5" data-aria-polite="assertive">Twitter</a>
	
	<script>
	!function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}
	}(document,"script","twitter-wjs");
	</script>
	
	<div class="clear"></div>
</div>
<?php /* Twitter: End */ ?>