// import TypingEffect from 'react-typing-effect';
import HeroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <div className='text-center py-16 bg-white dark:bg-black text-black dark:text-white'>
      <img 
        src={HeroImage} 
        alt="Patel Bhakti Natwarlal" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105' 
      />
    
    </div>
  );
};

export default Hero;
