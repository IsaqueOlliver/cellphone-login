let lang_br = ["Bem-vindo.", "Selecione a linguagem.", "Próximo"];
let lang_en = ["Welcome.", "Select your language.", "Next"];

function chooseLang() {
	$("div.touch").animate({
		backgroundColor: "#FFFFFF",
	}, 1500);

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
	}, 2000);
}

function setLang(lang) {
	let set;
	if(lang == 'br') {
		set = lang_br;
	}else{
		set = lang_en;
	}

	console.log(set);

	document.querySelector("div.touch h1").innerHTML = `${set[0]}`;
	document.querySelector("div.touch p").innerHTML = `${set[1]}`;
	document.querySelector("div.touch button").innerHTML = `${set[2]}`;
}

$(document).ready(function(){
	chooseLang();
});