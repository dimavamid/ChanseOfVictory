const btn = document.querySelector('button');


function chanse() {
    
    var p1 = document.getElementById('power1').value;
    var p2 = document.getElementById('power2').value;
    p1 = parseInt (p1);
    p2 = parseInt (p2);
    var ch1 = (p1/(p1+p2))*100;
    var ch2 = 100-ch1;
    

    document.getElementById('chanse1').innerHTML = ch2;
    document.getElementById('chanse2').innerHTML = ch2;
    
}
btn.onclick = chanse;
