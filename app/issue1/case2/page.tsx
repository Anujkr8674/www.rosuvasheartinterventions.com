'use client';

import React from 'react';
import AuthorCard from '../../minicomponents/AuthorCard';
import VideoCard from '../../minicomponents/VideoCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Page() {
  return (
    <div className="min-h-screen  custom text-[#195BA2] px-6 py-16">
              <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      
      {/* Hero Section */}
      <div className="md:max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl  md:text-5xl font-light "></h1>
          <button className="hover:bg-[#195BA2] duration-200 hover:text-white  text-4xl border-2 border-[#195BA2] rounded-md ">
    <p className='px-4 font-light text-[#6d6e71] py-2'>
      Issue 1 - Case 2
      </p>     
</button>
          <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light ">IATROGENIC LEFT MAIN DISSECTION: A CASE REPORT

        </h1>
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
         title="Dr. Suman Bhandari"
          qualification={"MBBS, MD, DM, FACC, FESC, FSCAI, FIMSA"}
          experience="Director"
          department={"Department of Cardiology"}
          hospital={"Fortis Escorts Heart Institute"}
          location={"New Delhi, India"}
          image="https://rosuvasheartinterventions.com/assets/author-images/3.png"
        />
      </motion.div>

    
    </div>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10  text-center">Case Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V1_web.mp4"
            title="Video 1"
            about="Left Coronary artery -LAD in Ap cranial view subtotal LAD (mid)lesion. Berman catheter in view."
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V2_web.mp4"
            title="Video 2"
            about="Stent (Endevour Resolute 2.5 ×23) LAD AP cranial view "
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V3_web.mp4"
            title="Video 3"
            about="Post Stent deployment. Slow flow LAD."
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V4_web.mp4"
            title="Video 4"
            about="Dissection Roof of Left main extending to LAD and Cx "
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V5_web.mp4"
            title="Video 5"
            about="Extension of Dissection (more injections post TNG) "
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V6_web.mp4"
            title="Video 6"
            about="3.5×38 Endeavour Resolute from Left main ostium to LAD - covering the dissection"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V7_web.mp4"
            title="Video 7"
            about="Post Stent Left main→ LAD "
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V8_web.mp4"
            title="Video 8"
            about="Cx Wired "
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V9_web.mp4"
            title="Video 9"
            about="Cx Stent(T-Stenting)"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V10_web.mp4"
            title="Video 10"
            about="Residual Ao Wall hematoma."
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue1case2assets/V11_web.mp4"
            title="Video 11"
            about=" Final Result (Good Flow)"
          />
      
           
        </div>
      </section>
    </div>
  );
}

export default Page;
