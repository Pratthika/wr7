import React from 'react';
import WelcomeSection from './WelcomeSection';
import DiscoverSection from './DiscoverSection';
import TabsSection from './TabsSection';
import ReadOfTheMonth from './ReadOfTheMonth';
import ForumSection from './ForumSection';
import CustomerReview from './CustomerReview';


function Home() {
  return (
    <div className="home">
      <TabsSection />
      <WelcomeSection />
      <DiscoverSection />
      <ReadOfTheMonth />
      <ForumSection />
      <CustomerReview />
    </div>
  );
}

export default Home;
