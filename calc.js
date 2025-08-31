let input1='';


function append(num)
{

input1+=num;
display.value=input1;
   
}


function cleartext()
{
   display.value="";
input1='';
// document.getElementById('display').value ="";
}
function calcresult()
{

  
try{
display.value =eval(display.value);
}

catch(error){
display.value ="error"
}
 
}
function squarevalue()
{
   display.value="";
   const s= Number(input1);
   display.value=s*s;

  
}
function cubevalue()
{
   display.value="";
   const s= Number(input1);
   display.value=s*s*s;

  
}




