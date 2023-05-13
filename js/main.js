var allow_visual_effect = document.querySelectorAll('.allow-visual-effect');
var circle = document.getElementById('visual-effect');

for(let i = 0; i < allow_visual_effect.length; i++){
    allow_visual_effect[i].addEventListener('mousemove', function moveCircle(event) {
        var x = event.clientX + window.pageXOffset;
        var y = event.clientY + window.pageYOffset;
      
        circle.style.left = (x - circle.offsetWidth / 2) + 'px';
        circle.style.top = (y - circle.offsetHeight / 2) + 'px';
    });
}

function visual_effect(){
    const elements = document.querySelectorAll('.box, .songs-list-item');
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener('mouseenter', function(){
            circle.classList.add('change-visual-effect-color');
        });
        elements[i].addEventListener('mouseleave', function(){
            circle.classList.remove('change-visual-effect-color');
        });
    }
}

visual_effect();