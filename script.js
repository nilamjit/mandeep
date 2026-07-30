// ===== Elements =====

const scenes = document.querySelectorAll(".scene, .ending");
const sun = document.querySelector(".sun");
const sky = document.querySelector(".sky");
const stars = document.querySelector(".stars");
const button = document.getElementById("loveBtn");


// ===== Fade In =====

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.25
});

scenes.forEach(scene=>{

    scene.style.opacity="0";
    scene.style.transform="translateY(80px)";
    scene.style.transition="1s ease";

    observer.observe(scene);

});


// ===== Scroll Animation =====

window.addEventListener("scroll",()=>{

    const max=document.body.scrollHeight-window.innerHeight;

    const progress=window.scrollY/max;

    // Sun moves down

    sun.style.top=(10+progress*45)+"%";

    // Sky changes

    const hue=progress*40;
    const bright=1-progress*0.35;

    sky.style.filter=`hue-rotate(${hue}deg) brightness(${bright})`;

    // Stars fade in

    stars.style.opacity=Math.max(0,(progress-0.65)*3);

});


// ===== Button =====

button.addEventListener("click",()=>{

    button.innerHTML="❤️ Forever ❤️";

    for(let i=0;i<35;i++){

        createHeart();

    }

});


// ===== Hearts =====

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left="50%";
    heart.style.top="50%";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.color="#ff6b81";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    const x=(Math.random()-0.5)*600;
    const y=(Math.random()-0.5)*600;

    heart.animate([

        {

            transform:"translate(-50%,-50%) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${x}px,${y}px) scale(0)`,

            opacity:0

        }

    ],{

        duration:1800,

        easing:"ease-out"

    });

    setTimeout(()=>heart.remove(),1800);

}


// ===== Floating Fireflies =====

const fireflies=document.querySelectorAll(".fireflies span");

fireflies.forEach(fly=>{

    setInterval(()=>{

        fly.style.transform=`
            translate(
            ${(Math.random()-0.5)*60}px,
            ${(Math.random()-0.5)*40}px
            )
        `;

    },2500+Math.random()*2000);

});