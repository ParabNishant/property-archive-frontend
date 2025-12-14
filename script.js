// Run code once the entire page structure is loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- A. Get DOM Elements ---
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const fontIncreaseBtn = document.getElementById('font-increase-btn');
    const categorySection = document.getElementById('categories-section');
    
    let currentFontSize = 16; 
    const maxFontSize = 20;    
    
    // --- 1. Theme Toggle Functionality ---
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Icon swap code
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }

    // --- 2. Font Size Increase Functionality ---
    if (fontIncreaseBtn) {
        fontIncreaseBtn.addEventListener('click', () => {
            if (currentFontSize < maxFontSize) {
                currentFontSize += 1; 
                body.style.fontSize = `${currentFontSize}px`; 
            }
        });
    }

    // --- 3. Mock Data Display (Category & Count) ---
    const propertyCategories = [
        { name: "Residential Plots", count: 12500, icon: "fa-house" },
        { name: "Commercial Properties", count: 8900, icon: "fa-building" },
        { name: "Land Survey Records", count: 4500, icon: "fa-map" }
    ];

    if (categorySection) {
        let htmlContent = '<div class="container"><h2>Available Records By Category</h2><div class="category-grid">';

        propertyCategories.forEach(cat => {
            htmlContent += `
                <div class="category-card">
                    <i class="fas ${cat.icon} fa-3x"></i>
                    <h3>${cat.name}</h3>
                    <p>Total Records: **${cat.count.toLocaleString()}**</p>
                    <button class="secondary-btn">Explore</button>
                </div>
            `;
        });

        htmlContent += '</div></div>';
        categorySection.innerHTML = htmlContent;
    }

}); // End of DOMContentLoaded

// --- 4. Automatic Image Slideshow Functionality ---
let slideIndex = 0;
showSlides(); 

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    if (slides.length === 0) return; 

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 4000); 
}

