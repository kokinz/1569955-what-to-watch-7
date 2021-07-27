import React, {useRef, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useElapsedTime} from 'use-elapsed-time';
import Moment from 'react-moment';

import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';
import {APIRoute, ROUNDING_INTEGER} from '../../const.js';

const ESCAPE_BUTTON = 'Escape';

function PlayerPage({films}) {
  const filmId = parseInt(useParams().id, ROUNDING_INTEGER);
  const film = films.find((movie) => (movie.id === filmId));

  const history = useHistory();
  const player = useRef();
  const playButton = useRef();
  const fullScreenButton = useRef();

  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    isFullScreen: false,
    elapsedTime: '',
  });

  const isPlaying = playerState.isPlaying;
  const duration = film.runTime;

  const {elapsedTime} = useElapsedTime({duration: duration*60, isPlaying });
  const remainingTime = Math.ceil((duration*60) - elapsedTime);

  const handlePlayClick = (evt) => {
    evt.preventDefault();

    if(player.current.paused) {
      player.current.play();

      setPlayerState((prevState) => ({...prevState, isPlaying: true}));
    } else {
      player.current.pause();

      setPlayerState((prevState) => ({...prevState, isPlaying: false}));
    }
  };

  const handleEscapeKeydown = (evt) => {
    if (evt.key === ESCAPE_BUTTON) {
      evt.preventDefault();

      setPlayerState((prevState) => ({...prevState, isFullScreen: false}));

      document.removeEventListener('keydown', handleEscapeKeydown);
    }
  };

  const handleFullScreenClick = (evt) => {
    evt.preventDefault();

    setPlayerState((prevState) => ({...prevState, isFullScreen: true}));

    document.addEventListener('keydown', handleEscapeKeydown);
  };

  return (
    <div className="player">
      <video ref={player} src={film.videoLink} className="player__video" poster={film.posterImage} />
      {playerState.isFullScreen ? '' :
        <>
          <button type="button" className="player__exit" onClick={() => history.push(`${APIRoute.FILMS}/${filmId}`)}>Exit</button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={30} max={100} />
                <div className="player__toggler" style={{left: `${Math.floor((elapsedTime/(duration*60)*100))}`}}>Toggler</div>
              </div>
              <div className="player__time-value">
                <Moment unix format="-HH:mm:ss">
                  {remainingTime}
                </Moment>
              </div>
            </div>
            <div className="player__controls-row">
              <button ref={playButton} type="button" className="player__play" onClick={handlePlayClick}>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref={playerState.isPlaying ? '#pause' : '#play-s'}/>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{film.name}</div>
              <button ref={fullScreenButton} type="button" className="player__full-screen" onClick={handleFullScreenClick}>
                <svg viewBox="0 0 27 27" width={27} height={27}>
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </>}
    </div>
  );
}

PlayerPage.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default PlayerPage;
