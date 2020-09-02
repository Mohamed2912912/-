var i=0;
var limit =document.querySelectorAll(".drum").length;
for (i=0; i< limit; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", fin);
    function fin() {

        var x= this.innerHTML;
    
        go(x);
    
        animation(x);
    
      }
    
    }
    
    document.addEventListener("keypress", function(evt) {

        go(evt.key);
      
        animation(evt.key);
      
      });
      
      /*function playsound(song) {
        var audio = new Audio("/sounds/" + song + ".mp3");
        audio.play();
    } ;*/ 
    
   function go(key){
    
        switch (key){
        case "w" :
        
        var tom1=new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        case "a" :
        
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
        case "s" :
            
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            case "d" :
                
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
                case "j" :
                    
                    var snare=new Audio('sounds/snare.mp3');
                    snare.play();
                    break;
                    case "k" :
                        
                        var crash=new Audio('sounds/crash.mp3');
                        crash.play();
                        break;
                        case "l" :
                            
                            var kick=new Audio('sounds/kick-bass.mp3');
                            kick.play();
                            break;             
        default:
    }}
    
    
    function animation(f){
        var active= document.querySelector("."+f);
        active.classList.add("pressed");
        setTimeout(function(){active.classList.remove("pressed"); },200);
     }
    
    


