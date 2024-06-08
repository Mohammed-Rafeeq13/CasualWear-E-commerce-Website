//single product and tops product html script file
let mainImg = document.getElementById("mainImg");
        let smalImg = document.getElementsByClassName("small-img");

        smalImg[0].onclick = function(){
            mainImg.src =smalImg[0].src;
        }
        smalImg[1].onclick = function(){
            mainImg.src =smalImg[1].src;
        }
        smalImg[2].onclick = function(){
            mainImg.src =smalImg[2].src;
        }
        smalImg[3].onclick = function(){
            mainImg.src =smalImg[3].src;
        }

//Login Form Validation
document.getElementById('registrationForm').addEventListener('submit',function(event) {
	event.preventDefault(); // Prevent the default behaviour or form submission

	//clear previous errors
	clearErrors();

	//get the values from each input field or form
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	let isValid = true;

	//validation for name(letters and spaces)
	if(!/^[a-zA-Z\s]+$/.test(name.trim())){
		setError('name','Name must contain only letters and spaces');
		isValid = false;
	}
	//validation for email , valid email @
	if (!validate_email(email)){
		setError('email','Please enter a valid email');
		isValid = false;

	}
	//validation for password there should be a minimum length of 8 
	if (password.length < 6) {
        setError('password', "Password must be at least 6 characters");
        isValid = false;
    }


	if(isValid){
		alert("Form Submitted Successfully");
	}
});



function setError(id,message){
	const element = document.getElementById(id);
	const small = element.nextElementSibling;
	element.classList.add('error');
	small.innerText = message;
	small.style.visibility = 'visible';
}

function clearErrors()
{
	const inputs = document.querySelectorAll('input');
	inputs.forEach(input => {
		input.classList.remove('error');
		const small = input.nextElementSibling;
		small.style.visibility = 'hidden';
	});
}

function validate_email(email){
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}


