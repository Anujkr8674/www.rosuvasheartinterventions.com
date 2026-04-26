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
        <h1 className="text-3xl  md:text-5xl font-light ">
            <button className="hover:bg-[#195BA2] duration-200 text-[#6d6e71] hover:text-white  text-4xl border-2 border-[#195BA2] rounded-md ">
    <p className='px-4 font-light py-2'>
      Issue 2 - Case 5
      </p>     
</button>
          <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light ">EXCIMER LASER IN VERY LONG SEVERE CALCIFICATION
</h1>
        </h1>
         
        <div className="mt-6">
          <Link
            href="/issue2"
            className='px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium'
           >
            ← Back to Issue 2
          </Link>
        </div>
      </div>

      {/* Authors Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <div className='flex justify-center   items-center'>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 border-b-1 py-2   text-center">Researchers & Contributors</h2>
        </div>
  

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">

  {/* Manikanth Vivek */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <AuthorCard
      title="Dr. Smit Shrivastava"
      experience="MBBS, MD, PGDHHM, DM (Cardiology), FACC, FSCAI, FESC, FICP, FIMSA, FICN, FISE"
designation="Professor and Head"
department="Department of Cardiology"
institution="Advanced Cardiac Institute, Pt. Jawahar Lal Nehru Memorial Medical College"
hospital="Bhim Rao Ambedkar Memorial Hospital"
location="Raipur, Chhattisgarh, India"
      image="https://rosuvasheartinterventions.com/assets/author-images/2-7.png"
    />
  </motion.div>



</div>


      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className='flex justify-center   items-center'>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 border-b-1 py-2   text-center">Case Videos</h2>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

  {/* Videos 1A and 1B */}
  <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/1.mp4"
    title="Video 1"
    about="Left"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/2.mp4"
    title="Video 2"
    about="Right"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/3.mp4"
    title="Video 3"
    about="Buddy"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/4.mp4"
    title="Video 4"
    about="Laser"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/5.mp4"
    title="Video 5"
    about="Flow"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/6.mp4"
    title="Video 6"
    about="Ballon"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/7.mp4"
    title="Video 7"
    about="ProxStent"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/8.mp4"
    title="Video 8"
    about="_LASERDistal"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/9.mp4"
    title="Video 9"
    about="DistalStent"
  />
   <VideoCard
    videoSrc="https://rosuvasheartinterventions.com/assets/issue2case5assets/1.mp4"
    title="Video 10"
    about="Final"
  />
  
</div>





      </section>
    </div>
  );
}

export default Page;
