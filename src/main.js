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
        "Searched:    " + pessoa.name;
      document.querySelector("#section-animation").classList.add("hidden");
      document.querySelector("#section-search").classList.remove("hidden");
      document.querySelector("#img").setAttribute("src", pessoa.image);
      document.querySelector("#name").textContent = pessoa.name;
      document.querySelector("#age").textContent = pessoa.born;
      document.querySelector("#gender").textContent = pessoa.gender;
      document.querySelector("#homeworld").textContent = pessoa.homeworld;
      document.querySelector("#species").textContent = pessoa.species;
      document.querySelector("#linkInfo").setAttribute("href", pessoa.wiki);
      document
        .querySelector("#linkInfo")
        .setAttribute("title", "Info about " + pessoa.name);
    } else {
      document.querySelector("#section-animation").classList.remove("hidden");
      document.querySelector("#section-search").classList.add("hidden");
      alert(`Character "${person}" not found, write correctly`);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

function toggleButton() {
  const button = document.getElementById("toggleButton");
  button.classList.toggle("active");

  // document.body.classList.toggle("light-mode");
  // let sidebar = document.querySelector("#sidebar");
  // sidebar.style.backgroundImage = "url('../img/bg-light.png')";
  // document
  //   .querySelector("#img-header")
  //   .setAttribute("src", "../img/name-white.png");

  const buttonText = button.classList.contains("active")
    ? "Dark Mode"
    : "Light Mode";
  button.textContent = buttonText;
}
