// Ex 01

function removeDuplicates(...arrayOfIntegers) {
    let newArray = [...new Set(arrayOfIntegers)];

    // for (let i = 0; i < arrayOfIntegers.length - 2; i++) {
    //     for (let j = 1; j < arrayOfIntegers.length; j++) {
    //         if (newArray[i] !== arrayOfIntegers[j]) {
    //             newArray.push(arrayOfIntegers[j])
    //         }
    //     }

    return newArray;
}


console.log(removeDuplicates(2, 3, 6, 5, 4, 2, 2, 4, 5, 6));


// EXE 2

const favRecipe = {
    title: "Pizza",
    servings: 5,
    ingredients: [
        'flour',
        'water',
        'yeast',
        'salt',
        'oil'
    ]
}
console.log(favRecipe.title);
console.log("Serves:", favRecipe.servings);
console.log("Ingredients:");
console.log(favRecipe.ingredients[0]);
console.log(favRecipe.ingredients[1]);
console.log(favRecipe.ingredients[2]);
console.log(favRecipe.ingredients[3]);
console.log(favRecipe.ingredients[4]);

// EX 3

const arrayOfObjects = [

    bookOne = {
        title: "Star Wars Episode I",
        author: "Me",
        read: true
    },

    bookTwo = {
        title: "Star Wars The clone Wars",
        author: "Still me",
        read: false
    },

    bookThree = {
        title: "Star Wars Return of the Jedi",
        author: "Guess Who?",
        read: true
    },

    bookFour = {
        title: "Star Wars The pizza man",
        author: "Guendoline",
        read: false
    }
]

function checkIfRead(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        if (bookArray[i].read === false) {
            console.log("You already read", bookArray[i].title, "by", bookArray[i].author);
        } else { console.log("You still need to read", bookArray[i].title, "by", bookArray[i].author); }

    }
}

checkIfRead(arrayOfObjects)

//  EX 4
const phrasesInDifferentLanguages = {
    'es': "Hola Mundo",
    'en': 'Hello World',
    'de': "Hallo Welt"
}

function helloWorld(language) {
    if (language === 'es') {
        return (phrasesInDifferentLanguages['es'] + " => " + phrasesInDifferentLanguages['en']);

    } else if (language == 'en') {
        return phrasesInDifferentLanguages['en'];
    } else
        return (phrasesInDifferentLanguages['de'] + " => " + phrasesInDifferentLanguages['en']);
}

console.log("(If/else function) ", helloWorld('de'))

//       EX 4      SWITCH

function helloWorldV2(language) {
    switch (language) {
        case 'es':
            return ("Hola Mundo" + " => " + "Hello World");
        case 'de':
            return ("Hallo Welt" + " => " + "Hello World");
        default:
            return ("Hello World")
    }
}
console.log("(Switch Function)", helloWorldV2('de'));


//   EX 5

function pluralize(insertAnimalName) {
    if (insertAnimalName === "fox" || insertAnimalName === "geese" || insertAnimalName === "rhinoceros") {
        return (insertAnimalName + "es")

    } else {
        return (insertAnimalName + "s")
    }
}

console.log(pluralize('geese'));

//  EX 6
function easyLoop() {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i, ('is even'));
        } else {
            console.log(i);
        }
    }
}
easyLoop()

//  EX 7 
function multiplyLoop() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log((i * j));

        }

    }

}
multiplyLoop();

// Ex 8

const word = ["p", "i", "z", "z", "a"];
const guessingWord = ["_", "_", "_", "_", "_"];
let guessingWordString = "";
let startAmount = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let bonusCounter = 2;

function guessWord(letter) {


    if (word.includes(letter)) {
        rightAnswers++;
        for (let i = 0; i < 7; i++) {
            for (let i = 0; i < word.length; i++) {

                if (letter === word[i]) {
                    guessingWord[i] = letter;
                    guessingWordString = guessingWord.join(" ");
                }
            }
        }
    }
    console.log(guessingWordString, " You got one and you won 45$,", '\n', "you are now winning", startAmount += 45, "$!")

    if (!word.includes(letter)) {
        wrongAnswers++;
        console.log("Wrong letter you lost 31$ and now", '\n', "you are winning", startAmount -= 31, "$!");
    }

    if (!guessingWord.includes("_")) {

        console.log("YOU WON THE GAME and took home", startAmount, "$!", "\n", "You got", wrongAnswers, "wrong answers and", '\n', rightAnswers, "right answers");
    }
    console.log("If this was a hangman game, you would be left", "\n", "with ", (6 - wrongAnswers), "chances to guess");



}

guessWord('p');
guessWord('f');
guessWord("h");
guessWord("i");
guessWord("f");
guessWord("z");
guessWord("a");

// EX 9

function findTheOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    } return counter;
}
console.log(findTheOccurrences("automatization", "a"));

//EX 10

let newString = "";
function uniqueCharacters(string, character) {
    const stringArray = string.split("");

    for (let i = 0; i <= stringArray.length; i++) {
        if (stringArray[i] === character) {
            stringArray.splice([i], 1);
        }
    }
    newString = stringArray.join('');
    return newString;

}


console.log(uniqueCharacters("dontknowexactlywhattowrightherebutilldoit", "a"));

