import "../styles/Cards.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const data = [
  {
    id: 1,
    title: "Unbeatable Atmosphere 🍻",
    description:
      "Whether it's a game day, quiz night, or live music weekend — the vibe at FJ's is always electric. You'll feel the energy the moment you walk in.",
  },
  {
    id: 2,
    title: "Every Game, Every Screen ⚽",
    description:
      "From rugby to soccer, cricket to Formula 1 — if it's on TV, it's on our screens. Never miss a moment of your favourite sport.",
  },
  {
    id: 3,
    title: "Tasty Bar Bites & Meals 🍔",
    description:
      "Our kitchen serves up delicious pub-style classics, from juicy burgers to crispy wings — perfect to pair with your drink of choice.",
  },
  {
    id: 4,
    title: "Live Entertainment & Events 🎶",
    description:
      "Enjoy live DJs, karaoke nights, and themed parties every week. There's always something happening at FJ's!",
  },
  {
    id: 5,
    title: "Friendly Local Vibes 🏅",
    description:
      "We're more than just a bar — we're a community. Whether you come alone or with friends, you'll always leave with a few more.",
  },
];




export default function Page(){

    return (
      <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="1"
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 400 },
            1200: { slidesPerView: 1, spaceBetween: 400 }
          }}
          modules={[Autoplay, Pagination]}
        >
        <div className="CardContainer swiper-slide">
            {/* generate cards here */}
            {data?.length > 0 && data.map((item) => {
                return (
                  <SwiperSlide>
                    <Card 
                        key={item.id} 
                        title={item.title} 
                        description={item.description} 
                        img_id={item.img_id} 
                        >
                    </Card>
                  </SwiperSlide>
                )
            })}
        </div>
      </Swiper>
    )
}

function Card(props){
    //customise card here
    return(
        <div className="menuItemCard">
            <div className="cardContent">
                <div><h4>{props.title}</h4><span>{props.currency_symbol}{props.price}</span></div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    )
}