$(".navbar-nav a").on('click', function () {
    $('.navbar-nav').find('li.active').removeClass('active');
    $(this).parent('li').addClass('active');
});
// $(document).ready(function () {
//     $('ul.navbar-nav > li').click(function (e) {
//         e.preventDefault();
//         $('ul.navbar-nav > li').removeClass('active');
//         $(this).addClass('active');
//     });
// });

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
