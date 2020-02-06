//modell for spørreundersøkelse //stella
var count = 0;
var contentDiv = document.getElementById('content');
let moodRating = 0;

let model = {

    ratingMap: {
        ratingOptions: ['', 'angry', 'frown', 'meh', 'smile', 'laugh'],
        questionNumber: ['Question 1/5', 'Question 2/5', 'Question 3/5', 'Question 4/5', 'Question 5/5'],
        questions: ['How Was Your Mood today?', 'How was your Meal?', 'Did you like these questions?', 'Feel empty?', 'Do you like milk?', ],
    },


};



//model // aleks n
let names = [

    { descripton: 'per', isDone: true, AdminUser: '', dateDeadline: '16-12-1948', doneDate: '17-10-1960' },
    { descripton: 'Tysgrul', isDone: false, AdminUser: '', dateDeadline: '20-2-1342fk', doneDate: '20-2-0' },
    { descripton: 'Songly', isDone: false, AdminUser: '', dateDeadline: '31-10-9241', doneDate: '10-3-1091' },

];