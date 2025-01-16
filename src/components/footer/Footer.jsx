import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Haukaas</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Om meg</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Portefølje</a>
          </li>

          <li>
            <a href="#services" className="footer__link">Tjenester</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/vetle.haukaasevju/" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="https://www.instagram.com/vetlehaukaas" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://x.com/EvjuVetle" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Haukaas. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
