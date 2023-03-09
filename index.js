

let ok = true;
let menue = document.querySelector(".menue");
let header = document.querySelector(".header");
menue.addEventListener("click", (e) =>{
     menue.classList.remove("active");
     header.classList.toggle("active");
})

var typed = new Typed(".text",{
    strings : ["Fronted developer","Designer","Coder"],
    typeSpeed : 100,
    backSpeed : 50,
    loop : true
})

window.addEventListener("scroll",()=>{
    menue.classList.remove("active");
    header.classList.remove("active");
    let value = window.scrollY;
    document.querySelector(".stick").style = `transform: rotate(${value*2}deg)`;

    let reveal = document.querySelectorAll(".reveal");
    for(let i =0 ; i<reveal.length;i++){
        let windowHieght = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 150;
        
        if(revealTop < windowHieght - 150)
        {
            reveal[i].classList.add("now");
        }
        else{
            reveal[i].classList.remove("now");
        }
    }
})