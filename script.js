$(document).ready(function () {
  $("#loginForm").validate({
    rules: {
      inputEmail: {
        required: true,
      },
      inputPassword: {
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
    },
  });
});

