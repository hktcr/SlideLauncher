// Slide Navigation Component
// Include this script at the end of each slide

const slideNavConfig = {
    solsystemet: [
        { id: "intro", label: "Intro — Arbetsområdet", file: "intro_arbetsomrade.html" },
        { id: "intro-film", label: "Intro — The Martian", file: "intro_martian.html" },
        { id: "pass1", label: "Pass 1 — Ensam på Mars", file: "the_martian_recap_pass1.html" },
        { id: "pass2", label: "Pass 2 — Första kontakten", file: "the_martian_recap_pass2.html" },
        { id: "pass3", label: "Pass 3 — Allt går fel", file: "the_martian_recap_pass3.html" },
        { id: "pass4", label: "Pass 4 — Räddningsplanen", file: "the_martian_recap_pass4.html" }
    ]
};

function initSlideNav(currentSlideId, workArea = 'solsystemet') {
    const slides = slideNavConfig[workArea];
    if (!slides) return;

    // Create nav button
    const navBtn = document.createElement('button');
    navBtn.className = 'slide-nav-btn';
    navBtn.innerHTML = '📋 Alla slides';
    navBtn.onclick = toggleNavPopup;
    document.body.appendChild(navBtn);

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'slide-nav-popup';
    popup.id = 'slideNavPopup';

    let html = '<h3>Solsystemet och universum</h3><ul class="slide-nav-list">';
    slides.forEach((slide, index) => {
        const isCurrent = slide.id === currentSlideId;
        html += `
            <li class="slide-nav-item ${isCurrent ? 'current' : ''}">
                <a href="${slide.file}">
                    <span class="slide-nav-num">${index + 1}</span>
                    <span>${slide.label}</span>
                </a>
            </li>
        `;
    });
    html += '</ul>';
    popup.innerHTML = html;
    document.body.appendChild(popup);

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !navBtn.contains(e.target)) {
            popup.classList.remove('active');
        }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popup.classList.remove('active');
        }
    });
}

function toggleNavPopup() {
    const popup = document.getElementById('slideNavPopup');
    popup.classList.toggle('active');
}
