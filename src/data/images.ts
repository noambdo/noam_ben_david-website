// Local brand assets
import logoImg        from '../assets/logo.png';
import homeHeroImg    from '../assets/HomePageHero.png';
import aboutMeImg     from '../assets/aboutme.png';
import meAndSerumImg  from '../assets/meAndSerum.png';
import treatmentRoomImg from '../assets/treatmentRoom.png';
import meAndBrushImg from '../assets/meAndBrush.png';
import contactBgImg  from '../assets/dermalosophySerumTreatment.png';
import heroAboutImg  from '../assets/HeroAbout.png';

// Central image references — swap URLs here to update the whole site.
export const images = {
  // Brand
  logo: logoImg,

  // Heroes
  heroHome:         homeHeroImg,
  heroAbout:        heroAboutImg,
  heroTreatment:    'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=2000&q=80',
  heroTestimonials: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=80',

  // About page — section images (in order of appearance)
  noamPortrait:  aboutMeImg,       // Section 1 – "המסע שלי"
  noamProduct:   treatmentRoomImg, // Section 2 – "מקצועיות, ידע והתפתחות"
  noamPortrait2: meAndSerumImg,    // Section 4 – "יחס אישי וליווי מקצועי"

  // Misc
  contactBg:    contactBgImg,
  questionnaire: meAndBrushImg
};
