const items = [{
        id: 1,
        name: "Nikesh Gamal",
        job:"Software Developer",
        img:"t.jpg",
        text: "Proven results. 10+ years in the game. Get MVP in 3 months. Full-cycle software development, strong tech & business expertise, 50+ clients worldwide"
    
    },

    
    {
    id: 1,
    name: "Sudesh Maharjan",
    job:"Software Developer",
    img:"w.jpg",
    text: "sdnskd sdjskddfds fjsdnds fijfwr fjsnfs fsfjsnfjs sjis id"

},
{
    id: 2,
    name: "Aadesh Maharjan",
    job:"Architect ",
    img:"s.jpg",
    text: "svnsj sosndcsd djos ses jndd dkdmsad sdklndsdasj"
},
{
    id: 2,
    name: "Arya paudel",
    job:"Software developer ",
    img:"q.jpg",
    text: "wetoiwt weoirwe oiuetry mncs pierewrdf"
},
];

//select all the items
const image = document.querySelector(".img");
const nam = document.getElementById("identity");
const kam = document.getElementById("job");
const lelheko = document.getElementById("description");

//select buttons
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
const surprise_btn = document.querySelector(".surprise");

let review_page = 0;

function Change(person){
    let review = items[person];
    image.src = review.img;
    nam.textContent = review.name;
    kam.textContent = review.job;
    lelheko.textContent = review.text;
}

next_btn.addEventListener("click", function(){
    review_page++;
    if(review_page > items.length - 1){
        review_page = 0;
    }
    Change(review_page);
});
prev_btn.addEventListener("click", function(){
    review_page--;
    if(review_page < 0){
        review_page = items.length - 1;
    }
    Change(review_page);
});