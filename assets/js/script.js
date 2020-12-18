import { Cards } from './Cards.js';
import { Icones } from './Icones.js';
import { Footer } from './Footer.js';

window.onload = () => {
    let icones = new Icones();
    let footer = new Footer();
    let animaCards = new Cards();

    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards)); 
    icones.animaIcones();
    footer.efeitoOnda();
}