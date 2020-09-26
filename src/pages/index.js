import React from 'react';

import Layout from '../components/layout';

import Hero from '../components/hero';
import Features from '../components/features';
import Pricing from '../components/pricing';
import CalltoAction from '../components/call-to-action';
import Screenshots from '../components/screenshots';
import Testimonials from '../components/testimonials';
import Subscribe from '../components/subscribe';
import GetStarted from '../components/get-started';

import { useSiteMetadata } from '../hooks/use-site-metadata';

export default () => {
  const { sections } = useSiteMetadata();
  const availableSections = {
    hero: Hero,
    features: Features,
    pricing: Pricing,
    'call-to-action': CalltoAction,
    screenshots: Screenshots,
    testimonials: Testimonials,
    subscribe: Subscribe,
    'get-started': GetStarted,
  };

  return (
    <>
      <Layout>
        {sections.map((section) => {
          const Tagname = availableSections[section];
          return <Tagname />;
        })}
      </Layout>
    </>
  );
};
