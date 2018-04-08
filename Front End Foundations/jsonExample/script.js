let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById('example').innerHTML = myObj.bio;
    }
}

newRequest.open('GET', 'https://api.github.com/users/tommyleecoleman87', true);
newRequest.send();