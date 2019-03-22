const data = window.data;
const btnIndicators = document.getElementById("indicators");
const listaIndicators = document.getElementById('list-indicator')
btnIndicators.addEventListener('click', () => {
   const country = document.getElementById("country").value;
   const sector = document.getElementById("sector").value;
   let listIndicators = window.WorldBank.filterDataCountries(data, country, sector);
   let listFemIndicators = window.WorldBank.filterFemIndicators(listIndicators);
   let pageDataIndicators=document.getElementById("page-data-indicators")
   let datos = '';
    for(let i = 0; i < listFemIndicators.length; i++){
       datos += 
       
      `<li id="${listFemIndicators[i].indicatorName}" class= "list"><a href="#page-data-indicators">${listFemIndicators[i].indicatorName}.</a></li>`
   };
    listaIndicators.innerHTML = datos;
    listaIndicators.querySelectorAll("li.list").forEach((element)=>{
    element.addEventListener("click",()=>{
    let dataIndicators = '';
    for(let i = 0; i < listFemIndicators.length; i++){
            dataIndicators +=`<p> ${Object.keys(listFemIndicators[i].data)} ${ Object.values(listFemIndicators[i].data)}</p>`
         pageDataIndicators.innerHTML = dataIndicators;
         console.log(dataIndicators)
       }
    })
   })
})
    