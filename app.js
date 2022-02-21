const bulle = document.querySelector(".box-bille");
const btnSlow = document.querySelector(".btn-speed-slow");
const btnEasy = document.querySelector(".btn-speed-easy");
const btnFast = document.querySelector(".btn-speed-fast");
const btnReset = document.querySelector("#btn-reset");
const bgcolor = document.querySelector(".container-respirateur");
const bgColorTimer = document.querySelector(".container-timer")
const bgSectionPrincipale = document.querySelector('body')
const play = document.getElementById("btn-pause");
const timer = document.getElementById("timer");
const timerText = document.getElementById("text-timer");

const TL1 = gsap.timeline({ paused: true });
const TL2 = gsap.timeline({ paused: true });
const TL3 = gsap.timeline({ paused: true });

const TL4 = gsap.timeline()


function barreColor(){
// la valeur du temps timer.value doit faire changer la couleur de la barre container-timer
    a = 255-timer.value*20
    b = 255-timer.value*8
    c = 255-timer.value*15
    rgbColor= `rgb(${a}, ${b}, ${c})`
    // 1-3= vert
    // 4-6= bleu
    // 7-9= rouge
    bgColorTimer.style.backgroundColor= rgbColor
}





TL4
    .fromTo(bulle, { y: 0 }, { duration: 6, ease: "sine.inOut", y: '360px' , rotation: 360})



TL1.fromTo(
    bulle,
    { y: '0' },
    { duration: 3, ease: "sine.inOut", y: '360px', reversed: true, rotation: 100}
  ).fromTo(bulle, { y: '0' }, { duration: 7, ease: "sine.inOut", y: '360px' , rotation: 100});

TL2.fromTo(
    bulle,
    { y: '0' },
    { duration: 5, ease: "sine.inOut", y: '360px', reversed: true, rotation: 100}
  ).fromTo(bulle, { y: '0' }, { duration: 5, ease: "sine.inOut", y: '360px' , rotation: 100});

TL3.fromTo(
    bulle,
    { y: '3' },
    { duration: 7, ease: "sine.inOut", y: '360px', reversed: true, rotation: 100}
  ).fromTo(bulle, { y: '3' }, { duration: 3, ease: "sine.inOut", y: '360px' , rotation: 100});
  

btnSlow.addEventListener("click", () => {
    bgSectionPrincipale.style.backgroundColor= "rgba(89, 255, 100, 0.7)";
  TL2.progress(0);
  TL2.pause();
  TL3.progress(0);
  TL3.pause();
  TL1.progress(0);
  TL1.play();
  TL1.repeat(timer.value * 5); // 60/(6+6) -1 = 4
  bgcolor.style.backgroundColor = "rgba(89, 255, 100, 0.7)";
});

btnEasy.addEventListener("click", () => {
    bgSectionPrincipale.style.backgroundColor= "rgba(66, 181, 189, 0.7)";
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
    bgSectionPrincipale.style.backgroundColor= "rgba(219, 52, 49, 0.7)";
  TL1.progress(0);
  TL1.pause();
  TL2.progress(0);
  TL2.pause();
  TL3.progress(0);
  TL3.repeat(timer.value * 5); // 60/(3+3) -1 = 9
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
    bgSectionPrincipale.style.backgroundColor= "";
});

timer.addEventListener("change", () => {
  console.log(timer.value);
    timerText.innerHTML = `${timer.value} mn `;
    barreColor()
});



