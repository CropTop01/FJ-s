import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css"
import logo from "./Image/Logo.png"
import Hero from "./Image/BackGround.jpg"
import About from "./Image/About.jpg"
import Event from "./Image/Events-bg.jpg"
import EventSlide1 from "./Image/events-slider/Events-slider-1.jpg"
import EventSlide2 from "./Image/events-slider/Events-slider-2.jpg"
import EventSlide3 from "./Image/events-slider/Events-slider-3.jpg"
import Gallary1 from "./Image/gallery/gallery-1.jpg"
import Gallary2 from "./Image/gallery/gallery-2.jpg"
import Gallary3 from "./Image/gallery/gallery-3.jpg"
import Gallary4 from "./Image/gallery/gallery-4.jpg"
import Gallary5 from "./Image/gallery/gallery-5.jpg"
import Gallary6 from "./Image/gallery/gallery-6.jpg"
import Gallary7 from "./Image/gallery/gallery-7.jpg"
import Gallary8 from "./Image/gallery/gallery-8.jpg"

/* import Custom Cards */
import MenuItemCard from "./Cards/menuItemCard.jsx"
// import ReviewCard from "./Cards/reviewCard.jsx"
// import WhyChoosUsCard from "./Cards/WhyChooseUsCard.jsx"

export default function FJLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const swiperConfig = {
    loop: true,
    speed: 600,
    autoplay: { delay: 5000 },
    slidesPerView: "auto",
    pagination: { clickable: true },
    modules: [Autoplay, Pagination],
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="index-page">

      <header id="header" className="header fixed-top">
        <div className={`branding ${mobileMenuOpen ? "mobile-nav-active" : ""}`}>

          {/* Logo */}
          <a href="#hero"  className="Logo-link">
            <img className="Logo" src={logo} alt="Logo" />
          </a>

          {/* Navigation Menu */}
          <nav id="navmenu" className="navmenu">
            <ul className="nav-list">
              <li><a href="#hero" onClick={() => setMobileMenuOpen(false)} className="active">Home</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a></li>
              {/* <li><a href="#specials" onClick={() => setMobileMenuOpen(false)}>Specials</a></li> */}
              <li><a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a></li>
              <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>

            {/* Mobile toggle */}
            <i className="mobile-nav-toggle bi bi-list" onClick={toggleMenu}></i>

          </nav>
        </div>
      </header>

      <main className="main">

        <section id="hero" className="hero-section">

          {/* Hero background image */}
          <div className="hero-bg">
            <img src={Hero} alt="Hero" />
          </div>

          <div className="hero-content container">
            <div className="hero-text">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Welcome to <span>FJ's</span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">Your local sports bar</p>
            </div>
          </div>
        </section>

        <section id="about" className="about section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              {/* Image column */}
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={About} alt="Dining area" className="about-img"/>
              </div>

              <div className="col-lg-6 order-2 order-lg-1 content">
                <h3>About FJ's Sports Bar</h3>

                {/* Intro paragraph in italic */}
                <p className="fst-italic">
                  FJ's Sports Bar is your go-to place for good food, drinks, and a lively atmosphere. 
                  Whether you're here for a game or a casual night out, we make sure you have a great experience.
                </p>

                {/* List of key features or highlights */}
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i> 
                    <span>Wide selection of craft beers and cocktails.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> 
                    <span>Delicious meals made with fresh, high-quality ingredients.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> 
                    <span>Live sports on big screens, perfect for game nights with friends.</span>
                  </li>
                </ul>

                {/* Closing paragraph with more details */}
                <p>
                  At FJ's, we pride ourselves on creating a friendly and welcoming environment. 
                  Bring your friends, enjoy great food and drinks, and make lasting memories in a space designed for fun and comfort.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* <section id="why-us" className="why-us section">

      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>WHY US</h2>
        <p>Why Choose Our Restaurant</p>
      </div>

      <div className="container">
        <WhyChoosUsCard></WhyChoosUsCard>
      </div>
      
    </section> */}



        {/* Menu items section */}

        <section id="menu" class="menu section">

          <div class="container section-title" data-aos="fade-up">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>

          {/* generate custom cards here */}
          <MenuItemCard></MenuItemCard>


        </section> {/*TODO Rudolph 1*/ }

        {/* <section id="specials" class="specials section">

          <div class="container section-title" data-aos="fade-up">
            <h2>Specials</h2>
            <p>Check Our Specials</p>
          </div>

          <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#specials-tab-1">Modi sit est</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-2">Unde praesentium sed</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-3">Pariatur explicabo vel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-4">Nostrum qui quasi</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#specials-tab-5">Iusto ut expedita aut</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="specials-tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Architecto ut aperiam autem id</h3>
                        <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-1.png" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="specials-tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-2.png" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="specials-tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                        <p class="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                        <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-3.png" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="specials-tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                        <p class="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                        <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-4.png" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="specials-tab-5">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                        <p class="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                        <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-5.png" alt="" class="img-fluid">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section> */}

        <section id="events" className="events section">
          {/* Background image */}
          <img className="slider-bg" src={Event} alt="Event background" data-aos="fade-in" />

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            {/* Swiper slider */}
            <Swiper {...swiperConfig} className="events-swiper">

              {/* === Event Slide 1 === */}
              <SwiperSlide>
                <div className="row gy-4 event-item">
                  {/* Image on the left */}
                  <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <img src={EventSlide1} className="event-img" alt="DJ Night" />
                  </div>

                  {/* Text on the right */}
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>DJ Nights - Fridays & Saturdays</h3>
                    <p className="eventP">
                      Join us every Saturday for the best vibes in town! Great drinks, music, and an atmosphere that keeps the night alive.
                    </p>
                    <ul>
                      <li><i className="bi bi-music-note-beamed"></i> DJ live from <strong>6 PM till late</strong>.</li>
                      <li><i className="bi bi-cup-straw"></i> <strong>Happy Hour</strong> from <strong>5 PM – 7 PM</strong>.</li>
                      <li><i className="bi bi-egg-fried"></i> Kitchen open from <strong>11 AM – 8 PM</strong>.</li>
                      <li><i className="bi bi-people"></i> Friendly crowd and vibrant weekend energy.</li>
                    </ul>
                    <p>Grab your friends, enjoy great tunes, and make your Saturday night unforgettable at FJ’s!</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* === Event Slide 2 === */}
              <SwiperSlide>
                <div className="row gy-4 event-item align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={EventSlide2} className="event-img img-fluid" alt="Karaoke Nights" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 pt-4 pt-lg-0 content">
                    <h3>Karaoke Nights – Wednesdays</h3>
                    <p className="eventP">
                      Grab the mic and sing your heart out every Wednesday night! Join us for an evening of laughter, music, and good vibes.
                    </p>
                    <ul>
                      <li><i className="bi bi-mic"></i> Karaoke starts at <strong>7 PM till late</strong>.</li>
                      <li><i className="bi bi-cup-straw"></i> <strong>Happy Hour</strong> from <strong>5 PM – 7 PM</strong>.</li>
                      <li><i className="bi bi-egg-fried"></i> Kitchen open from <strong>11 AM – 8 PM</strong>.</li>
                      <li><i className="bi bi-people"></i> Fun atmosphere — cheer, sing, and enjoy great company!</li>
                    </ul>
                    <p>Whether you’re a shower singer or a stage star, Wednesday nights at FJ’s are all about having a blast!</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* === Event Slide 3 === */}
              <SwiperSlide>
                <div className="row gy-4 event-item align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={EventSlide3} className="event-img img-fluid" alt="Sunday Pizza Special" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 pt-4 pt-lg-0 content">
                    <h3>Sunday Pizza Special</h3>
                    <p className="eventP">
                      Sundays are made for pizza! Grab your friends and enjoy our delicious wood-fired pizzas at unbeatable prices.
                    </p>
                    <ul>
                      <li><i className="bi bi-pizza"></i> <strong>2 Traditional Pizzas</strong> for <strong>R180</strong>.</li>
                      <li><i className="bi bi-pizza"></i> <strong>2 Specialty Pizzas</strong> for <strong>R220</strong>.</li>
                      <li><i className="bi bi-pizza"></i> <strong>1 Traditional + 1 Specialty</strong> for <strong>R200</strong>.</li>
                      <li><i className="bi bi-emoji-smile"></i> Perfect for sharing and ending the week right!</li>
                    </ul>
                    <p>Come hungry and make Sunday your pizza day — available all day while the kitchen’s open!</p>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </section>

        {/* <section id="testimonials" class="testimonials section">


          <div class="container section-title aos-init aos-animate" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>What they're saying about us</p>
          </div>

        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <ReviewCard/>
        </div>

      </section> */}


        <section id="gallery" className="gallery section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Gallery</h2>
            <p>Some photos from Our SportsBar</p>
          </div>

          <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-0">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary1} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary1} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary2} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary2} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary3} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary3} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary4} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary4} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary5} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary5} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary6} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary6} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary7} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary7} alt=""/>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-item">
                  <a href={Gallary8} className="glightbox" data-gallery="images-gallery">
                    <img src={Gallary8} alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Meet Us</p>
          </div>

          <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1012618321843!2d25.478751076352918!3d-33.93852357320002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad0aee57858d3%3A0x691b6caff2699388!2s1%20Brampton%20Ave%2C%20Rowallan%20Park%2C%20Gqeberha%2C%206025!5e0!3m2!1sen!2sza!4v1762935181404!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '450px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">

              <div className="col-lg-4">

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Location</h3>
                    <p>1 Brampton Avenue, Port Elizabeth, 6025</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Open Hours</h3>
                    <p>Monday-Sunday:<br />11:00 AM - 02:00 AM</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>Enter telephone here</p>
                  </div>
                </div>

                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>enter email here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    <footer id="footer" class="footer">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">FJ's</span>
          </a>
          <div class="footer-contact pt-3">
            <p>1 Brampton Avenue</p>
            <p>Port Elizabeth, 6025</p>
            <p class="mt-3"><strong>Phone:</strong> <span>Add Phone</span></p>
            <p><strong>Email:</strong> <span>Add EMAIL</span></p>
          </div>

          {/*TO DO ADD SOCIAL MEDIA */}

          <div class="social-links d-flex mt-4">
            <a href="/"><i class="bi bi-twitter-x"></i></a>
            <a href="/"><i class="bi bi-facebook"></i></a>
            <a href="/"><i class="bi bi-instagram"></i></a>
            <a href="/"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/*TO DO MAP BUTTONS */}

        {/* <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Terms of service</a></li>
            <li><a href="/">Privacy policy</a></li>
          </ul>
        </div> */}
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">FJ's</strong> <span>All Rights Reserved</span></p>
    </div>

  </footer>
  </div>//end of program
  )
}