window.addEventListener("mousemove", function (addEventListener) {
  const cursorDefaultInner = document.querySelector(".cursor_default_inner");
  const cursorTraceInner = document.querySelector(".cursor_Trace_Inner");
  cursorDefaultInner.style.top = addEventListener.clientY + "px";
  cursorDefaultInner.style.left = addEventListener.clientX + "px";
  cursorTraceInner.style.top = addEventListener.clientY + "px";
  cursorTraceInner.style.left = addEventListener.clientX + "px";
  window.cursorAnimate(cursorDefaultInner);
  window.cursorAnimateII(cursorTraceInner);
});


const smoothPointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
window.addEventListener("mousemove", (event) => {
  gsap.to(smoothPointer, {
    x: event.clientX,
    y: event.clientY,
    duration: 1.1,
  });
});


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
    onAnimate(header)
  } else if (window.scrollY == headerscrollNumber) {
    header.style.opacity = 1;
    offAnimate(headerMenuPopUp)
  }
});

function onAnimate() {
  headerMenuPopUp.style.top =
    headerMenuPopUp.offsetTop +
    (yPos - headerMenuPopUp.offsetTop) * 0.09 +
    "px";
  headerMenuPopUp.style.opacity = yPos / headerMenuPopUp.offsetTop + 0.9;

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


function cursorAnimate(){const cursorDefaultInner = document.querySelector(".cursor_default_inner");
cursorDefaultInner.style.top = addEventListener.clientY + "px";
  cursorDefaultInner.style.left = addEventListener.clientX + "px";
  window.requestAnimationFrame(cursorAnimate);
}


function cursorAnimateII(){const cursorTraceInner = document.querySelector(".cursor_Trace_Inner");;
cursorTraceInner.style.top = addEventListener.clientY + "px";
  cursorTraceInner.style.left = addEventListener.clientX + "px";
  window.requestAnimationFrame(cursorAnimateII);
}

//
//
//
//
//
//
//

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
const proDuct = document.getElementById("proDuct");
const backGroundVideo = document.getElementById("backGroundVideoContnents");

window.addEventListener("scroll", function (e) {
  console.log(window.scrollY);
  if (window.scrollY > rooiCellAppearTiming) {
    rooiCell.style.display = `translateY(${
      rooiCellAppearEnds + window.scrollY
    }px)`;
    rooiCell.style.opacity = (window.scrollY * rooiCellAppearTiming) / 700;
  } else  {window.scrollY  / rooiCellAppearTiming;

 rooiCell.style.opacity = 1;
  } 

  
});





window.addEventListener("scroll",function(addEventListener){
  let value = window.scrollY;
  Cosmetics.style.transform = `translateY(${value * -0.3}px)`
  Cosmetics_p.style.transform = `translateY(${value *-0.25}px)`
  proDuct.style.transform=`translateY(${value * -0.09}px)`
  //sPonge.style.transform = `translateY(${value * 0.10}px)`
  //Brick.style.transform = `translateY(${value * 0.10}px)`
  //Fluid.style.transform = `translateY(${value * 0.15}px)`
  this.window.requestAnimationFrame
  console.log("scroll");
  
})



