import firstjokes from "./firstjokes";
import "./assets/style.css";
import laugh from "./assets/laugh.png";

const laughimg = document.getElementById("laughing");
laughimg.src = laugh;

firstjokes();

const btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", () => {
    firstjokes();
});
