let createFlavourDiv = (src, text, price, alt) => {
  const main = document.querySelector(".main");
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);

  const flavDesc = document.createElement("div");
  flavDesc.classList.add("description");

  const flavName = document.createElement("h3")
  flavName.textContent = text;

  const flavPrice = document.createElement("h2");
  flavPrice.textContent = price;

  flavDesc.appendChild(flavName);
  flavDesc.appendChild(flavPrice);

  main.appendChild(img);
  main.appendChild(flavDesc);

  return main;

};

let setActiveBtn = (id) => {
  const activeBtn = document.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active")
  }
  const newActive = document.querySelector(id);
  newActive.classList.add("active")
};

let addTheFlavour = () => {
  let main = document.querySelector(".main");
  main.classList.add("flavourDiv")
}

let loadFlavours = () => {

  const mainContent = document.querySelector(".main");

  mainContent.textContent = ""
  mainContent.style.backgroundImage = "none";

  setActiveBtn("#flavours");
  addTheFlavour();

  const flavours = [
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Fresh-Mist-Fresh-Mist-50gr-600x600-1.jpg",
      "Fresh Flavour",
      "$15",
      "Fresh Shisha Flavour"
    ),
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Blueberry-22-Chernika-50gr-600x600-1.jpg",
      "Blueberry",
      "$15",
      "Blueberry Shisha Flavour"
    ),
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Two-Apples-with-Mint-37-Dvoynoe-Yabloko-Myata-50gr-600x600-1.jpg",
      "Double Apple",
      "$15",
      "Double Apple Shisha Flavour"
    ),
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Orange-20-Apelysin-50gr-600x600-1.jpg",
      "Orange",
      "$15",
      "Orange Shisha Flavour"
    ),
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Iced-Raspberry-Mint-Malina-Myata-Led-50gr-600x600-1.jpg",
      "Raspberry Mint",
      "$15",
      "Raspberry Mint Shisha Flavour"
    ),
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Lemon-With-Mint-Limon-Myata-50gr-600x600-1.jpg",
      "Lemon Mint",
      "$15",
      "Lemon Mint Shisha Flavour"
    ),
    createFlavourDiv(
      "https://houseofzayn.co.nz/wp-content/uploads/2020/04/Tabak-Al-Fakher-Orange-with-Mint-Apelysin-Myata-50gr-600x600-1.jpg",
      "Orange Mint",
      "$15",
      "Orange Mint Shisha Flavour"
    )
  ];

  flavours.forEach((flavour) => {
    main.appendChild(flavour);
  });

}

export default loadFlavours
