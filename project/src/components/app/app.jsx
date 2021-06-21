import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {filmsCount, filmName, filmGenre, filmYear} = props;

  return (
    <MainPage filmsCount={filmsCount} filmName={filmName} filmGenre={filmGenre} filmYear={filmYear} />
  );
}

App.propTypes = {
  filmsCount: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  filmGenre: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
};

export default App;
