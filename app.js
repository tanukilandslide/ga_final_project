const flightPath = {


values: [
    // {x: 0, y: 0},
    {x: window.innerWidth * 4, y: 0}
    ]
}

const flightPathReverse = {
    
    
    values: [
        // {x: 0, y: 0},
        {x: -window.innerWidth * 2, y: 0}
        
        ]
    }

const tween = new TimelineLite();
const tweenTwo = new TimelineLite();

tween.add(
    TweenLite.to('.it-shouldnt', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
    
);

tweenTwo.add(
    TweenLite.to('.to-hurt', 1, {
        bezier: flightPathReverse,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);

const sceneTwo = new ScrollMagic.Scene({
    triggerElement: '.animation-two',
    duration: 1000,
    triggerHook: 0
})
.setTween(tweenTwo)
.addIndicators()
.setPin('.animation-two')
.addTo(controller);

