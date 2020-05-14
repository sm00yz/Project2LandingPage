# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## build a dynamic navigation 
-I started by checking the class names associated with the tags in index.html. 
-I created global variables that hold nav ul element then by using for loop I created the <li> and <a> 


## Add class 'active' to the section when near top of viewpor
 -to do this ad added in HTML "VP" class which is a short term for the viewport. Then I decided to use the IntersectionObserver class to observe the sections. if the 75% of the section appears in the viewport, I added  "your-active-class" to the section using classlist and remove it when the section is invisible. Meanwhile, I created for-loop to go through nav items and added an "active" class to the element whenever the associated section is in the viewport. 

 ## Scroll to anchor ID using scrollTO event
 -I created global variables to hold the four sections then I added an event listener to listen to the user click and scroll to the top of each section has been clicked. 

 ## Make sections collapsible
   -to make sections collapse, I added a button to each section on the index page which contains the subheading. 
   -then using js I make all the section displayed as a block 
   -using for-loop I went through all the sections and added an event listener to listen to the click when the user click the button, it will change the section display to its opposite display value. 



