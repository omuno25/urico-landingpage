import { SectionName } from './enum';

const scrollToSection = (section: string) => {
  let element = null;
  const navbarHeight = 80; // Account for fixed navbar height

  if (section && section.length && section.includes('--')) {
    const sectionName = section.split('--')[1];
    if (Object.values(SectionName).includes(sectionName as SectionName)) {
      element = document.getElementById(section);
    }
  } else {
    element = document.getElementById(`section--${SectionName.station}`);
  }

  if (element) {
    const targetPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
      left: 0,
      behavior: 'smooth',
    });
  }
};
export { scrollToSection };
