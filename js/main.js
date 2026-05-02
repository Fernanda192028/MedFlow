// Função 1 - Menu Responsivo

$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times')
        $('.navbar').toggleClass('nav-toggle')
    })

    // Função 2 - Scroll Efeito
    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times')
        $('.navbar').removeClass('nav-toggle')

        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active')
        } else {
            $('header').removeClass('header-active')
        }

    })
});

//Função 3 - Abrir Login

$(document).ready(function () {
    $('.login').click(function () {
        window.location.href = "login.html";
    });
});


// Função 4 - Validação de Login
$(document).ready(function () {

    $('#loginForm').submit(function (e) {
        e.preventDefault();

        let email = $('#email').val().trim().toLowerCase();
        let senha = $('#senha').val().trim();


        if (email === "" || senha === "") {
            alert("Preencha todos os campos!");
            return;
        }


        if (email === "medico@gmail.com" && senha === "medico123") {
            alert("Login de médico realizado!");
            window.location.href = "disponibilidade.html";


        } else if (email === "paciente@gmail.com" && senha === "paciente123") {
            alert("Login de paciente realizado!");
            window.location.href = "agendamento.html";

        } else {
            alert("Email ou senha incorretos!");

            $('#email').val('');
            $('#senha').val('');


            $('#email').focus();
        }
    }
    )});
