//const menuData = require('../../seed');
const eventCardContainerEl = document.getElementById("container-text");
const eventCardContainerEl2 = document.getElementById("add-ins")

// const favHandler = async (event) => {
//     event.preventDefault();
//     const name = 'Midnight Moon'
//     const ingredients = 'strawberry'
//     const someVariable = document.querySelector('#coke')
//     await fetch('api/favs/soda')
//     .then(data => {
//         console.log(data);
//     })
//     console.log('I made it');
//     eventCardContainerEl.innerHTML += `<p class="title is-4">${name}<p></br>`
//     eventCardContainerEl2.innerHTML += `<p class="content">${ingredients}</p>`;

// }

// document.getElementById('coke').onclick = showDrinks; 
// document.getElementById('diet-coke').onclick = showDrinks; 
// document.getElementById('coke-zero').onclick = showDrinks; 
              
        async function showDrinks(val) { 
                console.log(val);
                   const res = await fetch('api/favs/soda', {
                    method: 'post',
                    body: JSON.stringify({
                        val
                    }),
                    headers: { 'Content-Type': 'application/json' }
                   })
            
                    
                
               //alert(val);
            //    const menu = 
            //    console.log(menu);
            // // menuData.filter(function(baseInput) {
            // return Base.base == baseInput;
    };
               
    //eventCardContainerEl.innerHTML = "Button clicked, id = " + this.id;

            



// function displayDrinks(baseInput) {
//     const menuData = "../../seed";
//     console.log('Yo');
//     menuData.filter(function(baseInput) {
//         return Base.base == baseInput;
//     });

    


//document.getElementById("coke").addEventListener("click", favHandler);
