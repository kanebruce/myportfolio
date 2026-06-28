const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(
        ".project-card,.dashboard-card,.hero-card"
    );

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});
const modal = document.getElementById("dashboardModal");

const modalImg = document.getElementById("dashboardImage");

const modalTitle = document.getElementById("dashboardTitle");

const closeBtn = document.querySelector(".close-modal");

function openDashboard(image,title){

    modal.style.display="flex";

    modalImg.src=image;

    modalTitle.innerHTML=title;

}

closeBtn.onclick=function(){

    modal.style.display="none";

}

window.onclick=function(event){

    if(event.target===modal){

        modal.style.display="none";

    }

}

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        modal.style.display="none";

    }

});