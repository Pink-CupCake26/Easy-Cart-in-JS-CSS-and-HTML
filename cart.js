
lipgloss=150;
pallet=500;
keychain=100;
q1=0;
q2=0;
q3=0;
total=0;

function q1plus() {
   q1=q1+1;
   document.getElementById("text1").value=q1;
   total=total + lipgloss;
   document.getElementById("text4").value=total;
}

function q2plus() {
    q2=q2+1;
    document.getElementById("text2").value=q2;
    total=total + pallet;
    document.getElementById("text4").value=total;
 }

 function q3plus() {
    q3=q3+1;
    document.getElementById("text3").value=q3;
    total=total + keychain;
    document.getElementById("text4").value=total;
 }

 function q1minus() {
    if(q1!=0){
       q1=q1-1;
       document.getElementById("text1").value=q1;
       total=total - lipgloss;
       document.getElementById("text4").value=total;
    }
 }

 function q2minus() {
    if(q2!=0){
        q2=q2-1;
        document.getElementById("text2").value=q2;
        total=total - pallet;
        document.getElementById("text4").value=total;
    }
 }

 function q3minus() {
    if(q3!=0){
        q3=q3-1;
        document.getElementById("text3").value=q3;
        total=total - keychain;
        document.getElementById("text4").value=total;
    }
 }

 function remove1(){
   document.getElementById("div1").remove();
 }
 function remove2(){
   document.getElementById("div2").remove();
 }
 function remove3(){
   document.getElementById("div3").remove();
 }
   
