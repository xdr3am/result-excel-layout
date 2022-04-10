import React, {useState} from 'react';

const AppCodeExample = () => {
  const [switcher, setSwitcher] = useState(true)

  return (
    <section className={switcher ? 'dark' : null}>
      <div className="relative py-[60px] container">
        <div className="relative flex flex-col items-center pt-[60px] bg-[#F5F5F4] dark:bg-[#0F1214] rounded-2xl overflow-hidden transition-all duration-500">
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
                <div className={`w-5 h-5 -ml-0.5 bg-white rounded-full shadow transition-all duration-500 ease-linear ${switcher ? 'translate-x-5' : 'translate-x-0'}`}/>
              </div>
              <span className="ml-4 dark:text-white text-[20px] leading-[1.3] transition-all duration-500">{switcher ? 'Dark mode' : 'Light mode'}</span>
            </label>
          </div>

          <h2 className="max-w-[800px] px-5 pt-5 sm:pt-0 mb-[30px] text-4xl sm:text-[54px] leading-[1.3] font-bold dark:text-white text-center transition-all duration-500">
            Для обучения тебе нужен средний уровень JavaScript
          </h2>
          <p className="max-w-[800px] px-5 mb-12 sm:mb-20 text-base sm:text-[20px] leading-[1.4] dark:text-white text-center transition-all duration-500">
            Ты умеешь заверстать лендинг (HTML и  CSS), понимаешь, что такое промисы и как работают объекты,
            знаешь основы асинхронности, умеешь работать с функциями и классами
          </p>

          <div className="w-full max-w-[790px] rounded-t-[14px] bg-white dark:bg-[#282D32] shadow-xl transition-all duration-500">
            <div className="flex items-center py-3 px-5 border-b border-[#E6E9EC] dark:border-[#21262B] transition-all duration-500">
              <span className="w-3 h-3 mr-1 rounded-full bg-[#E6E9EC] dark:bg-[#3A3F45] transition-all duration-500" />
              <span className="w-3 h-3 mr-1 rounded-full bg-[#E6E9EC] dark:bg-[#3A3F45] transition-all duration-500" />
              <span className="w-3 h-3 mr-1 rounded-full bg-[#E6E9EC] dark:bg-[#3A3F45] transition-all duration-500" />
            </div>
            <div className="flex">
              <div className="flex flex-col w-[15%] bg-[#EEF1F5] dark:bg-[#202529] transition-all duration-500">
                <span className="w-full h-9 mb-9 bg-[#E8EDF2] dark:bg-[#191D21] transition-all duration-500" />
                <span className="w-full h-9 mb-9 bg-[#E8EDF2] dark:bg-[#191D21] transition-all duration-500" />
              </div>
              <div className="w-[85%] p-4 sm:p-[30px]">
                <pre><code className="font-['DroidSans'] text-[10px] sm:text-xs md:text-sm dark:text-white transition-all duration-500">
{`<!DOCTYPE HTML>
<html>
<head>
    <meta charset=”utf-8”>
    <title>CODE</title>
</head>
<body>
    <p>Код программы</p>
    <pre><code>function checkParent (src, dest) {
    while (src != null) {
      if (src.tagName == dest) return src
      src = src.parentElement
    }
      return null
    }</code></pre>
  
</body>
</html>`}
                </code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCodeExample;