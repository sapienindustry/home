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
rightArrow.width = 45;
rightArrow.height = 45;
rightArrow.className = "controlButton";
rightArrow.id= "rightArrow";

const leftArrow = document.createElement("img");
leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
leftArrow.width = 45;
leftArrow.height = 45;
leftArrow.className = "controlButton";
leftArrow.id= "leftArrow";
leftArrow.style.display="none";

const taskDisplay = document.querySelector(".task");

const spacebarHTMLContainer = document.querySelector("div.buttonContainer#spacebarContainer");
const spacebarImageSource= document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/spacebar/spaceBar.png")
const spacebarPressedImageSource = document.createTextNode("/Users/lordyolo/Desktop/website/sitemap/assets/buttons/spacebar/spaceBarPressed.png")

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

var prompt1 = document.createElement("div");
prompt1.className = "prompt";
prompt1.id = "prompt1";

taskObject = 
{
};

taskObject.metrics={};
taskObject.metrics.buttonDown={};
taskObject.metrics.buttonDown.spacebar={};
taskObject.metrics.buttonDown.rightArrow={};
taskObject.metrics.buttonDown.leftArrow={};

taskObject.metrics.buttonUp={};
taskObject.metrics.buttonUp.spacebar={};
taskObject.metrics.buttonUp.rightArrow={};
taskObject.metrics.buttonUp.leftArrow={};

taskObject.displayControl={};
taskObject.displayControl.currentTask=[];
taskObject.displayControl.taskLength=[];

colourFromWhite =255;
colourFromBlack =0;
intervalToggler = 0;
currentTask=0;

function increment()
{
    //white to red
    if(currentTask==1)
    {
        colourFromWhite--;

        body.style.backgroundColor="rgb(255,"+colourFromWhite+","+colourFromWhite+")";
        taskDisplay.style.backgroundColor="rgb(255,"+colourFromWhite+","+colourFromWhite+")";
        container.style.backgroundColor="rgb(255,"+colourFromWhite+","+colourFromWhite+")";
    };
    //white to green
    if(currentTask==2)
    {
        colourFromWhite--;

        body.style.backgroundColor="rgb("+colourFromWhite+",255,"+colourFromWhite+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromWhite+",255,"+colourFromWhite+")";
        container.style.backgroundColor="rgb("+colourFromWhite+",255,"+colourFromWhite+")";
    };
    //white to blue
    if(currentTask==3)
    {
        colourFromWhite--;

        body.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+",255)";
        taskDisplay.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+",255)";
        container.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+",255)";
    };
    //black to red
    if(currentTask==4)
    {
        colourFromBlack++;
        body.style.backgroundColor="rgb("+colourFromBlack+",0,0)";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+",0,0)";
        container.style.backgroundColor="rgb("+colourFromBlack+",0,0)";
    };
    //black to green
    if(currentTask==5){
        colourFromBlack++;
        body.style.backgroundColor="rgb(0,"+colourFromBlack+",0)";
        taskDisplay.style.backgroundColor="rgb(0,"+colourFromBlack+",0)";
        container.style.backgroundColor="rgb(0,"+colourFromBlack+",0)";
    };
    //black to blue
    if(currentTask==6){
        colourFromBlack++;
        body.style.backgroundColor="rgb(0,0,"+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb(0,0,"+colourFromBlack+")";
        container.style.backgroundColor="rgb(0,0,"+colourFromBlack+")";
    };
    //red to black
    if(currentTask==7)
    {
        colourFromWhite--;

        body.style.backgroundColor="rgb("+colourFromWhite+",0,0)";
        taskDisplay.style.backgroundColor="rgb("+colourFromWhite+",0,0)";
        container.style.backgroundColor="rgb("+colourFromWhite+",0,0)";  
    };
    //green to black
    if(currentTask==8){
        colourFromWhite--;

        body.style.backgroundColor="rgb(0,"+colourFromWhite+",0)";
        taskDisplay.style.backgroundColor="rgb(0,"+colourFromWhite+",0)";
        container.style.backgroundColor="rgb(0,"+colourFromWhite+",0)";
    };
    //blue to black
    if(currentTask==9){
        colourFromWhite--;
        body.style.backgroundColor="rgb(0,0,"+colourFromWhite+")";
        taskDisplay.style.backgroundColor="rgb(0,0,"+colourFromWhite+")";
        container.style.backgroundColor="rgb(0,0,"+colourFromWhite+")";
    };
    //red to white
    if(currentTask==12){
        colourFromBlack++;
        body.style.backgroundColor="rgb(255,"+colourFromBlack+","+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb(255,"+colourFromBlack+","+colourFromBlack+")";
        container.style.backgroundColor="rgb(255,"+colourFromBlack+","+colourFromBlack+")";
    };
    if(currentTask==11){
        colourFromBlack++;
        body.style.backgroundColor="rgb("+colourFromBlack+",255,"+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+",255,"+colourFromBlack+")";
        container.style.backgroundColor="rgb("+colourFromBlack+",255,"+colourFromBlack+")";
    };
    if(currentTask==12){
        colourFromBlack++;
        body.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+",255)";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+",255)";
        container.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+",255)";
    };
    if(currentTask==13){
        colourFromBlack++;
        body.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+","+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+","+colourFromBlack+")";
        container.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+","+colourFromBlack+")";
    };
    if(currentTask==14){
        colourFromWhite--;
        body.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+","+colourFromWhite+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+","+colourFromWhite+")";
        container.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+","+colourFromWhite+")";
    };

};

mouseHoldToggle = false;
invertNumeratorValue = 0;

function buttonPressedIn(e){
    // metrics={};
    // metrics.buttonDown.timestamp =[];
    // metrics.buttonDown.taskTimer=[];
    // metrics.buttonDown.space.pressed=[];
    // //metrics.currentTask;
    if(e.target == spacebar || e.code=="Space" || e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target ==enter || e.code=="Enter")
    {
        e.preventDefault();
        // timePressed.push(Date.now);
        // taskTimer.push(e.timestamp);
        if(e.target == spacebar || e.code=="Space")
        {
            intervalToggler++;
            spacebar.src =spacebarPressedImageSource.textContent;        
            if(e.code =="Space")
            {
                if(getComputedStyle(instructionPage3).display =="block")
                {
                    invertNumeratorValue++;
                    html.style.filter = "invert("+Math.round((invertNumeratorValue/255)*120)+"%)";
                    if(e.repeat == true)
                    {
                        step1.style.display="none";
                        step2.style.display="block";
                        step3.style.display="none";
                        instructionHeading.style.display="none";
                        instructionPage3.appendChild(spacebar);
                        spacebar.style.display="block";           
                    };
            }
            else if(getComputedStyle(taskDisplay).display == "block")
            {
                    if(intervalToggler==1)
                    {
                        x = setInterval(increment,321);
                    };
                }
                else{
                    
                    //"ADD CODE HERE FOR SECOND INSTRUCTION DISPLAY"
                };
            };
            if(e.target == spacebar)
            {
                if(getComputedStyle(instructionPage3).display =="block"){
                    if(getComputedStyle(step1).display=="block"){
                    invertNumeratorValue++;
                    mouseHoldCatcher=0;
                    y = setInterval(()=>{
                        if(intervalToggler==1)
                        {
                            mouseHoldCatcher++;
                        };
                        if(mouseHoldCatcher>=6){
                            invertNumeratorValue++;
                            instructionHeading.style.display="none";
                            html.style.filter = "invert("+Math.round((invertNumeratorValue/255)*120)+"%)";
                            step1.style.display="none";
                            step2.style.display="block";
                            instructionPage3.appendChild(spacebar);
                        };
                    },160);
                };}
                else if(getComputedStyle(taskDisplay).display=="block")
                {
                    if(intervalToggler==1)
                    {
                        x = setInterval(increment,160);
                    };
                };
            };
        }
        else if(e.target == enter || e.code=="Enter"){
            enter.src = enterPressedImageSource.textContent;
            setTimeout(()=>{enter.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/enter/enterButton.png"},200);
        }
        else if(e.target == rightArrow || e.code == "ArrowRight")
        {
            rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrowPressed.png";
            setTimeout(()=>{rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"},200);
        }
        else{
            leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrowPressed.png";
            setTimeout(()=>{leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"},200);
        };
    };
};

function buttonReleased(e){
    if(e.target == spacebar || e.code=="Space" || e.target == rightArrow || e.code == "ArrowRight" || e.target == leftArrow || e.code =="ArrowLeft" || e.target ==enter || e.code=="Enter")
    {
        e.preventDefault();
        // metrics.buttonUp.timePressed.push(Date.now);
        // metrics.buttonUp.taskTimer.push(e.timestamp);
        if(e.code==="Space"|| e.target==spacebar){
            spacebar.src=spacebarImageSource.textContent;
            intervalToggler=0;
            

            if(e.code==="Space")
            {   
                mouseHoldCatcher=0;
                if(getComputedStyle(instructionPage3).display == "block"){
                if(getComputedStyle(step2).display=="block")
                {
                    step1.style.display="none";
                    step2.style.display ="none";
                    step3.style.display="block";

                    enterHTMLContainer.style.display = 'inline';
                    enterHTMLContainer.appendChild(enter);
                    spacebar.style.display="none";
                };
            }
                else if(getComputedStyle(taskDisplay).display== "block")
                {
                    clearInterval(x);
                    taskDisplay.appendChild(enter);
                    enter.style.marginTop = "15%";
                    enter.style.display = "block";
                    prompt1.innerHTML = "<p>Press enter when you are done.</p>";
                    taskDisplay.appendChild(prompt1);
                };
            }
            else if(e.target == spacebar)
            {
                if(getComputedStyle(instructionPage3).display == "block")
                {
                    clearInterval(y);
                    if(mouseHoldCatcher<=6){

                        step1.style.display="block";
                        spacebar.style.display="block";

                        spacebarHTMLContainer.style.display="inline";
                        step2.style.display ="none";
                        step3.style.display ="none";
                    }else{
                        step1.style.display="none";
                        step2.style.display ="none";
                        step3.style.display ="block";
                        
                        enterHTMLContainer.style.display = 'inline';
                        enterHTMLContainer.appendChild(enter);
                        spacebar.style.display="none";
                    };
                    mouseHoldCatcher=0;
                }
            else if(getComputedStyle(taskDisplay).display == "block")
            {
                clearInterval(x);
                taskDisplay.appendChild(enter);
                enter.style.marginTop = "15%";
                enter.style.display = "block";
                prompt1.innerHTML = "<p>Press enter when you are done.</p>";
                taskDisplay.appendChild(prompt1);
            };
        };
    };
    if(e.target==enter || e.code=="Enter"){
        enter.src = enterImageSource.textContent;
        if(getComputedStyle(taskDisplay).display=="block" || getComputedStyle(instructionPage3).display=="block")
        {
            taskDisplay.style.display="block";
            taskDisplay.append(enter);
            
            instructionPage1.style.display = "none";
            instructionPage2.style.display = "none";
            instructionPage3.style.display = "none";
        
        step1.style.display="none";
        step2.style.display="none";
        step3.style.display="none";
            
        controls.style.display="none";
        currentTask++;
            
        html.style.filter = "none";
        html.style.color="rgb(255,255,255,0)";
        displayTask();
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
            rightArrow.style.display="inline";
            leftArrow.style.display ="none";
        };
        if(getComputedStyle(instructionPage3).display == "block")
        {
            instructionPage1.style.display="none";
            instructionPage2.style.display="block";
            instructionPage3.style.display="none";
            instructionHeading.style.display="block";

            step1.style.display="block";
            spacebar.style.display="block";
            step2.style.display="none";
            invertNumeratorValue=0;
            step3.style.display="none";

            rightArrow.style.display="inline";
            html.style.filter = "none";
            html.style.color="rgb(255,255,255,0)";
        };
    };
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
            invertNumeratorValue=0;
        }
        else if(getComputedStyle(instructionPage2).display == "block")
        {
            instructionPage1.style.display="none";
            instructionPage2.style.display="none";
            instructionPage3.style.display="block";    
            step1.style.display="block";
            spacebarHTMLContainer.appendChild(spacebar);

            step2.style.display="none";
            step3.style.display="none";

            rightArrow.style.display="none";
            taskDisplay.style.display="none";
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

function colourToInt(x)
{  
    let rgbCode =  x.split(/['rgb(','),' '," ",'""',"''"]/);
    let colourCode = rgbCode.filter((str) => str !== '');

    cc = [];  

    for(i = 0;i<colourCode.length;i++)
    {
        cc.push(parseInt(colourCode[i]));
    };
    return cc
};

function displayTask(){
    colourFromWhite=255;
    colourFromBlack = 0;

    heading.innerHTML = "<h1>Colour Perception Task</h1>";
    heading.appendChild(backNavigator);

    taskDisplay.innerHTML="<h2>Hold down spacebar until you notice your screen change colour.</h2>";
    taskDisplay.append(spacebar);
    taskDisplay.append(enter);
    enter.style.display = "none";

    body.style.backgroundColor="white";
    body.style.transitionDuration="0s";
    taskDisplay.style.backgroundColor ="white";
    taskDisplay.style.transitionDuration="0s";
    container.style.backgroundColor="white";
    container.style.transitionDuration="0s";
    prompt1.style.color="black";
    
    if(currentTask>3)
    {
        document.querySelector('h2').style.color ="white";
        heading.style.color ="white"; 
        header.style.color ="white"; 

        container.style.backgroundColor ="black";
        taskDisplay.style.backgroundColor ="black";
        body.style.backgroundColor = "black";
        prompt1.style.color="white";
         enter.style.filter ="invert(1)";
         spacebar.style.filter ="invert(1)";
        };

    if(currentTask>3 && currentTask<=6)
    {
        document.querySelector('h2').style.color ="white";
        heading.style.color ="white"; 
        header.style.color ="white"; 

        container.style.backgroundColor ="black";
        taskDisplay.style.backgroundColor ="black";
        body.style.backgroundColor = "black";

        container.style.transitionDuration="0s";
        taskDisplay.style.transitionDuration="0s";
        body.style.transitionDuration="0s";

        prompt1.style.color="white";
    };

    if(currentTask==7)
    {
        body.style.backgroundColor="rgb(255,0,0)";
        taskDisplay.style.backgroundColor="rgb("+colourFromWhite+",0,0)";
        container.style.backgroundColor="rgb("+colourFromWhite+",0,0)";
    };
    if(currentTask==8)
    {
        body.style.backgroundColor="rgb(0,"+colourFromWhite+",0)";
        taskDisplay.style.backgroundColor="rgb(0,"+colourFromWhite+",0)";
        container.style.backgroundColor="rgb(0,"+colourFromWhite+",0)";
    };
    if(currentTask==9)
    {
        body.style.backgroundColor="rgb(0,0,"+colourFromWhite+")";
        taskDisplay.style.backgroundColor="rgb(0,0,"+colourFromWhite+")";
        container.style.backgroundColor="rgb(0,0,"+colourFromWhite+")";
    };
    if(currentTask==12){
        body.style.backgroundColor="rgb(255,"+colourFromBlack+","+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb(255,"+colourFromBlack+","+colourFromBlack+")";
        container.style.backgroundColor="rgb(255,"+colourFromBlack+","+colourFromBlack+")";
    };
    if(currentTask==11){
        body.style.backgroundColor="rgb("+colourFromBlack+",255,"+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+",255,"+colourFromBlack+")";
        container.style.backgroundColor="rgb("+colourFromBlack+",255,"+colourFromBlack+")";
    };
    if(currentTask==12){
        body.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+",255)";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+",255)";
        container.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+",255)";
    };
    if(currentTask==13){
        body.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+","+colourFromBlack+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+","+colourFromBlack+")";
        container.style.backgroundColor="rgb("+colourFromBlack+","+colourFromBlack+","+colourFromBlack+")";
    };
    if(currentTask==14){
        body.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+","+colourFromWhite+")";
        taskDisplay.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+","+colourFromWhite+")";
        container.style.backgroundColor="rgb("+colourFromWhite+","+colourFromWhite+","+colourFromWhite+")";
    }
    else{
        //results
    }
}
function opacity(y){
    y.style.opacity = 1;
    y.style.transitionDuration = '1s'
};

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
instaLink.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/socialMedia/instalogo/instagram link logo.png";

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

