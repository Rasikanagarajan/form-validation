let username = document.getElementById("name");
let errname = document.getElementById("errname");

let email = document.getElementById("mail");
let pass = document.getElementById("pass");
let pass1 = document.getElementById("pass1");
let phno = document.getElementById("phno");

function submitform(e) {
  e.preventDefault();

  // Name validation
  if (username.value.length >= 3) {
    errname.style.display = "none";
    console.log("Name:", username.value);
  } else {
    errname.style.display = "block";
    return false;
  }

  // Email validation
  if (email.value.includes("@gmail.com")) {
    console.log("Email:", email.value);
  } else {
    alert("Please enter a valid Gmail address");
    return false;
  }

  // Password validation
  if (pass.value.length >= 8) {
    console.log("Password:", pass.value);
  } else {
    alert("Password must be at least 8 characters");
    return false;
  }

  // Confirm password
  if (pass.value === pass1.value) {
    console.log("Passwords match");
  } else {
    alert("Passwords do not match");
    return false;
  }

  // Phone number validation
  if (phno.value.toString().length === 10) {
    console.log("Phone Number:", phno.value);
  } else {
    alert("Phone number must be 10 digits");
    return false;
  }

  // All validation passed
  alert("Form submitted successfully!");

  // Clear inputs
  username.value = "";
  email.value = "";
  pass.value = "";
  pass1.value = "";
  phno.value = "";

  return true;
}
