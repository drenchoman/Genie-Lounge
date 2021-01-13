let createNavBar = () => {
  let content = document.querySelector("#content")
  let navBar = document.createElement("div")
  let navHome = document.createElement("div");
  let navFlavours = document.createElement("div");
  let navContact = document.createElement("div");
  let txtHome = document.createElement("p");
  let txtFlavours = document.createElement("p");
  let txtContact = document.createElement("p");
  let navLogo = document.createElement("div")
  
  txtHome.innerHTML = "Home"
  txtFlavours.innerHTML = "Flavours"
  txtContact.innerHTML = "Find Us"

  const logo = new Image();
  logo.classList.add("navLogo")
  logo.src = "./images/lounge.png"

  navBar.className = "navBar";
  navHome.className = "active";
  navHome.id = "home"
  navFlavours.id = "flavours";
  navContact.id = "findUs";

  navLogo.appendChild(logo)
  navContact.appendChild(txtContact);
  navFlavours.appendChild(txtFlavours);
  navHome.appendChild(txtHome);
  navBar.appendChild(navLogo)
  navBar.appendChild(navHome);
  navBar.appendChild(navFlavours);
  navBar.appendChild(navContact);

  content.appendChild(navBar);
  console.log("Navabar working")
}
let createMainDiv = () => {
let main = document.createElement("main");
main.classList.add("main");
let content = document.querySelector("#content");
content.appendChild(main)


}
let createSubDiv = () => {
  let sub = document.createElement("div");
  sub.classList.add("sub");
  content.appendChild(sub)
}

let createSocialBar = () => {
  let content = document.querySelector("#content")
  let sBar = document.createElement("div");
  let instaI = document.createElement("a");
  let fbI = document.createElement("a");

  sBar.className = "socialBar";
  instaI.className = "fab fa-instagram fa-2x x";
  fbI.className = "fab fa-facebook-square fa-2x y";
  instaI.href = "https://www.instagram.com/genielounge/?hl=en"
  fbI.href = "https://www.facebook.com/GenieLounge/"
  sBar.appendChild(instaI);
  sBar.appendChild(fbI);
  content.appendChild(sBar);
}


let loadPage = () => {
  createNavBar();
  createMainDiv();
  createSubDiv();
  // createMainHeader();
  // createContactInfo();
  createSocialBar();
};

export default loadPage
