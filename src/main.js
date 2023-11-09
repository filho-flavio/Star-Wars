document.querySelector("#inCharacter").addEventListener("keypress", (event) => {
  if (event.key === "Enter" || event.keyCode == 13) {
    let inCharater = document.querySelector("#inCharacter").value;
    console.log(inCharater);
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
      document.querySelector("#section-animation").classList.add("hidden");
      document.querySelector("#img").setAttribute("src", pessoa.image);
      console.log("Homeworld: " + pessoa.homeworld);
    } else {
      console.log(`Personagem "${person}" não encontrado.`);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
