var css =    document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body=   document.getElementById("gradient");
var random= document.querySelector("button");

css.textContent= "linear-gradient(to right, "
+color1.value 
+", " 
+color2.value
+ ")";

function randomise(){
    randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function changecolor(){
    color1.value=randomise();
    color2.value=randomise();
    body.style.background = "linear-gradient(to right, "
    +color1.value 
    +", " 
    +color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

random.addEventListener("click", changecolor);


color1.addEventListener("input", changecolor);

color2.addEventListener("input",  changecolor);