window.worldBank = {
    filterDataCountries: (data, country, sector) => {
        const sectorCodeCountries = (data[country].indicators);
        const arrSectorCodeIndicator = sectorCodeCountries.filter(objSector => {
            const SectorCode = objSector.indicatorCode.startsWith(sector);
            return SectorCode;
        })
        // console.log(arrSectorCodeIndicator);
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
        let obj = {};
        for (let i = 0; i < listFemIndicators.length; i++) {
            if (listFemIndicators[i].indicatorCode === indicatorId) {
                obj = listFemIndicators[i].data;
            }
        }
        return obj;
    },

    // orderDataTable([], "wer") => {
    orderDataTable: (data, order) => {
    //     const comparators = {
    //         asc: (prev, next) => prev[1] - next[1],
    //         desc: (prev, next) =>  next[1] - prev[1],
    //     };

    //     return data.sort(comparators[order])
        
        if (order === 'asc') {
            return data.sort((prev, next) => {
                return prev[1] - next[1];
            })
        } else {
        return data.sort((prev, next) => {
            return next[1] - prev[1];
        })
        }
    },

    averageData: (arrData) => { // Función para calcular el promedio
        let sum = arrData.reduce((previous, current) => previous + current)
        let avgDat = sum / arrData.length;
        return avgDat;
    },
}
