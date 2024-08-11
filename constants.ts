export type Route = {
    path: string;
    label: string;
}

export type Profession = {
  title: string;
  description: string;
  image: string;
}

export type Blog = {
  title: string;
  description: string;
  image: string;
}

export const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

export const professions: Profession[] = [
  {
    title: "Teeth Braces",
    description: "Correct misalignment for a straighter, healthier smile.",
    image: "/professions/image_01.jpg",
  },
  {
    title: "Cosmetic Filling",
    description: "Restore teeth with natural-looking, durable material.",
    image: "/professions/image_02.jpg",
  },
  {
    title: "Cleaning",
    description: "Remove plaque and tartar for oral health",
    image: "/professions/image_03.jpg",
  },
  {
    title: "Implementation",
    description: "Replace missing teeth with permanent artificial roots.",
    image: "/professions/image_04.jpg",
  },
  {
    title: "Dental Crown",
    description: "Cover damaged teeth to restore functionality and appearance.",
    image: "/professions/image_05.jpg",
  },
  {
    title: "Dentures",
    description: "Removable replacements for missing teeth and gums.",
    image: "/professions/image_06.jpg",
  },
];
export const blogs: Blog[] = [
  {
    title: "Electric Toothbrush for the Best Long Term Effects",
    description:
      "Regular dental checkups are more than just routine cleanings; they are essential for maintaining overall oral health and preventing serious dental issues down the line. In this blog post, we'll explore the critical role that bi-annual visits to the dentist play in preventing cavities, gum disease, and even detecting early signs of oral cancer. Discover why these appointments are a key part of your healthcare routine and how they contribute to a bright, healthy smile.",
    image: "/blog/image_01.jpg",
  },
  {
    title: "Find the Best Mouthwash for Breath?",
    description:
      "Tooth sensitivity can turn enjoying your favorite hot or cold foods into a painful experience. This blog post delves into the common causes of tooth sensitivity, from enamel erosion to gum recession, and offers insight into the best treatment options available. We’ll also share preventive tips to help protect your teeth from sensitivity and ensure that you can enjoy your meals without discomfort.",
    image: "/blog/image_02.jpg",
  },
  {
    title: "The Best Time Between Check-ups?",
    description:
      "With so many types of toothpaste on the market, choosing the right one can be overwhelming. This blog post will guide you through the different types of toothpaste available—whitening, sensitive, fluoride, natural, and more—so you can make an informed decision based on your specific dental needs. Learn what to look for in a toothpaste, how to read the labels, and which ingredients are most beneficial for maintaining a healthy, radiant smile.",
    image: "/blog/image_03.jpg",
  },
];