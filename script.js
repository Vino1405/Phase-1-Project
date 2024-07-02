var a, b, x, y;
window.onload = function() {
    a = document.getElementById("loginBtn");
    b = document.getElementById("registerBtn");
    x = document.getElementById("login");
    y = document.getElementById("register");
};

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function myMenuFunction() {
    var menu = document.querySelector('.nav-menu');
    menu.classList.toggle('responsive');
}

function validateLogin() {
    var usernameEmail = document.querySelector('#login .input-field[type="text"]').value;
    var password = document.querySelector('#login .input-field[type="password"]').value;
    var usernameEmailError = document.getElementById("usernameEmailError");
    var passwordError = document.getElementById("passwordError");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
    var temp = true;
    usernameEmailError.textContent = "";
    passwordError.textContent = "";

    if (usernameEmail === "") {
        usernameEmailError.textContent = "Username or Email is required.";
        temp =  false;
    }
    if (!emailPattern.test(usernameEmail)) {
        usernameEmailError.textContent = "Enter a valid email address.";
        temp =  false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required.";
        temp =  false;
    }
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        temp =  false;
    }
    return temp;
}

var signInEmailInput = document.querySelector('#login .input-field[type="text"]');
var signInEmailError = document.getElementById("usernameEmailError");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signInEmailInput.addEventListener('blur', function() {
    var emailValue = signInEmailInput.value.trim();
    if (emailValue === "") {
        signInEmailError.textContent = "Username or Email is required.";
    } else {
        if (!emailPattern.test(emailValue)) {
            signInEmailError.textContent = "Enter a valid email address.";
        } else {
            signInEmailError.textContent = "";
        }
    }
});

  function validateRegister() {
    var firstName = document.querySelector('#register .input-field[placeholder="FirstName"]').value;
    var lastName = document.querySelector('#register .input-field[placeholder="LastName"]').value;
    var email = document.querySelector('#register .input-field[placeholder="Email"]').value;
    var password = document.querySelector('#register .input-field[placeholder="Password"]').value;
    var confirmPassword = document.querySelector('#register .input-field[placeholder="Confirm Password"]').value;
    var dob = document.getElementById("dateOfBirth").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordRegisterError = document.getElementById("passwordRegisterError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var dobError = document.getElementById("dobError");
    var stateError = document.getElementById("stateError");
    var cityError = document.getElementById("cityError");
    var ageError = document.getElementById("ageError");
    var genderError = document.getElementById("genderError");

    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    passwordRegisterError.textContent = "";
    confirmPasswordError.textContent = "";
    dobError.textContent = "";
    stateError.textContent = "";
    cityError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";

    var isValid = true;
    var namePattern = /^[A-Za-z]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;

    if (firstName === "") {
        firstNameError.textContent = "Firstname is required.";
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        firstNameError.textContent = "Firstname can only contain alphabets.";
        isValid = false;
    }

    if (lastName === "") {
        lastNameError.textContent = "Lastname is required.";
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        lastNameError.textContent = "Lastname can only contain alphabets.";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (password === "") {
        passwordRegisterError.textContent = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        passwordRegisterError.textContent = "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    }

    if (dob.trim() === "") {
        dobError.textContent = "Date of Birth is required.";
        isValid = false;
    }

    if (state === "") {
        stateError.textContent = "State is required.";
        isValid = false;
    }
    
    if (city === "") {
        cityError.textContent = "City is required.";
        isValid = false;
    }

    if (age === "") {
        ageError.textContent = "Age is required.";
        isValid = false;
    }

    if (!gender) {
        genderError.textContent = "Gender is required.";
        isValid = false;
    }

    if (isValid) {
        login();
        signInEmailInput.value=email;
    }
    
    return isValid;
}

var firstNameInput = document.querySelector('#register .input-field[placeholder="FirstName"]');
var lastNameInput = document.querySelector('#register .input-field[placeholder="LastName"]');
var emailInput = document.querySelector('#register .input-field[placeholder="Email"]');
var dateofBirthInput = document.querySelector('#register .input-field[placeholder="DateOfBirth"]');
var genderInput = document.getElementById("gender");
var stateInput = document.getElementById("state");
var cityInput = document.getElementById("city");
var ageInput = document.getElementById("city");
var PasswordInput = document.querySelector('#register .input-field[placeholder="Password"]');
var confirmPasswordInput = document.querySelector('#register .input-field[placeholder="Confirm Password"]');
var namePattern = /^[A-Za-z]+$/;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;

function validateFirstName() {
    if (firstNameInput.value !== "" && !namePattern.test(firstNameInput.value)) {
        firstNameError.textContent = "FirstName can only contain alphabets.";
        return false;
    }else  if (firstNameInput.value.trim() == "") {
        firstNameError.textContent = "FirstName cannot be null.";
        firstNameInput.innerHTML="";
        return false;
    }else {
        firstNameError.textContent = "";
    }
    return true;
}

function validateLastName() {
    if (lastNameInput.value !== "" && !namePattern.test(lastNameInput.value)) {
        lastNameError.textContent = "LastName can only contain alphabets.";
        return false;
    } else  if (lastNameInput.value.trim() == "") {
        lastNameError.textContent = "LastName cannot be null.";
        return false;
    }else {
        lastNameError.textContent = "";
    }
    return true;
}

function validateEmail(emailValue) {
    if (emailValue !== "" && !emailPattern.test(emailValue.value)) {
        emailError.textContent = "Enter a valid email.";
        return false;
    } else  if (emailValue.value.trim() == "") {
        emailError.textContent = "Email cannot be null.";
        return false;
    } else {
        emailError.textContent = "";
    }
    return true;
}

function validatePassword(passwordValue) {
    if (passwordValue !== "" && !passwordPattern.test(passwordValue.value)) {
        passwordRegisterError.textContent = "Enter a valid password.";
        return false;
    } else {
        passwordRegisterError.textContent = "";
    }
    return true;
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== "" && confirmPasswordInput.value !== PasswordInput.value) {
        confirmPasswordError.textContent = "Password does not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
    }
    return true;
}

function populateCities() {
    var state = document.getElementById("state").value;
    var city = document.getElementById("city");
    city.innerHTML = ""; 
    if (state === "Andhra Pradesh") {
        options = ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Kadapa", "Rajahmundry", "Tirupati", "Anantapur", "Ongole"];
    } else if (state === "Arunachal Pradesh") {
        options = ["Itanagar", "Naharlagun", "Pasighat", "Ziro", "Tawang", "Bomdila", "Aalo", "Roing", "Tezu", "Changlang"];
    } else if (state === "Assam") {
        options = ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tezpur", "Tinsukia", "Karimganj", "Sivasagar", "Goalpara"];
    } else if (state === "Bihar") {
        options = ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Bihar Sharif", "Arrah", "Chhapra", "Begusarai", "Katihar"];
    } else if (state === "Chhattisgarh") {
        options = ["Raipur", "Bhilai", "Bilaspur", "Korba", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari", "Durg", "Janjgir-Champa"];
    } else if (state === "Goa") {
        options = ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Sanquelim", "Canacona", "Valpoi"];
    } else if (state === "Gujarat") {
        options = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Bharuch"];
    } else if (state === "Haryana") {
        options = ["Chandigarh", "Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat"];
    } else if (state === "Himachal Pradesh") {
        options = ["Shimla", "Mandi", "Dharamshala", "Kullu", "Solan", "Nahan", "Una", "Bilaspur", "Hamirpur", "Chamba"];
    } else if (state === "Jharkhand") {
        options = ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh", "Ranchi", "Jamshedpur"];
    } else if (state === "Karnataka") {
        options = ["Bengaluru", "Mysuru", "Mangaluru", "Hubli", "Belagavi", "Davanagere", "Ballari", "Gulbarga", "Shivamogga", "Tumkur"];
    } else if (state === "Kerala") {
        options = ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur", "Kottayam", "Malappuram"];
    } else if (state === "Madhya Pradesh") {
        options = ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Rewa", "Satna", "Ratlam", "Burhanpur"];
    } else if (state === "Maharashtra") {
        options = ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Nanded", "Akola"];
    } else if (state === "Manipur") {
        options = ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Senapati", "Ukhrul", "Tamenglong", "Kakching", "Jiribam", "Noney"];
    } else if (state === "Meghalaya") {
        options = ["Shillong", "Tura", "Jowai", "Nongstoin", "Williamnagar", "Baghmara", "Resubelpara", "Khliehriat", "Mairang", "Mawkyrwat"];
    } else if (state === "Mizoram") {
        options = ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Khawzawl", "Hnahthial", "Saitual"];
    } else if (state === "Nagaland") {
        options = ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon", "Longleng", "Kiphire"];
    } else if (state === "Odisha") {
        options = ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda"];
    } else if (state === "Punjab") {
        options = ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Batala", "Pathankot"];
    } else if (state === "Rajasthan") {
        options = ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Bhilwara", "Alwar", "Sikar", "Pali"];
    } else if (state === "Sikkim") {
        options = ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Singtam", "Rangpo", "Jorethang", "Ravangla", "Naya Bazar", "Rhenock"];
    } else if (state === "Tamil Nadu") {
        options = ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Thoothukudi", "Thanjavur"];
    } else if (state === "Telangana") {
        options = ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet"];
    } else if (state === "Tripura") {
        options = ["Agartala", "Dharmanagar", "Udaipur", "Belonia", "Ambassa", "Kailashahar", "Kamalpur", "Khowai", "Sonamura", "Teliamura"];
    } else if (state === "Uttar Pradesh") {
        options = ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad", "Ghaziabad", "Noida", "Moradabad", "Aligarh"];
    } else if (state === "Uttarakhand") {
        options = ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Srinagar", "Pithoragarh", "Nainital"];
    } else if (state === "West Bengal") {
        options = ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Durgapur", "Asansol", "Malda", "Baharampur", "Haldia", "Jalpaiguri"];
    } else if (state === "") {
        options = [""];
    }
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        city.add(option);
    }
}

function calculateAge() {
    var dob = document.getElementById("dateOfBirth").value;
    var ageField = document.getElementById("age");

    if (dob) {
        var dobDate = new Date(dob);
        var today = new Date();
        var age = today.getFullYear() - dobDate.getFullYear();
        var monthDiff = today.getMonth() - dobDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        ageField.value = age;
        if(ageField.value<18) {
            dobError.textContent="Please choose a valid Date of Birth"
            isAgeRestricted=true;
            ageField.value="";
        } else {
            dobError.textContent=""
            ageError.textContent = "";
            isAgeRestricted=false;
        }
    } else {
        ageField.value = "";
    }
}


var isAgeRestricted=false;
var dobInput = document.getElementById("dateOfBirth");
dobInput.addEventListener('change', calculateAge);

firstNameInput.addEventListener('input', validateFirstName);
lastNameInput.addEventListener('input', validateLastName);
emailInput.addEventListener('blur', function() {
    var emailValue = emailInput.value.trim();
    if (emailValue !== "" && !emailPattern.test(emailValue)) {
        emailError.textContent = "Enter a valid email.";
    }else if (emailValue == "") {
        emailError.textContent = "Email cannot be null.";
    } else {
        emailError.textContent = "";
    }
});
PasswordInput.addEventListener('blur', function() {
    var passwordValue = PasswordInput.value.trim();
    if (passwordValue !== "" && !passwordPattern.test(passwordValue)) {
        passwordRegisterError.textContent = "Enter a valid password.";
    }else  if (passwordValue == "") {
        passwordRegisterError.textContent = "Password cannot be null.";
        return false;
    }else {
        passwordRegisterError.textContent = "";
    }
});

dateofBirthInput.addEventListener('blur', function() {
    var dateofBirthValue = dateofBirthInput.value.trim();
    if (dateofBirthValue == "") {
        dobError.textContent = "Date of Birth cannot be null.";
    }else if(isAgeRestricted=false && dateofBirthValue !== "") {
        dobError.textContent = "";
        ageError.textContent = "";
    }
});

genderInput.addEventListener('input', function() {
    var genderValue = genderInput.value.trim();
    if (genderValue == "") {
        genderError.textContent = "Gender cannot be null.";
    }else {
        genderError.textContent = "";
    }
});

stateInput.addEventListener('input', function() {
    var stateValue = stateInput.value.trim();
    if (stateValue == "") {
        stateError.textContent = "State cannot be null.";
    }else {
        stateError.textContent = "";
        cityError.textContent = "";
    }
});

confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
