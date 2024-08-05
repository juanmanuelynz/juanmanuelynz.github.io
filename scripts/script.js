import StoryBlock from "./StoryBlock.js";

/////////////////////
// Configure Vue here
const VueApp = {
  components: {
    StoryBlock,
  },

  // button: 'buttonProfesion',
  // url: 'https://www.behance.net/juanmanuelynz',

  data() {
    return {
      grainAnim: "",
      isMenuOpen: false,
      storyBlocks: [
        {
          text: "textProfesionNow",
          image: "/assets/parami_Viriya.jpg",
          isRight: false,
        },
        {
          text: "textProfesion",
          image: "/assets/cell_planta.jpg",
          isRight: true,
        },
        {
          text: "textHuman",
          image: "/assets/parami_Kshanti.jpg",
          isRight: false,
        },
        {
          text: "textParticular",
          image: "/assets/parami_Metta.jpg",
          isRight: true,
          button: "buttonParticular",
          url: "https://algoparticular.com",
        },
      ],
    };
  },

  // Functions go here
  methods: {
    animPath(path) {
      var tl = anime.timeline();
      tl.add({
        targets: path,
        strokeDashoffset: [0, anime.setDashoffset],
        easing: "easeInOutQuint",
        duration: 1200,
        delay: function (el, i) {
          return i * 150;
        },
      }).add(
        {
          targets: path,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1000,
          easing: "easeInExpo",
        },
        "+=1000"
      );

      // //toggle grain animation
      // if(this.grainAnim.paused){
      //     this.grainAnim.play();
      // } else {
      //     this.grainAnim.pause();
      // }
    },
    underlineAnim(event) {
      let underline = event.target.querySelector(".underline");

      anime({
        targets: underline,
        width: "100%",
        left: "0%",
        easing: "easeOutQuint",
      });
    },
    leaveUnderlineAnim(event) {
      let underline = event.target.querySelector(".underline");

      anime({
        targets: underline,
        width: "0%",
        left: "0%",
        easing: "easeInQuint",
      });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },

  // Code that will run as soon as app is ready
  mounted() {
    //Anim background
    this.grainAnim = anime({
      targets: "#grain",
      keyframes: [
        { backgroundPosition: "-1px bottom" },
        { backgroundPosition: "left .5px" },
        { backgroundPosition: "0px top" },
        { backgroundPosition: "right -1px" },
      ],
      duration: 600,
      easing: "steps(4)",
      loop: true,
      autoplay: true,
    });
  },
};
/////////////////////

// COPYWRITING
const messages = {
  es: {
    message: {
      hello: "Hola",
      contact: "Contacto",
      intro: "Hola, soy Juan",
      intro2: "Ser humano, diseñador curioso y creador digital.",
      intro2b:
        "Un tipo de persona ingeniosa a la que le encanta investigar, idear y desarrollar soluciones. He trabajado en diferentes campos, desde la programación hasta el diseño visual y de producto, pasando por la gestión de proyectos. Apoyo proyectos combinando la investigación y la curiosidad sistémica con el instinto entrenado.",
      textProfesionNow:
        "En la actualidad soy parte de codesters.club, un programa de aprendizaje que guía +250 jóvenes de 7 colegios secundarios de Estonia en el proceso de creación, diseño y desarrollo de productos digitales. Lidero el primer año del programa, he desarrollado todo el plan de aprendizaje y he sido mentor de 7 grupos.",
      textProfesion:
        "Empecé mi carrera como desarrollador Back-end pero rápidamente encontré en el Front-end la posibilidad de crear impacto visual. Esa búsqueda me llevó a profundizar en el mundo audiovisual y finalmente encontré mi lugar ideal en el Diseño de Productos. Gracias a esta amplia perspectiva, alimento mi intuición y búsqueda de la belleza con matemática y lógica, soy detallista con una visión al pixel.\n\nHe desarrollado y diseñado soluciones empresariales, sitios web, videojuegos, herramientas y aplicaciones web para varias industrias. También he co-fundado 2 startups, he participado exitosamente en Start-Up Chile y su secuela Scale-Up, y he sido parte de la comunidad de Seedstars World representando a Chile en Latam y Suiza.",
      textHuman:
        "Luego, puedo decir que soy un Humano... Claro que no soy una medusa evolucionada ni una berenjena parlante, pero antes que nada... Soy un Humano con H mayúscula y trabajo diariamente para serlo. Ser un verdadero Humano exige el auto-descubrimiento como prioridad número uno en la vida, un camino que nos haga conscientes de nuestra luz y nos presente la oportunidad de abrazar nuestra oscuridad.\n\nSoy un ser genuino, con capacidad de escucha honesta, amante de la vida. Feliz por naturaleza, curioso y hambriento de todo tipo de conocimientos. La jardinería, la ilustración y la cocina son mis pasiones. Encuentro inspiración en la vulnerabilidad, en la filosofía y la teosofía, en la geometría sagrada y en los simbolismos antropológicos.",
      textParticular:
        'Finalmente, continúo explorando y creando un Universo ilustrado que he llamado "Algo Particular", una forma que encontré para compartir mi punto de vista de la Vida y lo que significa para mí, estar Vivo. Con personajes y situaciones muy sencillas, y la premisa hermética "Como es arriba, es abajo", intento contar mi verdad: todos somos iguales, todos somos uno, (no) somos (de) aquí.',
      buttonProfesion: "Revisa mi portfolio",
      buttonParticular: "Conoce más sobre Algo Particular",
      contactTitle: "Estemos en contacto",
      contactText:
        "Si puedo apoyarte de alguna manera, ser útil para tu proyecto o simplemente quieres conocerme, no dudes en ponerte en contacto conmigo. Por favor, proporciona cualquier información que creas que puede ser útil.",
      contactButton: "Envíame un mensaje",
    },
  },
  en: {
    message: {
      hello: "Hello",
      contact: "Contact",
      intro: "Hola, I’m Juan",
      intro2: "Human being, curious designer and digital creator.",
      intro2b:
        "A resourceful kind of person who loves to research, ideate and develop solutions. I have been working in different fields, from programming to visual and product design, going through project management. I support projects combining research and systemic curiosity with trained instinct.",
      textProfesionNow:
        "I’m currently involved in codesters.club, a learning programme mentoring +250 youngsters in 7 Estonian secondary schools, through the process of creating, designing and developing digital products. I lead the first year, I’ve developed the whole learning plan and have been the mentor of 7 groups.",
      textProfesion:
        "I started my career as a Back-end developer but quickly finding in Front-end the possibility of creating visual impact. That search led me to delve into the audiovisual world and finally finding my sweet spot in Product Design. Thanks to this broad perspective, I feed my intuition and search for beauty with mathematics and logic, I am detail-oriented with a pixel vision.\n\nI’ve developed and designed enterprise solutions, websites, videogames, tools and web apps for several industries. Also I’ve co-founded 2 startups, I’ve participated and been successful in Start-Up Chile and its sequel Scale-Up, and I have been part of Seedstars World community, representing Chile in Latam & Switzerland.",
      textHuman:
        "Then, I can say that I am a Human... Sure I’m not an evolved jellyfish or a talking eggplant, but before anything else... I’m a Human with capital H, working every day to be one. Being a true Human demands self-discovery as the number one priority in life, a path that makes us aware of our light and present us the opportunity to embrace our darkness.\n\nI am a genuine being, with honest listening skills, lover of life. Happy by nature, curious and hungry for all kinds of knowledge. Gardening, illustration and cooking are my passions. I find inspiration in vulnerability, in philosophy and theosophy, in sacred geometry and anthropological symbolisms.",
      textParticular:
        'Finally, I continue exploring and creating an illustrated Universe that I’ve called "Algo Particular" (Something Particular), a way I’ve found for sharing my point of view of Life and what it means to me, to be Alive. With very simple characters and situations, and the Hermetic premise "As above, so below", I’m trying to tell my truth: we are all the same, we are all one, we are (not from) here.',
      buttonProfesion: "Check my portfolio",
      buttonParticular: "Know more about Algo Particular",
      contactTitle: "Let’s be in contact",
      contactText:
        "If I can support you in any way, be useful to your project or you just want to meet, feel free to contact me. Please, provide any information you might think would be helpful.",
      contactButton: "Send me a message",
    },
  },
};

// Initialize Lang
const i18n = VueI18n.createI18n({
  locale: "es", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

// Initialize Vue
Vue.createApp(VueApp).use(i18n).mount("#app");
