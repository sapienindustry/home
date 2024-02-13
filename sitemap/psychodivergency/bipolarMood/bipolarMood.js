//SURVEY SCRIPT
const html = document.querySelector("html");
html.style.opacity=0;
const container = document.querySelector(".container");
container.style.opacity = 0;

const body = document.querySelector("body");

const aboutPage1 = document.querySelector("#about1");
const aboutPage2 = document.querySelector("#about2");
const aboutPage3 = document.querySelector("#about3");

const backNavigator = document.querySelector('p');
backNavigator.addEventListener('click',()=>{
    var a = document.createElement('a');
    a.href="/Users/lordyolo/Desktop/website/sitemap/psychodivergency/psychodivergency.html";
    a.click()
});


const header = document.querySelector('.header');
const heading = document.querySelector("h1");
heading.addEventListener("click",()=>{
    location.reload();
})
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
rightArrow.style.display = "inline"

const leftArrow = document.createElement("img");
leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
leftArrow.width = 45;
leftArrow.height = 45;
leftArrow.className = "controlButton";
leftArrow.id= "leftArrow";
leftArrow.style.display="none";

const taskDisplay = document.querySelector(".task");
var questionInfo = document.querySelector(".questionInfo");
var question = document.querySelector(".question");
var radioButtonsContainer = document.querySelector(".radioButtons");
var radioValue= document.querySelector(".radioValue");

questionList = {
    excited:  
    [
        'I felt this way for over a week.',
        'I felt this way throughout most of the day.',
        'There was an increase in the way I pursued my ambitions.',
        'I pursued my ambitions for most of the day.',
        'My mood was also persistently irritable.',
        'My self-esteem was inflated.',
        'I felt rested after 3-4 hours of sleep.',
        'I was more talkative than usual.',
        'My thoughts were racing.',
        'I was prone to psychomotor agitation.',
        'I found myself pacing around the room.',
        'I was prone to tapping my toes.',
        'I was talking rapidly in conversation.',
        'I was more involved in high risk activities.',
        'I took part in unrestrained sprees.', 
        'I took part in risky business investments.',
        'I took part in risky sexual behaviors.',
        'I would not socialize the way I usually do.',
        'I was not as productive in my occupation.',

        "I felt this way because of medication I was using.",
        "I felt this way because of the drugs I was using.",
        "I felt this way because of other psychoactive substances I was using."
    ],
    exhilarated :
    [
        'I was not able to continue with social endevours.',
        'I was not able to continue with occpational functions.',
        'I felt that I needed to be hospitalized to prevent harm to self.',
        'I felt that I needed to be hospitalized to prevent harm to others.'
    ],
    depressed:
    [
        "I felt this way for two weeks." ,
        "I felt a decreased interest in activities.",
        "I noticed that I lost a significant amount of weight.",
        "I was not sleeping appropriately.",
        "I had bouts of psychomotor agitation.",
        "I was feeling lethargic.",
        "I was tired throughout the day.",
        "I was unable to concentrate.",
        "I was indecisive.",
        "I had recurrent thoughts of death.",
        "I had recurrent thoughts of suicide.",
        "I had progressive thoughts of suicide.",
        "The way I usually socialize had diminished.",
        "My productivity had diminished.",
        "I felt this way because of medication I was using.",
        "I felt this way because of the drugs I was using.",
        "I felt this way because of other psychoactive substances I was using."
    ]
};
const options = 
[
    "I strongly disagree.",
    "I disagree slightly.",
    "I agree partially.",
    "I completely agree."
];

if(question.innerHTML.textContent==="using"){
    console.log("Questions about drugs");
    options = optionVals.reverse();
}

const optionVals = [-1,-0.5,0.5,1];
const reverseOptionVals = [1,0.5,-0.5,-1];

    currentQ = [];
    groupQuestionIndex = [];
    taskGroup = [];
    indexPoint = [];
    userInput= [];
    currentTask =0;
    var aspectOfExperience =Object.keys(questionList);
    
    for(i=0;i<aspectOfExperience.length;i++){
        var groupQuestions =questionList[Array(aspectOfExperience[i])];
        groupQuestionIndex.push(i);      
        indexPoint.push(groupQuestions.length);
        for(j=0;j<groupQuestions.length;j++){
            taskGroup.push(aspectOfExperience[i]);
            currentQ.push(groupQuestions[j]);



        };
;};

function buttonPressedIn(e){
    if(e.target==leftArrow || e.target==rightArrow || e.code =="ArrowLeft" || e.code =="ArrowRight"){
        e.preventDefault();
        if(e.target==leftArrow || e.code =="ArrowLeft"){
            leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrowPressed.png";
            setTimeout((e)=>{leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"},200)
        }
        else if(e.target==rightArrow || e.code =="ArrowRight"){
            rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrowPressed.png";
            setTimeout((e)=>{rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"},200)
        };
    };
};

function buttonReleased(e) {
    if(e.target==leftArrow || e.target==rightArrow || e.code =="ArrowLeft" || e.code =="ArrowRight"){
        if((e.target==leftArrow || e.code =="ArrowLeft") && leftArrow.style.display=="inline"){
            if(getComputedStyle(aboutPage2).display=="block"){
                aboutPage1.style.display = "block";
                aboutPage2.style.display="none";
                aboutPage3.style.display="none";
                taskDisplay.style.display="none";
            };
            if(getComputedStyle(aboutPage3).display=="block"){
                aboutPage1.style.display = "none";
                aboutPage2.style.display="block";
                aboutPage3.style.display="none";
                taskDisplay.style.display="none";
            };
            if(getComputedStyle(taskDisplay).display=="block"){
            leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"
            taskDisplay.innerHTML = "";
            rightArrow.style.display = "none";
            radioButtonsContainer.innerHTML = "";
            currentTask--;
            questionInfo.innerHTML = "<b>Question Number: </b>" + parseInt(currentTask)+"</br><b>Recently, when I felt more</b> <i>"+taskGroup[currentTask].charAt().toLowerCase()+taskGroup[currentTask].slice(1)+"</i> <b>than usual...</b><br><br> ";
            question.innerHTML = currentQ[currentTask-1];

            for (i=0;i<options.length;i++){
        
                const radioButtons = document.createElement('input');
                radioButtons.type = 'radio';
                radioButtons.value = options[i];
                radioButtons.name ='options';
                
                radioButtonsContainer.appendChild(radioButtons);
                
                radioButtons.addEventListener('click',()=>{
                    userInput.push(radioButtons.value);
                    radioValue.innerHTML = radioButtons.value;
                    radioButtonsContainer.append(radioValue);
                    rightArrow.style.display = "inline";
                })}; 

                if(currentQ[currentTask-1].slice(0,27)=="I felt this way because of "){
                    console.log("Questions about drugs");
                    optionVals = optionVals.reverse();
                    console.log(optionVals);
                }
            if(currentTask>currentQ.length-1){
                body.innerHTML = "RESULTS";
            };
            if(currentTask<=1){
                leftArrow.style.display = "none";
                rightArrow.style.display ="inline";
            };
            taskDisplay.append(questionInfo);
            taskDisplay.append(question);
            taskDisplay.append(radioButtonsContainer);
    };
}
    else if((e.target==rightArrow || e.code =="ArrowRight") && rightArrow.style.display=="inline"){
        {
            rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"
            if(getComputedStyle(aboutPage1).display=="block"){
                aboutPage1.style.display = "none";
                aboutPage2.style.display="block";
                aboutPage3.style.display="none";
                taskDisplay.style.display="none";
                leftArrow.style.display = "inline";
            }else if(getComputedStyle(aboutPage2).display=="block"){
                aboutPage1.style.display = "none";
                aboutPage2.style.display="none";
                aboutPage3.style.display="block";
                taskDisplay.style.display="none";
                leftArrow.style.display = "inline";
            }
            else if(getComputedStyle(aboutPage3).display=="block"){
                aboutPage1.style.display = "none";
                aboutPage2.style.display="none";
                aboutPage3.style.display="none";
                taskDisplay.style.display="block";
                leftArrow.style.display = "none";
            }else if(getComputedStyle(taskDisplay).display=="block"){
                rightArrow.style.display = "none";
                taskDisplay.innerHTML = "";
                radioButtonsContainer.innerHTML = "";
                currentTask++;
                questionInfo.innerHTML = "<b>Question Number: </b>" + parseInt(currentTask)+"</br><b>Recently, when I felt more</b> <i>"+taskGroup[currentTask].charAt().toLowerCase()+taskGroup[currentTask].slice(1)+"</i> <b>than usual...</b><br><br> ";
                question.innerHTML = currentQ[currentTask-1];
                
                for (i=0;i<options.length;i++){
                const radioButtons = document.createElement("input");
                radioButtons.type = "radio";
                radioButtons.value = options[i];
                radioButtons.name ="options";
                radioButtonsContainer.appendChild(radioButtons);
                radioValue.innerHTML = radioButtons.value;
                
                radioButtons.addEventListener('click',()=>{
                    userInput.push(radioButtons.value);
                    radioValue.innerHTML = radioButtons.value;
                    radioButtonsContainer.append(radioValue);
                    rightArrow.style.display = "inline";
                })};
                
                if(currentQ[currentTask-1].slice(0,27)=="I felt this way because of "){
                    console.log("Questions about drugs");
                    reverseOptionVals = optionVals.reverse();
                    console.log(optionVals);
                } 
                if(currentTask==currentQ.length){
                    taskDisplay.style.display="none";
                    displayResults();
                };
                if(currentTask>1){
                    leftArrow.style.display = "inline";
                };
                taskDisplay.append(questionInfo);
                taskDisplay.append(question);
                taskDisplay.append(radioButtonsContainer);
            };
        };
};
};
};

function displayResults(){
    const resultsDisplay = document.querySelector('.result');
    resultsDisplay.style.display="block";


}

document.addEventListener("mousedown",buttonPressedIn);
document.addEventListener("keydown",buttonPressedIn);
document.addEventListener("mouseup",(e)=>{
    setTimeout(buttonReleased,350,e)});
document.addEventListener("keyup",(e)=>{
    setTimeout(buttonReleased,350,e)});

controls.appendChild(leftArrow);
controls.appendChild(rightArrow);

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
       