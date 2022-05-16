const links = document.querySelector(".links");
const button = document.querySelector(".nav-toggle");

button.addEventListener("click", function(){
if(links.classList.contains("show-links")){
    links.classList.remove("show-links");
    links.style.display="none";
}else{
    links.style.display="block";
    links.classList.add("show-links");
}
});
