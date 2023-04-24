console.log("WOrking");

var aboutMeNavLink = document.getElementById("aboutMeNavLink");

if (window.matchMedia("(max-width: 617px)").matches) {
  console.log("under 524px");
  aboutMeNavLink.href = "#aboutMeMobile";
  console.log("mobile -> " + aboutMeNavLink.href);
} else {
  aboutMeNavLink.href = "#Workouts";
  console.log("workouts -> " + aboutMeNavLink.href);
}
