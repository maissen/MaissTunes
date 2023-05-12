const upload_music__input = document.getElementById('upload-music__input');
const upload_music = document.getElementById('upload-music');

upload_music__input.addEventListener('input', function(event){
    console.clear();
    const file = event.target.files[0];
      // Check if the file is an audio file
      if (file.type.startsWith('audio/')) {
        const reader = new FileReader();

    
        const new_audio = document.getElementById('cloneMe').cloneNode('true');
        document.getElementById('songs_list').insertBefore(new_audio, upload_music);
    
        new_audio.style.display = 'flex';
        new_audio.querySelector('.box-name').textContent = file.name.split('.').slice(0, -1).join('.');;

      }
    else{
        alert('your file doesn\'t seem an audio file');
    }
    

});