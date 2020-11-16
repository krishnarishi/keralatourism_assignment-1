    function validateForm(){
        return validateEmail() && validatePassword() && validatePhoneNumber();
    }
    function validateEmail() {
        let email = document.getElementById("email");
        let emailError = document.getElementById("emailError");
        // console.log("validate(1) - ", email, email.value);
        let regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // console.log("validate(2) - ", regexp.test(email.value));

        if (regexp.test(email.value)) {
            emailError.innerHTML = "Valid email address";
            emailError.style.color = "green";
            return true;
        } else if (email.value == 0) {
            emailError.innerHTML = "Please enter email address";
            emailError .style.color = "red";
            return false;
        } else {
            emailError.innerHTML = "Invalid email address";
            emailError.style.color = "red";
            return false;
        }
    }
    function validatePassword() {
        let password = document.getElementById("password");
        let passwordError = document.getElementById("passwordError");
        let regexp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        // console.log(regexp.test(password.value));
        if (regexp.test(password.value)) {
            passwordError.innerHTML = "Valid password";
            passwordError.style.color = "green";
            return true;
        } else if (password.value == 0){
            passwordError.innerHTML = "Please enter password";
            passwordError.style.color = "red";
            return false;
        } else {
            passwordError.innerHTML = "Enter a valid password.";
            passwordError.style.color = "red";
            return false;
        }
        
    }
    function validatePhoneNumber(){
        let phonenum = document.getElementById("phonenum");
        let phonenumError = document.getElementById("phonenumError");
        let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        console.log(regexp.test(phonenum.value));
        if(regexp.test(phonenum.value)){
            phonenumError.innerHTML = "Valid Phone Number ";
            phonenumError.style.color = "green";
            return true;
        } else if (phonenum.value == 0){
            phonenumError.innerHTML = "Please enter phone number";
            phonenumError.style.color = "red";
            return false;
        } else {
            phonenumError.innerHTML = "Invalid Phone Number";
            phonenumError.style.color = "red";
            return false;
        }
    }
    function validatePasswordStrength(){
        let password = document.getElementById("password");
        console.log("password length = ", password.value.length);
        const passwordLength = password.value.length;

        let weak = document.getElementById("weak");
        let fair = document.getElementById("fair");
        let good = document.getElementById("good");
        let strong = document.getElementById("strong");
        let passwordStrength = document.getElementById("passwordStrength");

        if (passwordLength < 6) {
            console.log("weak");
            weak.style.backgroundColor = "red";
            fair.style.backgroundColor = "unset";
            good.style.backgroundColor = "unset";
            strong.style.backgroundColor = "unset";
            passwordStrength.innerHTML = "Weak password";
            passwordStrength.style.color ="red";
        } else if (passwordLength < 8) {
            console.log("fair");
            weak.style.backgroundColor = "orange";
            fair.style.backgroundColor = "orange";
            good.style.backgroundColor = "unset";
            strong.style.backgroundColor = "unset";
            passwordStrength.innerHTML = "Fair password";
            passwordStrength.style.color ="orange";
        } else if (passwordLength < 12) {
            console.log("good");
            weak.style.backgroundColor = "#b6f924";
            fair.style.backgroundColor = "#b6f924";
            good.style.backgroundColor = "#b6f924";
            strong.style.backgroundColor = "unset";
            passwordStrength.innerHTML = "Good password";
            passwordStrength.style.color ="#b6f924";
        } else if (passwordLength < 16) {
            console.log("strong");
            weak.style.backgroundColor = "green";
            fair.style.backgroundColor = "green";
            good.style.backgroundColor = "green";
            strong.style.backgroundColor = "green";
            passwordStrength.innerHTML = "Strong password";
            passwordStrength.style.color ="green";
        }    
    }
