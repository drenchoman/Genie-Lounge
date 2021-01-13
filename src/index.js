import "./modules/style.css";
import loadPage from "./modules/init.js"
import loadFlavours from "./modules/flavours.js"
import createHomePage from "./modules/home.js"
import createContactPage from "./modules/findUs.js"


// Tab Switching
let addNav = () => {
  let homeBtn = document.getElementById("home");
  let flavoursBtn = document.getElementById("flavours");
  let contactBtn = document.getElementById("findUs");

flavoursBtn.addEventListener("click", loadFlavours);
homeBtn.addEventListener("click", createHomePage);
contactBtn.addEventListener("click", createContactPage);

}

let init = () => {
  loadPage();
  createHomePage();
  addNav();
}

init();
