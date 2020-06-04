import moneyFormat from '../function/money-format.js';

const renderTable = data => {
    data = data.sort( (a,b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    })
    const table = document.getElementById('table-statistic');
    let tableHeader = `
    <div class="table-header">
        <div class="table-row">No</div>
        <div class="table-row">Country</div>
        <div class="table-row">Total Confirmed</div>
        <div class="table-row">Total Death</div>
        <div class="table-row">Total Recovered</div>
        <div class="table-row">Death Rate</div>
        <div class="table-row">Recovery Rate</div>
        <div class="table-row">Active Case</div>
    </div>`;
  
    let number = 1;
  
    let tableData = data.map( value => {
      let mr = parseFloat(value.TotalDeaths)*100/parseFloat(value.TotalConfirmed);
      mr = mr.toPrecision(3);

      let rr = parseFloat(value.TotalRecovered)*100/parseFloat(value.TotalConfirmed);
      rr = rr.toPrecision(3);

      let ac = value.TotalConfirmed - (value.TotalDeaths + value.TotalRecovered);

      let result =
     `<div class="table-data">
          <div class="table-row">${number}</div>
          <div class="table-row">
              <picture>
                  <source media="(max-width: 600px)" srcset="https://www.countryflags.io/${value.CountryCode.toLowerCase()}/shiny/32.png">
                  <img src="https://www.countryflags.io/${value.CountryCode.toLowerCase()}/shiny/64.png" alt="">
              </picture>
              <div class="country-name">${value.Country}</div>
          </div>
          <div class="table-row">
            <div>${moneyFormat(value.TotalConfirmed)}</div>
            <div>+${moneyFormat(value.NewConfirmed)}</div>
          </div>
          <div class="table-row">
            <div>${moneyFormat(value.TotalDeaths)}</div>
            <div>+${moneyFormat(value.NewDeaths)}</div>
          </div>
          <div class="table-row">
            <div>${moneyFormat(value.TotalRecovered)}</div>
            <div>+${moneyFormat(value.NewRecovered)}</div></div>
          <div class="table-row">${mr}%</div>
          <div class="table-row">${rr}%</div>
          <div class="table-row">${moneyFormat(ac)}</div>
      </div>`;
      number = number + 1;
      return result;
    }).join('');
    console.log(tableHeader + tableData);
  
    table.innerHTML = tableHeader + tableData;
  }

export default renderTable;