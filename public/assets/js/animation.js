// navb sticky
/* window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
} */

/* Anfangspfeil */
ScrollReveal().reveal(".arrow", {
  delay: 1200,
  distance: "20%",
  opacity: 0,
  origin: "bottom",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
/* Mein Bild */
ScrollReveal().reveal(".myImage", {
  delay: 1300,
  distance: "180%",
  origin: "left",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});

ScrollReveal().reveal(".javascript", {
  delay: 1100,
  distance: "30%",
  origin: "left",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 10,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".css", {
  delay: 1100,
  distance: "50%",
  origin: "left",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 20,
    z: 0
  }
});
ScrollReveal().reveal(".html", {
  delay: 1100,
  distance: "80%",
  origin: "left",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 40
  }
});
ScrollReveal().reveal(".sass", {
  delay: 1100,
  distance: "100%",
  origin: "left",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".bootstrap", {
  delay: 1100,
  distance: "20%",
  origin: "left",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 30,
    y: 30,
    z: 0
  }
});
ScrollReveal().reveal(".react", {
  delay: 1100,
  distance: "120%",
  origin: "left",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".nodejs", {
  delay: 2000,
  distance: "90%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 1,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".mongodb", {
  delay: 2000,
  distance: "90%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 1,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".express", {
  delay: 2000,
  distance: "140%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 1,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".passport", {
  delay: 2000,
  distance: "90%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 1,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".pug", {
  delay: 2000,
  distance: "180%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 1,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".handlebars", {
  delay: 2000,
  distance: "180%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".socketio", {
  delay: 2000,
  distance: "180%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".mongoose", {
  delay: 2000,
  distance: "180%",
  origin: "top",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".webpack", {
  delay: 1500,
  distance: "180%",
  origin: "right",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".markdown", {
  delay: 1500,
  distance: "180%",
  origin: "right",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".postman", {
  delay: 1500,
  distance: "90%",
  origin: "right",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".compass", {
  delay: 1500,
  distance: "180%",
  origin: "right",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal(".git", {
  delay: 1500,
  distance: "180%",
  origin: "right",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
ScrollReveal().reveal("h4", {
  delay: 2200,
  distance: "200%",
  origin: "bottom",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  rotate: {
    x: 0,
    y: 0,
    z: 0
  }
});
