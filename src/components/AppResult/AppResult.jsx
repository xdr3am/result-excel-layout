import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import IconArrow from '../../assets/images/icons/icon-arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

const AppResult = () => {
  const section = React.createRef();
  const container = React.createRef();
  const block = React.createRef();
  const description = React.createRef();
  const step1 = React.createRef();
  const stepText1 = React.createRef();
  const step2 = React.createRef();
  const stepText2 = React.createRef();
  const step3 = React.createRef();
  const stepText3 = React.createRef();
  const step4 = React.createRef();
  const stepText4 = React.createRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: () => `+=${section.current.offsetWidth}`,
        pin: true,
        scrub: true,
        toggleActions: "play complete reverse reverse",
      }
    })

    // tl.fromTo('.anim-block-start', {y: 100}, {y: 0})
    tl.fromTo('.anim-description-1', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl.fromTo('.anim-description-1', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl.fromTo('.anim-container-2', {x: 0}, {x: "-100%", duration: 0})
    tl.fromTo('.anim-description-2', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl.fromTo('.anim-description-2', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl.fromTo('.anim-container-3', {x: 0}, {x: '-200%', duration: 0})
    tl.fromTo('.anim-description-3', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl.fromTo('.anim-description-3', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl.fromTo('.anim-container-4', {x: 0}, {x: '-300%', duration: 0})
    tl.fromTo('.anim-description-4', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl.fromTo('.anim-description-4', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl.fromTo('.anim-container-5', {x: 0}, {x: '-400%', duration: 0})
    tl.fromTo('.anim-description-5', {y: 10, opacity: 0}, {y: 0, opacity: 1})
    tl.fromTo('.anim-description-5', {y: 0, opacity: 1}, {y: 10, opacity: 0, delay: 1})
    tl.fromTo('.anim-step-last', {background: "#3E494F"}, {background: '#2b3438', duration: 0})
    // tl.fromTo('.anim-block-end', {y: 0}, {y: 100})
  })

  return (
    <section ref={section} className="w-[500vw] h-screen py-0 xl:py-[80px] flex flex-row overflow-hidden">
      <div ref={container} className="anim-container-1 flex items-center justify-center w-screen h-full bg-black">
        <div ref={block} className="anim-block-start container h-full flex flex-col items-center pt-10 md:pt-[140px] pb-5 md:pb-[110px]">
          <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-xl md:text-4xl lg:text-[54px] lg:leading-[1.3] font-bold text-white text-center">
            Твои результаты после курса поместятся в одну простую модель
          </h2>
          <div className="w-full md:w-auto flex flex-grow md:flex-grow-0 items-start justify-content-evenly md:items-center flex-col md:flex-row">
            <div ref={step1} className="relative p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] lg:text-[34px] leading-[1.3] text-white">
              <span>Excel</span>
              <div
                ref={description}
                className="anim-description-1
                absolute top-[40px] md:top-[180px] left-[110px] md:left-[40px] w-[230px] md:w-[278px]
                before:absolute before:-top-[10px] md:before:-top-[80px] before:left-[0] before:w-[60px] md:before:w-px before:h-px md:before:h-[60px] before:bg-white"
              >
                <p ref={stepText1} className="text-base 2xl:text-lg text-white">EXCEL — проходишь этот курс и выполняешь все задания</p>
              </div>
            </div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div ref={step2} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">JS</div>
            <div ref={step3} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">FW</div>
            <div ref={step4} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">APP</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">(A,B,C) AND !(X,Y,Z)</div>
          </div>
        </div>
      </div>
      <div ref={container} className="anim-container-2 flex items-center justify-center w-screen h-full mx-auto bg-black">
        <div ref={block} className="container h-full flex flex-col items-center pt-10 md:pt-[140px] pb-5 md:pb-[110px]">
          <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-xl md:text-4xl lg:text-[54px] lg:leading-[1.3] font-bold text-white text-center">
            Твои результаты после курса поместятся в одну простую модель
          </h2>
          <div className="w-full md:w-auto flex flex-grow md:flex-grow-0 items-start justify-content-evenly md:items-center flex-col md:flex-row">
            <div ref={step1} className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">Excel</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div ref={step2} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] lg:text-[34px] leading-[1.3] text-white">
              <span>JS</span>
              <div
                ref={description}
                className="anim-description-2
                absolute top-[40px] md:top-[180px] left-[90px] md:left-[40px] w-[230px] md:w-[278px]
                before:absolute before:-top-[10px] md:before:-top-[80px] before:left-[0] before:w-[60px] md:before:w-px before:h-px md:before:h-[60px] before:bg-white"
              >
                <p ref={stepText2} className="text-base 2xl:text-lg text-white">JS — узнаешь много приёмов использования JS</p>
              </div>
            </div>
            <div ref={step3} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">FW</div>
            <div ref={step4} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">APP</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">(A,B,C) AND !(X,Y,Z)</div>
          </div>
        </div>
      </div>
      <div ref={container} className="anim-container-3 flex items-center justify-center w-screen h-full mx-auto bg-black">
        <div ref={block} className="container h-full flex flex-col items-center pt-10 md:pt-[140px] pb-5 md:pb-[110px]">
          <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-xl md:text-4xl lg:text-[54px] lg:leading-[1.3] font-bold text-white text-center">
            Твои результаты после курса поместятся в одну простую модель
          </h2>
          <div className="w-full md:w-auto flex flex-grow md:flex-grow-0 items-start justify-content-evenly md:items-center flex-col md:flex-row">
            <div ref={step1} className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">Excel</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div ref={step2} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">JS</div>
            <div ref={step3} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] lg:text-[34px] leading-[1.3] text-white">
              <span>FW</span>
              <div
                ref={description}
                className="anim-description-3
                absolute top-[40px] md:top-[180px] left-[100px] md:left-[40px] w-[230px] md:w-[278px]
                before:absolute before:-top-[10px] md:before:-top-[80px] before:left-[0] before:w-[60px] md:before:w-px before:h-px md:before:h-[60px] before:bg-white"
              >
                <p ref={stepText3} className="text-base 2xl:text-lg text-white">FW — поймёшь все фреймворки, сможешь юзать любой</p>
              </div>
            </div>
            <div ref={step4} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">APP</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">(A,B,C) AND !(X,Y,Z)</div>
          </div>
        </div>
      </div>
      <div ref={container} className="anim-container-4 flex items-center justify-center w-screen h-full mx-auto bg-black">
        <div ref={block} className="container h-full flex flex-col items-center pt-10 md:pt-[140px] pb-5 md:pb-[110px]">
          <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-xl md:text-4xl lg:text-[54px] lg:leading-[1.3] font-bold text-white text-center">
            Твои результаты после курса поместятся в одну простую модель
          </h2>
          <div className="w-full md:w-auto flex flex-grow md:flex-grow-0 items-start justify-content-evenly md:items-center flex-col md:flex-row">
            <div ref={step1} className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">Excel</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div ref={step2} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">JS</div>
            <div ref={step3} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">FW</div>
            <div ref={step4} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] lg:text-[34px] leading-[1.3] text-white">
              <span>APP</span>
              <div
                ref={description}
                className="anim-description-4
                absolute top-[40px] md:top-[180px] left-[105px] md:left-[40px] w-[230px] md:w-[278px]
                before:absolute before:-top-[10px] md:before:-top-[80px] before:left-[0] before:w-[60px] md:before:w-px before:h-px md:before:h-[60px] before:bg-white"
              >
                <p ref={stepText4} className="text-base 2xl:text-lg text-white">APP — самостоятельно создашь приложение Excel</p>
              </div>
            </div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">(A,B,C) AND !(X,Y,Z)</div>
          </div>
        </div>
      </div>
      <div ref={container} className="anim-container-5 flex items-center justify-center w-screen h-full mx-auto bg-black">
        <div ref={block} className="anim-block-end container h-full flex flex-col items-center pt-10 md:pt-[140px] pb-5 md:pb-[110px]">
          <h2 className="max-w-[1000px] mb-10 md:mb-[80px] text-xl md:text-4xl lg:text-[54px] lg:leading-[1.3] font-bold text-white text-center">
            Твои результаты после курса поместятся в одну простую модель
          </h2>
          <div className="w-full md:w-auto flex flex-grow md:flex-grow-0 items-start justify-content-evenly md:items-center flex-col md:flex-row">
            <div ref={step1} className="relative p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">Excel</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div ref={step2} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">JS</div>
            <div ref={step3} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">FW</div>
            <div ref={step4} className="relative mb-2 md:mb-0 p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[20px] lg:text-[34px] leading-[1.3] text-white">APP</div>
            <div className="rotate-90 md:rotate-0 flex items-center justify-center p-[15px] md:p-[20px] mx-[5px]">
              <img src={IconArrow} alt="icon-arrow"/>
            </div>
            <div className="anim-step-last relative p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[20px] lg:text-[34px] leading-[1.3] text-white">
              <span>(A,B,C) AND !(X,Y,Z)</span>
              <div
                ref={description}
                className="anim-description-5
                absolute -top-[280px] md:top-[180px] right-auto md:right-[40px] xl:right-auto left-[100px] md:left-auto xl:left-[40px] w-[230px] md:w-[auto]
                before:absolute before:top-[310px] md:before:-top-[80px] before:right-[30px] xl:before:right-auto before:left-auto xl:before:left-[0] before:w-[60px] md:before:w-px before:h-px md:before:h-[60px] before:bg-white"
              >
                <div className="text-sm md:text-base 2xl:text-lg text-white whitespace-normal md:whitespace-nowrap">
                  <p>A — соединишь все свои знания в одну общую систему</p>
                  <p>B — научишься создавать более сложные приложения</p>
                  <p className="mb-5">С — неоспоримо побеждаешь конкурентов Jun Frontend</p>
                  <p>X — не можешь писать сложный код, путаешься, всё летит</p>
                  <p>Y — мыслишь узко, не системно, ограничен знаниями</p>
                  <p>Z — работа скучна, доход меньше, большая конкуренция</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppResult;