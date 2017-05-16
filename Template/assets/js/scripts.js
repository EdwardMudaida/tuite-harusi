$(document).ready(function() {
	$("#coupleInfo").submit(function(event) {
		event.preventDefault();
		$("#submitInfo").click(function() {
			$("#confirm").show();
			$("#confirm").fadeOut(5000);
		});
	});
});