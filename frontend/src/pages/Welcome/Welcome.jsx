import React from 'react';
import WelcomeCard1 from './WelcomeCard';
import WelcomeCard2 from './WelcomeCard2';

import compnay from './assets/compnay.jpg';
import researcher from './assets/research.jpg';

const Welcome = () => {
  return (
    <div className="container welcome-cards">
      <WelcomeCard1
        imgsrc={compnay}
        title="Company"
        description="An apple is an edible fruit produced by an apple tree. Apple trees
        are cultivated worldwide and are the most widely grown species in
        the genus Malus. The tree originated in Central Asia, where its wild
        ancestor, Malus sieversii, is still found today. Wikipedia"
        role={2}
      />
      <WelcomeCard2
        imgsrc={researcher}
        title="Researcher"
        description="An apple is an edible fruit produced by an apple tree. Apple trees
        are cultivated worldwide and are the most widely grown species in
        the genus Malus. The tree originated in Central Asia, where its wild
        ancestor, Malus sieversii, is still found today. Wikipedia"
        role={2}
      />
    </div>
  );
};

export default Welcome;
