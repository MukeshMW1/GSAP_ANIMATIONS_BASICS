// gsap.fromTo(
//   "#page1 .box",
//   {
//     x: -500,
//   },
//   {
//     duration: 4,
//     rotation: 360,
//     x: 100,
//     backgroundColor: "green",
//     borderRadius: "50%",
//     scale: 1.2,

//     // repeat:-1,
//     // yoyo:true
//   }
// );
// gsap.fromTo(
//   "#page2 .box",
//   {
//     x: -500,
//   },
//   {
//     duration: 4,
//     rotation: 360,
//     x: 100,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     scale: 1.2,
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         scroller:"body",
//         scrub:3,
//         markers:true,
//         start:"top 60%",
//         // end:"top 80%"
//     }
//     // repeat:-1,
//     // yoyo:true
//   }
// );

// gsap.fromTo("h1"
//     ,{y:300,opacity:0},{
//        y:10,
//        opacity:1,
//     duration:2,
//     color:"green",
//     stagger:-1,
//     ease:"back.in",

// })

var t1 = gsap.timeline();

t1.fromTo(
  "#box",
  { x: -500 },
  {
    duration: 4,
    rotation: 360,
    x: 100,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: 0.8,
  }
).fromTo(
  "#box1",
  { x: -500 },
  {
    duration: 4,
    rotation: 360,
    x: 100,
    backgroundColor: "green",
    borderRadius: "50%",
    scale: 0.8,
  }
);

var tn = gsap.timeline();

tn.from("h2", {
  y: -10,
  duration: 0.4,
  opacity: 0,
  delay: 0.5,
})
  .from("h4", {
    y: -10,
    duration: 0.4,
    opacity: 0,
    stagger: 0.3,
    ease: "back",
  })
//   .from("h1", {
//     y: 40,
//     duration: 1,
//     opacity: 0,
//     // scale:.2
//   });


// gsap.from('#page2 h1',{
//     opacity:0,
//    duration:2,
//    x:200,
//    scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     start:"top 40%",
//     scrub:1

//    }

// })
// gsap.from('#page2 h2',{
//     opacity:0,
//    duration:2,
//    x:-400,
//    scrollTrigger:{
//     trigger:"#page2 h1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%",
//     end:"top 20%",
//     scrub:1

//    }

// })


// gsap.from("#page2 .box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         markers:true,
//         scroller:"body",
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         pin:true
//     }
    
// })
// scrollTrigger:{
//     trigger:"#page2 .box",
//     scroller:body,
//     markers:true,
//     start:"top 60%"
// }


gsap.to("#page2 h1",{
transform:"translateX(-150%)",
// duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:2,
        pin:true,
        markers:true,
        start:"top 0%",
        end:"top -150%"
    }


})