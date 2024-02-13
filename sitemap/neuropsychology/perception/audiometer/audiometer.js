//TASK SCRIPT

const html = document.querySelector("html");
html.style.opacity=0;
const container = document.querySelector(".container");
container.style.opacity = 0;
const body = document.querySelector("body");


const instructionPage1 = document.querySelector('#instruction1');
const instructionPage2 = document.querySelector("#instruction2");
const instructionPage3 = document.querySelector("#instruction3");
const step1 = document.querySelector("div.steps#step1");
const step2 = document.querySelector("div.steps#step2");
const step3 = document.querySelector("div.steps#step3");
const step4 = document.querySelector("div.steps#step4");
const instructionHeading =document.querySelector("h3.subheading#instructionSubheading");

const resultsDisplay = document.querySelector(".results");
const resultsPage1 = document.querySelector("#resultsPage1");
const resultsPage2 = document.querySelector("#resultsPage2");
const lowHzGraph = document.querySelector("canvas.graph#lowHz");
const highHzGraph = document.querySelector("canvas.graph#highHz");
const graphs = document.querySelectorAll(".graph");
console.log(graphs);

const backNavigator = document.querySelector(".backNavigator");
backNavigator.addEventListener('click',()=>{
    var a = document.createElement('a');
    a.href="/Users/lordyolo/Desktop/website/sitemap/neuropsychology/perception/perception.html";
    a.click()
});

const header = document.querySelector('.header');
const heading = document.querySelector("h1");
heading.addEventListener("click",()=>{
    location.reload();
})

const controls = document.querySelector("div.controlBox");
const rightArrow = document.createElement("img");
rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png";

rightArrow.className = "controlButton";
rightArrow.id= "rightArrow";

const leftArrow = document.createElement("img");
leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
leftArrow.className = "controlButton";
leftArrow.id= "leftArrow";
leftArrow.style.display="none";

const spacebarHTMLContainer = document.querySelector("div.buttonContainer#spacebarContainer");
const spacebarImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/spacebar/spaceBar.png");
const spacebarPressedImageSource = document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/spacebar/spaceBarPressed.png");

const spacebar = document.createElement('img');
spacebar.src = spacebarImageSource.textContent;
spacebar.className="taskInteractable";
spacebar.id="spacebar";
spacebarHTMLContainer.appendChild(spacebar);

const enterHTMLContainer = document.querySelector("div.buttonContainer#enterContainer");
const enterImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/enter/enterButton.png");
const enterPressedImageSource = document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/enter/enterButtonPressed.png");

const enter = document.createElement('img');
enter.src = enterImageSource.textContent;
enter.className="taskInteractable";
enter.id="enter";
enterHTMLContainer.appendChild(enter);

const taskDisplay = document.querySelector(".task");
const taskInfographic=document.createElement("div");

hzValue=0;
spacebarHoldToggle =0;
currentTask=0; 
gainValue=0.25;
hzValue=0;
panValue=0.5;

let hzLatency = 
{
    lowVol:{
        highs:
        {
            right:[],
            left:[],
            both:[]
        },
        lows:
        {
            right:[],
            left:[],
            both:[]
        }
    },
    medVol:
    {
        highs:
        {
            right:[],
            left:[],
            both:[]
        },
        lows:
        {
            right:[],
            left:[],
            both:[]
        }
    },
    highVol:
    {
        highs:
        {
            right:[],
            left:[],
            both:[]
        },
        lows:
        {
            right:[],
            left:[],
            both:[]
        }
    }
};

let hz = 
{
    lowVol:
    {
        highs:
        {
            right:[],
            left:[],
            both:[]
        },
        lows:
        {
            right:[],
            left:[],
            both:[]
        }
    },
    medVol:
    {
        highs:
        {
            right:[],
            left:[],
            both:[]
        },
        lows:
        {
            right:[],
            left:[],
            both:[]
        }
    },
    highVol:
    {
        highs:
        {
            right:[],
            left:[],
            both:[]
        },
        lows:
        {
            right:[],
            left:[],
            both:[]
        }
    }
};

taskMap = {};
taskMap.currentTask = [];
taskMap.parameter1=[];
taskMap.parameter2=[];
taskMap.parameter3=[];

for(i=0;i<Object.keys(hz).length;i++){
    
    for(j=0;j<Object.keys(hz[Object.keys(hz)[i]]).length;j++)
    {
        for(k=0;k<Object.keys(hz[Object.keys(hz)[i]][Object.keys(hz[Object.keys(hz)[i]])[j]]).length;k++)
        {
            taskMap.currentTask++;
            taskMap.parameter1.push(Object.keys(hz)[i]);
            taskMap.parameter2.push(Object.keys(hz[Object.keys(hz)[i]])[j]);
            taskMap.parameter3.push(Object.keys(hz[Object.keys(hz)[i]][Object.keys(hz[Object.keys(hz)[i]])[j]])[k]);
        };
    };
    
};


var infoTrialNo =document.createElement("div")
var infoTrialsRemaining= document.createElement("div");
var infoVolumeGroup=document.createElement("div");
var infoVolume=document.createElement("div");
var infoFrequencyGroup=document.createElement("div");
var infoStartingFrequency=document.createDocumentFragment();
var infoCurrentFrequency=document.createElement("div");
var infoPan =document.createElement("div");

var prompt1=document.createElement('div');
prompt1.style.display="block";
prompt1.style.width="450px";
function buttonPressedIn(e){
    if(e.target == spacebar || e.code=="Space" || e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target ==enter || e.code=="Enter"){
        e.preventDefault();
        if(e.target == rightArrow || e.code == "ArrowRight")
        {
            rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrowPressed.png";
            setTimeout(()=>{rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"},150);
        };
        if(e.target == leftArrow || e.code =="ArrowLeft")
        {
            leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrowPressed.png";
            setTimeout(()=>{leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"},150);
        };
        if(e.code =="Enter"|| e.target==enter)
        {
            enter.src=enterPressedImageSource.textContent;
            setTimeout(()=>{enter.src=enterImageSource.textContent},150);
            if(getComputedStyle(taskDisplay).display=="block" && infoCurrentFrequency.innerHTML === "Current Frequency: No sound"){
                
                prompt1.innerHTML= "<b>*</b> Hold the space bar until you hear a sound.";
                prompt1.style.color="red";
                body.append(prompt1);
            };
            oscillator.stop();
        };
        if(e.code =="Space"|| e.target==spacebar)
        {
            spacebar.src=spacebarPressedImageSource.textContent;
            
            
            if(e.code=="Space"){
                spacebarHoldToggle++;
                if(getComputedStyle(instructionPage3).display=="block" || getComputedStyle(taskDisplay).display=="block"){
                    if(spacebarHoldToggle==1){
                        const ac = new AudioContext();
                        gain=new GainNode(ac,{gain:gainValue});
                        pan=new StereoPannerNode(ac,{pan:panValue});
                        oscillator = new OscillatorNode(ac,{frequency:hzValue});
                        pan.connect(gain);
                        gain.connect(ac.destination);
                        oscillator.connect(gain);
                        oscillator.start();
                    };
                    if(spacebarHoldToggle>6){ 
                        prompt1.innerHTML="";
                        if(getComputedStyle(instructionPage3).display=="block" || (getComputedStyle(taskDisplay).display=="block" && taskMap.parameter2[currentTask]=="lows")){
                            {
                                if(getComputedStyle(instructionPage3).display=="block"){
                                    step1.style.display="none";
                                    step2.appendChild(spacebar);
                                    step2.style.display="block";
                                    step3.style.display="none";
                                };
                                hzValue++;
                                oscillator.frequency.value=hzValue;
                                if(getComputedStyle(taskDisplay).display=="block")
                                {
                                    infoCurrentFrequency.innerHTML="Current Frequency: "+String(oscillator.frequency.value)+"Hz.";
                                };
                            };
                        }else{
                            hzValue-=50;
                            oscillator.frequency.value=hzValue;
                            infoCurrentFrequency.innerHTML="Current Frequency: "+String(oscillator.frequency.value)+"Hz.";
                        };
                    };  
                };
            }
            else
            {
                if(getComputedStyle(instructionPage3).display=="block" || getComputedStyle(taskDisplay).display=="block"){
                    document.removeEventListener("mouseup",mouseRleasedOffSpaceHandler);
                    spaceMouseHold = setInterval(()=>{
                        spacebarHoldToggle++;
                        
                        if(spacebarHoldToggle==1)
                        {
                            const ac = new AudioContext();
                            gain=new GainNode(ac,{gain:gainValue});
                            pan=new StereoPannerNode(ac,{pan:panValue});
                            oscillator = new OscillatorNode(ac,{frequency:hzValue});
                            pan.connect(gain);
                            gain.connect(ac.destination);
                            oscillator.connect(gain);
                            oscillator.start();
                        }
                        else if(spacebarHoldToggle>=3)
                        {
                            prompt1.innerHTML="";
                            if(getComputedStyle(instructionPage3).display=="block" || (getComputedStyle(taskDisplay).display=="block" && taskMap.parameter2[currentTask]=="lows")){
                                if(getComputedStyle(instructionPage3).display == "block"){
                                    step1.style.display="none";
                                    instructionHeading.style.marginTop="-0.73em";
                                    step2.style.display="block";
                                    step2.appendChild(spacebar);
                                    step3.style.display="none";
                                    
                                }else{
                                    infoCurrentFrequency.innerHTML="Current Frequency: "+String(oscillator.frequency.value)+"Hz.";
                                };
                                hzValue++;
                                oscillator.frequency.value=hzValue;
                            }else{
                                hzValue-=50;
                                oscillator.frequency.value=hzValue;
                                infoCurrentFrequency.innerHTML="Current Frequency: "+String(oscillator.frequency.value)+"Hz.";
                            };
                        };
                    },125);
                    function mouseRleasedOffSpaceHandler(e){
                        if(e.target!==spacebar){
                            clearInterval(spaceMouseHold);
                            spacebar.src =spacebarImageSource.textContent;
                            if(getComputedStyle(taskDisplay).display=="block"){
                                if(spacebarHoldToggle>=3){
                                    
                                    taskDisplay.innerHTML="";
                                    body.style.display="";
                                    
                                    taskDisplay.appendChild(spacebar);
                                    var prompt1=document.createElement('div');
                                    prompt1.innerHTML="Keep adjusting sound with Spacebar.<br><br><br>";
                                    
                                    spacebarHTMLContainer.innerHTML="";
                                    taskDisplay.appendChild(prompt1);
        
                                    taskDisplay.appendChild(enter);
                                    var prompt2=document.createElement('div');
                                    prompt2.innerHTML="Press Enter to proceed.";
                                    taskDisplay.appendChild(prompt2);
                                }
                                else{
                                    taskDisplay.innerHTML ="<p>Make sure you <b>hold</b> the spacebar.</p>";
                                    taskDisplay.appendChild(spacebar);
                                    clearInterval(spaceMouseHold);
                                    oscillator.stop();
                                };                  
                            }else if(getComputedStyle(instructionPage3).display=="block")
                            {
                                enterHTMLContainer.style.display = 'inline';
                                enterHTMLContainer.appendChild(enter);
                                rightArrow.style.display="inline";
                                clearInterval(spaceMouseHold);
                                if(spacebarHoldToggle>=3){
                                    instructionPage1.style.display="none";
                                    instructionPage2.style.display="none";
                                    instructionPage3.style.display="block";
                                    step1.style.display="none";
                                    step2.style.display="none";
                                    step3.style.display="block";
                                    step4.style.display="none";
                                    
                                };
                            }};
                            document.removeEventListener("mouseup",mouseRleasedOffSpaceHandler);
                        };
                        document.addEventListener("mouseup",mouseRleasedOffSpaceHandler)
                        
                    }
                };
            };
        };
    };
    
    function buttonReleased(e){
        
        if(e.target == spacebar || e.code=="Space" || e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target ==enter || e.code=="Enter"){
            
            e.preventDefault();
            if(e.target==rightArrow||e.code=="ArrowRight"){
                if(getComputedStyle(instructionPage1).display=="block"){
                    
                    instructionPage1.style.display="none";
                    instructionPage2.style.display="block";
                    instructionPage3.style.display="none";
                    leftArrow.style.display="inline";
                }
                else if(getComputedStyle(instructionPage2).display=="block"){
                    instructionPage1.style.display="none";
                    instructionPage2.style.display="none";
                    instructionPage3.style.display="block";
                    step1.style.display="block";
                    
                    leftArrow.style.display="inline";
                    rightArrow.style.display="none";
                }
                else if(getComputedStyle(instructionPage3).display=="block" && getComputedStyle(step3).display=="block"){
                    oscillator.stop();
                    instructionPage1.style.display="none";
                    instructionPage2.style.display="none";
                    instructionPage3.style.display="none";
                    step1.style.display="none";
                    step2.style.display="none";
                    step3.style.display="none";
                    step4.style.display="block";
                    enterHTMLContainer.style.display="block";
                    enterHTMLContainer.appendChild(enter);
                    
                    controls.style.display="none";
                }
                else if(getComputedStyle(resultsDisplay).display=="block" && getComputedStyle(resultsPage1).display == "block"){
                    
                    resultsPage1.style.display ="none";
                    resultsPage2.style.display ="block";

                    lowHzGraph.style.display = "none";
                    highHzGraph.style.display = "block";
                    rightArrow.style.display="none";
                    leftArrow.style.display="inline";
                    
                };
            };
            if(e.target==leftArrow||e.code=="ArrowLeft"){
                if(getComputedStyle(instructionPage2).display=="block")
                {
                    instructionPage1.style.display="block";
                    instructionPage2.style.display="none";
                    instructionPage3.style.display="none";
                    leftArrow.style.display="none";
                }
                else if(getComputedStyle(instructionPage3).display=="block")
                {
                    if(getComputedStyle(step1).display=="block"){
                        
                        instructionPage1.style.display="none";
                        instructionPage2.style.display="block";
                        instructionPage3.style.display="none";
                        leftArrow.style.display="inline";
                        rightArrow.style.display="inline";
                    };
                    if(getComputedStyle(step2).display=="block"){
                        oscillator.stop();
                        step1.style.display="block";
                        step2.style.display="none";
                        step3.style.display="none";
                        step4.style.display="none";
                        step1.appendChild(spacebar);
                    }
                    if(getComputedStyle(step3).display=="block"){
                        step1.style.display="block";
                        step2.style.display="none";
                        step3.style.display="none";
                        step4.style.display="none";
                        step1.appendChild(spacebar);
                        
                        oscillator.stop();
                    }
                }
                else if(getComputedStyle(resultsDisplay).display=="block" && getComputedStyle(resultsPage2).display == "block"){
                    resultsPage1.style.display ="block";
                    resultsPage2.style.display ="none"
                    
                    lowHzGraph.style.display = "block";
                    highHzGraph.style.display = "none";
                    
                    rightArrow.style.display = "inline";
                    leftArrow.style.display ="none";
                };
            };
            if(e.target==spacebar||e.code=="Space")
            {
                spacebar.src =spacebarImageSource.textContent;
                
                
                if(e.target==spacebar){
                    
                    clearInterval(spaceMouseHold);
                    if(getComputedStyle(instructionPage3).display=="block")
                    {
                        enterHTMLContainer.style.display = 'inline';
                        enterHTMLContainer.appendChild(enter);
                        rightArrow.style.display="inline";
                        clearInterval(spaceMouseHold);
                        if(spacebarHoldToggle>=3){
                            instructionPage1.style.display="none";
                            instructionPage2.style.display="none";
                            instructionPage3.style.display="block";
                            step1.style.display="none";
                            step2.style.display="none";
                            step3.style.display="block";
                            step4.style.display="none";
                            
                        }
                        else{
                            step1.innerHTML="<h3>STEP 1:</h3><p>Make sure you <b>hold</b> the spacebar.</p>";
                            step1.appendChild(spacebar);
                            spacebarHoldToggle=0;
                            
                            clearInterval(spaceMouseHold);
                            oscillator.stop();
                        }
                    }else if(getComputedStyle(taskDisplay).display=="block")
                    {
                        if(spacebarHoldToggle>=3){
                            taskDisplay.innerHTML="";
                            body.style.display="";
                            
                            taskDisplay.appendChild(spacebar);
                            var prompt1=document.createElement('div');
                            prompt1.innerHTML="Keep adjusting sound with Spacebar.<br><br><br>";
                            spacebarHTMLContainer.innerHTML="";
                            taskDisplay.appendChild(prompt1);

                            taskDisplay.appendChild(enter);
                            var prompt2=document.createElement('div');
                            prompt2.innerHTML="Press Enter to proceed.";
                            taskDisplay.appendChild(prompt2);
                        }
                        else{
                            taskDisplay.innerHTML ="<p>Make sure you <b>hold</b> the spacebar.</p>";
                            taskDisplay.appendChild(spacebar);
                            spacebarHoldToggle=0;
                            clearInterval(spaceMouseHold);
                            oscillator.stop();
                        };
                    };
                }else{
                    if(getComputedStyle(instructionPage3).display=="block"){


                        taskDisplay.innerHTML="";
                        body.style.display="";
                        
                        taskDisplay.appendChild(spacebar);
                        var prompt1=document.createElement('div');
                        prompt1.innerHTML="Keep adjusting sound with Spacebar.<br><br><br>";
                        spacebarHTMLContainer.innerHTML="";
                        taskDisplay.appendChild(prompt1);

                        
                        var prompt2=document.createElement('div');
                        prompt2.innerHTML="<br><br><br>Press Enter to proceed.";
                        //enterHTMLContainer.appendChild(enter);
                        taskDisplay.appendChild(enter);
                        taskDisplay.appendChild(prompt2);
                        //enterHTMLContainer.style.display = 'inline';
                        
                        rightArrow.style.display="inline";
                        if(spacebarHoldToggle>=6){
                            
                            
                            instructionPage1.style.display="none";
                            instructionPage2.style.display="none";
                            instructionPage3.style.display="block";
                            step1.style.display="none";
                            step2.style.display="none";
                            step3.style.display="block";
                            step4.style.display="none";   
                        }
                        else{
                            step1.innerHTML="<h3>STEP 1:</h3><p>Make sure you <b>hold</b> the spacebar.</p>";
                            step1.appendChild(spacebar);
                            spacebarHoldToggle=0;
                            hzValue=0;
                        };
                    }
                    else if(getComputedStyle(taskDisplay).display=="block"){
                        if(spacebarHoldToggle>=6){
                            taskDisplay.innerHTML="";
                            body.style.display="";
                            
                            taskDisplay.appendChild(spacebar);
                            var prompt1=document.createElement('div');
                            prompt1.innerHTML="Keep adjusting sound with Spacebar.<br><br><br>";
                            spacebarHTMLContainer.innerHTML="";
                            taskDisplay.appendChild(prompt1);

                            taskDisplay.appendChild(enter);
                            var prompt2=document.createElement('div');
                            prompt2.innerHTML="Press Enter to proceed.";
                            taskDisplay.appendChild(prompt2);
                        }
                        else{
                            taskDisplay.innerHTML ="<p>Make sure you <b>hold</b> the spacebar.</p>";
                            taskDisplay.appendChild(spacebar);
                            spacebarHoldToggle=0;
                            oscillator.stop();
                        };
                    }
                };
            };
            if(e.code=="Enter"||e.target==enter){
                hzValue=0;
                
                if(spacebarHoldToggle >0){
                    spacebarHoldToggle=0;
                }
                
                if(getComputedStyle(step4).display=="block")
                {
                    instructionPage1.style.display="none";
                    instructionPage2.style.display="none";
                    instructionPage3.style.display="none";
                    step1.style.display="none";
                    step2.style.display="none";
                    step3.style.display="none";
                    step4.style.display="none";
                    taskDisplay.style.display="block";
                    oscillator.stop();
                    trial();
                }
                else if(getComputedStyle(taskDisplay).display=="block"){
                    
                    if(infoCurrentFrequency.innerHTML === "Current Frequency: No sound"){
                        
                    }else{
                        currentTaskHz = hz[taskMap.parameter1[currentTask]][taskMap.parameter2[currentTask]][taskMap.parameter3[currentTask]].push(oscillator.frequency.value);
                        
        //currentTaskHzLatency = hzLatency[taskMap.parameter1[currentTask]][taskMap.parameter2[currentTask]][taskMap.parameter3[currentTask]].push();
                        infoCurrentFrequency.innerHTML = "Current Frequency: No sound";
                        currentTask++;
                        taskDisplay.innerHTML="";
                        oscillator.stop();
                    };
                    
                    if(currentTask<taskMap.currentTask){
                        trial();
                    }else{
                        controls.style.display="block"
                        rightArrow.style.display="inline";
                        leftArrow.style.display="none";
                        displayResults();
                    }
                    
                };
            };
        };
    };
    
    document.addEventListener("mousedown",buttonPressedIn);
    document.addEventListener("keydown",buttonPressedIn);
    document.addEventListener("mouseup",buttonReleased);
    document.addEventListener("keyup",buttonReleased);
    
    function trial(){
        trialStart=[];

        
        taskDisplay.innerHTML="";
        
        taskInfographic.appendChild(infoTrialNo);
        infoTrialNo.innerHTML="Trial Number: "+(currentTask+1);
        
        taskInfographic.appendChild(infoTrialsRemaining);
        infoTrialsRemaining.innerHTML="Trials remaining: "+(taskMap.currentTask-(currentTask+1));
        
        taskInfographic.appendChild(infoVolumeGroup);
        
        taskInfographic.appendChild(infoVolume);
        
        
        taskInfographic.appendChild(infoFrequencyGroup);
        taskInfographic.appendChild(infoStartingFrequency);
        taskInfographic.appendChild(infoPan);
        taskInfographic.appendChild(infoCurrentFrequency);
        
        
        taskInfographic.style.display="inline";
        taskInfographic.style.alignItems="left";
        
        taskDisplay.appendChild(taskInfographic);
        
        if(taskMap.parameter1[currentTask] =="lowVol" || taskMap.parameter1[currentTask] =="medVol"|| taskMap.parameter1[currentTask] =="highVol")
        {

            if(taskMap.parameter1[currentTask]=="lowVol"){
                infoVolumeGroup.innerHTML="Volume level: Low volume";    
                gainValue=0.15;
                
                
            }
            else if(taskMap.parameter1[currentTask]=="medVol"){
                infoVolumeGroup.innerHTML="Volume level: Medium volume";
                gainValue=0.25;
                
            }
            else{
                infoVolumeGroup.innerHTML="Volume level: High volume";
                gainValue=0.50;
                
            };
            infoVolume.innerHTML="Volume: "+(20*Math.round(Math.log10(gainValue)))+"dB.";
        };
        if(taskMap.parameter2[currentTask]=="lows"||taskMap.parameter2[currentTask]=="highs"){
            if(taskMap.parameter2[currentTask]=="lows"){
                infoFrequencyGroup.innerHTML="Frequency Group: Low Frequency";
                hzValue=0;
                
            }else{
                infoFrequencyGroup.innerHTML="Frequency Group: High Frequency";
                hzValue=18000;
            };
        };
        if(taskMap.parameter3[currentTask]=="left" || taskMap.parameter3[currentTask]=="both"|| taskMap.parameter3[currentTask]=="right"){
            if(taskMap.parameter3[currentTask]=="left"){
                
                infoPan.innerHTML="Playing to: Left ear";
                panValue=-1;
            } else if(taskMap.parameter3[currentTask]=="both"){
                infoPan.innerHTML="Playing to: Both ears";
                panValue=0;        
            }else{
                infoPan.innerHTML="Playing to: Right ear";
                panValue=1;
            };
        };
        
        taskDisplay.appendChild(spacebarHTMLContainer);
        spacebarHTMLContainer.appendChild(spacebar);

    };


    function displayResults(){
        instructionPage1.style.display="none"
        instructionPage2.style.display="none";
        instructionPage3.style.display="none";
        taskDisplay.style.display ="none";
        resultsDisplay.style.display = "block";
        resultsPage1.style.display="block";
        resultsPage2.style.display="none";
        

        const lowVolLowHz = 
        [
            {x:-1,y:hz.lowVol.lows.left},
            {x:0,y:hz.lowVol.lows.both},
            {x:1,y:hz.lowVol.lows.right},
        ];
        const medVolLowHz = 
        [
            {x:-1,y:hz.medVol.lows.left},
            {x:0,y:hz.medVol.lows.both},
            {x:1,y:hz.medVol.lows.right},
        ];
        
        const highVolLowHz = 
        [
            {x:-1,y:hz.highVol.lows.left},
            {x:0,y:hz.highVol.lows.both},
            {x:1,y:hz.highVol.lows.right},
        ];
        
        
        const lowVolHighHz = 
        [
            {x:-1,y:hz.lowVol.highs.left},
            {x:0,y:hz.lowVol.highs.both},
            {x:1,y:hz.lowVol.highs.right},
        ];
        
        const medVolHighHz = 
        [
            {x:-1,y:hz.medVol.highs.left},
            {x:0,y:hz.medVol.highs.both},
            {x:1,y:hz.medVol.highs.right},
        ];
        
        const highVolHighHz = 
        [
            {x:-1,y:hz.highVol.highs.left},
            {x:0,y:hz.highVol.highs.both},
            {x:1,y:hz.highVol.highs.right},
        ];

        const lowHZ = new Chart('lowHz',
{
    type: "line",
    data: 
    {
        labels:
        [
            'Left ear',
            'Both ears',
            'Right ear'
        ],
        datasets: 
        [
            {
                data:lowVolLowHz,
                label:"Low Volume",
                pointbackgroundColor:"rgb(0,0,0)",
                borderColor:"rgb(0,0,0)"
            },
            {
                data:medVolLowHz,
                label:"Med Volume",
                pointbackgroundColor:"red",
                borderColor:"red"
            },
            {
                data:highVolLowHz,
                label:"High Volume",
                pointbackgroundColor:"green",
                borderColor:"green"
            },
        ]
    },
    options:
    {
        scales:
        {
            y:
            {
                title:
                {
                    display:true,
                    text:'Frequency (Hz)',
                    align:'center',
                },
                
            },
        },
        plugins:
        {
            title:
            {
                display:true,
                text:"Low Frequency (Hz) Responses.",
                align:'center',
                color:"rgb(0,0,0)",
                position:'top',
                font:{weight:"bold"}
            },
            legend:
            {
                display:true,
                position:"bottom",
                align: "center"
            },
        }
    },
},
);

const highHZ = new Chart("highHz", 
{
    type: "line",
    data: 
    {
        labels:
        [
            "Left ear",
            "Both ears",
            "Right ear"
        ],
        datasets: 
        [
            {
                data:lowVolHighHz,
                label:"Low Volume",
                borderColor: "rgb(0,0,0)",
                pointbackgroundColor:"rgb(0,0,0)"
            },
            {
                data:medVolHighHz,
                label:"Med Volume",
                borderColor:'red',
                pointbackgroundColor:'red'
            },
            {
                data:highVolHighHz,
                label:"High Volume",
                borderColor:'green',
                pointbackgroundColor:'green',
            },
        ],
    },
    options:
    {
        scales:
        {
            x:
            {
                border:{
                    display:true
                },
            },
            y:
            {           
                title:
                {
                    
                    display:true,
                    text:'Frequency (Hz)',
                    align:'center',
                },  
            },
        },
            plugins:
            {
                title:
                {
                    display: true,
                    text: "High Frequency (Hz) Responses.",
                    align:'center',
                    color:"rgb(0,0,0)",
                    position:'top',
                    font:{weight:"bold"}
                },
                legend:
                {
                    display:true,
                    position:"bottom",
                    align: "center"
                },
                },
            },    
        }
        );

        const savePDF = document.createElement('img');
        savePDF.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/save/savePDF/pdfImg.png"
        savePDF.id = 'savePDF';
        savePDF.className = 'controlButton';

        const saveFile = document.createElement('img');
        saveFile.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/save/saveRawFile/saveImg.png";
        saveFile.id = 'saveFile';
        saveFile.className = 'controlButton';



        controls.appendChild(saveFile);
        controls.appendChild(savePDF);
        
    }
    function opacity(y){
        y.style.opacity = 1;
        y.style.transitionDuration = '1s'};
        
        
        controls.appendChild(leftArrow);
        controls.appendChild(rightArrow);
        
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
        instaLink.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/socialMedia/instalogo/instagram link logo.png"
        
        instaLink.addEventListener('click',()=>{
            window.open("https://www.instagram.com/sapienindustry/");
        });
        
        const home = document.createElement('img');
        home.className = "BottomRowImageButton";
        home.id = "homeImage";
        home.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/home/homeButton.png";
        home.addEventListener('click',()=>{
            var a = document.createElement('a');
            a.href="/Users/lordyolo/Desktop/website/index.html";
            a.click();
        });
        
        document.addEventListener("keypress",(e)=>{
            console.log(e.code)
        })