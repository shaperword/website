var img = document.getElementById("showimg");

function random(){
     var number = parseInt(1000*Math.random())%3;
     if (number == 0)
     {
        img.src = "./img/test1.png";
     }
     if (number == 1)
     {
         img.src = "./img/test2.png";
     }
     if (number == 2)
     {
         img.src = "./img/test1.png";
     }
//      if (number == 3){
//          img.src = "./img/test4.png";
//      }
//      if (number == 4){
//          img.src = "./img/test5.png";
//      }
//      if (number == 5){
//          img.src = "./img/test5.png";
//      }

//      if (number == 6){
//          img.src = "./img/test7.png";
//      }
//      if (number == 7){
//          img.src = "./img/test8.png";
//      }
//      if (number == 8){
//          img.src = "./img/test9.png";
//      }
//      if (number == 9){
//          img.src = "./img/test10.png";
//      }
//      console.log(number);


}


function showme(){
    random();
}

showme();
