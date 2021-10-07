
//})
function myFunction() {
  //document.getElementById("demo").innerHTML = "Esta banda es el proyecto más exitoso del músico Steven Wilson. Con una mezcla de rock psicodélico, rock progresivo, rock alternativo, música ambiental y, más recientemente, heavy metal, han desarrollado piezas musicales que se caracterizan por su diversidad y la calidad distintiva del sonido en sus grabaciones.";
  document.getElementById("demo").innerHTML= "Tree"
}
function myFunction2(){
  document.getElementById("album1").innerHTML = "Album In Absenta";
}

function myFunction3(){
  document.getElementById("contexto").innerHTML = "In Absentia es el séptimo álbum de estudio de la banda inglesa de rock progresivo Porcupine Tree, editado el 24 de septiembre de 2002 en el sello Lava Records, siendo el primero publicado por la formación en dicha compañía."
}




function toggle(){

    var trailer= document.querySelector(".trailer")

    var video= document.querySelector("video")
    trailer.classList.toggle("active")
    video.pause();
    video.currentTime = 0;


}