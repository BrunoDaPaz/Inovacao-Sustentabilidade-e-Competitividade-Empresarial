$(function() {
    $(':input').css('backgroundColor', 'grey');
    //$(':text').css('backgroundColor', 'grey');
    $(':password').css('backgroundColor', 'grey');
    $(':radio').parent().css('backgroundColor', 'grey');
    $(':submit').css('backgroundColor', 'grey');
    $(':checkbox:checked').parent().css('backgroundColor', 'grey');
    $('#txt').val($('option:selected').text() + ' está selecionado!');
});