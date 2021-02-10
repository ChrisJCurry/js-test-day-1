//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    wordArray = str.split(" ");
    for(let i = 1; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substr(1)
    }
    newSentence = wordArray.join("")
    return newSentence
}
