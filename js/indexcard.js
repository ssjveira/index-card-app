'use strict'

// Constants
const animationDuration = 400;
const words = ["all", "am", "are", "at", "ate", "be", "black", "brown", "but", "came"];

/**
 * Class that handles displaying a particular sight word group.
 */
class SightWordCardManager {
    #isAnimating = false;
    #currentIndex = -1;
    #cardContainerDiv = document.getElementById("card-container");
    #cardDiv = document.getElementById('card');
    #mainTitleDiv = document.getElementById('main-title');
    #countTextDiv = document.getElementById('card-count');
    #wordArray = []

    constructor(title, wordArray) {
        this.#wordArray = wordArray;

        // Set main title
        this.#mainTitleDiv.appendChild(document.createTextNode(title));

        // Handle clicks
        this.#cardContainerDiv.addEventListener('click', () => {
            this.showCard();
        });

        // Use arrows to go forward / back between cards
        document.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowUp') {
                // up arrow
                this.showCard();
            }
            else if (e.key == 'ArrowDown') {
                // down arrow
                this.showCard(false);
            }
            else if (e.key == 'ArrowLeft') {
                // left arrow
                this.showCard(false);
            }
            else if (e.key == 'ArrowRight') {
                // right arrow
                this.showCard();
            }
        });

        this.showCard();
    }

    doAnimation() {
        let cardManager = this;
        let cardDiv = this.#cardDiv;
        anime({
            targets: cardDiv,
            opacity: '0',
            easing: 'easeInOutSine',
            duration: animationDuration,
            complete: function (prevAnim) {
                cardManager.updateText();
                anime({
                    targets: cardDiv,
                    opacity: "1",
                    easing: 'easeInOutSine',
                    duration: animationDuration,
                    complete: function (currAnim) {
                        cardManager.setIsAnimating(false);
                    }
                });
            }
        });
    }

    // Taken from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // Implementation of the Knuth shuffle
    shuffle() {
        let currentIndex = this.#wordArray.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.#wordArray[currentIndex], this.#wordArray[randomIndex]] = [
            this.#wordArray[randomIndex], this.#wordArray[currentIndex]];
        }
    }

    showCard(moveForward = true) {
        if (this.#isAnimating) {
            return;
        }

        this.#isAnimating = true;

        if (moveForward) {
            this.#currentIndex += 1;
        }
        else {
            this.#currentIndex -= 1;
        }

        // Wrap index around if we go outside range [0, wordArray.length - 1]
        if (this.#currentIndex < 0) {
            this.shuffle();
            this.#currentIndex = this.#wordArray.length - 1;
        }
        else if (this.#currentIndex >= this.#wordArray.length) {
            this.shuffle();
            this.#currentIndex = 0;
        }

        this.doAnimation();
    }

    setIsAnimating(isAnimating) {
        this.#isAnimating = isAnimating;
    }

    updateText() {
        this.#cardDiv.textContent = this.#wordArray[this.#currentIndex];
        this.#countTextDiv.textContent = `Card Count: ${this.#currentIndex + 1} out of ${this.#wordArray.length}` 
    }
}

window.onload = function () {
    const cardManager = new SightWordCardManager("Sight Words", words);
}
