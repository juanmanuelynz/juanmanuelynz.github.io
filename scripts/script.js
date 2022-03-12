// Configure Vue here
const VueApp = {
    // Put variables here
    data() {
        return {            
            grainAnim: '',
            showMenu: false,
        }
    },    
  
    // Functions go here
    methods: {
        zoomAnim(event) {
            anime({
                targets: event.target,
                scale: 1.1
            });
        },
        leaveZoomAnim(event) {
            anime({
                targets: event.target,
                scale: 1
            });
        },
        animPath(path) {
            var tl = anime.timeline();
            tl.add({
              targets: path,
              strokeDashoffset: [0, anime.setDashoffset],
              easing: 'easeInOutQuint',
              duration: 1200,
              delay: function(el, i) { return i * 150 },          
            })       
            .add({
              targets: path,
              strokeDashoffset: [anime.setDashoffset, 0],
              duration: 1000,
              easing: 'easeInExpo'       
            }, '+=1000');  
            
            //toggle grain animation
            if(this.grainAnim.paused){
                this.grainAnim.play();    
            } else {
                this.grainAnim.pause();   
            }
        },
        underlineAnim(event) {
            let underline = event.target.querySelector(".underline");
    
            anime({
                targets: underline,
                width: "100%",
                left: "0%",
                easing: 'easeOutQuint'
            });
        },
        leaveUnderlineAnim(event) {
            let underline = event.target.querySelector(".underline");
    
            anime({
                targets: underline,
                width: "0%",
                left: "0%",
                easing: 'easeInQuint'
            });
        },
        toggleMenu() {
            this.showMenu = !showMenu;
        }
    },

    // Code that will run as soon as app is ready
    mounted() {
        //Anim background
        this.grainAnim = anime({
            targets: '#grain',
            keyframes: [
                {backgroundPosition: '-1px bottom'},
                {backgroundPosition: 'left .5px'}, 
                {backgroundPosition: '0px top'}, 
                {backgroundPosition: 'right -1px'}
                ],
            duration: 600,
            easing: 'steps(4)',
            loop: true,
            autoplay: true
        });

        //this is HORRIBLE, Jquery in Vue ???!! needs to be fixed
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    }
  };

  const messages = {
    es: {
        message: {
            hello: 'Hola',
            contact: 'Contacto',
            intro: 'Hola, soy Juan',
            intro2: 'Ser humano, diseñador curioso y creador digital.',
            intro2b: 'Un tipo de persona ingeniosa a la que le encanta investigar, idear y desarrollar soluciones.',
            text1: 'He trabajado en diferentes campos, desde la programación hasta el diseño visual y de producto, pasando por la gestión de proyectos.',
            text2: 'Apoyo proyectos combinando la investigación y la curiosidad sistémica con el instinto entrenado.',
            text3: 'En primer lugar, puedo decir que soy un Humano...',
            text4: 'Claro que no soy una medusa evolucionada ni una berenjena parlante, pero antes que nada... Soy un Humano con H mayúscula, o al menos intento serlo.',
            text5: 'Ser un verdadero Humano exige el auto-descubrimiento como prioridad número uno en la vida, un camino que nos haga conscientes de nuestra luz y nos presente la oportunidad de abrazar nuestra oscuridad.',
            text6: 'Soy un ser genuino, con capacidad de escucha honesta, amante de la vida. Feliz por naturaleza, curioso y hambriento de todo tipo de conocimientos.',
            text7: 'La jardinería, la ilustración, la cocina',
            text7b: '/* y el comer */',
            text7c: 'son mis pasiones. Encuentro inspiración en la vulnerabilidad, en la filosofía y la teosofía, en la geometría sagrada y en los simbolismos antropológicos.',
            text8: 'Profesionalmente hablando, empecé mi carrera como desarrollador Back-end pero rápidamente encontré en el Front-end la posibilidad de crear impacto visual. Esa búsqueda me llevó a profundizar en el mundo audiovisual y en el Diseño de Producto.',
            text9: 'Gracias a esta amplia perspectiva, alimento mi intuición y búsqueda de la belleza con matemática y lógica, soy detallista con una visión pixelada.',
            text10: 'He desarrollado y diseñado soluciones empresariales, sitios web, videojuegos, herramientas y aplicaciones web para distintas industrias.',
            text10b: 'También he co-fundado 2 startups, he participado exitosamente en Start-Up Chile y su secuela Scale-Up, y he sido parte de la comunidad de Seedstars World en Latam y Suiza.',
            text11: 'Y ahora, ¡la aventura llama!',
            text11b: 'En medio del extraño 2020, mi pareja y yo decidimos sacudir nuestras vidas y mudarnos desde el mismísimo Sur (Buenos Aires, Argentina) al mismísimo Norte (Tallin, Estonia).',
            text12: 'En este nuevo contexto y uniendo fuerzas con un gran y viejo amigo, estoy de vuelta en el',
            text12b: 'estudio',
            text12c: ', creando experiencias lúdicas y digitales.',
            text13: 'Sama Sama está co-creando con',
            text13b: 'un programa de tutoría para +250 jóvenes de 7 escuelas secundarias de Estonia, a través del proceso de creación, diseño y desarrollo de productos digitales.',
            text14: 'Paralelamente, sigo explorando y creando este Universo ilustrado que he llamado "Algo Particular", una herramienta para compartir mi punto de vista de la Vida y lo que significa para mí, estar Vivo.',
            text15: 'Con personajes y situaciones muy sencillas, y la premisa hermética "Como es arriba, es abajo", intento contar mi verdad: todos somos iguales, todos somos uno, (no) somos (de) aquí.',
            contactTitle: 'Estemos en contacto',
            contactText: 'Si puedo apoyarte de alguna manera, ser útil para tu proyecto o simplemente quieres conocerme, no dudes en ponerte en contacto conmigo. Por favor, proporciona cualquier información que creas que puede ser útil.',
            contactButton: 'Enviar mensaje'
          }
    },
    en: {
        message: {
            hello: 'Hello',
            contact: 'Contact',
            intro: 'Hola, I’m Juan',
            intro2: 'Human being, curious designer and digital creator.',
            intro2b: 'A resourceful kind of person who loves to research, ideate and develop solutions.',
            text1: 'I have been working in different fields, from programming to visual and product design, going through project management.',
            text2: 'I support projects combining research and systemic curiosity with trained instinct.',
            text3: 'First of all, I can say that I am a Human... ',
            text4: 'Sure I’m not an evolved jellyfish or a talking eggplant, but before anything else... I’m a Human with capital H, or at least I try to be one.',
            text5: 'Being a true Human demands self-discovery as the number one priority in life, a path that makes us aware of our light and present us the opportunity to embrace our darkness.',
            text6: 'I am a genuine being, with honest listening skills, lover of life. Happy by nature, curious and hungry for all kinds of knowledge.',
            text7: 'Gardening, illustration, cooking',
            text7b: '/* and eating */',
            text7c: 'are my passions. I find inspiration in vulnerability, in philosophy and theosophy, in sacred geometry and anthropological symbolisms.',
            text8: 'So, professionally speaking, I started my career as a Back-end developer but quickly finding in Front-end the possibility of creating visual impact. That search led me to delve into the audiovisual world and Product Design.',
            text9: 'Thanks to this broad perspective, I feed my intuition and search for beauty with mathematics and logic, I am detail-oriented with a pixel vision.',
            text10: 'I’ve developed and designed enterprise solutions, websites, videogames, tools and web apps for several industries.',
            text10b: 'Also I’ve co-founded 2 startups, I’ve participated and succeded in Start-Up Chile and its sequel Scale-Up, and I have been part of Seedstars World community in Latam & Switzerland.',
            text11: 'And now, Adventure calls!',
            text11b: 'In the middle of the weird 2020, my partner and I decided to shake our lives and move from the very South (Buenos Aires, Argentina) to the very North (Tallinn, Estonia).',
            text12: 'In this new context and joining forces with an old good friend, I’m back in the',
            text12b: 'studio',
            text12c: ', creating playful and digital experiences.',
            text13: 'Sama Sama is co-creating with',
            text13b: 'a program for mentoring +250 youngsters in 7 Estonian secondary schools, through the process of creating, designing and developing digital products.',
            text14: 'In parallel, I continue exploring and creating this illustrated Universe that I’ve called "Algo Particular" (Something Particular), a tool for sharing my point of view of Life and what it means to me, to be Alive.',
            text15: 'With very simple characters and situations, and the Hermetic premise "As above, so below", I’m trying to tell my truth: we are all the same, we are all one, we are (not from) here.',
            contactTitle: 'Let’s be in contact',
            contactText: 'If I can support you in any way, be useful to your project or you just want to meet, feel free to contact me. Please, provide any information you might think would be helpful.',
            contactButton: 'Send message'
          }
    }
  }
  
  // Initialize Lang
  const i18n = VueI18n.createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
  });

  // Initialize Vue
  Vue.createApp(VueApp).use(i18n).mount('#app');
  