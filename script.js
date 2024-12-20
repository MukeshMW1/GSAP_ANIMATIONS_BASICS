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

// var t1 = gsap.timeline();

// t1.fromTo(
//   "#box",
//   { x: -500 },
//   {
//     duration: 4,
//     rotation: 360,
//     x: 100,
//     backgroundColor: "green",
//     borderRadius: "50%",
//     scale: 0.8,
//   }
// ).fromTo(
//   "#box1",
//   { x: -500 },
//   {
//     duration: 4,
//     rotation: 360,
//     x: 100,
//     backgroundColor: "green",
//     borderRadius: "50%",
//     scale: 0.8,
//   }
// );

var tn = gsap.timeline();

tn.from("h2", {
  y: -10,
  duration: 0.4,
  opacity: 0,
  delay: 0.5,
})
  // .from("h4", {
  //   y: -10,
  //   duration: 0.4,
  //   opacity: 0,
  //   stagger: 0.3,
  //   ease: "back",
  // })
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



var initialPath = `M 10 100 Q 250 100 800 100`
var finalPath = `M 10 100 Q 250 100 800 100`


var string  = document.querySelector("#string")
var svg  = document.querySelector("#svg")

string.addEventListener("mousemove",function(dets)
{
  cursor.innerHTML = "Guitar"
  gsap.to(cursor,{
    scale:2,
  
  })
initialPath =`M 10 100 Q ${dets.x} ${dets.y-120} 900 100`
console.log(dets)
gsap.to('svg path',{
  attr:{d:initialPath},
  duration:.5,
  ease:"power3.out"

})
})


string.addEventListener('mouseleave',function()
{
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1,
  
  })
  gsap.to("svg path",{

    attr:{d:finalPath},
    duration:1,
    ease:"elastic.out(1,0.2)"

  }
  )
})



var cursor = document.querySelector("#cursor")
var body =document.querySelector('body')



body.addEventListener('mousemove',(event)=>{
  // console.log(event)
  gsap.to(cursor,{
    x:event.x+20,
    y:event.y-20,
    
  })
})


var  image =document.querySelector('#page1 #image')


gsap.from("#page1 #image img",
  {
    opacity:0,
    y:200,
    duration:2,
    // scrollTrigger:{
    //   trigger:image,
    //   scrub:1,
    //   markers:true,
    //   start:"top 60%",
    //   end:"top 20%"
    // }
  }
)
image.addEventListener('mouseenter',()=>{{
  // console.log("Mousee eneterd inside the image")
cursor.innerHTML = "Show More"

gsap.to(cursor,{
  scale:2,

})
gsap.to("#page1 #image img",
  {
    scale:.9
  }
)


}})
var  image =document.querySelector('#page1 #image')

image.addEventListener('mouseleave',()=>{{
  // console.log("Mousee eneterd inside the image")
cursor.innerHTML = ""
gsap.to(cursor,{
  scale:1,

})
gsap.to("#page1 #image img",
  {
    scale:1
  }
)



}})


var menu = document.querySelector(".nav i")
var cross = document.querySelector("#sidebar i")

var tk = gsap.timeline()

tk.to('#sidebar',{

  right:0,
  duration:.5,
  zIndex:12

})

tk.to(cursor,{
  zIndex:13
}
)
tk.from("#sidebar h4",{
  opacity:0,
  x:100,
  stagger:.4
})

tk.from(cross,{
  opacity:0
})

tk.pause();

menu.addEventListener("click",()=>{

  tk.play();
  console.log("menu")
  
}
)
cross.addEventListener("click",()=>{

  tk.reverse();
  console.log("cross")
  
}
)

const splittingText = ()=>{

  var p1h1 = document.querySelector("#page1 h1");
  

var h1Text = p1h1.textContent;
// console.log(h1Text)

var splittedText= h1Text.split("");
console.log(splittedText);
var clutter = ""

splittedText.forEach((elem,index)=>{
  if( index <= splittedText.length/2)
clutter += `<span class="a">${elem}</span>`
  else{
    clutter += `<span class="b">${elem}</span>`
  }
})
p1h1.innerHTML =clutter
}


splittingText();


gsap.from("h1 .a",
  {
opacity:0,
y:100,
duration:.5,
stagger:.15
  }
)

gsap.from("h1 .b",
  {
opacity:0,
y:100,
duration:.5,
stagger:-.15
  }
)