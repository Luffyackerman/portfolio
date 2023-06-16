const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Add event listener to document for clicks
document.addEventListener("click", (e) => {
  // Check if click target is outside of menu
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});
const closeButton = document.querySelector('.menu-btn');

// Add click event listener to close button
closeButton.addEventListener("click", (e) => {
  // Hide the menu by adding the "hidden" class
  menu.classList.add("hidden");
});
//----------------------
function toggleDarkMode() {
    const html = document.querySelector('html');
    html.classList.toggle('dark-mode');
  }
  function toggleDarkMode() {
    const html = document.querySelector('html');
    const currentMode = html.classList.contains('dark-mode') ? 'dark' : 'light';
    
    // Toggle the class
    html.classList.toggle('dark-mode');
  
    // Store the mode in local storage
    localStorage.setItem('mode', currentMode);
  }
  
  // Check the stored mode on page load
  const storedMode = localStorage.getItem('mode');
  if (storedMode === 'dark') {
    const html = document.querySelector('html');
    html.classList.add('dark-mode');
  }
//-------------------------
  const links = document.querySelectorAll('ul li a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(otherLink => {
        otherLink.classList.remove('bg-blue-500');
        otherLink.classList.remove('text-white');
        otherLink.classList.add('text-gray-400');
      });
      link.classList.add('bg-blue-500');
      link.classList.add('text-white');
      link.classList.remove('text-gray-400');
    });
  });
  //---------------------------------------
  const linkst = document.querySelectorAll('.menu a');

  linkst.forEach(link => {
    link.addEventListener('click', () => {
      linkst.forEach(otherLink => {
        otherLink.classList.remove('border-b-2');
        otherLink.classList.remove('font-semibold');
        otherLink.classList.remove('border-blue-500');
        otherLink.classList.remove('text-blue-500');
        otherLink.classList.add('text-gray-500');
      });
      link.classList.add('border-b-2');
      link.classList.add('font-semibold');
      link.classList.add('border-blue-500');
      link.classList.add('text-blue-500');
      link.classList.remove('text-gray-500');
    });
  });
//-----------------------------------------
//----------------------------------------
const scrollButton = document.querySelector('.scrolldown');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    scrollButton.classList.add('hidden');
  } else {
    scrollButton.classList.remove('hidden');
  }
});

scrollButton.addEventListener('click', () => {
  const viewportHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;
  const middleOfPage = documentHeight / 2 - viewportHeight / 2;
  window.scrollTo({ top: middleOfPage, behavior: 'smooth' });
});
//---------------------
AOS.init();
//------------------

