import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import IconArrow from '../../assets/images/icons/icon-arrow-right.svg';

gsap.registerPlugin(ScrollTrigger);

const AppResult = () => {
  const section = React.createRef();
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
        start: "top 10%",
        end: () => `+=${section.current.offsetHeight}`,
        scrub: true,
        pin: true,
      }
    })

    tl.to(block.current, {
      opacity: 0
    })
  })

  return (
    <section ref={section} className="relative max-w-[1860px] rounded-2xl mx-auto bg-black mt-[60px] mb-[40px]">
      <div
        ref={block}
        className="container flex flex-col items-center min-h-[80vh] py-[110px]"
      >
        <h2 className="max-w-[1000px] mb-[80px] text-[54px] leading-[1.3] font-bold text-white text-center">
          Твои результаты после курса поместятся в одну простую модель
        </h2>
        <div className="relative flex items-center">
          <div ref={step1} className="p-[18px] mx-[5px] rounded-lg bg-[#3E494F] text-[34px] leading-[1.3] text-white">Excel</div>
          <div className="flex items-center justify-center p-[20px] mx-[5px]">
            <img src={IconArrow} alt="icon-arrow"/>
          </div>
          <div ref={step2} className="p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[34px] leading-[1.3] text-white">JS</div>
          <div ref={step3} className="p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[34px] leading-[1.3] text-white">FW</div>
          <div ref={step4} className="p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[34px] leading-[1.3] text-white">APP</div>
          <div className="flex items-center justify-center p-[20px] mx-[5px]">
            <img src={IconArrow} alt="icon-arrow"/>
          </div>
          <div className="p-[18px] mx-[5px] rounded-lg bg-[#2b3438] text-[34px] leading-[1.3] text-white">(A,B,C) AND !(X,Y,Z)</div>

          <div
            ref={description}
            className="
            absolute top-[180px] left-[60px] w-full max-w-[278px] opacity-0
            before:absolute before:-top-[80px] before:left-[0] before:w-px before:h-[60px] before:bg-white"
          >
            <p ref={stepText1} className="text-lg text-white">EXCEL — проходишь этот курс и выполняешь все задания</p>
            <p ref={stepText2} className="text-lg text-white hidden">JS — узнаешь много приёмов использования JS</p>
            <p ref={stepText3} className="text-lg text-white hidden">FW — поймёшь все фреймворки, сможешь юзать любой</p>
            <p ref={stepText4} className="text-lg text-white hidden">APP — самостоятельно создашь приложение Excel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppResult;