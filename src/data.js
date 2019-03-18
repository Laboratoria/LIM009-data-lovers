
window.WorldBank = {
 filterDataContries:(data, country) => {
 const indicatorCountries = (data[country].indicators)
 const arrNameIndicator = indicatorCountries.map(objetIndicator => {
 const nameIndicator = objetIndicator.indicatorName;
 return nameIndicator;
 })
 return arrNameIndicator;
 },
}


//  window.WORLDBANK
//  const filterDataContries = (data, country) => {
//  const indicatorCountries = (data[country].indicators)
//  const arrNameIndicator = indicatorCountries.filter(objetIndicator => {
//  const nameIndicator = objetIndicator.indicatorName;
//  return nameIndicator;
//  })
//  return arrNameIndicator;
//  };
 
//  console.log(filterDataContries(WORLDBANK, 'MEX'));