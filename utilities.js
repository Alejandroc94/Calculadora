var nuNum1=0;
var nuNum2=0;
var stOperation="sum";

function handleInput(stInput){
    var nuValue= parseInt(document.getElementById(stInput).value)

    if(stInput=="input1"){
        nuNum1=nuValue;
    }else{
        nuNum2=nuValue;
    }
    execute();
}

function handleSelect(){
    stOperation=document.getElementById("operation").value;
    execute();
}

function execute(){
    var stRes="";
    if(stOperation=="sum"){
        stRes=suma();
    }else if(stOperation=="res"){
        stRes=resta();
    }else if (stOperation=="mul"){
        stRes=multiplicacion();
    }else if(stOperation=="div"){
        stRes=division();
    }

    document.getElementById("result").innerHTML=stRes;
}

function suma(){
    return nuNum1+nuNum2;
}
function resta(){
    return nuNum1-nuNum2;
}
function multiplicacion(){
    return nuNum1*nuNum2;
}
function division(){
    return nuNum1/nuNum2;
}