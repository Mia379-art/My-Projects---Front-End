const testimonials = [
  {
    name: "Sarah M",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "Working with this brand was an amazing experience! The attention to detail and creativity exceeded my expectations. Every piece felt thoughtfully designed and beautifully crafted.",
  },
  {
    name: "Amir K.",
    photoUrl:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I’ve tried many creators before, but none matched this level of quality. The design, style, and overall experience were exceptional. Absolutely recommended!",
  },
  {
    name: "Daniel L.",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "Professional, reliable, and incredibly talented. The final result was exactly what I needed—high-quality, unique, and delivered on time. I couldn’t be happier!",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx++;
  if (idx === testimonials.length) {
    idx = 0; 
  }

  setTimeout(updateTestimonial, 2000);
}

updateTestimonial(); 
