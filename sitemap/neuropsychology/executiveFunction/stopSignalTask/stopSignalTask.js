//TASK SCRIPT
const html = document.querySelector("html");
html.style.opacity=0;
const container = document.querySelector(".container");
container.style.opacity = 0;

currentTask=0;
taskInsights={};
taskInsights.currentTask=[];
taskInsights.StopOrGoTrial=[];
taskInsights.stimulus=[]; 
taskInsights.response=[];
taskInsights.latency=[];
taskInsights.buttonPressLatency=[];
taskInsights.correct=[];
taskInsights.StopSignalDelay=[]; 

taskReloadTime=2000;
StopSignalDelay = 450;
buttonLock=0;
taskLength=15;
randomNumberBetween1and0 = Math.random();

const body = document.querySelector("body");

const instructionPage1 = document.querySelector('#instruction1');
const instructionPage2 = document.querySelector("#instruction2");
const instructionPage3 = document.querySelector("#instruction3");
const step1 = document.querySelector("div.steps#step1");
const step2 = document.querySelector("div.steps#step2");
const step3 = document.querySelector("div.steps#step3");
const step4 = document.querySelector("div.steps#step4");
const practice1 = document.querySelector("#practice1");

const backNavigator = document.querySelector(".backNavigator");
backNavigator.addEventListener('click',()=>{
    var a = document.createElement('a');
    a.href="sitemap/neuropsychology/executiveFunction/executiveFunction.html";
    a.click()
});

const header = document.querySelector('.header');
const heading = document.querySelector("h1");
heading.addEventListener("click",()=>{
    location.reload();
})

const controls = document.querySelector("div.controlBox");
const rightArrow = document.createElement("img");
rightArrow.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrow.png";
rightArrow.width = 45;
rightArrow.height = 45;
rightArrow.className = "controlButton";
rightArrow.id= "rightArrow";

const leftArrow = document.createElement("img");
leftArrow.src = "sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
leftArrow.width = 45;
leftArrow.height = 45;
leftArrow.className = "controlButton";
leftArrow.id= "leftArrow";
leftArrow.style.display="none";

const taskDisplay = document.querySelector(".task");

const sButtonContainerHTML = document.querySelector("div.buttonContainer#sButtonContainer");
const sButtonImageSource= document.createTextNode("sitemap/assets/buttons/letters/S/letterS.png")
const sButtonPressedImgSource = document.createTextNode("sitemap/assets/buttons/letters/S/letterSPressed.png")

const sButton = document.createElement('img');
sButton.src = sButtonImageSource.textContent;
sButton.className="taskInteractable";
sButton.id="sButton";
sButtonContainerHTML.appendChild(sButton);

const lButtonContainerHTML = document.querySelector("div.buttonContainer#lButtonContainer");
const lButtonImageSource= document.createTextNode("sitemap/assets/buttons/letters/L/letterL.png")
const lButtonPressedImgSource = document.createTextNode("sitemap/assets/buttons/letters/L/letterLPressed.png")

const lButton = document.createElement('img');
lButton.src = lButtonImageSource.textContent;
lButton.className="taskInteractable";
lButton.id="lButton";
lButtonContainerHTML.appendChild(lButton);

const rightArrowPromptContainerHTML = document.querySelector("div.promptContainer#rightArrowPromptContainer");
const rightArrowPromptImageSource= document.createTextNode("sitemap/assets/taskProbes/visual/rightArrowProbe/rightArrowProbe.png")

const rightArrowPrompt = document.createElement('img');
rightArrowPrompt.src = rightArrowPromptImageSource.textContent;
rightArrowPrompt.className="taskPrompt";
rightArrowPrompt.id="rightArrowPrompt";

const responseProbeHTMLContainer=document.querySelector("div.stimuliDisplay");

const leftArrowPromptContainerHTML = document.querySelector("div.promptContainer#leftArrowPromptContainer");
const leftArrowPromptImageSource= document.createTextNode("sitemap/assets/taskProbes/visual/leftArrowProbe/leftArrowProbe.png")

const leftArrowPrompt = document.createElement('img');
leftArrowPrompt.src = leftArrowPromptImageSource.textContent;
leftArrowPrompt.className="taskPrompt";
leftArrowPrompt.id="leftArrowPrompt";

leftArrowPromptContainerHTML.appendChild(leftArrowPrompt);
rightArrowPromptContainerHTML.appendChild(rightArrowPrompt);

const responseProbe = document.createElement("img");
responseProbe.src = "sitemap/assets/taskProbes/visual/reactionProbe/responseProbe.png";
responseProbe.width = 120;
responseProbe.height= 120;
responseProbe.className="taskPrompt";
responseProbe.id="responseProbe";

responseProbeHTMLContainer.appendChild(rightArrowPrompt);
responseProbeHTMLContainer.appendChild(leftArrowPrompt);
responseProbeHTMLContainer.appendChild(responseProbe);

var prompt1 = document.createElement("div");
prompt1.className = "prompt";
prompt1.id = "prompt1";

function buttonPressedIn(e){
    
    if(e.target==leftArrow || e.code=="ArrowLeft" || e.target==rightArrow || e.code =="ArrowRight" || e.target ==sButton || e.code  =="KeyS" || e.target==lButton || e.code=="KeyL"){
        e.preventDefault();
        if(e.target == rightArrow || e.code == "ArrowRight")
        {
            rightArrow.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrowPressed.png";
            setTimeout(()=>{rightArrow.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"},200);
        }
        else if(e.target== leftArrow || e.code=="ArrowLeft"){
            leftArrow.src = "sitemap/assets/buttons/arrow/leftarrow/leftArrowPressed.png";
            setTimeout(()=>{leftArrow.src = "sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"},200);
        }else if(e.target ==sButton || e.code =="KeyS"){
            sButton.src = sButtonPressedImgSource.textContent;
            setTimeout(()=>{sButton.src = sButtonImageSource.textContent},200);
        }else{
            lButton.src = lButtonPressedImgSource.textContent;
            setTimeout(()=>{lButton.src = lButtonImageSource.textContent},200);
        }
    }
}

function buttonReleased(e){
    if(e.target==leftArrow || e.code=="ArrowLeft" || e.target==rightArrow || e.code =="ArrowRight" || e.target ==sButton || e.code  =="KeyS" || e.target==lButton || e.code=="KeyL"){
        if(e.target == rightArrow || e.code == "ArrowRight"){
            if(getComputedStyle(instructionPage1).display =="block"){
                
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "block";
                instructionPage3.style.display = "none";
                
                taskDisplay.style.display = "none";

                leftArrow.style.display="inline";
            }else if(getComputedStyle(instructionPage2).display =="block"){
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "block";

                step1.style.display="block";
                step2.style.display="none";
                step3.style.display="none";

                practice1.style.display="none";
                taskDisplay.style.display = "none";

                rightArrowPromptContainerHTML.appendChild(rightArrowPrompt);
                leftArrowPromptContainerHTML.appendChild(leftArrowPrompt);

                rightArrowPrompt.src ="sitemap/assets/taskProbes/visual/rightArrowProbe/rightArrowPromptInstruction.jpg";
                leftArrowPrompt.src = "sitemap/assets/taskProbes/visual/leftArrowProbe/leftArrowPromptInstruction.jpg";
                
                leftArrow.style.display="inline";
                rightArrow.style.display="inline";

            }
            else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(step1).display == "block"){

                step1.style.display="none";
                step2.style.display="block";
                step3.style.display="none";
                instructionPage3.style.display = "block";
                }
                else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(step2).display=="block"){
                    step1.style.display="none";
                    step2.style.display="none";
                    step3.style.display="block";
                    instructionPage3.style.display = "block";
                    html.style.filter = "invert(120%)";
                }
                else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(step3).display=="block"){
                    step1.style.display="none";
                    step2.style.display="none";
                    step3.style.display="none";

                    instructionPage1.style.display="none";
                    instructionPage2.style.display="none";
                    instructionPage3.style.display="block";
                    practice1.style.display="block";


                    html.style.filter = "none";

                    leftArrow.style.display="inline";
                    rightArrow.style.display="inline";
                
                
                

            }else if(getComputedStyle(instructionPage3).display =="block" && getComputedStyle(practice1).display =="block"){
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "none";
                
                html.style.filter="none"
                taskDisplay.style.display = "block";
                
                leftArrow.style.display="none";
                rightArrow.style.display="none";

                rightArrowPrompt.src =rightArrowPromptImageSource.textContent;
                leftArrowPrompt.src = leftArrowPromptImageSource.textContent;
                
                goTrial();
            }
        }
        else if(e.target == leftArrow || e.code == "ArrowLeft"){
            if(getComputedStyle(instructionPage2).display =="block"){
                instructionPage1.style.display = "block";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "none";
                practice1.style.display = "none";

                taskDisplay.style.display = "none";
                leftArrow.style.display = "none";

            }else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(step1).display == "block"){
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "block";
                instructionPage3.style.display = "none";
                practice1.style.display = "none";
        
                taskDisplay.style.display = "none";
                leftArrow.style.display = "inline";
            }
            
            else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(step2).display == "block"){
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "block";  
                
                step1.style.display="block";
                step2.style.display="none";
                step3.style.display="none";
                practice1.style.display="none";
            }
            else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(step3).display == "block"){
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "block";  
                
                html.style.filter="none";
                step1.style.display="none";
                step2.style.display="block";
                step3.style.display="none";
                practice1.style.display="none";
            }
            else if(getComputedStyle(instructionPage3).display =="block" &&getComputedStyle(practice1).display == "block"){
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "block";    
                practice1.style.display = "none";
                
                step1.style.display="block";
                step2.style.display="none";
                step3.style.display="none";

                taskDisplay.style.display = "none";
                html.style.filter="none"
                leftArrow.style.display = "inline";
                leftArrow.style.display = "inline";
            }
    
 }else if((e.code == "KeyS" || e.code =="KeyL")&&(getComputedStyle(rightArrowPrompt).display=="block" || getComputedStyle(leftArrowPrompt).display=="block") && getComputedStyle(taskDisplay).display=="block"){
    
    leftArrowPrompt.style.display="none";
    rightArrowPrompt.style.display="none";

    html.style.backgroundColor="white";
    body.style.backgroundColor="white";
    
    container.style.backgroundColor="white";
    taskDisplay.style.backgroundColor="white";
    
    
    trialBegin = performance.now();
    
    StopOrGo =[];    
    responseProbe.style.display="block";
    taskDisplay.appendChild(responseProbe);
    var promptListForSelection = [rightArrowPrompt,leftArrowPrompt];
    randomPromptImage = promptListForSelection[Math.round(Math.random())];
    if(Math.round(Math.random())<0.3){
        setTimeout(()=>{
            if(randomPromptImage==rightArrowPrompt)
            {
                responseProbe.style.display="none";
                taskDisplay.appendChild(rightArrowPrompt);
            }
        else if(randomPromptImage==leftArrowPrompt)
        {
            responseProbe.style.display="none";
            taskDisplay.appendChild(leftArrowPrompt);    
        };
        stopTrial()},taskReloadTime);
    }else{
        container.style.backgroundColor="white";
        taskDisplay.style.backgroundColor="white";
        setTimeout(()=>{goTrial()},taskReloadTime);
    };

};
    if(e.code=="KeyS" && getComputedStyle(leftArrowPrompt).display=="block" && getComputedStyle(taskDisplay).display=="block"){
     taskInsights.response.push("s");
     taskInsights.latency.push(performance.now()-trialBegin);
     taskInsights.correct.push(1);
    };
    if(e.code=="KeyL" && getComputedStyle(rightArrowPrompt).display=="block" && getComputedStyle(taskDisplay).display=="block"){
        taskInsights.response.push("l");
        taskInsights.latency.push(performance.now()-trialBegin);
        taskInsights.correct.push(1);
    }

}};




document.addEventListener("mousedown",buttonPressedIn);
document.addEventListener("keydown",buttonPressedIn);
document.addEventListener("mouseup",(e)=>{
    setTimeout(buttonReleased,350,e)});
document.addEventListener("keyup",(e)=>{
    setTimeout(buttonReleased,350,e)});

    function goTrial(){

        currentTask++;
        correctResponse=null;
        taskInsights.currentTask.push(currentTask);
        taskInsights.StopOrGoTrial.push("go");
        taskInsights.StopSignalDelay.push(null);
        
        
        goTrialBegin=0;
        keyDown=0;
        keyUp=0;
        
        taskDisplay.style.textAlign = "center";
        taskDisplay.style.margin = "auto"
        
        rightArrowPrompt.style.display="none";
        leftArrowPrompt.style.display="none";
        
        html.style.backgroundColor="white";
        body.style.backgroundColor="white";
        
        container.style.backgroundColor="white";
        taskDisplay.style.backgroundColor="white";
        
        responseProbe.style.display="block";
        
        //UPDATING TASK INSIGHTS
        
        var promptListForSelection = [rightArrowPrompt,leftArrowPrompt];
        randomPromptImage = promptListForSelection[Math.round(Math.random())];
        
        setTimeout(()=>{
            
            goTrialBegin= performance.now();
            if(randomPromptImage==rightArrowPrompt)
            {
                taskInsights.stimulus.push("rightArrow");
                rightArrowPrompt.style.display="block";
                leftArrowPrompt.style.display="none";
                responseProbe.style.display="none";
                taskDisplay.appendChild(rightArrowPrompt);
                
                window.addEventListener("keydown",()=>{
                    
                    keyDown=performance.now();
                    taskInsights.latency.push(keyDown-goTrialBegin); 
                },{once:true});
                
                window.addEventListener("keyup",(e)=>{
                    if(e.code=="KeyL"){
                        keyUp=performance.now();
                        taskInsights.buttonPressLatency.push(keyUp-keyDown);
                        taskInsights.response.push(e.key);
                        taskInsights.correct.push(1);
                        
                    }else{
                        
                        taskDisplay.style.textAlign = "center";
                        taskDisplay.style.margin = "auto"
                        
                        rightArrowPrompt.style.display="none";
                        leftArrowPrompt.style.display="none";
                        
                        html.style.backgroundColor="white";
                        body.style.backgroundColor="white";
                        
                        container.style.backgroundColor="white";
                        taskDisplay.style.backgroundColor="white";
                        
                        responseProbe.style.display="block";
                        
                        keyUp=performance.now();
                        taskInsights.response.push("x");
                        taskInsights.correct.push(0);
                        taskInsights.buttonPressLatency.push(keyUp-keyDown);
                        if(Math.round(Math.random())<0.3){
                            setTimeout(stopTrial,taskReloadTime);
                        }else{
                            goTrial();
                        };
                    };
                },{once:true});
            }
            else if(randomPromptImage==leftArrowPrompt)
            {
                taskInsights.stimulus.push("leftArrow");
                leftArrowPrompt.style.display="block";
                rightArrowPrompt.style.display="none";
                responseProbe.style.display="none";
                taskDisplay.appendChild(leftArrowPrompt);
                
                window.addEventListener("keydown",()=>{
                    
                    keyDown=performance.now();
                    taskInsights.latency.push(keyDown-goTrialBegin); 
                },{once:true});
                
                window.addEventListener("keyup",(e)=>{
                    if(e.code=="KeyS")
                    {
                        keyUp=performance.now();
                        taskInsights.buttonPressLatency.push(keyUp-keyDown);
                        taskInsights.response.push(e.key);
                        taskInsights.correct.push(1);
                    }else{
                        keyUp=performance.now();
                        taskInsights.buttonPressLatency.push(keyUp-keyDown);
                        taskInsights.response.push("x");
                        taskInsights.correct.push(0);
                        
                        
                        taskDisplay.style.textAlign = "center";
                        taskDisplay.style.margin = "auto"
                        
                        rightArrowPrompt.style.display="none";
                        leftArrowPrompt.style.display="none";
                        
                        html.style.backgroundColor="white";
                        body.style.backgroundColor="white";
                        
                        container.style.backgroundColor="white";
                        taskDisplay.style.backgroundColor="white";
                        
                        responseProbe.style.display="block";
                        if(Math.round(Math.random())<0.3){
                            setTimeout(stopTrial,taskReloadTime);
                        }else{
                            goTrial();
                        };
                    };
                },{once:true});
            }
        },taskReloadTime);
        
        
    };
    
    
    function stopTrial(){
        stopTrialToggle=true;
        stopTrialBegin = performance.now();
        keyDown=0;
        keyUp=0;
        
        currentTask++;
        
        taskInsights.StopOrGoTrial.push("stop");
        taskInsights.currentTask.push(currentTask);
        taskInsights.StopSignalDelay.push(StopSignalDelay);
        
        taskDisplay.style.textAlign="center";
        responseProbe.style.display="none";
        randomPromptImage.style="block";
        if(getComputedStyle(rightArrowPrompt).display=="block"){
            taskInsights.stimulus.push("rightArrow");
        };
        if(getComputedStyle(leftArrowPrompt).display=="block"){
            taskInsights.stimulus.push("leftArrow");        
        };
        
        setTimeout(()=>{

            correctResponse=true;
            rightArrowPrompt.style.display="none";
            leftArrowPrompt.style.display="none";
            responseProbe.style.display="none";
            
            html.style.backgroundColor="black";
            html.style.transitionDuration="0s";
            
            body.style.backgroundColor="black";
            body.style.transitionDuration="0s";
            
            container.style.backgroundColor="black";
            container.style.transitionDuration="0s";
            
            taskDisplay.style.backgroundColor="black";
            taskDisplay.style.transitionDuration="0s";
            
            document.addEventListener("keydown",(e)=>{
                if(stopTrialToggle==true){
                    keyDown=performance.now();
                    taskInsights.response.push("x");
                    correctResponse=false;
                    taskInsights.latency.push(performance.now()-stopTrialBegin);
                    
                    
                }},{once:true});
                document.addEventListener("keyup",(e)=>{
                    if(stopTrialToggle==true){

                        keyUp=performance.now();
                        
                        
                        taskInsights.buttonPressLatency.push(keyUp-keyDown);
                        StopSignalDelay-=50;
                        stopTrialToggle==false;}
                    },{once:true});  
                    
                },
                StopSignalDelay);
                setTimeout(()=>{
                    responseProbe.style.display="none";
                    
                    if((correctResponse==true)){
                        
                        taskInsights.response.push(null);
                        taskInsights.correct.push(1);
                        taskInsights.latency.push(null);
                        taskInsights.buttonPressLatency.push(null);
                        StopSignalDelay+=50;
                    }else{
                        taskInsights.correct.push(0);
                    };
                    
                    stopTrialToggle=false;
                    goTrial();
                },StopSignalDelay+taskReloadTime);
            };
            

controls.appendChild(leftArrow);
controls.appendChild(rightArrow);

const randomButton = document.createElement("button")
randomButton.innerHTML = "<h1>X</h1>";

function opacity(y){
    y.style.opacity = 1;
    y.style.transitionDuration = '1s'};

setTimeout(opacity,300,html);
setTimeout(opacity,1120,container);

function windowOpen(x){
    html.style.opacity=0;
    html.style.transitionDuration ='0.12s';
    html.style.display = "none";
};

const instaLink = document.createElement('img');
instaLink.className="BottomRowImageButton";
instaLink.id = 'instaLink';
instaLink.src = "sitemap/assets/buttons/socialMedia/instalogo/instagram link logo.png";

instaLink.addEventListener('click',()=>{
    window.open("https://www.instagram.com/sapienindustry/");
});

const home = document.createElement('img');
home.className = "BottomRowImageButton";
home.id = "homeImage";
home.src = "sitemap/assets/buttons/home/homeButton.png";
home.addEventListener('click',()=>{
    var a = document.createElement('a');
          a.href="index.html";
        a.click();
});

pageInsights={};
pageInsights.timestamp=[];
pageInsights.pointer={};

function displayResults(){

    taskDisplay.style.display=="none";
    const resultsDisplay = document.querySelector(".result");    
}