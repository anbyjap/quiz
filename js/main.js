var quiz=document.getElementById("quiz");
var ques= document.getElementById("question");
var opt1=document.getElementById("option1");
var opt2=document.getElementById("option2");
var opt3=document.getElementById("option3");
var opt4=document.getElementById("option4");
var res=document.getElementById("result");
var nextbutton= document.getElementById("next");
var q=document.getElementById('quit');
var area = document.getElementById("img_area");

const startTime = performance.now();

var tques=Object.keys(questions).length;
var score=0;
var quesindex=0;

function quit(){    
    clearInterval(timerID);     
	quiz.style.display='none';
    res.style.display = '';
    area.style.display = '';
    var f=score/tques;
    
    const endTime = performance.now(); 
    const totalTime = ((endTime - startTime) / 1000); 

    var text = "とくてんは"+ f*100 + "点<br>" + "じかんは"+ totalTime.toPrecision(2) + "秒<br>おめでとう！<br>";
   
    var finalScore = 0;
    finalScore = (100 - totalTime.toPrecision(2)) + (100 * f);

    console.log(finalScore);

    if(finalScore <= 50){
        area.src = "https://video.kurashiru.com/production/articles/35d5215c-a922-496b-8a8b-273d2215320b/wide_thumbnail_normal.jpg?1594111549";
        text += "和歌山県の有田みかんを手に入れた！<br>";
    } else if(finalScore > 50 && finalScore <= 100){
        area.src = "https://blog.pokke.in/wp-content/uploads/2018/11/shutterstock_586258448-min.jpg";
        text +=  "長崎県のカステラを手に入れた！<br>";
    }else if(finalScore > 100){
        area.src = "https://shop25-makeshop.akamaized.net/shopimages/takefuku/000000000262_2TXTE57.jpg";
        text +=  "鹿児島県の松坂牛を手に入れた！<br>";
    }
    
    res.innerHTML = text;
 
    //----------------------making a button------------------------
    var a = document.createElement("a");
    var buttonEl = document.createElement("button");
    var url = "./index.html";
	buttonEl.formaction = url;
	var buttonTextEl = document.createElement("span");
    a.href = url;
	buttonTextEl.innerText = "もどる";
	buttonEl.appendChild(buttonTextEl);
    a.appendChild(buttonEl);
	res.appendChild(a);
    q.style.display="none";
}
function give_ques(quesindex) {
	ques.textContent=quesindex+1+". "+questions[quesindex].question;
	opt1.textContent=questions[quesindex].first;
	opt2.textContent=questions[quesindex].second;
	opt3.textContent=questions[quesindex].third;
	opt4.textContent=questions[quesindex].forth;
	return;// body...
};
give_ques(0);
function nextques(){
	var selected_ans= document.querySelector('input[type=radio]:checked');
	if(!selected_ans)
		{alert("SELECT AN OPTION");return;}

	if(selected_ans.value==questions[quesindex].answer)
        {score=score+1;}
	selected_ans.checked=false;
	quesindex++;
	if(quesindex==tques-1)
	nextbutton.textContent="おわる";
	var f=score/tques;
	if(quesindex==tques){
        clearInterval(timerID);     
	    q.style.display='none';
        quiz.style.display='none';
        res.style.display='';
        area.style.display = '';
        var f=score/tques;
        
        const endTime = performance.now(); 
        const totalTime = ((endTime - startTime) / 1000); 

        var text = "とくてんは"+ f*100 + "点<br>" + "じかんは"+ totalTime.toPrecision(2) + "秒<br>おめでとう！<br>";
    
        var finalScore = 0;
        finalScore = (100 - totalTime.toPrecision(2)) + (100 * f);

        console.log(finalScore);

        if(finalScore <= 50){
            area.src = "https://video.kurashiru.com/production/articles/35d5215c-a922-496b-8a8b-273d2215320b/wide_thumbnail_normal.jpg?1594111549";
            text += "和歌山県の有田みかんを手に入れた！<br>";
        } else if(finalScore > 50 && finalScore <= 100){
            area.src = "https://blog.pokke.in/wp-content/uploads/2018/11/shutterstock_586258448-min.jpg";
            text +=  "長崎県のカステラを手に入れた！<br>";
        }else if(finalScore > 100){
            area.src = "https://shop25-makeshop.akamaized.net/shopimages/takefuku/000000000262_2TXTE57.jpg";
            text +=  "鹿児島県の松坂牛を手に入れた！<br>";
        }
        
        res.innerHTML = text;
    
        //----------------------making a button------------------------
        var a = document.createElement("a");
        var buttonEl = document.createElement("button");
        var url = "./index.html";
        buttonEl.formaction = url;
        var buttonTextEl = document.createElement("span");
        a.href = url;
        buttonTextEl.innerText = "もどる";
        buttonEl.appendChild(buttonTextEl);
        a.appendChild(buttonEl);
        res.appendChild(a);
        q.style.display="none";

        return;	
    }
    give_ques(quesindex);
}

var button;
var count;
var countmax;
var progressbar;
var timerID;
const time = 1000;

function start(max) {
    count = 0;
    countmax = max;
    progressbar = document.getElementById("bar");
    progressbar.max = countmax;
    timerID = setInterval(function(){update()},1000);
    //clearInterval(timerID);
}//end function

function update() {
    if (count >= countmax) {
        quit();
        progressbar.value = 0;
    }//end if
    count = count + 100;  
    progressbar.value = count;
}//end function

window.addEventListener('load', (event) => {
    start(time);
});

nextbutton.addEventListener('click', (event) => {
    nextques();
    clearInterval(timerID);
    start(time);
});
