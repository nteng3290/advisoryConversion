const site = {}

site.toggleMenu = () => {
    $(".hamburger").on("click", function() {
        $(".page-nav .page-nav-menu").toggleClass("open");
    });
$(".page-nav .page-nav-menu a").on("click", function () {
    $(".page-nav .page-nav-menu").toggleClass("open");
    });
}

site.init = () => {
 site.toggleMenu();
 
}

$(function () {
    site.init();
    $('a').smoothScroll({
        speed: 500,
        offset: -100
    });
});