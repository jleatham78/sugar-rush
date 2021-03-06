const eventCardContainerEl = document.getElementById("container-text");
const eventCardContainerEl2 = document.getElementById("add-ins")

const favHandler = async (event) => {
    event.preventDefault();
    const name = menuData.drink_name
    const ingredients = drinks.add_ins
    const someVariable = document.querySelector('#coke')
    await fetch('api/drinks')
    console.log('I made it');
    eventCardContainerEl.innerHTML += `<p class="title is-4">${name}<p></br>`
    eventCardContainerEl2.innerHTML += `<p class="content">${ingredients}</p>`;

}

// const response = await fetch('api/drinks', {
//     method: 'post',
//     body: JSON.stringify({
//         drink_name,
//         add_ins
//     }),
//     headers: { 'Content-Type': 'application/json' }
// });

// function displayDrinks(baseInput) {
//     const menuData = "../../seed";
//     console.log('Yo');
//     menuData.filter(function(baseInput) {
//         return Base.base == baseInput;
//     });

    


document.getElementById("coke").addEventListener("click", favHandler);
