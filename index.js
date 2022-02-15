


var countA = 0;
var countB = 0;
var countC = 0;


function changeColor(a, b, c, x) {
    let A = document.getElementById(`${a}`);
    A.style.backgroundColor = 'chartreuse';
    A.style.border = '2px solid green';
    A.style.color = 'black';
    A.innerHTML = 'Checked';
    let B = document.getElementById(`${b}`);
    let C = document.getElementById(`${c}`);
    B.setAttribute('disabled', 'disabled');
    C.setAttribute('disabled', 'disabled');
    A.setAttribute('disabled', 'disabled');


    count(x);

}

function count(X) {
    if (X == 'A') countA++;
    else if (X == 'B') countB++;
    else countC++;
    // alert("A: " +countA + "B: "+countB + "C: "+countC);
    
}

function showRes(){
    if(countA>countB && countA>countC){
        let A = document.getElementById('vata-dominance');
        A.style.display = 'block';
    }
    else if(countB>countA && countB>countC){
        let B = document.getElementById('pitta-dominance');
        B.style.display = 'block';
    }
    else{
        let C = document.getElementById('kapha-dominance');
        C.style.display = 'block';
    }
}


