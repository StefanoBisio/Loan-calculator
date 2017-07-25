document.getElementById("calculate").onclick = function(){
    
    /* on click get the values of the text fields*/
    /* make the interest a percentage */
    var P = document.getElementById("principle").value;
    var i = document.getElementById("interest").value/100;
    var t = document.getElementById("time").value;
    
    document.getElementById("resulth1").innerHTML = "The total amount due will be: " + (P*(1+(i/12))**(t*12)).toFixed(2);
    /* Preventdefault() to avoid result to be refreshed and cancelled */
    event.preventDefault();
    
    document.getElementById("resulth3").innerHTML = "Monthly interest due: " + (P*(1+(i/12))-P).toFixed(2);
    event.preventDefault();
}