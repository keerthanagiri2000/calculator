//create div container and calculator 

var container=document.createElement('div');
container.style.height="100vh";
container.style.display="flex";
container.style.alignItems="center";
container.style.justifyContent="center";

var heading=document.createElement('h1');
heading.innerHTML="Calculator";
heading.style.textAlign="center";
heading.style.marginBottom="10px";
heading.style.letterSpacing="2px";
heading.style.fontFamily="verdana";
heading.setAttribute("id","title")

var p1=document.createElement('p');
p1.setAttribute("id","description");
p1.innerHTML="DOM calculation";
p1.style.textAlign="center";

var calculator=document.createElement('div');
calculator.style.borderRadius="10px";
calculator.style.padding ="16px";
calculator.style.display="grid";
calculator.style.gridTemplateColumns="repeat(4,66px)";
calculator.style.columnGap="14px";
calculator.style.background="gray";
calculator.style.boxShadow="4px 4px darkgray";

container.append(calculator);
document.body.append(heading,p1,container);

//create input field
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','result');
input.setAttribute('placeholder','0');
input.style.gridColumn="span 4";
input.style.height="60px";
input.style.width="260px";
input.style.border="none";
input.style.background="#DEDEDE";
input.style.margin="20px 0px 15px 0px";
input.style.textAlign="end";
input.style.padding="20px";
input.style.fontSize="40px";


//create buttons
var btn1=document.createElement('button');
btn1.innerHTML="C";
btn1.setAttribute('type','button');
btn1.setAttribute('value','C');
btn1.style.width="60px";
btn1.style.height="60px";
btn1.style.background="#DEDEDE";
btn1.style.border="none";
btn1.style.marginBottom="5px";
btn1.style.fontSize="20px";
btn1.style.fontWeight="bold";
btn1.setAttribute("id","clear");




var btn2=document.createElement('button');
btn2.innerHTML="DEL";
btn2.setAttribute('type','button');
btn2.setAttribute('value','del');
btn2.style.width="60px";
btn2.style.height="60px";
btn2.style.background="#DEDEDE";
btn2.style.border="none";
btn2.style.marginBottom="5px";
btn2.style.fontSize="20px";
btn2.style.fontWeight="bold";



var btn3=document.createElement('button');
btn3.innerHTML="%";
btn3.setAttribute('type','button');
btn3.setAttribute('value','%');
btn3.style.width="60px";
btn3.style.height="60px";
btn3.style.background="#DEDEDE";
btn3.style.border="none";
btn3.style.marginBottom="5px";
btn3.style.fontSize="20px";
btn3.style.fontWeight="bold";



var btn4=document.createElement('button');
btn4.innerHTML="/";
btn4.setAttribute('type','button');
btn4.setAttribute('value','/');
btn4.style.width="60px";
btn4.style.height="60px";
btn4.style.background="#C5E8B7";
btn4.style.border="none";
btn4.style.marginBottom="5px";
btn4.style.fontSize="20px";
btn4.style.fontWeight="bold";


var btn5=document.createElement('button');
btn5.innerHTML="7";
btn5.setAttribute('type','button');
btn5.setAttribute('value','7');
btn5.style.width="60px";
btn5.style.height="60px";
btn5.style.background="#FAFAFA";
btn5.style.border="none";
btn5.style.marginBottom="5px";
btn5.style.fontSize="20px";
btn5.style.fontWeight="bold";
btn5.setAttribute("id","7");

var btn6=document.createElement('button');
btn6.innerHTML="8";
btn6.setAttribute('type','button');
btn6.setAttribute('value','8');
btn6.style.width="60px";
btn6.style.height="60px";
btn6.style.background="#FAFAFA";
btn6.style.border="none";
btn6.style.marginBottom="5px";
btn6.style.fontSize="20px";
btn6.style.fontWeight="bold";
btn6.setAttribute("id","8");


var btn7=document.createElement('button');
btn7.innerHTML="9";
btn7.setAttribute('type','button');
btn7.setAttribute('value','9');
btn7.style.width="60px";
btn7.style.height="60px";
btn7.style.background="#FAFAFA";
btn7.style.border="none";
btn7.style.marginBottom="5px";
btn7.style.fontSize="20px";
btn7.style.fontWeight="bold";
btn7.setAttribute("id","9")

var btn8=document.createElement('button');
btn8.innerHTML="*";
btn8.style.width="60px";
btn8.style.height="60px";
btn8.style.background="#C5E8B7";
btn8.style.border="none";
btn8.style.marginBottom="5px";
btn8.style.fontSize="20px";
btn8.style.fontWeight="bold";
btn8.setAttribute('type','button');
btn8.setAttribute('value','*');



var btn9=document.createElement('button');
btn9.innerHTML="4";
btn9.setAttribute('type','button');
btn9.setAttribute('value','4');
btn9.style.width="60px";
btn9.style.height="60px";
btn9.style.background="#FAFAFA";
btn9.style.border="none";
btn9.style.marginBottom="5px";
btn9.style.fontSize="20px";
btn9.style.fontWeight="bold";
btn9.setAttribute("id","4");


var btn10=document.createElement('button');
btn10.innerHTML="5";
btn10.setAttribute('type','button');
btn10.setAttribute('value','5');
btn10.style.width="60px";
btn10.style.height="60px";
btn10.style.background="#FAFAFA";
btn10.style.border="none";
btn10.style.marginBottom="5px";
btn10.style.fontSize="20px";
btn10.style.fontWeight="bold";
btn10.setAttribute("id","5");

var btn11=document.createElement('button');
btn11.innerHTML="6";
btn11.setAttribute('type','button');
btn11.setAttribute('value','6');
btn11.style.width="60px";
btn11.style.height="60px";
btn11.style.background="#FAFAFA";
btn11.style.border="none";
btn11.style.marginBottom="5px";
btn11.style.fontSize="20px";
btn11.style.fontWeight="bold";
btn11.setAttribute("id","6");


var btn12=document.createElement('button');
btn12.innerHTML="-";
btn12.setAttribute('type','button');
btn12.setAttribute('value','-');
btn12.style.width="60px";
btn12.style.height="60px";
btn12.style.background="#C5E8B7";
btn12.style.border="none";
btn12.style.marginBottom="5px";
btn12.style.fontSize="20px";
btn12.style.fontWeight="bold";
btn12.setAttribute("id","subtract");


var btn13=document.createElement('button');
btn13.innerHTML="1";
btn13.setAttribute('type','button');
btn13.setAttribute('value','1');
btn13.style.width="60px";
btn13.style.height="60px";
btn13.style.background="#FAFAFA";
btn13.style.border="none";
btn13.style.marginBottom="5px";
btn13.style.fontSize="20px";
btn13.style.fontWeight="bold";
btn13.setAttribute("id","1");


var btn14=document.createElement('button');
btn14.innerHTML="2";
btn14.setAttribute('type','button');
btn14.setAttribute('value','2');
btn14.style.width="60px";
btn14.style.height="60px";
btn14.style.background="#FAFAFA";
btn14.style.border="none";
btn14.style.marginBottom="5px";
btn14.style.fontSize="20px";
btn14.style.fontWeight="bold";
btn14.setAttribute("id","2");


var btn15=document.createElement('button');
btn15.innerHTML="3";
btn15.setAttribute('type','button');
btn15.setAttribute('value','3');
btn15.style.width="60px";
btn15.style.height="60px";
btn15.style.background="#FAFAFA";
btn15.style.border="none";
btn15.style.marginBottom="5px";
btn15.style.fontSize="20px";
btn15.style.fontWeight="bold";
btn15.setAttribute("id","3");

var btn16=document.createElement('button');
btn16.innerHTML="+";
btn16.setAttribute('type','button');
btn16.setAttribute('value','+');
btn16.style.width="60px";
btn16.style.height="60px";
btn16.style.background="#C5E8B7";
btn16.style.border="none";
btn16.style.marginBottom="5px";
btn16.style.fontSize="20px";
btn16.style.fontWeight="bold";
btn16.setAttribute("id","add");


var btn17=document.createElement('button');
btn17.innerHTML=".";
btn17.setAttribute('type','button');
btn17.setAttribute('value','.');
btn17.style.width="60px";
btn17.style.height="60px";
btn17.style.background="#FAFAFA";
btn17.style.border="none";
btn17.style.marginBottom="5px";
btn17.style.fontSize="20px";
btn17.style.fontWeight="bold";



var btn18=document.createElement('button');
btn18.innerHTML="0";
btn18.setAttribute('type','button');
btn18.setAttribute('value','0');
btn18.style.width="60px";
btn18.style.height="60px";
btn18.style.background="#FAFAFA";
btn18.style.border="none";
btn18.style.marginBottom="5px";
btn18.style.fontSize="20px";
btn18.style.fontWeight="bold";



var btn19=document.createElement('button');
btn19.innerHTML="=";
btn19.setAttribute('type','button');
btn19.setAttribute('value','=');
btn19.style.width="140px";
btn19.style.height="60px";
btn19.style.background="#6BAF92";
btn19.style.border="none";
btn19.style.marginBottom="5px";
btn19.style.fontSize="20px";
btn19.style.fontWeight="bold";
btn19.setAttribute("id","equal");


calculator.append(input,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19);

document.getElementById("inputtext");


const buttons=document.querySelectorAll('button');
const inputext=document.querySelector('#result');

buttons.forEach(function(button){
    button.addEventListener('click',(calculate)=>{

    switch(calculate.target.value){
        case 'C':
            inputext.value='';
            break;
        case 'del':
            if(inputext.value){
            inputext.value=inputext.value.slice(0,-1);
            }
            break;
        case '=':
        try{
            inputext.value=eval(inputext.value);

        }catch{
        inputext.value=alert("Enter valid inputs");
        }
        break;
        default:
            inputext.value+=calculate.target.value;
    }
    })
});
