import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from '.';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 mx-w-7xl mx-auto flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-[#915eff] rounded-full"></div>
          <div className="w-1 sm:h-80 violet-gradient h-40"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Heng</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I learn to develop 3D visuals, user interface
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
