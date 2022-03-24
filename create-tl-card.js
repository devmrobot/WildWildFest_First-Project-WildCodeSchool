function createCard(name, time, image, description) {
    const cardList = document.querySelector(".timeline ul");
    const newCard = document.createElement("li");
    cardList.appendChild(newCard);

    const cardBody = document.createElement("div");
    newCard.appendChild(cardBody);

    const cardImage = document.createElement("img");
    cardImage.classList.add("artist-img");
    cardBody.appendChild(cardImage);
    cardImage.src = url(image);

    const cardTitle = document.createElement("h2");
    cardTime.classList.add("artist-name");
    cardBody.appendChild(cardTitle);
    cardTitle.innerHTML = name;

    const cardTime = document.createElement("h3");
    cardTime.classList.add("artist-time");
    cardBody.appendChild(cardTime);

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("artist-description");
    cardBody.appendChild(cardDescription);
}
