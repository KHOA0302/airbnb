const header = document.querySelector(".header");
const headerUser = document.querySelector(".header-user");
const headerLogo = document.querySelector(".header-logo");
const searchContainer = document.querySelector(".search-container");

const searchLocationBtn = document.querySelector(".search-location");
const searchTimeBtn = document.querySelector(".search-time");
const searchPeopleBtn = document.querySelector(".search-people");

const coverScreen = document.querySelector(".header-coverScreen");
const searchFeature = document.querySelector(".search-feature");
const searchFeatureContent = searchFeature.querySelector(
  ".search-feature-content"
);

const navLocationFeature = document.querySelector(".feature-nav-location");
const navExpFeature = document.querySelector(".feature-nav-experience");
const navLiveExpFeature = document.querySelector(".feature-nav-liveExp");

const navContentLocation = document.querySelector(".content-location");
const navContentCheck = document.querySelector(".content-check");
const navContentCheckIn = document.querySelector(".content-checkin");
const navContentCheckOut = document.querySelector(".content-checkout");
const navContentMoreDay = document.querySelector(".content-more-day");
const navContentPeople = document.querySelector(".content-people");

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

const navLocationContentChosen = () => {
  navContentLocation.classList.add("nav-content-chosen");
};

const navCheckInContentChosen = () => {
  navContentCheckIn.classList.add("nav-content-chosen");
};

const navCheckOutContentChosen = () => {
  navContentCheckOut.classList.add("nav-content-chosen");
};

const navPeopleContentChosen = () => {
  navContentPeople.classList.add("nav-content-chosen");
};

const navPeopleMoreDayChosen = () => {
  navContentMoreDay.classList.add("nav-content-chosen");
};

const closeNavContent = () => {
  navContentLocation.classList.remove("nav-content-chosen");
  navContentCheckIn.classList.remove("nav-content-chosen");
  navContentCheckOut.classList.remove("nav-content-chosen");
  navContentPeople.classList.remove("nav-content-chosen");
  navContentMoreDay.classList.remove("nav-content-chosen");
};

const closeHeaderContent = () => {
  header.classList.remove("header-scale");
  coverScreen.classList.remove("on");
  searchContainer.classList.remove("scale-transform");

  searchFeature.classList.add("search-feature-hidden");

  navLocationFeature.classList.remove("chosen");
  navLiveExpFeature.classList.remove("chosen");
  navExpFeature.classList.remove("chosen");

  closeNavContent();
  CloseNavExpFeature();
};

const navExpFeatureChosen = () => {
  navLocationFeature.classList.remove("chosen");
  navExpFeature.classList.add("chosen");

  navContentCheckIn.classList.add("hide");
  navContentCheckOut.classList.add("hide");
  navContentMoreDay.classList.remove("hide");

  navContentCheck.classList.add("wide");
};

const CloseNavExpFeature = () => {
  navLocationFeature.classList.add("chosen");
  navExpFeature.classList.remove("chosen");

  navContentCheckIn.classList.remove("hide");
  navContentCheckOut.classList.remove("hide");
  navContentMoreDay.classList.add("hide");

  navContentCheck.classList.remove("wide");
};

const turnWhiteSearchFeature = () => {
  const navContentChosen = document.querySelector(".nav-content-chosen");
  const searchIconNavContent = document.querySelector(
    ".content-people .search-icon"
  );

  if (navContentChosen) {
    navContentChosen.classList.remove("nav-content-chosen");
    searchFeature
      .querySelector(".feature-content-container")
      .classList.remove("change-background");
    searchIconNavContent.childNodes[3].style.display = "none";
  }
};

coverScreen.onclick = () => {
  header.style = "box-shadow: var(--box-shadow)";
  closeHeaderContent();
};

searchLocationBtn.onclick = () => {
  headerSearchHandler();
  navLocationFeature.classList.add("chosen");
  navLocationContentChosen();
  CloseNavExpFeature();
};

searchTimeBtn.onclick = () => {
  headerSearchHandler();
  navLocationFeature.classList.add("chosen");
  navCheckInContentChosen();
  CloseNavExpFeature();
};

searchPeopleBtn.onclick = () => {
  headerSearchHandler();
  navLocationFeature.classList.add("chosen");
  navPeopleContentChosen();
};

navContentLocation.onclick = () => {
  closeNavContent();
  navLocationContentChosen();
};

navContentCheckIn.onclick = () => {
  closeNavContent();
  navCheckInContentChosen();
};

navContentCheckOut.onclick = () => {
  closeNavContent();
  navCheckOutContentChosen();
};

navContentPeople.onclick = () => {
  closeNavContent();
  navPeopleContentChosen();
};

navContentMoreDay.onclick = () => {
  closeNavContent();
  navPeopleMoreDayChosen();
};

navExpFeature.onclick = (e) => {
  e.stopPropagation()
  navExpFeatureChosen();
};

navLocationFeature.onclick = (e) => {
  e.stopPropagation()
  CloseNavExpFeature();
};

searchFeatureContent.onclick = (e) => {
  e.stopPropagation();
  searchFeature
    .querySelector(".feature-content-container")
    .classList.add("change-background");

  const searchIconNavContent = document.querySelector(
    ".content-people .search-icon"
  );
  searchIconNavContent.childNodes[3].style.display = "block";
};

searchFeature.onclick = () => {
  turnWhiteSearchFeature();
};

headerLogo.onclick = () => {
  turnWhiteSearchFeature();
};

headerUser.onclick = () => {
  turnWhiteSearchFeature();
};
