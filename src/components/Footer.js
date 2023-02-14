import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <h2>REMINDER</h2>

      <div className='footer__bar'></div>

      <section className='footer_reminder'>
        <h3>Party</h3>

        <p>Saturday, March 25, 2023</p>
        <p>Rexburg, ID. 6:00pm</p>
      </section>

      <section className='footer_reminder'>
        <h3>Sealing</h3>

        <p>Saturday, April 8, 2023</p>
        <p>Mexico City, Mexico. 12:00pm</p>
      </section>
    </footer>
  );
}

export default Footer;
