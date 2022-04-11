import React from 'react';
import AppPromo from './components/AppPromo/AppPromo';
import AppStatistic from './components/AppStatistic/AppStatistic';
import AppPlan from './components/AppPlan/AppPlan';
import AppResult from './components/AppResult/AppResult';
import AppFuture from './components/AppFuture/AppFuture';
import AppVacancies from './components/AppVacancies/AppVacancies';
import AppLearn from './components/AppLearn/AppLearn';
import AppCodeExample from './components/AppCodeExample/AppCodeExample';
import AppIncludes from './components/AppIncludes/AppIncludes';
import AppProgram from './components/AppProgram/AppProgram';
import AppBonus from './components/AppBonus/AppBonus';
import AppRates from './components/AppRates/AppRates';
import AppReviews from './components/AppReviews/AppReviews';
import AppAuthors from './components/AppAuthors/AppAuthors';
import AppFaq from './components/AppFaq/AppFaq';

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
      <AppCodeExample/>
      <AppIncludes/>
      <AppProgram/>
      <AppBonus/>
      <AppRates/>
      <AppReviews />
      <AppAuthors/>
      <AppFaq/>
      <AppPromo/>
    </div>
  );
}

export default App;
