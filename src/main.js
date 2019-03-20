
const data = WORLDBANK;
const selectCountry = document.getElementById("filtrar-pais")
let country;
let result;
const buttonIndicators= document.getElementById("indicators")
const selectSector= document.getElementById("filtrar-sector")
let sector;

selectCountry.addEventListener("click", ()=>{
country = selectCountry.value;
console.log(country)}
 );

selectSector.addEventListener("click", ()=>{
sector= selectSector.value;
console.log(sector);
 }
 )


 buttonIndicators.addEventListener("click", ()=>{
    result = window.WorldBank.filterDataCountries(data,country,sector);
    console.log(result)
    let datos = '';
    const listIndicators = document.getElementById('list-indicator')
    for(let i = 0; i < result.length; i++){
      console.log(result[i].indicatorName)
       datos += `<p>${result[i].indicatorName}</p>`
    }
    listIndicators.innerHTML=datos;
    //return result,
    })




