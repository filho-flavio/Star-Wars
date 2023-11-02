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
      console.log(pessoa.name);
      document.querySelector("#img").setAttribute("src", pessoa.image);
      console.log("Homeworld: " + pessoa.homeworld);
    } else {
      console.log(`Personagem "${person}" não encontrado.`);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

starWars("Darth Vader");

const showPerson = () => {
  let person = "Darth Vader";
  starWars(person);
};