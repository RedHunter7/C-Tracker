import moneyFormat from '../function/money-format.js'

const renderLegend = (totalConfirmedCase,totalDeath,totalRecovered,activeCase,countryName) => {
    let confirmedCase = document.getElementById('country-total-case');
    let death = document.getElementById('country-death');
    let recovered = document.getElementById('country-recovered');
    let active = document.getElementById('country-active-case');
    let name = document.getElementById('country-title');
    let mortalityRate = document.getElementById('country-mortality-rate');
    let recoveryRate = document.getElementById('country-recovery-rate');
  
    confirmedCase.innerText = moneyFormat(totalConfirmedCase);
    death.innerText = moneyFormat(totalDeath);
    recovered.innerText = moneyFormat(totalRecovered);
    active.innerText = moneyFormat(activeCase);
    name.innerText = countryName;

    let mr = parseFloat(totalDeath)*100/parseFloat(totalConfirmedCase);
    mr = mr.toPrecision(3);

    let rr = parseFloat(totalRecovered)*100/parseFloat(totalConfirmedCase);
    rr = rr.toPrecision(3);

    mortalityRate.innerText =  mr + '%';
    recoveryRate.innerText = rr + '%';
}

export default renderLegend;