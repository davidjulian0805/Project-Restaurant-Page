import "./styles.css";
import logoImg from "./Images/logo.png";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

document.getElementById("logo-img").src = logoImg;

const clearContent = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
};


const setActive = (id) => {
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
};

loadHomePage();
setActive("btn-home");

document.getElementById("logo-img").addEventListener("click", () => {
  clearContent();
  loadHomePage();
  setActive("btn-home");
});

document.getElementById("btn-home").addEventListener("click", () => {
  clearContent();
  loadHomePage();
  setActive("btn-home");
});

document.getElementById("btn-menu").addEventListener("click", () => {
  clearContent();
  loadMenuPage();
  setActive("btn-menu");
});

document.getElementById("btn-contact").addEventListener("click", () => {
  clearContent();
  loadContactPage();
  setActive("btn-contact");
});