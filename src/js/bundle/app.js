// Core
import '../vendor/svgxuse'; // tested in Chrome, IE11, Edge, Firefox, Safari
import '../vendor/polyfill-forEach';
import '../vendor/polyfill-array-from';
import './modules/imageLazyLoading'; // tested in Chrome, IE11, Edge, Firefox, Safari
import picturefill from '../vendor/picturefill'; // tested in Chrome, IE11, Edge, Firefox, Safari

// Modules
import MobileNav from './modules/mobile-nav'; // tested in Chrome, IE11, Edge, Firefox, Safari
import { Tab } from './modules/tab'; // tested in Chrome, IE11, Edge, Firefox, Safari
import { Accordion } from './modules/accordion'; // tested in Chrome, IE11, Edge, Firefox, Safari

// Modules init
document.addEventListener("DOMContentLoaded", () => {
    picturefill();

    const mobileNav = new MobileNav('hamburger', 'main-nav', "isActive");

    const tab = new Tab({
        tab: '.js-tab',
        tabItem: '.js-tab__link',
        tabContent: '.js-tab__content',
        activeClass: 'isActive',
    });

    const accordion = new Accordion({
        accordion: 'js-accordion',
        accordionItem: 'js-accordion-header',
        accordionBody: 'js-accordion-body',
        activeClass: 'isActive',
    });
});
