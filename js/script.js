
 var bookmarkNameInput=document.getElementById("BookmarkName")
 var siteUrlInput=document.getElementById("siteUrl")
 

 var bookmarkList=[];


  if(localStorage.getItem("bookmark-box") !== null){
    bookmarkList=JSON.parse(localStorage.getItem("bookmark-box"))
    displayBookmark()
  }
  
  
 
  // if(bookmarkname !== undefined){}
 

  // if(bookmarkNameInput !== undefined  && siteUrlInput == URL){
  function addBookmark(){

  var bookmark={
  bookmarkname:bookmarkNameInput.value,
  siteUrl:siteUrlInput.value,
  }



 

 
bookmarkList.push(bookmark)
localStorage.setItem("bookmark-box", JSON.stringify(bookmarkList))
displayBookmark()
clearForm()

 }
// }
// else{
// alert("Site Name or Url is not valid")
// }

function clearForm(){
  bookmarkNameInput.value = null;
  siteUrlInput.value = null;
}


function displayBookmark() {

var display=""
for (var i = 0; i < bookmarkList.length; i++) {
 display +=`
 <tr>
  <td>${i+1}</td>
  <td>${ bookmarkList [i] .bookmarkname }</td>
  <td>
  <button class="btn   visit"><i class="fa-regular fa-eye px-2 "></i>Visit</button>
 </td>
  <td>
   <button onclick="deleteitem(${i})" class="btn btn-danger text-center"><i class="fa-solid fa-trash-can px-1"></i>Delete</button>
  </td>
 </tr>`;
  
}

document.getElementById("display").innerHTML=display;
}



function deleteitem( index) {
  bookmarkList.splice( index, 1)
  localStorage.setItem("bookmark-box", JSON.stringify(bookmarkList))

  displayBookmark()
  console.log(bookmarkList)
}