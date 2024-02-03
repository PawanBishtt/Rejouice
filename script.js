
function cursormove() {
    var page1 = document.querySelector('#page1');
    var cursor = document.querySelector('#cursor');

    page1.addEventListener('mousemove', function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    })

    page1.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })
    })
}
cursormove();

function cursormove2() {
    var page5 = document.querySelector('#page5');
    var cursor2 = document.querySelector('#cursor2');

    page5.addEventListener('mousemove', function (detss) {
        gsap.to(cursor2, {
            x: detss.x,
            y: detss.y
        })
    })

    page5.addEventListener('mouseenter', function () {
        gsap.to(cursor2, {
            scale: 1,
            opacity: 1,
        })
    })

    page5.addEventListener('mouseleave', function () {
        gsap.to(cursor2, {
            scale: 0,
            opacity: 0,
        })
    })
}
cursormove2();

function slider() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            disableOnInteraction: true,
        },
        speed: 30000,
    });
}
slider();

var tl = gsap.timeline()
tl.from('#loader h4', {
    x: 100,
    opacity: 0,
    duration: 1.3,
    stagger: 0.1,
    delay: 1,
})
tl.to('#loader h4', {
    x: -70,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
tl.to('#loader', {
    opacity: 0,
})
tl.from('#page1-heading span', {
    y: 500,
    stagger: 0.1,
    duration: 1,
    delay: -0.5,
})
tl.to('#loader', {
    display: 'none',
})



// lenis
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


