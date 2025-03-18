import { LandingPageIntro } from '@/components/landing-page-intro';
import { NavBar } from '@/components/navbar';
import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <LandingPageIntro />
      </div>
    </div>
  );
};

export default LandingPage;