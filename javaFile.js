console.log("sanity check!");

let colorNow="White";
// when clicked on a color sploch this will select that color:
//

document.addEventListener("DOMContentLoaded", function(){
  let colors = document.querySelectorAll('.border')
    for (var i = 0; i < colors.length; i++) {
      let brush = colors[i]
      // console.log(brush)
      brush.addEventListener("click", function(){
        colorNow = brush.id;
        console.log(colorNow)
      })
    }
    //the chunck of code will make it so that when a cell is clicked then it will change to the color now value
    let cell= document.querySelectorAll('.cell')
    for (var i = 0; i < cell.length; i++) {
      let canvas = cell[i]
      console.log(canvas)
      canvas.addEventListener('click', function(){
        canvas.style.backgroundColor=colorNow;
        canvas.style.borderColor=colorNow;
      })
    }

})
