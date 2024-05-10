function validateName() {
    const fullName = document.getElementById("fullName");
    if (fullName.value.length < 5) {
      fullName.setCustomValidity("Name must be at least 5 characters.");
    } else {
      fullName.setCustomValidity("");
    }
  }
  
  function validateEmail() {
    const email = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
      email.setCustomValidity("Enter a valid email.");
    } else {
      email.setCustomValidity("");
    }
  }
  
  function validatePhone() {
    const phone = document.getElementById("phone");
    if (phone.value.length !== 10 || isNaN(phone.value)) {
      phone.setCustomValidity("Phone number must be a 10-digit number.");
    } else {
      phone.setCustomValidity("");
    }
  }
  
  function validatePassword() {
    const password = document.getElementById("password");
    if (password.value.length < 8 || password.value === "password" || password.value === document.getElementById("fullName").value) {
      password.setCustomValidity("Password must be at least 8 characters and cannot be 'password' or 'name of the user'.");
    } else {
      password.setCustomValidity("");
    }
  }
  
  function validateConfirmPassword() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.value !== password.value) {
      confirmPassword.setCustomValidity("Passwords do not match.");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }