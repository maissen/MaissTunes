const aside_menu = document.querySelector('#aside-menu');
const aside_menu_behind = document.querySelector('#aside-menu__behind');
var loader_section = document.getElementById('loader-section');


function loadContent(path, link){

    // Remove the 'active' class from all links in the side navigation menu
    var links = document.querySelectorAll('.aside-menu__item');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active-aside-menu-item');
    }
    // Add the 'active' class to the clicked link element
    link.classList.add('active-aside-menu-item');

    loader_section.src = path;
}