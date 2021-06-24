import React from 'react';

import Footer from '../footer/footer';

function NotFoundPage() {

  return (
    <div className="user-page">
      <section>
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
