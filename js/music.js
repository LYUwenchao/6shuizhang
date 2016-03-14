
  function toggleSound() {
    var music = document.getElementById("music");
    var toggle = document.getElementById("toggle");

    if (music.paused) {
      music.play();
      toggle.className='preserve3D';
    }
    else {
      music.pause();
      toggle.className='';
    }
  }
  function changeVolP(){
    var video=document.getElementById('music');
    if (video.volume>0.9) {
      alert("音量已最大")
    }else{
      video.volume=video.volume+0.1;
    }       
  }
  function changeVolM(){
    var video=document.getElementById('music');
    if (video.volume<0.1) {
      alert("音量已最小")
    }else{
      video.volume=video.volume-0.1;
    }       
  }
