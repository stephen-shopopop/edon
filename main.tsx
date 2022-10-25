/** @jsx h */

import blog, { ga, h, redirects } from "blog";

blog({
  title: "EDON",
  description: "Music colaborative",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  showHeaderOnPostPage: true,
  links: [
    { title: "Email", url: "mailto:stephen.deletang@shopopop.com" }
  ],
  avatar:
    "https://img.freepik.com/vecteurs-libre/astronaute-mignon-sautant-mains-metal-cartoon-vector-icon-illustration-concept-icone-technologie-scientifique-isole-vecteur-premium-style-dessin-anime-plat_138676-4189.jpg",
  avatarClass: "rounded-full",
  author: "Edon",
  dateStyle: "long",
  lang: "fr",
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
