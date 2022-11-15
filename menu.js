$(document).ready(function () {

    $('.dropdown-button').click(function() {
        $('.dropdown').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.dropdown').toggleClass('reverse-animation');
    })
});