import renderChart from '../component/chart.js';
import renderLegend from '../component/legend.js';

const baseUrl = 'https://api.covid19api.com';
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Des'];

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

const getCountryData = (country, isFound=true) => {

    fetch(`${baseUrl}/total/country/${country}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.length);
      if (isFound == false) {
        renderLegend(0,0,0,0, `${country.toUpperCase()} Not Found`);
        renderChart([],[],[],[]);
      }
      if (result.length == 0) {
        renderLegend(0,0,0,0, `${country.toUpperCase()} did not affected by Covid-19`);
        renderChart([],[],[],[]);
      }
      result = result.reverse();
      let dataConfirmed = [];
      let dataDeaths = [];
      let dataRecovered = [];
      let dataTime = [];
      for(let x = 6; x >= 0; x--) {
        
          dataConfirmed.push(result[x].Confirmed - result[x+1].Confirmed);
          dataDeaths.push(result[x].Deaths - result[x+1].Deaths);
          dataRecovered.push(result[x].Recovered - result[x+1].Recovered);
  
          let date = result[x].Date;
          date = date.slice(8,10);
          let month = result[x].Date;
          month = parseInt(month.slice(5,7));
          dataTime.push(`${date} ${months[month-1]}`);
      }
  
      let totalConfirmedCase = result[0].Confirmed;
      let totalDeath = result[0].Deaths;
      let totalRecovered = result[0].Recovered;
      let activeCase = result[0].Active;
      let countryName = result[0].Country;
  
      renderLegend(totalConfirmedCase,totalDeath,totalRecovered,activeCase, countryName);
      renderChart(dataConfirmed,dataDeaths,dataRecovered,dataTime);
    })
    .catch(error => console.log('error', error));
  }

  export default getCountryData;

