
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
const listIndicators = document.getElementById('list-indicator')
listIndicators.innerHTML=result;
return result,
console.log(result)
})




