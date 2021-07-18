var audio = new Audio("backgroundMusic.mp3");
setTimeout(function () {
  audio.play();
}, 2000);
setInterval(function () {
  var audio = new Audio("backgroundMusic.mp3");
  audio.play();
}, 154000);
var score = document.getElementById("newScorer");
var Hero = document.getElementById("hero");
var Enemy = document.getElementById("enemy");
var speed = Enemy.style.animationDuration;
var count = 0;
var scorenew = setInterval(function () {
  score.innerHTML = count;
  count++;
}, 100);

var heroJumpSound = new Audio("heroJumP.mp3");
document.addEventListener("click", function () {
  jumpHero();
});
document.addEventListener("keypress", function (event) {
  if (event.key == " ") {
    jumpHero();
  }
});
function jumpHero() {
  heroJumpSound.play();
  Hero.classList.add("SuperJump");
  setTimeout(function () {
    Hero.classList.remove("SuperJump");
  }, 500);
}
var heroTop;
var newscore;
var enemyLeft;
setInterval(function () {
  heroTop = parseInt(window.getComputedStyle(Hero).getPropertyValue("top"));
  enemyLeft = parseInt(window.getComputedStyle(Enemy).getPropertyValue("left"));

  console.log(heroTop, enemyLeft);
  if(screen.width<=800)
  {
    if (enemyLeft > 20 && enemyLeft < 60 && heroTop >= 50) {
        Enemy.style.left = "40px";
        Enemy.style.animation = "none";
        setTimeout(function () {
          newscore = count;
    
          Hero.style.visibility = "hidden";
          Enemy.style.left = "40px";
          Enemy.style.animation = "none";
          clearInterval(scorenew);
        }, 10);
      }
  }
  else
  {
    if (enemyLeft > 70 && enemyLeft < 150 && heroTop >= 300) {
        Enemy.style.left = "120px";
        Enemy.style.animation = "none";
        setTimeout(function () {
          newscore = count;
    
          Hero.style.visibility = "hidden";
          Enemy.style.left = "120px";
          Enemy.style.animation = "none";
          clearInterval(scorenew);
        }, 10);
      }
  }
  
}, 1);
