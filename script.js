var date = new Date()
var cu = date.toDateString()
var final = cu.slice(0,30)
console.log(final)

var time = date.getTime()
var s = time / 1000
var m = s / 60
var h = m / 60
var d = h / 24
var y = d /365
console.log(y)

var result = document.getElementById('result')
var years = document.getElementById('years')
var days = document.getElementById('days')
var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')
function showDate(){
  result.innerText = final
  years.innerText = Math.floor(y)
  days.innerText = Math.floor(d)
  hours.innerText = Math.floor(h)
  minutes.innerText = Math.floor(m)
  seconds.innerText = Math.floor(s)
  
}