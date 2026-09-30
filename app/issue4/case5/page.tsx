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
          <p className="px-4 font-light py-2">Issue 4 - Case 5</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          ROTATIONAL ATHERECTOMY WITH CUTTING BALLOON FOR COMPLEX CALCIFIED CORONARY LESION: A CASE REPORT
        </h1>

        <div className="mt-6">
          <Link
            href="/issue4"
            className="px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium"
          >
            ← Back to Issue 4
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
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AuthorCard
              title="Dr. Ritwik Ghosal"
              experience="MBBS (Hons) MD DNB (Medicine) MRCP (UK) DM (Cardiology)"
              designation="Consultant and Interventional Cardiologist"
              department="Department of Cardiology"
              hospital="Woodlands Multispeciality Hospital"
              location="Kolkata, West Bengal, India"
              image="https://rosuvasheartinterventions.com/assets/issue6/img/Ritwik.png"
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
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video1a.mp4" title="Video 1A" about="CAG showed a normal LMCA, 40% plaque in the LAD, proximal LCX cut-off, and severely calcified RCA with subtotal occlusion from the mid-RCA." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video1b.mp4" title="Video 1B" about="CAG showed a normal LMCA, 40% plaque in the LAD, proximal LCX cut-off, and severely calcified RCA with subtotal occlusion from the mid-RCA." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video1c.mp4" title="Video 1C" about="CAG showed a normal LMCA, 40% plaque in the LAD, proximal LCX cut-off, and severely calcified RCA with subtotal occlusion from the mid-RCA." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video2a.mp4" title="Video 2A" about="Exchange of the JR catheter with an AL 0.75 6-Fr guiding catheter and rewiring of the lesion." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video2b.mp4" title="Video 2B" about="Exchange of the JR catheter with an AL 0.75 6-Fr guiding catheter and rewiring of the lesion." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video2c.mp4" title="Video 2C" about="Exchange of the JR catheter with an AL 0.75 6-Fr guiding catheter and rewiring of the lesion." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video3a.mp4" title="Video 3A" about="Postdilatation using a 2.5 × 12 mm NC balloon." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video3b.mp4" title="Video 3B" about="Postdilatation using a 2.5 × 12 mm NC balloon." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video3c.mp4" title="Video 3C" about="Postdilatation using a 2.5 × 12 mm NC balloon." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video4.mp4" title="Video 4" about="IVUS revealed a 360° calcium arc with an MLA of 2.8 mm²." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video5.mp4" title="Video 5" about="IVUS revealed a 360° calcium arc with an MLA of 2.8 mm²." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video6a.mp4" title="Video 6A" about="Post-predilatation using a 2.75 × 10 mm cutting balloon, IVUS showed more than three cuts at the tightest areas." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video6b.mp4" title="Video 6B" about="Post-predilatation using a 2.75 × 10 mm cutting balloon, IVUS showed more than three cuts at the tightest areas." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video7a.mp4" title="Video 7A" about="Deployment of two overlapping DES (3.0 × 32 mm distally and 3.5 × 24 mm proximally)." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video7b.mp4" title="Video 7B" about="Deployment of two overlapping DES (3.0 × 32 mm distally and 3.5 × 24 mm proximally)." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video8.mp4" title="Video 8" about="Final IVUS, followed by post-dilatation, showed a well-apposed and well-expanded stent with an MSA of 6 mm² and no edge dissection." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video9.mp4" title="Video 9" about="Final IVUS, followed by post-dilatation, showed a well-apposed and well-expanded stent with an MSA of 6 mm² and no edge dissection." />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video10a.mp4" title="Video 10A" about="TIMI III flow; TPM removed" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue4case5assets/video10b.mp4" title="Video 10B" about="TIMI III flow; TPM removed" />
        </div>
      </section>
    </div>
  );
}

export default Page;
