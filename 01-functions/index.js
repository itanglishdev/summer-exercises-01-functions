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