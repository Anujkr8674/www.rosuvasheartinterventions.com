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
          <p className="px-4 font-light py-2">Issue 3 - Case 5</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          MANAGEMENT OF IATROGENIC LEFT MAIN DISSECTION AND CLOSURE
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
              title="Dr. Smit Shrivastava"
              experience="MBBS, MD, PGDHHM, DM (Cardiology), FACC, FSCAI, FESC, FICP, FIMSA, FICN, FISE"
              designation="Professor and Head"
              department="Department of Cardiology"
              hospital="Advanced Cardiac Institute, Pt. Jawahar Lal Nehru Memorial Medical College, Bhim Rao Ambedkar Memorial Hospital"
              location="Raipur, Chhattisgarh, India"
              image="https://rosuvasheartinterventions.com/assets/author-images/smit.png"
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
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video1.mp4"
                        
            title="Video 1"
            about="CART Outside"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video2.mp4"
            title="Video 2"
            about="LMCA Dissection"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video3.mp4"
            title="Video 3"
            about="LCx wire"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video4.mp4"
            title="Video 4"
            about="LAD wire"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video5.mp4"
            title="Video 5"
            about="LAD Balloon"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video6.mp4"
            title="Video 6"
            about="OM Wire"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video7.mp4"
            title="Video 7"
            about="Lcx Balloon"
          />
          <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video8.mp4"
            title="Video 8"
            about="OM Balloon"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video9.mp4"
            title="Video 9"
            about="Flow"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video10.mp4"
            title="Video 10"
            about="Diagonal Poba"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video11.mp4"
            title="Video 11"
            about="LAD Pre Balloon"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video12.mp4"
            title="Video 12"
            about="LCx Pre Balloon"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video13.mp4"
            title="Video 13"
            about="FR Removal"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video14.mp4"
            title="Video 14"
            about="FR Exchange"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video15.mp4"
            title="Video 15"
            about="LAD Stent"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video16.mp4"
            title="Video 16"
            about="LML Cx Stent"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video7.mp4"
            title="Video 17"
            about="POT"
          />
           <VideoCard
            videoSrc="https://rosuvasheartinterventions.com/assets/issue3case5assets/video18.mp4"
            title="Video 18"
            about="Final "
          />
        </div>
      </section>
    </div>
  );
}

export default Page;

