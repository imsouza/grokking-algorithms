const VOTED = {};

function checkVoter(name) {
  if (VOTED[name]) {
    console.log(`${name}: kick them out!`);
  } else {
    VOTED[name] = true;
    console.log(`${name}: let them vote!`);
  }
}

checkVoter("tom");    // let them vote!
checkVoter("mike");   // let them vote!
checkVoter("mike");   // kick them out!

