// sotto 1000px cliccando su icona bars si apre l'hamburger menu
$('.open').click(function(){
    $('.hamburger-menu').addClass('active');
});
//nel hamburger-menu quando clicco su X si chiude la finestra e mi riappare l'icona bars
$('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
});
