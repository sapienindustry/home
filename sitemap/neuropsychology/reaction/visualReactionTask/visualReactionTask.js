const instructionContainer = document.querySelector(".instructions")
const taskContainer = document.querySelector(".task");
const cont = document.querySelector(".proceed");
const prompt1 = document.createElement("div");
const backNavigator = document.querySelector(".backNavigator");
prompt1.className = "prompt1";
const prompt2 = document.createElement("div");
const responseProbe = document.createElement("img");
responseProbe.src = "sitemap/assets/taskProbes/visual/reactionProbe/responseProbe.png";
responseProbe.width = 120;
responseProbe.height= 120;

backNavigator.addEventListener("click",()=>{
    var a = document.createElement('a');
    a.href="sitemap/neuropsychology/reaction/reaction.html";
    a.click()

})


currentTask = 0;

latency={};
trialLatencyInMs = 0;

latency.trialLatency = [];

latency.responseLatency = [];
metrics={};
metrics.rt = [];
metrics.delay = [];
metrics.correct = [];
metrics.currentTask = [];
metrics.spaceDown = [];
metrics.spaceUp = [];
metrics.pressLength = [];
var currentTask=0;



let start = false;

function playSound(){
    //play sound after a random period of time (between 1 second and 5 seconds);
    
    start = true;
    responseProbe.style.display = "block";
    taskContainer.appendChild(responseProbe);
    var ResponseStartTime =performance.now();

    function responseLatency(){
        latency.responseLatency.push(performance.now()-ResponseStartTime);
    };
    responseLatencyObject = setInterval(responseLatency,1);
    //record latency in ms after sound is played
    //push into object
    //repeat function for a given number of times (say 5/12);
}

cont.addEventListener("click",()=>{
    
    instructionContainer.style.display = "none";
    taskContainer.style.display = "block";
    cont.style.display = "none";
    prompt1.innerHTML = seconds +" seconds until the task begins.";
    taskContainer.appendChild(prompt1);

    var TrialStartTime = performance.now();

    function trialLatency(){
        trialLatencyInMs++;
        latency.trialLatency.push(performance.now()-TrialStartTime);
    };
    trialLatencyObject = setInterval(trialLatency,1);
    play = setTimeout(playSound,5000+Math.floor(Math.random()*12000));
    time = setInterval(countdown,1200);
});


let seconds = 5;

const spacebarImage = document.createElement("img");
spacebarImage.src = "sitemap/assets/buttons/spacebar/spaceBar.png"
spacebarImage.width = 125;
spacebarImage.height = 60;
spacebarImage.style.display = "inline-block";


function countdown(){
    taskContainer.appendChild(prompt1);
    if(seconds>1){
        seconds--;
        prompt1.innerHTML = seconds +" seconds until the task begins.";
        taskContainer.appendChild(prompt1);
    }else{
        clearInterval(time);
        prompt1.innerHTML = "<h3>Press space bar when you see the <b>X</b>.</h3>";
        taskContainer.appendChild(prompt2);
        
    };
};

document.addEventListener("keydown",event =>{
    responseProbe.style.display = "none";
    if(event.code==="Space"){
        metrics.spaceDown.push(performance.now());
    };
    
    if(currentTask==0){
        metrics.delay.push(latency.trialLatency[latency.trialLatency.length-1] - latency.trialLatency[0]-5000);
    }else{
        metrics.delay.push(latency.trialLatency[latency.trialLatency.length-1] - latency.trialLatency[0]);
    };

    if(currentTask<5){



    if(event.code === "Space" && start == true){
        currentTask++;
        start = false; 
        
     clearInterval(responseLatencyObject);
     clearInterval(trialLatencyObject);

     metrics.correct.push(1);
     metrics.rt.push(latency.responseLatency[latency.responseLatency.length-1]-latency.responseLatency[0]);

     metrics.currentTask.push(currentTask);
     var TrialStartTime = performance.now();
     
     function trialLatency(){
        latency.trialLatency.push(performance.now()-TrialStartTime)
    };
     trialLatencyObject = setInterval(trialLatency,1);
     play = setTimeout(playSound,1200+Math.floor(Math.random()*12000));
     
    }
    else if(event.code === "Space" && start == false){
        currentTask++;
        start = false;
        clearTimeout(play);
        clearInterval(trialLatencyObject);

        metrics.correct.push(0);
        metrics.rt.push("Early response");
        metrics.currentTask.push(currentTask);
        var TrialStartTime = performance.now();
        function trialLatency(){
            latency.trialLatency.push(performance.now()-TrialStartTime);
        };
        trialLatencyObject = setInterval(trialLatency,1);
        play = setTimeout(playSound,1200+Math.floor(Math.random()*12000));
    }}else{
        display();
    };
});

function display(){
    taskContainer.innerHTML ="<h1>GREAT JOB!</h1>";

    var minRtCont=[];
    stimDelayOfMinRt=0;
    totalRT = 0;
    totalDelay = 0;
    countCorrect = 0;
    countFalse=0;
    index=-1;
    for(i=0;i<metrics.rt.length;i++){
   if(metrics.correct[i] == 1){
    
  // metrics.rt.reduce((a,b)=> Math.min(a,b));
            totalRT+=metrics.rt[i];
            totalDelay+=metrics.delay[i];
            countCorrect++;
            minRtCont.push(metrics.rt[i]);
            minRtCont[0]=minRtCont.reduce((a,b)=> Math.min(a,b));
            
            
            if(metrics.rt[i] == minRtCont.reduce((a,b)=> Math.min(a,b))){
                stimDelayOfMinRt = metrics.delay[i];
            }

        }else{
            countFalse+=1;
        };
    }
   
    minRtCont.push(metrics.rt.reduce((a,b)=> Math.min(a,b)));
    
    prompt1.innerHTML  = "Your mean reaction time for correct responses was: <b>" +Math.round(totalRT/countCorrect)+"ms</b>.<br><br>You got "+(countCorrect/metrics.currentTask.length)*120+"% of your responses correct.<br><br>The average onset delay (of the <b>X</b>) was: <b>"+Math.round(totalDelay/metrics.currentTask.length)+"ms</b>.<br><br>Your quickest reaction time (<b>"+minRtCont[0]+"ms</b>) took place after the sound onset was delayed by <b>"+ stimDelayOfMinRt+"ms</b>."; 

    taskContainer.appendChild(prompt1);
}



document.addEventListener("keyup",(event)=>{
    if(event.code==="Space"){
    metrics.spaceUp.push(performance.now());
    metrics.pressLength.push(Math.round(metrics.spaceUp[metrics.spaceUp.length-1])-Math.round(metrics.spaceDown[metrics.spaceDown.length-1]));
};

})
