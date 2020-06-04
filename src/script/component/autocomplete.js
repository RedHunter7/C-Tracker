import getCountryData from '../data/country-data.js';

const renderAutoComplete = (countryName) => {
    const autoComplete = document.getElementById('autocomplete');
    if (countryName.length > 0) {
      autoComplete.classList.add('revealAutoComplete');
      const country = countryName.map(
      element => `<div class="country" data-slug=${element.Slug}>${element.Country}</div>`
      ).join('');
      console.log(country);
      autoComplete.innerHTML = country;
      const countryGroup = document.getElementsByClassName('country');
      for(let x in countryGroup) {
        countryGroup[x].addEventListener('click', () => {
          search.value = countryGroup[x].innerText;
          const slug = countryGroup[x].getAttribute("data-slug");
          getCountryData(slug);
          autoComplete.classList.remove('revealAutoComplete');
        })
      }
    } else {
      autoComplete.classList.remove('revealAutoComplete');
    }
  }

export default renderAutoComplete;