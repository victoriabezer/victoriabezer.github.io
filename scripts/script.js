var fields = {};
document.addEventListener("DOMContentLoaded", function () {
  fields.fullName = document.getElementById("fullName");
  fields.email = document.getElementById("email");
  fields.question = document.getElementById("question");
});

function validateForm(event) {
  event.preventDefault(); // Prevents the default form submission behavior
  var errors = {};

  // Check if fields are empty
  if (!isNotEmpty(fields.fullName.value)) {
    errors.firstName = "Name is required.";
  }
  if (!isNotEmpty(fields.email.value)) {
    errors.email = "Email is required.";
  } else if (!isEmail(fields.email.value)) {
    errors.email = "Invalid email format.";
  }
  if (!isNotEmpty(fields.question.value)) {
    errors.question = "Question is required.";
  }

  // Display errors or submit form
  if (Object.keys(errors).length === 0) {
    console.log("i am successful");
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    // Clear form fields
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("question").value = "";
  } else {
    // Form is invalid, show errors
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";
    var errorMessage = "Please correct the following errors:\n";
    for (var error in errors) {
      errorMessage += "- " + errors[error] + "\n";
    }
    alert(errorMessage);
    return false;
  }
}

document.querySelector("form").addEventListener("submit", validateForm);

function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
