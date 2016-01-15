$(document).ready(function(){
/*	$('#addTextButton').click(function(){
		$('#foo').append('<b>some text!</b>')
	}); */
	$('#addTextButton').click(function(){ // кликая на айди addTextButton выполняется функция:
		$('#foo').empty();
		$('#foo').append($('input[name=quest-title]').val() + "<br>"); // обращение к фоо 
		$('#foo').append($('input[name=quest-cover]').val() + "<br>");
		$('#foo').append($('textarea[name=quest-description]').val() + "<br>");
	});

});








/*
$(document).ready(function(){
	прослушиватель событий (отлавливать: клик онлик)
  alert('вы нажали далее');
}); */


// ИЗ BOTTON:: onclick="alert('вы нажали далее'); return false"