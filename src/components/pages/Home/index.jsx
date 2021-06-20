import AveragePrice from '../../AveragePrice';
import CurrentHoldings from '../../CurrentHoldings';
import Footer from '../../Footer';
import NewHoldings from '../../NewHoldings';
import PageWrapper from '../../PageWrapper';
import React from 'react';
import SearchCompany from '../../SearchCompany';
import Title from '../../Title';

const Home = () => {
  return (
    <PageWrapper>
      <Title />
      <SearchCompany />
      <NewHoldings />
      <CurrentHoldings />
      <AveragePrice />
      <Footer />
    </PageWrapper>
  );
};

export default Home;
