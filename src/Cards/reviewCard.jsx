import "../styles/Cards.css"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const data = [
    {
        id : 1,
        title : "Friendly Neighborhood Vibes",
        description : "Absolutely love this place! The staff are super friendly, and the atmosphere is just right — lively but not too loud. Great spot to unwind after work with friends. The cocktails are spot-on and reasonably priced. Easily my new favorite hangout!",
        rating : "4",
        img_id : require("../images/img.jpg")
    },{
        id : 2,
        title : "Perfect for a Night Out",
        description : "Went here last Friday with a group of friends and had a blast. Music was great, drinks came out fast, and the bartenders really know their stuff. Only reason it's not a full five stars is because it got a bit crowded — but that's just proof it's a popular spot!",
        rating : "4",
        img_id : require("../images/img.jpg")
    },{
        id : 3,
        title : "Great Drinks, Even Better Atmosphere",
        description : "From the moment you walk in, you can tell this bar has a vibe. The lighting, the music, and the crowd all come together perfectly. Try their signature cocktail — it's amazing. Highly recommend for date nights or chill weekends.",
        rating : "3.50",
        img_id : require("../images/img.jpg")
    },{
        id : 4,
        title : "Hidden Gem!",
        description : "Didn’t expect much walking in, but wow — what a surprise. Cozy interior, friendly bartenders, and some of the best craft beers I've tasted in town. The live music on Saturdays is the cherry on top. This place deserves more recognition!",
        rating : "5",
        img_id : require("../images/img.jpg")
    },{
        id : 5,
        title : "Good Times, Every Time",
        description : "Every time I come here, I leave with a smile. The drinks are creative, the crowd is fun, and the vibe is electric. It's a great mix of chill and party energy depending on the night. Definitely recommend checking it out at least once!",
        rating : "5",
        img_id : require("../images/img.jpg")
    }
]

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
                        rating={item.rating}
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
// customise card here
    return(
        <div className="menuItemCard">
            <img src={props.img_id} alt={props.description} />
            <div>
                <h4>{props.title}</h4>
                <span className="review_rating">{GetRating(props.rating)}</span>
                <p className="description">{props.description}</p>
            </div>
        </div>  
    )
}


function GetRating(rating){
    const fullStar = require("../images/fullStar.png");
    const halfStar = require("../images/halfStar.png"); // use a real half star image
    const emptyStar = require("../images/noStar.png");

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<img key={i} src={fullStar} alt="full star" />);
        } else if (i - rating <= 0.5 && rating % 1 !== 0) {
            stars.push(<img key={i} src={halfStar} alt="half star" />);
        } else {
            stars.push(<img key={i} src={emptyStar} alt="empty star" />);
        }
    }

    return stars;
}
