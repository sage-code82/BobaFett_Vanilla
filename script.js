function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " nav-menu-responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
