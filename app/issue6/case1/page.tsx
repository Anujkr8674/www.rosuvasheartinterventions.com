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
          <p className="px-4 font-light py-2">Issue 6 - Case 1</p>
        </button>
        <h1 className="pt-4 sm:mx-8 sm:text-[30px] text-[20px] font-light">
          MANAGEMENT OF A COMPLEX OSTIAL CORONARY LESION USING ADVANCED PCI TECHNIQUES: A CASE REPORT
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

        <div className="grid grid-cols-1 gap-8 justify-items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
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
          {/* <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media1.mp4" title="Video 1A" about="65 years old lady presented with complaints of rest angina for last 1 week, Ecg showed ST-T changes in lateral leads" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media2.mp4" title="Video 1B" about="Echo suggested normal LV function, CAG- suggested ostial LMCA disease with significant ostial LCX disease, proximal LAD significant disease but ostium relatively disease free, RCA – minor disease" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media3.mp4" title="Video 1C" about="So our plan was to perform LM bifurcation PTCA with DEB for side branch " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media4.mp4" title="Video 2A" about="Started with right femoral route with JL 3.5 GC. Wired both vessels. Predilated LCX ostium with 2.0 then 2.5 mm NC but IVUS showed very larger vessel size. So placed a buddy wire and predilated with 3mm cutting balloon to get good dissection plane. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media5.mp4" title="Video 2B" about="Started with right femoral route with JL 3.5 GC. Wired both vessels. Predilated LCX ostium with 2.0 then 2.5 mm NC but IVUS showed very larger vessel size. So placed a buddy wire and predilated with 3mm cutting balloon to get good dissection plane. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media6.mp4" title="Video 2C" about="Started with right femoral route with JL 3.5 GC. Wired both vessels. Predilated LCX ostium with 2.0 then 2.5 mm NC but IVUS showed very larger vessel size. So placed a buddy wire and predilated with 3mm cutting balloon to get good dissection plane. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media7.mp4" title="Video 3A" about="After preparation of bed deployed 3.0 25 mm DEB. Then check result showed significant narrowing with dye holding " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media8.mp4" title="Video 3B" about="After preparation of bed deployed 3.0 25 mm DEB. Then check result showed significant narrowing with dye holding " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media9.mp4" title="Video 4A" about="performed IVUS which showed large intramural hematoma " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/video-4b.mp4" title="Video 4B" about="performed IVUS which showed large intramural hematoma " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media10.mp4" title="Video 5A" about="Predilated LAD with 3.0 12mm NC balloon and LM ostium with 3.5mm NC balloon and Deployed 3.0 19 mm DES in distal LAD." />


          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media11.mp4" title="Video 5B" about="Predilated LAD with 3.0 12mm NC balloon and LM ostium with 3.5mm NC balloon and Deployed 3.0 19 mm DES in distal LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media12.mp4" title="Video 5C" about="Predilated LAD with 3.0 12mm NC balloon and LM ostium with 3.5mm NC balloon and Deployed 3.0 19 mm DES in distal LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media13.mp4" title="Video 6A" about="Deployed 3.0 24mm DES in LCX to cover intamural hematoma and crushed it with 3.5 12mm NC balloon in LAD. Then placed 4.0 23 mm overlapping stent from ostial LM to LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media14.mp4" title="Video 6B" about="Deployed 3.0 24mm DES in LCX to cover intamural hematoma and crushed it with 3.5 12mm NC balloon in LAD. Then placed 4.0 23 mm overlapping stent from ostial LM to LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media15.mp4" title="Video 6C" about="Deployed 3.0 24mm DES in LCX to cover intamural hematoma and crushed it with 3.5 12mm NC balloon in LAD. Then placed 4.0 23 mm overlapping stent from ostial LM to LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media16.mp4" title="Video 7A" about="Performed POT tried to recross but after several failed attempt successfully done with crusade dual lumen microcather and whisper wire. Strut dilated with 1.25 then 2 mm balloon. Kissing balloon inflation(KBI) done with 3.0 12 NC in LCX and 3.5 12 NC in LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media17.mp4" title="Video 7B" about="Performed POT tried to recross but after several failed attempt successfully done with crusade dual lumen microcather and whisper wire. Strut dilated with 1.25 then 2 mm balloon. Kissing balloon inflation(KBI) done with 3.0 12 NC in LCX and 3.5 12 NC in LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media18.mp4" title="Video 7C" about="Performed POT tried to recross but after several failed attempt successfully done with crusade dual lumen microcather and whisper wire. Strut dilated with 1.25 then 2 mm balloon. Kissing balloon inflation(KBI) done with 3.0 12 NC in LCX and 3.5 12 NC in LAD. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media19.mp4" title="Video 8A" about="POT done with 4.5 mm NC balloon. IVUS run taken from LAD showed under expansion of distal LAD stent so again post dilated with 3.5mm NC balloon and final POT with flaring done with 4.5 8 mm NC balloon. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media20.mp4" title="Video 8B" about="POT done with 4.5 mm NC balloon. IVUS run taken from LAD showed under expansion of distal LAD stent so again post dilated with 3.5mm NC balloon and final POT with flaring done with 4.5 8 mm NC balloon. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media21.mp4" title="Video 8C" about="POT done with 4.5 mm NC balloon. IVUS run taken from LAD showed under expansion of distal LAD stent so again post dilated with 3.5mm NC balloon and final POT with flaring done with 4.5 8 mm NC balloon. " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media22.mp4" title="Video 9A" about="Final check shot taken showed TIMI III flow " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media23.mp4" title="Video 9B" about="Final check shot taken showed TIMI III flow " /> */}

          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media1.mp4" title="Video 1A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media2.mp4" title="Video 1B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media3.mp4" title="Video 1C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media4.mp4" title="Video 2A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media5.mp4" title="Video 2B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media6.mp4" title="Video 2C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media7.mp4" title="Video 3A" about=" " />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media8.mp4" title="Video 3B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media9.mp4" title="Video 4" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media10.mp4" title="Video 5A" about="" />


          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media11.mp4" title="Video 5B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media12.mp4" title="Video 5C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media13.mp4" title="Video 6A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media14.mp4" title="Video 6B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media15.mp4" title="Video 6C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media16.mp4" title="Video 7A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media17.mp4" title="Video 7B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media18.mp4" title="Video 7C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media19.mp4" title="Video 8A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media20.mp4" title="Video 8B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media21.mp4" title="Video 8C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media22.mp4" title="Video 9A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media23.mp4" title="Video 9B" about="" />
          {/* <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media24.mp4" title="Video 9C" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media25.mp4" title="Video 10A" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media26.mp4" title="Video 10B" about="" />
          <VideoCard videoSrc="https://rosuvasheartinterventions.com/assets/issue6/Videos/Case-1/Media27.mp4" title="Video 10C" about="" /> */}
        </div>
      </section>
    </div>
  );
}

export default Page;
