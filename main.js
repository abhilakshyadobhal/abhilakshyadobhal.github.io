$(document).ready(function () {
    $('ul.navbar-nav > li').click(function (e) {
        e.preventDefault();
        $('ul.navbar-nav > li').removeClass('active');
        $(this).addClass('active');
    });
});

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});