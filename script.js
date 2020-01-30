var count = 0;

var contentDiv = document.getElementById('content');
let orangeOrNot = "black";
let moodRating = 0;
let model = {
	ratingOptions: ['', 'angry','frown', 'meh', 'smile', 'laugh']
};

show();
function show() {
	const disabledOrNot = moodRating === 0 ? 'disabled' : '';
	contentDiv.innerHTML = ` <br>
		<div class="col-md-3"></div>
		<div class="col-md-6 well">
		<div>
			<h4>Question 1/5:</h4>
			<div id="question">How was your mood today?</div>
			<br>
			<fieldset>${ [1,2,3,4,5].map(n=>
				`<input onclick="clickRating(${n})"  id="1" style="color:${moodRating == n ? 'orange' : 'black'};font-size:40px;cursor:pointer;" class="far fa-${model.ratingOptions[n]}"/>`
				).join('')}
			</fieldset>
		</div>
		<br />
		<div class="form-group">
			<h6>Additional comment:</h6>
			<textarea id="review" class="form-control" style="resize:none; width: 300px; height:100px;"></textarea>
		</div>
		<button type="submit" id="nxtBTN" class="btn btn-success" onclick="nextButton()" ${disabledOrNot} >NEXT</button> <br />
		<div id="result"></div><br> `;
}


show();

function clickRating(value) {
	moodRating = value === moodRating ? 0 : value;
	show();
	//lastSelectedIcon.style.color = "black";
	//show();
	// if (selectedIcon.style.color == "orange") {
	// 	orangeOrNot = "black";
	// 	console.log("i o or n if", orangeOrNot)
	// 	show();
	// }
	// else {
	// 	orangeOrNot = 'orange';
	// 	disabledOrNot = "";
	// 	show();
	// }
}


function nextButton() {
	window.location = ("index2.html");
}



