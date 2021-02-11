//REFERENCES OF CODE I HAVE USED IN MY WEBSITE

//The map image
//I made this image using google earth:<br> [Online]. 
//Available: https://www.google.com/maps/@4.847996,17.163444,8475104m/data=!3m1!1e3  [Accessed: 10-12-2017]

//I used this JQuery example to make my "dialogue box" to put in the interesting facts about the countries:
//'JQuery user interface', [Source code].
//Available: https://jqueryui.com/dialog/#default [Accessed: 20-12-2017]

//I used this example for my gallery slideshow:
//'How TO -Slideshow', [Source code]. 
//Available: https://www.w3schools.com/howto/howto_js_slideshow.asp [Accessed:20-12-2017]

//This is the link to the JQuery.rwdImageMaps website for the technique I used for the coordinates on my map in my index.html to adjust themselves according to the screen size. I downloaded the folders and plug-in to put in my work:
//Stow.Matt, 'jQuery RWD Image Maps' (commit afc88d0), 18-Oct-2016. [Source code].
//Available: https://github.com/stowball/jQuery-rwdImageMaps [Accessed:15-12-2017]



//Code for my gallery slideshow

var slideIndex = 1; //giving the first image an index 1 
showSlides(slideIndex);

// incrementing through the slideshow
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// showing the current slide(image)
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

//the whole slides(images) function
function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  {
      slideIndex = 1
  }    
  if (n < 1) 
  {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//Code for the coordinates on my map.
//the onclick event is handled by javascript
$(document).ready(function(e)
{
    $('img[usemap]').rwdImageMaps();
    
    $('area').on('click', function()
   {
        alert($(this).attr('alt') + 'clicked');
   });
    
});



