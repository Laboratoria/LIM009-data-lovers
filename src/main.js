const data = window.data;
const btnIndicators = document.getElementById("indicators");
btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators;
   if (sector === 'SH' || sector === 'SG'){
      listFemIndicators = listIndicators
   } else {
      listFemIndicators = window.WorldBank.filterFemIndicators(listIndicators);
   }
   
   let datos = '';
    for(let i = 0; i < listFemIndicators.length; i++){
       datos += `<li id="${listFemIndicators[i].indicatorCode}" class="list">${listFemIndicators[i].indicatorName}.</li>`
       //datos += '<tr><td>Jill</td><td>Smith</td> <td>50</td></tr>'
    }
    document.getElementById('list-indicator').innerHTML = datos;

   const datosList = document.querySelectorAll('li.list');
   Array.from(datosList).forEach(dato => {
      dato.addEventListener('click', (e) => {
         // debugger
         console.log(e.target.id);
      });
  });
});