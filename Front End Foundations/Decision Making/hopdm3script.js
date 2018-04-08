document.getElementById('submitName').addEventListener('click', handleInput);

function handleInput(e) {
    e.preventDefault();
    let firstNameRegex = /^[A-Z][a-z]+$/;
    let firstName;
    document.getElementById('firstName').value.match(firstNameRegex) ? 
    firstName = document.getElementById('firstName').value :
    alert("Name not Valid");
    let lastNameRegex = /^[A-Z][a-z]+$/;
    let lastName;
    document.getElementById('lastName').value.match(lastNameRegex) ?
    lastName = document.getElementById('lastName').value :
    alert("Name not Valid");
    let wholeName = firstName + ' ' + lastName;
    console.log(wholeName);
    document.getElementById("wholeName").innerHTML = `Hello ${firstName} ${lastName}`;

}