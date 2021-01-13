let setActiveBtn = (id) => {
  const activeBtn = document.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active")
  }
  const newActive = document.querySelector(id);
  newActive.classList.add("active")
};

let createMainHeader = () => {
  let main = document.querySelector(".main")

  let header = document.createElement("H1");
  header.classList.add("header");
  header.textContent = "Genie Lounge";

  let textDiv = document.createElement("div");
  let subTitle = document.createElement("p");
  textDiv.classList.add("textDiv")
  subTitle.classList.add("homeSubTitle")
  subTitle.textContent = "Hookah Bar"

  textDiv.appendChild(header);
  textDiv.appendChild(subTitle);
  main.appendChild(textDiv);

  let heroDiv = document.createElement("div");
  heroDiv.classList.add("heroImage")
// Insert image to div
  const heroImage = new Image();
  heroImage.src = "./images/hookah.jpg"


  const smoke = new Image();
  smoke.classList.add("smokeImage")
  smoke.src = "images/smoke.jpg"

  main.style.backgroundImage = "url(./images/smokes.jpg)";

  heroDiv.appendChild(heroImage);
  main.appendChild(heroDiv);

}

let createContactInfo = () => {
  let sub = document.querySelector(".sub")
  // let cInfo = document.createElement("div");
  let head2 = document.createElement("H2");
  let head3 = document.createElement("H3");
  let head4 = document.createElement("H3");

  // cInfo.className = "contactInfo";

  head2.textContent = "The closest you can get to an indoor hookah lounge in Auckland";
  head3.textContent = "19 Cryers Road, East Tamaki, Auckland 2013"
  head4.textContent = "Inside the Esquires"

  sub.appendChild(head2);
  sub.appendChild(head3);
  sub.appendChild(head4);

}
let removeTheFlavour = () => {
  let main = document.querySelector(".main");
  main.classList.remove("flavourDiv");
}

let createHomePage = () => {
  let main = document.querySelector(".main");
  let sub = document.querySelector(".sub")
  main.textContent = "";
  sub.textContent = "";
  removeTheFlavour();
  setActiveBtn("#home")
  createMainHeader();
  createContactInfo();
}

export default createHomePage
