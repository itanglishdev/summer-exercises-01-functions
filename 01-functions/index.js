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