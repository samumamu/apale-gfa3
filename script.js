var num1 = Math.ceil(Math.random()*20);
var num2 = Math.ceil(Math.random()*20);
var num3 = Math.ceil(Math.random()*20);

document.getElementById('r1').innerHTML = num1;
document.getElementById('r2').innerHTML = num2;
document.getElementById('r3').innerHTML = num3;

var bigNum;

if(Math.max(num1,num2,num3)==num1&&num1!=num2&&num1!=num3)
{
    bigNum = num1;
}
else if(Math.max(num1,num2,num3)==num2&&num2!=num1&&num2!=num3)
{
    bigNum = num2;
}
else if(Math.max(num1,num2,num3)==num3&&num3!=num1&&num3!=num2)
{
    bigNum = num3;
}
else
{
    if(num1==num2&&num2>num3)
    {
        bigNum = "Room 1 and Room 2 ("+num2+").";
    }
    else if(num1==num3&&num1>num2)
    {
        bigNum = "Room 1 and Room 3 ("+num3+").";
    }
    else if(num2==num3&&num2>num1)
    {
        bigNum = "Room 2 and Room 3 ("+num3+").";
    }
    else
    {
        bigNum = "all the rooms ("+num1+").";
    }
}

var abc = "ABCDEFGHIJKLMNOPQRSTUVQWXYZ";

var letter;

if(num1>0)
{
    letter = abc[num1];
}
else
{
    letter = "Unknown";
}

var totalTime = num2*num3;
var hrs = parseInt(totalTime/60);
var mins = totalTime%60;

document.getElementById('bigNum').innerHTML = "Room/s with the most number of letters in the password: "+bigNum;
document.getElementById('numthLetter').innerHTML = "Initial of the first person to get out: "+letter;
document.getElementById("num2xnum3").innerHTML = "Time it took for them to get out ("+totalTime+" mins): "+hrs+" hrs "+mins+" mins";