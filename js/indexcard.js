window.onload = function () {
    var playing = false;
    const words = ["all", "am", "are", "at", "ate", "be"];

    // Add cards to page
    let cardContainer = document.getElementById("card-container");
    words.forEach((word) => {
        let frontElement = document.createElement("DIV");
        frontElement.classList.add("front");
        frontElement.appendChild(document.createTextNode(word));

        let backElement = document.createElement("DIV");
        backElement.classList.add("back");
        backElement.appendChild(document.createTextNode(word));

        let wordElement = document.createElement("DIV");
        wordElement.classList.add("card");
        wordElement.appendChild(frontElement);
        wordElement.appendChild(backElement);

        cardContainer.appendChild(wordElement);
    });

    // Apply event listener to animate cards
    var card = document.querySelector(".card");
    card.addEventListener('click', function () {
        if (playing)
            return;

        playing = true;
        anime({
            targets: card,
            scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
            rotateY: { value: '+=180', delay: 200 },
            easing: 'easeInOutSine',
            duration: 400,
            complete: function (anim) {
                playing = false;
            }
        });
    });
}
