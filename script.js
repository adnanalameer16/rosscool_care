// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your service request! We will contact you within 30 minutes to confirm your appointment.');
    this.reset();
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 54, 93, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Registration form handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = {
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value,
            password: this.password.value,
            role: 'user'
        };
        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            alert(result.message || 'Registration complete!');
            if (res.ok) this.reset();
        } catch (err) {
            alert('Registration failed. Please try again.');
        }
    });
}

// Login form handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const data = {
            email: this.email.value,
            password: this.password.value
        };
        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (res.ok && result.token) {
                localStorage.setItem('jwt', result.token);
                alert('Login successful!');
                this.reset();
            } else {
                alert(result.message || 'Login failed.');
            }
        } catch (err) {
            alert('Login failed. Please try again.');
        }
    });
} 