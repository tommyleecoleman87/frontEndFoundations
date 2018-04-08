function bioParagraph() {
    bioRequest = new XMLHttpRequest();
    bioRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.getElementById('bio').innerHTML = this.responseText;
        }
    }

    bioRequest.open('GET', 'info.txt', true);
    bioRequest.send();
}