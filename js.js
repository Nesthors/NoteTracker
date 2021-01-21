'strict mode'

let text = document.getElementById("mainInput")
let btn = document.getElementById("mainButton")
let out = document.getElementById("out")
let wit = document.getElementById("witness")

// events 

btn.addEventListener("click", myFunction);

//  functions

function myFunction(e){

     e.preventDefault() 

     if( text.value.trim() == ""){

         wit.style.display= "block";
         setTimeout( function(){ wit.style.display= "none" },1000);

     }else{

    let div = document.createElement("div");
    let title = document.createElement("h5");
    let p = document.createElement("p");
    let outButton = document.createElement("button");

    p.innerHTML= text.value ;
    outButton.classList.add("outButton");
    div.classList.add("divOut");
    outButton.innerText= "DELETE";
    title.innerHTML= "Post: "+Number(document.querySelectorAll(".divOut").length+1);

    div.appendChild(title);
    div.appendChild(p);
    div.appendChild(outButton);
    out.appendChild(div);
    
    text.value = "" ;

    div.addEventListener("click", myDelete)

}};

function myDelete(e){

    e.preventDefault();
    
    const item = e.target ;
    console.log(item)

    if( item.classList[0] === "outButton"){
        e.target.parentElement.remove()
    }
}







