// Wait for DOM to be ready (or you can rely on `defer` in script tag)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const phoneInput = document.getElementById('phone');

  const fullNameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const phoneError = document.getElementById('phoneError');

  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (event) {
    // 2️⃣ Prevent default form submission (no page reload)
    event.preventDefault();

    // Clear previous messages
    clearErrors();
    successMessage.textContent = '';

    let isValid = true;

    // 3️⃣ VALIDATION RULES

    // Full Name: cannot be empty, min 3 characters
    const fullNameValue = fullNameInput.value.trim();
    if (fullNameValue === '') {
      fullNameError.textContent = 'Full Name is required.';
      isValid = false;
    } else if (fullNameValue.length < 3) {
      fullNameError.textContent = 'Full Name must be at least 3 characters.';
      isValid = false;
    }

    // Email: must be valid format
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Password: min 6 characters
    const passwordValue = passwordInput.value;
    if (passwordValue === '') {
      passwordError.textContent = 'Password is required.';
      isValid = false;
    } else if (passwordValue.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }

    // Confirm Password: must match password
    const confirmPasswordValue = confirmPasswordInput.value;
    if (confirmPasswordValue === '') {
      confirmPasswordError.textContent = 'Please confirm your password.';
      isValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
      confirmPasswordError.textContent = 'Passwords do not match.';
      isValid = false;
    }

    // Phone: only numbers, min 10 digits
    const phoneValue = phoneInput.value.trim();
    const phonePattern = /^\d{10,}$/; // only digits, at least 10
    if (phoneValue === '') {
      phoneError.textContent = 'Phone number is required.';
      isValid = false;
    } else if (!phonePattern.test(phoneValue)) {
      phoneError.textContent = 'Phone must be at least 10 digits and contain only numbers.';
      isValid = false;
    }

    // 5️⃣ If all validations pass
    if (isValid) {
      successMessage.textContent = 'Form Submitted Successfully';

      // Clear form fields
      form.reset();

      // (Optional) Clear errors after successful submit
      clearErrors();
    }
  });

  function clearErrors() {
    fullNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    phoneError.textContent = '';
  }
});