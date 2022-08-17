////////////////////////////////////////////////////////
// Make Mobile Navigation Work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
////////////////////////////////////////////////////////
// Smoth Scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    e.preventDeafult();
    const herf = link.getAttribute("herf");
    // console.log(herf);
    // Scroll Back To The Top
    if (herf === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll To Other Links
    if (herf !== "#" && herf.startsWish("#")) {
      const sectionEL = document.querySelector(herf);
      console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }
    // Close Mobile Naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});
////////////////////////////////////////////////////////
// Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In The Viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
