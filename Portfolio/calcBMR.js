function BMRCalculator(age, gender, heightFeet, heightInches, weight) {
    let total;
    if (gender === true) {
        total = menSedentaryForm(age, heightFeet, heightInches, weight);
        alert(Math.ceil(total));
        return true;
    }
    else {

    }
}

function menSedentaryForm(age, heightFeet, heightInches, weight) {
    let sum = 0;
    sum = ((10 * weight) + (6.25 * (heightInches + (heightFeet * 12))) - (5 * age) + 5);
    return sum;
}

function sayHi() {
    alert("Hi pipols");
}