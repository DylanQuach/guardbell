function newElement() {
  console.log('Adding Element')
  var li = document.createElement("li")
  var inputValue = document.getElementById("myInput").value
  var t = document.createTextNode(inputValue)

  li.appendChild(t)

  if(inputValue === '') {
    alert("You can't do nothing stupid!")
  }
  else {
    document.getElementById("myUL").appendChild(li)
  }

  document.getElementById("myInput").value = ""

  var span = document.createElement("SPAN")
  var txt = document.createTextNode("\u00D7")
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)

  for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement
      div.style.display = 'none'
    }
  }

}

//delete

var todos = document.getElementsByTagName("LI") 
var i
for ( i = 0; i < close.length; i++) {
  var span = document.createElement("SPAN")
  span.className = 'close'
  todos[i].appendChild(span)

var close = document.getElementsByClassName('close')
var i
for ( i=0; i < close.length; i++) {
  close [i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  }
}


}

//update

var list = document.querySelector('ul')
list.addEventListener('click', function(e){
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
  }
}, false)