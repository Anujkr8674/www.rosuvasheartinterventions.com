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
          <p className="px-4 font-light py-2">Issue 5 - Case 1</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          MANAGEMENT OF BALLOON UNCROSSABLE CALCIFIED LAD CTO USING ROTATIONAL ATHERECTOMY—A CASE REPORT
        </h1>

        <div className="mt-6">
          <Link
            href="/issue5"
            className="px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium"
          >
            ← Back to Issue 5
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
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <AuthorCard
              title="Dr. Abhinav Aggarwal"
              experience="MBBS MD DM (Cardiology)"
              designation="Assistant Professor"
              department="Department of Cardiology"
              hospital="Vardhman Mahavir Medical College and Safdarjung Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue5authors/abhinav.png"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <AuthorCard
              title="Dr. Puneet Gupta"
              experience="MBBS MD DM (Cardiology)"
              designation="Associate Professor"
              department="Department of Cardiology"
              hospital="Vardhman Mahavir Medical College and Safdarjung Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue5authors/puneet.png"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <AuthorCard
              title="Dr. Hermohander Singh Isser"
              experience="MBBS MD DM (Cardiology)"
              designation="Head and Professor"
              department="Department of Cardiology"
              hospital="Vardhman Mahavir Medical College and Safdarjung Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue5authors/hermohander.png"
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
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 1/Media 1.mp4" title=" Video 1" about="The LAD CTO was successfully crossed using a Gaia Next 1 guidewire, supported by a Corsair microcatheter. Wire position was confirmed with RCA injection." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 1/Media 2.mp4" title="Video 2" about="Even a 1 × 6 mm semi-compliant balloon failed to cross the lesion, confirming a balloon-uncrossable calcified CTO" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 1/Media 3.mp4" title="Video 3" about="Rotational atherectomy was performed using a 1.25 mm burr at 180,000 rpm" />

        </div>
      </section>
    </div>
  );
}

export default Page;
