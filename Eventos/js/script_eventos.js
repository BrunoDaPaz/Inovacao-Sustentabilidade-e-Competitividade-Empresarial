$(function() {

    $('.coordenadas').mouseenter(function() {
        //$(console.log('O rato entrou no retangulo!'));
        //$('.valores').show();
        $('.valores').fadeIn();
    })

    $('.coordenadas').mousemove(function(e) {
        var posicoes = $(this).offset();

        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;

        $('.valores').html(`Coordenadas X: ${x} e Y: ${y}`);
    });

    $('.coordenadas').mouseout(function() {
        //$(console.log('O rato saiu do retangulo!'));
        $('.valores').fadeOut();
    });

});