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
attention:
    [
    'I often fail to give close attention to details.',
    'I make careless mistakes.',
          'I tend to overlook important details.',
          'There are often innacuracies.',
          'There are often inconsistencies.',
          'I have difficulty sustaining attention in tasks.',
          'I find it difficult to remain focused during conversations.',
          'I find it difficult to remain focused during lengthy reading.',
          'I find it difficult to remain focused during lectures/meetings.',
          'I might forget to listen when being spoken to directly.',
          'Others often tell me that my mind seems as if it is elsewhere in the absence of any obvious distraction. ',
          'I do not follow through on instructions.',
          'I start tasks but lose focus quickly (chores, or work projects).',
          'I have difficulty organizing tasks.',
          'I have difficulty managing sequential tasks.',
          'I have difficulty keeping belongings tidy.',
          'I have been told that I am messy.',
          'I am messy.',
          'I have been told that I am disorganized',
          'I am disorganized',
          'I have poor time management skills.',
          'I find it hard to meet deadlines.',
          'I am reluctant to engage in tasks that require sustained mental effort.',
          'I avoid tedious work',
          'I dislike reviewing lengthy papers. ',
          'I lose things necessary for tasks.',
          'I often lose important belongings.',
          'I am easily distracted by extraneous stimuli.',
          'I am forgetful while doing daily activities (e.g. doing chores, running errands like returning calls, paying bills, keeping appointments).',
],
    hyperactivity:[
         'I usually fidget with my hands.',
         'I usually fidget with my feet.',
         'I cannot sit still.',
         'I tend to leave my seat in situations when remaining seated is expected.',
         'I tend to leave my seat when in place that require me to remain in place.',
         'I can be so full of energy that I cannot keep still.',
         'I am unable to play quietly.',
         'I am unable to engage in leisure activities quietly.',
         'I find it uncomfortable being still.',
         'I find it uncomfortable being still for extended periods of time.', 
         'I often talk excessively.',
         'I tend to blurt out an answer before a question has been completed.',
         "I like to complete people’s sentences.",
         'I cannot wait for my turn in conversation',
         'I find it difficul to wait for my turn in mundande activities.',
         "I use other people’s things without asking for permission",
]}

const options = 
[
    "Completely false.",
    "Mostly false.",
    "Mostly true.",
    "Completely true."
]
const optionVals = [-1,-0.5,0.5,1]

prompt = [];
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
        prompt.push(groupQuestions[j])
    }};

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
        questionInfo.innerHTML = "Question Number: " + parseInt(currentTask)+"<br>Aspect of Experience: " + taskGroup[currentTask].charAt().toUpperCase()+taskGroup[currentTask].slice(1);
        question.innerHTML = prompt[currentTask-1];
        for (i=0;i<options.length;i++){
    
            const radioButtons = document.createElement('input');
            radioButtons.type = 'radio';
            radioButtons.value = options[i];
            radioButtons.name ='options';
            
            radioButtonsContainer.appendChild(radioButtons);
            
            radioButtons.addEventListener('click',()=>{
                userInput.push(radioButtons.value);
                radioValue.innerHTML = radioButtons.value;
                rightArrow.style.display = "inline";
            })}; 
    
    
        if(currentTask>prompt.length-1){
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
            questionInfo.innerHTML = "Question Number: " + parseInt(currentTask)+"<br>Aspect of Experience: " + taskGroup[currentTask].charAt().toUpperCase()+taskGroup[currentTask].slice(1);
            question.innerHTML = prompt[currentTask-1];
            
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
            if(currentTask>prompt.length-1){
                body.innerHTML = "RESULTS"
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
   
