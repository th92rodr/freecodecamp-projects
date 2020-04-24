/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the
 * first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the
 * third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object with a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the
 * change due, or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
 * if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
 * sorted in highest to lowest order, as the value of the change key.
 **/

const unitsMap = new Map([
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
]);

function checkCurrencyUnitAmountAvailable(cid, unit, numberOfUnitsNeeded) {
  const unitValue = unitsMap.get(unit);
  const [, amountAvailable] = cid.find((e) => e[0] == unit);
  const numberOfUnitsAvailable = amountAvailable / unitValue;
  //console.log("numberOfUnitsAvailable: ", numberOfUnitsAvailable);

  const diff = numberOfUnitsAvailable - numberOfUnitsNeeded;
  //console.log("diff: ", diff);
  if (diff >= 0) return numberOfUnitsNeeded;
  else return numberOfUnitsAvailable;
}

function calculateAmountNeededByUnit(cid, unit, change) {
  const unitValue = unitsMap.get(unit);
  //console.log(unit, unitValue);

  if (change < unitValue) {
    return null;
  }

  let numberOfUnitsNeeded = parseInt(change / unitValue);
  //console.log("numberOfUnitsNeeded: ", numberOfUnitsNeeded);
  numberOfUnitsNeeded = checkCurrencyUnitAmountAvailable(
    cid,
    unit,
    numberOfUnitsNeeded
  );
  //console.log("numberOfUnitsNeeded: ", numberOfUnitsNeeded);
  //console.log([unit, numberOfUnitsNeeded * unitValue]);
  return [unit, numberOfUnitsNeeded * unitValue];
}

function calculateRemainingChange(change, unitArray) {
  if (unitArray == []) return change;

  let amountToDiscount = unitArray[1];
  return parseFloat((change - amountToDiscount).toFixed(2));
}

function getTotalCashInDrawerAvailable(cid) {
  const totalAvailable = cid.reduce((acc, current) => {
    return parseFloat((acc + parseFloat(current[1])).toFixed(2));
  }, 0.0);
  //console.log("total: ", totalAvailable);
  return totalAvailable;
}

function checkCashRegister(price, cash, cid) {
  const totalAvailable = getTotalCashInDrawerAvailable(cid);

  let change = cash - price;
  //console.log("change: ", change);

  if (change > totalAvailable) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (change == totalAvailable) {
    return { status: "CLOSED", change: cid };
  }

  let resultArray = [];
  cid.reverse().forEach((unit) => {
    let partialArray = calculateAmountNeededByUnit(cid, unit[0], change);
    if (partialArray == null) return;

    resultArray.push(partialArray);
    change = calculateRemainingChange(change, partialArray);
  });

  //console.log("resultArray: ", resultArray);
  //console.log("change: ", change);

  if (change != 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: resultArray };
}

// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

/* should return {status: "OPEN",
  change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
  ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
*/
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
