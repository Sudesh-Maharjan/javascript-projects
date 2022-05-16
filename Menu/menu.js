var menu = [
    {
        id:1,
        title:"ButterMilk",
        category:"Lunch",
        image:"./images/item-1.jpeg",
        paisa:"10$",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
        },
    {
    id:1,
    title:"Butter nan",
    category:"Lunch",
    image:"./images/item-2.jpeg",
    paisa:"20$",
    para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
    },
    {
        id:1,
        title:"Milke shake",
        image:"./images/item-3.jpeg",
        category:"Freshup",
        paisa:"10$",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
    
    },
    {
        id:2,
        title:"Apple cider",
        image:"./images/item-4.jpeg",
        category:"Freshup",
        paisa:"30$",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
        },
    {
        id:3,
        title:"Lemon tea",
        image:"./images/item-5.jpeg",
        category:"Freshup",
        paisa:"5$",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
        },
        {
        id:4,
        title:"Bhat",
        image:"./images/item-6.jpeg",
        category:"Lunch",
        paisa:"10$",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
        },
        {
            id:5,
            title:"Chaumine",
            image:"./images/item-7.jpeg",
            category:"Lunch",
            paisa:"10$",
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deserunt voluptatibus consequatur esse maxime veniam saepe corporis officiis explicabo culpa, iure similique placeat impedit, aspernatur sequi ex? Necessitatibus, similique rerum.",
        }
    ];

//iterate gareko menu lai items haru access garna
const sectionCenter = document.querySelector(".menu");
window.addEventListener('DOMContentLoaded', function(){
// console.log("shake and bake");
displayMenuItems(menu);
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){

        return `<article class="main-section">
        <img class="img"src=${item.image} alt=${item.title}>
        <p class="name">${item.title}</p>
        <p class="price">Price:</p>
        <span class="dollar"> ${item.paisa} </span>
        <p class="paragraph">${item.para}</p>
        </article>`;
        });
        displayMenu = displayMenu.join("");
        sectionCenter.innerHTML = displayMenu;
}
//filter button select gareko
const filterbtn = document.querySelectorAll(".btn");

//loop lako
filterbtn.forEach(function(selectt){
//evevntListener add gareko in click ko lagi
selectt.addEventListener("click", function(e){
//location target garera btn ko value lai select gareko ani variable ma raheko
const category = e.currentTarget.dataset.id;
//flter le menu ko items lai filter garera din xa on the applied condition
const menucategory = menu.filter(function(menuItem){
//tala ko condition ma meet vayo vane menuItem return hunxa
if(menuItem.category === category ){
    return menuItem;
}
});

if(category == "All"){
    displayMenuItems(menu);
}else{
    displayMenuItems(menucategory);
}
});
});
