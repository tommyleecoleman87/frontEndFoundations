function changeThings(url, callback) {
    const myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
           callback(this);
        }
    }

    myRequest.open('GET', url, true);
    myRequest.send();


}

function doggoInfo(xhttp) {
    document.getElementById('change').innerHTML = xhttp.response;
}

$(document).ready(function(){
    $('#doggoImg').click(function(){
        $(this).attr('src', 'https://i.imgur.com/ITsgIeg.jpg');
    });
});

$(document).ready(function() {
    $('footer').dblclick(function(){
        $(this).hide();
    });
});