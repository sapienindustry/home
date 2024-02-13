const html = document.querySelector("html");
html.style.opacity=0;
const container = document.querySelector(".container");
container.style.opacity = 0;

const body = document.querySelector("body");

const about = document.querySelector('.about');

const header = document.querySelector('.header');
const backNavigator = document.querySelector('.backNavigator');
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

const optionsDisplay = document.querySelector('.options');
optionsDisplay.style.display = "none";

const home = document.createElement('img');
home.className = "BottomRowImageButton";
home.id = "homeImage";
home.src = "sitemap/assets/buttons/home/homeButton.png"

home.addEventListener('click',()=>{
    var a = document.createElement('a');
          a.href="index.html";
        a.click()
});

// home.addEventListener("mouseover",(e)=>{
// })


const psychodivergency = document.createElement('button');
psychodivergency.id = "psychodivergency";
psychodivergency.className = "pageOptions";
psychodivergency.innerHTML = 'PSYCHODIVERGENCY';
optionsDisplay.appendChild(psychodivergency);

psychodivergency.addEventListener('click',()=>{
    function link(){
        var a = document.createElement('a');
        a.href="sitemap/psychodivergency/psychodivergency.html";
        a.click()
    };
        windowOpen(container);
        setTimeout(link,1499)});
        
        // psychodivergency.addEventListener("mouseover",(e)=>{
        // })


const neurpsychology = document.createElement('button');
neurpsychology.innerHTML = 'NEUROPSYCHOLOGY';
neurpsychology.id = "neurpsychology";
neurpsychology.className = "pageOptions";

neurpsychology.addEventListener('click',()=>{
    function link(){
        var a = document.createElement('a');
        a.href="sitemap/neuropsychology/neuropsychology.html";
        a.click();
        
    };
        windowOpen(container);
        setTimeout(link,1499)});
optionsDisplay.appendChild(neurpsychology);


const journal = document.createElement('button');
journal.innerHTML = 'JOURNAL';
journal.id = "journal";
journal.className = "pageOptions";

journal.addEventListener('click',()=>{
    function link(){
        var a = document.createElement('a');
        a.href="sitemap/assets/academia.html";
        a.click();
        
    };
        windowOpen(container);
        setTimeout(link,1499)});
optionsDisplay.appendChild(journal);

const instaLink = document.createElement('img');
instaLink.className="BottomRowImageButton";
instaLink.id = 'instaLink';
instaLink.src = "sitemap/assets/buttons/socialMedia/instalogo/instagram link logo.png"


//instaLink.onclick()
instaLink.addEventListener('click',()=>{
    window.open("https://www.instagram.com/sapienindustry/");
});

controls.appendChild(rightArrow);
controls.appendChild(leftArrow);

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
    };

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
                    //pageInsights.window.floor.display = "options";
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

document.addEventListener("keydown",(e)=>{
    buttonPressedIn(e)
    if(e.key == "Alt"){
        
    };
    if(e.key == "Meta"){
        
    }});
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

    const bottomRowScrollView = document.createElement("div");
    bottomRowScrollView.className = "bottomRowScrollView";
    html.appendChild(bottomRowScrollView);
    bottomRowScrollView.append(instaLink);
    bottomRowScrollView.append(home);



