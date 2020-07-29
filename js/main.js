$(document).ready(function(){
	
	//Slider

	$(".slider").bxSlider({
		mode: 'fade',
		captions: false,
		slideWidht: 600,
		responsive: true,
		auto: true,
		pause: 5000
	});	

	//Post

	var posts = [
		{
			title:'Prueba titulo 1',
			date: 'Publicado el dia: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
		},
		{
			title:'Prueba titulo 2',
			date: 'Publicado el dia: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
		},
		{
			title:'Prueba titulo 3',
			date: 'Publicado el dia: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
		},
		{
			title:'Prueba titulo 4',
			date: 'Publicado el dia: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
		},
		{
			title:'Prueba titulo 5',
			date: 'Publicado el dia: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
		},
		{
			title:'Prueba titulo 6',
			date: 'Publicado el dia: ' + moment().date() + ' de '+ moment().format('MMMM') + ' del ' + moment().format('YYYY'),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
		}
	];

	posts.forEach((item, index) =>{
		var post = `
			<article class="posts">
		 	<h2>${item.title}</h2>
			<span class="date">${item.date}</span>
			<p>
				${item.content}
			</p>
			<a href="#" class="boton-mas">Leer mas</a>
			</article>
				`;
			$('#post').append(post);
	});

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
});