//CANVAS PRACTICE//
var Draw = document.getElementById("ID_Name");
var dtx = Draw.getContext("2d");

//Creating a Gradient//
var grd = dtx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,'orange');
grd.addColorStop(1,'red');

//Filling with gradient
dtx.fillStyle = grd;
dtx.fillRect(0,0,500,250);

//LINEAR GRADIENT PRACTICE
var c = document.getElementById('Linear');
var ctx = c.getContext('2d');

var grd = ctx.createLinearGradient(0,0,400,0);
grd.addColorStop(0, 'black');
grd.addColorStop(1,'white');

ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);

//SWITCH PRACTICE
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    var Color_otherString = " is all right, but not the best!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_otherString;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_otherString;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_otherString;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//GET ELEMENTS BY CLASS NAME//

function practice() {
    var A = document.getElementsByClassName('Click');
    A[1].innerHTML = 'This is the text that will show'; 
}