import Notiflix from 'notiflix';

function ifTooManyMatchesAlert() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function ifWrongNameAlert() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
export { ifTooManyMatchesAlert, ifWrongNameAlert };
