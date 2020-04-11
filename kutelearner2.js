var morphAB = KUTE.to(
    '#start', 
    { path: '#bookmark'},
   { // options
  easing: 'easingCubicInOut', duration: 1000,
  morphIndex: 800
   }
);


var morphABC = KUTE.to(
    '#start', 
    { path: '#start'},
   { // options
  easing: 'easingCubicInOut', duration: 1000,
  morphIndex: 800
   }
);



var morphA = KUTE.to(
    '#start', 
    { path: '#bookmark4'},
   { // options
  easing: 'easingCubicInOut', duration: 1000,
  morphIndex: 800
   }
);


// morph A- AB -ABC is a tween!!!!



var morphB = KUTE.to(
    '#start2', 
    { path: '#bookmark2' },
   { // options
  easing: 'easingCubicInOut', duration: 1000,
  morphIndex: 50,yoyo: true, repeat: 1
   }
);
var morphC = KUTE.to(
    '#start3', 
    { path: '#bookmark3' },
       { // options
  easing: 'easingCubicInOut', duration: 1000,
  morphIndex: 50,yoyo: true, repeat: 1
   }
);

var wholeAnimation = KUTE.fromTo(
  ".battery",
  { draw: "0% 0%" },
  { draw: "0% 100%" },
  { duration: 900,yoyo: true, repeat: 1}
);

var wholeAnimation2 = KUTE.fromTo(
  ".battery2",
  { draw: "0% 0%" },
  { draw: "0% 100%" },
  { duration: 1000,yoyo: true, repeat: 1}
);


var wholeAnimation3 = KUTE.fromTo(
  ".battery3",
  { draw: "0% 0%" },
  { draw: "0% 100%" },
  { duration: 1000,yoyo: true, repeat: 1}
);


var rotation = KUTE.allTo(
  "#bluebar1",
  { svgTransform: { rotate: 360 } },
  { repeat: 1, yoyo: true }
);

var scaling = KUTE.allTo(
  "#bluebar2",
  { svgTransform: { scale: 5 } },
  { repeat: 1, yoyo: true }
);

var translation = KUTE.allTo(
  "#bluebar3",
  { svgTransform: { translate: [150, -50] } },
  { repeat: 1, yoyo: true }
);

var skewing = KUTE.allTo(
  "#bluebar1,#bluebar2,#bluebar3",
  { svgTransform: { skewX: 25 } },
  { repeat: 1, yoyo: true }
);













$('#startbutton1').click(function(event){
  morphA.chain(morphAB);
  morphAB.chain(morphABC);
  morphABC.chain(morphB);
  morphB.chain(morphC);
  // morphC.chain(morphAB);
  morphA.start();

    console.log("run now");
});

$('#startbutton3').click(function(event){
rotation.chain(scaling);
scaling.chain(translation);
translation.chain(skewing);
rotation.start();
    console.log("run also");
});


$('#startbutton2').click(function(event){
	$('.battery').show();    
	setTimeout(function() {
  		$('.battery2').show();}, 1100);
	setTimeout(function() {
  		$('.battery3').show();}, 2100);
    wholeAnimation.chain(wholeAnimation2);
    wholeAnimation2.chain(wholeAnimation3);
        wholeAnimation.start();

    console.log("run");
});