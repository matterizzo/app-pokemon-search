let btn = document.querySelector("#btn");
btn.addEventListener("click", async (event) => {
  event.preventDefault();
  let pokemon = document.querySelector("#search").value.toLowerCase();
  let hiddenP = document.querySelector('#hidden')
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const resp = await response.json();
    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    img.setAttribute("src", resp.sprites.front_default);
    p.innerHTML = resp.name;
    card.append(img, p);
    let cardContainer = document.querySelector(".card-container");
    cardContainer.append(card);
    hiddenP.style.display= 'none'
  }catch(err) {
    hiddenP.style.display= 'block'
  }
});
