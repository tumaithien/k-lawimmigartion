
/**
   * Easy selector helper function
   */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
const headerHeight = select('[data-menu]').offsetHeight;
console.log(headerHeight)
window.addEventListener('scroll', function() {
    if (this.window.scrollY > headerHeight) {
        select('[data-menu]').classList.add('sticky');
    } else if (this.window.scrollY === 0) {
        select('[data-menu]').classList.remove('sticky');
    }
});

// Function to toggle language options
function toggleOptions() {
  let options = document.getElementById("languageOptions");
  if (options.style.display === "none" || options.style.display === "") {
    options.style.display = "block";
  } else {
    options.style.display = "none";
  }
}

// Function to select language
function selectLanguage(language) {
  let languageBlocks = document.querySelectorAll('.language-block');
  for ( let i = 0; i < languageBlocks.length; i++) {
    languageBlocks[i].style.display = "none";
  }
  let selectedBlocks = document.querySelectorAll('.' + language);
  for (var j = 0; j < selectedBlocks.length; j++) {
    selectedBlocks[j].style.display = "block";
  }
  // Save selected language to localStorage
  localStorage.setItem('selectedLanguage', language);
  // Close dropdown
  toggleOptions();
  // Display selected language on selected-language block
  document.getElementById("selectedLanguage").textContent = language === "vietnam" ? "Việt Nam" : language.charAt(0).toUpperCase() + language.slice(1);
}


// Function to get selected language from localStorage and apply it
function applySelectedLanguage() {
  var selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
    selectLanguage(selectedLanguage);
    document.getElementById("selectedLanguage").textContent = selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1);
  } else {
    selectLanguage('english');
  }
}

// Apply selected language when the page loads
document.addEventListener("DOMContentLoaded", function() {
  applySelectedLanguage();
  toggleOptions();
});