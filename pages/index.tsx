import type { NextPage } from 'next';
import Head from 'next/head';

import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Project from '../components/Project';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='space-y-[100px] lg:space-y-[200px]'>
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
