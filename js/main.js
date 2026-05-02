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

        if($(window).scrollTop() > 30) {
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

   // Função 4 - Login 
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        let email = $('#email').val().trim().toLowerCase();
        let senha = $('#senha').val().trim();
        let mensagem = $('#loginFeedback');

        mensagem.text('').css('color', 'red');

        if (email === "medico@gmail.com" && senha === "medico123") {
            mensagem.css('color', 'green').text("Bem-vindo, médico!");

            setTimeout(function() {
                window.location.href = "disponibilidade.html";
            }, 800);

        } else if (email === "paciente@gmail.com" && senha === "paciente123") {
            mensagem.css('color', 'green').text("Bem-vindo, paciente!");

            setTimeout(function() {
                window.location.href = "agendamento.html";
            }, 800);

        } else {
            mensagem.text("Email ou senha incorretos!");
        }
    });