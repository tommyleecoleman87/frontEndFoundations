$(document).ready(function(){
    $('div').hover(function(){
        $(this).css('background', 'black');
    }, function(){
        $(this).css('background', 'grey');
    });
});

$(document).ready(function(){
    $('p').dblclick(function(){
        $(this).hide();
    })
})

$(document).ready(function(){
    $('.things').click(function(){
        $(this).css('color', 'yellow');
    });
});

$(document).ready(function(){
    $('button').click(function(){
        $('div').hide();
    })
})

$(document).ready(function(){
    $('button').dblclick(function(){
        $('body').css('background', 'red');
        $('h1').addClass('error');
    })
});
