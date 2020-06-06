// the thing        event type        the code to run
//--------------------------------------------------------------
// button             click             change the color
// input              hits return       get search results
// image              mouseover         display the img caption

const clicker = document.querySelector("#clicker");

clicker.onclick = () => {
  console.log("YOU CLICKED THE CLICKER!!!");
};

clicker.ondblclick = () => {
  console.log("YOU DOUBLE CLICKED THE CLICKER!!!!!!!");
};