
// function that builds a grid in the "container"
var width;
var length;
var pixelSize;

function createGrid(x,y,z,vissString) {
    width = x;
    length = y;
    pixelSize = z;

  var stringArray = memoryLocationState(visString);

  $("#container").height((z/x)*y);
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
    //$(".grid").width(z/x);
   // $(".grid").height(z/y);
  
  $(".grid").width(z/x);
  $(".grid").height(z/x);
};

function memoryLocationState(visString){
    
    
    //return new Array[];
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


function scrollable(){
    document.getElementById("container").style.overflowY = "scroll";
    document.getElementById("container").style.height = "100px";
    document.getElementById("container").style.width = "220px";
}

var changeColor = function(){
    
}

var myfunc = function(){
    alert(this.name);
     $(this).css("background-color", "red");
};

var obj_a = {
    name:  "FOO"
};

var obj_b = {
    name:  "BAR!!"
};
Now you can call:

myfunc.call(obj_a);


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
    

