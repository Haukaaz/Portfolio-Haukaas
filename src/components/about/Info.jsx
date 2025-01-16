import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        <h3 className="about__title">Erfaring</h3>
        <span className="about__subtitle">3 Års Kompetanse</span>
      </div>

      <div className="about__box">
       <i class='bx bx-briefcase-alt about__icon' ></i>
        <h3 className="about__title">Fullført</h3>
        <span className="about__subtitle">56 + Prosjekter</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
        <h3 className="about__title">Kontakt</h3>
        <span className="about__subtitle">Tilgjengelig 24/7</span>
      </div>
    </div>
  )
}

export default Info
