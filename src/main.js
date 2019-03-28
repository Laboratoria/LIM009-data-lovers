const data = window.data;
const home =  document.getElementById('home');
const indicatorsP = document.getElementById('indicators-p');
const homePage = document.getElementById('home-page');
const indicatorsPage = document.getElementById('indicators-page');
const dataIndicatorsPage = document.getElementById('page-data-indicators');
const btnIndicators = document.getElementById("indicators");
const tablaDataIndicators = document.getElementById("tabla-data");
const tablaEstadist = document.getElementById("tabla-estadist");
const orderDataBtn = document.getElementById("order-data-btn");

const pages = (pageToShow) => {
   [homePage, indicatorsPage, dataIndicatorsPage].forEach(page => {
      page.classList.add('hide');
      page.classList.remove('show')
   })
   pageToShow.classList.add('show');
   pageToShow.classList.remove('hide');
}

const clickBtnhome = () => {
   pages(homePage);
};

const clickBtnIndicatorsP = () => {
   pages(indicatorsPage);
};

btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators ='';
   if (sector === 'SH' || sector === 'SG') {
      listFemIndicators = listIndicators
   } else {
      listFemIndicators = window.WorldBank.filterFemIndicators(listIndicators);
   }

   let datos = '';
   for (let i = 0; i < listFemIndicators.length; i++) {
      datos += `<li id="${listFemIndicators[i].indicatorCode}" class="list">${listFemIndicators[i].indicatorName}.</li>`

   }
   document.getElementById('list-indicator').innerHTML = datos;

   const datosList = document.querySelectorAll('li.list');
   let returnIndicatorsData;
   datosList.forEach(dato => {
      dato.addEventListener('click', () => {
         pages(dataIndicatorsPage);

         let dataIndividual = "";
         const indicatorId = dato.id;
         returnIndicatorsData = window.WorldBank.indicatorData(listFemIndicators, indicatorId);

         for (let i in returnIndicatorsData) {
            if (returnIndicatorsData[i] !== "") {
               dataIndividual +=
                  ` <tr><td> ${i} </td>
                <td>${ returnIndicatorsData[i].toFixed(2)}</td></tr>`;
               tablaDataIndicators.innerHTML= dataIndividual;
               
            }
         }
         orderDataBtn.addEventListener('click', () => {
            tablaDataIndicators.innerHTML = "";
            const selectOrder = document.getElementById('select-order').value;
            let returnOrderDataTable = window.WorldBank.orderDataTable(returnIndicatorsData, selectOrder);
            let  dataOrderIndividual="";
            for(let value of returnOrderDataTable){
               if(value[1] !== "") {
                  dataOrderIndividual +=
                     ` <tr><td> ${value[0]} </td>
                   <td>${ value[1].toFixed(2)}</td></tr>`;
                  // tablaDataIndicators.innerHTML = dataIndividual;
                  tablaDataIndicators.innerHTML= dataOrderIndividual;
               }
            // returnOrderDataTable.innerHTML = dataIndividual;
         }
         })    

         let arrayData = Object.values(returnIndicatorsData);
         let arrayFilterNumberData = arrayData.filter(Number);
         let minData = Math.min(...arrayFilterNumberData).toFixed(2)
         let maxData = Math.max(...arrayFilterNumberData).toFixed(2)
         let promData = window.WorldBank.averageData(arrayFilterNumberData).toFixed(2)
         let statisticalTable =
            `<tr> <th>Datos estadisticos</th> <th>Valores</th> </tr> 
         <tr> <td> Min. </td>
          <td>${minData}</td>
         </tr>
         <tr> <td> Max. </td>
          <td>${maxData}</td>
         </tr>
         <tr> <td> Promedio </td>
          <td>${promData}</td>
         </tr>`
         tablaEstadist.innerHTML = statisticalTable;
      })
   })
})

home.addEventListener('click', clickBtnhome)
indicatorsP.addEventListener('click', clickBtnIndicatorsP);