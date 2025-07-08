// Mobile Menu Toggle
document.getElementById('menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    this.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
        document.getElementById('menu').classList.remove('fa-times');
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Modal Functionality
function openContactModal(service) {
    const modal = document.getElementById('contactModal');
    const serviceInput = document.getElementById('service-type');
    
    // Set the service type in the hidden input
    serviceInput.value = service;
    
    // Display the modal
    modal.style.display = 'block';
    
    // Change the modal title to include the service name
    document.querySelector('.modal-content h2').textContent = `Get a Quote for ${service}`;
}

// Close modal when clicking the X button
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
document.getElementById('quote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const service = document.getElementById('service-type').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const details = document.getElementById('project-details').value;
    const budget = document.getElementById('budget').value;
    const timeline = document.getElementById('timeline').value;
    
    // Here you would typically send this data to your server
    // For now, we'll just log it and show an alert
    console.log({
        service,
        name,
        email,
        phone,
        details,
        budget,
        timeline
    });
    
    // Show success message
    alert(`Thank you, ${name}! Your ${service} quote request has been submitted. I'll contact you soon at ${email}.`);
    
    // Close the modal
    document.getElementById('contactModal').style.display = 'none';
    
    // Reset the form
    this.reset();
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('div');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate elements on scroll
const animateElements = document.querySelectorAll('.animate');

function checkScroll() {
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('show');
        }
    });
}

// Initial check
checkScroll();

// Check on scroll
window.addEventListener('scroll', checkScroll);

// Add animate class to sections
document.querySelectorAll('section').forEach((section, index) => {
    // Don't animate the hero section
    if (!section.classList.contains('hero')) {
        section.classList.add('animate');
        
        // Add delay based on index for staggered animation
        section.style.transitionDelay = `${index * 0.1}s`;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Service card hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form validation
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#2506ad';
        this.style.boxShadow = '0 0 0 3px rgba(37, 6, 173, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#e0e0e0';
        this.style.boxShadow = 'none';
    });
});