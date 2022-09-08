function nav(){
    var navbar = document.querySelector("#nav");
    var scrollvalue= window.scrollY;
    if(scrollvalue<500){
        navbar.classList.remove('navcolor');
    } else{
        navbar.classList.add('navcolor');
   
    }
}

window.addEventListener('scroll',nav);