import buddyfinder from "../assets/projects/buddyfinder.png";
import imagify from "../assets/projects/imagify.png";
import wanderlust from "../assets/projects/wanderlust.png";


export const projects = [
  {
    title: "Buddy Finder",
    desc: "MERN travel companion platform with real-time chat, Mapbox & secure auth.",
    tech: ["React", "Node", "MongoDB", "Socket.IO"],
    image: buddyfinder,
    live: "https://buddyfinder-du2b.vercel.app/",
    github: "https://github.com/arpit-925/Buddy_Finder",
  },
  {
    title: "Imagify",
    desc: "AI-powered image editor using Cloudinary AI & Stripe subscriptions.",
    tech: ["React", "Cloudinary", "Stripe"],
    image: imagify,
    live: "https://picto-text-front.onrender.com/",
    github: "https://github.com/arpit-925/Imagify",
  },
  {
    title: "Wanderlust",
    desc: "Travel listing platform with Mapbox, reviews & authorization.",
    tech: ["Node", "Express", "MongoDB"],
    image: wanderlust,
    live: "https://stayhub-on26.onrender.com/",
    github: "https://github.com/arpit-925/Wanderlust",
  },
];
