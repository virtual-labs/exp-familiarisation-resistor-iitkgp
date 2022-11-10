/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//------------------------------------------------- Resistor 1  ---------------------------------------//
//window.onload = function () {


function resfn(){
    var x=document.getElementById("r1").value;
    var y=document.getElementById("res-select");
  //  document.getElementById("res-msg").innerHTML=y;
    var w=y.options[y.selectedIndex].value;
    var z=document.getElementById("res-tol").value;
 //   document.getElementById("res-msg").innerHTML=y;
    
    if(x==""){
       document.getElementById("res-msg").innerHTML = "Enter The Resistance :"; 
     //  document.writeln("<p>Enter The Resistance :</p>");
    }else if(x=="47"){
       document.getElementById("res-msg").innerHTML = "Correct Resistance  Value"; 
      //document.writeln("<p>Correct Resistance  Value</p>");
    }
    else if (x!= "47") {
       document.getElementById("res-msg").innerHTML ="Incorrect resistance value";
        //document.writeln("<p>Incorrect resistance value</p>");
    }
     if (w == 0)
    {
        document.getElementById("res-msgg").innerHTML ="Please select a unit :";
        //document.writeln("<p>Please select a unit:</p>");
    }
    else if (w == "2" ) {
        document.getElementById("res-msgg").innerHTML ="Correct  Unit Value";
        //document.writeln("<p>Correct  Unit Value</p>");
    }
    else if (w != "2") {
         document.getElementById("res-msgg").innerHTML ="Incorrect Unit";
          //document.writeln("<p>Incorrect Unit</p>");
    }

   if (z == "") {

        document.getElementById("res-msggg").innerHTML = "Enter the tolerance :"; 
        //document.writeln("<p>Enter the tolerance :</p>");
    }
    else if (z == "5") {
        document.getElementById("res-msggg").innerHTML = "Correct Tolerance Value";
       // document.writeln("<p>Correct Tolerance Value</p>");
    }
    else if (z != "5") {
        document.getElementById("res-msggg").innerHTML = "Incorrect Tolerance value";
        //document.writeln("<p>Incorrect Tolerance value</p>");
    }
}

//------------------------------------------------- Resistor 2  ---------------------------------------//
function resfnn(){
    var x=document.getElementById("r2").value;
    var y=document.getElementById("res-select2");
  //  document.getElementById("res-msg2").innerHTML=y;
    var w=y.options[y.selectedIndex].value;
    var z=document.getElementById("res-tol2").value;
 //   document.getElementById("res-msg2").innerHTML=y;
    
    if(x==""){
      document.getElementById("res-msg2").innerHTML = "Enter The Resistance :"; 
       // document.writeln("Enter The Resistance :");
    }else if(x=="5.2"){
      document.getElementById("res-msg2").innerHTML = "Correct Resistance Value"; 
      // document.writeln("Correct Resistance Value");
    }
    else if (x!= "5.2") {
        document.getElementById("res-msg2").innerHTML ="Incorrect resistance value";
       // document.writeln("Incorrect resistance value");
    }
     if (w == 0)
    {
        document.getElementById("res-msgg2").innerHTML ="Please select a unit :";
        //document.writeln("Please select a unit:");
    }
    else if (w == "1") {
       document.getElementById("res-msgg2").innerHTML ="Correct Unit";
        // document.writeln("Correct Unit Value");
    }
    else if (w != "1") {
         document.getElementById("res-msgg2").innerHTML ="Incorrect Unit";
         // document.writeln("Incorrect Unit");
    }

   if (z == "") {

        document.getElementById("res-msggg2").innerHTML = "Enter the tolerance :"; 
        //document.writeln("Enter the tolerance :");
    }
    else if (z == "10") {
        document.getElementById("res-msggg2").innerHTML = "Correct Tolerance Value";
       // document.writeln("Correct Tolerance Value");
    }
    else if (z != "10") {
       document.getElementById("res-msggg2").innerHTML = "Incorrect Tolerance value";
       //  document.writeln("Incorrect Tolerance value");
    }
}

//------------------------------------------------- Resistor 3  ---------------------------------------//
function resfun(){
    var x=document.getElementById("r3").value;
    var y=document.getElementById("res-select3");
  //  document.getElementById("res-msg3").innerHTML=y;
    var w=y.options[y.selectedIndex].value;
    var z=document.getElementById("res-tol3").value;
 //   document.getElementById("res-msg3").innerHTML=y;
    
    if(x==""){
       document.getElementById("res-msg3").innerHTML = "Enter The Resistance :"; 
      // document.writeln("Enter The Resistance :");
    }else if(x=="97"){
      document.getElementById("res-msg3").innerHTML = "Correct Resistance Value"; 
      // document.writeln("Correct Resistance Value");
    }
    else if (x!= "97") {
       document.getElementById("res-msg3").innerHTML ="Incorrect resistance value";
         //document.writeln("Incorrect resistance value");
    }
     if (w == 0)
    {
        document.getElementById("res-msgg3").innerHTML ="Please select a unit :";
        //document.writeln("Please select a unit");
    }
    else if (w == "1") {
        document.getElementById("res-msgg3").innerHTML ="Correct Unit";
        //document.writeln("Correct  Unit Value");
    }
    else if (w != "1") {
         document.getElementById("res-msgg3").innerHTML ="Incorrect Unit";
         // document.writeln("Incorrect Unit");
    }

   if (z == "") {

        document.getElementById("res-msggg3").innerHTML = "Enter the tolerance :"; 
        //document.writeln("Enter the tolerance :");
    }
    else if (z == "20") {
       document.getElementById("res-msggg3").innerHTML = "Correct  Tolerance Value";
        // document.writeln("Correct  Tolerance Value");
    }
    else if (z != "20") {
        document.getElementById("res-msggg3").innerHTML = "Incorrect Tolerance value";
       // document.writeln("Incorrect Tolerance value");
    }
}
//------------------------------------------------- Resistor 4  ---------------------------------------//
function resfunc(){
    var x=document.getElementById("r4").value;
    var y=document.getElementById("res-select4");
  //  document.getElementById("res-msg4").innerHTML=y;
    var w=y.options[y.selectedIndex].value;
    var z=document.getElementById("res-tol4").value;
 //   document.getElementById("res-msg4").innerHTML=y;
    
    if(x==""){
       document.getElementById("res-msg4").innerHTML = "Enter The Resistance :"; 
      // document.writeln("Enter The Resistance :");
    }else if(x=="3.3"){
       document.getElementById("res-msg4").innerHTML = "Correct Resistance Value"; 
     // document.writeln("Correct Resistance Value");
    }
    else if (x!= "3.3") {
        document.getElementById("res-msg4").innerHTML ="Incorrect resistance value";
        //document.writeln("Incorrect resistance value");
    }
     if (w == 0)
    {
        document.getElementById("res-msgg4").innerHTML ="Please select a unit :";
       // document.writeln("Please select a unit");
    }
    else if (w == "2") {
        document.getElementById("res-msgg4").innerHTML ="Correct Unit";
       // document.writeln("Correct Unit Value");
    }
    else if (w != "2") {
         document.getElementById("res-msgg4").innerHTML ="Incorrect Unit";
         // document.writeln("Incorrect Unit");
    }

   if (z == "") {

        document.getElementById("res-msggg4").innerHTML = "Enter the tolerance :"; 
        //document.writeln("Enter the tolerance :");
    }
    else if (z == "0.1") {
        document.getElementById("res-msggg4").innerHTML = "Correct Tolerance Value";
       // document.writeln("Correct Tolerance Value");
    }
    else if (z != "0.1") {
        document.getElementById("res-msggg4").innerHTML = "Incorrect Tolerance value";
        //document.writeln("Incorrect Tolerance value");
    }
}
//------------------------------------------------- Resistor 5  ---------------------------------------//
function resfunct(){
    var x=document.getElementById("r5").value;
    var y=document.getElementById("res-select5");
  //  document.getElementById("res-msg5").innerHTML=y;
    var w=y.options[y.selectedIndex].value;
    var z=document.getElementById("res-tol5").value;
 //   document.getElementById("res-msg5").innerHTML=y;
    
    if(x==""){
       document.getElementById("res-msg5").innerHTML = "Enter The Resistance :"; 
       //document.writeln("Enter The Resistance :");
    }else if(x=="1.58"){
       document.getElementById("res-msg5").innerHTML = "Correct Resistance Value"; 
      //document.writeln("Correct Resistance Value");
    }
    else if (x!= "1.58") {
        document.getElementById("res-msg5").innerHTML ="Incorrect resistance value";
        //document.writeln("Incorrect resistance value");
    }
     if (w == 0)
    {
        document.getElementById("res-msgg5").innerHTML ="Please select a unit :";
        //document.writeln("Please select a unit");
    }
    else if (w == "1") {
        document.getElementById("res-msgg5").innerHTML ="Correct Unit";
        //document.writeln("Correct Unit ");
    }
    else if (w != "1") {
         document.getElementById("res-msgg5").innerHTML ="Incorrect Unit";
          //document.writeln("Incorrect Unit");
    }

   if (z == "") {

        document.getElementById("res-msggg5").innerHTML = "Enter the tolerance :"; 
       // document.writeln("Enter the tolerance :");
    }
    else if (z == "2") {
       document.getElementById("res-msggg5").innerHTML = "Correct Tolerance Value";
       // document.writeln("Correct Tolerance Value");
    }
    else if (z != "2") {
       document.getElementById("res-msggg5").innerHTML = "Incorrect Tolerance value";
       // document.writeln("Incorrect Tolerance value");
    }
}
//------------------------------------------------- Resistor 6  ---------------------------------------//
function resfunt(){
    var x=document.getElementById("r6").value;
    var y=document.getElementById("res-select6");
  //  document.getElementById("res-msg6").innerHTML=y;
    var w=y.options[y.selectedIndex].value;
    var z=document.getElementById("res-tol6").value;
 //   document.getElementById("res-msg6").innerHTML=y;
    
    if(x==""){
       document.getElementById("res-msg6").innerHTML = "Enter The Resistance :"; 
       //document.writeln("Enter The Resistance :");
    }else if(x=="6.15"){
       document.getElementById("res-msg6").innerHTML = "Correct Resistance Value"; 
     // document.writeln("Correct Resistance Value");
    }
    else if (x!= "6.15") {
        document.getElementById("res-msg6").innerHTML ="Incorrect resistance value";
       // document.writeln("Incorrect resistance value");
    }
     if (w == 0)
    {
        document.getElementById("res-msgg6").innerHTML ="Please select a unit :";
        //document.writeln("Please select a unit");
    }
    else if (w == "1") {
        document.getElementById("res-msgg6").innerHTML ="Correct Unit ";
        //document.writeln("Correct Unit ");
    }
    else if (w != "1") {
         document.getElementById("res-msgg6").innerHTML ="Incorrect Unit";
         // document.writeln("Incorrect Unit");
    }

   if (z == "") {

        document.getElementById("res-msggg6").innerHTML = "Enter the tolerance :"; 
       // document.writeln("Enter the tolerance :");
    }
    else if (z == "0.25") {
        document.getElementById("res-msggg6").innerHTML = "Correct Tolerance Value";
       // document.writeln("Correct Tolerance Value");
    }
    else if (z != "0.25") {
        document.getElementById("res-msggg6").innerHTML = "Incorrect Tolerance value";
        //document.writeln("Incorrect Tolerance value");
    }
}

//};*/