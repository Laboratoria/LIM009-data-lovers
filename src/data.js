window.worldBank = {
  filterDataCountries: (data, country, sector) => {
    const sectorCodeCountries = (data[country].indicators);
    const arrSectorCodeIndicator = sectorCodeCountries.filter(objSector => {
      const SectorCode = objSector.indicatorCode.startsWith(sector);
      return SectorCode;
    });
    // console.log(arrSectorCodeIndicator);
    return arrSectorCodeIndicator;
  },

  filterFemIndicators: (data) => {
    const genFem = data.filter(filterFem => {
      const arrFemSector = filterFem.indicatorCode.includes('.FE');
      return arrFemSector;
    });
    return genFem;
  },

  indicatorData: (listFemIndicators, indicatorId) => {
    let obj = {};
    for (let i = 0; i < listFemIndicators.length; i++) {
      if (listFemIndicators[i].indicatorCode === indicatorId) {
        obj = listFemIndicators[i].data;
      } else {
        return obj;
      }      
    }
    return obj;
  },

  orderDataTable: (data, order) => {
    let arrData = [];
    if (order === 'asc') {
      arrData = data.concat().sort((prev, next) => {
        return prev[1] - next[1];
      });
    } else {
      arrData = data.concat().sort((prev, next) => {
        return next[1] - prev[1];
      });
    }
    return arrData;
    // console.log(arrData);
  },

  averageData: (arrData) => { // Función para calcular el promedio
    let sum = arrData.reduce((previous, current) => previous + current);
    let avgDat = sum / arrData.length;
    return avgDat;
  },
};
