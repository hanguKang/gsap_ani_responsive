// components/AnimatedList.jsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animateCursor, setAnimateCursor] = useState(0); // 애니메이션 시작 인덱스

  const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;
    const children = Array.from(containerRef.current?.children) as HTMLElement[];  



      for (let i = 0; i < children.length; i += 3) {
        const group = children.slice(i, i + 3);

        gsap.fromTo(
          group,
          { opacity: 0.1, y: 30, scale: 0.6 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: group[0], // 그룹의 첫 요소를 기준으로
              start: "top 100px",
              //toggleActions: "restart none none none",
              markers: true,
            },
          }
        ); //fromto End

        
          // ScrollTrigger.create({
          //   trigger: group[0], // 첫 번째 요소를 기준으로 트리거 : 반복문 안의 각 그룹의 첫 요소이므로 결국 0, 3, 6, 9번 요소가 맞습니다.
          //   start: "top 100px",
          //   toggleActions: "restart none none restart",
          //   onEnter: () => {
          //     if (i >= animateCursor) {
          //       gsap.fromTo(
          //         group,
          //         { opacity: 0.3, y: 30, scale: 0.6 },
          //         {
          //           opacity: 1,
          //           y: 0,
          //           scale: 1,
          //           duration: 0.5,
          //           ease: "power2.out",
          //           stagger: 0.1,
          //         }
          //       );
          //       setAnimateCursor(i + 3); // 다음 묶음
          //     }
          //   },
          //   onEnterBack: () => {
          //     gsap.fromTo(
          //       group,
          //       { opacity: 0.3, y: 30, scale: 0.6 },
          //       {
          //         opacity: 1,
          //         y: 0,
          //         scale: 1,
          //         duration: 0.5,
          //         ease: "power2.out",
          //         stagger: 0.1,
          //       }
          //     );
          //   },
          // })
        }//for End


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animateCursor]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: "30px",
        width: "800px",
        margin: "60px auto",
      }}
    >
      {items.map((text, i) => (
        <div
          key={i}
          style={{
            background: "#eee",
            padding: "20px",
            height:"300px",
            textAlign: "center",
            fontSize: "20px",
            borderRadius: "8px",
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}
