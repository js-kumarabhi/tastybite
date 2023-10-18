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


//  Card animation "fading animation on card"
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


    
// login signup
function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    // You can add your login logic here
    if (email === "user@example.com" && password === "password") {
      alert("Login successful");
      window.location.href = "home.html";
    } else {
      alert("Login failed");
    }
    return false; 
  }
  
  function handleSignup() {
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    // You can add your signup logic here
    if (signupPassword === confirmPassword) {
      alert("Application doesn't have signup facility, please login!");
      document.getElementById("login").checked = true;
    } else {
      alert("Passwords do not match?");
    }
  }
  
  //switching loginto signup
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  
  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };
  
  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };
  
  signupLink.onclick = () => {
    signupBtn.click();
    return false;
  };