import "./data/covid-data.js";
import "./component/topnav.js";
import "./component/covid-statistic.js";
import searchCountry from './data/search-country.js';
import getCountryData from './data/country-data.js';

const autoComplete = document.getElementById('autocomplete');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

window.addEventListener('load',() => getCountryData('indonesia'));
searchBtn.addEventListener('click', () => {
  autoComplete.classList.remove('revealAutoComplete');
  searchCountry(search.value,true);
});
search.addEventListener('input', () => searchCountry(search.value));
search.addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    autoComplete.classList.remove('revealAutoComplete');
    searchCountry(search.value,true);
  }
});