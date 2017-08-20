// JavaScript Document

// //////////////////////////////////////
// Custom search bar (Vanilla Javascript)
/////////////////////////////////////////

// Declare global variables
var searchInput = document.getElementById("search");

// Functions
function searchList() {
   "use strict";
   var searchFilter = searchInput.value.toLowerCase();
   var searchUL = document.getElementById("searchList");
   var searchItem = searchUL.getElementsByTagName("li");
   
   // Loop through entire gallery, hide elements that don't match search terms
   for (var i = 0; i < searchItem.length; i++) {
      var searchImg = searchItem[i].getElementsByTagName("img")[0];
      var title = searchImg.getAttribute("title");
      var alt = searchImg.getAttribute("alt");
      
      // check if search filter appears in image title or alt attributes
      if (title.toLowerCase().indexOf(searchFilter) > -1 || alt.toLowerCase().indexOf(searchFilter) > -1) {
         searchItem[i].style.display = ""; 
      } else {
         searchItem[i].style.display = "none";
      }
   }
}

// Event handlers
searchInput.addEventListener("keyup", searchList, false);



// //////////////////////////////////////
// Activate Lightcase Plugin
/////////////////////////////////////////

$("a[data-rel^=lightcase]").lightcase();
