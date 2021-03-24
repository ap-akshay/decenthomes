$(document).ready(function() {
    $.validator.setDefaults({  // check email address format 
  		debug: true,
  		success: "valid"
	});
	$.validator.addMethod("Date",function(value, element) { // method for date formate
            return value.match(/^(0[1-9]|1[012])[\/|-](0[1-9]|[12][0-9]|3[01])[\/|-](19\d\d|2\d\d\d)$/);
        },
        "Please enter a date in the format mm/dd/yyyy" //It will show this error message
    );
    $.validator.addMethod('positive', // method for chechk number is positive
    function (value) { 
        return Number(value) > 0;
    }, 'Please enter a positive number.'); //It will show this error message if number is negative

  $("#registration_form").validate({ //validation function
    rules: {
      fname: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      lname: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      email: {
        required: true,
        email: true, //it will check for valid email
      },
      birthday:{
      	required: true,
      	Date: true,
	  },
	  
	  gender: {
	  	required:true,
	  },	
	  comment:{
	  	minlength: 5,
        maxlength: 30,
	  }	  
      
    },

    messages: {
      email: {
        required: 'Please enter an email.',
        email: 'Please enter valid email.', 
      }
    }
  });

// });


	// var $ =function(id) { 
	// 	return document.getElementById(id); 
	// };
	// var processEntries= function() {
	// 	var isValid = true;
	// 	var email = $("email_address").value;
	// 	var phone = $("phone").value;
	// 	var country = $("country").value;
	// 	var contact = "Text";
	// 	if ($("email").checked) { 
	// 		contact = "Email"; }
	// 		if ($("none").checked) { 
	// 			contact = "None"; 
	// 		}
	// 		var terms = $("terms").checked;
	// 		if (email == "") {
	// 			$("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
	// 			isValid = false; 
	// 		}else {
	// 			$("email_address").nextElementSibling.firstChild.nodeValue = ""; 
	// 		}
	// 		if (phone == "") {
	// 			$("phone").nextElementSibling.firstChild.nodeValue ="This field is required.";
	// 			isValid = false; 
	// 		}else { 
	// 			$("phone").nextElementSibling.firstChild.nodeValue ="";
	// 		}
	// 		if (country == "") {
	// 			$("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
	// 			isValid = false;
	// 			}else{ 
	// 				$("country").nextElementSibling.firstChild.nodeValue ="";
	// 			}
	// 			if (terms == false) {
	// 				$("terms").nextElementSibling.firstChild.nodeValue ="This box must be checked.";
	// 				isValid = false; 
	// 			}else { 
	// 				$("terms").nextElementSibling.firstChild.nodeValue ="";
	// 			}
	// 			 //submit the form if all fields are valid
	// 			if (isValid == true) {
	// 				$("reservation_form").submit(); 
	// 			}
	// window.onload = function() {
	// 	$("submit").onclick = processEntries;
	// 	$("reset_form").onclick = resetForm;    
	// 	$("email_address").focus();
	// };
		// }
		// $("submit").onclick = processEntries;

}); // end ready
