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
          <p className="px-4 font-light py-2">Issue 5 - Case 2</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          CRT-D IMPLANTATION IN PERSISTENT LEFT SUPERIOR VENA CAVA: OVERCOMING COMPLEX VENOUS ANATOMY WITH SNARE-ASSISTED LEAD DELIVERY TECHNIQUES
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
              title="Dr. Jamal Yusuf"
              experience="MD DM"
              designation="Director Professor and Head"
              department="Department of Cardiology"
              hospital="Govind Ballabh Pant Institute of Postgraduate Medical Education and Research"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue5authors/jamal.png"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <AuthorCard
              title="Dr. Ankur Gautam"
              experience="MD DM"
              designation="Specialist"
              department="Department of Cardiology"
              hospital="Govind Ballabh Pant Institute of Postgraduate Medical Education and Research"
              location="New Delhi, India"
              image="https://rosuvasheartinterventions.com/assets/issue5authors/ankur.png"
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
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 1.mp4" title="VIDEO 1" about="Left subclavian venogram demonstrating persistent left superior vena cava with no communicating innominate vein." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 2.mp4" title="VIDEO 2" about="Right subclavian venogram showing separate drainage into the right superior vena cava without a communicating vein." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 3.mp4" title="VIDEO 3" about="Attempt to engage the lateral vein through persistent left superior vena cava using a Judkins Right guiding catheter; engagement was unsuccessful due to sharp angulation." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 4.mp4" title="VIDEO 4" about="Successful engagement of the lateral vein using a 6 Fr Extra Back-Up guiding catheter." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 5.mp4" title="VIDEO 5" about="A 0.014-inch hydrophilic guidewire advanced deeply into the lateral vein branch; a sub-selector catheter used to facilitate lead delivery." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 6.mp4" title="VIDEO 6" about="Guidewire advanced into the right atrium through venous collaterals and subsequently snared via femoral venous access." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 7.mp4" title="VIDEO 7" about="Maintenance of snare tension to create a stable veno-venous loop and improve support for lead delivery." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 8.mp4" title="VIDEO 8" about="A coronary angioplasty balloon advanced through femoral access and inflated near the tip of the Judkins Right guiding catheter to stabilize the system." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 9.mp4" title="VIDEO 9" about="Successful delivery of the quadripolar coronary sinus lead into the lateral vein." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 2/Media 10.mp4" title="VIDEO 10" about="Final position of all leads, including right atrial, right ventricular, and coronary sinus leads." />
        </div>
      </section>
    </div>
  );
}

export default Page;
