const aside_menu = document.querySelector('#aside-menu');
const aside_menu_behind = document.querySelector('#aside-menu__behind');


function loadContent(section, link){

    // Remove the 'active' class from all links in the side navigation menu
    var links = document.querySelectorAll('.aside-menu__item');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active-aside-menu-item');
    }
    // Add the 'active' class to the clicked link element
    link.classList.add('active-aside-menu-item');


    // to display the targeted section from the Aside menu
    var sections = document.querySelectorAll('.loader-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active-section');
    }
    
    // Add the 'active-section' class to the targeted section from the Aside menu
    document.getElementById(section).classList.add('active-section');
}