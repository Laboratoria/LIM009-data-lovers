/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const peru = indicators.filter(indicator => (indicator.indicatorName));
// console.log(peru);

const filterData = (data) => {
  const indicatorPer = (data.PER.indicators)
  const arrNameIndicator = indicatorPer.map(objetIndicator => {
    const nameIndicator = objetIndicator.indicatorName;
    return nameIndicator;
  })
  console.log(arrNameIndicator);
};
 
filterData(WORLDBANK);

// window.example = example;
