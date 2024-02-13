const body = document.querySelector('body');
const taskDisplay = document.querySelector('.task');

const header = document.querySelector('.header');
const heading = document.querySelector("h1");
heading.addEventListener("click",()=>{
    location.reload();
})

const backNavigator = document.querySelector('p');

const elipses = document.querySelector('d');
const controls = document.createElement('div');
controls.className = "controls";
controls.style.textAlign = 'center';
controls.style.border = 'none';
controls.style.margin = "auto";
controls.style.display = 'flex'



const rightArrow = document.createElement("img");
rightArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/rightarrow/rightArrow.png";
rightArrow.width = 45;
rightArrow.height = 45;
rightArrow.className = "controlButton";
rightArrow.id= "rightArrow";
rightArrow.style.display="inline";

const leftArrow = document.createElement("img");
leftArrow.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/arrow/leftarrow/leftArrow.png";
leftArrow.width = 45;
leftArrow.height = 45;
leftArrow.className = "controlButton";
leftArrow.id= "leftArrow";
const home = document.createElement('img');
home.class = "imageButton";
home.id = "homeImage";
home.src = "/Users/lordyolo/Desktop/website/sitemap/assets/buttons/home/homeButton.png"
home.height =50/(1845/1707);
home.width =50;
home.id = "home";

home.addEventListener('click',()=>{
    var a = document.createElement('a');
          a.href="/Users/lordyolo/Desktop/website/index.html";
        a.click()
})


backNavigator.addEventListener('click',()=>{
    var a = document.createElement('a');
        a.href="/Users/lordyolo/Desktop/website/sitemap/neuropsychology/memory/memory.html";
        a.click()
})


header.appendChild(heading)    
heading.appendChild(backNavigator);
heading.appendChild(home);

    


let isPlaying;
let oscillator;

const taskLength = 4;
let currentTask = 0;
let timeLeft=30;
let appraisal = {
    userInput:[],
    answer:[]
};

function instructions(){
            
    const instruction = document.createElement('div');
    instruction.className = 'instruction';
    instruction.innerHTML = '<p><h3>About the measure.</h3></p>A sound recall task allows a person to measure their ability to recall sounds (echoic memory).<br><h3>The assessment will ask you to:</h3>1. Listen to (and memorize) a sound.<br>2. Wait 30 seconds (latent period shown by timer).<br>3. Re-enter the sound that you heard.<br> This is repeated 12 times.<br><br>After you complete the task you will be shown a graphical representation of how well you recalled the sounds.<h3>The graph presents:</h3><li>The average proximity of the sounds you recalled and the original sounds (recall accuracy).</li><li> The average amount of time it took (in milliseconds) to recall the sounds (response latency).</li><br><br>The assessment should take about 12 minutes to complete.<br><br>'
    taskDisplay.appendChild(instruction);
    
    const cont = document.createElement('button');
    cont.className = 'contButton';
    taskDisplay.appendChild(cont);
    cont.appendChild(rightArrow);

    rightArrow.addEventListener('click',()=>{
        taskDisplay.innerHTML = '';
        instructions2();
    }
    )
};

function instructions2(){
    const instruction = document.createElement('div');
    instruction.className = 'instruction';
    instruction.innerHTML = "<p><h1><span style ='color:red;'>!</span></h1></p><h3>To do this task, you will need to:</h3><li>Connect a headset device.</li><br><li>Ensure you are seated in a quite environment.</li><br><li>Ensure the volume on your device is turned all the way up.</li><br><li>If you are wearing hearing aids, it is recommended that you remove them.</li><br><br><b><span style ='color:red;'>This task should not be used for diagnostic purposes.<br>It is only intended to provide you with a basic description of echoic memory.<br><br>If you think you are experiencing problems with your echoic memory, please consult a neuropsychologist.</span></b><br><br><br><br><br>";
    
    taskDisplay.appendChild(instruction);
    
    const cont = document.createElement('button');
    cont.className = 'contButton';
    taskDisplay.appendChild(cont);
    cont.appendChild(leftArrow);
    cont.appendChild(rightArrow);
    
    
    
    taskDisplay.appendChild(cont);
    
    rightArrow.addEventListener('click',()=>{
        taskDisplay.innerHTML = '';
        //leftArrow.opacity = 1;
        displayTask()
    }
    )

    leftArrow.addEventListener('click',()=>{
        taskDisplay.innerHTML = '';
        instructions()
    }
    )
};

function practiceTask(){
    const practice = document.createElement('div');
    practice.className = 'practice';
    taskDisplay.appendChild(practice);

    const heading = document.createElement('div');
    heading.className='headers';
    heading.innerHTML= '<h2>Listen to the following soundwave.</h2>';

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
        prompts2.innerHTML='';
        prompts.innerHTML = '<h2>Great! The two sounds are the matched!</h2><br><br>';
        prompts3.innerHTML = '<br>Press "Continue" and move on to the next task.';
        taskDisplay.appendChild(tempDiv2);
        taskDisplay.appendChild(prompts);
        taskDisplay.appendChild(showOsc)
        taskDisplay.appendChild(prompts3);
        
        
        playOsc.innerHTML = 'Play';
        playOsc.style.backgroundColor='lightgreen';
        
        
    }else if(frequency.value>442 && frequency.value<650){
        prompts2.innerHTML = '<br>Move the slider to the left to match the sounds.';
        taskDisplay.appendChild(prompts2);}
    else if(frequency.value>300 && frequency.value<438){
        prompts2.innerHTML = '<br>Move the slider to the right to match the sounds.';
     
    }
    else{
        prompts2;
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
        heading.innerHTML = '<h2>The aim of the task is to match the soundwave with the played sound.</h2>';
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

var timeLeft = 2;

function begin(){
    beginTask.style.display = 'none';
    
    time();
    var timer = setInterval(time,1200);
    function time(){
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
            color: 'rgb(0, 12, 207)',
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
            color:'rgb(0, 12, 207)',
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
                    color:'rgb(0, 12, 207)'
                },
                text:'<b>Average Frequency Played (Hz) Compared to Frequency Recalled (Hz).</b>',
                standoff:30
            }
        },
        yaxis: 
        {
            title: 
            {
                font:{size:16,color:'rgb(0, 12, 207)'},
                text: '<b>Frequency/Pitch<br>(Hz)</b>',
                standoff:30
            }
        },
        //barmode: 'stack',
        font: 
        {
            family: 'Helvetica',
            color:'rgb(0, 12, 207)',
            size: 20
        },  
        paper_bgcolor:'white',
        plot_bgcolor:'white',
    };

const barPlot = document.createElement('div');
barPlot.id = 'barPlot';
barPlot.style.display='flex';
barPlot.style.alignItems='center'
barPlot.style.maxWidth =1200;
barPlot.style.maxHeight =500;

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

var lineData = [lineDataAns,lineDataUser];

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
    plot_bgcolor:'white',};

const linePlot = document.createElement('div');
linePlot.id = 'linePlot';
linePlot.style.display='none';
linePlot.style.alignItems='center'
linePlot.style.maxWidth =1200;
linePlot.style.maxHeight =500;
linePlot.style.margin='auto';

const togglePlot = document.createElement('button');
togglePlot.className='button';
togglePlot.id = 'next';


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
    rightArrow.style.display = 'inline-block';
    leftArrow.style.display = 'none';
    linePlot.style.display='none';
    barPlot.style.display='block';
});


togglePlot.appendChild(rightArrow);
togglePlot.appendChild(leftArrow);
rightArrow.addEventListener('click',function(){
    rightArrow.style.display='none';
    leftArrow.style.display = 'inline-block';
    linePlot.style.display='block';
    barPlot.style.display='none';
});


Plotly.newPlot(barPlot, Bardata,Barlayout);
Plotly.newPlot(linePlot,lineData,Linelayout)





taskDisplay.appendChild(barPlot);
        taskDisplay.appendChild(linePlot);
    
        taskDisplay.appendChild(togglePlot);
        
    
        
}
instructions();



