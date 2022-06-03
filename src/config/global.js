export default {
  global: {
    componenteFormativo: 'Diseño de experiencias gastronómicas',
    descripcionCurso:
      'Actualmente, destinos de todo el mundo diseñan estrategias para potenciar la identidad gastronómica de sus territorios e impulsar propuestas que conlleven a los turistas a querer profundizar en la cultura gastronómica de los lugares que visita. Así, la gastronomía ha tomado relevancia, en la diferenciación de los destinos y del turismo gastronómico convirtiéndose en un segmento de mercado, enfocado en generar experiencias.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La gastronomía en la industria del turismo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de alimentos  ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Propiedades organolépticas de los alimentos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Parámetros de inocuidad alimentaria  ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Caracterización de menús ',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Caracterización de bebidas ',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Emplatados y presentación de platos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Menaje ',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Tipos de servicio en un restaurante',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Mercadeo digital para restaurantes',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Costos para restaurantes',
            hash: 't_1_10',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Experiencia Gastronómicas  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de experiencias gastronómicas      ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Determinantes de una experiencia gastronómica memorable   ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Pasos para crear una experiencia memorable ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Experiencias gastronómicas online  ',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Digitalización de las experiencias gastronómicas    ',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bartalent Lab (sf).Top 3 plataformas online para dar visibilidad a tu restaurante. ',
      link:
        'https://www.bartalentlab.com/degustanews/hosteleria-digital/hosteleria-digital/degustanewstendenciashosteleria-digitaltop-3-plataformas-online-para-dar-visibilidad-a-tu-restaurante',
    },
    {
      referencia:
        'Basque Culinary Center (2018), Future of Food Report for 2050.',
      link:
        'http://projectgastronomia.org/uploads/categories/FUTURE_FOOD_REPORT_2050-Reduced.pdf  ',
    },
    {
      referencia:
        'En la Cocina, Magazine (sf). Cómo diseñar la carta de un restaurante. ',
      link:
        'https://enlacocina.telemesa.es/marketing-restaurantes/como-disenar-la-carta-de-un-restaurante/ ',
    },
    {
      referencia:
        'González Ramos, E (2019). La experiencia de cliente en el sector gastronómico. Facultad de Ciencias Económicas y Empresariales. Universidad Pontificia Comillas. ',
      link: 'https://repositorio.comillas.edu/rest/bitstreams/272538/retrieve ',
    },
    {
      referencia:
        'Kotler, P. (1973). Atmospherics as a Mercadeo Tool. Journal of Retailing, 49 (4).',
    },
    {
      referencia:
        'Magazinehorse (2015). Experiencias gastronómicas que estimulan cada uno de los sentidos. ',
      link:
        'https://www.magazinehorse.com/experiencias-gastronomicas-que-estimulan-cada-uno-de-los-sentidos/ ',
    },
    {
      referencia:
        'Morillo Moreno, M (2009). Costos del servicio de alimentos y bebidas en establecimientos de alojamientos turísticos Visión Gerencial, núm. 2, pp. 304-327 Universidad de los Andes Mérida, Venezuela.',
      link: 'https://www.redalyc.org/pdf/4655/465545881013.pdf ',
    },
    {
      referencia:
        'Organización Mundial del Turismo (2021). Guía para el desarrollo del turismo gastronómico. ',
      link: 'https://www.e-unwto.org/doi/pdf/10.18111/9789284420995',
    },
    {
      referencia:
        'Ocampo A (2018). ¿Por qué el menaje es el elemento diferenciador de su restaurante?  ',
      link:
        'https://www.revistalabarra.com/campanias/vajillas-corona/el-menaje-como-elemento-diferenciador-de-su-restaurante/ ',
    },

    {
      referencia:
        'Ortega Reina, F (sf). ¿Qué es una experiencia gastronómica? Definición, Ideas, Precios y Ejemplos. ',
      link: 'https://ingenieriademenu.com/experiencia-gastronomica/ ',
    },
    {
      referencia:
        'Salazar A (2017). Especial: conozca los diferentes tipos de menú. Revista La Barra. ',
      link:
        'https://www.revistalabarra.com/especial-conozca-los-diferentes-tipos-menu/',
    },
    {
      referencia:
        'Servicio Nacional de Turismo – Sernatur (2017). Manual de diseño experiencias turísticas. Subdirección de Desarrollo-Chile. ',
      link:
        'https://www.sernatur.cl/wp-content/uploads/2018/11/MDD-Manual-de-Experiencias-Turi%CC%81sticas-1.pdf ',
    },
    {
      referencia:
        'Subdirección de Salud Nutricional, Alimentos y Bebidas (2018). Guía de inocuidad de alimentos y bebidas para restaurantes o establecimientos gastronómicos. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-establecimientos-gastronomicos-restaurantes.pdf  ',
    },
  ],
  glosario: [
    {
      termino: 'Digitalización',
      significado:
        'Es el proceso de transformar procesos analógicos y objetos físicos en digitales.',
    },
    {
      termino: 'Gastronomía',
      significado:
        'Conjunto de conocimientos y actividades que están relacionados con los ingredientes, recetas y técnicas de la culinaria, así como con su evolución histórica.',
    },
    {
      termino: 'Menaje ',
      significado:
        'Todos los utensilios, elementos y material profesional, empleados para el servicio de alimentos y bebidas',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
  ],
  complementario: [
    {
      texto:
        'Organización Mundial del Turismo y Basque Culinary Center (2021). Guía para el desarrollo del turismo gastronómico.',
      tipo: 'Documento Guía',
      link: 'https://www.e-unwto.org/doi/pdf/10.18111/9789284420995 ',
    },
    {
      texto:
        'Guía de inocuidad de alimentos y bebidas para restaurantes o establecimientos gastronómicos. Subdirección de Salud Nutricional, Alimentos y Bebidas. Bogotá D.C. 2017',
      tipo: 'Documento Guía',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-establecimientos-gastronomicos-restaurantes.pdf ',
    },
    {
      texto:
        'De Suremain, C.E (2017). Cuando la alimentación se hace patrimonio. Rutas gastronómicas, globalización y desarrollo local (México). Trace (Méx. DF) n.72, pp.165-181.  ',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.mx/scielo.php?pid=S0185-62862017000200165&script=sci_abstract&tlng=pt ',
    },
    {
      texto:
        'Plate like a pro with these quick and easy dinner party plating tricks | Food Hacks by So Yummy. [Vídeo] 2022.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=02Brgs60BiY&t=8s ',
    },
    {
      texto:
        'Costos del servicio de alimentos y bebidas en establecimientos de alojamientos turísticos Visión Gerencial, núm. 2, pp. 304-327 Universidad de los Andes Mérida, Venezuela.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/4655/465545881013.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Fabio Alberto Ramírez Ayala',
        cargo: 'Experto temático',
        centro: 'Regional Tolima. Centro Comercio y Servicios.',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Experto temático',
        centro: 'Regional Tolima. Centro Comercio y Servicios.',
      },
      {
        nombre: 'Luisa Fernanda Posada Hincapié',
        cargo: 'Experto temático',
        centro: 'Regional Quindío. Centro de Comercio, Industria y Turismo',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital. Centro de Gestión Industrial.',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander. Centro de la Industria, la Empresa y los Servicios.',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital. Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Fabian Zarate'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
