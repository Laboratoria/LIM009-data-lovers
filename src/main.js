const data = window.data;
const btnIndicators = document.getElementById("indicators");
const listaIndicators = document.getElementById('list-indicator')
btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators = window.WorldBank.filterFemIndicators(listIndicators);
   let datos = '';
    for(let i = 0; i < listFemIndicators.length; i++){
       datos += 
       
      `<li><a href="#page-data-indicators" id="list" >${listFemIndicators[i].indicatorName}.</a></li>`
       
      listaIndicators.innerHTML = datos;
    }
    })
   });
    