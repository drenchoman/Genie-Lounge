let setActiveBtn = (id) => {
  const activeBtn = document.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active")
  }
  const newActive = document.querySelector(id);
  newActive.classList.add("active")
};

let createContactInfo = () => {
  let main = document.querySelector(".main");
  // let contactDiv = document.createElement("div");
  let phoneHeader = document.createElement("h2");
  let addressHeader = document.createElement("h2");
  let phoneTxt = document.createElement("p");
  let addressTxt = document.createElement("p");
  // let imageDiv = document.createElement("div")
  let contactImage = document.createElement("img");
  let contactInfo = document.createElement("div");

  // contactDiv.classList.add("mainHeader")
  // contactImage.classList.add("contactImage");
  contactInfo.classList.add("contactTxt")

  // imageDiv.classList.add("")

  phoneHeader.textContent = "Phone"
  addressHeader.textContent = "Address"

  phoneTxt.textContent = "021 407 337"
  addressTxt.classList.add("addressTxt");
  addressTxt.innerHTML = '<a href="https://www.google.com/maps/search/?api=1&query=Genie+Lounge+Cryers+Road">19 Cryers Road, East Tamaki, Auckland 2013</a>'

  const cImage = new Image();
  cImage.classList.add("contactImage")
  cImage.src = "./images/shisha.jpg"

  contactInfo.appendChild(phoneHeader);
  contactInfo.appendChild(phoneTxt);
  contactInfo.appendChild(addressHeader);
  contactInfo.appendChild(addressTxt);
  main.appendChild(cImage)
  main.appendChild(contactInfo)


}

let removeTheFlavour = () => {
  let main = document.querySelector(".main");
  main.classList.remove("flavourDiv");
}

let createContactPage = () => {
  const main = document.querySelector(".main");
  const sub = document.querySelector(".sub");
  main.style.backgroundImage = "none";
  main.textContent = "";
  // sub.textContent = "";
  removeTheFlavour();

  createContactInfo();
  setActiveBtn("#findUs");

}


export default createContactPage
