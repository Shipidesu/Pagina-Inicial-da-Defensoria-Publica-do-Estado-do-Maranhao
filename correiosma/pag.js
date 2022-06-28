$(function() {

    $('input#username').on('blur', function(e) {
        autoCompletarDominio(e);
    })

    function autoCompletarDominio(e) {
        campo = e.target;
        valor = campo.value;

        var [ mail_usuario, mail_dominio ]  = valor.includes('@') ? valor.split('@') : [ valor, null ];
        var [ url_subdominio, url_dominio ] = window.location.hostname.split(/\.(.+)/);

        if ((mail_usuario) && (! valor.includes('@'))) campo.value = mail_usuario + '@' + url_dominio;
    }

});