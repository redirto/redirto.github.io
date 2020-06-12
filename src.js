let delaySec = 5;

let changeLabel = function(num) {
	cmd = function() {
		document.getElementById('rtext').innerHTML = "Вы будете перенаправлены на нужную страницу в течении " + String(num) + " секунд..."
		if (num == 0) { submit() }
		}
	delay = (delaySec * 1000) - (num * 1000);
	setTimeout(cmd, delay);
}
let submit = function() {
	location.href = window.location.search.substr(1);
}
for(let i = delaySec; i != -1; i--) {
	changeLabel(i);
}