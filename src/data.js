window.worldBank = {
    filterDataCountries: (data, country, sector) => {
        const sectorCodeCountries = (data[country].indicators);
        const arrSectorCodeIndicator = sectorCodeCountries.filter(objSector => {
            const sectorCode = objSector.indicatorCode.startsWith(sector);
            return sectorCode;
        })
        return arrSectorCodeIndicator;
    },

    filterFemIndicators: (data) => {
        const genFem = data.filter(filterFem => {
            const arrFemSector = filterFem.indicatorCode.includes('.FE');
            return arrFemSector;
        })
        return genFem;
    },

    indicatorData: (listFemIndicators, indicatorId) => {
        let obj ='';
        for(let i = 0; i < listFemIndicators.length; i++){
           if (listFemIndicators[i].indicatorCode === indicatorId){
              obj = listFemIndicators[i].data;
           }
        }
        return obj;
    },

    orderDataTable: (returnIndicatorsData, order) => {
        const arrData = Object.entries(returnIndicatorsData);
        if (order === 'asc') {
            arrData.sort((prev, next) => { return prev[1] - next [1];
            })
        } else {
             arrData.sort((prev, next) => {
                    return next [1] - prev [1];
                })
            }
        return arrData;
    },

    averageData: (arrData) => { // Función para calcular el promedio
            let sum = arrData.reduce((previous, current) =>  previous+current)
            let avgDat = sum / arrData.length;
            return avgDat;
      },
}
