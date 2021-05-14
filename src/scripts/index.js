import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/AppBar";
import "./components/FootBar";
import "./components/HeroElement";
import "./components/RestaurantList";

document.addEventListener("DOMContentLoaded", () => {
  const burgetBtn = document.querySelector(".burger");
  const drawer = document.querySelector(".nav__links");
  const hero = document.querySelector(".hero");
  const main = document.querySelector("main");

  burgetBtn.addEventListener("click", (event) => {
    console.log("click");
    drawer.classList.toggle("open");
    event.stopPropagation();
  });

  burgetBtn.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      console.log("click");
      drawer.classList.toggle("open");
      event.stopPropagation();
    }
  });

  hero.addEventListener("click", () => drawer.classList.remove("open"));
  main.addEventListener("click", () => drawer.classList.remove("open"));
});
