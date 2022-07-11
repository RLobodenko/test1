var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in2');
var radio3 = document.getElementsByName('in3');
var radio4 = document.getElementsByName('in4');
var radio5 = document.getElementsByName('in5');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');
var radio8 = document.getElementsByName('in8');
var radio9 = document.getElementsByName('in9');
var radio10 = document.getElementsByName('in10');
var radio11 = document.getElementsByName('in11');
var radio12 = document.getElementsByName('in12');

var ks1=[1100, 2200, 3300, 4400];
var ks2=[900, 1800, 2700, 3600];
var ks3=[1000, 2000, 3000, 4000];
var ks4=[1200, 2400, 3600, 4800];

var ryb = new Object();
ryb.symma = "руб";


function f2() {

for (i=0;i<radio12.length;i++){


    
    if(radio1[i].selected && radio5[i].selected && radio9[i].selected) {


    document.getElementById('out1').innerHTML = "Пепперони";
    document.getElementById('out').innerHTML = ks1[0] + ryb.symma;
        document.getElementById('out2').innerHTML = "21";
        document.getElementById('out3').innerHTML = "сырный";
    return;
    }


    else if(radio1[i].selected && radio5[i].selected  && radio10[i].selected) {


    document.getElementById('out1').innerHTML = "Пепперони";
    document.getElementById('out').innerHTML = ks1[0] + ryb.symma;
        document.getElementById('out2').innerHTML = "21";
        document.getElementById('out3').innerHTML = "кисло-сладкий";
    return;
    }



    else if(radio1[i].selected && radio5[i].selected && radio11[i].selected) {

    document.getElementById('out1').innerHTML = "Пепперони";
    document.getElementById('out').innerHTML = ks1[0] + ryb.symma;
        document.getElementById('out2').innerHTML = "21";
        document.getElementById('out3').innerHTML = "чесночный";
    return;

    }


    else if(radio1[i].selected && radio5[i].selected && radio12[i].selected) {

    document.getElementById('out1').innerHTML = "Пепперони";
    document.getElementById('out').innerHTML = ks1[0] + ryb.symma;
        document.getElementById('out2').innerHTML = "21";
        document.getElementById('out3').innerHTML = "барбекю";
    return;

    }
        
        
    
    
    
else if(radio1[i].selected && radio6[i].selected && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "сырный";
return;
}


else if(radio1[i].selected && radio6[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}



else if(radio1[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}


else if(radio1[i].selected && radio6[i].selected && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "барбекю";
return;

}
    
    

else if(radio1[i].selected && radio7[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "сырный";
return;


}

else if(radio1[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Пепперони";

document.getElementById('out').innerHTML = ks1[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}




else if(radio1[i].selected && radio7[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Пепперони";

document.getElementById('out').innerHTML = ks1[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}
    
    
    
else if(radio1[i].selected && radio7[i].selected  && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "барбекю";
return;


}
    
else if(radio1[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "сырный";
return;


}

else if(radio1[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Пепперони";

document.getElementById('out').innerHTML = ks1[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}




else if(radio1[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Пепперони";

document.getElementById('out').innerHTML = ks1[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}

    
else if(radio1[i].selected && radio8[i].selected  && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Пепперони";
document.getElementById('out').innerHTML = ks1[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "барбекю";
return;


}


else if(radio2[i].selected && radio5[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";

document.getElementById('out').innerHTML = ks2[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "сырный";
return;
}


else if(radio2[i].selected && radio5[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
    
return;



}



else if(radio2[i].selected && radio5[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}

else if(radio2[i].selected && radio5[i].selected && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "барбекю";
return;

}
    
    
    
else if(radio2[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";

document.getElementById('out').innerHTML = ks2[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "сырный";
return;
}


else if(radio2[i].selected && radio6[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
    
return;



}



else if(radio2[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}

else if(radio2[i].selected && radio6[i].selected && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "барбекю";
return;

}



else if(radio2[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";

document.getElementById('out').innerHTML = ks2[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "сырный";
return;


}

else if(radio2[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";

document.getElementById('out').innerHTML = ks2[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}




else if(radio2[i].selected && radio7[i].selected  && radio11[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}
    
    
else if(radio2[i].selected && radio7[i].selected  && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "барбекю";
return;

}
   

else if(radio2[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "сырный";
return;


}

else if(radio2[i].selected && radio8[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}




else if(radio2[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Деревенская";

document.getElementById('out').innerHTML = ks2[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "чесночный";
return;

}

else if(radio2[i].selected && radio8[i].selected  && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Деревенская";
document.getElementById('out').innerHTML = ks2[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "барбекю";
return;


}
    
    
  
else if(radio3[i].selected && radio5[i].selected && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "сырный";
return;
}




else if(radio3[i].selected && radio5[i].selected  && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}



else if(radio3[i].selected && radio5[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "чесночный";
return;
}



else if(radio3[i].selected && radio5[i].selected && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "барбекю";
return;
}
    
    
    
else if(radio3[i].selected && radio6[i].selected && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "сырный";
return;
}




else if(radio3[i].selected && radio6[i].selected  && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}



else if(radio3[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "чесночный";
return;
}



else if(radio3[i].selected && radio6[i].selected && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "барбекю";
return;
}



else if(radio3[i].selected && radio7[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "сырный";
return;

}

else if(radio3[i].selected && radio7[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}




else if(radio3[i].selected && radio7[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "чесночный";
return;


}
    
else if(radio3[i].selected && radio7[i].selected  && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "барбекю";
return;

}
    
else if(radio3[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "сырный";
return;

}

else if(radio3[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";
document.getElementById('out').innerHTML = ks3[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
return;
}




else if(radio3[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";

document.getElementById('out').innerHTML = ks3[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "чесночный";
return;


}

    
    
else if(radio3[i].selected && radio8[i].selected  && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Гавайская";

document.getElementById('out').innerHTML = ks3[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "барбекю";
return;


}

else if(radio4[i].selected && radio5[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "сырный";
    return;
}


else if(radio4[i].selected && radio5[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
    return;



}



else if(radio4[i].selected && radio5[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "чесночный";
    return;

}

else if(radio4[i].selected && radio5[i].selected && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[0] + ryb.symma;
    document.getElementById('out2').innerHTML = "21";
    document.getElementById('out3').innerHTML = "барбекю";
    return;

}

    
    
    
else if(radio4[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "сырный";
    return;
}


else if(radio4[i].selected && radio6[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
    return;



}



else if(radio4[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "чесночный";
    return;

}

else if(radio4[i].selected && radio6[i].selected && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[1] + ryb.symma;
    document.getElementById('out2').innerHTML = "26";
    document.getElementById('out3').innerHTML = "барбекю";
    return;

}


else if(radio4[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "сырный";
    return;


}

else if(radio4[i].selected && radio7[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
    return;
}




else if(radio4[i].selected && radio7[i].selected  && radio11[i].selected) {


document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "чесночный";
    return;

}
    
else if(radio4[i].selected && radio7[i].selected  && radio12[i].selected) {


document.getElementById('out1').innerHTML = "Грибная";
    document.getElementById('out').innerHTML = ks4[2] + ryb.symma;
    document.getElementById('out2').innerHTML = "31";
    document.getElementById('out3').innerHTML = "барбекю";
    return;

}
    
else if(radio4[i].selected && radio8[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "сырный";
    return;


}

else if(radio4[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "кисло-сладкий";
    return;
}




else if(radio4[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "чесночный";
    return;

}



else if(radio4[i].selected && radio8[i].selected  && radio12[i].selected) {

document.getElementById('out1').innerHTML = "Грибная";
 
    document.getElementById('out').innerHTML = ks4[3] + ryb.symma;
    document.getElementById('out2').innerHTML = "45";
    document.getElementById('out3').innerHTML = "барбекю";
    return;

}








}






}


