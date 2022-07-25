// Ex 01

function removeDuplicates(...arrayOfIntegers) {
    for (let i = 0; i < arrayOfIntegers.length; i++) {

        for (let j = 1; j < arrayOfIntegers.length; j++) {

            if (arrayOfIntegers[i] === arrayOfIntegers[j]) {
                arrayOfIntegers.splice(arrayOfIntegers[j], arrayOfIntegers[j++])
            }
        }
    }
    return arrayOfIntegers;
}

console.log(removeDuplicates(4, 2, 4, 5, 6, 2));


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