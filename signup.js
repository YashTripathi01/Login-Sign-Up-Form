$(document).ready(function () {
  $("#signupForm").validate({
    rules: {
      inputEmail: {
        required: true,
      },
      inputPassword: {
        required: true,
      },
      inputName: {
        required: true,
      },
    },
    messages: {
      inputEmail: {
        required: "Email format: abc@domain.tld",
      },
      inputPassword: {
        required: "Password is required",
      },
      inputName: {
        required: "Name is required",
      },
    },
  });
});
