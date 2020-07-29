$(document).ready(function(){
	
	//Selector de tema

	var theme = $('#theme');
	var colorTheme = localStorage.getItem('color-tema');

	//Forma if
	if(colorTheme == 'green'){
		theme.attr('href','css/green.css');
	}else if (colorTheme == 'blue') {
		theme.attr('href','css/blue.css');
	}else if (colorTheme == 'red'){
		theme.attr('href','css/red.css');
	}

	//Forma switch
		/*switch(colorTheme){
		case 'green':
			theme.attr('href','css/green.css');
			break;
		case 'red':
			theme.attr('href','css/red.css');
			break;
		case 'blue':
			theme.attr('href', 'css/blue.css');
			break;*/


	$('#to-green').click(function(){
		theme.attr('href','css/green.css');
		localStorage.setItem('color-tema', "green");
	});
	$('#to-red').click(function(){
		theme.attr('href','css/red.css');
		localStorage.setItem('color-tema', "red");
	});
	$('#to-blue').click(function(){
		theme.attr('href','css/blue.css');
		localStorage.setItem('color-tema', "blue");
	});

	//scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		},500);

		return false;
	});

	//Login Falso

	$('#login form').submit(function(){

		var form_name = $('#form_name').val();

		localStorage.setItem('form_name',form_name);
	});

	var form_name = localStorage.getItem('form_name');

	if(form_name != null && form_name !='undifined'){
		var about_parrafo = $('#about p');

		about_parrafo.html('<br><strong>Bienvenido, '+form_name+"</strong>");
		about_parrafo.append('<br><br><button id="logout">Cerrar Sesion</button>');

		$('#login').hide();

		$('#logout').click(function(){
			localStorage.removeItem('form_name',form_name);

			location.reload();
		});
	}

	//Reloj

	setInterval(function(){
		var reloj = moment().format('h:mm:ss a');
		$('#reloj').html(reloj);
	},1000);

});