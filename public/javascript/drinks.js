const eventCardContainerEl = document.getElementById("container-text");

const favHandler = async (event) => {
    event.preventDefault();
    const name = "Midnight Moon";
    const ingredients = "strawberry, coconut, cream";
    const someVariable = document.querySelector('#coke')
    await fetch('api/favs/soda')
    console.log('I made it');
    eventCardContainerEl.innerHTML += `<p class="title is-4">${name}<br />Add-ins: ${ingredients}<br/></p>`;

}


// function displayDrinks(baseInput) {
//     const menuData = "../../seed";
//     console.log('Yo');
//     menuData.filter(function(baseInput) {
//         return Base.base == baseInput;
//     });

    


document.getElementById("coke").addEventListener("click", favHandler);
