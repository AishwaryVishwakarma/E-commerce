import React from 'react';
import Layout from '../../components/Layout/Layout';
import HomeHero from '../../components/Home/HomeHero/HomeHero';
import ProductSection from '../../components/Home/ProductSection/ProductSection';
import {
  FIRST_FOLD_DATA,
  SECOND_FOLD_DATA,
  THIRD_FOLD_DATA,
  FOURTH_FOLD_DATA,
} from '../../DUMMY_DATA';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      {/* TodaysDeal */}
      <ProductSection sectionData={FIRST_FOLD_DATA} />
      {/* Second Fold */}
      <ProductSection sectionData={SECOND_FOLD_DATA} />
      {/* ThirdFold */}
      <ProductSection sectionData={THIRD_FOLD_DATA} />
      {/* Fourth Fold */}
      <ProductSection sectionData={FOURTH_FOLD_DATA} />
    </Layout>
  );
};

export default HomePage;
