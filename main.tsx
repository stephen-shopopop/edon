/** @jsx h */

import blog, { ga, h, redirects } from "blog";

blog({
  title: "EDON",
  description: "Music collaborative",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  footer: <footer><audio controls src="https://file-examples.com/storage/fed6cf172a635710f9f4051/2017/11/file_example_MP3_700KB.mp3"> <a href="https://file-examples.com/storage/fed6cf172a635710f9f4051/2017/11/file_example_MP3_700KB.mp3"> Download audio</a></audio><\footer>
  showHeaderOnPostPage: true,
  links: [
    { title: "Email", url: "mailto:stephen.deletang@shopopop.com" },
    { title: "Twitter", url: "https://twitter.com/edon" },
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
