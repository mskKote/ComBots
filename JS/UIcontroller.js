"use strict"

let light_state = "ON";

function theme(){
    if (light_state === "ON") {
        light_state = "OFF";
        let light = document.getElementById("theme");
        light.removeAttribute("href");
        }
    else {
        light_state = "ON";
        let light = document.getElementById("theme");
        light.setAttribute("href", "CSS/color_theme_dark.css");
    }
}