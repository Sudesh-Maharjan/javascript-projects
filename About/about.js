const allbtn = document.querySelectorAll(".btn");
const history_btn = document.querySelector(".his");
const vision_btn = document.querySelector(".vis");
const goal_btn = document.querySelector(".goa");

const history = document.querySelector(".history");
const vision = document.querySelector(".vision");
const goal = document.querySelector(".goal");


history_btn.addEventListener("click", function(){
if(!history.classList.contains("show-history")){
    history.classList.add("show-history");
    vision.classList.remove("show-vision");
    goal.classList.remove("show-goal");
}
});

vision_btn.addEventListener("click", function(){
    if(!vision.classList.contains("show-vision")){
        vision.classList.add("show-vision");
        history.classList.remove("show-history");
        goal.classList.remove("show-goal");
    }
});
goal_btn.addEventListener("click", function(){
    if(!goal.classList.contains("show-goal")){
        goal.classList.add("show-goal");
        history.classList.remove("show-history");
        vision.classList.remove("show-vision");
    }
});