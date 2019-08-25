const DNA = {"A": 0, "C": 0, "G": 0, "T": 0};

const countDna = (dnaSequence) => {
  let dnaParts = dnaSequence.toUpperCase().split('');

  for (let i = 0; i < dnaSequence.length; i++) {
    if (dnaParts[i] === 'A') { DNA["A"]++; }
    else if (dnaParts[i] === 'C') { DNA["C"]++; } 
    else if (dnaParts[i] === 'G') { DNA["G"]++; } 
    else if (dnaParts[i] === 'T') { DNA["T"]++; }
  }

  console.log(DNA)
}

countDna('ACCCGGGGTTTTAAACCCTTTG');   // { A: 4, C: 6, G: 5, T: 7 }

