document.querySelector("#inCharacter").addEventListener("keypress", (event) => {
  if (event.key === "Enter" || event.keyCode == 13) {
    let inCharater = document.querySelector("#inCharacter").value;
    starWars(inCharater);
  }
});

const url = "https://akabab.github.io/starwars-api/api/all.json";

async function starWars(person) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    let pessoa = data.find((character) => character.name === person);
    if (pessoa) {
      document.querySelector("#outSearch").textContent =
        "Search:    " + pessoa.name;
      document.querySelector("#section-animation").classList.toggle("hidden");
      document.querySelector("#section-search").classList.toggle("hidden");
      document.querySelector("#img").setAttribute("src", pessoa.image);
      document.querySelector("#outName").textContent = "Name: " + pessoa.name;
      document.querySelector("#outAge").textContent = "Age: " + pessoa.born;
      document.querySelector("#outGender").textContent =
        "Gender: " + pessoa.gender;
      document.querySelector("#outHomeworld").textContent =
        "Homeworld: " + pessoa.homeworld;
      document.querySelector("#outSpecies").textContent =
        "Specie: " + pessoa.species;
      document.querySelector("#linkInfo").setAttribute("href", pessoa.wiki);
      document
        .querySelector("#linkInfo")
        .setAttribute("title", "Info about " + pessoa.name);
    } else {
      console.log(`Personagem "${person}" não encontrado.`);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

function toggleButton() {
  const button = document.getElementById("toggleButton");
  button.classList.toggle("active");
  if (button.classList.contains("active")) button.textContent = "Dark Mode";
  else button.textContent = "Light Mode";
}
