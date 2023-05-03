let increment = 0;

let show = document.querySelector('.show')
let cuerpo = document.querySelector('.container')


document.addEventListener ('click', (e)=>{
    console.log(e)

    if(e.target.matches ('#Decrease')){
        increment--
        show.innerHTML = increment 
        cuerpo.style.backgroundColor= 'rgba(131, 6, 156)'
        document.getElementById('img').src = 'IMG/2.png'
        } if (e.target.matches ('#Reset')){ 
            increment = 0
        show.innerHTML = increment 
        cuerpo.style.backgroundColor= 'rgba(175, 98, 196)'
        document.getElementById('img') = ''
    }if (e.target.matches ('#Increase')){ 
        Increase = ++
        show.innerHTML
        cuerpo.style.backgroundColor= 'rgba(220, 172, 233)'
        document.getElementById('img') = ''
    }
   
})
