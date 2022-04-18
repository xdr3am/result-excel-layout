import React, {useState} from 'react';

const AppCodeExample = () => {
  const [switcher, setSwitcher] = useState(true)

  return (
    <section className={switcher ? 'dark' : null}>
      <div className="relative py-[60px] container px-0 md:px-5">
        <div className="relative flex flex-col items-center pt-[60px] bg-[#F5F5F4] dark:bg-[#0F1214] rounded-none md:rounded-2xl overflow-hidden transition-all duration-500">
          <div className="absolute top-7 right-7 w-[170px]">
            <input
              className="hidden"
              type="checkbox"
              name="themeSwitcher"
              id="themeSwitcher"
              checked={switcher}
              onChange={() => setSwitcher(!switcher)}
            />
            <label className="flex items-center dark:text-white cursor-pointer" htmlFor="themeSwitcher">
              <div className="w-9 h-4 flex items-center bg-[#C6CBD8] dark:bg-[#52D076] rounded-full transition-all duration-500">
                <div className={`w-5 h-5 -ml-0.5 bg-white rounded-full shadow transition-all duration-300 ease-linear ${switcher ? 'translate-x-5' : 'translate-x-0'}`}/>
              </div>
              <span className="ml-4 dark:text-white text-[20px] leading-[1.3] transition-all duration-500">{switcher ? 'Dark mode' : 'Light mode'}</span>
            </label>
          </div>

          <h2 className="max-w-[800px] px-5 pt-5 sm:pt-0 mb-[30px] text-3xl sm:text-[54px] leading-[1.3] font-bold dark:text-white text-center transition-all duration-500">
            Для обучения тебе нужен средний уровень JavaScript
          </h2>
          <p className="max-w-[800px] px-5 mb-12 sm:mb-20 text-base sm:text-[20px] leading-[1.4] dark:text-white text-center transition-all duration-500">
            Ты умеешь заверстать лендинг (HTML и  CSS), понимаешь, что такое промисы и как работают объекты,
            знаешь основы асинхронности, умеешь работать с функциями и классами
          </p>

          <div className="relative flex items-center justify-center w-full px-8">
            <div className="relative w-full max-w-[790px] rounded-t-[14px] bg-white dark:bg-[#282D32] shadow-xl transition-all duration-500">
              <div className="flex items-center py-3 px-5 border-b border-[#E6E9EC] dark:border-[#21262B] transition-all duration-500">
                <span className="w-3 h-3 mr-1 rounded-full bg-[#E6E9EC] dark:bg-[#3A3F45] transition-all duration-500" />
                <span className="w-3 h-3 mr-1 rounded-full bg-[#E6E9EC] dark:bg-[#3A3F45] transition-all duration-500" />
                <span className="w-3 h-3 mr-1 rounded-full bg-[#E6E9EC] dark:bg-[#3A3F45] transition-all duration-500" />
              </div>
              <div className="relative flex">
                <div className="flex flex-col w-[15%] bg-[#EEF1F5] dark:bg-[#202529] transition-all duration-500">
                  <span className="w-full h-9 mb-9 bg-[#E8EDF2] dark:bg-[#191D21] transition-all duration-500" />
                  <span className="w-full h-9 mb-9 bg-[#E8EDF2] dark:bg-[#191D21] transition-all duration-500" />
                </div>
                <div className="w-[85%] p-4 sm:p-[30px]">
                <pre className="font-['DroidSans'] text-[10px] sm:text-xs md:text-sm dark:text-white transition-all duration-500">
                  <code className="font-sans leading-[1.7]">
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'<!DOCTYPE'}</span> HTML<span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'<html>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'<head>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'  <meta'} <span className="text-[#CB486B] dark:text-[#FF799D] transition-all duration-500">charset</span>{'="'}<span className="text-[#39B1A3] dark:text-[#73E0D3] transition-all duration-500">utf-8</span>{'">'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'  <title>'}</span>CODE<span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'</title>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'</head>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'<body>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'  <p>'}</span>Код программы<span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'</p>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'  <pre><code>'}</span>{'function checkParent (src, dest) {'}</p>
                    <p>{'  while (src != null) {'}</p>
                    <p>{'    if (src.tagName == dest) return src'}</p>
                    <p>{'    src = src.parentElement'}</p>
                    <p>{'  }'}</p>
                    <p>{'  return null'}</p>
                    <p>{'  }'}<span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'</pre></code>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'</body>'}</span></p>
                    <p><span className="text-[#3E62C0] dark:text-[#9CB4F2] transition-all duration-500">{'</html>'}</span></p>
                  </code>
                </pre>
                </div>
              </div>

              <div className="relative sm:absolute bottom-0 md:bottom-10 right-0 md:-right-4 lg:-right-10 -left-[5%] sm:left-auto w-[110%] sm:w-[353px] -mt-2 sm:mt-0 py-5 px-6 rounded-2xl bg-white dark:bg-[#4D5258] text-sm sm:text-base text-black dark:text-white shadow-2xl transition-all duration-500">
                Если ты понимаешь, что именно изображено на скриншоте  — ты 100% справишься с обучением и успешно прокачаешь навык
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppCodeExample;