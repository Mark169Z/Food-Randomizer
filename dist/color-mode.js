document.addEventListener('DOMContentLoaded', function() {
    const htmlElement = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
  
    // Function to set the theme
    function setTheme(theme) {
      htmlElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  
    // Function to toggle the theme
    function toggleTheme() {
      if (themeToggle.checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
    
    // Check if a theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      themeToggle.checked = savedTheme === 'dark';
    }
  
    // Listen for theme toggle change
    themeToggle.addEventListener('change', toggleTheme);
  });
  