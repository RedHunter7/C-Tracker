import moneyFormat from '../function/money-format.js';
import renderTable from '../component/table.js';

let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
  
const baseUrl = 'https://api.covid19api.com';

const summary = () => {
  fetch(`${baseUrl}/summary`, requestOptions)
  .then(response => response.json())
  .then(result => {
      const totalCase = moneyFormat(result.Global.TotalConfirmed);
      const totalDeaths = moneyFormat(result.Global.TotalDeaths);
      const totalRecovered = moneyFormat(result.Global.TotalRecovered);
      document.getElementById('total-case').innerHTML = totalCase;
      document.getElementById('death').innerHTML = totalDeaths;
      document.getElementById('recovered').innerHTML = totalRecovered;

      const countriesData = result.Countries;
      console.log(countriesData);
      renderTable(countriesData);
      clearInterval(summary)
  })
  .catch(error => {
    setInterval(summary,3000);
    console.log('error', error);
  } );
}

summary();

fetch(`${baseUrl}/countries`, requestOptions)
  .then(response => response.json())
  .then(result => {
    sessionStorage.setItem('data-country', JSON.stringify(result));
  })
  .catch(error => console.log('error', error));

fetch("https://api.covid19api.com/version", requestOptions)
.then(response => response.json())
.then(result => {
  const version = document.getElementById('version');
  version.innerText = `Version ${result}`;
} )
.catch(error => console.log('error', error));




  