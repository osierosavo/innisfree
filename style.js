const mMenuBtn = document.querySelector("header .menu");
const mMenuCloseBtn = document.querySelector(".navigation .close");
const mMenu = document.querySelector(".navigation");

mMenuBtn.addEventListener('click', function(){
  mMenu.style.left = '0';
});
mMenuCloseBtn.addEventListener('click', function(){
  mMenu.style.left = "-100%";
});

const nav = document.querySelectorAll('.nav');
const naviTitle = document.querySelectorAll('.navi_title');
const naviCont = document.querySelectorAll('.navi_contents');


for (let i = 0; i < naviTitle.length; i++) {
  naviTitle[i].addEventListener('click', function (e) {
    for (let j = 0; j < nav.length; j++) {
      nav[j].classList.remove('active');
      e.target.parentNode.classList.add('active');
    }
  });
};

