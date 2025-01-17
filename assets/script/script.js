// navbar
const navEl=document.querySelector('#navbar')
window.addEventListener('scroll' ,( ) =>{
if(window.scrollY >= 56){
  navEl.classList.add('navbar-scrolled');
}
else if(window.scrollY <=56){
  navEl.classList.remove('navbar-scrolled');
}
});

window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
    setActiveClass(event.target.parentElement);
  }
  
  function setActiveClass(element) {
    const navItems = document.querySelectorAll('.navUl li');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  }
  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach(section => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight / 2 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight / 2
        ) {
            const id = section.getAttribute('id');
            const navItem = document.querySelector(`a[href="#${id}"]`).parentElement;
            setActiveClass(navItem);
        }
    });
  });

// toggle button
let menuIcon = document.querySelector(".menu-icon");
let lines = Array.from(menuIcon.children);
let navbar = document.getElementById("navbar");

function toggleMenu() {
  lines.forEach(line => {
    menuIcon.classList.toggle("active");
    line.classList.toggle("active");
    line.classList.toggle("no-animation");
  });

  // Toggle the position of the navbar
  navbar.style.left = (navbar.style.left === "0px") ? "-110vw" : "0";
}
function scrollToSection(sectionId) {
  if (window.innerWidth<528) {
    navbar.style.left = (navbar.style.left === "0") ? "-110vw" : "0";
    toggleMenu();
    navbar.classList.remove('navbar-container');
    console.log("toggled 1st time");
    lines.forEach(line => {
      menuIcon.classList.remove("active");
      line.classList.remove("active");
      line.classList.remove("no-animation");
    });
  }
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
 

}
function handleClickOnMenuIcon() {
  // Simulate a click event on the .menu-icon
  toggleMenu();
}

menuIcon.addEventListener("click", toggleMenu);

     // JavaScript to handle the slideshow
     
     document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.home-slide');
      let currentSlide = 0;

      const changeSlide = () => {
          slides.forEach(slide => slide.classList.remove('active'));
          slides[currentSlide].classList.add('active');
          currentSlide = (currentSlide + 1) % slides.length; 
      };

      setInterval(changeSlide, 5000);
  });


// OUR WORKS POPUP

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".popup .close");
    const prevBtn = document.querySelector(".popup-nav .prev");
    const nextBtn = document.querySelector(".popup-nav .next");

    let imageIndex = 0;
    let imagePaths = [];

    // Helper function to load images
    function loadImages(folderPath, callback) {
        // Simulate loading images by defining them manually (server logic needed for dynamic loading)
        if (folderPath === "assets/images/ourWorks/ime") {
            imagePaths = [
                folderPath + "/ime1.webp",
                folderPath + "/ime2.webp",
                folderPath + "/ime3.webp",
                folderPath + "/ime4.webp",
            ];
        } else if (folderPath === "assets/images/ourWorks/bs") {
            imagePaths = [
                folderPath + "/bs1.webp",
                folderPath + "/bs2.webp",
                folderPath + "/bs3.webp",
                folderPath + "/bs4.webp",
                folderPath + "/bs5.webp",
            ];
        } else if (folderPath === "assets/images/ourWorks/bdf") {
          imagePaths = [
              folderPath + "/bdf1.webp",
              folderPath + "/bdf2.webp",
              folderPath + "/bdf3.webp",
              folderPath + "/bdf4.webp",
              folderPath + "/bdf5.webp",
          ];
      }
        callback();
    }

    function openPopup(folderPath) {
      loadImages(folderPath, function () {
          imageIndex = 0;
          popupImg.src = imagePaths[imageIndex];
          popup.style.zIndex = 200;
          popup.style.opacity = 1;
      });
  }


    // Event listeners for home images
    document.getElementById("home-image1").addEventListener("click", function () {
        openPopup("assets/images/ourWorks/ime");
    });

    document.getElementById("home-image3").addEventListener("click", function () {
        openPopup("assets/images/ourWorks/bs");
    });

    document.getElementById("home-image4").addEventListener("click", function () {
      openPopup("assets/images/ourWorks/bdf");
  });

  function closePopup() {
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.zIndex = -1;
    }, 500); // Matches the CSS transition duration
}
closeBtn.addEventListener("click", closePopup);
    // Navigate images
    prevBtn.addEventListener("click", function () {
        imageIndex = (imageIndex - 1 + imagePaths.length) % imagePaths.length;
        popupImg.src = imagePaths[imageIndex];
    });

    nextBtn.addEventListener("click", function () {
        imageIndex = (imageIndex + 1) % imagePaths.length;
        popupImg.src = imagePaths[imageIndex];
    });
});

 // OUR CLIENTS CAROUSEL //


 document.addEventListener('DOMContentLoaded', function () {

  const filterNames = document.querySelectorAll('.filter-name');

  filterNames.forEach(filter => {
      filter.addEventListener('click', function () {
          // Remove 'filter-active' class from all filters
          filterNames.forEach(f => f.classList.remove('filter-active'));

          // Add 'filter-active' class to the clicked filter
          this.classList.add('filter-active');
      });
  });

  const filterButtons = document.querySelectorAll('.filter-name');
  const galleryBoxes = document.querySelectorAll('.gallery-boxes');

  // Initialize all carousels
  $('.gallery-boxes').owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      autoplay: true,
      nav: true,
      dots: false,
      slideBy: 1,
      smartSpeed: 800,
      autoplayTimeout: 3000,
      rtl: false,
      responsiveClass: true,
      responsive: {
          0: {
              items: 2,
              margin: 0,
          },
          600: {
              items: 2,
              nav: false,
          },
          1000: {
              items: 3,
          },
      },
  });

  // Filter functionality
  filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          // Hide all gallery sections
          galleryBoxes.forEach((box) => {
              box.style.display = 'none'; // Hide all carousels
          });

          // Show the selected gallery section
          const selectedBox = document.querySelector(`.gallery-boxes[data-box="${filter}"]`);
          if (selectedBox) {
              selectedBox.style.display = 'flex';

              // Refresh carousel after showing it
              $(selectedBox).trigger('refresh.owl.carousel');
          }
      });
  });
});



  $('.test-boxes').owlCarousel({
    items:3,
    loop:true,
    margin:20,
    autoplay: true,
    nav: false,
    dots: false,
    slideBy:1,
    smartSpeed:800,
    autoplayTimeout: 3000,
    rtl:false,
    responsiveClass:true,
    responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
      }
  }
  });

// //   home triangle

const tri1 = document.getElementById('home-tri1');
const tri2 = document.getElementById('home-tri2');

// Function to update triangle positions based on mouse movement
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Calculate translation values
    const translateX1 = (clientX - window.innerWidth / 2) * 0.01;
    const translateY1 = (clientY - window.innerHeight / 2) * 0.01;

    const translateX2 = (clientX - window.innerWidth / 2) * 0.02;
    const translateY2 = (clientY - window.innerHeight / 2) * 0.02;

    // Apply translations
    tri1.style.transform = `translate(${translateX1}px, ${translateY1}px)`;
    tri2.style.transform = `translate(${translateX2}px, ${translateY2}px)`;
});



// Parallax Effect 
const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallaxElements.forEach(function (element) {
    let speed = parseFloat(element.getAttribute("data-speed")) || 0.07;
    element.style.backgroundPositionY = -(offset * speed) + "px"; // Negative value
  });
});



// Function to add "navActive" class to the clicked link
function setActiveLink(element) {
    document.querySelectorAll('.nav-ul a').forEach(link => link.classList.remove('navActive'));
    element.classList.add('navActive');
  }
  
  // Function for smooth scrolling to the section
  
  
  // Click event handler for navigation links
  document.querySelectorAll('.nav-ul a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      
      var sectionId = link.getAttribute('href');
      setActiveLink(link);
      scrollToSection(sectionId);
  
      // Reset the clickHandled flag after a short delay
      setTimeout(() => clickHandled = false, 300);
    });
  });
  
  // Listen for scroll events to update the "navActive" class
  document.addEventListener('DOMContentLoaded', function () {
    checkActiveSection();
  
    document.addEventListener('scroll', checkActiveSection);
  });
  
  // Function to check and set "navActive" class for the active section
  function checkActiveSection() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
  
    document.querySelectorAll('.nav-ul a').forEach(link => {
      var section = document.querySelector(link.getAttribute('href'));
  
      if (section) {
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.offsetHeight;
  
        if ((sectionTop >= scrollPosition && sectionTop <= scrollPosition + windowHeight) || (sectionBottom >= scrollPosition && sectionBottom <= scrollPosition + windowHeight)) {
          setActiveLink(link);
        } else {
          link.classList.remove('navActive');
        }
      }
    });
  }
  

  