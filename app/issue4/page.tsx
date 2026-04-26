'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import CaseStudyCard from '../minicomponents/caseStudyCard';

function AnimatedCase({ imgSrc, title, description, href, caseNo, reverse }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerClasses = `flex flex-col sm:h-72 h-full ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`;

  return (
    <div ref={ref} className={containerClasses}>
      <motion.img
        src={imgSrc}
        alt={`Case ${caseNo}`}
        className="w-full h-full object-cover md:w-1/2 rounded shadow-md"
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <motion.div
        className="flex sm:w-1/2 justify-center"
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-full">
          <CaseStudyCard
            title={title}
            description={description}
            href={href}
            caseNo={caseNo}
          />
        </div>
      </motion.div>
    </div>
  );
}

function Page() {
  const issueTitle = 'Issue 4';

  return (
    <div className="min-h-screen custom text-[#195BA2] px-6 py-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="max-w-7xl mx-auto flex md:flex-row justify-between items-center gap-8 mb-16">
        <button className="hover:bg-[#195BA2] text-[#6d6e71] duration-200 hover:text-white sm:text-4xl text-2xl border-2 border-[#195BA2] rounded-md">
          <p className="px-4 font-light py-2">{issueTitle}</p>
        </button>

        <Link
          href="/"
          className="px-6 py-2 hover:bg-[#195BA2] hover:text-white duration-300 scale-75 sm:scale-100 rounded-full border-2 border-[#195BA2] text-[#195BA2] transition text-sm font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="space-y-10 max-w-7xl mx-auto">
        <AnimatedCase
          imgSrc="https://rosuvasheartinterventions.com/assets/issue4case/issue1.png"
          title="CRUSHING WITH CONFIDENCE: REAL-TIME OCT OPTIMIZATION OF LM BIFURCATION STENTING"
          description=""
          href="/issue4/case1"
          caseNo={1}
          reverse={false}
        />
        <AnimatedCase
          imgSrc="https://rosuvasheartinterventions.com/assets/issue4case/issue2.png"
          title="CLINICAL CASE REPORT: A NOVEL WAY OF MANAGEMENT OF GRADE III CORONARY PERFORATION"
          description=""
          href="/issue4/case2"
          caseNo={2}
          reverse={true}
        />
        <AnimatedCase
          imgSrc="https://rosuvasheartinterventions.com/assets/issue4case/issue3.png"
          title="IVUS-GUIDED IMPELLA SUPPORTED COMPLEX LEFT MAIN BIFURCATION PCI: ADJUNCTIVE USE OF ROTATIONAL ATHERECTOMY AND INTRAVASCULAR LITHOTRIPSY"
          description=""
          href="/issue4/case3"
          caseNo={3}
          reverse={false}
        />
        <AnimatedCase
          imgSrc="https://rosuvasheartinterventions.com/assets/issue4case/issue4.png"
          title="SUCCESSFUL TREATMENT OF ISR WITH DCB AND COMPLETE HEALING OF DISSECTION FLAP ON FOLLOW UP OCT: A CASE DEMONSTRATION"
          description=""
          href="/issue4/case4"
          caseNo={4}
          reverse={true}
        />
        <AnimatedCase
          imgSrc="https://rosuvasheartinterventions.com/assets/issue4case/issue5.png"
          title="A OSTIAL LAD/D1 COMPLEX PCI- EARLY RECURRENCE"
          description=""
          href="/issue4/case5"
          caseNo={5}
          reverse={false}
        />
        <AnimatedCase
          imgSrc="https://rosuvasheartinterventions.com/assets/issue4case/issue6.png"
          title="A CHALLENGING CASE OF CALCIFIC LEFT MAIN INTERVENTION IN AN OCTOGENARIAN- WHEN ENOUGH IS NOT ENOUGH"
          description=""
          href="/issue4/case6"
          caseNo={6}
          reverse={true}
        />
      </div>
    </div>
  );
}

export default Page;
