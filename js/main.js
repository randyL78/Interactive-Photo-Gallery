/* jshint esversion: 6 */
// JavaScript Document

// //////////////////////////////////////
// Custom search bar (Vanilla Javascript)
/////////////////////////////////////////

// Declare global variables
const searchInput = document.getElementById("search");

// Event handlers
searchInput.addEventListener("keyup", () => {
   "use strict";
   const searchFilter = searchInput.value.toLowerCase();
   const searchUL = document.getElementById("searchList");
   const searchItem = searchUL.getElementsByTagName("li");
	
   // Loop through entire gallery, hide elements that don't match search terms
   for (let i = 0; i < searchItem.length; i++) {
      const searchImg = searchItem[i].getElementsByTagName("img")[0];
      const title = searchImg.getAttribute("title");
      const alt = searchImg.getAttribute("alt");
      
      // check if search filter appears in image title or alt attributes
      if (title.toLowerCase().indexOf(searchFilter) > -1 || alt.toLowerCase().indexOf(searchFilter) > -1) {
         searchItem[i].style.display = ""; 
      } else {
         searchItem[i].style.display = "none";
      }
   }	
});



// //////////////////////////////////////
// Activate Lightcase Plugin
/////////////////////////////////////////

$("a[data-rel^=lightcase]").lightcase();
