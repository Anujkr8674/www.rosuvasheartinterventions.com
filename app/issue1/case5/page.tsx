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
            <button className="hover:bg-[#195BA2] text-[#6d6e71] duration-200 hover:text-white  text-4xl border-2 border-[#195BA2] rounded-md ">
    <p className='px-4 font-light py-2'>
      Issue 1 - Case 5
      </p>     
</button>
          <h1 className="pt-4  sm:mx-8 sm:text-[30px] text-[20px] font-light ">ROTABLATION WITH MINICRUSH STENTING FOR CALCIFIED DISTAL (LF) MAIN DISEASE </h1>
        
         
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
         title="Dr. Sanjay Kumar"
          qualification={"MD (Medicine), DM (Cardiology)"}
          experience="Senior Director and Head"
          department={"Department of Cardiac Sciences"}
          hospital={"Fortis Escorts Hospital"}
          location={"Faridabad, Haryana, India"}
          image="https://rosuvasheartinterventions.com/assets/author-images/9.png"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AuthorCard
         title="Dr. Amit Madaan"
          qualification={"MD (Medicine), DM (Cardiology)"}
          experience="Senior Consultant"
          department={"Department of Interventional Cardiology"}
          hospital={"Fortis Escorts Hospital"}
          location={"Faridabad, Haryana, India"}
          image="https://rosuvasheartinterventions.com/assets/author-images/8.png"
        />
      </motion.div>
    </div>
      </section>

    {/* Video Section */}
    <section className="max-w-7xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10   text-center">Case Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video1.mp4"
          title="Video 1A"
          about="Diagnostic"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video2.mp4"
          title="Video 1B"
          about="Diagnostic"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video3.mp4"
          title="Video 1C"
          about="Diagnostic"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video7.mp4"
          title="Video 1D"
          about="Diagnostic"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video4.mp4"
          title="Video 2"
          about="Distal LCx stenting"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video12.mp4"
          title="Video 3"
          about="ROTA to LCx"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video9.mp4"
          title="Video 4"
          about="LM → LAD ROTA"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video10.mp4"
          title="Video 5"
          about="LM → LCx stenting"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video9.mp4"
          title="Video 6"
          about="LM → LAD stenting"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video8.mp4"
          title="Video 7"
          about="Kissing stents (LM → LAD and LM → LCx)"
        />
         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video5.mp4"
          title="Video 8A"
          about="Final Shorts"
        />

         <VideoCard
          videoSrc="https://rosuvasheartinterventions.com/assets/issue1case5assets/video6.mp4"
          title="Video 8B"
          about="Final Shorts"
        />
      
        
      </div>
    </section>
    </div>
  );
}

export default Page;
