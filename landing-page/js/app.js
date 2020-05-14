
/**
 * Define Global Variables
 * 
*/
var navlist=document.getElementById("navbar__list");
var section1= document.getElementById("section1");
var section2= document.getElementById("section2");
var section3= document.getElementById("section3");
var section4= document.getElementById("section4");
var navitems=document.getElementsByClassName(".navitem");
var navitemslinks=document.getElementsByClassName("menu__link");
/**
 * End Global Variables
*/

// build the nav
//create 4 nav itemes with their hyperlinks 
for(var i=0; i<4; i++){
    var nav_li= document.createElement("li");
    var navlink= document.createElement("a");
    navlink.innerHTML="Section "+(i+1);
    navlink.setAttribute("class", "menu__link hover");
   // navlink.setAttribute("href", "#section"+(i+1));
    nav_li.appendChild(navlink);
    nav_li.setAttribute("class", "navitem");
    navlist.appendChild(nav_li);
}

/** 
 *Add class 'active' to section when near top of viewpor
 *finding if element is viewable using intersection observer 
 *getting elements that have class vp
*/
var elements= document.querySelectorAll(".vp");

//define object from the node intersectionObserver
var obs= new IntersectionObserver((enteries)=>{
    
   enteries.forEach(entery => {
        if(entery.isIntersecting){
            entery.target.classList.add("your-active-class");
        }else {
            entery.target.classList.remove("your-active-class");
        }
      //make the nav item active 
        for(var i=0; i<navitemslinks.length; i++)
        {
             if(elements[i].classList.contains("your-active-class")){
                 navitemslinks[i].classList.add("active");
                 navitemslinks[i].classList.remove("hover");
             }else { navitemslinks[i].classList.remove("active");
             navitemslinks[i].classList.remove("hover");

         }
     }
    });
    }, {threshold: 0.75});


    //sending elements with vp class to the observer
    elements.forEach(element => {
        obs.observe(element);
    });

 
    

// Scroll to anchor ID using scrollTO event

navitemslinks[0].addEventListener('click', e =>{ 
    section1.style.display="block";
    window.scrollTo(0,section1.offsetTop-250);
});
navitemslinks[1].addEventListener('click', e =>{
    section2.style.display="block";
    window.scrollTo(0,section2.offsetTop-250);
});
navitemslinks[2].addEventListener('click', e =>{
    section3.style.display="block";
    window.scrollTo(0,(section3.offsetTop-250));
});
navitemslinks[3].addEventListener('click', e =>{ 
    section4.style.display="block";
    window.scrollTo(0,section4.offsetTop-250);
});

//make the sections collapse 

var section = document.getElementsByClassName("vp");
  for (var i = 0; i < section.length; i++) {
    section[i].style.display = "block";
  }  //for

  var coll = document.getElementsByClassName("coll");
  for (var i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function (){
    if(this.nextElementSibling.style.display==="none"){
      this.nextElementSibling.style.display="block";

    }else {
      this.nextElementSibling.style.display="none";
    }
    });
  }//for
