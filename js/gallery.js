/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
     var alt = previewPic.getAttribute("alt");
     var src = previewPic.getAttribute("src");
     document.getElementById('image').style.backgroundImage = "url('" + src + "')";
     document.getElementById('image').innerHTML = alt;
       }
   
function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";
       }
function tab(){
   var ms = document.querySelectorAll(".preview");
   for(i=0; i <ms.length; i++){
      tabIndex = i;
      ms[i].setAttribute("tabindex", tabIndex);
   }
}
function changeBorder(element){
   element.setAttribute("style", "border: 5px dotted blue");      
 }
 function chan(element){
   element.setAttribute("style", "background-color: blue");

 }
 function changeWidth(element){
   element.setAttribute("style", "width: 50%");
 }
