function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.querySelector('.contact-icons').classList.add('show');
    }, 500); 
  });
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.querySelector('.contact-icons').classList.add('show');
      animateSkills();
    }, 500); 
  });
  
  function animateSkills() {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
      const targetWidth = skill.getAttribute('data-progress');
      skill.style.width = targetWidth;
    });
  }
  window.onscroll = function() {
    stickTopnav();
};

var topnav = document.getElementById("myTopnav");
var sticky = topnav.offsetTop;

function stickTopnav() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}