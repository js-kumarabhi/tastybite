var searchAbs = document.getElementById("searchAbs");
var searchClosebtn = document.getElementById("search-close-btn");

var isSearchVisible = false;

searchClosebtn.addEventListener("click", function () {
    if (isSearchVisible) {
        // If the search bar is visible, hide it and change the button text to "Search"
        searchAbs.style.display = "none";
        searchClosebtn.textContent = "search";
    } else {
        // If the search bar is hidden, show it and change the button text to "Close"
        searchAbs.style.display = "flex";
        searchClosebtn.textContent = "close";
    }

    // Toggle the visibility flag
    isSearchVisible = !isSearchVisible;
});

//Mobile Menu

var mobileBtn = document.getElementById("mobile-btn");
var navMenu = document.getElementById("nav-menu");
mobileBtn.addEventListener("click", function () {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        mobileBtn.textContent = "menu";
        mobileBtn.style.color = "#fff";
    } else {  
        navMenu.style.display = "block";
        mobileBtn.textContent = "close";
    }
});

// hero images effect
// const imageContainer = document.getElementById('image-container');
// const rotateImage = document.getElementById('rotate-image');

// imageContainer.addEventListener('mousemove', (e) => {
//     const { clientX, clientY } = e;
//     const { left, top, width, height } = imageContainer.getBoundingClientRect();
//     const centerX = left + width / 2;
//     const centerY = top + height / 2;

//     const deltaX = clientX - centerX;
//     const deltaY = centerY - clientY;

//     const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

//     rotateImage.style.transform = `rotate(${angle}deg)`;
// });

// imageContainer.addEventListener('mouseleave', () => {
//     // Reset the image rotation when the cursor leaves the container
//     rotateImage.style.transform = 'rotate(0deg)';
// });

//  toggle the accordion content

var accordions = document.querySelectorAll('.accordion');
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        // Close all other accordions
        for (var j = 0; j < accordions.length; j++) {
            if (accordions[j] !== this) {
                accordions[j].classList.remove('active');
                var content = accordions[j].querySelector('.accordion-content');
                content.style.display = 'none';
                var button = accordions[j].querySelector('.toggle-button');
                button.textContent = 'add';
            }
        }

        this.classList.toggle('active');
        var content = this.querySelector('.accordion-content');
        if (content.style.display === 'block') {
            content.style.display = 'none';
            var button = this.querySelector('.toggle-button');
            button.textContent = 'add';
        } else {
            content.style.display = 'block';
            var button = this.querySelector('.toggle-button');
            button.textContent = 'remove';
        }
    });
}



//  Card animation
ScrollTrigger.batch(".recipes-card, .video-thumbnail", {
    interval: 0.1, 
    batchMax: 3,
    onEnter: (batch) =>
    gsap.to(
    batch,
    {
    autoAlpha: 1,
    stagger: 0.15, 
    overwrite: true
    }),
    onLeave: (batch) =>
    gsap.set( 
        batch,
    { 
        autoAlpha: 0, overwrite: true }),
    onEnterBack: (batch) => 
    gsap.to(
    batch,
    {
    autoAlpha: 1,
    stagger: 0.15,
    overwrite: true
    }),
    onLeaveBack: (batch) =>
    gsap.set(batch, 
        {autoAlpha: 0, overwrite: true }),
    });