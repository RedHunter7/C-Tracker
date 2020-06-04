import moneyFormat from '../function/money-format.js'

const renderLegend = (totalConfirmedCase,totalDeath,totalRecovered,activeCase,countryName) => {
    let ConfirmedCase = document.getElementById('country-total-case');
    let Death = document.getElementById('country-death');
    let Recovered = document.getElementById('country-recovered');
    let Case = document.getElementById('country-active-case');
    let CountryName = document.getElementById('country-title');
    let mortalityRate = document.getElementById('country-mortality-rate');
    let recoveryRate = document.getElementById('country-recovery-rate');
  
    ConfirmedCase.innerText = moneyFormat(totalConfirmedCase);
    Death.innerText = moneyFormat(totalDeath);
    Recovered.innerText = moneyFormat(totalRecovered);
    Case.innerText = moneyFormat(activeCase);
    CountryName.innerText = countryName;

    let mr = parseFloat(totalDeath)*100/parseFloat(totalConfirmedCase);
    mr = mr.toPrecision(3);

    let rr = parseFloat(totalRecovered)*100/parseFloat(totalConfirmedCase);
    rr = rr.toPrecision(3);

    mortalityRate.innerText =  mr + '%';
    recoveryRate.innerText = rr + '%';
}

export default renderLegend;