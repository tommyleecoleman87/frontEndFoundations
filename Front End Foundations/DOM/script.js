function nameInfo () {
    let firstName = document.getElementById('firstName').value;
    let middleName = document.getElementById('middleName').value;
    let lastName = document.getElementById('lastName').value;
    let fullName = firstName + middleName + lastName;
    document.getElementById('fullName').innerHTML = fullName;
    console.log(document.getElementById('fullName').innerHTML)
    return document.getElementById('fullName').innerHTML;
  }
  
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', nameInfo);