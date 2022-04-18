import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import IconArrow from '../../assets/images/icons/icon-arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

const AppResult = () => {
  const section = React.createRef();
  const block1 = React.createRef();
  const block2 = React.createRef();
  const block3 = React.createRef();

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: block1.current,
        start: "top top",
        end: `+=${block1.current.offsetHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: true
      }
    })

    tl1.fromTo('._anim-block-start', {opacity: 0}, {opacity: 1})
    tl1.fromTo('._anim-block-start', {y: 100}, {y: 0})
    tl1.fromTo('._anim-description-1', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl1.fromTo('._anim-description-1', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl1.fromTo('._anim-container-2', {opacity: 0}, {opacity: 1, duration: 0})

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: block2.current,
        start: "top top",
        end: `+=${block2.current.offsetHeight}`,
        pin: true,
        pinSpacing: false,
        scrub: true
      }
    })

    tl2.fromTo('._anim-description-2', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl2.fromTo('._anim-description-2', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl2.fromTo('._anim-container-3', {opacity: 0}, {opacity: 1, duration: 0})

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: block3.current,
        start: "top top",
        end: `+=${block3.current.offsetHeight}`,
        pin: true,
        scrub: true
      }
    })

    tl3.fromTo('._anim-description-3', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl3.fromTo('._anim-description-3', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    // tl.fromTo('._anim-container-1', {display: "flex"}, {display: "none"})
    // tl.fromTo('._anim-container-2', {x: 0}, {x: "-100%", duration: 0})
    // tl.fromTo('._anim-description-2', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    // tl.fromTo('._anim-description-2', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    // tl.fromTo('._anim-container-3', {x: 0}, {x: '-200%', duration: 0})
    // tl.fromTo('._anim-description-3', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    // tl.fromTo('._anim-description-3', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    // tl.fromTo('._anim-container-4', {x: 0}, {x: '-300%', duration: 0})
    // tl.fromTo('._anim-description-4', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    // tl.fromTo('._anim-description-4', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    // tl.fromTo('._anim-container-5', {x: 0}, {x: '-400%', duration: 0})
    // tl.fromTo('._anim-description-5', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    // tl.fromTo('._anim-description-5', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    // tl.fromTo('._anim-step-3', {background: "#3E494F"}, {background: '#2b3438', duration: 0})
    // tl.fromTo('._anim-block-end', {y: 0}, {y: 100})
    // tl.fromTo('._anim-block-end', {opacity: 1}, {opacity: 0})
  })

  return (
    <section ref={section} className="relative">
      <div ref={block1} className="_anim-container-1 flex items-start md:items-center justify-center w-screen h-screen py-[5vh]">
        <div className="w-screen h-screen flex items-start md:items-center justify-center bg-black rounded-2xl">
          <div className="_anim-block-start container flex flex-col items-center pb-[20%] pt-10">
            <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-[28px] md:text-[54px] md:leading-[1.3] font-bold text-white text-center">
              Твои результаты после курса поместятся в одну простую модель
            </h2>
            <div className="w-full md:w-auto flex items-center justify-center">
              <div
                className="_anim-step-1 relative p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">
                <span>Excel</span>
                <div
                  className="_anim-description-1
                absolute top-[160px] md:top-[180px] left-[43px] w-[278px]
                before:absolute before:-top-[80px] before:left-[0] before:w-px before:h-[60px] before:bg-white"
                >
                  <p className="-translate-x-1/2 md:translate-x-0 text-lg text-white text-center md:text-left">EXCEL — проходишь этот курс и выполняешь все задания</p>
                </div>
              </div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-[5px] lg:p-[20px] mx-[5px]">
                <img src={IconArrow} alt="icon-arrow"/>
              </div>
              <div className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">JS</div>
              <div className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">FW</div>
              <div className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">APP</div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-[5px] lg:p-[20px] mx-[5px]">
                <img src={IconArrow} alt="icon-arrow"/>
              </div>
              <div className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white whitespace-nowrap">(A,B,C) AND !(X,Y,Z)</div>
            </div>
          </div>
        </div>
      </div>
      <div ref={block2} className="_anim-container-2 opacity-0 flex items-start md:items-center justify-center w-screen h-screen py-[5vh]">
        <div className="w-screen h-screen flex items-start md:items-center justify-center bg-black rounded-2xl">
          <div className="container flex flex-col items-center pb-[20%] pt-10">
            <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-[28px] md:text-[54px] md:leading-[1.3] font-bold text-white text-center">
              Твои результаты после курса поместятся в одну простую модель
            </h2>
            <div className="w-full md:w-auto flex items-center justify-center">
              <div
                className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">Excel</div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-[5px] lg:p-[20px] mx-[5px]">
                <img src={IconArrow} alt="icon-arrow"/>
              </div>
              <div className="_anim-step-2 relative p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">
                <span>JS</span>
                <div
                  className="_anim-description-2
                absolute top-[160px] md:top-[180px] left-[28px] md:left-[35px] w-[278px]
                before:absolute before:-top-[80px] before:left-[0] before:w-px before:h-[60px] before:bg-white"
                >
                  <p className="-translate-x-[60px] md:translate-x-0 text-lg text-white text-center md:text-left">JS — узнаешь много приёмов использования JS</p>
                </div>
              </div>
              <div className="_anim-step-2 relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">FW</div>
              <div className="_anim-step-2 relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">APP</div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-[5px] lg:p-[20px] mx-[5px]">
                <img src={IconArrow} alt="icon-arrow"/>
              </div>
              <div className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white whitespace-nowrap">(A,B,C) AND !(X,Y,Z)</div>
            </div>
          </div>
        </div>
      </div>
      <div ref={block3} className="_anim-container-3 opacity-0 flex items-start md:items-center justify-center w-screen h-screen py-[5vh]">
        <div className="w-screen h-screen flex items-start md:items-center justify-center bg-black rounded-2xl">
          <div className="container flex flex-col items-center pb-[20%] pt-10">
            <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-[28px] md:text-[54px] md:leading-[1.3] font-bold text-white text-center">
              Твои результаты после курса поместятся в одну простую модель
            </h2>
            <div className="w-full md:w-auto flex items-center justify-center">
              <div
                className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">Excel</div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-[5px] lg:p-[20px] mx-[5px]">
                <img src={IconArrow} alt="icon-arrow"/>
              </div>
              <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">JS</div>
              <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">
                <span>FW</span>
                <div
                  className="_anim-description-3
                absolute top-[160px] md:top-[180px] left-[34px] w-[278px]
                before:absolute before:-top-[80px] before:left-[0] before:w-px before:h-[60px] before:bg-white"
                >
                  <p className="-translate-x-[130px] md:translate-x-0 text-lg text-white text-center md:text-left">FW — поймёшь все фреймворки, сможешь юзать любой</p>
                </div>
              </div>
              <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white">APP</div>
              <div className="hidden md:flex flex-shrink-0 items-center justify-center p-[5px] lg:p-[20px] mx-[5px]">
                <img src={IconArrow} alt="icon-arrow"/>
              </div>
              <div className="relative hidden md:block p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] text-white whitespace-nowrap">(A,B,C) AND !(X,Y,Z)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppResult;