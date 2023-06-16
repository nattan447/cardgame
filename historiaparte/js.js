let audio = document.getElementById("audio");
setTimeout(function () {
  audio.play();
}, 4000);
setTimeout(() => {
  location.href = "index.html";
}, 95000);
addEventListener("keydown",(b)=>{
if(b.keyCode==66){
  location.href = "index.html";
}

})
