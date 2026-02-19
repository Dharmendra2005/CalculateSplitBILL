function calculateSplit() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tip = parseFloat(document.getElementById('tip').value || 0);
  const people = parseInt(document.getElementById('people').value);

  // ✅ Input validation
  if (
    isNaN(bill) ||              // Bill must be a number
    isNaN(tip) ||               // Tip must be a number
    isNaN(people) ||            // People must be a number
    bill <= 0 ||                // Bill cannot be 0 or negative
    people <= 0                 // People must be at least 1
  ) {
    document.getElementById('result').textContent = "Please enter valid inputs.";
    return;
  }

  // ✅ Core calculation
  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;

  // ✅ Output result
  document.getElementById('result').textContent = `Each person pays: ₹${perPerson.toFixed(2)}`;
}
