const sidebar = document.querySelector(".side-bar");
const navbutton = document.querySelector(".nav-toggle");
const crossbtn = document.querySelector(".side-btn");

navbutton.addEventListener("click", function(){
if(!sidebar.classList.contains('show-side-bar')){
    sidebar.classList.add('show-side-bar');
}
});

crossbtn.addEventListener("click" , function(){
if(sidebar.classList.contains('show-side-bar')){
    sidebar.classList.remove('show-side-bar');
}
});


const modelbtn = document.querySelector(".model-btn");
const model_overlay_container = document.querySelector(".model-overlay-container");
const model_overlay_cross_btn = document.querySelector(".model-overlay-cross-btn");

modelbtn.addEventListener("click", function(){
if(!model_overlay_container.classList.contains("show-overlay-container")){
    model_overlay_container.classList.add("show-overlay-container");
}
});

model_overlay_cross_btn.addEventListener("click", function(){
    if(model_overlay_container.classList.contains("show-overlay-container")){
        model_overlay_container.classList.remove("show-overlay-container");
    }
    });