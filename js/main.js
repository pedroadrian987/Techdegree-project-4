lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});

//my plugin--- below--------

// 1- registrar una variable para el contenido ingresado, todo en mayusculas
// 2- conseguir contenido de las imagenes
/* 3- poner un condicional en el que si la variable del contenido, todo en mayusculas, es igual al
      al caption de una imagen, la imagen se mantiene visible,
      sino la imagen se vuelve invisible*/

//-----contenido de input-------
//$('input').val();
// -----------------------------


// --contenido de "data-title"--
// $("a")[i].getAttribute("data-title");
//------------------------------
// let i = 0;
//
$('input').keyup(function(){
  for (let i = 0; i < 12; i += 1){
    var searX = $('input').val().toUpperCase();
    var aTTr = $("a")[i].getAttribute("data-title").toUpperCase();
    if (aTTr.indexOf(searX) > -1) {
      $('img')[i].style.display = "inline-block";
      $('img')[i].style.float = "left";
      $('img')[i].style.marginRight = "6%";
      document.getElementsByTagName("div")[0].style.marginLeft = "15%";
    } else if ($('input').val() === "" ) {
      $('img')[i].style.display = "inline-block";
      $('img')[i].style.marginRight = "6%";
      document.getElementsByTagName("div")[0].style.marginLeft = "15%";
    } else {
      $('img')[i].style.display = "none";
    }
}});
