const artists = [
    {
        name: "Elvis Presley",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "/assets/images/artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "dfklzejflkezjfdklezjflkezjdfkezjfkzejfkljezklfjzelkfjelkfjlkezfjzekljfeklzjflkezfjklezjflkzejflkezjflkjzelfjezklfjkljezflkjzelfjzelkjflkezjflkezjfljezfklezjflkezjflezjfelzjfklezjf",
    }
]
function createCard(name, time, image, description) {

    const cardList = document.querySelector("ul.list-container");
    const newCard = document.createElement("li");
    

    const cardBody = document.createElement("div");
    cardBody.classList.add("card");
    newCard.appendChild(cardBody);

    const cardImage = document.createElement("img");
    cardImage.classList.add("artist-img");
    cardBody.appendChild(cardImage);
    cardImage.src = `${image}`

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("artist-name");
    cardBody.appendChild(cardTitle);
    cardTitle.innerHTML = name;

    const cardTime = document.createElement("h3");
    cardTime.classList.add("artist-time");
    cardTime.innerHTML = time;
    cardBody.appendChild(cardTime);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("artist-description");
    cardDescription.innerHTML = description;
    cardBody.appendChild(cardDescription);

    cardList.appendChild(newCard);
}
for (let i = 0; i < artists.length; i++) {
    createCard(
      artists[i].name,
      artists[i].time,
      artists[i].image,
      artists[i].description
    );
  }
