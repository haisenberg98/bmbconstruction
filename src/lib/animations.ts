'use client';

//GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Parallax */
interface HTMLElementWithBg extends HTMLElement {
    bg?: HTMLElement;
}
export const parallaxAnimation = (parallaxRef?: React.RefObject<HTMLDivElement | null>) => {
    const getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    if (!parallaxRef?.current) return;
    const containers = parallaxRef?.current.querySelectorAll('.pContainer');

    // gsap.utils.toArray('section.pContainer').forEach((section, i) => {
    containers?.forEach((section, i) => {
        const sectionEl = section as HTMLElementWithBg;

        if (!sectionEl) return;

        sectionEl.bg = sectionEl.querySelector('.pImage') as HTMLElement;
        gsap.fromTo(
            sectionEl.bg,
            {
                y: () => (i ? -window.innerHeight * getRatio(sectionEl) : 0)
            },
            {
                y: () => window.innerHeight * (1 - getRatio(sectionEl)),
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionEl,
                    start: () => (i ? 'top bottom' : 'top top'),
                    end: 'bottom top',
                    scrub: true,
                    invalidateOnRefresh: true,
                    toggleActions: 'play play play play',
                    toggleClass: { targets: sectionEl, className: 'enable' },
                    markers: false
                }
            }
        );
    });
};
