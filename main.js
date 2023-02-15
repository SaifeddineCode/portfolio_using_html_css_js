let progress = document.querySelectorAll(".stack-el .progress span")
let theRoof = document.querySelector(".mySkills")



window.onscroll = function(){
    if(window.scrollY > theRoof.offsetTop - 150){
        progress.forEach(e=>{
            e.style.width = e.dataset.rate
        })
    }
    netflixAnimation()
}




let workRoof = document.querySelector(".work")
let firstLine = document.querySelector(".project .firstLine")
let secondLine = document.querySelector(".project .secondLine ")
let thirdLine = document.querySelector(".project .thirdLine ")
let playButtonYt = document.querySelector(".youtube .play")
let twitAnim = document.querySelector(".twitter .note ")



function netflixAnimation(){
    if(window.scrollY >= workRoof.offsetTop - 150){
        firstLine.classList.add("animationOne");
        secondLine.classList.add("animationTwo");
        thirdLine.classList.add("animationThree");
        playButtonYt.classList.add("playanimation");
        twitAnim.classList.add("twitanim");
    }
    /*to Top */

let aboutSection = document.querySelector(".about")
let toTop = document.querySelector(".toTop")

    if(window.scrollY >= aboutSection.offsetTop ){
        toTop.style.display ="block"
        toTop.addEventListener("click",function(){
            window.scrollTo(top)
        })
    }else {
        toTop.style.display ="none"
    }

}   



/*Burger Menu*/

let burgerMenu = document.querySelector(".burger-menu")
let headerSection = document.querySelector(".header_section")
let body = document.querySelector("body")

burgerMenu.addEventListener("click",function(){
    headerSection.classList.toggle("showHeader")
    body.classList.toggle("overflowHidden")
})


let navItem = document.querySelectorAll(".nav-item")

navItem.forEach((e)=>{
    e.addEventListener("click",function(){
        headerSection.classList.remove("showHeader")
        body.classList.remove("overflowHidden")
    })
    
})







