function checkBoxes(){
	var x = document.getElementById('firstName').value;
	var y = document.getElementById('lastName').value;
	var k = document.getElementById('emailBox').value;
	var l = document.getElementById('passwordBox').value;

	
		if (x === '' && y === '' && k === '' && l === ''){
			$('.infoBox').css('border', '2px solid hsl(0, 100%, 74%)');
			document.getElementById("firstName").placeholder = "";
			document.getElementById("lastName").placeholder = "";
			document.getElementById("emailBox").placeholder = "";
			document.getElementById("passwordBox").placeholder = "";
			$('.infoBox').addClass('iconError');
		}else if (x === ''){
			$('.fname').css('border', '2px solid hsl(0, 100%, 74%)');
		}else if (y === ''){
			$('.fname').css('border', '2px solid silver');
			$('.lname').css('border', '2px solid hsl(0, 100%, 74%)');
		}else if (k === ''){
			$('.lname').css('border', '2px solid silver');
			$('.email').css('border', '2px solid hsl(0, 100%, 74%)');
		}else if (l === ''){
			$('.email').css('border', '2px solid silver');
			$('.password').css('border', '2px solid hsl(0, 100%, 74%)');
		}else{
			console.log(x);
			console.log(y);
			console.log(k);
			console.log(l);
			$('.infoBox').css('border', '1px solid silver');
			$('.infoBox').removeClass('iconError');
		}
	}

function checkFields(){
	checkBoxes();
}
//----------------------------------------------------------------------
/*
if (x === '' && y === '' && k === '' && l === ''){
		$('.infoBox').css('border', '2px solid hsl(0, 100%, 74%)');
		document.getElementById("firstName").placeholder = "";
		document.getElementById("lastName").placeholder = "";
		document.getElementById("emailBox").placeholder = "";
		document.getElementById("passwordBox").placeholder = "";

		$('.infoBox').addClass('iconError');
	}else if (x === ''){
		$('.fname').css('border', '2px solid hsl(0, 100%, 74%)');
	}else if (y === ''){
		$('.lname').css('border', '2px solid hsl(0, 100%, 74%)');
	}else if (k === ''){
		$('.email').css('border', '2px solid hsl(0, 100%, 74%)');
	}else if (l === ''){
		$('.password').css('border', '2px solid hsl(0, 100%, 74%)');
	}else{
		console.log(x);
		console.log(y);
		console.log(k);
		console.log(l);

		$('.infoBox').removeClass('iconError');
		$('.infoBox').css('border', '1px solid silver');
	}
------------------------------------------------------------------------
if (x === ''){
		$('.fname').css('border', '2px solid hsl(0, 100%, 74%)');
		document.getElementById("firstName").placeholder = "";
		$('.infoBox').addClass('iconError');
	}else{
		$('.infoBox').css('border', '1px solid silver');
		$('.infoBox').removeClass('iconError');
	}

	if (y === ''){
		$('.lname').css('border', '2px solid hsl(0, 100%, 74%)');
		document.getElementById("lastName").placeholder = "";
	}else{
		$('.infoBox').css('border', '1px solid silver');
		$('.infoBox').removeClass('iconError');
	}

	if (k === ''){
		$('.email').css('border', '2px solid hsl(0, 100%, 74%)');
		document.getElementById("emailBox").placeholder = "";
	}else{
		$('.infoBox').css('border', '1px solid silver');
		$('.infoBox').removeClass('iconError');
	}

	if (l === ''){
		$('.password').css('border', '2px solid hsl(0, 100%, 74%)');
		document.getElementById("passwordBox").placeholder = "";
	}else{
		$('.infoBox').css('border', '1px solid silver');
		$('.infoBox').removeClass('iconError');
	}
*/

	