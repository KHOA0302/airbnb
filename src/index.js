const header = document.querySelector(".header");
const searchContainer = document.querySelector(".search-container");
const searchLocationBtn = document.querySelector(".search-location");
const searchTimeBtn = document.querySelector(".search-time");
const searchPeopleBtn = document.querySelector(".search-people");
const coverScreen = document.querySelector(".header-coverScreen");

const headerSearchHandler = () => {
  header.style = "box-shadow: none";
  header.classList.add("header-scale");
  coverScreen.classList.add("on");
  searchContainer.classList.add("scale-transform");

  //test
  document.querySelector(".search-feature").style = "display: block";
};

coverScreen.onclick = () => {
  header.style = "box-shadow: var(--box-shadow)";
  header.classList.remove("header-scale");
  coverScreen.classList.remove("on");
  searchContainer.classList.remove("scale-transform");

  //test
  document.querySelector(".search-feature").style = "display: none";
};

searchLocationBtn.onclick = () => {
  headerSearchHandler();
};
