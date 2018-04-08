
function changeText() {
    const myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
           document.getElementById('change').innerHTML = this.responseText;
        }
    }

    myRequest.open('get', 'info.txt', true);
    myRequest.send();
}