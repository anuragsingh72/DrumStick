

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clicked = this.innerHTML;
        makeSound(clicked);
        pressed(clicked);
       
    });
}
    document.addEventListener("keypress",function(event)
    {
        makeSound(event.key);
        pressed(event.key);
    });

  function makeSound(keyp)
  {
    switch (keyp
        ) {
            case "w": var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a": var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s": var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d": var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j": var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k": var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l": var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            default:
                break;
        }

  }
  function pressed(curKey)
  {
        var currentKey= document.querySelector("."+curKey);
        currentKey.classList.add("pressed");

        setTimeout(function(){
        currentKey.classList.remove("pressed");
        }, 100);
  }