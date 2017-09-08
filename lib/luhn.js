function luhn(creditNumber) {
  creditNumber = creditNumber.split('').reverse();
  let sum = 0
  for (let i = 1; i < creditNumber.length; i += 2)
  {
    creditNumber[i] *= 2;
    if (creditNumber[i] > 9)
    {
      creditNumber[i] -= 9;
    }
  }
console.log(creditNumber)

  for (i = 1; i < creditNumber.length; i++)
  {
    sum += Number(creditNumber[i]);
  }
  sum += Number(creditNumber[0]);

  if (sum%10 === 0)
  {
    console.log("Valid number");
    return true;
  }

  else
  {
    console.log("Invalid number");
    return false;
  }
}

module.exports = luhn;