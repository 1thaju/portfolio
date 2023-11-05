const mode = document.querySelector(".mode");
const body = document.body;
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger-menu");
const main = document.querySelectorAll("main");
const container = document.querySelectorAll("container");


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            console.log(entry)
            entry.target.classList.add('show')
        }
      
        else{
            entry.target.classList.remove('show')
        }
    })
})
const hidden = document.querySelectorAll('.hidden')
hidden.forEach((el)=>observer.observe(el))


mode.addEventListener("click",()=>{
    mode.classList.toggle("rotate");
    body.classList.toggle("mode1");
})
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    main.style.display = "none";
})
