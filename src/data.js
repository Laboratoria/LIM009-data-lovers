window.WorldBank = {
    filterDataCountries: (data, country, sector) => {
        const sectorCodeCountries = (data[country].indicators);
        const arrSectorCodeIndicator = sectorCodeCountries.filter(objSector => {
            const SectorCode = objSector.indicatorCode.startsWith(sector);
            return SectorCode;
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
        let arr ='';
        for(let i = 0; i < listFemIndicators.length; i++){
           if (listFemIndicators[i].indicatorCode === indicatorId){
              arr = listFemIndicators[i].data;
           }
        }
        return arr;
     }
}