const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value.trim();

  let valid = true;
  let errorMsg = "";

  if (name === "") {
    valid = false;
    errorMsg += "Name is required.\n";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    valid = false;
    errorMsg += "Enter a valid email address.\n";
  }

  const phonePattern = /^[0-9]{10,15}$/;
  if (!phone.match(phonePattern)) {
    valid = false;
    errorMsg += "Enter a valid phone number (10-15 digits).\n";
  }

  if (date === "") {
    valid = false;
    errorMsg += "Select a date for your appointment.\n";
  }

  if (message === "") {
    valid = false;
    errorMsg += "Please enter a message.\n";
  }

  if (!valid) {
    alert(errorMsg);
  } else {
    alert("Appointment request submitted successfully!");
    appointmentForm.reset();
  }
});
