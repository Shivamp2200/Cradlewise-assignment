

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MainUI() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };


  
  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          variants={variants}
        >
          <h2 className="text-[#929292]  font font-normal uppercase tracking-widest text-sm sm:text-base md:text-lg leading-[30px]">
            THE ALL-IN-ONE SMART CRIB
          </h2>
          <h1 className="mt-4 text-gray-700 text-[28px] md:text-[35px] font-custom leading-[36px] md:leading-[45px] text-center">
            From detecting early wake-up signs to soothing your baby back to sleep with a gentle bouncing motion,
            <br />
            <br />
            <span className=" font-medium text-[#FF595A]">Cradlewise does it all</span>— except changing diapers.
          </h1>
        </motion.section>

      
        <motion.section
          className="mt-[100px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={variants}
        >
          <Image
            src='/Camera monitor_GIF_1 1.png'
            alt="Smart Crib"
            width={449.31}
            height={300}
            className="mx-auto w-full sm:w-auto"
          />
        </motion.section>

       
        <motion.section
          className="mt-[150px] opacity-0 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={variants}
        >
          <h2 className="text-[35px] font-medium leading-[45px] 
              text-[#444540] font-custom">
            Smart monitor detects subtle wake-up cues
          </h2>
        </motion.section>

        
        <motion.section
          className="mt-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={variants}
        >
          <Image
            src="/Crib detection baby compressed 1.png"
            alt="Smart Monitor"
            width={498.48}
            height={280}
            className="mx-auto w-full sm:w-auto"
          />
        </motion.section>

      
        <motion.section
          className="mt-[150px] opacity-0 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={variants}
        >
          <h2 className="text-[35px] font-medium leading-[45px] 
              text-[#444540] font-custom">
            The bounce calms intuitively with soothing sounds...
          </h2>
        </motion.section>

        
        <motion.section
          className="mt-[150px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={variants}
        >
          <Image
            src="/Crib bounce_Desktop.png"
            alt="Calming Crib"
            width={457.14}
            height={457.14}
            className="mx-auto w-full sm:w-auto"
          />
        </motion.section>

        
        <motion.section
          className="mt-[150px] opacity-0 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.9 }}
          variants={variants}
        >
          <h2 className="text-[35px] font-medium leading-[45px] 
              text-[#FF595A] font-custom">
            just like a parent...
          </h2>
          <Image
            src="/output-onlinegiftools (1) 1.png"
            alt="Parent holding baby"
            width={217.92}
            height={350}
            className="mx-auto w-full sm:w-auto"
          />
        </motion.section>
      </main>
    </div>
  );
}
