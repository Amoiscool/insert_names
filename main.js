const search = document.querySelector(".search");
const button = document.querySelector(".search-button");
const sprite = document.querySelector(".sprite");
const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const slidingContainer = document.querySelector(".box");
const items = document.querySelector (".item")
const indexRange = items.length % 2/ 


leftArrow.addEventListener("click", function () {
    const index = parseInt(slidingContainer.style.getPropertyValue("--index"), 10);
    if(index<= 0) {
slidingContainer.style.setProperty("--index", indexRange -1);
    } else {
        slidingContainer.style.setProperty("--index", index -1);
    }
    });

    rightArrow.addEventListener("click", function () {
        const index = parseInt(slidingContainer.style.getPropertyValue("--index"), 10);
    if(index>= indexRange -1) {
slidingContainer.style.setProperty("--index",0);
    }else {
slidingContainer.style.setProperty("--index", index + 1);

    }
    
    });







async function getPokemon(name)  {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}');
const data = await response.json();
sprite.src = data.sprites.front_default;
sprite.style.display = "block" }

button.addEventListener("click", function () {

    console.log("itworked");
    getPokemon(search.value);
}

)
   
sprite.style.width = "200px"; 
    
slidingContainer.style.setProperty("--index",0);



