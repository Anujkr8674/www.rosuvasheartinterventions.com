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
        <h1 className="text-3xl  md:text-5xl font-light "> </h1>
        <button className="hover:bg-[#195BA2] duration-200 text-[#6d6e71] hover:text-white  text-4xl border-2 border-[#195BA2] rounded-md ">
          <p className='px-4 font-light py-2'>
            Issue 2 - Case 1
          </p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light ">A CASE OF COMPLEX INSTENT RESTENOSIS (ISR): ASSESSMENT AND MANAGEMENT AND ROLE OF IMAGING
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

          {/* Ashish Kumar Jain */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AuthorCard
              title="Neeraj Bhalla "
              experience="MD, DM"
              designation="Principal Director"
              department="Department of Cardiology"
              hospital="BLK-Max Super Speciality Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/author-images/2-1.png"
            />
          </motion.div>

          {/* RR Mantri */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AuthorCard
              title="Dr. Eshan Chopra"
              experience="MD, DNB"
              designation="Consultant"
              department="Department of Cardiology"
              hospital="BLK-Max Super Speciality Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/author-images/2-2.png"
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

          {/* Videos 1A, 1B, 1C */}
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1A.mp4"
            title="Video 1 PRE-PCI OCT RUN VIDEO"
            about="Pre pci OCT analysis showed MLA distal to earlier stent of 1.44 mm2 with area stenosis 78.9 %. As we move proximal neoatherosclerosis can be seen due to stent undersizing. Ostial lcx showed overhanging struts of lad stent with endothelialized stent."
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1B.mp4"
            title="Video 2 POST PCI OCT RUN VIDEO"
            about="Post pci OCT analysis showed distal edge well apposed stent with no stent edge dissection. Proximally LCX ostium is clear of any obstruction. MLA of Left Main stent 14.62 mm 2 fulfilling the stent optimization targets"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1C.mp4"
            title="Video 3"
            about="PRE PCI RAO CAUDAL VIEW SHOWING Left Main normal. LAD showed diffuse ISR followed by a 70% lesion distal to stent. LCX had ostial 80 % stenosis, involving origin of early OM."
          />

          {/* Videos 2A to 2C */}
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1D.mp4"
            title="Video 4"
            about="PRE PCI AP CRANIAL VIEW SHOWING diffuse ISR LAD stent with tight lesion distal to stent"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1E.mp4"
            title="Video 5"
            about="PRE PCI LAO CAUDAL VIEW SHOWING Left Main normal. ISR LAD with diseased LCX ostium"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1F.mp4"
            title="Video 6"
            about="POST PCI AP CRANIAL VIEW SHOWING patent stent in LAD with TIMI 3 flow"
          />

          {/* Videos 3A and 3B */}
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue2case1assets/1G.mp4"
            title="Video 7"
            about="POST PCI LAO CAUDAL VIEW SHOWING patent stent in LAD with TIMI 3 flow with disease-free OM ostium"
          />














        </div>



      </section>
    </div>
  );
}

export default Page;
