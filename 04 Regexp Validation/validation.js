const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  telephone: /^\d{11}$/,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    if (field.classList.contains("invalid")) field.classList.remove("invalid");
    field.classList.add("valid");
  } else {
    if (field.classList.contains("valid")) field.classList.remove("valid");
    field.classList.add("invalid");
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //can do e.target.name OR e.target.attributes.name for getting it in key-value pair
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
