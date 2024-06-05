const options = {
  root: document.querySelector("main"),
  rootMargin: "0px",
  threshold: 0.8,
};

let observer = new window.IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.play();
        setIsPlaying(true);
    } else {
        entry.target.pause();
        setIsPlaying(false);
    }
});
}, options);