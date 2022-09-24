
let count = 5;
setInterval(function () {
    count --;

    if(count >= 0){
        document.getElementById("counter").innerHTML = count;
    } if( count == 0){
        document.getElementById("counter").innerHTML = ""
        let box = document.getElementById("div");
        box.classList.toggle("box");
      }
}, 1000);