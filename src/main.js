const data = window.data;
const home = document.getElementById('home');
const indicatorsP = document.getElementById('indicators-p');
const homePage = document.getElementById('home-page');
const indicatorsPage = document.getElementById('indicators-page');
const dataIndicatorsPage = document.getElementById('page-data-indicators');
const btnIndicators = document.getElementById("indicators");
const tablaDataIndicators = document.getElementById("tabla-data");
// const tablaEstadist = document.getElementById("tabla-estadist");
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
//ORIGINALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

const clickBtnIndicatorsP = () => {
   pages(indicatorsPage);
};

let returnIndicatorsData;

orderDataBtn.addEventListener('click', () => {
   const selectOrder = document.getElementById('select-order').value;
   const indicators = Object.entries(returnIndicatorsData);
   const orderedData = window.worldBank.orderDataTable(indicators, selectOrder);
   const tableHtml = renderPopulationTable(orderedData);
   tablaDataIndicators.innerHTML = tableHtml;
});


btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.worldBank.filterDataCountries(data, country, sector);
   let listFemIndicators = '';
   if (sector === 'SH' || sector === 'SG') {
      listFemIndicators = listIndicators;
   } else {
      listFemIndicators = window.worldBank.filterFemIndicators(listIndicators);
   }
// console.log(listFemIndicators);

   let datos = '';
   for (let i = 0; i < listFemIndicators.length; i++) {
      datos += `<li id="${listFemIndicators[i].indicatorCode}" class="list">${listFemIndicators[i].indicatorName}.</li>`
   }
   document.getElementById('list-indicator').innerHTML = datos;

   const datosList = document.querySelectorAll('li.list');
// console.log(datosList);




   datosList.forEach(dato => {

      dato.addEventListener('click', () => {

         pages(dataIndicatorsPage);

         const indicatorId = dato.id;
         // console.log(typeof indicatorId)
         returnIndicatorsData = window.worldBank.indicatorData(listFemIndicators, indicatorId);
         const indicators = Object.entries(returnIndicatorsData);
         const tableHtml = renderPopulationTable(indicators);
         tablaDataIndicators.innerHTML = tableHtml;

         // let dataTable = (returnIndicatorsData, returnOrderDataTable) 
        


         // let arrayData = Object.values(returnIndicatorsData);
         // let arrayFilterNumberData = arrayData.filter(Number);
         // let minData = Math.min(...arrayFilterNumberData).toFixed(2)
         // let maxData = Math.max(...arrayFilterNumberData).toFixed(2)
         // let promData = window.worldBank.averageData(arrayFilterNumberData).toFixed(2)
         // let statisticalTable =
         //    `<tr> <th>Datos estadisticos</th> <th>Valores</th> </tr> 
         // <tr> <td> Min. </td>
         //  <td>${minData}</td>
         // </tr>
         // <tr> <td> Max. </td>
         //  <td>${maxData}</td>
         // </tr>
         // <tr> <td> Promedio </td>
         //  <td>${promData}</td>
         // </tr>`
         // tablaEstadist.innerHTML = statisticalTable;
         // })   
      })
   })
})
/*
  @param data An array of arrays
*/
const renderPopulationTable = (data) => {
   let tableHtml = "";
   // data.each(([year, percentage]) => {
   //    if (year.trim() === "" || percentage.trim() === "") {
   //       return
   //    }

   //    tableHtml += ` <tr>
   //          <td>${year}</td>
   //          <td>${percentage}</td>
   //       </tr>`
     
   // })

   for (let i in data) {
     let yearAndPercentage = data[i];
     let year = yearAndPercentage[0];
     let percentage = yearAndPercentage[1];
     if (year !== "" || percentage !== "") {
      const rowHtml = ` <tr>
            <td>${year}</td>
            <td>${percentage}</td>
         </tr>`
         tableHtml += rowHtml;
     }
   }
   return tableHtml;
}

home.addEventListener('click', clickBtnhome)
indicatorsP.addEventListener('click', clickBtnIndicatorsP);