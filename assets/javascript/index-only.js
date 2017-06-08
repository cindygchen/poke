// Details are hidden on page load. When you click on a result, it expands to show details
$(".details").hide();
$(document).on("click", ".details-link", function() {
	$(this).parents().eq(3).next().slideToggle(700);
});