console.log("WOrking");

// <!---------- About Me ---------!>

var aboutMeNavLink = document.getElementById("aboutMeNavLink");

if (window.matchMedia("(max-width: 617px)").matches) {
  console.log("under 524px");
  aboutMeNavLink.href = "#aboutMeMobile";
  console.log("mobile -> " + aboutMeNavLink.href);
} else {
  aboutMeNavLink.href = "#AboutMe";
  console.log("workouts -> " + aboutMeNavLink.href);
}

// <!---------- Qualifications ---------!>

var qualificationsNavLink = document.getElementById("qualificationsNavLink");

if (window.matchMedia("(max-width: 617px)").matches) {
  console.log("under 524px");
  qualificationsNavLink.href = "#qualificationsMobile";
  console.log("mobile -> " + qualificationsNavLink.href);
} else {
  qualificationsNavLink.href = "#Qualifications";
  console.log("workouts -> " + qualificationsNavLink.href);
}

// <!---------- Portfolio ---------!>

var portfolioNavLink = document.getElementById("portfolioNavLink");

if (window.matchMedia("(max-width: 1217px)").matches) {
  console.log("under 524px");
  portfolioNavLink.href = "#portfolioMobile";
  console.log("mobile -> " + portfolioNavLink.href);
} else {
  portfolioNavLink.href = "#Portfolio";
  console.log("workouts -> " + portfolioNavLink.href);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("epqMobileText").style.display = "none";
  document.getElementById("epqOpenButton").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("epqMobileText").style.display = "block";
  document.getElementById("epqOpenButton").style.display = "block";
}
