	var theBoxes = document.querySelectorAll(".box");
	var boxA  =document.querySelector("#a");
	var boxB = document.querySelector("#b");
  var boxC = document.querySelector("#c");
var animateOpacity = KUTE.allFromTo(
  theBoxes,
  { opacity: 1 },
  { opacity: 0.1 },
  { offset: 700 }
);

var animateRotation = KUTE.allFromTo(
  theBoxes,
  { rotate: 0 },
  { rotate: 360 },
  { offset: 250, duration: 800 }
);

var animateTop = KUTE.allFromTo(
  theBoxes,
  { bottom: 0 },
  { top: 100 },
  { offset: 100 }
);
 
var animateA = KUTE.fromTo(
  boxA,
  { height: 100 },
  { height: 175 }
);
 
var animateB = KUTE.fromTo(
  boxB,
  { width: 100 },
  { width: 200 }
);

var animateRESET = KUTE.fromTo(
  boxB,
  { width: 100 },
  { width: 100 }
);
var animateRESET1 = KUTE.fromTo(
  boxA,
  { height: 100 },
  { height: 100}
);
var animateRESET2 = KUTE.allFromTo(
  theBoxes,
  { bottom: 00 },
  { top: 0 },
  { offset: 50 }
);


var animateAll = KUTE.allFromTo(
  theBoxes,
  { translateY: 0, opacity:.1 },
  { translateY: 100, opacity:1},
  { offset: 500 }
);
 
var animateA2 = KUTE.fromTo(
  boxA,
  { translateZ: 0 },
  { translateZ: 50 },
  { parentPerspective: 100, parentPerspectiveOrigin: "0% 0%" }
);
 
var animateB2 = KUTE.fromTo(
  boxB,
  { translateX: 0 },
  { translateX: -200 }
);


var animateALLrot = KUTE.allFromTo(
  theBoxes,
  { rotateZ: 0, opacity:.1 },
  { rotateZ: 360,opacity:1 },
  { offset: 500 }
);
 
var animateA3 = KUTE.fromTo(
  boxA,
  { rotateX: 0 },
  { rotateX: 180 },
  { perspective: 100 }
);
 
var animateB3 = KUTE.fromTo(
  boxB,
  { rotateY: 0 },
  { rotateY: 180 }
);


var animateBorders = KUTE.allFromTo(
  theBoxes,
  { borderTopLeftRadius:'0%', opacity:.1 },
  { borderTopLeftRadius:'100%', opacity:1 },
  { offset:1000 }
);
 
var animateA4 = KUTE.fromTo(
  boxA,
  { borderTopRightRadius:'0%' },
  { borderTopRightRadius:'100%' }
);
 
var animateB4 = KUTE.fromTo(
  boxB,
  { borderBottomLeftRadius:'0%' },
  { borderBottomLeftRadius:'100%' }
);
 
var animateC4 = KUTE.fromTo(
  boxC,
  { borderBottomRightRadius:'0%' },
  { borderBottomRightRadius:'100%' }
);
 




$('.start').click(function(event){
	animateOpacity.start();
});

$('.stop').click(function(event){
	animateOpacity.stop();
	animateRotation.pause();
	$('.box').css('opacity',.1);
		$('.box').css('transform', 'rotate(0deg)');
		animateRESET.start();
				animateRESET2.start();
		animateRESET1.start();
    $('.box').css('border-radius','0%');
});

$('.pause').click(function(event){
	animateOpacity.pause();
	animateRotation.pause();
});

$('.resume').click(function(event){
	animateOpacity.resume();
	animateRotation.resume();
});

$('.rotate').click(function(event){
	animateRotation.start();
});

$('.chain').click(function(event){
	animateOpacity.chain(animateRotation);
	animateOpacity.start();
});

$('.loop').click(function(event){
	animateOpacity.chain(animateRotation);
		animateRotation.chain(animateOpacity);
	animateOpacity.start();
});

$('.combo').click(function(event){
	animateOpacity.start();
		animateRotation.start();
});

$('.startCSS').click(function(event){
	animateTop.start();
	animateA.start();
	animateB.start();
});

$('.startTRANSLATE').click(function(event){
	animateA2.chain(animateAll);
	animateA2.start();
	animateB2.start()
});


$('.startROTax').click(function(event){
		animateA3.chain(animateALLrot);
		animateA3.start();
		animateB3.start()
  });


$('.startBORD').click(function(event){
    animateA4.chain(animateBorders);
    animateA4.start();
    animateB4.start();
    animateC4.start();
});