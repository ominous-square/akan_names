function getAkanName () {
    let yearOfBirth = document.getElementById("year-input").value;
    let monthOfBirth = Number(document.getElementById("month-input").value);
    let dayOfBirth = Number(document.getElementById("day-input").value);
    let genders = document.getElementsByName("gender");
    
    // function to get gender
    function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
          }
     }
    }

    let myGenderValue = getGender();
    console.log(myGenderValue);

    // validation functions
    function monthChecker() {
     if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
        } else {
      return true;
     }
    }

    function dayChecker() {
        if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
          if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31){
          return false;
        } else {
          return true;
        }
      }

    let monthValid = monthChecker();
    let dayValid = dayChecker();

    //formula to determine day of birth (Sunday = 1, Monday = 2)etc..
    let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
    ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

    // CReating Arraiys for the necessary information for the fomulae

    let weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];

    let femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
    ];

    // Generating an index value to select items in the array
    let index;
    if (dayOfWeekNumber == 0){
        index = 6;
    } else {
        index = dayOfWeekNumber - 1;
    }

    console.log(index);

    if (myGenderValue == "male" && monthValid && dayValid){
        document.getElementById('result').textContent = "You were born on a " + weekDay[index] + " , your Akan name is " + maleNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h1').textContent = "Hello" + " " + maleNames[index];
        return false;
    } else if (myGenderValue == "female" && monthValid && dayValid){
        document.getElementById('result').textContent = "You were born on a " + weekDay[index] + " , your Akan name is " + femaleNames[index];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        document.getElementById('result').style.fontSize = "18px";
        document.querySelector('h1').textContent = "Hello" + " " + femaleNames[index];
        return false;
    } else {
        alert("Yo have entered invalid information. KIndy check the details filled");
    }
}