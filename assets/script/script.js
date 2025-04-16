// navbar
const navEl = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 1050) { // Only apply on screens >= 768px
        if (window.scrollY >= 56) {
            navEl.classList.add('navbar-scrolled');
        } else {
            navEl.classList.remove('navbar-scrolled');
        }
    } else {
        navEl.classList.remove('navbar-scrolled'); // Ensure it's removed on smaller screens
    }
});

const mobPatch = document.querySelector(".mob-patch");

window.addEventListener("scroll", () => {
    if (window.innerWidth < 1050) {
        if (window.scrollY > 0) {
            mobPatch.style.opacity = "1";
        } else {
            mobPatch.style.opacity = "0";
        }
    } else {
        mobPatch.style.opacity = "0"; // Ensure opacity is reset on larger screens
    }
});

// Loader functionality
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
    }
});


// function scrollToSection(event, sectionId) {
//   event.preventDefault(); // Prevent default anchor behavior

//   if (!sectionId.startsWith("#")) {
//       sectionId = `#${sectionId}`;
//   }

//   const targetSection = document.querySelector(sectionId);
//   if (targetSection) {
//       targetSection.scrollIntoView({ behavior: "smooth" });
//       setActiveClass(event.target.parentElement);
//   }
// }

// function setActiveClass(element) {
//   if (!element) return; // Prevent errors if element is null

//   const navItems = document.querySelectorAll(".navUl li");
//   navItems.forEach((item) => item.classList.remove("active"));
//   element.classList.add("active");
// }

// function isSectionVisible(section) {
//   const rect = section.getBoundingClientRect();
//   const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//   return rect.top < windowHeight && rect.bottom > 0; 
//   // Ensures section is at least partially visible
// }

// window.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll("section");
//   let found = false;

//   sections.forEach((section) => {
//       if (isSectionVisible(section) && !found) {
//           const id = section.getAttribute("id");
//           const navItem = document.querySelector(`a[href="#${id}"]`)?.parentElement; // Safe check

//           if (navItem) {
//               setActiveClass(navItem);
//           }

//           found = true; // Ensures only one section gets activated at a time
//       }
//   });
// });



function setActiveClass(element) {
    if (!element) return;

    const navItems = document.querySelectorAll(".nav-ul li");
    navItems.forEach((item) => item.classList.remove("active"));

    element.classList.add("active");
}



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
    const popupContent = document.querySelector(".popup-content")
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
                folderPath + "/ime-folk-music-live-event.webp",
                folderPath + "/ime-carnatic-music-timeline.webp",
                folderPath + "/ime-live-concert-classical-music.webp",
                folderPath + "/ime-music-workshop-children.webp",
                folderPath + "/ime-rare-instruments-collection.webp",
                folderPath + "/indian-music-experience-sound-garden.webp",
                folderPath + "/indian-music-experience-tabla-display.webp",
                folderPath + "/indian-music-experience-visitors-exploring.webp"
            ];
        } else if (folderPath === "assets/images/ourWorks/bs") {
            imagePaths = [
                folderPath + "/birdsong-exhibit-crowd.webp",
                folderPath + "/birdsong-exhibition-2023-banner.webp",
                folderPath + "/birdsong-exhibition-2023-gallery-overview.webp",
                folderPath + "/birdsong-exhibition-2023-installation-view..webp",
                folderPath + "/birdsong-exhibition-birds-in-culture.webp",
                folderPath + "/birdsong-exhibition-information-panels.webp",
                folderPath + "/birdsong-exhibition-music-display.webp",
                folderPath + "/birdsong-exhibit-kid.webp"
            ];
        } else if (folderPath === "assets/images/ourWorks/bdf") {
          imagePaths = [
            folderPath + "/bangalore-design-week-2022.webp",
                folderPath + "/bangalore-design-week-display.webp",
                folderPath + "/bangalore-design-week-exhibit.webp",
                folderPath + "/bangalore-design-week-exhibit.webp",
                folderPath + "/bangalore-design-week-installation.webp",
                folderPath + "/bdw-2022-design-exhibition.webp",
                folderPath + "/bdw-2022-event.webp",
                folderPath + "/bdw-2022-exhibition.webp",
                folderPath + "/design-week-bangalore.webp",
                folderPath + "/design-week-bangalore-2022.webp",
          ];
      }

      else if (folderPath === "assets/images/ourWorks/cu") {
        imagePaths = [
            folderPath + "/career-fair-university-event.webp",
            folderPath + "/career-utsav-11-rules-for-life-career-success.webp",
            folderPath + "/career-utsav-2016-premier-educational-fair-careers-after-12th.webp",
            folderPath + "/career-utsav-alliance-networking-event.webp",
            folderPath + "/career-utsav-banner-galores-university.webp",
            folderPath + "/career-utsav-large-crowd.webp",
            folderPath + "/career-utsav-new-registration-promotion.webp",
            folderPath + "/career-utsav-school-champion-competition.webp",
            folderPath + "/career-utsav-speaking-session.webp",
            folderPath + "/career-utsav-writing-your-future-career-guidance.webp"
        ];
    }
    else if (folderPath === "assets/images/ourWorks/rs@100") {
      imagePaths = [
          folderPath + "/interactive-music-exhibit.webp",
          folderPath + "/ravi-shankar-100-years.webp",
          folderPath + "/ravi-shankar-sitar-display.webp",
          folderPath + "/ravi-shankar-sitar-exhibit.webp",
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

  document.getElementById("home-image5").addEventListener("click", function () {
    openPopup("assets/images/ourWorks/cu");
});

document.getElementById("home-image2").addEventListener("click", function () {
  openPopup("assets/images/ourWorks/rs@100");
});

  function closePopup() {
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.zIndex = -1;
    }, 500); // Matches the CSS transition duration
}
closeBtn.addEventListener("click", closePopup);

popup.addEventListener("click", function (e) {
  if (!popupContent.contains(e.target)) {
      closePopup();
  }
});
prevBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  // Navigate to the previous image
});

nextBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  // Navigate to the next image
});
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

// button dropdown
document.addEventListener("DOMContentLoaded", function () {
  const hovBtns = document.querySelectorAll(".hov-btn");

  function handleDropdown(event) {
    event.stopPropagation(); // Prevents event bubbling
    const dropdown = this.querySelector(".btn-dropdown");

    if (dropdown) {
      dropdown.classList.toggle("btn-hov"); // Toggle class to show/hide
    }
  }

  function closeDropdowns() {
    document.querySelectorAll(".btn-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("btn-hov");
    });
  }

  function addListeners() {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      hovBtns.forEach((btn) => {
        btn.addEventListener("click", handleDropdown);
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", closeDropdowns);
    }
  }

  function removeListeners() {
    hovBtns.forEach((btn) => {
      btn.removeEventListener("click", handleDropdown);
    });
    document.removeEventListener("click", closeDropdowns);
  }

  function checkScreenSize() {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      addListeners();
    } else {
      removeListeners();
    }
  }

  checkScreenSize(); // Run initially

  // Listen for screen size changes
  window.addEventListener("resize", checkScreenSize);
});


///////////    overview popup section    /////////////// 
document.addEventListener("DOMContentLoaded", function () {
  const vidCont = document.querySelector(".vid-cont");
  const popup = document.getElementById("over-popup");
  const high = document.getElementById("high-vid");
  const closeBtn = document.querySelector(".over-close-btn");
  const video = document.getElementById("videoFrame"); // Renamed for clarity

  vidCont.addEventListener("click", function () {
    popup.style.display = "flex";
    video.play(); // Optional: start playing again when popup opens
  });

  high.addEventListener("click", function () {
    popup.style.display = "flex";
    video.play(); // Optional
  });

  closeBtn.addEventListener("click", function () {
    closePopup();
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });

  function closePopup() {
    popup.style.display = "none";
    video.pause();
    video.currentTime = 0; // Optional: reset video to beginning
  }
});


// Define content for each home-box
const contentData = {
  "home-image1": {
    head: "<span>Indian Music</span> <span>Experience Museum</span> ",
    des: "The Indian Music Experience's grand launch was a landmark celebration, merging tradition with innovation. Highlighted by an extraordinary performance from Ustad Zakir Hussain's ensemble, in collaboration with Louiz Banks. This momentous occasion brought music enthusiasts together to experience the confluence of heritage and contemporary artistry."
  },
  "home-image2": {
    head: "<span>Ravi Shankar</span>  <span>@100</span> ",
    des: "We took pride in honoring the centenary of the legendary Pandit Ravi Shankar with an immersive tribute. The event celebrated his unparalleled legacy through a thoughtfully curated exhibition, presenting iconic milestones from his journey. This celebration offered attendees an experiential dive into the life and music of one of India's most celebrated maestros."
  },
  "home-image3": {
    head: "<span>Brigade</span> <span>Showcase</span> ",
    des: "For over seven years, we has played a pivotal role in conceptualizing and executing the Brigade Showcase in Bangalore. With a focus on creating engaging, experiential ideas that align with the brand's promise, the showcase has evolved into a standout platform for customers to experience the Brigade brand’s vision and offerings in an innovative way."
  },
  "home-image4": {
    head: "<span>Bangalore</span> <span>Design Week</span> ",
    des: "We played a key role in shaping Bangalore’s first-ever Design Week, a platform celebrating creativity and innovation. BDW serves as a vibrant hub for Indian and global designers to connect, collaborate, and exchange ideas. The event underscores Bangalore’s identity as a design-forward city, promoting dialogue within the design community."
  },
  "home-image5": {
    head: "<span>Career</span> <span>Utsav</span> ",
    des: "Career Utsav, Bangalore's leading education fair, has become a beacon of guidance for students exploring diverse career paths. With workshops and seminars by industry experts, the event showcases both conventional and cutting-edge professions. Since its inception in 2013, it has inspired over half a million students from India and abroad, helping them navigate critical career decisions."
  },
  // Add more entries for other home-boxes (hb3, hb4, hb5)
};

// Add click event listeners to all home-boxes
document.querySelectorAll('.home-box').forEach(homeBox => {
  homeBox.addEventListener('click', () => {
    const boxId = homeBox.id; // Get the ID of the clicked box
    const content = contentData[boxId]; // Get the corresponding content

    if (content) {
      // Update the inner HTML of .h-head and .pop-des
      document.querySelector('.popup-content .h-head').innerHTML = content.head;
      document.querySelector('.popup-content .pop-des').innerHTML = content.des;
    }
  });
});


 // OUR CLIENTS CAROUSEL //

 

 $(document).ready(function () {
  // Function to shuffle items within a carousel
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  // Shuffle items inside each `.gallery-boxes`
  $(".gallery-boxes").each(function () {
      let $galleryBox = $(this);
      let $items = $galleryBox.children(".item").toArray(); // Get only its own children
      shuffleArray($items); // Shuffle items only within its own container
      $galleryBox.append($items); // Append shuffled items back

      const filterNames = document.querySelectorAll('.filter-name');

      filterNames.forEach(filter => {
          filter.addEventListener('click', function () {
              // Remove 'filter-active' class from all filters
              filterNames.forEach(f => f.classList.remove('filter-active'));
    
              // Add 'filter-active' class to the clicked filter
              this.classList.add('filter-active');
          });
      });
      // Initialize Owl Carousel for each gallery
      $galleryBox.owlCarousel({
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
              0: { items: 2, margin: 0 },
              600: { items: 2, nav: false },
              1000: { items: 3 },
          },
      });
  });

  // Filter functionality to show only selected gallery
  $(".filter-name").on("click", function () {
    
      let filter = $(this).attr("data-filter");

      // Hide all gallery sections
      $(".gallery-boxes").removeClass("owl-active");

      // Show the selected gallery section
      let $selectedBox = $(`.gallery-boxes[data-box="${filter}"]`);
      if ($selectedBox.length) {
          $selectedBox.addClass("owl-active");
      }
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
          items:1,
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



// Parallax Effect 
const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallaxElements.forEach(function (element) {
    let speed = parseFloat(element.getAttribute("data-speed")) || 0.07;
    element.style.backgroundPositionY = -(offset * speed) + "px"; // Negative value
  });
});



// // Function to add "navActive" class to the clicked link
// function setActiveLink(element) {
//     document.querySelectorAll('.nav-ul a').forEach(link => link.classList.remove('navActive'));
//     element.classList.add('navActive');
//   }
  
//   // Function for smooth scrolling to the section
  
  
//   // Click event handler for navigation links
//   document.querySelectorAll('.nav-ul a').forEach(link => {
//     link.addEventListener('click', function (event) {
//       event.preventDefault();
      
//       var sectionId = link.getAttribute('href');
//       setActiveLink(link);
//       scrollToSection(sectionId);
  
//       // Reset the clickHandled flag after a short delay
//       setTimeout(() => clickHandled = false, 300);
//     });
//   });
  
//   // Listen for scroll events to update the "navActive" class
//   document.addEventListener('DOMContentLoaded', function () {
//     checkActiveSection();
  
//     document.addEventListener('scroll', checkActiveSection);
//   });
  
//   // Function to check and set "navActive" class for the active section
//   function checkActiveSection() {
//     var scrollPosition = window.scrollY;
//     var windowHeight = window.innerHeight;
  
//     document.querySelectorAll('.nav-ul a').forEach(link => {
//       var section = document.querySelector(link.getAttribute('href'));
  
//       if (section) {
//         var sectionTop = section.offsetTop;
//         var sectionBottom = sectionTop + section.offsetHeight;
  
//         if ((sectionTop >= scrollPosition && sectionTop <= scrollPosition + windowHeight) || (sectionBottom >= scrollPosition && sectionBottom <= scrollPosition + windowHeight)) {
//           setActiveLink(link);
//         } else {
//           link.classList.remove('navActive');
//         }
//       }
//     });
//   }
  

// Function for smooth scrolling
function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  
  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  }
}
let timeoutId = null; // Track timeout for removing active class

// Function to add "navActive" class temporarily when clicking a link
function setActiveLinkTemporary(element) {
    document.querySelectorAll('.nav-ul a').forEach(link => link.classList.remove('navActive'));
    element.classList.add('navActive');

    // Remove active class after 2 seconds if another section isn't in view
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        if (!document.querySelector('.nav-ul a.navActive')) {
            element.classList.remove('navActive');
        }
    }, 2000);
}

// Function to add "navActive" class based on scrolling
function setActiveLink(element) {
    document.querySelectorAll('.nav-ul a').forEach(link => link.classList.remove('navActive'));
    element.classList.add('navActive');
}

// Function to check which section is in view
function checkActiveSection() {
    let activeLink = null;
    let maxVisibility = 0;

    document.querySelectorAll('.nav-ul a').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));

        if (section) {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

            if (visibleHeight > maxVisibility && rect.top < window.innerHeight && rect.bottom > 0) {
                maxVisibility = visibleHeight;
                activeLink = link;
            }
        }
    });

    if (activeLink) {
        setActiveLink(activeLink);
        clearTimeout(timeoutId); // Reset timeout if a section is visible
    }
}

// Function for smooth scrolling
function scrollToSection(event, sectionId) {
    event.preventDefault();

    // Ensure we're clicking the correct `a` tag
    const link = event.target.closest('a');
    if (!link) return;

    const section = document.querySelector(sectionId);

    if (section) {
        const rect = section.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;

        window.scrollTo({
            top: absoluteTop,
            behavior: 'smooth'
        });

        // Set active class temporarily on click
        setActiveLinkTemporary(link);
    }
}

// Listen for scroll events to update the "navActive" class
document.addEventListener('DOMContentLoaded', function () {
    checkActiveSection();
    document.addEventListener('scroll', checkActiveSection);
});




// lottie files
const animationData = {"v":"4.8.0","meta":{"g":"LottieFiles AE ","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":60,"w":500,"h":500,"nm":"27 Fast Forward","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Main Stroke width - Color Ctrl","parent":5,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Stroke width","np":3,"mn":"ADBE Slider Control","ix":1,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":16,"ix":1}}]}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Arrow 3","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":4,"s":[15.437,50,0],"to":[-10.667,0,0],"ti":[-9.667,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":19,"s":[-48.563,50,0],"to":[9.667,0,0],"ti":[-4.667,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":30,"s":[73.437,50,0],"to":[4.667,0,0],"ti":[2,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":38,"s":[-20.563,50,0],"to":[-2,0,0],"ti":[-6,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":46,"s":[61.437,50,0],"to":[6,0,0],"ti":[7.667,0,0]},{"t":53,"s":[15.437,50,0]}],"ix":2},"a":{"a":0,"k":[34.563,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[171.5,171.5],[34.563,0],[171.5,-171.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c": { "a": 0, "k": [1, 1, 1, 1], "ix": 3 },"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('Main Stroke width - Color Ctrl').effect('Stroke width')('Slider');"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Arrow 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":2,"s":[117.578,50,0],"to":[-10.667,0,0],"ti":[-9.667,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":17,"s":[53.578,50,0],"to":[9.667,0,0],"ti":[-4.667,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":28,"s":[175.578,50,0],"to":[4.667,0,0],"ti":[2,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":36,"s":[81.578,50,0],"to":[-2,0,0],"ti":[-6,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":44,"s":[163.578,50,0],"to":[6,0,0],"ti":[7.667,0,0]},{"t":51,"s":[117.578,50,0]}],"ix":2},"a":{"a":0,"k":[-67.578,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[69.359,171.5],[-67.578,0],[69.359,-171.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c": { "a": 0, "k": [1, 1, 1, 1], "ix": 3 },"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('Main Stroke width - Color Ctrl').effect('Stroke width')('Slider');"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Arrow 1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":0,"s":[221.5,50,0],"to":[-10.667,0,0],"ti":[-9.667,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":15,"s":[157.5,50,0],"to":[9.667,0,0],"ti":[-4.667,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":26,"s":[279.5,50,0],"to":[4.667,0,0],"ti":[2,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":34,"s":[185.5,50,0],"to":[-2,0,0],"ti":[-6,0,0]},{"i":{"x":0.69,"y":1},"o":{"x":0.31,"y":0},"t":42,"s":[267.5,50,0],"to":[6,0,0],"ti":[7.667,0,0]},{"t":49,"s":[221.5,50,0]}],"ix":2},"a":{"a":0,"k":[-171.5,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-34.564,171.5],[-171.5,0],[-34.564,-171.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c": { "a": 0, "k": [0.5, 0.5, 0.5, 1], "ix": 3 },"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":16,"ix":5,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('Main Stroke width - Color Ctrl').effect('Stroke width')('Slider');"},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"Zero | troke width - Color Ctrl","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":60,"st":0,"bm":0}],"markers":[]};

const arrowElements = document.querySelectorAll('.home-arrow');

// Initialize the Lottie animation for each element
arrowElements.forEach(arrowElement => {
  lottie.loadAnimation({
    container: arrowElement, // Target each container
    renderer: 'svg',         // Render as SVG
    loop: true,              // Loop the animation
    fr: 15,                  // Frame rate
    autoplay: true,          // Start automatically
    animationData: animationData // Lottie JSON data
  });
});


// our clients
const carouselContainer = document.getElementById('carouselContainer');

// Clone the carousel content to create a continuous loop
document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("carouselContainer");

    if (!carouselContainer) {
        console.error("carouselContainer not found.");
        return;
    }

    // Duplicate items for infinite loop
    const carouselItems = carouselContainer.innerHTML;
    carouselContainer.innerHTML += carouselItems;

    gsap.to("#carouselContainer", {
        x: "-50%", // Move half of the duplicated items
        duration: 20, // Adjust the speed as needed
        ease: "none",
        repeat: -1
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const logos = Array.from(document.querySelectorAll(".logo-wrapper")); // Correct selector

    if (logos.length === 0) {
        console.error("No elements with class 'logo-wrapper' found.");
        return;
    }

    gsap.set(logos, { autoAlpha: 1 });

    logos.forEach((logo, i) => {
        gsap.set(logo, { xPercent: -100 * i }); // Proper positioning
    });

    if (logos.length > 7) {
        const logosWrap = gsap.utils.wrap(0, (logos.length - 1) * 100);
        const duration = logos.length * 2.5;

        gsap.to(logos, {
            xPercent: `+=${logos.length * 100}`, // Moves left to right
            duration,
            repeat: -1,
            ease: "none",
            modifiers: {
                xPercent: (xPercent) => logosWrap(parseFloat(xPercent)),
            },
        });
    }
});