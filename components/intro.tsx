import React from 'react';
import SectionHeading from './section-header';
import Image from 'next/image';

const Intro = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col sm:flex-row flex-wrap items-center">
        <Image
          src="/Portfolio-photo.jpg"
          alt="Profile Photo"
          width={80}
          height={80}
        />
      </div>
    </section>
  );
};

export default Intro;

function Resume() {}
