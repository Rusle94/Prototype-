
//modell for spørreundersøkelse
var count = 0;
var contentDiv = document.getElementById('content');
let moodRating = 0;
let questionStart = 0;
let questionNextNumber = 0;

let model = {
    
    ratingMap: {
    questionButton: ['NEXT', 'SUBMIT'],
    ratingOptions: ['', 'angry', 'frown', 'meh', 'smile', 'laugh'],
    questionNumber: ['Question 1/5', 'Question 2/5','Question 3/5','Question 4/5','Question 5/5' ],
    questions: ['How Was Your Mood today?', 'How was your Meal?', 'Did you like these questions?', 'Feel empty?', 'Do you like milk?',],
    },
    
};
