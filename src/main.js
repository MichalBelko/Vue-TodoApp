import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// const labels = document.querySelectorAll(".form-control label");

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });

// const buttons = document.querySelectorAll(".ripple");

// buttons.forEach((button) => {
//   button.addEventListener("click", function(e) {
//     const x = e.clientX;
//     const y = e.clientY;

//     const buttonTop = e.target.offsetTop;
//     const buttonLeft = e.target.offsetLeft;

//     const xInside = x - buttonLeft;
//     const yInside = y - buttonTop;

//     const circle = document.createElement("span");
//     circle.classList.add("circle");
//     circle.style.top = yInside + "px";
//     circle.style.left = xInside + "px";

//     this.appendChild(circle);

//     setTimeout(() => circle.remove(), 500);
//   });
// });
