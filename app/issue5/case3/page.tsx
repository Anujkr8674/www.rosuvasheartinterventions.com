'use client';

import React, { useState } from 'react';
import AuthorCard from '../../minicomponents/AuthorCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Custom VideoCard specifically for this page to auto-adjust height and keep them aligned
function CustomVideoCard({ videoSrc, title, about }) {
  const hasVideoSrc = videoSrc && videoSrc.trim() !== '';
  const isVideo = hasVideoSrc && /\.(mp4|webm|mov|m4v|avi)$/i.test(videoSrc);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
      className="h-full flex flex-col w-full max-w-sm rounded-2xl backdrop-blur-md bg-white/90 border border-white/10 shadow-[0_8px_32px_rgba(0,126,130,0.2)] hover:shadow-[0_10px_40px_rgba(0,126,130,0.3)] overflow-hidden transition duration-300 mx-auto"
    >
      {/* Media */}
      <div className="aspect-video bg-black relative flex-shrink-0">
        {!hasVideoSrc ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-t-2xl">
            <p className="text-gray-500 text-sm text-center px-4">Video coming soon</p>
          </div>
        ) : isVideo ? (
          <video
            src={videoSrc}
            title={title}
            controls
            className="w-full h-full rounded-t-2xl object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 focus:outline-none"
          >
            <Image
              src={videoSrc}
              alt={title}
              fill
              className="object-cover rounded-t-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="issue-title text-cyan-600 text-lg font-semibold">{title}</h2>
        <p className="issue-text text-gray-500 text-sm mt-1">{about}</p>
      </div>

      {/* Image Modal */}
      {hasVideoSrc && !isVideo && isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-6 right-6 z-10 rounded-full bg-black/60 px-3 pb-2 text-white text-3xl font-light pointer-events-auto"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={videoSrc}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function Page() {
  return (
    <div className="min-h-screen custom text-[#195BA2] px-6 py-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="md:max-w-7xl mx-auto text-center mb-12">
        <button className="hover:bg-[#195BA2] duration-200 text-[#6d6e71] hover:text-white text-4xl border-2 border-[#195BA2] rounded-md">
          <p className="px-4 font-light py-2">Issue 5 - Case 3</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          IMAGE-GUIDED LEFT MAIN BIFURCATION PCI USING TAP TECHNIQUE
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

        <div className="grid grid-cols-1 gap-8 justify-items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <AuthorCard
              title="Dr. Ritwik Ghosal"
              experience="MBBS (Hons) MD DNB (Medicine) MRCP (UK) DM (Cardiology)"
              designation="Consultant and Interventional Cardiologist"
              department="Department of Cardiology"
              hospital="Woodlands Multispeciality Hospital"
              location="Kolkata, West Bengal, India"
              image="https://rosuvasheartinterventions.com/assets/issue5authors/ritwik.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 1.mp4" title="Video 1" about="PATIENT PARTICULARS: 75 Yrs old hypertensive non diabetic male with h/o COPD presented with complaints of rest angina for 1 week. Previous h/o PTCA to LCX as primary PCI 1yr back and PTCA to LAD as staged procedure in another hospital. ECG- T wave inversion in inferior and lateral precordial leads. Echo- no RWMA with LVEF- 64%. CAG- LMCA- distal part significant disease which continued as ostioproximal significant disease in LAD & LCX Medina (1,1,1), previous stents are patent with minor late loss, RCA - dominant normal. Patient was given option of CABG which they strongly denied and opted for LM Bifurcation PCI." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 2a.mp4" title="Video 2a" about="Our plan was to perform image guided Left Main Bifurcation PCI with TAP technique to keep the procedure as simple as possible. So femoral access taken and 7 Fr EBU 3.5 GC engaged , wired both vessels could not predilate the lesion with a 2.0 mm sc balloon so created passage with 1.25mm sc balloon." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 2b.mp4" title="Video 2b" about="Our plan was to perform image guided Left Main Bifurcation PCI with TAP technique to keep the procedure as simple as possible. So femoral access taken and 7 Fr EBU 3.5 GC engaged , wired both vessels could not predilate the lesion with a 2.0 mm sc balloon so created passage with 1.25mm sc balloon." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 2c.mp4" title="Video 2c" about="Our plan was to perform image guided Left Main Bifurcation PCI with TAP technique to keep the procedure as simple as possible. So femoral access taken and 7 Fr EBU 3.5 GC engaged , wired both vessels could not predilate the lesion with a 2.0 mm sc balloon so created passage with 1.25mm sc balloon." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 3a.mp4" title="Video 3a" about="After creating the passage with smaller balloon both ostial lesion was further predilated with 2.0x10mm sc and 2.5x12 mm nc balloon at 18-20 atm." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 3b.mp4" title="Video 3b" about="After creating the passage with smaller balloon both ostial lesion was further predilated with 2.0x10mm sc and 2.5x12 mm nc balloon at 18-20 atm." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 3c.mp4" title="Video 3c" about="After creating the passage with smaller balloon both ostial lesion was further predilated with 2.0x10mm sc and 2.5x12 mm nc balloon at 18-20 atm." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 4.mp4" title="Video 4" about="After predilating the lesion OCT run was taken in LAD which reveals underexpansion of the previous stent with neointimal proliferation, fibrocalcific disease in proximal LAD and dissection with white thrombi in distal LMCA and proximal LAD. Vessel size estimated and landing zone in the shaft of LMCA was demarcated. Looking at the amount of calcification and neointimal proliferation 2.75 x 12 mm cutting balloon was used." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 5.mp4" title="Video 5" about="OCT run taken from LCX to LM which suggested well expanded pevious stent with exact size and length of stent requirement and landing zone determined." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 6.mp4" title="Video 6" about="OCT run taken from LCX to LM which suggested well expanded pevious stent with exact size and length of stent requirement and landing zone determined." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 7a.mp4" title="Video 7a" about="3.5x33 mm DES deployed from LAD to mid shaft of LM at 12 atm overlapping with previous LAD stent. Adequately post dilated whole stent with 3.5x12mm NC balloon from 12-20 atm and POT done using 4.0x6mm NC balloon at 12 atm. Then recrossing was done with sion blue wire from the distal strut which was then confirmed with the help of OCT run." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 7b.mp4" title="Video 7b" about="3.5x33 mm DES deployed from LAD to mid shaft of LM at 12 atm overlapping with previous LAD stent. Adequately post dilated whole stent with 3.5x12mm NC balloon from 12-20 atm and POT done using 4.0x6mm NC balloon at 12 atm. Then recrossing was done with sion blue wire from the distal strut which was then confirmed with the help of OCT run." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 7c.mp4" title="Video 7c" about="3.5x33 mm DES deployed from LAD to mid shaft of LM at 12 atm overlapping with previous LAD stent. Adequately post dilated whole stent with 3.5x12mm NC balloon from 12-20 atm and POT done using 4.0x6mm NC balloon at 12 atm. Then recrossing was done with sion blue wire from the distal strut which was then confirmed with the help of OCT run." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 8a.mp4" title="Video 8a" about="Strut dilation done with 1.25mm SC balloon. 3.5x12mm NC balloon kept in LAD and 3.0x13mm DES deployed at 12 atm. Kissing balloon inflation(KBI) done with 3.5x12mm NC in LAD and 3.0x12mm NC in LCX inflating both at 12 atm then gradually deflation of LAD ballon first and then LCX balloon. Final POT done with 4.0x6 mm NC balloon at 12 atm." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 8b.mp4" title="Video 8b" about="Strut dilation done with 1.25mm SC balloon. 3.5x12mm NC balloon kept in LAD and 3.0x13mm DES deployed at 12 atm. Kissing balloon inflation(KBI) done with 3.5x12mm NC in LAD and 3.0x12mm NC in LCX inflating both at 12 atm then gradually deflation of LAD ballon first and then LCX balloon. Final POT done with 4.0x6 mm NC balloon at 12 atm." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 8c.mp4" title="Video 8c" about="Strut dilation done with 1.25mm SC balloon. 3.5x12mm NC balloon kept in LAD and 3.0x13mm DES deployed at 12 atm. Kissing balloon inflation(KBI) done with 3.5x12mm NC in LAD and 3.0x12mm NC in LCX inflating both at 12 atm then gradually deflation of LAD ballon first and then LCX balloon. Final POT done with 4.0x6 mm NC balloon at 12 atm." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 9a.mp4" title="Video 9a" about="Final OCT run taken which shows well apposed and expanded LAD and LCX stents and ruled out any edge dissection which was a doubt after taking the last angio shot." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 9b.mp4" title="Video 9b" about="Final OCT run taken which shows well apposed and expanded LAD and LCX stents and ruled out any edge dissection which was a doubt after taking the last angio shot." />
          <CustomVideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue5videos/case 3/Media 9c.mp4" title="Video 9c" about="Final OCT run taken which shows well apposed and expanded LAD and LCX stents and ruled out any edge dissection which was a doubt after taking the last angio shot." />
        </div>
      </section>
    </div>
  );
}

export default Page;
