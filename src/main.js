const data = window.data;
const btnIndicators = document.getElementById("indicators");
const listaIndicators = document.getElementById('list-indicator')
const tablaDataIndicators=document.getElementById("tabla-data")
btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators;
   if (sector === 'SH' || sector === 'SG') {
      listFemIndicators = listIndicators
   } else {
      listFemIndicators = window.WorldBank.filterFemIndicators(listIndicators);
   }

   let datos = '';
   for (let i = 0; i < listFemIndicators.length; i++) {
      datos += `<li id="${listFemIndicators[i].indicatorCode}" class="list">${listFemIndicators[i].indicatorName}.</li>`
      //datos += '<tr><td>Jill</td><td>Smith</td> <td>50</td></tr>'
   }
   document.getElementById('list-indicator').innerHTML = datos;

   const datosList = document.querySelectorAll('li.list');

 master
   datosList.forEach(dato => {
      dato.addEventListener('click', () => {
         let dataIndividual;
         const indicatorId = dato.id;
         const returnIndicatorsData = window.WorldBank.indicatorData(listFemIndicators, indicatorId);
         for(let i in returnIndicatorsData){
         dataIndividual +=
            ` <tr>
              <td> ${i} </td>
              <td>${ returnIndicatorsData[i]}</td>
              </tr>`
             tablaDataIndicators.innerHTML= dataIndividual;
             console.log(dataIndividual)
         }
      });
   })
})

   Array.from(datosList).forEach(dato => {
      dato.addEventListener('click', () => {
         const indicatorId = dato.id;
         const returnIndicatorsData = window.WorldBank.indicatorData(listFemIndicators, indicatorId);
         return returnIndicatorsData;
         //console.log(returnIndicatorsData);
      });
   })
})
master
