import React, {useRef, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useElapsedTime} from 'use-elapsed-time';

import PropTypes from 'prop-types';
import filmProp from '../film-page/film.prop';
import {APIRoute} from '../../const.js';

function PlayerPage({films}) {
  const filmId = parseInt(useParams().id, 10);
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

  const {elapsedTime} = useElapsedTime({duration, isPlaying });
  const remainingTime = Math.ceil((duration*60) - elapsedTime);

  const getFormatRemainingTime = (time) => {
    const hours = time/60/60 < 10 ? `0${Math.floor(time/60/60)}` : Math.floor(time/60/60);
    const minutes = time/60 - hours*60 < 10 ? `0${Math.floor(time/60 - hours*60 < 10)}` : Math.floor(time/60 - hours*60);
    const seconds = time - hours*60*60 - minutes*60 < 10 ? `0${time - hours*60*60 - minutes*60}` : time - hours*60*60 - minutes*60;

    return `-${hours}:${minutes}:${seconds}`;
  };

  const onPlayClick = (evt) => {
    evt.preventDefault();

    if(player.current.paused) {
      player.current.play();

      setPlayerState((prevState) => ({...prevState, isPlaying: true}));
    } else {
      player.current.pause();

      setPlayerState((prevState) => ({...prevState, isPlaying: false}));
    }
  };

  const onEscapeKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();

      setPlayerState((prevState) => ({...prevState, isFullScreen: false}));

      document.removeEventListener('keydown', onEscapeKeydown);
    }
  };

  const onFullScreenClick = (evt) => {
    evt.preventDefault();

    setPlayerState((prevState) => ({...prevState, isFullScreen: true}));

    document.addEventListener('keydown', onEscapeKeydown);
  };

  return (
    <div className="player">
      <video ref={player} src={film.videoLink} className="player__video" poster={film.posterImage}/>
      {playerState.isFullScreen ? '' :
        <>
          <button type="button" className="player__exit" onClick={() => history.push(`${APIRoute.FILMS}/${filmId}`)}>Exit</button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={30} max={100} />
                <div className="player__toggler" style={{left: `${Math.floor((elapsedTime/(duration*60)*100))}`}}>Toggler</div>
              </div>
              <div className="player__time-value">{`${getFormatRemainingTime(remainingTime)}`}</div>
            </div>
            <div className="player__controls-row">
              <button ref={playButton} type="button" className="player__play" onClick={onPlayClick}>
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref={playerState.isPlaying ? '#pause' : '#play-s'}/>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">{film.name}</div>
              <button ref={fullScreenButton} type="button" className="player__full-screen" onClick={onFullScreenClick}>
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
