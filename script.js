
gsap.from(".shopAndSave h1"  , {
      y:30,
      opacity:0,
      delay:0.5,
      duration:0.9,
      stagger:0.4
})

gsap.from(".left-writ-tex h3" , {
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.4
})

gsap.from(".studentEssentail h4" , {
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.4
})


 var loader = document.getElementById("preloder");

 window.addEventListener("load",function() {
       loader.style.display = "none";
 })
 
