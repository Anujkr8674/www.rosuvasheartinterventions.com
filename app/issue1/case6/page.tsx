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

      
      {/* Hero Section */}
      <div className="md:max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl  md:text-5xl font-light "></h1>
        <button className="hover:bg-[#195BA2] duration-200 hover:text-white text-[#6d6e71]  text-4xl border-2 border-[#195BA2] rounded-md ">
    <p className='px-4 font-light py-2'>
      Issue 1 - Case 6
      </p>     
</button>
          <h1 className="pt-4 text-[30px] font-light ">LEFT MAIN BIFURCATION—IVUS GUIDED DK CRUSH TECHNIQUE: A CASE STUDY</h1>
        
        <p className="mt-4 text-xl text-[#6d6e71] text-[19.2px] max-w-4xl mx-auto">
         </p>
        <div className="mt-6">
          <Link
            href="/issue1"
            className='px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium'
          >
            ← Back to Issue 1
          </Link>
        </div>
      </div>

      {/* Authors Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">
           <div className='flex justify-center   items-center'>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 border-b-1 py-2   text-center">Researchers & Contributors</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AuthorCard
          title="Dr. Gajinder Pal Singh Kaler"
          qualification={"DM (Cardiology), MD (Medicine), MBBS, FAPSIC"}
          experience="Senior Consultant"
          department={"Department of Interventional Cardiology"}
          hospital={"Satguru Partap Singh Hospital"}
          location={"Ludhiana, Punjab, India"}
          image="https://rosuvasheartinterventions.com/assets/author-images/10.png"
        />
      </motion.div>

    
    </div>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10   text-center">Case Videos</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video1A.mp4"
    title="Video 1A"
    about="Syntax score 23 "
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video1B.mp4"
    title="Video 1B"
    about="Syntax score 23 "
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video1c.mp4"
    title="Video 1C"
    about="Syntax score 23 "
  />
  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video1d.mp4"
    title="Video 1D"
    about="Syntax score 23 "
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video2a.mp4"
    title="Video 2A"
    about="Workhorse guidewires in LAD/LCX"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video2b.mp4"
    title="Video 2B"
    about="LAD Ostioproximal dilation 2.5 x 12 mm NC balloon"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video2c.mp4"
    title="Video 2C"
    about="LCX Ostioproximal dilation 2.5 x 12 mm NC balloon"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video3a.mp4"
    title="Video 3A"
    about="Workhorse guidewires in LAD/LCX"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video3b.mp4"
    title="Video 3B"
    about="LAD to LMCA Pull back"
  />

   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video3c.mp4"
    title="Video 3C"
    about="LCX to LMCA Pull back"
  />

   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video4a.mp4"
    title="Video 4A"
    about="LCX Stent 3 x 22 mm deployed at 14 atm2mm Protusion into LMCALAD  NC Balloon 3.5 X 15 mm In Situ"
  />

   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video4b.mp4"
    title="Video 4B"
    about="Stent Balloon Pullback Flare of LCX ostium 16 – 18 atm"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video4c.mp4"
    title="Video 4C"
    about="Post Deployment LCX Stent And LCX Wire Removed after angiogram"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video5a.mp4"
    title="Video 5A"
    about="LCX stent crush by 3.5 x 15 mm NC  Balloon in LAD "
  />
  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video5b.mp4"
    title="Video 5B"
    about="Inability to cross LCX through proximal struts overcome Crush by LMCA POT Balloon 4 x 8 mm NC "
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video5c.mp4"
    title="Video 5C"
    about="LCX Rewired through proximal stent struts "
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video6a.mp4"
    title="Video 6A"
    about="First FKBI (Sequential & Simulataneous dilation) LAD 3.5X 15 mm NC balloon LCX 3.0 x 12 mm NC balloon"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video6b.mp4"
    title="Video 6B"
    about="Post first FKBI LCX Guidewire Removed after angiogram"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video6c.mp4"
    title="Video 6C"
    about="LM to LAD Stent Positioning 8mm into LMCA and distal edge at  LAD Distal reference point"
  />

   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video7a.mp4"
    title="Video 7A"
    about="LMCA to LAD Stent 3.5 X 22 mm Deployed at 14 atm"
  />

   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video7b.mp4"
    title="Video 7B"
    about="Post LMCA to LAD Stent Deployment"
  />

   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video7c.mp4"
    title="Video 7C"
    about="LMCA POT 4 x 8 mm NC balloon Before LCX Rewiring"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video8a.mp4"
    title="Video 8A"
    about="LCX Rewired through Proximal Struts "
  />

  <VideoCard
    videoSrc="/isue1case6assets/video8b.mp4"
    title="Video 8B"
    about="2nd FKBI (Sequential & Simulataneous dilation)LAD 3.5 X 12 mm NC balloon LCX 3.0 X 10 mm NC balloon"
  />

  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue1case6assets/video8c.mp4"
    title="Video 8C"
    about="LMCA POT balloon 4.5 x 8 mm NC balloon @ 14 atm "
  />
  
</div>

      </section>
    </div>
  );
}

export default Page;
