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
          <p className="px-4 font-light py-2">Issue 6 - Case 2</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          TOUGH LESION, TOUGHER DECISIONS: NIGHTMARES AND TROUBLESHOOTING IN THE CATH LAB
        </h1>

        <div className="mt-6">
          <Link
            href="/issue6"
            className="px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium"
          >
            ← Back to Issue 6
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
              title="Dr. Parakh Gulati"
              experience="MBBS MD (Medicine)"
              designation="DM Resident"
              department="Department of Cardiology"
              hospital="Atal Bihari Vajpayee Institute of Medical Sciences and Dr. Ram Manohar Lohia Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue6/img/Parakh.png"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <AuthorCard
              title="Dr. Puneet Aggarwal"
              experience="MD DM"
              designation="Associate Professor"
              department="Department of Cardiology"
              hospital="Atal Bihari Vajpayee Institute of Medical Sciences and Dr. Ram Manohar Lohia Hospital"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue6/img/Puneet.png"
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
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%201.mp4" title="Video 1" about="Coronary angiogram: 90% LCX stenosis, 70–80% MOM involvement" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%202.mp4" title="Video 2" about="Diffusely calcified and stenosed mid LAD " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%203.mp4" title="Video 3" about="Proximal RCA lesion" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%204.mp4" title="Video 4" about="Stented LCX-MOM segment " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%205.mp4" title="Video 5" about="Post-dilatation" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%206.mp4" title="Video 6" about="Exchange of the hydrophilic wire for a rota wire" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%207.mp4" title="Video 7" about="Burr entrapment " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%208.mp4" title="Video 8" about="Burr retrieval" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media%209.mp4" title="Video 9" about="Advancement of the 1.5-mm burr at a higher rotational speed" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media10.mp4" title="Video 10" about="Post-rotablation IVUS assessment " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media11.mp4" title="Video 11" about="Grade 3 perforation in the distal LAD" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media12.mp4" title="Video 12" about="Balloon tamponade and deployment of a covered GraftMaster stent" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media13.mp4" title="Video 13" about="Stent deployment from the proximal to distal LAD" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media14.mp4" title="Video 14" about="Post-stenting IVUS showing mild stent under-expansion" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-2/Media15.mp4" title="Video 15" about="Final angiographic result showing TIMI III flow without worsening blush at the perforation site" />
        </div>
      </section>
    </div>
  );
}

export default Page;
