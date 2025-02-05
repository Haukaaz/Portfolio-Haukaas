import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="qualification section">
      <h2 className='section__title'>Kvalifikasjoner</h2>
      <span className="section__subtitle">Min personlig techreise</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="ui uil-briefcase-alt qualification__icon"></i> Erfaring
          </div>

          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="ui uil-graduation-cap qualification__icon"></i> Utdanning
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Allcode - Web Utvikling</h3>
                <span className="qualification__subtitle">Sverige - Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Teknologi & Forskningslære</h3>
                <span className="qualification__subtitle">Norge - Videregående</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Spesiell studiekompetanse</h3>
                <span className="qualification__subtitle">Norge - Videregående</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Vue.js</h3>
                <span className="qualification__subtitle">Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - Nåtid
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">NextJS</h3>
                <span className="qualification__subtitle">Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 - Nåtid
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">TypeScript</h3>
                <span className="qualification__subtitle">Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Nåtid
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React</h3>
                <span className="qualification__subtitle">Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Nåtid
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">JavaScript</h3>
                <span className="qualification__subtitle">Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Nåtid
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">TanStack Query</h3>
                <span className="qualification__subtitle">Grunnleggende</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">ORMs & Prisma</h3>
                <span className="qualification__subtitle">Grunnleggende</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Databaser & SQL</h3>
                <span className="qualification__subtitle">Grunnleggende</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Express JS</h3>
                <span className="qualification__subtitle">Grunnleggende</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tailwind</h3>
                <span className="qualification__subtitle">Avansert</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">HTML & CSS</h3>
                <span className="qualification__subtitle">Kurs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
