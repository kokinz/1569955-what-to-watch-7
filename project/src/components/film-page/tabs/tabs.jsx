import React, {useState} from 'react';
import PropTypes from 'prop-types';

import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';

import filmProp from '../film.prop';
import reviewProp from '../review.prop.js';
import {FilmTab} from '../../../const.js';

function Tabs({film, reviews}) {
  const [activeTab, setActiveTab] = useState(FilmTab.OVERVIEW);
  const tabs = Object.values(FilmTab);

  const handleMouseClick = (evt) => {
    evt.preventDefault();

    setActiveTab(evt.target.innerText);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => (
            <li key={tab} className={tab === activeTab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
              <a href="/" className="film-nav__link" onClick={handleMouseClick}>{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === FilmTab.OVERVIEW && <OverviewTab film={film} />}
      {activeTab === FilmTab.DETAILS && <DetailsTab film={film} />}
      {activeTab === FilmTab.REVIEWS && <ReviewsTab reviews={reviews} />}
    </div>);
}

Tabs.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default Tabs;
