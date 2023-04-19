let pass1 = document.querySelector("input[name='pass1']");
let pass2 = document.querySelector("input[name='pass2']");
let popup = document.querySelector("#popupAlert");

function matchPasswords() {
  popup.innerText = pass1.value == pass2.value ? "" : "Passwords do not match";
}

pass1.addEventListener("keyup", () => {
  if (pass2.value.length != 0) matchPasswords();
});

pass2.addEventListener("keyup", matchPasswords);
