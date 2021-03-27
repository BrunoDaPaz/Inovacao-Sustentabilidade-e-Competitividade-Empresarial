$(function() {
    $("#txt").val('Alteração de texto');
    $('.email').val('Alteração de e-mail');
    $('p:not(.destaque), li').css('color', 'black');
    $('li:first').css('color', 'black');
    $('li:first-child').css('color', 'black');
    $('li:last').css('color', 'black');
    $('li:last-child').css('color', 'black');
    $('p:gt(2)').css({
        "color": "orange",
        fontSize: "22px"
    });
    $('a[title]').css('color', 'red');
    $('a:not([title])').hide();
    $('li:odd').css('backgroundColor', 'grey');
    //$('li:even').css('backgroundColor', 'red');
    $('p:contains(afo 6)').css('color', 'orange');
    $('p:contains(afo 7)').css('color', 'pink');
    $('p:has(i)').css('color', 'blue');
    $('p:empty').text('Teste');
    $('p:hidden').show;
});