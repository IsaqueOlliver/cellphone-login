let lang_br = ["Bem-vindo.", "Selecione a linguagem:", "Próximo", "Qual desses você gosta mais?", "Ou..."];
let lang_en = ["Welcome.", "Select your language:", "Next", "Which one do you like more?", "Or..."];
let lang_save = "en";
let atual_screen = "language";

function chooseLang() {
	$("div.touch").animate({
		backgroundColor: "#FFFFFF",
	}, 2000);

	setTimeout(function(){
		$("div.touch h1").animate({
			opacity: 1
		}, 1000);

		setTimeout(function(){
			$("div.touch p").animate({
				opacity: 1
			}, 1000);

			setTimeout(function(){
				$("div.touch img").animate({
					opacity: 1
				}, 1000);

				setTimeout(function(){
					$("div.touch button").animate({
						opacity: 1
					}, 1000);
				}, 2000);

			}, 2000);
		}, 2000);
	}, 2500);
}

function setLang(lang) {
	let set;
	if(lang == 'br') {
		set = lang_br;
		lang_save = "br";
	}else{
		set = lang_en;
		lang_save = "en";
	}

	if(atual_screen == "language") {
		document.querySelector("div.touch h1").innerHTML = `${set[0]}`;
		document.querySelector("div.touch p").innerHTML = `${set[1]}`;
		document.querySelector("div.touch button").innerHTML = `${set[2]}`;
	}else if(atual_screen == "modo_cor") {
		document.querySelector("div.touch h1").innerHTML = `${set[3]}`;
		document.querySelector("div.touch p").innerHTML = `${set[4]}`;
		document.querySelector("div.touch button").innerHTML = `${set[2]}`;
	}
}

function setBg(color) {
	$("div.touch").animate({
		backgroundColor: color,
	}, 1500);

	if(color == "#1a1a1a") {
		$("div.touch h1").animate({"color": "#FFFFFF"}, 1500);
	}else{
		$("div.touch h1").animate({"color": "#000000"}, 1500);
	}
}

$(document).ready(function(){
	chooseLang();
});

$(".nxt-btn").click(function(){
	
	if(atual_screen == "language") {
		atual_screen = "modo_cor";
		
		$("div.touch h1").animate({
			opacity: 0
		}, 1000);
		
		$("div.touch p").animate({
			opacity: 0
		}, 1000);

		$("div.touch img").animate({
			opacity: 0
		}, 1000);
				
		$("div.touch button").animate({
			opacity: 0
		}, 1000);


		setTimeout(function(){
			let div = document.querySelector("div.touch");

			div.innerHTML = `

				<h1> Which one do you like more? </h1>

				<p>Or...</p>

				<div onclick="setBg('#1a1a1a')" style="width: 50px; height: 50px; background-color: #1a1a1a; border-radius: 15px; box-shadow: 1px 1px 2px black; float: left; margin-left: 15%;"></div>
		
				<div onclick="setBg('#FFFFFF')" style="width: 50px; height: 50px; background-color: #FFFFFF; border-radius: 15px; box-shadow: 1px 1px 2px black; float: right; margin-right: 15%;"></div>
			
				<button class="nxt-btn">Next</button>
			`;

			setLang(lang_save);

			$("div.touch h1").css({"marginLeft": "15px"});
			$("div.touch p").css({"color": "#FFFFFF", "fontSize": "25px", "marginLeft": "15px"});

			$("div.touch h1").animate({
				opacity: 1,
			}, 1000);

			setTimeout(function(){
				$("div.touch").animate({
					backgroundColor: "#1a1a1a",
				}, 1500);
			
				$("div.touch h1").animate({"color": "#FFFFFF"}, 1500);
			}, 1500);


			setTimeout(function(){
				$("div.touch p").animate({
					opacity: 1,
				}, 1500);
			
				setTimeout(function(){
					$("div.touch p").animate({
						color: "#000000",
					}, 1500);

					$("div.touch").animate({
						backgroundColor: "#FFFFFF",
					}, 1500);
			
					$("div.touch h1").animate({"color": "#000000"}, 1500);

					setTimeout(function(){
						$("div.touch p").animate({
							opacity: 0,
						}, 1500);

						$("div.touch div").animate({
							opacity: 1,
						}, 1500);

						setTimeout(function(){
							$("div.touch button").animate({
								opacity: 1
							}, 1000);
						}, 2000);

					}, 2000);

				}, 2000);
			}, 3500);

		}, 1500);
	}

});