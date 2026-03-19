import "./styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";



const clearContent = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
};


loadHomePage();


document.getElementById("btn-home").addEventListener("click", () => {
  clearContent();
  loadHomePage();
});

document.getElementById("btn-menu").addEventListener("click", () => {
  clearContent();
  loadMenuPage();
});

document.getElementById("btn-contact").addEventListener("click", () => {
  clearContent();
  loadContactPage();
});