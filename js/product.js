$(document).ready(function(){
	$.getJSON("product.json", function(data){
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
					"Name: "+ value.name+ "<br>"+ 
					"Stock: "+ value.stock+ "<br>"+ 
					"Quantity on Hand: "+ value.quantity+ "<br>"+
					"Stock: "+ value.size+ "<br>"+ 
					"Stock: "+ value.colour+ "<br><br>"
				);
			});
		}); 
	});
});