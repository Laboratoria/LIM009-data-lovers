const data = window.data;
const home = document.getElementById('home');
const indicatorsP = document.getElementById('indicators-p');
const homePage = document.getElementById('home-page');
const indicatorsPage = document.getElementById('indicators-page');
const dataIndicatorsPage = document.getElementById('page-data-indicators');
const btnIndicators = document.getElementById("indicators");
const tablaDataIndicators = document.getElementById("tabla-data");
const tablaEstadist = document.getElementById("tabla-estadist");
const orderDataBtn = document.getElementById("order-data-btn");
const paintCountry= document.getElementById("select-country2");
const paintSector= document.getElementById("select-sector2");
const paintIndicator= document.getElementById("paintIndicator");

const pages = (pageToShow) => {
<<<<<<< HEAD
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

=======
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
 
>>>>>>> origin

btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
<<<<<<< HEAD
   let listIndicators = window.worldBank.filterDataCountries(data, country, sector);
   let listFemIndicators = '';
=======
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators ='';
>>>>>>> origin
   if (sector === 'SH' || sector === 'SG') {
      listFemIndicators = listIndicators
   } else {
      listFemIndicators = window.worldBank.filterFemIndicators(listIndicators);
   }
<<<<<<< HEAD
// console.log(listFemIndicators);
=======
>>>>>>> origin

   let datos = '';
   for (let i = 0; i < listFemIndicators.length; i++) {
      datos += `<li id="${listFemIndicators[i].indicatorCode}" class="list">${listFemIndicators[i].indicatorName}.</li>`
   }
   document.getElementById('list-indicator').innerHTML = datos;

   const datosList = document.querySelectorAll('li.list');
<<<<<<< HEAD
// console.log(datosList);




=======
   let returnIndicatorsData;
>>>>>>> origin
   datosList.forEach(dato => {
      dato.addEventListener('click', () => {
         pages(dataIndicatorsPage);
         let dataIndividual = "";
         const indicatorId = dato.id;
<<<<<<< HEAD
         // console.log(typeof indicatorId)
         returnIndicatorsData = window.worldBank.indicatorData(listFemIndicators, indicatorId);
         const indicators = Object.entries(returnIndicatorsData);
         const tableHtml = renderPopulationTable(indicators);
         tablaDataIndicators.innerHTML = tableHtml;

         // let dataTable = (returnIndicatorsData, returnOrderDataTable) 
=======
         let labelSelectCountry= document.getElementById("country").selectedIndex;
         paintCountry.innerHTML=document.getElementsByTagName("option")[labelSelectCountry].label;
         let labelSelectSector= document.getElementById("sector").selectedIndex;
         paintSector.innerHTML= document.getElementsByTagName("option")[labelSelectSector].label;
         paintIndicator.innerHTML= dato;
         
>>>>>>> origin
        
         returnIndicatorsData = window.WorldBank.indicatorData(listFemIndicators, indicatorId);

<<<<<<< HEAD

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
=======
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
                  tablaDataIndicators.innerHTML= dataOrderIndividual;
               }
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
>>>>>>> origin
      })
   })
})

home.addEventListener('click', clickBtnhome)
indicatorsP.addEventListener('click', clickBtnIndicatorsP);