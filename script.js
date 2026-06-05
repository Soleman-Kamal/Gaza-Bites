const navbar = document.querySelector("#navbar");
const cards = document.querySelectorAll(".feature, .menu-card, .contact-info, .contact-form");
const menuCards = document.querySelectorAll(".menu-card");
const form = document.querySelector(".contact-form");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});

menuCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const button = form.querySelector("button");
  button.textContent = "Message Sent ✓";
  button.classList.add("sent");

  setTimeout(() => {
    button.textContent = "Send Message";
    button.classList.remove("sent");
    form.reset();
  }, 2000);
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;
const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});