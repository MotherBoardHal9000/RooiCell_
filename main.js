let yPos = 0;
let header = document.querySelector(".header");
let headerMenuPopUp = document.querySelector(".headerMenuPopUp");
var headerscrollNumber = 0;

header.addEventListener("mouseover", mouseOver);
header.addEventListener("mouseout", mouseOut);

function mouseOver(addEventListener) {
  header.addEventListener("mouseover", function () {
    onAnimate("mouseover");
    yPos = -210;
  });

  header.addEventListener("mouseover", function () {
    headerMenuPopUp.classList.add("show");
    onAnimate("show");
    yPos = 0;
  });
}

function mouseOut(addEventListener) {
  headerMenuPopUp.addEventListener("mouseout", function () {
    offAnimate("mouseout");
    yPos = 0;
  });
  headerMenuPopUp.addEventListener("mouseout", function () {
    headerMenuPopUp.classList.remove("hide");
  
    offAnimate("hide");
    yPos = -210;
  });
}

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > window.screenTop) {
    header.style.opacity = 0;
  } else if (window.scrollY > headerscrollNumber) {
    header.style.opacity = 1;
  }
});

function onAnimate() {
  headerMenuPopUp.style.top =
    headerMenuPopUp.offsetTop +
    (yPos - headerMenuPopUp.offsetTop) * 0.09 +
    "px";
  headerMenuPopUp.style.opacity = yPos / headerMenuPopUp.offsetTop + 0.5;

  window.requestAnimationFrame(onAnimate);
}

function offAnimate() {
  headerMenuPopUp.style.top =
    headerMenuPopUp.offsetTop -
    (yPos + headerMenuPopUp.offsetTop) * 0.09 -
    "px";
    headerMenuPopUp.style.opacity = 0.5 / headerMenuPopUp.offsetTop - yPos;
  window.requestAnimationFrame(offAnimate);
}
//
//
//
//
//
//
//
function centerElement(elementId) {
  const element = document.getElementById(elementId);
  const parent = element.parentElement;

  if (
    window.scrollY >
    parent.offsetTop -
      (document.documentElement.clientHeight - element.offsetHeight) / 2
  ) {
    element.style.position = "fixed";
  } else {
    element.style.position = "relative";
    element.style.transform = "initial";
  }
}
//
//
//
//
//
//
//
const rooiCellAppearTiming = 0;
const rooiCellAppearEnds = 0;
const rooiCell = document.getElementById("rooiCell");
const Cosmetics = document.getElementById('Cosmetics');
const Cosmetics_p = document.getElementById('Cosmetics_p');
const backGroundVideo = document.getElementById("backGroundVideoContnents");

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  if (window.scrollY > rooiCellAppearTiming) {
    rooiCell.style.display = `translateY(${
      rooiCellAppearEnds + window.scrollY
    }px)`;
    rooiCell.style.opacity = (window.scrollY * rooiCellAppearTiming) / 500;
  } else  {window.scrollY  / rooiCellAppearTiming;

 rooiCell.style.opacity = 1;
  } 

  
});





window.addEventListener("scroll",function(addEventListener){
  let value = window.scrollY;
  rooiCell.style.transform = `translateY(${value * 0}px)`
  Cosmetics.style.transform = `translateY(${value * -0.3}px)`
  Cosmetics_p.style.transform = `translateY(${value *-0.25}px)`
  //popIt.style.transform=`translateY(${value * 0.30}px)`
  //sPonge.style.transform = `translateY(${value * 0.10}px)`
  //Brick.style.transform = `translateY(${value * 0.10}px)`
  //Fluid.style.transform = `translateY(${value * 0.15}px)`
  this.window.requestAnimationFrame
  console.log("scroll");
  
})

