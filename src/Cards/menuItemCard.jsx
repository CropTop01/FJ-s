import "../styles/Cards.css"

import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

import {useState, useRef} from "react"

export const data = [
  {
    category: "Burgers | ",
    items: [
      { id: 1, title: "Chicken Fillet Burger", price: {single: "75,00", double: "105,00" }, img_id : require("../images/img.jpg")},
      { id: 2, title: "Beef Burger", price:  {single: "75,00", double: "105,00" }, img_id : require("../images/img.jpg")},
    ],
    extras: [
      {
        id: 3,
        title: "Sauces",
        options: ["Creamy Garlic", "Cheese", "Mushroom", "Pepper"],
        price: "28,00", 
        img_id : require("../images/img.jpg")
      },
    ],
  },
  {
    category: "Light Meals | ",
    items: [
      { id: 4, title: "Basket Onion Rings", price: "50,00", img_id : require("../images/img.jpg") },
      { id: 5, title: "Basket Calamari and Chips", price: "90,00", img_id : require("../images/img.jpg") },
      { id: 6, title: "Medium Chips", price: "50,00", img_id : require("../images/img.jpg") },
      { id: 7, title: "Large Chips", price: "60,00", img_id : require("../images/img.jpg") },
      { id: 8, title: "FJ's Loaded Chips (Cheese Sauce + Bacon)", price: "80,00", img_id : require("../images/img.jpg") },
      { id: 9, title: "Chicken Salad", price: "65,00" , img_id : require("../images/img.jpg")},
      { id: 10, title: "Meaty Basket", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 11, title: "Chicken Strips Basket", price: "80,00" , img_id : require("../images/img.jpg")},
    ],
  },
  {
    category: "From The Grill | ",
    metadata: "Served with onion rings, chips or mash, salad or veg of the day",
    items: [
      { id: 12, title: "300G Sirloin Steak", price: "180,00", img_id : require("../images/img.jpg") },
      { id: 13, title: "Chicken Schnitzel with Cheese or Mushroom Sauce", price: "110,00" , img_id : require("../images/img.jpg")},
      { id: 14, title: "Crumbed Pork Chop", price: "100,00" , img_id : require("../images/img.jpg")},
      { id: 15, title: "Eisbein", price: "180,00" , img_id : require("../images/img.jpg")},
      { id: 16, title: "Pork Spare Ribs (500g)", price: "170,00" , img_id : require("../images/img.jpg")},
      { id: 17, title: "Pork Spare Ribs (1kg)", price: "250,00" , img_id : require("../images/img.jpg")},
      { id: 18, title: "Meaty Basket", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 19, title: "Chicken Strips Basket", price: "80,00" , img_id : require("../images/img.jpg")},
    ],
  },
  {
    category: "Combos | ",
    metadata: "Served with chips and onion rings",
    items: [
      { id: 20, title: "Spare Rib & Chicken Schnitzel with cheese sauce", price: "150,00", img_id : require("../images/img.jpg") },
      { id: 21, title: "Spare Rib & Crumbed chicken wings", price: "150,00" , img_id : require("../images/img.jpg")},
    ],
  },
  {
    category: "Pizzas",
    items: [
      { id: 22, title: "Focaccia - Olive Oil, Garlic, Feta, Cheese", price: "90,00", img_id : require("../images/img.jpg") },
      { id: 23, title: "Margerita - Tomato Base, Cheese, Oregano", price: "90,00" , img_id : require("../images/img.jpg")},
      { id: 24, title: "Regina - Tomato Base, Cheese, Ham, Mushroom", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 25, title: "Papalina - Tomato Base, Cheese, Ham", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 26, title: "Hawaiian - Tomato Base, Cheese, Ham, Pineapple", price: "120,00", img_id : require("../images/img.jpg") },
      { id: 27, title: "Carbonara - Tomato Base, Cheese, Green Pepper, Onion, Bacon", price: "100,00" , img_id : require("../images/img.jpg")},
      { id: 28, title: "Traditional - Tomato Base, Cheese, Mushrooms, Ham, Onion, Green Pepper, Olives, Garlic", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 29, title: "Brutus - Tomato Base, Cheese, Feta, Bacon, Garlic, Creamed Spinach", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 30, title: "Chicken & Mushroom - Tomato Base, Cheese, Roasted Chicken, Mushrooms, Green Pepper", price: "120,00" , img_id : require("../images/img.jpg")},
      { id: 31, title: "Meaty Pizza - Tomato Basting, Cheese, Garlic, Beef Mince, Bacon, Pork, Boerewors", price: "140,00" , img_id : require("../images/img.jpg")},
      { id: 32, title: "FJ's Mexicana - Tomato Base, Cheese, Beef Mince, Red Onion, Jalapeno, Avocado (Seasonal), Coriander", price: "140,00" , img_id : require("../images/img.jpg")},
      { id: 33, title: "FJ's Pulled Pork - Tomato Base, Feta, Pulled Pork, Balsamic Caramelized Onion, Peppadews", price: "140,00" , img_id : require("../images/img.jpg")},
      { id: 34, title: "FJ's Special - Tomato Base, Cheese, Garlic, Bacon, Ham, Green Pepper, Mushrooms, Olives, Pineapple", price: "40,00" , img_id : require("../images/img.jpg")},
    ],
    extras: [
      { id: 35, title: "Peppers, Garlic, Tomato, Red Onion", price: "10,00", img_id : require("../images/img.jpg") },
      { id: 36, title: "Olives, Mushrooms, Pineapple, Feta, Jalapeno", price: "13,00", img_id : require("../images/img.jpg") },
      { id: 37, title: "Cheese, Bacon, Ham, Beef Mince, Pulled Pork", price: "15,00", img_id : require("../images/img.jpg") },
      { id: 38, title: "Roast Chicken, Boerewors", price: "20,00", img_id : require("../images/img.jpg") },
    ],
  },
];



export default function Page(){
    const currency_symbol = "R"

    const swiperRef = useRef(null); // reference to swiper instance
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    const handleCategoryClick = (index) => {
      setActiveCategoryIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index); // slide to the clicked category
      }
    };
// SwiperSlide
    return (
    <div>
      {/* Category Buttons */}
      <div className="categoryButtons">
        {data.map((cat, idx) => (
          <button
            key={cat.category}
                  className={idx === activeCategoryIndex ? "activeCategory" : ""}
            onClick={() => handleCategoryClick(idx)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"
        spaceBetween={20}
        pagination={{ clickable: true }}
        
      >
        {data.map((category, idx) => (
          <SwiperSlide key={category.category}>
            {idx === activeCategoryIndex && ( // only render active category
              <div className="CardContainer">
                {category.items.map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    img_id={item.img_id}
                    price={item.price}
                    currency_symbol={currency_symbol}
                  />
                ))}

                {/* ✅ Add this: render extras if they exist */}
                {category.extras && category.extras.length > 0 && (
                  <div className="extrasSection">
                    <h3>Extras</h3>
                    {category.extras.map((extra) => (
                      <Card
                        key={extra.id}
                        title={extra.title}
                        description={extra.options ? extra.options.join(", ") : ""}
                        img_id={extra.img_id}
                        price={extra.price}
                        currency_symbol={currency_symbol}
                      />
                    ))}
                  </div>
                )}

              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


function Card(props) {
  return (
    <div className="menuItemCard col-lg-6 menu-item isotope-item filter-starters">
      <img src={props.img_id} />
      <div className="cardContent">
        <div>
          <h4>{props.title}</h4>
          <span>{GetPrice(props.price, props.currency_symbol)}</span>
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}


function GetPrice(price, currency_symbol){
    if (typeof price !== "object") return `${currency_symbol}${price}`
      return (
    <>
      Single {currency_symbol}{price.single}<br />
      Double {currency_symbol}{price.double}
    </>
  )
  
}