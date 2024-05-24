// using click function and hide function
$("#click").click(function(){
    $('#myh1').hide();
});

// using double click function and show function
$("#dbclick").dblclick(function(){
    $('#myh1').show();
});

// using click function and fade in function text
$("#fadeIn").click(function(){
    $("#myp").fadeIn('slow').text('hello word');
});

// using click function and fade out function
$("#fadeOut").click(function(){
    $("#myp").fadeOut('slow');
});

// using hover function and addClass ,removeClass
$('#myh1').hover(function(){
    $(this).addClass('bg-primary-subtle');
},
function(){
    $(this).removeClass('bg-primary-subtle');
});
// append function

$('#append').click(function(){
    $('#myul').append('<li class="list-group-item">An item</li>')
})