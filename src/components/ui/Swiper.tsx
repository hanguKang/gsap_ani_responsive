// components/SwiperList.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";

export default function SwiperList() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  const animateSlides = (index: number) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const slides = Array.from(swiper.slides).slice(index, index + 3) as HTMLElement[];

    gsap.fromTo(
      slides,
      { opacity: 0.3, y: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
                each: 0.05,
                from: "center", // 👉 가운데부터 애니메이션 시작
            },
      }
    );
  };

  useEffect(() => {
    animateSlides(0); // 초기 3개 슬라이드 애니메이션
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChangeTransitionEnd={(swiper) => {
        animateSlides(swiper.activeIndex);
      }}
      slidesPerView={3}
      spaceBetween={20}
      loop={true}
    >
      {items.map((text, i) => (
        <SwiperSlide key={i}>
          <div
            style={{
              background: "#ccc",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            {text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
