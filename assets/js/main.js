/* Simple scroll-reveal and active nav highlight */
(function () {
  "use strict";

  // Highlight active nav link on scroll
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    var scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      var top = section.offsetTop - 80;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Fade-in animation via IntersectionObserver
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".project-card, .skill-card, .contact-link")
      .forEach(function (el) {
        el.classList.add("fade-in");
        observer.observe(el);
      });
  }
})();
