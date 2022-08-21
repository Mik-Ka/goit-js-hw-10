import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCoutries';
import {
  createMarkupCountryList,
  createMarkupCountryInfo,
} from './js/createMarkup';
import { ifTooManyMatchesAlert, ifWrongNameAlert } from './js/inputError';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

function onCountryInput() {
  const name = refs.input.value.trim();
  if (name === '') {
    return (refs.list.innerHTML = ''), (refs.info.innerHTML = '');
  }

  fetchCountries(name)
    .then(country => {
      refs.list.innerHTML = '';
      refs.info.innerHTML = '';

      if (country.length === 1) {
        refs.info.insertAdjacentHTML(
          'beforeend',
          createMarkupCountryInfo(country)
        );
      } else if (country.length >= 10) {
        ifTooManyMatchesAlert();
      } else {
        refs.list.insertAdjacentHTML(
          'beforeend',
          createMarkupCountryList(country)
        );
      }
    })
    .catch(ifWrongNameAlert);
}

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY));
