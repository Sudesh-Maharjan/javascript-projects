let count = 0;
//select
const button = document.querySelectorAll(".btn");
const number = document.querySelector(".number");

button.forEach(function(btn){
btn.addEventListener("click", function(e){
    const select = e.currentTarget.classList;

    if(select.contains("increase")){
        count++;
    }
    else if(select.contains("decrease")){
count--;
    }
    else{
        count = 0;
    }
    number.textContent =  count;
    
    if(count < 0){
        number.style.color = "red";
    }
    if(count > 0){
        number.style.color = "green";
    }
    if(count == 0){
number.style.color = "black";
    }

    
});
});