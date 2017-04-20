var counter = 0;
var petCount = document.getElementById("petCount");
var catStats = document.getElementById("catStats");
var catButton = document.getElementById("catButton");
function petCat() {
  counter++
  petCount.innerHTML = counter
  if(counter > 4){
     catStats.innerHTML = "rawwwwwwww :|"
  }
  if (counter == 9) {
     catStats.innerHTML = "hssssss :("
  }
  if (counter == 10) {
     catButton.disabled = true
     catStats.innerHTML = "I WILL KILL YOU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
     document.getElementById("cat-img").src = "https://charge.co/blog/content/images/2015/10/angry-cat-1.gif"
  }
}

function restored() {
  counter = 0
  petCount.innerHTML = counter
  catStats.innerHTML = ":)"
  catButton.disabled = false
  document.getElementById("cat-img").src = "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
}