import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const InteractiveThumbnail = ({ name }) => {
  const isChat = name.toLowerCase().includes('chat');
  
  return (
    <div className='w-full h-full bg-[#151030] rounded-2xl overflow-hidden flex flex-col relative group cursor-pointer'>
      {/* macOS Style Window Header */}
      <div className='bg-[#100d25] h-6 w-full flex items-center px-3 gap-1.5 border-b border-black-200'>
        <div className='w-2.5 h-2.5 rounded-full bg-[#ff5f56]'></div>
        <div className='w-2.5 h-2.5 rounded-full bg-[#ffbd2e]'></div>
        <div className='w-2.5 h-2.5 rounded-full bg-[#27c93f]'></div>
        <span className='ml-2 text-[10px] text-secondary font-mono tracking-widest leading-none'>
          {name.toLowerCase()}-live-preview
        </span>
      </div>
      
      {/* App Body */}
      <div className='flex flex-1 p-2 gap-2 relative overflow-hidden bg-tertiary/50'>
        {/* Abstract Sidebar */}
        <div className='w-[20%] bg-black-100 rounded flex flex-col p-1.5 gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300'>
           <div className='w-full h-2 bg-secondary/30 rounded-sm mb-1'></div>
           <div className='w-[80%] h-1.5 bg-secondary/20 rounded-sm'></div>
           <div className='w-[60%] h-1.5 bg-secondary/20 rounded-sm'></div>
           <div className='w-[90%] h-1.5 bg-secondary/20 rounded-sm'></div>
        </div>
        
        {/* Main Content Area */}
        <div className='flex-1 bg-black-200 rounded p-3 flex flex-col relative overflow-hidden'>
           {/* Center Text with Glow */}
           <div className='absolute inset-0 flex items-center justify-center z-0'>
             <div className={`w-28 h-28 rounded-full blur-[2xl] absolute ${isChat ? 'bg-pink-500/20' : 'bg-blue-500/20'}`} />
             <h3 className={`text-2xl font-black ${isChat ? 'text-pink-400' : 'text-blue-400'} tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500 z-10`}>
               {name}
             </h3>
           </div>
           
           {/* Fake Interactive Elements Overlay (Charts vs Chat) */}
           {isChat ? (
             <div className='absolute bottom-2 left-2 right-2 flex flex-col gap-1.5 z-10 opacity-70 group-hover:opacity-100 transition-opacity delay-100'>
               <div className='self-end bg-purple-600/40 w-12 h-3 rounded-l-md rounded-tr-md'></div>
               <div className='self-start bg-tertiary w-16 h-3 rounded-r-md rounded-tl-md'></div>
               <div className='self-end bg-pink-600/40 w-8 h-3 rounded-l-md rounded-tr-md group-hover:w-16 transition-all duration-500'></div>
               <div className='mt-1 w-full h-4 bg-tertiary rounded-full flex items-center px-1'>
                 <div className='w-2 h-2 rounded-full bg-secondary/50'></div>
               </div>
             </div>
           ) : (
             <div className='absolute bottom-2 left-2 right-2 flex items-end gap-1.5 h-12 justify-between px-2 opacity-80 z-10'>
               <div className='w-1/4 bg-blue-500/40 h-[30%] rounded-t-sm group-hover:h-[60%] transition-all duration-500'></div>
               <div className='w-1/4 bg-blue-500/60 h-[50%] rounded-t-sm group-hover:h-[80%] transition-all duration-500 delay-75'></div>
               <div className='w-1/4 bg-blue-500/80 h-[80%] rounded-t-sm group-hover:h-[100%] transition-all duration-500 delay-150'></div>
               <div className='w-1/4 bg-blue-500/50 h-[40%] rounded-t-sm group-hover:h-[70%] transition-all duration-500 delay-200'></div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] rounded-2xl'>
          
          {/* Custom Interactive Dashboard Thumbnail Overlay */}
          <InteractiveThumbnail name={name} />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover z-20'>
            <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
