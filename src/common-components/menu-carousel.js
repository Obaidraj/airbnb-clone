import "../assets/css/slick-main.css";
import "../assets/css/slick-theme.css";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Slider from "react-slick";
import { RadioGroup } from "@headlessui/react";

import { MenuList } from "../helper/models/menu";

const MenuCarousel = (props) => {
  const [plan, setPlan] = useState("startup");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 13,
    slidesToScroll: 5,
    variableWidth: true,
  };
  useEffect(() => {
    props?.GetUpdatedValue(plan);
  }, [plan]);
  return (
    <>
      <div className="carousel-menu mb-3">
        <RadioGroup>
          <Slider {...settings}>
            {MenuList?.map((menu) => {
              return (
                <>
                  <RadioGroup.Option value={menu?.id}>
                    {({ checked }) => (
                      <label
                        className={
                          clsx({ active: checked }) +
                          "hover:border-b border-solid border-Slate px-4 "
                        }
                        htmlFor={menu?.id}
                        key={menu?.id}
                      >
                        <button className="menu-carousel-list">
                          <div className="flex flex-col items-center justify-between">
                            <img src={menu?.src} alt="cat-1" />
                            <span>{menu?.name} </span>
                          </div>
                        </button>
                      </label>
                    )}
                  </RadioGroup.Option>
                </>
              );
            })}
          </Slider>
        </RadioGroup>
      </div>
    </>
  );
};

export default MenuCarousel;
