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
        <h1 className="text-3xl md:text-5xl font-light"></h1>
        <button className="hover:bg-[#195BA2] duration-200 text-[#6d6e71] hover:text-white text-4xl border-2 border-[#195BA2] rounded-md">
          <p className="px-4 font-light py-2">Issue 3 - Case 4</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          BETWEEN ROCK AND A HARD PLACE: A CASE OF COMPLEX LM PCI WITH CALCIFIC VESSEL
        </h1>

        <div className="mt-6">
          <Link
            href="/issue3"
            className="px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium"
          >
            ← Back to Issue 3
          </Link>
        </div>
      </div>

      {/* Authors Section */}
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
             title="Dr. Arvind Singh"
experience="MBBS, MD (Medicine), DM (Cardiology)"
designation="Interventional Cardiologist"
department="Department of Cardiology"
hospital="Apollo CVHF Heart Institute"
location="Ahmedabad, Gujarat, India"
image="https://rosuvasheartinterventions.com/assets/author-images/arvind.png"
            />
          </motion.div>

            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AuthorCard
            title="Dr. Sameer Dani"
experience="MBBS, MD (Medicine), DM (Cardiology)"
designation="Chief Interventional Cardiologist"
department="Department of Cardiology"
hospital="Apollo CVHF Heart Institute"
location="Ahmedabad, Gujarat, India"
image="https://rosuvasheartinterventions.com/assets/author-images/sameer.png"
            />
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 border-b-1 py-2 text-center">
            Case Videos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 1  Right system angiogram.mp4"
            title="Video 1"
            about="Right system angiogram"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 2  Left system angiogram.mp4"
            title="Video 2"
            about="Left system angiogram"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 3 Pre_IVUS.mp4"
            title="Video 3"
            about="Pre_IVUS"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 4A   Complex cases LM PCI._.mp4"
            title="Video 4A"
            about="Complex cases LM PCI"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 4B Complex cases LM PCI.mp4"
            title="Video 4B"
            about="Complex cases LM PCI"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 4C Complex cases LM PCI.mp4"
            title="Video 4C"
            about="Complex cases LM PCI"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 4D Complex cases LM PCI.mp4"
            title="Video 4D"
            about="Complex cases LM PCI"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case4assets/Video 5  The post procedure IVUS showed good apposition of stent with LM-LCx area measuring 12.4 mm2 & LCx ostium measuring 9..mp4"
            title="Video 5"
            about="The post procedure IVUS showed good apposition of stent with LM-LCx area measuring 12.4 mm2 & LCx ostium measuring "
          />
          
        </div>
      </section>
    </div>
  );
}

export default Page;

