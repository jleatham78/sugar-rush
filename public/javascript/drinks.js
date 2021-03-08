const drinkCardContainerEl = document.getElementById("container-text");

async function showDrinks(val) {
    console.log(val);
    await fetch('api/favs/soda', {
        method: 'post',
        body: JSON.stringify({
            val
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
            drinkCardContainerEl.innerHTML = ""
            for (let i = 0; i < data.returnedDrinks.length; i++) {
                //const card = document.createElement('div');
                //card.classList.add("drink-card")
                const name = data.returnedDrinks[i].drink_name;
                const ingredients = data.returnedDrinks[i].add_ins;
                //card.setAttribute("class", "drink-card");
                drinkCardContainerEl.innerHTML += `<p class="title is-4"><button type="submit" id="favorite" class="button"><span class="oi oi-heart"></span></button>  ${name}<p><p class="content">${ingredients}</p>`
                
                //drinkCardContainerEl.appendChild(card)
                       
                
            }
    });

};
