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
      a.href="index.html";
    a.click();
});

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


const optionsDisplay = document.querySelector('.options');

const home = document.createElement('img');
home.className = "BottomRowImageButton";
home.id = "homeImage";
home.src = "sitemap/assets/buttons/home/homeButton.png";
home.addEventListener('click',()=>{
    var a = document.createElement('a');
          a.href="index.html";
        a.click();
});

const bipolarMoods = document.createElement('button');
bipolarMoods.innerHTML ='Bipolar Mood';
bipolarMoods.className = 'pageOptions';
bipolarMoods.id = 'bipolarMood';
optionsDisplay.appendChild(bipolarMoods);

bipolarMoods.addEventListener('click',()=>{
    function link(){
        var a = document.createElement('a');
        a.href="sitemap/psychodivergency/bipolarMood/bipolarMood.html";
        a.click();
    };
    windowOpen(container);
    setTimeout(link,1499)});
    
const attentionAmbiguityAndHyperactivity = document.createElement('button');
attentionAmbiguityAndHyperactivity.innerHTML = 'Attention Ambiguity &amp; Hyperactivity';
attentionAmbiguityAndHyperactivity.className = 'pageOptions';
attentionAmbiguityAndHyperactivity.id = 'attentionAmbiguityAndHyperactivity';
optionsDisplay.appendChild(attentionAmbiguityAndHyperactivity);

attentionAmbiguityAndHyperactivity.addEventListener('click',()=>{
    function link(){
        var a = document.createElement('a');
        a.href="sitemap/psychodivergency/attention ambiguity and hyperactivity/aa.html";
        a.click();
    };
    windowOpen(container);
    setTimeout(link,1499)});

const depression = document.createElement('button');
depression.innerHTML = 'Major Depression';
depression.className = 'pageOptions';
depression.id = 'depression';
optionsDisplay.appendChild(depression);

depression.addEventListener('click',()=>{
    function link(){
        var a = document.createElement('a');
        a.href="sitemap/psychodivergency/prominent depression/depression.html";
        a.click();
    };
    windowOpen(container);
    setTimeout(link,1499)});

const anxiety = document.createElement('button');
anxiety.innerHTML = 'General Anxiety';
anxiety.className = 'pageOptions';
anxiety.id = 'anxiety';
optionsDisplay.appendChild(anxiety);

anxiety.addEventListener('click',()=>{
    function link(){ 
        var a = document.createElement('a');
        a.href="sitemap/psychodivergency/anxiety/stress.html";
        a.click();
    };
    windowOpen(container);
    setTimeout(link,1499)});

const postTrauma = document.createElement('button');
postTrauma.innerHTML = 'Post Traumatic Stress';
postTrauma.className = 'pageOptions';
postTrauma.id = 'postTrauma';
optionsDisplay.appendChild(postTrauma);

postTrauma.addEventListener('click',()=>{
    function link(){ 
        var a = document.createElement('a');
        a.href="sitemap/psychodivergency/trauma/postTrauma.html";
        a.click();
    };
    windowOpen(container);
    setTimeout(link,1499)});
    
    const instaLink = document.createElement('img');
    instaLink.className="BottomRowImageButton";
    instaLink.id = 'instaLink';
    instaLink.src = "sitemap/assets/buttons/socialMedia/instalogo/instagram link logo.png"
    
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
        }
    }
    
    function buttonReleased(e,opt,abt,l,r){
        if(e.target == r || e.code == "ArrowRight"){
            e.preventDefault();
            r.src = "sitemap/assets/buttons/arrow/rightarrow/rightArrow.png";
            // display left arrow
                        l.style.display = 'inline';
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