 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Scroll reveal animation
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.5s ease';
            observer.observe(section);
        });
        
        // Highlight active nav link on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelector(`.nav-links a[href="#${sectionId}"]`).style.color = 'var(--primary)';
                } else {
                    document.querySelector(`.nav-links a[href="#${sectionId}"]`).style.color = 'inherit';
                }
            });
            document.addEventListener('DOMContentLoaded', function() {
            // Form submission handling
            const contactForm = document.getElementById('contactForm');
            const formSpinner = document.getElementById('formSpinner');
            const successMessage = document.getElementById('successMessage');

            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading spinner
                formSpinner.style.display = 'block';
                successMessage.style.display = 'none';

                // Simulate form submission (in a real scenario, you would use fetch/axios)
                setTimeout(function() {
                    formSpinner.style.display = 'none';
                    successMessage.style.display = 'block';
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                    }, 5000);
                }, 2000);
            });

            // Adds hover effect to all social links
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('i');
                    const originalClass = icon.className;
                    
                    // Briefly animate the icon
                    icon.className = '';
                    setTimeout(() => {
                        icon.className = originalClass;
                        icon.style.transform = 'scale(1.1)';
                        
                        setTimeout(() => {
                            icon.style.transform = 'scale(1)';
                        }, 300); 
                    }, 50);
                });
            });

            // Add smooth scroll to all links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
        });