function addnumbers(){
    let num1=parseInt(document.getElementById("value1").value);//parseint coverts string txt into num
    let num2=parseInt(document.getElementById("value2").value);
    let ans=document.getElementById("answer");
    ans.value=num1+num2;
}
function subnumbers(firstnum,secnum){
    let num1=parseInt(document.getElementById("value1").value);//parseint coverts string txt into num
    let num2=parseInt(document.getElementById("value2").value);
    let ans=document.getElementById("answer");
    ans.value=num1-num2;
}
function dvdnumbers(){
    let num1=parseInt(document.getElementById("value1").value);//parseint coverts string txt into num
    let num2=parseInt(document.getElementById("value2").value);
    let ans=document.getElementById("answer");
    ans.value=num1/num2;
}
function mlpnumbers(){
    let num1=parseInt(document.getElementById("value1").value);//parseint coverts string txt into num
    let num2=parseInt(document.getElementById("value2").value);
    let ans=document.getElementById("answer");
    ans.value=num1*num2;
}
