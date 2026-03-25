import React from "react";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px] bg-black rounded-2xl'>
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <span className="text-xs">GH</span>
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
    </div>
  );
};

const Projects = () => {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="projects">
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </div>
      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
