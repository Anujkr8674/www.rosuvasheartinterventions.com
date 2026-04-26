'use client';

 
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

 

 

function Hero({ onScrollClick } ) {

 
  const words = [
   "Video Based Complex Intervention Procedures Case Series",
  ];

  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
 
useEffect(() => {
  const currentWord = words[wordIndex];

  if (charIndex <= currentWord.length) {
    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }
}, [charIndex, wordIndex]);


  return (
    <section className="relative z-10 px-6 md:px-16 sm:py-24 sm:max-w-7xl sm:mx-auto py-10 overflow-hidden text-[#195BA2]">
    
     <div className='flex justify-center items-center flex-col gap-4'> 
      <motion.h3
  initial={{ opacity: 0, filter: 'blur(8px)' }}
  animate={{ opacity: 1, filter: 'blur(0px)' }}
  transition={{ duration: 2, ease: 'easeOut' }}
  className='hero-title uppercase sm:text-[52px]/15 text-[28px] font-bold text-center '
>
  Video Based Complex Intervention Procedures Case Series 
    
</motion.h3>

       
     </div>
     <div>
     <motion.p
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className='text-justify flex justify-center items-center flex-col text-[18px] text-[#6d6e71] sm:mt-12 mt-6 opacity-90'
>
  <button onClick={onScrollClick} className="hover:bg-[#195BA2] duration-200 hover:text-white w-fit text-4xl border-2 border-[#195BA2] rounded-md ">
    <p className='px-4 font-light py-2'>
      3 Issue Series
      </p>     
</button> <br />
Video-based Complex Intervention Procedures Case Series is a compilation of six cases from key operator/institutes of India. Ranging
from procedures such as left main stenting, bifurcation, metal-free drug-eluting balloon (DEB), calcium modification with rotablator/orbital
atherectomy, to intravascular lithotripsy (IVL), and supported PCI; these cases describe case reports with detailed discussions and key references
along with educational videos.
  <br /><br />
  This sets the stage for comprehensive education for the early-career interventional cardiologists, as well as the advanced operators, and help
familiarize them with "cutting edge" concepts and technologies. The monthly series will keep the spirit alive and the game on by applying these
concepts to the real world of interventional cardiology.
</motion.p>  </div>


      
       {/* Doctor Section */}
      <div className='mt-12 border-2 shadow-2xl border-b-6 border-t-6 border-[#195BA2] rounded-2xl sm:px-12 sm:py-8 py-4 flex sm:flex-row flex-col justify-center items-start'>

        {/* Image with motion from left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-[22px] block sm:hidden ml-5 w-fit px-3 py-2 border-2 hover:bg-[#195BA2] text-[#6d6e71] duration-200 hover:text-white border-[#195BA2] rounded-full'>
            Editor of the Series
          </p>
          <img src="https://rosuvasheartinterventions.com/assets/author.png" alt="Dr. Suman Bhandari" className='sm:h-96 sm:w-96' />
        </motion.div>

        {/* Text content with motion from right */}
        <motion.div
          className='sm:w-1/2 sm:mt-[120px] mt-4 -ml-3 px-10'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className='text-[22px] hidden sm:block -ml-2 mb-2 w-fit px-3 py-2 border-2 hover:bg-[#195BA2] text-[#6d6e71] duration-200 hover:text-white border-[#195BA2] rounded-full'>
            Editor of the Series
          </p>
          <h2 className='sm:text-[40px] text-[30px] font-semibold'>Dr. Suman Bhandari</h2>
          <p className='sm:text-[24px] text-[18px] sm:mb-8 mb-2 text-[#6d6e71]'>
            MBBS, MD, DM, FACC, FESC, FSCAI, FIMSA<br />
            Director<br />
            Department of Cardiology,<br />
            Fortis Escorts Heart Institute<br /> New Delhi, India

           
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;

//  <p className='text-[18px] -ml-2 mb-2 w-fit px-3 py-2 border-2 border-[#195BA2] rounded-full'>Editor of the Series</p>
//         <h2 className='text-[32px] font-semibold'>Dr. Suman Bhandari</h2>
//         <p className='text-[16px] sm:mb-8 mb-2 text-[#6d6e71]'>Director, Intra Vascular Imaging <br />
// Department of Cardiology,<br />
// Sir Ganga Ram Hospital, New Delhi</p>
