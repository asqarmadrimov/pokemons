let elSiteList = document.querySelector(".site-list");

pokemons.forEach(function(pokemon) {
  let elListDiv = document.createElement("div");
  let elListImage = document.createElement("img");
  let elListTitle = document.createElement("h3");
  let elListText = document.createElement("strong");

  elListDiv.className = ("col-md-4 w-25 card bg-info m-3 ms-auto me-auto py-2");
  elListDiv.setAttribute("style", "width: 18rem;");
  elListImage.setAttribute("class", "card-img-top w-1");

  elListImage.src = pokemon.img;
  elListTitle.textContent = `Name: ${pokemon.name}`;
  elListText.textContent = `Abilities: ${pokemon.type}`;
  


  elListDiv.append(elListImage, elListTitle, elListText);
  elSiteList.appendChild(elListDiv);
})