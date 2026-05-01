// Função 1 - Menu Responsivo

$(document).ready(function() {
    $('.fa-bars').click(function() {
       $(this).toggleClass('fa-times')
       $('.navbar').toggleClass('nav-toggle')
    })

// Função 2 - Scroll Efeito
    $(window).on('scroll load', function() {
        $('.fa-bars').removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

        if($(Window).scrollTop() > 30) {
            $('header').addClass('header-active')
        } else {
            $('header').removeClass('header-active')
        }

 })
});

//Função 3 - Abrir Login

$(document).ready(function() {
    $('.login').click(function() {
        window.location.href = "login.html";
    });
});

