function createMarkupCountryList(country) {
  return country
    .map(
      ({ name, flags }) =>
        `<li class="country-list__item">
        <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}">
        <h2 class="country-list__name">${name.official}</h2>
        </li>`
    )
    .join('');
}

function createMarkupCountryInfo(country) {
  return country
    .map(
      ({ name, capital, population, flags, languages }) =>
        `<ul class="country-info__list">
            <li class="country-info__item">
                <img class="country-info__flag" src="${
                  flags.svg
                }" alt="Flag of ${name.official}">
                <h2 class="country-info__name">${name.official}</h2></li>
            <li class="country-info__item">
                <span class="country-info__categories">Capital: </span>${capital}</li>
            <li class="country-info__item">
                <span class="country-info__categories">Population: </span>${population}</li>
            <li class="country-info__item">
                <span class="country-info__categories">Languages: </span>${Object.values(
                  languages
                ).join(', ')}</li>
        </ul>`
    )
    .join('');
}
export { createMarkupCountryList, createMarkupCountryInfo };
