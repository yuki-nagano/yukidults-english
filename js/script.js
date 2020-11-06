$(document).ready(function() {

  //same as document.getElementById('slides')
  $('#slides').superslides({
    animation: 'fade',
    play: 300000, //change images in 5 sec
    pagination: false, //turn off ooo on the bottom
  });

  

  //typed.js
  let typed = new Typed(".typed", {
    strings: ["Welcome :)"],
    typeSpeed: 150,
    loop: false,
    // startDelay: 10000,
    showCursor: false,
    // backDelay: 3000, // delay time for going next
    // showCursor: true,
    // cursorChar: '|',
  });

  // snowfall
  $('#slides').snowfall('clear');
  
  $(document).snowfall({
    round: true,
    maxSize : 10,
    flakeIndex : "1",
  });
  
  let overlay = document.getElementById('overlay');
  let contact = document.getElementById('contact');
  overlay.style.height = `${contact.clientHeight}px`;



}); // 即時関数



