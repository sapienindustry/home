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

const backNavigator = document.querySelector(".backNavigator");
backNavigator.addEventListener('click',()=>{
    var a = document.createElement('a');
    a.href="/Users/lordyolo/Desktop/website/sitemap/neuropsychology/memory/memory.html";
    a.click()
})

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

const taskDisplay = document.querySelector(".task");

const clockHTMLContainer = document.querySelector("div.prompt#clockPrompt");
const clockImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/taskProbes/visual/clock/clock.png");


const clock = document.createElement('img');
clock.src = clockImageSource.textContent;
clock.id="clock";
clockHTMLContainer.appendChild(clock);

const enterHTMLContainer = document.querySelector("div.buttonContainer#enterContainer");
const enterImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/enter/enterButton.png");
const enterPressedImageSource = document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/enter/enterButtonPressed.png");

const enter = document.createElement('img');
enter.src = enterImageSource.textContent;
enter.className="taskInteractable";
enter.id="enter";
enterHTMLContainer.appendChild(enter);

const playSoundButtonHTMLContainer = document.querySelector("div.buttonContainer#playSoundContainer");
const playSoundButtonImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/sound/soundButton.png")
const playSoundButtonPressedImgSource = document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/sound/soundButtonPressed.png")

const playSoundButton = document.createElement('img');
playSoundButton.src = playSoundButtonImageSource.textContent;
playSoundButton.className="taskInteractable";
playSoundButton.id="playSoundButton";
playSoundButtonHTMLContainer.appendChild(playSoundButton);

const practiceSlider = document.getElementById("practiceSlider");

var prompt1 = document.createElement("div");
prompt1.className = "prompt";
prompt1.id = "prompt1";



function playOsci(){
    var ac = new AudioContext();
    var gain = new GainNode(ac, {gain:0.015});
    oscillator = new OscillatorNode(ac,{frequency:440});
    oscillator.connect(gain);
    gain.connect(ac.destination);
    oscillator.start();
    oscillator.stop(ac.currentTime+1);
}

function buttonPressedIn(e){
    if(e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target == playSoundButton || e.target == enter || e.code =="Enter"){
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
        if(e.target == playSoundButton){
            if(getComputedStyle(step1).display=="block"){
            playOsci();
            playSoundButton.src = playSoundButtonPressedImgSource.textContent;
            setTimeout(()=>{playSoundButton.src = playSoundButtonImageSource.textContent},1200);
            }};
            if(e.code =="Enter"|| e.target==enter){
                enter.src=enterPressedImageSource.textContent;
            };
        
    };
};

function buttonReleased(e){
    if(e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target == playSoundButton || e.target == enter || e.code =="Enter"){
        if(e.target == rightArrow || e.code == "ArrowRight"){
            rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png";
            if(getComputedStyle(instructionPage1).display =="block")
            {
                instructionPage1.style.display="none";
                instructionPage2.style.display="block";
                instructionPage3.style.display="none";
                taskDisplay.style.display="none";
                leftArrow.style.display="inline";
                rightArrow.style.display="inline";
            }
            else if(getComputedStyle(instructionPage2).display == "block")
            {
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "block";
                
                step1.style.display="block";
                step2.style.display="none";
                step3.style.display="none";
                
                rightArrow.style.display="inline";
                taskDisplay.style.display="none";
                
                playSoundButtonHTMLContainer.style.textAlign ="center";
                playSoundButtonHTMLContainer.style.width ="450px";
                playSoundButton.style.margin='auto';
                playSoundButton.style.display='block';
                
                
            }};
            if(e.code=="Enter"||e.target==enter)
            {
                taskDisplay.style.display="block";
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "none";
                step1.style.display = "none";
                step2.style.display = "none";
                step3.style.display = "none";
                controls.style.display="none";
                taskDisplay.style.display = "inline";
                displayTask();
                currentTask++;
            };
        };
        if(e.target == leftArrow || e.code =="ArrowLeft")
        {
            leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
            if(getComputedStyle(instructionPage2).display == "block")
            {
                instructionPage1.style.display="block";
                instructionPage2.style.display="none";
                instructionPage3.style.display="none";
                leftArrow.style.display ="none";
                rightArrow.style.display="inline";
            };
            if(getComputedStyle(instructionPage3).display == "block")
            {
                instructionPage1.style.display="none";
                instructionPage2.style.display="block";
                instructionPage3.style.display="none";
                rightArrow.style.display="inline";
            };
        };
        
        if(e.target == playSoundButton){
            playSoundButton.src = playSoundButtonImageSource.textContent;
          timeLeft=3;
            if(getComputedStyle(instructionPage3).display=="block" && getComputedStyle(step1).display=="block")
            {
                controls.style.display="none";
                const ac1 = new AudioContext();
                const oscillator1 = new OscillatorNode(ac1,{frequency:practiceSlider.value});
                const gain1 = new GainNode(ac1,{gain:0.015});
                

                
                prompt1.style.textAlign="center";
                clockHTMLContainer.style.textAlign ="center";
                clockHTMLContainer.style.width ="450px";
                clock.style.margin='auto';
                clock.style.display='block';
              
                

                setTimeout(()=>
                {
                    step1.style.display="none";
                    step2.style.display="block";
                    step3.style.display="none";
                    step4.style.display="none";
                    if(getComputedStyle(step2).display=="block"){
                        
                        function practiceTime(){
                            timeLeft--;
                            
                            prompt1.innerHTML=timeLeft;


                            //clockHTMLContainer.style.display="block";
                            

                            clockHTMLContainer.appendChild(prompt1);
                            step2.appendChild(clock);


                            if(timeLeft==0 || timeLeft <0){
                                clearInterval(timeDown);
                                step1.style.display="none";
                                step2.style.display="none";
                                step3.style.display="block";
                                step4.style.display="none";


                                
                                practiceSlider.addEventListener("mousedown",(e)=>{
                                    const ac1 = new AudioContext();
                                    const oscillator1 = new OscillatorNode(ac1,{frequency:practiceSlider.value});
                                    const gain1 = new GainNode(ac1,{gain:0.015});
                                    oscillator1.connect(gain1);
                                    gain1.connect(ac1.destination);  
                                    oscillator1.start();

                                    practiceSlider.addEventListener("input",()=>{                                   
                                        oscillator1.frequency.value=practiceSlider.value;
                                        
                                    });
                                    practiceSlider.addEventListener("mouseup",(e)=>{
                                        oscillator1.stop(ac1.currentTime+1);
                                        
                                        enterHTMLContainer.style.width="450px";
                                        enterHTMLContainer.style.textAlign="center";
                                        enter.style.margin="auto";
                                        enter.style.display="block";
                                        enterHTMLContainer.style.display="block";
                                        enterHTMLContainer.appendChild(enter);

                                        step1.style.display="none";
                                        step2.style.display="none";
                                        step3.style.display="none";
                                        step4.style.display="block";

                                        
                                        });
                                    }
                                    );
                                }
                        }
                        timeDown=setInterval(() => {
                            practiceTime();
                        }, 1200);

                    }
                },1200);
            }
            
            };
        }
    
    

document.addEventListener("mousedown",buttonPressedIn);
document.addEventListener("keydown",buttonPressedIn);
document.addEventListener("mouseup",buttonReleased);
document.addEventListener("keyup",buttonReleased);

controls.appendChild(leftArrow);
controls.appendChild(rightArrow);




let isPlaying;
let oscillator;

const taskLength = 12;
let currentTask = 0;
let timeLeft=2;
let appraisal = {
    userInput:[],
    answer:[]
};



function practiceTask(){
    const practice = document.createElement('div');
    practice.className = 'practice';
    taskDisplay.appendChild(practice);
    
    const heading = document.createElement('div');
    heading.className='headers';
    heading.innerHTML= '<h3>INSTRUCTIONS<br>STEP 1:</h3><p>Memorize the following soundwave.</p>';
    
    const prompts = document.createElement('div');
    prompts.className = 'prompts';
    prompts.id = 'prompts1';
    
    const prompts2 = document.createElement('div');
    prompts2.className = 'prompts';
    prompts2.id = 'prompts2';
    
    const prompts3 = document.createElement('div');
    prompts3.className = 'prompts';
    prompts3.id = 'prompts3';
    
    const play = document.createElement('button');
    play.id = 'play';
    play.className = 'button';
    play.innerHTML = 'Play';
    
    const frequency = document.createElement('input');
    frequency.type='range';
    frequency.className = 'slider';
    frequency.id = 'osc';
    frequency.step = 1;
    frequency.min = 120;
    frequency.max = 1200;
    frequency.value = 0;
    
    const playOsc = document.createElement('button');
    playOsc.innerHTML = 'Play';
    playOsc.className = 'button';
    playOsc.id='playOsc';
    playOsc.style.display = 'none';
    playOsc.style.backgroundColor = 'green';
    
    
    var ac = new AudioContext();
    var gain = new GainNode(ac, {gain:0.015});
    countPlays =0;
    countCont = 0;
    
    function delayedStop(x){
        x.style.backgroundColor = 'green';
        x.innerHTML = 'Play';
        showOsc.style.display = 'inline'}
        
        function SWdelayedStop(x){
            x.style.backgroundColor = 'orange';
            x.innerHTML = 'Soundwave';
            clearTimeout()};
            
            
            function playOsci(){
                oscillator = new OscillatorNode(ac,{frequency:440});
                oscillator.connect(gain);
                gain.connect(ac.destination);
                oscillator.start();
                oscillator.stop(ac.currentTime+1)
            }
            
            play.addEventListener('click',function(){
                if(play.innerHTML =='Play'){
                    var ds = setTimeout(delayedStop,1200,play);
                    playOsci();
                    play.innerHTML='Playing...';
                    play.style.backgroundColor = 'red';
                    //setTimeout(delayedStop(play),1200)
                }
                if(play.innerHTML =='Soundwave'){
                    var ds = setTimeout(SWdelayedStop,1200,play);
                    playOsci();
                    play.innerHTML='Playing...';
                    play.style.backgroundColor = 'red';
                    showOsc.style.display = 'none';
                }
                showOsc.addEventListener('click',()=>{
                    if(play.innerHTML =='Playing...'){
                        play.style.backgroundColor = 'orange';
                        play.innerHTML = 'Soundwave'};
                        clearTimeout(ds)})
                        
                        
                    });
                    
                    playOsc.addEventListener('click',()=>{
                        oscillator.stop();
                        play.style.backgroundColor = 'orange';
                        play.innerHTML = 'Soundwave';
                        
                        
                        countPlays++;
                        if(playOsc.innerHTML == 'Play' && countPlays==0){
                            rangeOsc.connect(gain);
                            gain.connect(ac.destination);
                            
                            playOsc.innerHTML = 'Stop';
                            playOsc.style.backgroundColor = 'red';
                            prompts2.innerHTML ='<br>Press "Stop" to stop the adjusted sound';
                            
                            oscillator.start()}
                            if(playOsc.innerHTML == 'Play' && countPlays>0){
                                gain = new GainNode(ac, {gain:0.015});
                                rangeOsc = new OscillatorNode(ac,{frequency:frequency.value});
                                rangeOsc.connect(gain);
                                gain.connect(ac.destination);
                                rangeOsc.start();
                                
                                playOsc.innerHTML = 'Stop';
                                playOsc.style.backgroundColor = 'red';
                                prompts2.innerHTML ='<br>Press "Stop" to stop the adjusted sound'}
                                else if(playOsc.innerHTML == 'Stop' && countPlays>0){
                                    rangeOsc.stop();
                                    playOsc.innerHTML = 'Play';
                                    playOsc.style.backgroundColor = 'lightgreen';
                                    prompts2.innerHTML ='<br>Press "Play" to hear the adjusted sound'}
                                    
                                    play.addEventListener('click',()=>{
                                        rangeOsc.stop();
                                        playOsc.innerHTML = 'Play';
                                        playOsc.style.backgroundColor = 'lightgreen';                
                                    })
                                    
                                })
                                frequency.addEventListener('input',function() {
                                    rangeOsc.frequency.value = this.value;
                                    
                                    if(frequency.value == 440){
                                        frequency.disabled=true;
                                        showOsc.style.display = 'inline';
                                        rangeOsc.stop();
                                        taskDisplay.innerHTML='';
                                        prompts.innerHTML = '<h3>INSTRUCTIONS<br>STEP 3:';
                                        prompts3.innerHTML = '<br>Now that the sounds match, click "Continue" and move on to the next task.';
                                        heading.innerHTML="";
                                        //taskDisplay.appendChild(tempDiv2);
                                        taskDisplay.appendChild(prompts);
                                        taskDisplay.appendChild(showOsc);
                                        taskDisplay.appendChild(prompts3);
                                        
                                        
                                        playOsc.innerHTML = 'Play';
                                        playOsc.style.backgroundColor='lightgreen';
                                        
                                        
                                    }else if(frequency.value>442 && frequency.value<650){
                                        prompts2.innerHTML = '<br>Move the slider to the left to match the sounds.';
                                        taskDisplay.appendChild(prompts2);}
                                        else if(frequency.value>300 && frequency.value<438){
                                            prompts2.innerHTML = '<br>Move the slider to the right to match the sounds.';
                                            
                                        }
                                    });

                                    const tempDiv = document.createElement('div');
                                    tempDiv.innerHTML = '<br><br><br>';
                                    
                                    const tempDiv1 = document.createElement('div');
                                    tempDiv1.innerHTML = '<br><br><br>';
                                    
                                    const tempDiv2 = document.createElement('div');
                                    tempDiv2.innerHTML = '<br><br><br>';
                                    
                                    const showOsc = document.createElement('button');
                                    showOsc.innerHTML = 'Continue';
                                    showOsc.className = 'button';
                                    showOsc.style.display = 'none';
                                    
                                    showOsc.addEventListener('click',()=>{
                                        if(play.innerHTML =='Playing...'){
                                            clearTimeout(delayedStop);
                                            play.style.backgroundColor = 'orange';
                                            play.innerHTML = 'Soundwave'};
                                            
                                            if(countCont==0){
                                                countCont ++;
                                                heading.innerHTML = '<h3>INSTRUCTIONS<br>STEP 2:</h3><p>Press play and move the slider until the the play sound matches the soundwave.</h2>';
                                                play.innerHTML = 'Soundwave';
                                                play.style.backgroundColor = 'orange';
                                                oscillator.stop();
                                                showOsc.style.display = 'none';
                                                playOsc.style.display = 'inline';
                                                frequency.style.display = 'inline';
                                            }else if (countCont==1){  
                                                countCont ++;      
                                                taskDisplay.innerHTML='';
                                                heading.innerHTML = '<h2>Well done on completing the practice round!</h2><br><br> Press "Continue" to proceed to the task. <br>';
                                                taskDisplay.appendChild(heading);
                                                taskDisplay.appendChild(tempDiv)
                                                taskDisplay.appendChild(showOsc);
                                            }
                                            else if (countCont>1){
                                                taskDisplay.innerHTML='';
                                                displayTask();}
                                            })
                                            
                                            practice.appendChild(heading);
                                            practice.appendChild(play);
                                            practice.appendChild(prompts);
                                            practice.appendChild(tempDiv1);
                                            practice.appendChild(frequency);
                                            practice.appendChild(tempDiv);
                                            practice.appendChild(playOsc);
                                            
                                            practice.appendChild(showOsc);
                                            practice.appendChild(prompts2);
                                            
                                            
                                            play.style.display='inline';    
                                        }
                                        
                                        
                                        
                                        function displayTask(){
                                            
                                            
                                            const tempDiv = document.createElement('div');
                                            tempDiv.innerHTML = '<br><br><br>';
                                            
                                            const tempDiv1 = document.createElement('div');
                                            tempDiv1.innerHTML = '<br><br><br>';
                                            
                                            const tempDiv2 = document.createElement('div');
                                            tempDiv2.innerHTML = '<br><br><br>';
                                            
                                            const cont = document.createElement('button');
                                            cont.innerHTML = 'Continue';
                                            cont.className = 'button';
                                            cont.style.display = 'none';
                                            
                                            cont.addEventListener('click',()=>{
                                                currentTask++;
                                                
                                                appraisal.userInput.push(parseInt(frequency.value))
                                                if(currentTask<taskLength){
                                                    timeLeft = 30;
                                                    rangeOsc.stop();
                                                    taskDisplay.innerHTML ='';
                                                    displayTask();
                                                }else{
                                                    rangeOsc.stop();
                                                    results();
                                                }
                                                
                                            }
                                            )
                                            
                                            const beginTask = document.createElement('button');
                                            beginTask.innerHTML = 'Begin';
                                            beginTask.className = 'button';
                                            beginTask.style.display = 'none';
                                            beginTask.style.backgroundColor = 'orange'
                                            beginTask.addEventListener('click',begin)
                                            
                                            const task = document.createElement('div');
                                            task.className = 'taskCont';
                                            taskDisplay.appendChild(task);
                                            
                                            const heading = document.createElement('div');
                                            heading.className='headers';
                                            heading.innerHTML= '<h2>Listen to the following soundwave.</h2>';
                                            
                                            const prompts = document.createElement('div');
                                            prompts.className = 'prompts';
                                            prompts.id = ['prompts1'];
                                            
                                            const prompts2 = document.createElement('div');
                                            prompts2.className = 'prompts';
                                            prompts2.id = ['prompts2'];
                                            
                                            const play = document.createElement('button');
                                            play.id = 'playTask';
                                            play.className = 'button';
                                            play.innerHTML = 'Play';
                                            play.style.backgroundColor = 'lightgreen';
                                            
                                            const frequency = document.createElement('input');
                                            frequency.type='range';
                                            frequency.className = 'slider';
                                            frequency.id = 'osc';
                                            frequency.step = 1;
                                            frequency.min = 120;
                                            frequency.max = 1200;
                                            frequency.value = 0;
                                            
                                            const playOsc = document.createElement('button');
                                            playOsc.innerHTML = 'Play';
                                            playOsc.className = 'button';
                                            playOsc.id='playOsc';
                                            playOsc.style.display = 'none';
                                            playOsc.style.backgroundColor = 'lightgreen';
                                            
                                            
                                            const ac = new AudioContext();
                                            var gain = new GainNode(ac, {gain:0.015});
                                            countPlays =0;
                                            
                                            function delayedStop(x){
                                                x.style.backgroundColor = 'lightgreen';
                                                x.innerHTML = 'Play';
                                                taskDisplay.appendChild(beginTask);
                                                prompts.innerHTML = '<br><br>Press Begin to begin timer<br>';
                                                taskDisplay.appendChild(prompts);
                                                beginTask.style.display = 'inline';
                                                play.style.display = 'none';}
                                                
                                                
                                                function returnRand(){
                                                    x = Math.floor(Math.random()*frequency.max);  
                                                    appraisal.answer.push(x);
                                                    return x}
                                                    
                                                    
                                                    returnRand();
                                                    
                                                    function playOsci(x){
                                                        oscillator = new OscillatorNode(ac,{frequency:x});
                                                        x = Math.floor((Math.random()*1200)+120);
                                                        oscillator.connect(gain);
                                                        gain.connect(ac.destination);
                                                        oscillator.start();
                                                        oscillator.stop(ac.currentTime+1)
                                                    }
                                                    
                                                    play.addEventListener('click',function(){ 
                                                        
                                                        cont.style.display = 'none';
                                                        beginTask.style.display = 'none';
                                                        if(play.innerHTML =='Play'){
                                                            setTimeout(delayedStop,1200,play);
                                                            playOsci(x);
                                                            play.innerHTML='Playing...';
                                                            play.style.backgroundColor = 'red';
                                                            //setTimeout(delayedStop(play),1200)
                                                        }
                                                    });
                                                    
                                                    frequency.addEventListener('input',function() {
                                                        rangeOsc.frequency.value = this.value;
                                                    })
                                                    
                                                    playOsc.addEventListener('click',()=>{
                                                        cont.style.display = 'inline';
                                                        oscillator.stop();
                                                        play.style.backgroundColor = 'orange';
                                                        play.innerHTML = 'Soundwave';
                                                        
                                                        countPlays++;
                                                        
                                                        if(playOsc.innerHTML == 'Play' && countPlays==0){
                                                            rangeOsc.connect(gain);
                                                            gain.connect(ac.destination);
                                                            
                                                            playOsc.innerHTML = 'Stop';
                                                            playOsc.style.backgroundColor = 'red';
                                                            prompts2.innerHTML ='<br>Press "Stop" to stop the adjusted sound';
                                                            
                                                            oscillator.start()}
                                                            if(playOsc.innerHTML == 'Play' && countPlays>0){
                                                                gain = new GainNode(ac, {gain:0.015});
                                                                rangeOsc = new OscillatorNode(ac,{frequency:frequency.value});
                                                                rangeOsc.connect(gain);
                                                                gain.connect(ac.destination);
                                                                rangeOsc.start();
                                                                
                                                                playOsc.innerHTML = 'Stop';
                                                                playOsc.style.backgroundColor = 'red';
                                                                prompts2.innerHTML ='<br>Press "Stop" to stop the adjusted sound';
                                                            }
                                                            else if(playOsc.innerHTML == 'Stop' && countPlays>0){
                                                                rangeOsc.stop();
                                                                playOsc.innerHTML = 'Play';
                                                                playOsc.style.backgroundColor = 'lightgreen';
                                                                prompts2.innerHTML ='<br>Press "Play" to hear the adjusted sound'}
                                                                
                                                                play.addEventListener('click',()=>{
                                                                    rangeOsc.stop();
                                                                    playOsc.innerHTML = 'Play';
                                                                    playOsc.style.backgroundColor = 'lightgreen';                
                                                                })
                                                                
                                                            });
                                                            
                                                            
                                                            
                                                            function begin(){
                                                                beginTask.style.display = 'none';
                                                                heading.innerHTML= '<h2>Use the slider to play the sound you heard.</h2>';
                                                                
                                                                time();
                                                                var timer = setInterval(time,1200);
                                                                function time(){
                                                                    // document.getElementsByClassName('copyright')[0].style.margin= "auto";
                                                                    // document.getElementsByClassName('copyright')[0].style.display= "block";
                                                                    //document.getElementsByClassName('copyright')[0].style.width= "120%";
                                                                    
                                                                    
                                                                    if(timeLeft>=2){
                                                                        taskDisplay.innerHTML = '<h1><br><br><br><br><br><br><br>'+ timeLeft+' seconds remaining</h1>'
                                                                        prompts.innerHTML= 'Keep the sound you heard in mind for the next question.';
                                                                        taskDisplay.appendChild(prompts);
                                                                        
                                                                    }else if(timeLeft==1){
                                                                        taskDisplay.innerHTML = '<h1><br><br><br><br><br><br><br>'+ timeLeft+' second remaining</h1>';
                                                                        prompts.innerHTML= 'Keep the sound you heard in mind for the next question.';
                                                                        taskDisplay.appendChild(prompts);
                                                                        
                                                                    }else if (timeLeft==0){
                                                                        clearInterval(timer);
                                                                        taskDisplay.innerHTML ='';
                                                                        var reminder = document.createElement("audio");
                                                                        reminder.src="/Users/lordyolo/Desktop/website/sitemap/neuropsychology/memory/G5 jingle.m4a";
                                                                        task.appendChild(reminder);
                                                                        reminder.volume=0.15;
                                                                        reminder.play();
                                                                        taskDisplay.appendChild(task);
                                                                        task.appendChild(playOsc);
                                                                        task.appendChild(prompts2)
                                                                        task.appendChild(tempDiv1);
                                                                        task.appendChild(frequency);
                                                                        task.appendChild(tempDiv);
                                                                        task.appendChild(beginTask);
                                                                        task.appendChild(cont);
                                                                        
                                                                        
                                                                        cont.style.display = 'none';
                                                                        frequency.style.display = 'inline';
                                                                        playOsc.style.display = 'inline';
                                                                    }
                                                                    timeLeft--}
                                                                }
                                                                
                                                                task.appendChild(heading);
                                                                task.appendChild(prompts2);
                                                                task.appendChild(tempDiv);
                                                                task.appendChild(tempDiv2);
                                                                task.appendChild(play);
                                                                task.appendChild(cont);
                                                                
                                                            }
                                                            
                                                            
                                                            function results(){
                                                                const tempDiv = document.createElement('div');
                                                                tempDiv.innerHTML = '<br><br><br>';
                                                                taskDisplay.innerHTML = '';
                                                                
                                                                body.style.width= "120%";
                                                                
                                                                //document.getElementsByClassName('copyright')[0].style.textAlign = "center";
                                                                document.getElementsByClassName('copyright')[0].style.margin= "auto";
                                                                document.getElementsByClassName('copyright')[0].style.display= "block";
                                                                document.getElementsByClassName('copyright')[0].style.width= "120%";
                                                                
                                                                
                                                                
                                                                
                                                                function mean(x) {
                                                                    var count = 0;
                                                                    var total = 0;
                                                                    
                                                                    Array.from(x).forEach(function(item,index){
                                                                        total += item;
                                                                        count++;            
                                                                    });
                                                                    return total/count;
                                                                };
                                                                
                                                                var Bardata =[{
                                                                    x: ['<b>Actual Hz</b>','<b>Recalled Hz</b>'],
                                                                    y:[mean(appraisal.answer),mean(appraisal.userInput)],
                                                                    name:['<b>Actual Answer</b>','<b>Your Answer</b>'],
                                                                    type:'bar',
                                                                    text: [mean(appraisal.answer),mean(appraisal.userInput)],
                                                                    textposition: 'auto',
                                                                    marker: {
                                                                        color: ['red','green'],
                                                                        opacity: 1,
                                                                        line: {
                                                                            color: 'black',
                                                                            width: 2.2
                                                                        }},
                                                                        
                                                                        
                                                                    }];
                                                                    var Barlayout = 
                                                                    {
                                                                        title: {
                                                                            text:'<b>Results</b>',
                                                                            pad:5,
                                                                            font:
                                                                            {
                                                                                color:'black',
                                                                                family: 'Helvetica',
                                                                                size:25
                                                                            },
                                                                        },
                                                                        xaxis: 
                                                                        {
                                                                            title:
                                                                            {
                                                                                font:{
                                                                                    size:16,
                                                                                    color:' black'
                                                                                },
                                                                                text:'<b>Average Frequency Played (Hz) Compared to Frequency Recalled (Hz).</b>',
                                                                                standoff:30
                                                                            }
                                                                        },
                                                                        yaxis: 
                                                                        {
                                                                            title: 
                                                                            {
                                                                                font:{size:16,color:'black'},
                                                                                text: '<b>Frequency/Pitch<br>(Hz)</b>',
                                                                                standoff:30
                                                                            }
                                                                        },
                                                                        //barmode: 'stack',
                                                                        font: 
                                                                        {
                                                                            family: 'Helvetica',
                                                                            color:'black',
                                                                            size: 20
                                                                        },  
                                                                        paper_bgcolor:'white',
                                                                        plot_bgcolor:'white',
                                                                    };
                                                                    
                                                                    const barPlot = document.createElement('div');
                                                                    barPlot.id = 'barPlot';
                                                                    barPlot.style.display='inline-block';
                                                                    
                                                                    barPlot.style.alignItems='center';
                                                                    
                                                                    
                                                                    const range = (start, end, step = 1) => {
                                                                        let output = [];
                                                                        if (typeof end === 'undefined') {
                                                                            end = start;
                                                                            start = 0;
                                                                        }
                                                                        for (let i = start+1; i < end+1; i += step) {
                                                                            output.push(i);
                                                                        }
                                                                        return output;
                                                                    };
                                                                    
                                                                    range(appraisal.answer.length);
                                                                    
                                                                    var lineDataAns = {
                                                                        x:range(appraisal.answer.length),
                                                                        y:appraisal.answer,
                                                                        mode:'line',
                                                                        name:'Random Soundwave',
                                                                        line: {
                                                                            color:'green',
                                                                            dash: 'solid',
                                                                            width: 4
                                                                        }
                                                                    }
                                                                    
                                                                    var lineDataUser={
                                                                        x:range(appraisal.userInput.length),
                                                                        y:appraisal.userInput,
                                                                        type:'line',
                                                                        name:'What you recalled',
                                                                        line: {
                                                                            color:'red',
                                                                            dash: 'dot',
                                                                            width: 4
                                                                        }
                                                                    }
                                                                    
                                                                    var lineData = [lineDataUser,lineDataAns];
                                                                    
                                                                    var Linelayout = {
                                                                        title: 
                                                                        {
                                                                            text:'<b>Results</b>',
                                                                            pad:5,
                                                                            font:
                                                                            {
                                                                                color:'black',
                                                                                family: 'Helvetica',
                                                                                size:25
                                                                            },
                                                                        },
                                                                        
                                                                        xaxis: {
                                                                            title:
                                                                            {
                                                                                font:{size:16,color:'black'},
                                                                                text:'<b>Average Frequency Played (Hz) Compared to Frequency Recalled (Hz).<br>Per task.</b>',
                                                                                standoff:30
                                                                            },
                                                                            minor:{
                                                                                gridcolor:'grey'
                                                                            }
                                                                        },
                                                                        yaxis: {
                                                                            title: 
                                                                            {
                                                                                font:{size:16,color:'black'},
                                                                                text: '<b>Frequency/Pitch<br>(Hz)</b>',
                                                                                standoff:30
                                                                            },
                                                                            minor:{
                                                                                gridcolor:'grey'
                                                                            }
                                                                        },
                                                                        legend: {
                                                                            y: 0.5,
                                                                            traceorder: 'reversed',
                                                                            font: {
                                                                                size: 16
                                                                            }
                                                                        },
                                                                        font: 
                                                                        {
                                                                            family: 'Helvetica',
                                                                            color:'black',
                                                                            size: 20
                                                                        },  
                                                                        paper_bgcolor:'white',
                                                                        plot_bgcolor:'white'
                                                                    };
                                                                    
                                                                    const linePlot = document.createElement('div');
                                                                    linePlot.id = 'linePlot';
                                                                    linePlot.style.display='none';
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    const togglePlot = document.createElement('button');
                                                                    togglePlot.className='button';
                                                                    togglePlot.id = 'next';
                                                                    togglePlot.style.display="block";
                                                                    togglePlot.style.margin="auto"
                                                                    
                                                                    
                                                                    const rightArrow = document.createElement('img');
                                                                    rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"
                                                                    rightArrow.width = 50;
                                                                    rightArrow.height = 50;
                                                                    
                                                                    const leftArrow = document.createElement('img');
                                                                    leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"
                                                                    leftArrow.width = 50;
                                                                    leftArrow.height = 50;
                                                                    leftArrow.style.display = "none";
                                                                    leftArrow.addEventListener('click',function(){
                                                                        togglePlot.style.display="block";
                                                                        togglePlot.style.margin="auto";
                                                                        rightArrow.style.display = 'block';
                                                                        leftArrow.style.display = 'none';
                                                                        linePlot.style.display='none';
                                                                        barPlot.style.display='inline-block';
                                                                        barPlot.style.margin='auto';
                                                                    });
                                                                    
                                                                    
                                                                    togglePlot.appendChild(rightArrow);
                                                                    togglePlot.appendChild(leftArrow);
                                                                    rightArrow.addEventListener('click',function(){
                                                                        togglePlot.style.display="block";
                                                                        togglePlot.style.margin="auto";
                                                                        rightArrow.style.display='none';
                                                                        leftArrow.style.display = 'inline';
                                                                        linePlot.style.display='inline-block';
                                                                        barPlot.style.display='none';
                                                                    });
                                                                    
                                                                    
                                                                    Plotly.newPlot(barPlot, Bardata,Barlayout);
                                                                    Plotly.newPlot(linePlot,lineData,Linelayout)
                                                                    
                                                                    
                                                                    
                                                                    
                                                                    //body.style.width ="120%";
                                                                    body.appendChild(taskDisplay)
                                                                    taskDisplay.appendChild(barPlot);
                                                                    taskDisplay.appendChild(linePlot);
                                                                    
                                                                    taskDisplay.appendChild(togglePlot);
                                                                    
                                                                    
                                                                }
                                                                
                                                                
                                                                
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
                                                                    