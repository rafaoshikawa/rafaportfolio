AOS.init();
$(document).ready(function () {
  // Oculta o menu hamburguer inicialmente
  $(".menu-hamburguer").hide();

  // Toggle do menu hamburguer ao clicar na linha
  $(".menu-hamburguer-line").click(function () {
    $(".menu-hamburguer").fadeToggle();
  });

  // Fechar o menu se clicar no X
  $(".menu-close").click(function () {
    $(".menu-hamburguer").fadeOut();
  });

  // Fechar o menu se clicar em um link
  $(".menu-hamburguer a").click(function () {
    $(".menu-hamburguer").fadeOut();
  });

});
