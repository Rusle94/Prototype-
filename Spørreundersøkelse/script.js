
function show() {
	
    const disabledOrNot = moodRating === 0 ? 'disabled' : '';
	contentDiv.innerHTML = ` <br>
		<div class="col-md-3"></div>
		<div class="col-md-6 well">
		<div>
			<h4>${model.ratingMap.questionNumber[questionNextNumber]}:</h4>
			<div>${model.ratingMap.questions[questionStart]}</div>
			<br>
			<fieldset>${ [1,2,3,4,5].map(n=>
				`<input onclick="clickRating(${n})" style="color:${moodRating == n ? 'orange' : 'black'};font-size:40px;cursor:pointer;" class="far fa-${model.ratingMap.ratingOptions[n]}"/>`
				).join('')}
			</fieldset>
		</div>
		<br />
		<div class="form-group">
			<h6>Additional comment:</h6>
			<textarea id="review" class="form-control" style="resize:none; width: 300px; height:100px;"></textarea>
		</div>
		<button type="submit" id="nxtButton" class="btn btn-success" onclick="nextButton(this)" ${disabledOrNot}>${model.ratingMap.questionButton[0]}</button> <br />`;
}
show();
function clickRating(value) {
	moodRating = value !== moodRating ? value : 0;
	show();
}
function nextButton(submit) {
	if (questionStart != 4){
		questionStart++;
		questionNextNumber++;
		show();

	}
	if (questionStart === 5) {
		submit.innerHTML = model.ratingMap.questionButton[1];
		contentDiv.innerHTML = `<h4>SUBMITTED<h4>`; 
	}
	
}

