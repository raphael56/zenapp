


const bulle = document.querySelector('.box-bille');
const btnSlow =document.querySelector('.btn-speed-slow')
const btnEasy =document.querySelector('.btn-speed-easy')
const btnFast =document.querySelector('.btn-speed-fast')
const TL = gsap.timeline();
const btnPause = document.querySelector('#btn-pause')
const btnReset = document.querySelector('#btn-reset')
const bgcolor = document.querySelector('.container-respirateur')
const play= document.getElementById('btn-pause')

const TL1 = gsap.timeline(paused: true)

TL1
.fromTo(bulle, { y: 0 }, { duration: 6, ease: "sine.inOut", y: '42vh' })
.fromTo(bulle, { y: 0 }, { duration: 6, ease: "sine.inOut", y: '42vh' , reversed: true})

btnSlow.addEventListener('click', () => TL.play())



// function activationBtnEasy() {
//     btnEasy.disabled= true
//     for (i = 0; i < 5 *10 ; i++){
    
//         TL
//         .fromTo(bulle, { y: 0 }, { duration: 5, ease: "sine.inOut", y: '42vh' })
//         .fromTo(bulle, { y: 0 }, { duration: 5, ease: "sine.inOut", y: '42vh' , reversed: true})
        
//         bgcolor.style.backgroundColor = '#6190e8'       
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


//btn de gestion pause et reset
btnPause.addEventListener('click', () => {
    TL.play()
})

btnReset.addEventListener('click', () => {
    TL.pause(0)
    bgcolor.style.backgroundColor = 'none'
    btnEasy.disabled == false
    btnSlow.disabled == false
    TL.en
})


