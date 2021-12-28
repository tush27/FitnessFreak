

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openLoginForm() {
  document.getElementById("LoginForm").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("LoginForm").style.display = "none";
}

