//<!doctype html>
//<html>
//
//  <head>
//    <meta charset="utf-8">
//    <meta http-equiv="X-UA-Compatible" content="chrome=1">
//    <!--Nothing Important Just script references and the like-->
//
//
//
//    <link href="style.css" rel="stylesheet" type="text/css" />
//    <title>6502 assembler/simulator</title>
//    <script src="Visualization.js"></script>
//    <script src="es5-shim.js"></script>
//    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script><!---->
//    <!--Using JQuery breaks the function-->
//
//
//
//
//    <script src="assembler.js"></script>
//    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
//    <!--[if lt IE 9]>
//    
//    <![endif]-->
//
//
//
//  </head>
//
//  <body>
//
//    <div class="widget">
//      <div class="buttons">
//        <input type="button" value="Assemble" class="assembleButton">
//        <input type="button" value="Run" class="runButton" disabled="disabled">
//        <input type="button" value="Reset" class="resetButton" disabled="disabled">
//        <input type="button" value="Hexdump" class="hexdumpButton" disabled="disabled">
//        <input type="button" value="Disassemble" class="disassembleButton" disabled="disabled">
//        <input type="button" value="Notes" class="notesButton">
//      </div>

//gameOver:
//  </textarea>
//
//      <canvas class="screen" width="160" height="160"></canvas>
//
//      <div class="debugger">
//        <input type="checkbox" class="debug" name="debug" disabled="disabled">
//        <label for="debug">Debugger</label>
//        <div class="minidebugger">A=$00 X=$00 Y=$00<br>SP=$ff PC=$0600<br>NV-BDIZC<br>00110000</div>
//        <div class="buttons">
//          <input type="button" value="Step" class="stepButton" disabled="disabled">
//          <input type="button" value="Jump to..." class="gotoButton" disabled="disabled">
//        </div>
//      </div>
//
//      <div class="monitorControls">
//        <label for="monitoring">Monitor</label>
//        <input type="checkbox" class="monitoring" name="monitoring">
//
//        <label for="start">Start: $</label>
//        <input type="text" value="0" class="start" name="start">
//        <label for="length">Length: $</label>
//        <input type="text" value="ff" class="length" name="length">
//      </div>
//
//      <div class="monitor">
//        <pre><code></code></pre>
//      </div>
//      <div class="messages">
//        <pre><code></code></pre>
//      </div>
//
//      <div class="notes" style="display: none">Notes: Memory location $fe contains a new random byte on every instruction. Memory location $ff contains the ascii code of the last key pressed. Memory locations $200 to $5ff map to the screen pixels. Different values will draw different colour
//        pixels. The colours are: $0: Black $1: White $2: Red $3: Cyan $4: Purple $5: Green $6: Blue $7: Yellow $8: Orange $9: Brown $a: Light red $b: Dark grey $c: Grey $d: Light green $e: Light blue $f: Light grey
//      </div>
//       <div id="window"></div>
//      <div id="stack"></div>
//    </div>
//    
//    
//    
//    
//     
//
//    <div style="height:30px;overflow-y:auto;" id="container" class="scrollable">Notes</div>
//
//
//
//    <input type="button" value="VisArray" onclick="console.log(visString);scrollable();" />
//
//    <script src="es5-shim.js"></script>
//    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
//    <script src="assembler.js"></script>
//  </body>
//
//</html>



//.widget {
//  height: 100vh;
//  width: 100vw;
//  display: grid;
//  grid-template-columns: repeat(3, 1fr);
//  grid-auto-rows: minmax(100px, auto);
//  background-color: #1a1a1a;
//  color: white;
//}
//label {
//  display: block;
//  margin-top: 10px;
//}
//input[type="text"]{
//  width: 100%;
//  height: 24px;
//  background-color: black;
//  border: none;
//}
//
//
//input[type="button"] {
//  background-color: #f66;
//  margin-bottom: 10px;
//  padding: 10px 0;
//  border-radius: 2px;
//  border: none;
//  color: white;
//  font-weight: bold;
//  font-size: 16px;
//  transition: transform 0.2s ease-in-out,
//  opacity 0.2s ease-in-out;
//}
//
//
//input[type="button"]:hover {
//  transform: scale(0.97);
//  opacity: .3;
//}
//
//input[type="checkbox"] {
//  -webkit-appearance: none;
//  appearance: none;
//  width: 12px;
//  height: 12px;
//  border-radius: 50%;
//  background-color: gray;
//  position: relative;
//}
//
//input[type="checkbox"]:checked::after {
//  content: "";
//  position: absolute;
//  top: 2px;
//  left: 2px;
//  width: 8px;
//  height: 8px;
//  border-radius: 50%;
//  background-color: #f66;
//}
//* {
//  background-color: #2a2a2a;
//  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//    color: white;
//}
//
//canvas {
//  width: 100%;
//  height: 100%;
//}
//
//body {
//  height: 100vh;
//  width: 100vw;
//  margin: 0;
//}
//.buttons {
//  padding: 10px;
//  display: flex;
//  flex-direction: column;
//  /*margin: 8px 0;*/
//
//
//
//  grid-column: 0 / 1;
//  grid-row: 1;
//}
//
//.start,
//.length {
//  width: 50px;
//}
//
//.widget pre {
//  margin: 0;
//  padding: 0;
//  background: inherit;
//  border: none;
//}
//
//.code {
//  margin: 0 0 6px 0;
//  padding: 6px;
//  border: 1px solid black;
//
//  font-family: monospace;
//  overflow: auto;
//  grid-column: 1 / 2;
//  grid-row: 1;
//}
//
//.screen {
//  grid-column: 1 / 2;
//  grid-row: 2;
//}
//
//textarea {
//  resize: none;
//  width: 97%;
//  height: 96%;
//  font-size: 16px;
//}
//
//.debugger {
//  border: 1px black solid;
//  /*margin-top: 6px;*/
//
//
//
//  padding: 3px;
//  padding-top: 8px;
//  grid-column: 0 / 2;
//  grid-row: 2;
//  text-align: center;
//  font-size: 30px;
//}
//
//.minidebugger {
//  margin: 0;
//  margin-top: 6px;
//  padding: 0;
//  font-family: monospace;
//  font-size: 20px;
//}
//
//.monitorControls {
//  grid-column: 2 / 3;
//  grid-row: 1;
//  /*margin-bottom: 10px;*/
//
//  /*padding: 10px;*/    
//
//
//  
//}
//
//
//
//.monitorControls input {
//  margin-right: 0.5em;
//}
//
//.topMonitor{
//    grid-column: 1 / 3;
//    grid-row: 1;
//}
//
//.disassembly{
//    margin: 2px;
//    grid-column: 1 / 3;
//    grid-row: 2;
//    width: 100%;
//    height: 50%;
//    background-color: #ddd;
//    overflow: auto;
//    font-family: monospace;
//}
//
//.monitor {
//  display : block;
//  /*margin: 10px;*/
//
//
//  padding: 6px;
//  grid-row: 2;
//  grid-column: 2 /  3;
//  border: 1px solid #999;
//  background-color: #ddd;
//  overflow: auto;
//  /*display: none;*/ 
//
//
//}
//
//.messages {
//  grid-column: 1 / 2;
//  grid-row: 3;
//  margin: 0;
//  padding: 6px;
//
//  border: 1px solid #999;
//  background-color: #eee;
//  overflow: auto;
//
//  text-align: left;
//  font-size: 12px;
//  color: #444;
//}
//
//.notes {
//  grid-row: 3;
//  grid-column: 2 /  3;
//  resize: none;
//  width: 100%;
//  height: 100%;
//  font-size: 16px;
//}
//
//.EmptyStackSlots{
//    color: gray;
//}
//
//.FilledStackSlots{
//    color: yellowgreen;
//}
//
//.programCounterLocation{
//    background-color: yellow;
//    color: black;
//}
//
//.stackPointerLocation{
//    background-color: yellow;
//}
//
//.lastStackPointerLocation{
//    color: red;
//}
//
//
///*My extra bits from here*/
//
//
//
//#container {
//    height: 100px; /* or any value */
//
//
//    overflow-y: auto;
//    /*display: none;*/
//
//
//}
//
//.blue {
//  background: blue;
//}
//
//.red {
//  background: red;
//}
//
//.white {
//  background: white;
//}
//

