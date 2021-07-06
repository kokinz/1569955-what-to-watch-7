import React, {useState} from 'react';
import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';

import filmProp from '../film.prop';
import {FilmTab} from '../../../const.js';
import {reviews} from '../../../mocks/reviews.js';

function Tabs({film}) {
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
  film: filmProp,
};

export default Tabs;
