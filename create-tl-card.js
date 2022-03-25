const artists = [
    {
        name: "Elvis Presley",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "/assets/images/artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    },
    {
        name: "Chuck Berry",
        time: "Mer. 22 Octobre 2022 - 16h30",
        image: "./assets/images/Artists/elvis.jpeg",
        description: "vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium",
    }
]
function createCard(name, time, image, description) {

    const cardList = document.querySelector(".timeline");
    

    const cardBody = document.createElement("div");
    cardBody.classList.add("card");
    cardList.appendChild(cardBody);

    const cardBack = document.createElement("div");
    cardBack.classList.add("back-img");
    cardBack.style.backgroundImage = `url(${image})`;
    cardBody.appendChild(cardBack);

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardBack.appendChild(cardText)

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("artist-name");
    cardText.appendChild(cardTitle);
    cardTitle.innerHTML = name;

    const cardTime = document.createElement("h3");
    cardTime.classList.add("artist-time");
    cardTime.innerHTML = time;
    cardText.appendChild(cardTime);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("artist-description");
    cardDescription.innerHTML = description;
    cardText.appendChild(cardDescription);

}
for (let i = 0; i < artists.length; i++) {
    createCard(
      artists[i].name,
      artists[i].time,
      artists[i].image,
      artists[i].description
    );
  }
