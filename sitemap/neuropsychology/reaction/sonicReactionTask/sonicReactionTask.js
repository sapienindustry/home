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
const instructionHeading =document.querySelector("h3.subheading#instructionSubheading");

const backNavigator = document.querySelector(".backNavigator");
backNavigator.addEventListener("click",()=>{
    var a = document.createElement('a');
    a.href="/Users/lordyolo/Desktop/website/sitemap/neuropsychology/reaction/reaction.html";
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

const taskDisplay = document.querySelector(".task");

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

const playSoundButtonHTMLContainer = document.querySelector("div.buttonContainer#playSoundContainer");
const playSoundButtonImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/sound/soundButton.png")
const playSoundButtonPressedImgSource = document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/sound/soundButtonPressed.png")

const playSoundButton = document.createElement('img');
playSoundButton.src = playSoundButtonImageSource.textContent;
playSoundButton.className="taskInteractable";
playSoundButton.id="playSoundButton";
playSoundButtonHTMLContainer.appendChild(playSoundButton);

var prompt1 = document.createElement("div");
prompt1.className = "prompt";
prompt1.id = "prompt1";
taskDisplay.appendChild(prompt1);
const soundWave = document.createElement("audio");
soundWave.src = "/Users/lordyolo/Desktop/website/sitemap/neuropsychology/reaction/sonicReactionTask/440_30s.wav";

var currentTask = 0;
var timestampIndex = 0;

latency={};

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
var taskLength=5;

let start = false;

function playSound(){
    //play sound after a random period of time (between 1 second and 5 seconds);
    
    start = true;
    soundWave.play();
    var ResponseStartTime =performance.now()
    function responseLatency(){
        latency.responseLatency.push(performance.now()-ResponseStartTime);
    };
    responseLatencyObject = setInterval(responseLatency,1);
    //record latency in ms after sound is played
    //push into object
    //repeat function for a given number of times (say 5/12);
};

function beginTask(){
    prompt1.innerHTML = seconds +" seconds until the task begins.";
    taskDisplay.appendChild(prompt1);

    var TrialStartTime = performance.now();

    function trialLatency()
    {
        timestampIndex++;
        latency.trialLatency.push(performance.now()-TrialStartTime);
    };
    trialLatencyObject = setInterval(trialLatency,1);
    play = setTimeout(playSound,5000+Math.floor(Math.random()*12000));
    time = setInterval(countdown,1200);
};

function buttonPressedIn(e){
    if(e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target == playSoundButton || e.target == spacebar || e.code == "Space" || e.target == enter || e.code =="Enter"){
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
        soundWave.play();
        playSoundButton.src = playSoundButtonPressedImgSource.textContent;
        setTimeout(()=>{playSoundButton.src = playSoundButtonImageSource.textContent},200);
    };
    if(e.target ==spacebar||e.code=="Space"){
        soundWave.pause();
        spacebar.src = spacebarPressedImageSource.textContent;
    };
    if(e.code =="Enter"|| e.target==enter){
        enter.src=enterPressedImageSource.textContent;
    };
};
};

function buttonReleased(e){
    if(e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target == playSoundButton || e.target == spacebar || e.code == "Space" || e.code=="Enter"||e.taregt==enter){
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

                playSoundButton.style.display="block";

                enterHTMLContainer.style.display = "block";
                enterHTMLContainer.appendChild(enter);
            }
            else if(getComputedStyle(instructionPage3).display == "block")
            {
                taskDisplay.style.display="block";
                instructionPage1.style.display = "none";
                instructionPage2.style.display = "none";
                instructionPage3.style.display = "none";
                controls.style.display="none";
                instructionPage1.style.display = "none";
                taskDisplay.style.display = "inline";
                countdown();
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
        if(e.target == spacebar || e.code =="Space"){
            spacebar.src=spacebarImageSource.textContent;
            if(getComputedStyle(instructionPage3).display=="block")
            {
                step1.style.display="none";
                step2.style.display="none";
                step3.style.display="block";
            }
        };
        if(e.target==enter||e.code=="Enter")
        {
            enter.src = enterImageSource.textContent;
        };
        if(e.target == playSoundButton){
            
            playSoundButton.src = playSoundButtonImageSource.textContent;
            if(getComputedStyle(instructionPage3).display=="block")
            {
                step1.style.display="none";
                step2.style.display="block";
                step3.style.display="none";
            };
        };
    };
};

document.addEventListener("mousedown",buttonPressedIn);
document.addEventListener("keydown",buttonPressedIn);
document.addEventListener("mouseup",buttonReleased);
document.addEventListener("keyup",buttonReleased);

controls.appendChild(leftArrow);
controls.appendChild(rightArrow);

let seconds = 5;
const listenImage = document.createElement("img");
listenImage.src = "/Users/lordyolo/Desktop/website/sitemap/assets/taskProbes/auditory/listenPrompt.png";
listenImage.width = 350;
listenImage.height = 111;
listenImage.style.display = 'inline-block';

function countdown(){
    if(seconds>1){
        seconds--;
        prompt1.innerHTML = seconds +" seconds until the task begins.";
        prompt1.style.display="inline";
        taskDisplay.appendChild(prompt1);
    }else{
        clearInterval(time);
        prompt1.innerHTML = "<h3>Press space bar when you hear the tone.</h3>";
        taskDisplay.appendChild(prompt1);
        taskDisplay.appendChild(listenImage);
    };
};


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


