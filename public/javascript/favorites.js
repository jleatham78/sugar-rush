async function favHandler(event) {
    event.preventDefault();

    const favorite = document.querySelector('drink_name').value.trim();

    console.log("I am here inside favorites.js");

}

document.querySelector("#favorite").addEventListener('click', favHandler);