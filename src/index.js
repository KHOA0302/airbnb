const header = document.querySelector(".header");
const searchContainer = document.querySelector(".search-container");

const searchLocationBtn = document.querySelector(".search-location");
const searchTimeBtn = document.querySelector(".search-time");
const searchPeopleBtn = document.querySelector(".search-people");

const coverScreen = document.querySelector(".header-coverScreen");
const searchFeature = document.querySelector(".search-feature");

const navLocationFeature = document.querySelector(".feature-nav-location");
const navLiveExpFeatures = document.querySelector(".feature-nav-liveExp");
const navExpFeatures = document.querySelector(".feature-nav-experience");

const searchIcon = searchFeature.querySelector(".search-icon");
const textInSearchIcon = document.querySelector(".text-search-icon");

const headerSearchHandler = () => {
  header.style = "box-shadow: none";
  header.classList.add("header-scale");
  coverScreen.classList.add("on");
  searchContainer.classList.add("scale-transform");

  searchFeature.classList.remove("search-feature-hidden");
  searchFeature
    .querySelector(".feature-content-container")
    .classList.add("change-background");

  textInSearchIcon.style.display = "block";
  searchIcon.classList.add("change-size");
};

coverScreen.onclick = () => {
  header.style = "box-shadow: var(--box-shadow)";
  header.classList.remove("header-scale");
  coverScreen.classList.remove("on");
  searchContainer.classList.remove("scale-transform");

  searchFeature.classList.add("search-feature-hidden");

  navLocationFeature.classList.remove("chosen");
  navLiveExpFeatures.classList.remove("chosen");
  navExpFeatures.classList.remove("chosen");
};

searchLocationBtn.onclick = () => {
  headerSearchHandler();

  navLocationFeature.classList.add("chosen");
};

searchTimeBtn.onclick = () => {
  headerSearchHandler();

  navLocationFeature.classList.add("chosen");
};

searchPeopleBtn.onclick = () => {
  headerSearchHandler();

  navLocationFeature.classList.add("chosen");
};
