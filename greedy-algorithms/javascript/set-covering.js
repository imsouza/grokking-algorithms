var statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const finalStations = new Set();

while (true) {
  let bestStation = null;
  let statesCovered = new Set();

  if (statesNeeded.size) {
    for (let estacao in stations) {
      let states = stations[estacao];
      let covered = new Set([...statesNeeded].filter((x) => states.has(x)));
      if (covered.size > statesCovered.size) {
        bestStation = estacao;
        statesCovered = covered;
      }
    }
  } else {
    break;
  }

  statesNeeded = new Set([...statesNeeded].filter((x) => !statesCovered.has(x)));
  finalStations.add(bestStation);
}

console.log(finalStations);    // Set { 'kone', 'ktwo', 'kthree', 'kfive' }

