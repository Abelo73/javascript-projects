

let icon = document.getElementById('icon');

if(localStorage.getItem('theme') == null){
	localData = localStorage.setItem('theme','dark');
}

let localData = localStorage.getItem('theme');

if(localData == 'light'){
	icon.src = "image/portfolio_site_img/moon.png";
	document.body.classList.remove('dark-theme');
}else if(localData == 'dark'){
	icon.src = "image/portfolio_site_img/sun.png";
	document.body.classList.add('dark-theme');

}

icon.onclick = function(){
	document.body.classList.toggle('dark-theme');

	if(document.body.classList.contains('dark-theme')){
		icon.src = "image/portfolio_site_img/sun.png";
		localStorage.setItem('theme','dark');
	}else{
		icon.src = "image/portfolio_site_img/moon.png";
		localStorage.setItem('theme','light');
	}
}