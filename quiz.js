var myQuestions = [
    {
        question: "1. Which of the following shows multiple inheritances?",
        answers: {
             a: 'A->B->C',
             b: 'A->B; A->C',
             c: 'A,B->C',
             d: ' B->A'
        },
        correctAnswer: 'c'
    },
    {
        question: "2. C++ is ?",
        answers: {
            a: 'procedural programming language',
            b: 'object oriented programming language',
            c: 'functional programming language',
            d: 'both procedural and object oriented programming language'
        },
        correctAnswer: 'd'
    },
    {
        question: "3. Who invented C++?",
        answers: {
            a: 'Douglas Crockford',
            b: 'Bjarne Stroustrup',
            c: 'Brendan Eich',
            d: 'Dennis Ritchie'
        },
        correctAnswer: 'b'
    },
    {
        question: "4. Which of the following is a C++ object?",
        answers: {
            a: 'int',
            b: 'iostream',
            c: 'x[]',
            d: 'cout'
        },
        correctAnswer: 'd'
    },
    {
        question: "5. Which of the following is used to get user input in C++?",
        answers: {
            a: 'cout',
            b: 'stdio',
            c: 'cin',
            d: 'double'
        },
        correctAnswer: 'c'
    },
    {
        question: "6. Which of the following can use 'case' keyword?",
        answers: {
            a: 'switch',
            b: 'stdio',
            c: 'for loop',
            d: 'while loop'
        },
        correctAnswer: 'a'
    },
    {
        question: "7. Which of the following can be used for iteration in C++?",
        answers: {
            a: 'switch',
            b: 'stdio',
            c: 'for loop',
            d: 'function'
        },
        correctAnswer: 'c'
    },
    {
        question: "8. Wrapping data and its related functionality into a single entity is known as?",
        answers: {
            a: 'abstraction',
            b: 'encapsulation',
            c: 'polymorphism',
            d: 'modularity'
        },
        correctAnswer: 'b'
    },
    {
        question: "9. What does polymorphism in OOPs mean?",
        answers: {
           a: 'Concept of allowing overiding of functions',
           b: 'Concept of hiding data',
           c: 'Concept of keeping things in differnt modules/files',
           d: 'Concept of wrapping things into a single unit'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Which concept allows you to reuse the written code?",
        answers: {
            a: 'encapsulation',
            b: 'abstraction',
            c: 'inheritance',
            d: 'polymorphism'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
