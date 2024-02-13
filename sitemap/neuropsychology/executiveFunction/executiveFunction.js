

const html = document.querySelector("html");
html.style.opacity=0;
const container = document.querySelector(".container");
container.style.opacity = 0;

const body = document.querySelector("body");
body.style.display ="block";

const about = document.querySelector('.about');

const backNavigator = document.querySelector(".backNavigator");
backNavigator.addEventListener("click",()=>{
    var a = document.createElement('a');
    a.href="sitemap/neuropsychology/neuropsychology.html";
    a.click();
})

const header = document.querySelector('.header');
const heading = document.querySelector("h1");
heading.addEventListener("click",()=>{
    location.reload();
})

const controls = document.querySelector('div.controlBox');

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

const upArrow = document.createElement("img");
upArrow.src = "sitemap/assets/buttons/arrow/upArrow/upArrow.png";
upArrow.width = 45;
upArrow.height = 45;
upArrow.className = "controlButton";
upArrow.id= "upArrow";
upArrow.style.display="none";

const downArrow = document.createElement("img");
downArrow.src = "sitemap/assets/buttons/arrow/downArrow/downArrow.png";
downArrow.width = 45;
downArrow.height = 45;
downArrow.className = "controlButton";
downArrow.id= "downArrow";
downArrow.style.display="none";

const optionsDisplay = document.querySelector('.options');

const home = document.createElement('img');
home.className = "BottomRowImageButton";
home.id = "homeImage";
home.src = "sitemap/assets/buttons/home/homeButton.png"

home.addEventListener('click',()=>{
    var a = document.createElement('a');
          a.href="index.html";
        a.click()
});

const stopSignalTask =  document.createElement('button');
stopSignalTask.innerHTML = 'STOP SIGNAL TASK';
stopSignalTask.className ="pageOptions";
stopSignalTask.id ="stopSignalTask";
stopSignalTask.addEventListener('click',()=>{
    window.open("sitemap/neuropsychology/executiveFunction/stopSignalTask/stopSignalTask.html");
});
optionsDisplay.appendChild(stopSignalTask);


const instaLink = document.createElement('img');
instaLink.className="BottomRowImageButton";
instaLink.id = 'instaLink';
instaLink.src = "sitemap/assets/buttons/socialMedia/instalogo/instagram link logo.png"

instaLink.addEventListener('click',()=>{
    window.open("https://www.instagram.com/sapienindustry/");
});

controls.appendChild(rightArrow);
controls.appendChild(leftArrow);
controls.appendChild(upArrow);
controls.appendChild(downArrow);


function buttonPressedIn(e){
    if(e.target == rightArrow || e.code == "ArrowRight"){
        e.preventDefault();
        rightArrow.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrowPressed.png";
        setTimeout(()=>{rightArrow.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrow.png"},150);
    }
    else if(e.target == leftArrow || e.code =="ArrowLeft"){
        e.preventDefault();
        leftArrow.src = "sitemap/assets/buttons/arrow/leftarrow/leftArrowPressed.png";
        setTimeout(()=>{leftArrow.src = "sitemap/assets/buttons/arrow/leftarrow/leftArrow.png"},150);
    }
}

function buttonReleased(e,opt,abt,l,r){
    if(e.target == r || e.code == "ArrowRight"){
        e.preventDefault();
        r.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrow.png";
        // display left arrow
                    l.style.display = 'block';
                    r.style.display = 'none';
        
                    opt.style.opacity = 1;
                    opt.style.display= 'block';
                    
                    opt.style.transitionDuration = '1.1s';
                    abt.style.display = 'none'; 
    }
    else if(e.target == l || e.code =="ArrowLeft"){
        e.preventDefault();
        l.src = "sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
        l.style.display = 'none';
        r.style.display = 'inline';

        opt.style.display= 'none';
        
        opt.style.transitionDuration = '0.5s';
        abt.style.display = 'block';
    }
}

document.addEventListener("mousedown",buttonPressedIn)
document.addEventListener("mouseup",(e)=>{
    setTimeout(buttonReleased,300,e,optionsDisplay,about,leftArrow,rightArrow)
});

document.addEventListener("keydown",buttonPressedIn)
document.addEventListener("keyup",(e)=>{
  setTimeout(buttonReleased,300,e,optionsDisplay,about,leftArrow,rightArrow)
});



function opacity(y){
    y.style.opacity = 1;
    y.style.transitionDuration = '1s'};

 setTimeout(opacity,300,html);
 setTimeout(opacity,1120,container);

function windowOpen(x){
    html.style.opacity=0;
    html.style.transitionDuration ='0.12s';
    html.style.display = "none"
};

const bottomRowScrollView = document.createElement("div")
bottomRowScrollView.className = "bottomRowScrollView";
html.appendChild(bottomRowScrollView);
bottomRowScrollView.append(instaLink);
bottomRowScrollView.append(home);
