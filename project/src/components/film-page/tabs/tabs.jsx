import React, {useState} from 'react';
import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';

import filmProp from '../film.prop';
import {FilmTabs} from '../../../const.js';

function Tabs({film}) {
  const [activeTab, setActiveTab] = useState(FilmTabs.OVERVIEW);
  const tabs = Object.values(FilmTabs);

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
      {activeTab === FilmTabs.OVERVIEW && <OverviewTab film={film} />}
      {activeTab === FilmTabs.DETAILS && <DetailsTab film={film} />}
      {activeTab === FilmTabs.REVIEWS && <ReviewsTab film={film} />}
    </div>);
}

Tabs.propTypes = {
  film: filmProp,
};

export default Tabs;
