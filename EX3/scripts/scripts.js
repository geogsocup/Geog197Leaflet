function sampleLangPogi(){
	var x;
	x = "Pag nabasa mo to magkakajowa ka na soon";
	console.log(x);
}

/**function quickMaths(){
	var una;
	var pangalawa;
	var pinagsama;
	
	una = 1;
	pangalawa = 1;
	
	pinagsama = una + pangalawa;
	console.log(pinagsama);
}**/

function solve() {
    var x = parseInt(document.getElementById("firstNo").value);
    var y = parseInt(document.getElementById("secondNo").value);
    var sum = x + y;
    document.getElementById("kasagutan").innerHTML = sum;
}


//sampleLangPogi();
//quickMaths();