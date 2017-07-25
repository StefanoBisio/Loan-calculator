document.getElementById("calculate").onclick = function(){
    
    var P = document.getElementById("principle").value;
    var i = document.getElementById("interest").value/100;
    var t = document.getElementById("time").value;

    document.getElementById("resulth1").innerHTML = "The total amount due will be " + (P*(1+(i/12))**(t*12)).toFixed(2);
    event.preventDefault();
    
    document.getElementById("resulth3").innerHTML = "Monthly interest due: " + (P*(1+(i/12))-P).toFixed(2);
    event.preventDefault();
}