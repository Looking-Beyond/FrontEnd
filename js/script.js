google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Votes'],
        ['Candidato 1', 25],
        ['Candidato 2', 40],
        ['Candidato 3', 33],
    ]);
    var options = {'title':'Votos', 'width':300, 'height':300};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function validateRadio() {
  
  		if (document.form1.radioCand[0].checked == false && document.form1.radioCand[1].checked == false && document.form1.radioCand[2].checked == false ) {
    		alert('Por favor, selecione um candidato');
    		return false;
  		}
  		return true;
}

function validateRadioDelete() {
  
  		if (document.form3.radio1.checked == false) {
    		alert('Por favor, selecione um candidato para deletar!');
    		return false;
  		}
  		return true;
}

function validateForm() {
  
  		if (document.form2.nameCandidate.value == "" || document.form2.nameCandidate.value == null || document.form2.nameCandidate.value.length < 3) {
    		alert('Nome de candidato inválido');
    		return false;

  		}
  		return true;
 
}