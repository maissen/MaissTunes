var album_content_section = document.getElementsByClassName('album-content-section');
var album_header = document.querySelector('.album-header')

function parallax_effect(event){
    var x = window.pageYOffset;
    album_header.style.transform = "translateY(" + x * 0.2 + "px)";
}

