import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initGSAPAnimations() {

    const ctx = gsap.context(() => {

        gsap.utils.toArray("[data-gsap='section']").forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 40,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    once: true,
                },
            });
        });

        gsap.utils.toArray("[data-gsap='stagger']").forEach((container) => {
            const items = container.children;

            gsap.from(items, {
                opacity: 0,
                y: 35,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    once: true,
                },
            });
        });

        gsap.utils.toArray("[data-gsap='fade-up']").forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 25,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true,
                },
            });
        });

        gsap.utils.toArray("[data-gsap='scale']").forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                scale: 0.96,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    once: true,
                },
            });
        });

    });

    return () => ctx.revert();
}