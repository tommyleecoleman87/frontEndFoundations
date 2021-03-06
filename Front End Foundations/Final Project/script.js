$(document).ready(function(){
    $('.icons').hover(function(){
        $(this).css('height', '75px');
        $(this).css('width', '75px');
    }, function(){
        $(this).css('height', '50px');
        $(this).css('width', '50px');
    });
});

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
      // Finish your request here
      gitHubRequest.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
              callback(this);
          }
      }
      // Don't forget the callback()
      gitHubRequest.open('GET', url, true);
      gitHubRequest.send();
  }
  
  function loadRepoCallback(gitHubRequest) {
    // Callback function needs to parse the JSON
    // Using the DOM get the element ID from your <ul> in your HTML
    // You will need a forEach to loop through the parsed object
    // Using the DOM create new list elements
    // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
    // Append the new list items to the element you retrieved from HTML
    let gitHubUser = JSON.parse(gitHubRequest.responseText);
    gitHubUser.forEach(item => {
        console.log(item.name);
        let newLi = document.createElement('li');
        let newA = document.createElement('a')
        newAttribute = document.createAttribute('href');
        newAttribute2 = document.createAttribute('target');
        newAttribute2.value = "_blank";
        newAttribute.value = item.html_url;
        newA.setAttributeNode(newAttribute);
        newA.setAttributeNode(newAttribute2);
    

        document.getElementById('repoList').appendChild(newLi).appendChild(newA).innerHTML = item.name;
    })
  }

$(document).ready(function(){
    $('.greyTheme').click(function(){
        $('link').attr('href','style.css');
    });
});

$(document).ready(function(){
    $('.blueTheme').click(function(){
        $('link').attr('href','style1.css');
    });
});

