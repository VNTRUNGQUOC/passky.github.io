// Animate the header
gsap.from("header h1", { opacity: 0, y: -50, duration: 1, delay: 0.5, ease: "power4.out" });

// Animate the 'About Us' section
gsap.from("#about .content", { opacity: 0, y: 50, duration: 1, delay: 1, ease: "power4.out" });

// Animate the 'Our Team' section
gsap.from("#team .content", { opacity: 0, y: 50, duration: 1, delay: 1, ease: "power4.out" });

// Animate the footer
gsap.from("footer", { opacity: 0, y: 50, duration: 1, delay: 1.5, ease: "power4.out" });
