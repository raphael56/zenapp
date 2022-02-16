const bulle = document.querySelector(".box-bille");
const btnSlow = document.querySelector(".btn-speed-slow");
const btnEasy = document.querySelector(".btn-speed-easy");
const btnFast = document.querySelector(".btn-speed-fast");
const btnReset = document.querySelector("#btn-reset");
const bgcolor = document.querySelector(".container-respirateur");
const play = document.getElementById("btn-pause");
const timer = document.getElementById("timer");
const timerText = document.getElementById("text-timer");

const TL1 = gsap.timeline({ paused: true });
const TL2 = gsap.timeline({ paused: true });
const TL3 = gsap.timeline({ paused: true });

const TL4 = gsap.timeline()


TL4
    .fromTo(bulle, { y: -400 }, { duration: 6, ease: "sine.inOut", y: "3" , rotation: 360})



TL1.fromTo(
    bulle,
    { y: -400 },
    { duration: 6, ease: "sine.inOut", y: "3", reversed: true, rotation: 100}
  ).fromTo(bulle, { y: -400 }, { duration: 6, ease: "sine.inOut", y: "3" , rotation: 100});

TL2.fromTo(
  bulle,
  { y: -400 },
  { duration: 5, ease: "sine.inOut", y: "3", reversed: true, rotation: 120}
).fromTo(bulle, { y: -400 }, { duration: 5, ease: "sine.inOut", y: "3" , rotation: 120});

TL3.fromTo(
    bulle,
    { y: -400 },
    { duration: 3, ease: "sine.inOut", y: "3", reversed: true, rotation: 180}
  ).fromTo(bulle, { y: -400 }, { duration: 3, ease: "sine.inOut", y: "3" , rotation: 180});

btnSlow.addEventListener("click", () => {
  TL2.progress(0);
  TL2.pause();
  TL3.progress(0);
  TL3.pause();
  TL1.progress(0);
  TL1.play();
  TL1.repeat(timer.value * 4); // 60/(6+6) -1 = 4
  bgcolor.style.backgroundColor = "rgba(89, 255, 100, 0.7)";
});

btnEasy.addEventListener("click", () => {
  TL3.progress(0);
  TL3.pause();
  TL1.progress(0);
  TL1.pause();
  TL2.progress(0);
  TL2.play();
  TL2.repeat(timer.value * 5); // 60/(5+5) -1 = 5
  bgcolor.style.backgroundColor = "rgba(66, 181, 189, 0.7)";
});

btnFast.addEventListener("click", () => {
  TL1.progress(0);
  TL1.pause();
  TL2.progress(0);
  TL2.pause();
  TL3.progress(0);
  TL3.repeat(timer.value * 9); // 60/(3+3) -1 = 9
  TL3.play();
  bgcolor.style.backgroundColor = "rgba(219, 52, 49, 0.7)";
    console.log(timer.value);
    
});

btnReset.addEventListener("click", () => {
  TL1.pause();
  TL2.pause();
  TL3.pause();
  TL1.progress(0);
  TL2.progress(0);
  TL3.progress(0);
  bgcolor.style.backgroundColor = "";
});

timer.addEventListener("change", () => {
  console.log(timer.value);
  timerText.innerHTML = `${timer.value} mn `;
});
