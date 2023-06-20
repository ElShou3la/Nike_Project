function changeImage(fileName) {
  let img = document.getElementById("image");
  img.setAttribute("src", fileName);
}
let ule = document.getElementById("ule");

function header() {
  ule.style.display = "flex";
}

let user_name = document.querySelector(`[name="user_name"]`);
let user_password = document.querySelector(`[name="user_password"]`);

form = document.forms[0].onsubmit = function (event) {
  let user_name_valid = false;
  let user_password_valid = false;

  if (user_name.value.length <= 6) {
    user_name_valid = false;
  } else {
    user_name_valid = true;
  }
  if (user_password.value.length <= 6) {
    user_password_valid = false;
  } else {
    user_password_valid = true;
  }

  if (user_name_valid === false || user_password_valid === false) {
    event.preventDefault();
  }
};
