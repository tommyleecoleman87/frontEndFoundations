$(document).ready(function(){
    $('p').dblclick(function(){
        $(this).css('color', 'blue');
    });
});

$(document).ready(function(){
    $('p').hover(function(){
        $(this).css('font-size', '2em');
    }, function(){
        $(this).css('font-size', '1em');
    });
});