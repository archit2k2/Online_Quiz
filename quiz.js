var quizques = [{ques:"1. If we want to place text around an image, which CSS property should we use?",
                    a:"push",
                    b:"align",
                    c:"float",
                    d:"wrap",
                    ans:"ans3"},
                {ques:"2. If we want to use a nice dotted border around an image, which css property are we going to use?",
                    a:"border-line",
                    b:"border-style",
                    c:"border-decoration",
                    d:"dborder-color",
                    ans:"ans2"},
                {ques:"3. Suppose we want to arrange three DIVs so that DIV 3 is placed above DIV1. Now, which CSS property are we going to use to control the stack order?",
                    a:"d-index",
                    b:"s-index",
                    c:"x-index",
                    d:"z-index",
                    ans:"ans4"},
                {   ques:"4. Javascript is an ______ language?",
                    a:"Object-Oriented",
                    b:"Object-Based",
                    c:"Procedural",
                    d:"None of the above",
                    ans:"ans1"},
                {   ques:"5. Upon encountering empty statements, what does the Javascript Interpreter do?",
                    a:"Throws an error",
                    b:"Ignores the statements",
                    c:"Give a warning",
                    d:"None of the above",
                    ans:"ans2"},
                {   ques:"6. Which of the following methods can be used to display data in some form using Javascript?",
                    a:"document.write()",
                    b:"console.log()",
                    c:"window.alert()",
                    d:"All of the above",
                    ans:"ans4"},
                {   ques:"7. What keyword is used to check whether a given property is valid or not?",
                    a:"in",
                    b:"is in",
                    c:"lies",
                    d:"exists",
                    ans:"ans1"},
                {   ques:"8. When an operator's value is NULL, the typeof returned by the unary operator is :",
                    a:"Boolean",
                    b:"Undefined",
                    c:"Object",
                    d:"Integer",
                    ans:"ans3"},
                {   ques:"9. What does the Javascript debugger statement do?",
                    a:"It will debug the errors in the program at runtime.",
                    b:"it acts as a breakpoint in a program.",
                    c:"it will debug error in the current statement if any.",
                    d:"All of the above",
                    ans:"ans2"},
                {   ques:"10. An HTML document is saved with the ____ extension.",
                    a:".htl",
                    b:".html",
                    c:"hml",
                    d:".htnl",
                    ans:"ans2"}];

function Load(element)
{
    element.remove();
    var x = document.getElementById("ques-container");
    if (x.style.display === "")
    {
        x.style.display = "block";
    }
    abc();
}

const question = document.querySelector('#h2');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answer = document.querySelectorAll('.answer');

var count=0;

var corranswer=0;

function abc()
{
    question.innerHTML=quizques[count].ques;
    option1.innerHTML=quizques[count].a;
    option2.innerHTML=quizques[count].b;
    option3.innerHTML=quizques[count].c;
    option4.innerHTML=quizques[count].d;
}

function loadQues(element)
{
    count++;

    question.innerHTML=quizques[count].ques;
    option1.innerHTML=quizques[count].a;
    option2.innerHTML=quizques[count].b;
    option3.innerHTML=quizques[count].c;
    option4.innerHTML=quizques[count].d;

    var ans;
    answer.forEach((value)=>{

        if(value.checked)
        {
            ans=value.id;
        }
    });

    if(ans==quizques[count-1].ans)
    {
        corranswer++;
    }

    if(count==quizques.length-1)
    {
        element.remove();
        document.getElementById("button").style.justifyContent="flex-end";
    }
    
    var radio = document.querySelector('input[type=radio][name=answer]:checked');
    radio.checked = false;
}


function score()
{
    var ans;
    answer.forEach((value)=>{

        if(value.checked)
        {
            ans=value.id;
        }
    });

    if(ans==quizques[count].ans)
    {
        corranswer++;
    }

    document.getElementById("ques-container").remove();
    document.getElementById("marks").innerHTML =`${corranswer}/${quizques.length}`;
    var x = document.getElementById("score-container");
    if (x.style.display === "")
    {
        x.style.display = "block";
    }
    abc();
}
