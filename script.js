let inputField = document.getElementById("date");
let calBtn = document.getElementById("calculate");
let result = document.getElementById("cal-res");
let image = document.getElementById("image");

function calculateAge(inputYear) {
  const today = new Date();
  const birthDate = new Date(inputYear);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  // If the day difference is negative, adjust the months and calculate the days
  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Get the last day of the previous month
    days += lastMonth.getDate(); // Add the last month's days
  }

// first check birthdate is greater than current date 
    if(birthDate < today) {

        if(years === 0 && months === 0) {

            result.innerText = `You are only ${days} days old`;
            image.setAttribute('src', './images/baby.png');

        } else if (years === 0) {

            result.innerText = `You are only ${months} Months and ${days} days old`;
            image.setAttribute('src', './images/baby.png');

        } else if (years <= '7') {

            result.innerText = `Baby.... You are ${years} Years, ${months} Months and ${days} days old`;
            image.setAttribute('src', './images/baby.png');

        } else if (years <= '16') {

            result.innerText = `Child.... You are ${years} Years, ${months} Months and ${days} days old`;
            image.setAttribute('src', './images/child.png');

        } else if (years <= '60') {

            result.innerText = `Adult.... You are ${years} Years, ${months} Months and ${days} days old`;
            image.setAttribute('src', './images/adult.png');

        } else {

            result.innerText = `Aged.... You are ${years} Years, ${months} Months and ${days} days old`;
            image.setAttribute('src', './images/aged.png');

        }

    } else {
        inputField.value = '';
        result.innerText = `You have entered a wrong date`;
        return false;
    }



}

calBtn.addEventListener("click", () => {
  let inputYear = inputField.value;
  calculateAge(inputYear);

//   console.log("diff Age = ", age.years);
//   console.log("Diff Month = ", age.months);
//   console.log("Diff Day = ", age.days);


});
