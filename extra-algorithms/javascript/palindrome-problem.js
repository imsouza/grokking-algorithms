function removeSpaces(phrase) {
  while (phrase.indexOf(" ") != -1) {
    phrase = phrase.replace(" ", "");
  }

  return phrase;
}

function checkPalindrome(phrase) {
  let splitPhrase = removeSpaces(phrase).toLowerCase().split("");
  let length = splitPhrase.length;
  let count = splitPhrase.length;
  let letters = 0;
 
  for (let i = 0; i < length; i++) {
    if (splitPhrase[i] == splitPhrase[count - 1]) {
      letters += 1;
    }

    count--;
  }

  showResults(letters, length);
}

function showResults(letters, lenght) {
  if (letters == lenght) {
    console.log("Is a Palindrome");
  } else {
    console.log("Is not a Palindrome");
  }
}

checkPalindrome("taco cat");    // Is a Palindrome
checkPalindrome("taco dog");    // Is not a Palindrome
