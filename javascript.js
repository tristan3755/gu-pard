
document.querySelector(".contenu1").addEventListener("mouseover",(event)=>{

hover()
nav()

})

document.querySelector(".contenu1").addEventListener("mouseout",(event)=>{

   
    dehover()
    
})


function hover(){

    let back=document.querySelector(".contener1")
    back.style.width="100%"
    back.style.transition="5s"

    let back2=document.querySelector(".contenu1")
    back2.style.width="100%"
    back2.style.transition="5s"


}

function dehover(){

    let back=document.querySelector(".contener1")
    back.style.width="45%"
    back.style.transition="5s"

    let back2=document.querySelector(".contenu1")
    back2.style.width="45%"
    back2.style.transition="5s"


}

function nav(){

    let nav=document.querySelector("header")
    nav.style.display="flex"

    
   


}