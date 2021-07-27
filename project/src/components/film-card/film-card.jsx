import React, {useState, useRef} from 'react';
import {generatePath, useHistory} from 'react-router';
import {Link} from 'react-router-dom';

import filmProp from '../film-page/film.prop';

import {PREVIEW_VIDEO_DELAY, AppRoute} from '../../const.js';

function FilmCard({film}) {
  const {id, name, previewImage, previewVideoLink} = film;
  const [delayHandler, setDelayHandler] =  useState(null);

  const player = useRef();
  const history = useHistory();

  const handleMouseEnter = () => {
    setDelayHandler(setTimeout(() => player.current.play(), PREVIEW_VIDEO_DELAY));
  };

  const handleMouseLeave = () => {
    clearTimeout(delayHandler);
    player.current.load();
  };

  const handleMouseClick = () => {
    history.push(generatePath(AppRoute.FILM, {id: id}));
    clearTimeout(delayHandler);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseClick} >
      <div className="small-film-card__image" >
        <video src={previewVideoLink} poster={previewImage} ref={player} width="280" muted />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.FILM, {id: id})} onClick={handleMouseLeave}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  film: filmProp,
};

export default FilmCard;
