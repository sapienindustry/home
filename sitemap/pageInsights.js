functionbegin=performance.now();

var pageInsights={};
pageInsights.page=[];



pageInsights.page.screen={};
pageInsights.page.screen.width=[];
pageInsights.page.screen.height=[];
pageInsights.page.screen.scrollTop=[];
pageInsights.page.screen.pixelDepth=[];

pageInsights.page.window={};    
pageInsights.page.window.heading=[];
pageInsights.page.window.subHeading=[];
pageInsights.page.window.blurbLength=[];

pageInsights.page.window.interactables={};
pageInsights.page.window.interactables.name=[];
pageInsights.page.window.interactables.width=[];
pageInsights.page.window.interactables.height=[];

pageInsights.page.options={};
pageInsights.page.options.name=[];
pageInsights.page.options.length=[];



pageInsights.page.interaction={};
pageInsights.page.interaction.pointer={};
pageInsights.page.interaction.pointer.move={};
pageInsights.page.interaction.pointer.move.time=[];
pageInsights.page.interaction.pointer.move.start={};
pageInsights.page.interaction.pointer.move.start.x=[];
pageInsights.page.interaction.pointer.move.start.y=[];


pageInsights.page.interaction.pointer.click={};
pageInsights.page.interaction.pointer.click.time=[];
pageInsights.page.interaction.pointer.click.target=[];
pageInsights.page.interaction.pointer.click.xPos=[];
pageInsights.page.interaction.pointer.click.yPos=[];
pageInsights.page.interaction.pointer.click.durationOfClick=[];

pageInsights.page.interaction.pointer.mouseDown={};
pageInsights.page.interaction.pointer.mouseDown.time=[];
pageInsights.page.interaction.pointer.mouseDown.x=[];
pageInsights.page.interaction.pointer.mouseDown.y=[];
pageInsights.page.interaction.pointer.mouseDown.target=[];

pageInsights.page.interaction.pointer.mouseUp={};
pageInsights.page.interaction.pointer.mouseUp.time=[];
pageInsights.page.interaction.pointer.mouseUp.x=[];
pageInsights.page.interaction.pointer.mouseUp.y=[];
pageInsights.page.interaction.pointer.mouseUp.target=[];

pageInsights.page.interaction.key={};
pageInsights.page.interaction.key.name=[];
pageInsights.page.interaction.key.timeStamp=[];
pageInsights.page.interaction.key.buttonPressLength=[];



pageInsights.page.time={};
pageInsights.page.time.pageLoadingTime=[];
pageInsights.page.time.date=[];
pageInsights.page.time.timeStamp=[];



keyDown=0;
keyUp=0;

window.addEventListener("mousemove",(e)=>
{
    setTimeout(opacity,300,html);
    setTimeout(opacity,1120,container);
    pageInsights.page.interaction.pointer.move.time.push(performance.now());
    pageInsights.page.interaction.pointer.move.start.x.push(e.pageX);
    pageInsights.page.interaction.pointer.move.start.y.push(e.pageY);
    

    
});

window.addEventListener("click",(e)=>{

pageInsights.page.interaction.pointer.click.time.push(performance.now());
    pageInsights.page.interaction.pointer.click.target.push(e.target.id);
    pageInsights.page.interaction.pointer.click.xPos.push(e.pageX);
    pageInsights.page.interaction.pointer.click.yPos.push(e.pageY);

    if(getComputedStyle(optionsDisplay).display=="block"){
        pageInsights.page.window.interactables.name.push(document.querySelectorAll(".pageOptions"));
    };

});

window.addEventListener("scroll",(e)=>{
    pageInsights.page.screen.scrollTop.push(window.scrollX);
    pageInsights.page.screen.scrollTop.push(window.scrollY);
});

window.addEventListener("keydown",(e)=>{
    keyDown=performance.now();
    pageInsights.page.interaction.key.timeStamp.push(performance.now());
    pageInsights.page.interaction.key.name.push(e.key);
    
});


window.addEventListener("keyup",(e)=>{
    keyUp=performance.now();
    pageInsights.page.interaction.key.buttonPressLength.push(keyUp-keyDown);
});

window.addEventListener("mousedown",(e)=>{
    keyDown=performance.now();
    pageInsights.page.interaction.pointer.mouseDown.time.push(performance.now());
    pageInsights.page.interaction.pointer.mouseDown.target.push(e.target.innerHTML);

});

window.addEventListener("mouseup",(e)=>{
    keyUp=performance.now();
    pageInsights.page.interaction.pointer.click.durationOfClick.push(keyUp-keyDown);
    pageInsights.page.interaction.pointer.mouseUp.time.push(performance.now());
    pageInsights.page.interaction.pointer.mouseUp.target.push(e.target.innerHTML);
});

window.addEventListener("load",(e)=>{
    pageInsights.page.push(document.querySelector('h1').textContent);
    pageInsights.page.screen.width.push(window.screen.availWidth);
    pageInsights.page.screen.height.push(window.screen.availHeight);
    pageInsights.page.screen.pixelDepth.push(window.screen.pixelDepth);
    
    pageInsights.page.window.heading.push(document.querySelector('h1').textContent);
    pageInsights.page.window.subHeading.push(document.querySelector('.backNavigator').textContent);

    for(i=0;i<(document.querySelectorAll(".pageOptions")).length;i++){

        pageInsights.page.options.name.push(document.querySelectorAll(".pageOptions")[i].id);
        pageInsights.page.options.length.push(i+1);
    };
    pageInsights.page.window.interactables.name.push(rightArrow.id);
    pageInsights.page.window.interactables.height.push(getComputedStyle(rightArrow).height);
    pageInsights.page.window.interactables.width.push(getComputedStyle(rightArrow).width);

    pageInsights.page.window.interactables.name.push(leftArrow.id);
    pageInsights.page.window.interactables.height.push(getComputedStyle(leftArrow).height);
    pageInsights.page.window.interactables.width.push(getComputedStyle(leftArrow).width);
    
    pageInsights.page.window.blurbLength.push(about.innerHTML.length);

    pageInsights.page.time.pageLoadingTime.push(performance.now()-functionbegin);
    pageInsights.page.time.date.push(new Date());
    pageInsights.page.time.timeStamp.push(performance.now());
})

window.addEventListener("dblclick",()=>{
    localStorage.clear();
})


for(i=0;i<(document.querySelectorAll(".pageOptions")).length;i++){

    document.querySelectorAll(".pageOptions")[i].addEventListener('click',()=>{
        for(i=1;i<Object.keys(pageInsights.page).length;i++)
        {
            localStorage.setItem(JSON.stringify(pageInsights.page+"."+Object.keys(pageInsights.page)[i]+"."+Date.now()),JSON.stringify(pageInsights.page[Object.keys(pageInsights.page)[i]]));
        }
        
    }
)
}



window.addEventListener("click",()=>{        

}
)
