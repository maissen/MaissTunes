function display_sidebar(){
    aside_menu.classList.toggle("active-aside-menu");
    aside_menu_behind.classList.toggle("active-aside-menu-behind");

    var sections = document.querySelectorAll('.loader-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('no-scroll');
    }
}