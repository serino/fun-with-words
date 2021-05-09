let word = document.getElementById("word")
let reverseButton = document.getElementById("reverseButton")

let resultParagraph = document.getElementById("resultParagraph")
let letterToReplace = document.getElementById("letterToReplace")
let letterToAdd = document.getElementById("letterToAdd")
let replaceButton = document.getElementById("replaceButton")

let pigLatinParagraph = document.getElementById("pigLatinParagraph")
let pigLatinButton = document.getElementById("pigLatinButton")

let arr = []

word.addEventListener(`input`, addLetterToArray)

reverseButton.addEventListener("click", reverseWord)

replaceButton.addEventListener("click", replaceLetter)

pigLatinButton.addEventListener("click", changeToPigLatin)

function addLetterToArray() {
  arr.push(word.value[word.value.length - 1])
  resultParagraph.innerHTML = arr.join(``)
}

function reverseWord() {
  arr = arr.reverse()
  resultParagraph.innerHTML = arr.join(``)
}

function replaceLetter() {
  arr = arr.reverse()
  let matchingLetter = false

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == letterToReplace.value) {
      arr[i] = letterToAdd.value 
      matchingLetter = true
    } 
  }
  
  if (matchingLetter == true) {
    resultParagraph.innerHTML = arr.join(``)
  }
  else {
    resultParagraph.innerHTML = `Letter you entered is not in word.`
    matchingLetter = false
  }
}

function changeToPigLatin() {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == letterToAdd.value) {
      arr[i] = letterToReplace.value 
    } 
  }
  
  
  if (arr[0] != `a` || arr[0] != `e` || arr[0] != `i` || arr[0] != `o` || arr[0] != `u`) {
    arr.push(arr.shift())
  }
  resultParagraph.innerHTML = `${arr.join(``)}ay`
}


