const bulle = document.querySelector('.box-bille');
const btnSlow =document.querySelector('.btn-speed-slow')
const btnEasy =document.querySelector('.btn-speed-easy')
const btnFast =document.querySelector('.btn-speed-fast')
const TL = gsap.timeline();
const btnPause = document.querySelector('#btn-pause')
const btnReset = document.querySelector('#btn-reset')
const bgcolor = document.querySelector('.container-respirateur')



let timer = document.querySelector('#inp-time');

TL.paused(!TL.paused())


function activation() {
   TL.pause(0)
   let i = 0
    let speed = 6
    let timer = 5
    for (i = 0; i < timer.value *10 ; i++){
        TL.paused(!TL.paused())
        TL
        .fromTo(bulle, { y: 0 }, { duration: speed, ease: "sine.inOut", y: 500 })
        
        .fromTo(bulle, { y: 0 }, { duration: speed, ease: "sine.inOut", y: 500 , reversed: true})
        
        bgcolor.style.backgroundColor = 'rgba(205, 204, 196, 1)'        
        i++
    }
    console.log(TL)
   
}

btnSlow.addEventListener('click', () => activation())



// function activationBtnEasy(i) {
//     if (btnFast.disabled == true
//          || btnSlow.disabled == true) {
//         btnFast.disabled = false
//         btnSlow.disabled =false
//     }
//     btnEasy.disabled = true
//     // TL.paused(!TL.paused())
//     for (i = 0; i < timer.value *12 ; i++){
//         if (i<1) {
//             TL.paused(!TL.paused())
//         }
//         TL
//             .fromTo(bulle, { y: 0 }, { duration: 5, ease: "sine.inOut", y: 500 })

//             .fromTo(bulle, { y: 0 }, { duration: 5, ease: "sine.inOut", y: 500 , reversed: true})
            
//             bgcolor.style.backgroundColor = 'rgba(205, 204, 96, 1)'
        
//         i++
//     }
   
  
// }

// btnEasy.addEventListener('click', () => activationBtnEasy())



// function activationBtnFast(i){
//     i = 0
//     if (btnEasy.disabled == true || btnSlow.disabled == true ) {
//         btnEasy.disabled == false
//         btnSlow.disabled == false
//     }
//     btnFast.disabled = true
//     TL.paused(!TL.paused())
//     for (i = 0; i < timer.value *20 ; i++){
   
//         TL
//             .fromTo(bulle, { y: 0 }, { duration: 3, ease: "sine.inOut", y: 500 })

//             .fromTo(bulle, { y: 0 }, { duration: 3, ease: "sine.inOut", y: 500 , reversed: true})
            
//             bgcolor.style.backgroundColor = 'rgba(140, 25, 0, 1)'
        
        
//         i++
//     }
    
    
   
// }

// btnFast.addEventListener('click', () => activationBtnFast())


// //btn de gestion pause et reset
// btnPause.addEventListener('click', () => {
//     TL.paused(!TL.paused())
//     btnPause.innerHTML = TL.paused() ? "Play" : "Pause"
// })

// btnReset.addEventListener('click', () => {
//     TL.pause(0)
//     bgcolor.style.backgroundColor = 'none'
// })


//     // affichage du timer sous le input Range
// let temps = document.getElementById('affichageDuTimer')

// timer.oninput = function () {
//     temps.textContent = timer.value
// }
// console.log(temps.textContent)