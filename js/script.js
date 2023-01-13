//Механика говна
let memoryTrace;
document.querySelector(".main__bcg").addEventListener("click",function(event){
    let poo = document.createElement("img");
    poo.setAttribute("src", "./img/poo.png")
    
    poo.classList.add("poo");
    poo.style.top = Math.floor(Math.random() * 50) + 20 + "%";
    
    //Определение стороны на рандоме
    let rightOrLeft = Math.floor(Math.random() * 2);
    
    if(rightOrLeft === 0){
        poo.style.left = -1 + "%";
    } else if(rightOrLeft === 1){
        poo.style.right = -1 + "%";
    }

    poo.style.transform = "scale(10)";
    
    document.querySelector(".poop__container").append(poo);


    
    setTimeout(pooShoot,70)


    //Функция выкидывания -> уменьшения -> удаления какашек
    function pooShoot(){
        let poop = document.querySelectorAll(".poo");
        poop[poop.length - 1].style.top = event.clientY + "px";
        let rotate = Math.floor(Math.random() * 180) + "deg";
        if(rightOrLeft === 0){
            poop[poop.length - 1].style.left = event.clientX + "px";
            poop[poop.length - 1].style.transform = `scale(1.2) translate(-50%, -50%) rotate(${rotate})`;
        } else if(rightOrLeft === 1){
            poop[poop.length - 1].style.right = window.innerWidth - event.clientX + "px";
            poop[poop.length - 1].style.transform = `scale(1.2) translate(+50%, -50%) rotate(${rotate})`;
        }
        

        

        //Функция, отвечающая за появление следа после броска какашки
        setTimeout(function(){
            poop[poop.length - 1].style.opacity = "0";
            setTimeout(function(){poop[poop[poop.length - 1].remove()]},120)
            let trace = document.createElement("img");
            let numberRandomTrace = Math.floor(Math.random() * 3);
            while(numberRandomTrace === memoryTrace){numberRandomTrace = Math.floor(Math.random() * 3);}
            memoryTrace = numberRandomTrace;
            trace.setAttribute("src", `./img/traces/poo-v-${numberRandomTrace}.png`);
            trace.classList.add("trace");
            trace.style.top = event.clientY + "px";
            trace.style.left = event.clientX + "px";
            trace.style.transform = "translate(-50%, -50%)"
            document.querySelector(".traces-of-shit").append(trace);
        },700)
    }
});




//Подсказка
let info = document.querySelector(".menu__information");
let about = document.querySelector(".menu__about");

info.addEventListener('mouseover', function(){
    about.classList.add("about__visible");
    about.classList.remove("about__hidden");
    setTimeout(function(){about.classList.remove("hidden");},100)
})

info.addEventListener("mouseout", function(event){
    setTimeout(function(){about.classList.add("hidden");},100)
    about.classList.add("about__hidden");
    about.classList.remove("about__visible");
    
})