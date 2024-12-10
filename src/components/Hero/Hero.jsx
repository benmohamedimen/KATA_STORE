import React from 'react';
import Slider from 'react-slick';
import HeroData from '../../Data/HeroData';
import Button from '../../shared/Button';
import MainContainer from '../../shared/MainContainer';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplayspeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <MainContainer>
      {/* hero section */}
      <Slider {...settings}>
        {HeroData.map((item) => (
          <div key={item.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div
                className="flex flex-col justify-center
                     gap-4 sm:pl-3 pt-12 sm:pt-0 
                     text-center sm:text-left order-2 sm:order-1 relative z-10"
              >
                <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                  {item.subtitle}
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  {item.title}
                </h1>
                <h1
                  className="text-5xl uppercase text-white 
                                            dark:text-white/5 sm:text-[80px]
                        md:text-[100px] xl:[150px] font-bold"
                >
                  {item.title2}
                </h1>
                <div>
                  <Button
                    text="Order Now"
                    bgColor="bg-primary"
                    textColor="text-white"
                  ></Button>
                </div>
              </div>

              {/* img section */}
              <div>
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-[300px] sm:h-[450px] h-[300px] 
                            sm:scale-105 lg:scale-110 object-contain mx-auto
                             drop-shadow-[-8px_4px_6px_ rgba(0,0,0,.4)] relative z-40"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </MainContainer>
  );
};

export default Hero;
