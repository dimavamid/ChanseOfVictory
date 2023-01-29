const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');




function chanse() {
    var p1 = document.getElementById('power1').value;
    var p2 = document.getElementById('power2').value;
    p1 = parseFloat (p1);
    p2 = parseFloat (p2);
    
    var ch1 = (p1/(p1+p2))*100;
    var ch2 = 100-ch1;
    ch1 = ch1.toFixed(2);
    ch2 = ch2.toFixed(2);
    document.getElementById('chanse1').innerHTML = ch1;
    document.getElementById('chanse2').innerHTML = ch2;
    
}
btn1.onclick = chanse;

function match() {
    var pow1 = document.getElementById('power1').value;
    var pow2 = document.getElementById('power2').value;
    powran1 = parseFloat (Math.random()*pow1);
    powran2 = parseFloat (Math.random()*pow2);
    var res=1;
        
    if (powran1>powran2) 
    {res=1;}
     else{res=2;}        
   
    document.getElementById('result').innerHTML = res;
    
}
btn2.onclick = match;