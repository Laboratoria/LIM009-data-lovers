

window.WorldBank = {
    filterDataCountries:(data, country,sector) => {
    const sectorCodeCountries = (data[country].indicators)
    const arrSectorCodeIndicator= sectorCodeCountries.filter(objSector => {
    const SectorCode = objSector.indicatorCode.startsWith(sector);
    return SectorCode;
    })
    return arrSectorCodeIndicator;
    },
   }

