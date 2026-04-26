'use client';

import React from 'react';
import AuthorCard from '../../minicomponents/AuthorCard';
import VideoCard from '../../minicomponents/VideoCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Page() {
  return (
    <div className="min-h-screen custom text-[#195BA2] px-6 py-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="md:max-w-7xl mx-auto text-center mb-12">
        <button className="hover:bg-[#195BA2] duration-200 text-[#6d6e71] hover:text-white text-4xl border-2 border-[#195BA2] rounded-md">
          <p className="px-4 font-light py-2">Issue 4 - Case 6</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          A CHALLENGING CASE OF CALCIFIC LEFT MAIN INTERVENTION IN AN OCTOGENARIAN- WHEN ENOUGH IS NOT ENOUGH
        </h1>

        <div className="mt-6">
          <Link
            href="/issue4"
            className="px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium"
          >
            ← Back to Issue 4
          </Link>
        </div>
      </div>

      <section className="max-w-5xl mx-auto text-center mb-20">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 border-b-1 py-2 text-center">
            Researchers & Contributors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AuthorCard
              title="Dr. Sumeet Sethi"
              experience="MBBS DNB (Medicine) DM (Cardiology)"
              designation="Director"
              department="Department of Cardiology"
              hospital="Max Superspeciality Hospital"
              location="Saket, New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue4authors/sumeet.png"
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 border-b-1 py-2 text-center">
            Case Videos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video1.mp4" title="Video 1" about="Coronary angiography" />
                     <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video2a.mp4" title="Video 2A" about="Pre-rotablation" />
                     <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video2b.mp4" title="Video 2B" about="Pre-rotablation" />
                     <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video2c.mp4" title="Video 2C" about="Pre-rotablation" />
                     <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video2d.mp4" title="Video 2D" about="Pre-rotablation" />
                      <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video3a.mp4" title="Video 3A" about="Rotablation 1.5 mm burr" />
                       <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video3b.mp4" title="Video 3B" about="Rotablation 1.5 mm burr" />

                        <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video4a.mp4" title="Video 4A" about="Predilatation using a 2.5 X 12 mm NC balloon" />
                         <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video4b.mp4" title="Video 4B" about="Predilatation using a 3.5 X 12 mm NC balloon" />
                         <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video5.mp4" title="Video 5" about="Drug-eluting stent (3.5 X 33 mm)"/>
                         <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video6.mp4" title="Video 6" about="Post-dilatation using a 4.5 mm NC balloon "/>
                          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video7a.mp4" title="Video 7A" about="Post-intervention IVUS "/>
                          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video7b.mp4" title="Video 7B" about="Final Result "/>
                          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video8.mp4" title="Video 8" about="IVUS pre-intervention "/>
                          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video9a.mp4" title="Video 9A" about="Wolverine cutting balloon (3 X 10 mm) "/>
                           <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video9b.mp4" title="Video 9B" about="Wolverine cutting balloon (3 X 10 mm) "/>
                            <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video10.mp4" title="Video 10" about="Shockwave IVL (3.5 X 12 mm) "/>
                            <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video11.mp4" title="Video 11" about="Post-dilatation (4 X 12 mm NC balloon)"/>
                            <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case6assets/video12.mp4" title="Video 12" about="IVUS post-intervention"/>

        </div>
      </section>
    </div>
  );
}

export default Page;
