import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import Footer from '../footer/footer';

function NotFoundPage() {

  return (
    <div className="user-page">
      <section>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
      </section>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
