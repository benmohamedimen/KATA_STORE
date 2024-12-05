import React from 'react'
import Slider from 'react-slick'
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/category/macbook.png'
import Image3 from '../../assets/category/gaming.png'
import Button from '../../shared/Button'
const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats SoLo",
        title: "Discover the Beats Solo Experience",
        title2: "BEATS",
        description: "Experience the music of the future with Beats Solo, a unique and groundbreaking audio platform that combines the best of both worlds."

    },
    {
        id: 2,
        img: Image2,
        subtitle: "Macbook",
        title: "Discover the Macbook Experience",
        title2: "Mac",
        description: "Experience the music of the future with Beats Solo, a unique and groundbreaking audio platform that combines the best of both worlds."

    },
    {
        id: 3,
        img: Image3,
        subtitle: "XBox 3",
        title: "Discover the Gaming Experience",
        title2: "XBOX",
        description: "Experience the music of the future with Beats Solo, a unique and groundbreaking audio platform that combines the best of both worlds."

    }
]

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplayspeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    };
    return (
        <div className='bg-white dark:bg-gray-900
        dark:text-white duration-200 relative z-40'>
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] 
        sm:min-h-[650px] hero-bg-color  flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    {/* hero section */}
                    <Slider {...settings}>
                        {
                            HeroData.map(item => (
                                <div
                                    key={item.id}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                                        {/* text content section */}
                                        <div className='flex flex-col justify-center
                     gap-4 sm:pl-3 pt-12 sm:pt-0 
                     text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                            <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>
                                                {item.subtitle}</h1>
                                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                                {item.title}</h1>
                                            <h1 className='text-5xl uppercase text-white 
                                            dark:text-white/5 sm:text-[80px]
                        md:text-[100px] xl:[150px] font-bold'>{item.title2}</h1>
                                            <div>
                                              <Button text="Order Now" bgColor="bg-primary" textColor="text-white"></Button>
                                            </div>
                                        </div>

                                        {/* img section */}
                                        <div>
                                            <div>
                                                <img src={item.img} alt=''
                                                    className='w-[300px] sm:h-[450px] h-[300px] 
                            sm:scale-105 lg:scale-110 object-contain mx-auto
                             drop-shadow-[-8px_4px_6px_ rgba(0,0,0,.4)] relative z-40'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero