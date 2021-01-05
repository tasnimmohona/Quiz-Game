var questions = document.querySelector("question");

var array = ["1. Which web browser is the first web browser from the following?",
    "2. What is always comming but never arrives?",
    "3. What does come down but never gows up?",
    "4. some month have 31 days,others have 30 days,which have 28 days?",
    "5. what has a head,a tail but does not have a body?",
    "6. Do you know which room has no wall?",
    "7. how can a woman go eight days without sleep?",
    "8. what can you never eat for breakfast?",
    "9. Think abut a circle.how many sides does a circle have?",
    "10. What is the coldest country in the world?",

]




var arraybtn1 = ["mosaic", "today", "rain", "February", "tree", "bigger's room", "drug addicted", "sleep", "inside and outside", "Iceland"]


var arraybtn2 = ["opera", "tomorrow", "apple", "all the month have", "coin", "poor people's room", "she was sick", "rice", "noside", "china"]

var arraybtn3 = ["chrome", "yesterday", "bird", "december", "man", "wash room", "she sleep at nighth", "none", "one side", "Chili"]


var arraybtn4 = ["aloha", "friday", "none", "none", "rain", "mushroom", "she was mad", "lunch or dinner", "other side", "sweden"]

var correctAns = ["mosaic", "tomorrow", "rain", "all the month have", "coin", "mushroom", "she sleep at nighth", "lunch or dinner", "inside and outside", "Chili"]



/*ques next start*/

var count = 0;
var nextt = document.querySelector("#next");
nextt.addEventListener("click", function() {
    count++;

    var m = document.querySelector(".question");
    m.classList.add("question");
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");
    var btn3 = document.querySelector("#btn3");
    var btn4 = document.querySelector("#btn4");
    changeColor();
    var score = document.querySelector("#score");


    m.classList.add("question");
    if (count >= array.length) {
        count = 0;
        m.innerHTML = array[count];
        btn1.innerHTML = arraybtn1[count];
        btn2.innerHTML = arraybtn2[count];
        btn3.innerHTML = arraybtn3[count];
        btn4.innerHTML = arraybtn4[count];
        score.innerHTML = "Gameover " + "your total score is " + counterr;
    } else {
        m.innerHTML = array[count];
        btn1.innerHTML = arraybtn1[count];
        btn2.innerHTML = arraybtn2[count];
        btn3.innerHTML = arraybtn3[count];
        btn4.innerHTML = arraybtn4[count];
    }

});

// check ans.

//for button 1
var counterr = 0;
var s = 1;
var btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {

    if (arraybtn1[count] == correctAns[count]) {
        document.getElementById('btn1').style.backgroundColor = "green";
        score.innerHTML = "score: " + s++;
        counterr++;

    } else {
        document.getElementById('btn1').style.backgroundColor = 'red';
        if (arraybtn2[count] == correctAns[count]) {
            document.getElementById('btn2').style.backgroundColor = 'green';

        } else if (arraybtn3[count] == correctAns[count]) {
            document.getElementById('btn3').style.backgroundColor = 'green';

        } else if (arraybtn4[count] == correctAns[count]) {
            document.getElementById('btn4').style.backgroundColor = 'green'

        }


    }

});




//for button 2

var counterr = 0;

var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {

    if (arraybtn2[count] == correctAns[count]) {
        document.getElementById('btn2').style.backgroundColor = 'green';
        score.innerHTML = "score " + s++;
        counterr++;


        changeColor1();
    } else {
        document.getElementById('btn2').style.backgroundColor = 'red';

        if (arraybtn1[count] == correctAns[count]) {
            document.getElementById('btn1').style.backgroundColor = 'green';

        } else if (arraybtn3[count] == correctAns[count]) {
            document.getElementById('btn3').style.backgroundColor = 'green';

        } else if (arraybtn4[count] == correctAns[count]) {
            document.getElementById('btn4').style.backgroundColor = 'green';

        }

    }
});


//for button 3
var counterr = 0;

var btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function() {

    if (arraybtn3[count] == correctAns[count]) {
        document.getElementById('btn3').style.backgroundColor = 'green';
        score.innerHTML = "score " + s++;
        counterr++;

        changeColor1();
    } else {
        document.getElementById('btn3').style.backgroundColor = 'red';

        if (arraybtn1[count] == correctAns[count]) {
            document.getElementById('btn1').style.backgroundColor = 'green';

        } else if (arraybtn2[count] == correctAns[count]) {
            document.getElementById('btn2').style.backgroundColor = 'green';

        } else if (arraybtn4[count] == correctAns[count]) {
            document.getElementById('btn4').style.backgroundColor = 'green';

        }

    }
});

//for button 4
var counterr = 0;

var btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function() {

    if (arraybtn4[count] == correctAns[count]) {
        counterr++;

        document.getElementById('btn4').style.backgroundColor = 'green';
        score.innerHTML = "score " + s++;

        changeColor1();

    } else {
        document.getElementById('btn4').style.backgroundColor = 'red';

        if (arraybtn1[count] == correctAns[count]) {
            document.getElementById('btn1').style.backgroundColor = 'green';

        } else if (arraybtn2[count] == correctAns[count]) {
            document.getElementById('btn2').style.backgroundColor = 'green';

        } else if (arraybtn3[count] == correctAns[count]) {
            document.getElementById('btn3').style.backgroundColor = 'green';

        }

    }
});


function changeColor() {
    document.getElementById('btn1').style.backgroundColor = 'rgb(38, 218, 218)';
    document.getElementById('btn2').style.backgroundColor = 'rgb(38, 218, 218)';
    document.getElementById('btn3').style.backgroundColor = 'rgb(38, 218, 218)';
    document.getElementById('btn4').style.backgroundColor = 'rgb(38, 218, 218)';

}


var finalresult = document.getElementById("finalResult");

function refresh() {
    var refresh = window.location.reload("Refresh");

}