function removeSpaces(phrase) {
  while (phrase.indexOf(" ") != -1) {
    phrase = phrase.replace(" ", "");
  }

  return phrase;
}

function checkPalindrome(phrase) {
  let newPhrase = removeSpaces(phrase).toLowerCase();
  let phraseParts = newPhrase.split("");
  let phraseLength = newPhrase.length;
  let count = phraseLength;
  let numLetters = 0;

  for (let i = 0; i < phraseLength; i++) {
    if (phraseParts[i] == phraseParts[count - 1]) {
      numLetters += 1;
    }

    count--;
  }

  showResults(numLetters, phraseLength);
}

function showResults(numLetters, phraseLength) {
  if (numLetters == phraseLength) {
    console.log("Is a Palindrome");
  } else {
    console.log("Is not a Palindrome");
  }
}

checkPalindrome("taco cat");    // Is a Palindrome
checkPalindrome("taco dog");    // Is not a Palindrome
