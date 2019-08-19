$(document).ready(function() {
	var tl = new TimelineMax({onUpdate:updatePercentage});
	var tl2 = new TimelineMax();
	const controller = new ScrollMagic.Controller();
	
	tl.from("blockquote", .5, {x:200, y:500, opacity:0}); //shifts 200 pixels to the right with opacity 0
	tl.from("span", 1, {width:0}, "=-.5");
	//default starts at halfway into "duration:450" animation with "=-.5"
	tl.from('#office', 1, {x:-200, opacity:0}, "=-1"); 
	//default starts at start of "duration:450" animation with "=-1"
	tl.from('#building', 1, {x:200, opacity:0}, "=-.7")
	//default starts at 30% into "duration:450" animation with "=-.7"

	tl2.from("#box", 1, {opacity: 0, scale: 0});
	//lasts for one second with "1" for this one
	tl2.to("#box", .5, {
		left: "20%", 
		scale: 1.3,
		borderColor: "white", 
		borderWidth: 12,
		boxShadow: '1px 1px 0px 0px rgba(0,0,0,.09)'
	});
	//lasts for one second with ".5" for this one

	// tl.fromTo("blockquote", .5, {x:200, y: 500, opacity: 0}, {x:0, y: 0, opacity: 1}); 
	//shifts 200 pixels to the right with opacity 0
	
	const scene = new ScrollMagic.Scene({
		triggerElement: ".sticky", //scene starts when DOM with class "sticky" enters view
		triggerHook: "onCenter", //onEnter// onCenter
		// offset: 100 // start scene after scrolling for 100px
		// duration: "100%"
		duration: 450
	})
		// .setPin(".sticky")
		.setTween(tl)
		.addTo(controller);

		const scene2 = new ScrollMagic.Scene({
			triggerElement: "blockquote"
			//there are no "triggerHook" or "duration" which means the animation triggers once the triggerElement is detected 

			//if there is no triggerHook property the default is set to "onCenter"
		})
		.setTween(tl2)
		.addTo(controller);
	
	function updatePercentage() {
		tl.progress();
		console.log(tl.progress()); //console logs the progress of the animation
	}	
})

