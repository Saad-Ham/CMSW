import { MenuButton, CodeSlash } from "react-bootstrap-icons";
import figma from "../../assets/figma.svg"
import NavTitle from "../animated/NavTitle";
import Reveal from "../animated/Reveal";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";
import { AiOutlineRobot } from 'react-icons/ai';
import { FaFlask } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import poster1 from "../../assets/poster1.PNG";
import poster2 from "../../assets/poster2.PNG";
import { BiBorderRadius } from "react-icons/bi";

export const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit pt-9 md:mb-48 sm:mb-28 relative z-0" id="services-section">
      <div className="blobs md:-left-56 md:top-64 sm:-left-12 sm:top-32"></div>
      <NavTitle>
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <MenuButton size={18} />
          SERVICES
        </div>
      </NavTitle>
      <div className="mt-8 lg:w-[70%] font-second-font">
        <h1 className="font-second-font lg:text-5xl sm:text-xl">
          <Reveal RevealDelay={0.6} TextDelay={0.89}><span>Our</span></Reveal>
          <Reveal RevealDelay={0.6} TextDelay={0.89}><span className="text-main-color">Specializations</span></Reveal>
        </h1>

        <div className="md:mt-12 sm:mt-8">
          <motion.div ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 mb-6">
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl mb-1 font-normal">Face Recognition</span>
              <span className="text-sm sm:text-xs md:text-lg lg:text-lg text-fifth-color">The system shall match processed images against an existing criminal database to identify suspects. </span>
            </div>
            <div>
              <CodeSlash size={30} className="text-main-color" />
            </div>
          </motion.div>

        
          <motion.div ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 ">
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl mb-1 font-normal">Fingerprint Pattern Recognition</span>
              <span className="text-sm sm:text-xs md:text-lg lg:text-lg text-fifth-color">System compares two Fingerprint patterns and tells if they match or not.</span>
            </div>
            <div>
              <AiOutlineRobot size={30} className="text-main-color" />
            </div>
          </motion.div>


          <motion.div ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 " style={{marginTop: '24px'}}>
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl mb-1 font-normal">Cloud Storage</span>
              <span className="text-sm sm:text-xs md:text-lg lg:text-lg text-fifth-color">System stores all of the data online making it remotely accessible.</span>
            </div>
            <div>
              <GiBrain size={30} className="text-main-color" />
            </div>
          </motion.div>
        </div>
      </div>









      <div ref={ref} className="lg:w-[84%] md:h-[40rem] sm:h-[30rem] flex lg:justify-center md:justify-center sm:justify-start relative items-start md:mb-8 sm:mb-4">
        <div className="about-blobs sm:left-24 md:left-56 lg:left-80"></div>
        <div className="relative w-[78%] h-full grid grid-cols-2 gap-10 lg:left-36">

          {<motion.div
            transition={{ duration: 1 }}
            className={`absolute lg:w-[45%] lg:h-[73%] md:h-[69%] sm:h-[70%] bottom-16 ${isInView ? 'lg:right-44 md:right-[36px] sm:-right-8' : 'right-44'}  md:top-24 sm:top-12 bg-[#0b0b0e]  p-6 rounded-3xl lg:rotate-12 sm:rotate-2  code-snippet`}>
            <img src={poster2} alt="code snippet" width={250} height={200} className="sm:w-[170px] md:w-[350px]"/>
          </motion.div>}
          
          {<motion.div
            transition={{ duration: 1 }}
            className={`absolute lg:w-[45%] lg:h-[73%] md:h-[69%] sm:h-[70%] bottom-6 ${isInView ? 'lg:left-1 md:right-[6px] sm:-right-67' : 'right-47'}  md:top-24 sm:top-2 bg-[#0b0b0e]  p-6 rounded-3xl lg:rotate-2 sm:rotate-6  code-snippet`}>
            <img src={poster1} alt="code snippet" width={250} height={200} className="sm:w-[170px] md:w-[350px]" />
          </motion.div>}
          
          
        </div>
      </div>












    </section>
  )
}
