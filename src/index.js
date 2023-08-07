const header = document.querySelector("header");
const searchLocationBtn = document.querySelector(".search-location");
const searchTimeBtn = document.querySelector(".search-time");
const searchPeopleBtn = document.querySelector(".search-people");

const headerSearchHandle = () => {
  const headerContainer = header.querySelector(".header-container");
  header.style = "box-shadow: none";
  header.classList.add("header-scale");
};

searchLocationBtn.onclick = () => {
  headerSearchHandle();
};
