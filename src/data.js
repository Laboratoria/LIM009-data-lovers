const filterData = (data) => {
  const indicatorPer = (data.PER.indicators)
  const arrNameIndicator = indicatorPer.map(objetIndicator => {
    const nameIndicator = objetIndicator.indicatorName;
    return nameIndicator;
  })
  return arrNameIndicator;
};
 
filterData(WORLDBANK)