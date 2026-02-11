// dark mode toggle script

// check if user had dark mode on before
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// create the dark mode button
function createDarkModeToggle() {
    const button = document.createElement('button');
    button.className = 'dark-mode-toggle';
    
    // set the button text
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
    
    // add click event
    button.addEventListener('click', function() {
        toggleDarkMode();
    });
    
    document.body.appendChild(button);
}

// toggle between light and dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    const button = document.querySelector('.dark-mode-toggle');
    
    // update button text and save preference
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        button.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

// run when page loads
document.addEventListener('DOMContentLoaded', function() {
    createDarkModeToggle();
});