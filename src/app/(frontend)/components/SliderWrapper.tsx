'use client';

//Swiper
// Import Swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

type SliderWrapperProps = {
    children: React.ReactNode;
    extraSmallSlidePerView?: number;
    smallSlidePerView?: number;
    mediumSlidePerView?: number;
    largeSlidePerView?: number;
    xlSlidePerView?: number;
    spaceBetween?: number;
    autoPlay?: boolean;
};

const SliderWrapper = ({
    children,
    extraSmallSlidePerView = 4.5,
    smallSlidePerView = 4.5,
    mediumSlidePerView = 6.5,
    largeSlidePerView = 9,
    xlSlidePerView = 9,
    spaceBetween = 0,
    autoPlay = false
}: SliderWrapperProps) => {
    let autoplayOn;
    if (autoPlay) {
        autoplayOn = {
            delay: 3500,
            disableOnInteraction: false
        };
    }

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: extraSmallSlidePerView
                },
                390: {
                    //small
                    slidesPerView: smallSlidePerView
                },
                768: {
                    //medium
                    slidesPerView: mediumSlidePerView
                },
                1024: {
                    //large
                    slidesPerView: largeSlidePerView
                },
                1536: {
                    //XL
                    slidesPerView: xlSlidePerView
                }
            }}
            spaceBetween={spaceBetween}
            autoplay={autoplayOn}
            freeMode={true}
            pagination={{
                el: '.swiper-page',
                type: 'custom',
                renderCustom: function (swiper, current, total) {
                    return current + '/' + total;
                }
            }}
            navigation={{
                prevEl: '.swiper-prev',
                nextEl: '.swiper-next'
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className='mySwiper [&_.swiper-slide]:h-auto [&_.swiper-wrapper]:items-stretch'>
            {children}
        </Swiper>
    );
};

export default SliderWrapper;
