const header = document.querySelector(".header");
const searchLocationBtn = document.querySelector(".search-location");
const searchTimeBtn = document.querySelector(".search-time");
const searchPeopleBtn = document.querySelector(".search-people");

const headerSearchHandle = () => {
  const headerParent = header.parentNode;

  header.style = "box-shadow: none";
  header.classList.add("header-scale");

  const coverScreen = document.querySelector(".header-coverScreen");
  coverScreen.classList.add("on");
};

searchLocationBtn.onclick = () => {
  headerSearchHandle();
};

header.parentNode.querySelector(".header-coverScreen").onclick = () => {
  console.log("Im in");
};
