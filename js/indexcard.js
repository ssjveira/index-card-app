'use strict'

// Constants
const animationDuration = 400;
const sightWords = {
    "Set 1": ["all", "am", "are", "at", "ate", "be", "black", "brown", "but", "came"],
    "Set 2": ["Did", "Do", "Eat", "Four", "Get", "Good", "Have", "He", "Into", "like"],
    "Set 3": ["Must", "New", "No", "Now", "On", "Our", "Out", "Please", "Pretty", "ran"],
    "Set 4": ["Ride", "Saw", "Say", "She", "So", "Soon", "That", "There", "They", "this"],
    "Set 5": ["Too", "Under", "Want", "Was", "Well", "Went", "What", "White", "Who", "With"],
    "Dolch Full List": ["a"
        , "about"
        , "after"
        , "again"
        , "all"
        , "always"
        , "am"
        , "an"
        , "and"
        , "any"
        , "apple"
        , "are"
        , "around"
        , "as"
        , "ask"
        , "at"
        , "ate"
        , "away"
        , "baby"
        , "back"
        , "ball"
        , "be"
        , "bear"
        , "because"
        , "bed"
        , "been"
        , "before"
        , "bell"
        , "best"
        , "better"
        , "big"
        , "bird"
        , "birthday"
        , "black"
        , "blue"
        , "boat"
        , "both"
        , "box"
        , "boy"
        , "bread"
        , "bring"
        , "brother"
        , "brown"
        , "but"
        , "buy"
        , "by"
        , "cake"
        , "call"
        , "came"
        , "can"
        , "car"
        , "carry"
        , "cat"
        , "chair"
        , "chicken"
        , "children"
        , "Christmas"
        , "clean"
        , "coat"
        , "cold"
        , "come"
        , "corn"
        , "could"
        , "cow"
        , "cut"
        , "day"
        , "did"
        , "do"
        , "does"
        , "dog"
        , "doll"
        , "done"
        , "don’t"
        , "door"
        , "down"
        , "draw"
        , "drink"
        , "duck"
        , "eat"
        , "egg"
        , "eight"
        , "every"
        , "eye"
        , "fall"
        , "far"
        , "farm"
        , "farmer"
        , "fast"
        , "father"
        , "feet"
        , "find"
        , "fire"
        , "first"
        , "fish"
        , "five"
        , "floor"
        , "flower"
        , "fly"
        , "for"
        , "found"
        , "four"
        , "from"
        , "full"
        , "funny"
        , "game"
        , "garden"
        , "gave"
        , "get"
        , "girl"
        , "give"
        , "go"
        , "goes"
        , "going"
        , "good"
        , "goodbye"
        , "got"
        , "grass"
        , "green"
        , "ground"
        , "grow"
        , "had"
        , "hand"
        , "has"
        , "have"
        , "he"
        , "head"
        , "help"
        , "her"
        , "here"
        , "hill"
        , "him"
        , "his"
        , "hold"
        , "home"
        , "horse"
        , "hot"
        , "house"
        , "how"
        , "hurt"
        , "I"
        , "if"
        , "in"
        , "into"
        , "is"
        , "it"
        , "its"
        , "jump"
        , "just"
        , "keep"
        , "kind"
        , "kitty"
        , "know"
        , "laugh"
        , "leg"
        , "let"
        , "letter"
        , "light"
        , "like"
        , "little"
        , "live"
        , "long"
        , "look"
        , "made"
        , "make"
        , "man"
        , "many"
        , "may"
        , "me"
        , "men"
        , "milk"
        , "money"
        , "morning"
        , "mother"
        , "much"
        , "must"
        , "my"
        , "myself"
        , "name"
        , "nest"
        , "never"
        , "new"
        , "night"
        , "no"
        , "not"
        , "now"
        , "of"
        , "off"
        , "old"
        , "on"
        , "once"
        , "one"
        , "only"
        , "open"
        , "or"
        , "our"
        , "out"
        , "over"
        , "own"
        , "paper"
        , "party"
        , "pick"
        , "picture"
        , "pig"
        , "play"
        , "please"
        , "pretty"
        , "pull"
        , "put"
        , "rabbit"
        , "rain"
        , "ran"
        , "read"
        , "red"
        , "ride"
        , "right"
        , "ring"
        , "robin"
        , "round"
        , "run"
        , "said"
        , "Santa Claus"
        , "saw"
        , "say"
        , "school"
        , "see"
        , "seed"
        , "seven"
        , "shall"
        , "she"
        , "sheep"
        , "shoe"
        , "show"
        , "sing"
        , "sister"
        , "sit"
        , "six"
        , "sleep"
        , "small"
        , "snow"
        , "so"
        , "some"
        , "song"
        , "soon"
        , "squirrel"
        , "start"
        , "stick"
        , "stop"
        , "street"
        , "sun"
        , "table"
        , "take"
        , "tell"
        , "ten"
        , "thank"
        , "that"
        , "the"
        , "their"
        , "them"
        , "then"
        , "there"
        , "these"
        , "they"
        , "thing"
        , "think"
        , "this"
        , "those"
        , "three"
        , "time"
        , "to"
        , "today"
        , "together"
        , "too"
        , "top"
        , "toy"
        , "tree"
        , "try"
        , "two"
        , "under"
        , "up"
        , "upon"
        , "us"
        , "use"
        , "very"
        , "walk"
        , "want"
        , "warm"
        , "was"
        , "wash"
        , "watch"
        , "water"
        , "way"
        , "we"
        , "well"
        , "went"
        , "were"
        , "what"
        , "when"
        , "where"
        , "which"
        , "white"
        , "who"
        , "why"
        , "will"
        , "wind"
        , "window"
        , "wish"
        , "with"
        , "wood"
        , "work"
        , "would"
        , "write"
        , "yellow"
        , "yes"
        , "you"
        , "your"]
};

/**
 * Randomly shuffles an array.
 * 
 * @param {*} array 
 * 
 * @note Taken from here: https://javascript.plainenglish.io/how-to-shuffle-a-javascript-array-1357eed1680f
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Class that handles the selection of the sight word group to display cards for.
 */
class GroupSelectionManager {
    #cardManager = null;

    constructor() {
        this.#cardManager = new SightWordCardManager();

        for (const [key, value] of Object.entries(sightWords)) {
            console.log(`Adding menu item for sight word group ${key}: ${value}`);

            const menuItemDiv = document.createElement("button");
            menuItemDiv.classList.add("menu-card");
            menuItemDiv.type = "button";
            menuItemDiv.appendChild(document.createTextNode(key));

            const mainMenuDiv = document.getElementById("main-menu-container");
            mainMenuDiv.appendChild(menuItemDiv);

            menuItemDiv.addEventListener('click', () => {
                this.showCards(key);
            });
        }
    }

    hideMenu() {
        const groupManager = this;
        const menuItemDivs = document.querySelectorAll(".menu-card");
        menuItemDivs.forEach(element => {
            element.style.opacity = "0";
            element.style.display = "none";
        });

        const backButtonElement = document.createElement("button");
        backButtonElement.type = "button";
        backButtonElement.id = "back-button";
        backButtonElement.appendChild(document.createTextNode("BACK"));

        document.body.appendChild(backButtonElement);
        backButtonElement.addEventListener("click", () => {
            anime({
                targets: backButtonElement,
                opacity: '0',
                easing: 'easeInOutSine',
                duration: animationDuration / 2,
                complete: function (prevAnim) {
                    groupManager.hideCards();
                }
            });
        });
    }

    showMenu() {
        document.getElementById("main-title").textContent = "Sight Word Groups";

        const menuItemDivs = document.querySelectorAll(".menu-card");
        menuItemDivs.forEach(element => {
            element.style.display = "flex";
            element.style.opacity = "1";
        });

        const backButtonElement = document.getElementById("back-button");
        if (backButtonElement) {
            backButtonElement.parentElement.removeChild(backButtonElement);
        }
    }

    showCards(wordGroup) {
        this.hideMenu();
        this.#cardManager.setWordGroup(wordGroup);
        this.#cardManager.nextCard(true);
        this.#cardManager.showCard();
    }

    hideCards() {
        this.#cardManager.hideCard(() => {
            this.showMenu();
        });
    }
}

/**
 * Class that handles displaying a particular sight word group.
 */
class SightWordCardManager {
    #groupName = "";
    #isAnimating = false;
    #currentIndex = -1;
    #cardContainerDiv = document.getElementById("index-card-container");
    #cardDiv = document.getElementById('index-card');
    #countTextDiv = document.getElementById('card-count');
    #wordArray = [];
    #onCardContainerClick = () => { this.nextCard(true); };
    #onKeyClick = (e) => {
        if (e.key == 'ArrowUp') {
            // up arrow
            this.nextCard(true);
        }
        else if (e.key == 'ArrowDown') {
            // down arrow
            this.nextCard(false);
        }
        else if (e.key == 'ArrowLeft') {
            // left arrow
            this.nextCard(false);
        }
        else if (e.key == 'ArrowRight') {
            // right arrow
            this.nextCard(true);
        }
    };

    setWordGroup(groupName) {
        this.#groupName = groupName;
        this.#wordArray = sightWords[groupName];
        shuffleArray(this.#wordArray);
    }

    doAnimation(isOnShown, callback) {
        const cardManager = this;
        const cardDiv = this.#cardDiv;
        anime({
            targets: cardDiv,
            opacity: isOnShown ? '1' : '0',
            easing: 'easeInOutSine',
            duration: animationDuration,
            complete: function (prevAnim) {
                cardManager.setIsAnimating(false);
                if (callback) {
                    callback();
                }
            }
        });
    }

    hideCard(cbOnHidden) {
        if (this.#isAnimating) {
            return;
        }

        this.#cardContainerDiv.removeEventListener('click', this.#onCardContainerClick);
        document.removeEventListener('keydown', this.#onKeyClick);
        this.#isAnimating = true;

        this.doAnimation(false, () => {
            this.reset();
            this.#cardDiv.style.display = "none";
            cbOnHidden();
        });
    }

    showCard(cbOnShown) {
        if (this.#isAnimating) {
            return;
        }

        document.getElementById("main-title").textContent = this.#groupName;
        this.#cardContainerDiv.addEventListener('click', this.#onCardContainerClick);
        document.addEventListener('keydown', this.#onKeyClick);

        this.#cardDiv.style.display = "flex";
        this.doAnimation(true, cbOnShown);
    }

    nextCard(moveForward) {
        if (moveForward) {
            this.#currentIndex += 1;
        }
        else {
            this.#currentIndex -= 1;
        }

        // Wrap index around if we go outside range [0, wordArray.length - 1]
        if (this.#currentIndex < 0) {
            shuffleArray(this.#wordArray);
            this.#currentIndex = this.#wordArray.length - 1;
        }
        else if (this.#currentIndex >= this.#wordArray.length) {
            shuffleArray(this.#wordArray);
            this.#currentIndex = 0;
        }

        this.updateText();
    }

    setIsAnimating(isAnimating) {
        this.#isAnimating = isAnimating;
    }

    reset() {
        this.#currentIndex = -1;
        this.#groupName = "";
        this.#cardDiv.textContent = "";
        this.#countTextDiv.textContent = "";
        this.#wordArray = [];
    }

    updateText() {
        this.#cardDiv.textContent = this.#wordArray[this.#currentIndex];
        this.#countTextDiv.textContent = `Card Count: ${this.#currentIndex + 1} out of ${this.#wordArray.length}`
    }
}

window.onload = function () {
    const groupManager = new GroupSelectionManager();
    groupManager.showMenu();
}
