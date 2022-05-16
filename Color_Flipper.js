const hex = [1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
//select
const btn = document.querySelector(".btn");
const color = document.querySelector(".hex");
//action on click
btn.addEventListener("click", function(){
    let randomeNumber = "#";
//apply
for(let i = 0; i<6; i++){
randomeNumber += hex[randomeValue()]; 
}
    document.body.style.backgroundColor = randomeNumber;
    color.textContent = randomeNumber;
});

function randomeValue(){
    return Math.floor(Math.random() * hex.length);
}


