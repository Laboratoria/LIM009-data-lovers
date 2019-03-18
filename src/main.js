/* Manejo del DOM */
const data = WORLDBANK;
const selectCountry = document.getElementById("filtrar-pais")
let country;
let result;
const buttonIndicators= document.getElementById("indicators")

selectCountry.addEventListener("change", ()=>{
country = selectCountry.value;
console.log(country)}
 );

//  const listIndicators = document.getElementById('list-indicator')
// let indicatorsList = '';
// data.forEach((newArray)=>{
//     const dataIndicator=`
//             <ul>
//             <li><a href="#list-indicator" data-indicador="${newArray.indicatorName}"> ${newArray.indicatorName} </a> </li>
//             </u>
//         `;
//     indicatorsList += dataIndicator;
// });

// listIndicators.innerHTML = indicatorsList;

buttonIndicators.addEventListener("click", ()=>{
result = window.WorldBank.filterDataContries(data, country);
const listIndicators = document.getElementById('list-indicator')
listIndicators.innerHTML=result;
return result,
console.log(result)
})

{/* <button id="indicators">Ver Indicadores</button> */}
{/* <section id="selectorBox">
<select id="filtrar-pais" name="paises" class="selectors">>
  <option value="PER">Perú</option>
  <option value="MEX">Mexico</option>
  <option value="CHL">Chile</option>
  <option value="BRA">Brasil</option>
</select> */}


// const filterCountries = () =>{
//     console.log("Hola Mundo")
// }