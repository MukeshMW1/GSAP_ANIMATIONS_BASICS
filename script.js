//  gsap.fromTo("#box",{x:-500},{duration:4,rotation:360,x:100,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     // scale:1.2
//     // repeat:-1,
//     // yoyo:true
// })


gsap.fromTo("h1"
    ,{y:300,opacity:0},{
       y:10,
       opacity:1,
    duration:2,
    color:"green",
    stagger:-1,
    ease:"back.in",
   

})

var t1  =gsap.timeline()


t1.fromTo("#box",{x:-500},{duration:4,rotation:360,x:100,     backgroundColor:"green",
borderRadius:"50%",
scale:.8}).fromTo("#box1",{x:-500},{duration:4,rotation:360,x:100,     backgroundColor:"green",
    borderRadius:"50%",
    scale:.8})

