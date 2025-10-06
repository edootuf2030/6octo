document.addEventListener('DOMContentLoaded', function(){
  var menuBtn = document.getElementById('menuBtn');
  var menuBtn2 = document.getElementById('menuBtn2');
  var menuBtn3 = document.getElementById('menuBtn3');
  var menuBtn4 = document.getElementById('menuBtn4');
  var navs = document.querySelectorAll('.main-nav');
  function toggleNav(){
    navs.forEach(function(n){
      if(getComputedStyle(n).display === 'flex'){
        n.style.display = 'none';
      } else {
        n.style.display = 'flex';
        n.style.flexDirection = 'column';
        n.style.gap = '10px';
      }
    });
  }
  if(menuBtn) menuBtn.addEventListener('click', toggleNav);
  if(menuBtn2) menuBtn2.addEventListener('click', toggleNav);
  if(menuBtn3) menuBtn3.addEventListener('click', toggleNav);
  if(menuBtn4) menuBtn4.addEventListener('click', toggleNav);
  var animated = document.querySelectorAll('.animated');
  animated.forEach(function(el, i){
    setTimeout(function(){
      el.style.animationDelay = (i * 120) + 'ms';
      el.classList.add('entered');
    }, 120);
  });
});
