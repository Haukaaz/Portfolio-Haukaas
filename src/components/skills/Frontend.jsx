import React from 'react'

const Frontend = () => {
  return (
    <div className='skills__content'>
      <h3 className="skills__title">Frontend uvikling</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-vuejs'></i>

            <div>
              <h3 className="skills__name">Vue.js</h3>
              <span className="skills__level">Mestrer</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-css3'></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Avansert</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-javascript'></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Mestrer</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-tailwind-css' ></i>

            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Avansert</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-typescript' ></i>

            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Mestrer</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-react'></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Avansert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
