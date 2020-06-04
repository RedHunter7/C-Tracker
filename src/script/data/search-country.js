import renderAutoComplete from '../component/autocomplete.js';

const searchCountry = (searchValue, onSearch=false) => {
    let result = JSON.parse(sessionStorage.getItem('data-country'));
    let matches = result.filter( country => {
      const regex = new RegExp(`^${searchValue}`, 'gi');
      return country.Country.match(regex) || country.ISO2.match(regex) || country.Slug.match(regex);
    });
    let countryName = [];
    console.log(matches.length)
    if (onSearch == true) {
      if (matches.length == 0) {
        getCountryData(searchValue,false)
      } else {
        getCountryData(matches[0].Slug); 
      }
    } else {
      if(searchValue.length === 0) {
        matches = [];
      }
      if (matches.length > 6) {
        for (let index = 0; index < 6; index++) {
          countryName.push(matches[index])
        }
        console.log(countryName);
        renderAutoComplete(countryName);
      } else {
        renderAutoComplete(matches);
      } 
    }        
  }

export default searchCountry;