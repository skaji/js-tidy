$(document).ready(function () {
    $('#result').hide();
    $('#format').click(function () {
        var code = $('#code').val();
        var decoder = new JsDecoder();
        decoder.s = code;
        var decoded = decoder.decode();
        var highlight = hljs.highlight('javascript', decoded).value;
        $('#result').html(highlight).show();
    });
});
