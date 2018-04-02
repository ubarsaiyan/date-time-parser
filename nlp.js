window.onload = function(){

	$('.auto-save').savy('load');
	
	$('#submit-btn').on('click', function() {
		let text = $('#text').val().split(/\.\s|\n/), i;
		$('#result').html('');
		for (i = 0; i < text.length; i++){
			$('#result').append(chrono.parseDate(text[i], new Date(),{forwardDate: true})+'<br/>');
		}
	});
}


