const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");
const b6=document.querySelector("#b6");
const b7=document.querySelector("#b7");
const b8=document.querySelector("#b8");
const b9=document.querySelector("#b9");
const ac=document.querySelector("#AC");
const c=document.querySelector("#C");
const bprc=document.querySelector("#bprc");
const bdev=document.querySelector("#bdev");
const bp=document.querySelector("#bp");
const bm=document.querySelector("#bm");
const bx=document.querySelector("#bx");
const be=document.querySelector(".be");
const b0=document.querySelector("#b0");
const bd=document.querySelector("#bd");

const finalr=document.querySelector("#finalr")
const res=document.querySelector("#res");
let final="";
function btnNumber(nmb)
{
    if(res.textContent.charAt(res.textContent.length-1)!=="=")
    {
        if(res.textContent.length>=18)
        {
            res.style.fontSize="15px";
        }
        else{
            res.style.fontSize="30px";
        }
        if(res.textContent.length==36)
        {
            
        }
        else if(res.textContent==0)
        {
            res.textContent=nmb;
            final+=nmb;
        }
        else{
        res.textContent+=nmb;
        final+=nmb;
        }
    }
}
b1.addEventListener("click",function() {btnNumber("1");});
b2.addEventListener("click",function() {btnNumber("2");});
b3.addEventListener("click",function() {btnNumber("3");});
b4.addEventListener("click",function() {btnNumber("4");});
b5.addEventListener("click",function() {btnNumber("5");});
b6.addEventListener("click",function() {btnNumber("6");});
b7.addEventListener("click",function() {btnNumber("7");});
b8.addEventListener("click",function() {btnNumber("8");});
b9.addEventListener("click",function() {btnNumber("9");});
b0.addEventListener("click",function() {
    if(res.textContent.charAt(res.textContent.length-1)!=="=")
    {
        if(res.textContent.length==18)
        {
            res.textContent="";
        }
        if(res.textContent=="0")
        {
            let l=1;
        }
        else{
        res.textContent+="0";
        final+="0";
        }
    }
    
});

function opaCal(opu)
{
    if(res.textContent.length==18)
    {
        res.textContent="";
    }
    if(res.textContent.charAt(res.textContent.length-1)!=="+" && res.textContent.charAt(res.textContent.length-1)!=="-" && res.textContent.charAt(res.textContent.length-1)!=="%" && res.textContent.charAt(res.textContent.length-1)!=="=" && res.textContent.charAt(res.textContent.length-1)!=="/" && res.textContent.charAt(res.textContent.length-1)!=="*" && res.textContent.charAt(res.textContent.length-1)!==".")
    {
        res.textContent+=opu;
        final+=` ${opu} `;
    }
}
bp.addEventListener("click",function(){opaCal('+')});
bx.addEventListener("click",function(){opaCal('*')});
bprc.addEventListener("click",function(){opaCal('%')});
bdev.addEventListener("click",function(){opaCal('/')});
bm.addEventListener("click",function(){opaCal('-')});
bd.addEventListener("click",function(){
    if(res.textContent.length==18)
    {
        res.textContent="";
    }
    if(res.textContent.charAt(res.textContent.length-1)!=="+" && res.textContent.charAt(res.textContent.length-1)!=="-" && res.textContent.charAt(res.textContent.length-1)!=="%" && res.textContent.charAt(res.textContent.length-1)!=="=" && res.textContent.charAt(res.textContent.length-1)!=="/" && res.textContent.charAt(res.textContent.length-1)!=="*" && res.textContent.charAt(res.textContent.length-1)!==".")
    {
        res.textContent+=".";
        final+=".";
    }
    
});
ac.addEventListener("click",function(){
    res.textContent="0";
    final="";
    finalr.textContent="";
    if(res.textContent.length>19)
        {
            res.style.fontSize="15px";
        }
        else{
            res.style.fontSize="30px";
        }
    
});
c.addEventListener("click",function(){
    if(res.textContent.length>19)
        {
            res.style.fontSize="15px";
        }
        else{
            res.style.fontSize="30px";
        }
    if(res.textContent.length==1)
    {
        res.textContent="0";
        final=final.slice(0,-1);
    }
    else if(res.textContent!=="0")
    {
        if(res.textContent.charAt(res.textContent.length-1)=="=")
        {
            res.textContent=res.textContent.slice(0,-1);
        }
        else if(res.textContent.charAt(res.textContent.length-1)=="+" || res.textContent.charAt(res.textContent.length-1)=="-" || res.textContent.charAt(res.textContent.length-1)=="/" || res.textContent.charAt(res.textContent.length-1)=="%" || res.textContent.charAt(res.textContent.length-1)=="*")
        {
            final=final.slice(0,-3);
            res.textContent=res.textContent.slice(0,-1);
        }
        else{
            final=final.slice(0,-1);
            res.textContent=res.textContent.slice(0,-1);
        }
        
        
    }
    finalr.textContent="";
        
    
});
function makeResult(num1,op,num2)
{
    num1=Number(num1);
    num2=Number(num2);
    if (op === '+') return num1 + num2;
    if (op === '-') return num1 - num2;
    if (op === '*') return num1 * num2;
    if (op === '/'){
        if(num2!==0)
        {
            return num1 / num2;
        }    
        else return "ERROR";
    }
    if (op === '%') return num1 % num2;
}
be.addEventListener("click",function(){
    if(res.textContent.charAt(res.textContent.length-1)!=="+" && res.textContent.charAt(res.textContent.length-1)!=="-" && res.textContent.charAt(res.textContent.length-1)!=="%" && res.textContent.charAt(res.textContent.length-1)!=="=" && res.textContent.charAt(res.textContent.length-1)!=="/" && res.textContent.charAt(res.textContent.length-1)!=="*" && res.textContent.charAt(res.textContent.length-1)!==".")
    {
        let numb=final.split(" ");
    const operations =['%','*','/','-','+'];
    let rese;
    let index;
    let num1;
    let op;
    let num2;
    let br=0;
    for(let i=0;i<operations.length;i++)
    {
        while(numb.includes(operations[i]))
        {
            br=br+1;
            index = numb.findIndex(item => item === operations[i]);
            num1=numb[index-1];
            op=numb[index];
            num2=numb[index+1];
            rese=makeResult(num1,op,num2);
            numb.splice(index-1,3,rese);
        }
    }
    finalr.textContent=rese;
    res.textContent+="=";
    
    if(finalr.clientWidth>330)
    {
        finalr.style.fontSize="30px";
    }
    if(finalr.clientWidth>330)
    {
        finalr.style.fontSize="20px";
    }
    if(finalr.clientWidth>330)
    {
        finalr.style.fontSize="15px";
    }
    }
    
});