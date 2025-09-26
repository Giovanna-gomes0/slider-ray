import { useState } from 'react'
import './App.css'
import Carmy from './assets/vinil_afterhours.jpg'
import Cjoa from './assets/vinil_dawnfm.jpg'
import Curs from './assets/vinil_houseofballoons.webp'
import Slider1 from './assets/slider_exemplo.jpg'
import Slider2 from './assets/slider2_ex.jpg'
import Slider3 from './assets/silder3_ex.jpg'
import Slider4 from './assets/slider4_ex.jpg'

import {Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
        modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop= {true}
      className="mySwiper"
    >
      <SwiperSlide> 
        <img src={Slider1} alt="Slider1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider2} alt="Slider2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider3} alt="Slider3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider4} alt="Slider3" />
      </SwiperSlide>
    </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">The Weeknd - Dawn FM [Vinil 2LP] [Black</h2>
              <p className="desc">Lançamento: 29 de abril de 2022</p>
              <p className="preco">R$  389,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">After Hours - Exclusive Limited Edition Clear w/ Red Blood Splatter Colored Vinyl 2LPT]</h2>
              <p className="desc">Edição limitada</p>
              <p className="preco">R$ 299,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">The Weeknd - House of Balloons [Vinil 2LP] [Black]</h2>
              <p className="desc">Lançamento: 30 de outubro de 2015.</p>
              <p className="preco">R$ 669,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        <footer>
          <img src="" alt=""  className="logo-footer"/>

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="email" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x"/>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
