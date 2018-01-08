
// function that builds a grid in the "container"
function createGrid(x,y,z,vissString) {

  var stringArray = memoryLocationState(visString);

  $("#container").height((z/x)*y);
  $("#container").width(z);
  var stringArrayIndex = 0;
  var col = 0;
    while (col<x) {
      col++;
      var row = 0;
        while (row<y) {
           row++; $("#container").append("<div class='grid'></div>");
        };
    };
  //Individual Changing Grid
    //$(".grid").width(z/x);
   // $(".grid").height(z/y);
  
  $(".grid").width(z/x);
  $(".grid").height((z/x));
};


//returns array with raw values to use for creating a visualization
memoryLocationState(visString){

    var visStringArr = visString.split(" ");
    for(int i = 0;i<visStringArr.length,i++){
        if(visStringArr[i].length>2 || (visStringArr.indexOf("\n") > -1)){
            visStringArr.splice(i,1);
            
        }
    }
    
    return new visStringArr;
}


// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// function creates that new grid
function refreshGrid(x,y,z,visString){
    
    clearGrid();
    createGrid(x,y,z);
  
};

function getVisString(visString){
    
}



//Old Code
/*
 // function that builds a grid in the "container"
function createGrid(x,y,z,visString) {
  $("#container").height(z);
  $("#container").width(z);
  var col = 0;
    while (col<x) {
      col++;
      var row = 0;
        while (row<y) {
           row++; $("#container").append("<div class='grid'></div>");
        };
    };
  //Individual Changing Grid
    $(".grid").width(z/x);
    $(".grid").height(z/y);
  
  $(".grid").width(z/x);
  $(".grid").height(z/y);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// function creates that new grid
function refreshGrid(x,y,z){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(x,y,z,array);
  
};

*/
    

