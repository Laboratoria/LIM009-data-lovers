const data = window.data;
const btnIndicators = document.getElementById("indicators");
btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators = window.WorldBank.filterFemIndicators(listIndicators);
   let datos = '';
    for(let i = 0; i < listFemIndicators.length; i++){
       datos += `
       <ul>
       <li><a href="#page-data-indicators">${listFemIndicators[i].indicatorName}.</a></li>
       </ul>`
      document.getElementById('list-indicator').innerHTML = datos;
    }
});