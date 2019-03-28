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
    },

    averageData: (arrData) => { // Función para calcular el promedio
            let sum = arrData.reduce((previous, current) =>  previous+current)
            let avgDat = sum / arrData.length;
            return avgDat;
      },

    sortData: (objOrder, sortValue) => { // Función para ordenar el objeto 
        let newArrResultOrder = [];
        for (let key in objOrder) {
            newArrResultOrder.push([key, objOrder[key]]);
          }
          if (sortValue === "Asc") {
            newArrResultOrder.sort((a,b)=>a[1]- b[1]);
          } else if(sortValue === "Desc") {
            newArrResultOrder.sort((a,b)=>(b[1]-a[1]));
          }
        return newArrResultOrder;  
},


      }
