var album_content_section = document.getElementsByClassName('album-content-section');
var album_header = document.querySelector('.album-header')

function parallax_effect(event){
    var x = window.pageYOffset;
    album_header.style.transform = "translateY(" + x * 0.2 + "px)";

    console.log(x);
}

function countSongs(){
    const song_items = document.querySelectorAll('.item_number');
    for(let i = 0; i < song_items.length; i++){
        song_items[i].textContent = i+1 + ' - ';
    }
}