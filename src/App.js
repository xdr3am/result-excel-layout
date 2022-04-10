import React from 'react';
import AppPromo from './components/AppPromo/AppPromo';
import AppStatistic from './components/AppStatistic/AppStatistic';
import AppPlan from './components/AppPlan/AppPlan';
import AppResult from './components/AppResult/AppResult';
import AppFuture from './components/AppFuture/AppFuture';
import AppVacancies from './components/AppVacancies/AppVacancies';
import AppLearn from './components/AppLearn/AppLearn';
import AppIncludes from './components/AppIncludes/AppIncludes';
import AppProgram from './components/AppProgram/AppProgram';
import AppBonus from './components/AppBonus/AppBonus';
import AppRates from './components/AppRates/AppRates';
import AppAuthors from './components/AppAuthors/AppAuthors';

function App() {
  return (
    <div className="wrapper">
      <h1 className="visually-hidden">Курс Excel</h1>
      <AppPromo/>
      <AppStatistic/>
      <AppPlan/>
      <AppResult/>
      <AppFuture/>
      <AppVacancies/>
      <AppLearn/>
      <AppIncludes/>
      <AppProgram/>
      <AppBonus/>
      <AppRates/>
      <AppAuthors/>
      <AppPromo/>
    </div>
  );
}

export default App;
