import { SectionName } from './enum';

const scrollToSection = (section: string) => {
  let element = null;
  if (section && section.length && section.includes('--')) {
    const sectionName = section.split('--')[1];
    if (Object.values(SectionName).includes(sectionName as SectionName)) {
      element = document.getElementById(section);
    }
  } else {
    element = document.getElementById(`section--${SectionName.station}`);
  }
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 50,
      left: 0,
      behavior: 'smooth',
    });
  }
};
export { scrollToSection };
