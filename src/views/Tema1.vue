<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span.text-dark 1
      h1 Generalidades del turismo

    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-8.col-sm-8.col-8
        img(src='@/assets/curso/tema1/imagen1.jpg')
      .col-xxl-6.col-lg-6.col-md-10.col-sm-11.col-11
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          p Debido al carácter multifacético del turismo, se puede encontrar diferentes definiciones que han sido aportadas desde varias disciplinas como la economía, historia, psicología, ecología, geografía, ciencias políticas, administrativas, entre otras; sin embargo,  una de las primeras definiciones aceptadas mundialmente ha sido la de la Organización Mundial del Turismo (OMT, 1994), quien menciona que “el turismo comprende las actividades que realizan las personas durante sus viajes y estancias en lugares distintos a su entorno habitual, por un periodo de tiempo consecutivo inferior a un año, con fines de ocio, por negocios y otros”.
        p En el 2007, esta misma organización replanteó la definición agregando: “El turismo es un fenómeno social, cultural y económico relacionado con el movimiento de las personas a lugares que se encuentran fuera de su lugar de residencia habitual por motivos personales o de negocios/profesionales”.
      p El término hace entonces referencia al acto de visitar un destino por fuera del entorno habitual del sujeto e incluye la característica “movilidad” y el “carácter temporal” de los viajes.
      separador
      #objetivos.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
        h2 1.1 Objetivos, características y beneficios del turismo
      p Teniendo en cuenta los diferentes propósitos que enmarca el sector del turismo, se ha establecido como objetivos principales entre otros, los siguientes:
      .row.justify-content-center
        .col-xxl-3.col-lg-4.col-md-5.col-7.fondo2.mb-4
          h3.text-white.text-center.pt-2.pb-3.mb-0 Objetivos del turismo 
    //--tarjetas slide
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido     
              img(src='@/assets/curso/tema1/slidepos1.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide1.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos2.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide2.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos3.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide3.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos4.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide4.png')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-4
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              img(src='@/assets/curso/tema1/slidepos5.svg')
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/slide5.svg')})`}")
    p De igual forma, se ofrecen multiplicidad de beneficios como puede observarse en el siguiente recurso educativo:
    .row.justify-content-center
      .col-xxl-3.col-lg-4.col-md-5.col-7.fondo2.mb-4
        h3.text-white.text-center.pt-2.pb-3.mb-0 Beneficios del turismo

    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-10.col-sm-11.col-11.mb-5.mb-md-0
        LineaTiempoD
          p.text-small(numero="1" titulo="Impacto en población receptora") Ayuda a los residentes de los destinos a tener mejor calidad de vida y disminuir los niveles de pobreza, además de posibilitar el contacto con otras culturas y comunidades. 
          
          p.text-small(numero="2" titulo="Crecimiento económico e inversión") Promueve el crecimiento económico y la inversión local en infraestructura y edificaciones aptas para el turismo, y servicios relacionados con el gremio.

          p.text-small(numero="3" titulo="Generación de empleo") Genera oportunidades de empleo, bien sea de forma directa o indirecta, estableciéndose mediante las temporadas de demanda o durante todo el año, de acuerdo con el lugar de destino.
          
          p.text-small(numero="4" titulo="Desarrollo de actividades asociadas") Contribuye a un mayor desarrollo de otras actividades como la agricultura, pesca y artesanía en los destinos receptores.

          p.text-small(numero="5" titulo="Mejora en prestación de servicios") Los diferentes medios ofrecidos al turista como el de trasporte o de vías, mejoran en cuanto a la calidad y la frecuencia. 

          p.text-small(numero="6" titulo="Contribuye en la macroeconomía") Contribuye a la generación del PIB, balanza de pagos y otros indicadores macroeconómicos de diferentes países.
      .col-xxl-6.col-lg-6.col-md-8.col-sm-8.col-8
        img.mt-4(src='@/assets/curso/tema1/imagen2.jpg')
    .row.justify-content-center.mt-5
      .col-xxl-6.col-lg-6.col-md-8.col-sm-8.col-8
        img(src='@/assets/curso/tema1/imagen3.jpg')
      .col-xxl-6.col-lg-6.col-md-10.col-sm-11.col-11.mt-4
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Fenómeno social")
            .col-md-11.mb-4.mb-md-0
              p Surge a partir de la interacción social de individuos y/o grupos humanos.
          .row(titulo="Implica desplazamiento")
            .col-md-11.mb-4.mb-md-0
              span Desde el lugar de residencia habitual.
              br
              span Este desplazamiento es voluntario y temporal, debe ser elegido y realizado por voluntad propia. Los individuos o grupos deciden por ellos mismos cuándo y hacia dónde desplazarse. 
              br
              span Y puede realizarse de forma individual o grupal. 

          .row(titulo="Motivación por diferentes razones")
            .col-md-11.mb-4.mb-md-0
              p La motivación principal no es realizar una actividad lucrativa o remunerada: no se incluyen los desplazamientos que buscan recibir un sueldo, salario o retribución en el lugar de destino.
              p Sus motivaciones fundamentales son ejercer el derecho al ocio y hacer uso del tiempo libre e implican recreación, descanso, cultura y salud.
          .row(titulo="Interrelaciones de diferente índole")
            .col-md-11.mb-4.mb-md-0
              p Genera y se produce a través de interrelaciones de importancia social, económica y cultural: el gasto ejercido por los turistas impacta en la generación de empleos directos e indirectos en todos los sectores relacionados con la actividad.
          .row(titulo="Actividad multidisciplinaria y heterogénea")
            .col-md-11.mb-4.mb-md-0
              p Requiere la participación de diversos sectores económicos, productivos y sociales, a distintos niveles, es decir, gerenciales, técnicos y operativos.
      separador
      #elementos.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
        h2 1.2 Elementos básicos o factores que componen la actividad turística

    .row
      .col-xxl-12.col-lg-12.col-12.p-0
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figurainfo1.svg')

          .tarjeta.fondo4.p-3(x="56.4%" y="11%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 1. LA DEMANDA
            span Formada por el conjunto de consumidores de bienes y servicios turísticos que buscan satisfacer sus necesidades de viaje. Según la OMT, es el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades.

          .tarjeta.fondo4.p-3(x="56.4%" y="35.5%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 2. LA OFERTA
            span Son los productos y servicios que un destino pone a disposición del turista para que éste los adquiera al precio interno y por un periodo de tiempo determinado.

          .tarjeta.fondo4.p-3(x="56.4%" y="61%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 3. EL ESPACIO GEOGRÁFICO
            span Lugar donde se produce la interacción entre la oferta y la demanda, es decir donde se realiza la práctica de actividades turísticas. La planta turística y los atractivos turísticos son los elementos primordiales del espacio turístico.

          .tarjeta.fondo4.p-3(x="56.4%" y="82%" numero="+")
            .titulo-sexto.color-primario
              p.text-bold.mb-0 4. LOS OPERADORES DEL MERCADO
            span Son aquellas empresas y organismos que facilitan la correcta relación entre la oferta y la demanda, como ejemplo de ellos se pueden nombrar: organismos públicos y privados dedicados a la regulación y/o a la promoción del turismo, compañías de transporte y agencias de viajes.

    p Según la OMT (1998) “los operadores turísticos son aquellos agentes que participan en la actividad turística en calidad de intermediarios entre el consumidor final (el turista, la demanda turística) y el producto turístico (bien o servicio, destino turístico) aunque puede extender su acción intermediadora al resto de la oferta complementaria (restaurantes, hoteles, conjunto de oferta de alojamiento, etc.)".
    separador
    #prestadores.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.3 Prestadores de servicios turísticos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen4.jpg')})`}"
      )
      .bloque-texto-g__texto.py-5.px-4
        p.mb-0 Son todas las empresas que tienen contacto con los viajeros para proporcionarles diferentes bienes y servicios turísticos dentro de un territorio con atractivo especial. Para el caso de Colombia, todos deben contar con el Registro Nacional de Turismo y en lo posible cumplir con los requisitos de sostenibilidad del destino.

    p.mt-5 Los prestadores de servicios turísticos deben estar pendientes de que clientes o proveedores acaten las normas de operación local; adicionalmente deben asegurar la capacitación del personal de trabajo y hacer cumplir los principios de la actividad turística por parte de todos los visitantes. 
    p.mb-5 Los prestadores de este tipo de servicios, tiene funciones específicas para con los diferentes actores del proceso, entre las que se encuentran:

    .row
      .col-xxl-12.col-lg-12.col-12.p-0
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/figurainfo2.svg')

          div(x="13.2%" y="26.6%" tooltip="Click para leer mas..." numero="+")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-7
                h5.text-dark 1. Alojamiento y servicios de hospedaje
                p.text-dark Establecimiento abierto al público en general, dedicado a brindar hospedaje temporal mediante precio, con o sin otros servicios complementarios como alimentación, tours, spa entre otros.
                p.text-dark Puede ser un hotel, hotel-apartamento, hostal, pensión, casa rural, etc. 

              .col-xxl-5.col-lg-5.col-md-5.col-sm-4.col-4
                img(src='@/assets/curso/tema1/figuramodal1.svg')
          div(x="24.3%" y="32.2%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-7
                h5 2. Transporte
                p Es aquel servicio de alquiler de vehículos, con o sin conductor, que se facilita como parte de la actividad turística y que se presta bajo la responsabilidad de una empresa legalmente constituida para tales fines y debidamente habilitada en esta modalidad.
              .col-xxl-5.col-lg-5.col-md-5.col-sm-4.col-4
                img(src='@/assets/curso/tema1/figuramodal2.svg')

          div(x="34.6%" y="27.4%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-7
                h5.text-dark 3. Restaurantes o establecimientos de gastronomía
                p.text-dark Restaurantes o establecimientos de gastronomía: establecimientos comerciales cuya actividad económica está relacionada con la producción, servicio y venta de alimentos y/o bebidas para consumo. 
              .col-xxl-5.col-lg-5.col-md-5.col-sm-4.col-4
                img(src='@/assets/curso/tema1/figuramodal3.svg')

          div(x="61.2%" y="29.7%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-7
                h5 4. Agencias de viajes y turismo (vts, operadoras y mayoristas)
                p Agencias de viajes y turismo (vts, operadoras y mayoristas): son las empresas que se dedican profesionalmente al ejercicio de actividades turísticas dirigidas a la prestación de servicios, directamente o como intermediarios entre los viajeros y proveedores de los servicios.
                p Hay varios tipos:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    | Agencias de viajes y turismo: se dedican profesionalmente a vender, operar y organizar planes turísticos. 
                  li
                    i.lista-ul__vineta
                    | Agencias de viajes operadoras: se dedican profesionalmente a operar planes turísticos.
                  li 
                    i.lista-ul__vineta
                    | Agencias mayoristas, que se dedican profesionalmente a programar y organizar planes turísticos
              .col-xxl-4.col-lg-4.col-md-5.col-sm-4.col-4
                img(src='@/assets/curso/tema1/figuramodal4.svg')

          div(x="67.5%" y="28.8%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-7
                h5 5. Guías de turismo
                p Tienen como función orientar, conducir, instruir y asistir al turista, viajero o pasajero durante la ejecución del servicio contratado.
              .col-xxl-5.col-lg-5.col-md-5.col-sm-4.col-4
                img(src='@/assets/curso/tema1/figuramodal5.svg')

          div(x="90%" y="39.5%" tooltip="Click para leer mas...")
            .row.justify-content-center.align-items-center
              .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-7
                h5 6. Operador profesional de eventos 
                p Son Operadores Profesionales de Congresos, Ferias y Convenciones, las personas naturales o jurídicas legalmente constituidas que se dediquen a la organización de certámenes como congresos, convenciones, ferias, seminarios y reuniones similares, en sus etapas de gerenciamiento, planeación, promoción y realización, así como a la asesoría y/o producción de estos certámenes en forma total o parcial.
              .col-xxl-5.col-lg-5.col-md-5.col-sm-4.col-4
                img(src='@/assets/curso/tema1/figuramodal6.svg')

    separador
    #prestadores.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.4 Turista y sus motivaciones

    p Cualquier persona que se encuentre realizando un viaje (por cualquier motivo) entre lugares geográficamente distintos y fuera de su entorno habitual, se puede llamar viajero; sin embargo, cuando una persona se establece en otro lugar para trabajar, o porque son refugiados, diplomáticos o migrantes, no serán considerados viajeros.
    p Según esta definición y teniendo en cuenta que visitante es toda persona que se desplaza a una localidad donde no tiene fijada su residencia, Gurría (2004) categoriza estos viajeros en dos tipos (ver figura 1):
    .titulo-sexto.color-acento-contenido
      span.text-bold.mb-0 Figura 1 
      span Diferencias entre turista y excursionista.


    .row.mb-5.justify-content-center.align-items-center
      .col-xxl-4.col-xxl.pe-0.col-xxl.me-3.col-xxl.pb-4.col-xl-5.col-lg-6.col-md-8.col-sm-10.col-11.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/turista.svg')
          .tarjeta.fondo3
            ul.lista-ul--color.col-xxl.ps-4.pb-5.mb-5.col-xxl.pe-4.col-md.me-2.col-sm.ps-4
              li 
                i.lista-ul__vineta
                | Son visitantes que pernotan o amanecen en el lugar. 
              li
                i.lista-ul__vineta
                | Su estancia es superior o igual a 24 horas en el destino.
              li 
                i.lista-ul__vineta
                | Razones del viaje: recreo, vacaciones, salud, estudio, religión, deportes o negocios.

      .col-xxl-4.col-xxl.pe-0.col-xl-5.col-lg-6.col-md-8.col-md.px-0.col-sm-10.col-11.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/excursionista.svg')
          .tarjeta.fondo5
            ul.lista-ul--color.px-5.col-xxl.pb-4.col-xxl.mb-5.mb-5.col-xxl.pe-4.col-md.me-2
              li 
                i.lista-ul__vineta
                | Son los visitantes que se demoran menos de 24 horas en el destino.
              li
                i.lista-ul__vineta
                | Son viajeros que se desplazan a ciudades fronterizas, ya sea en su propio vehículo o en cruceros, a destinos de costa.
              li 
                i.lista-ul__vineta
                | Se excluyen a los viajeros en un país.

    .row.justify-content-center
      .col-xxl-12
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          .row.justify-content-center.align-items-center
            .col-xxl-1.col-xl-1.col-lg-2.col-md-3.col-sm-4.col-4
              img(src='@/assets/curso/tema1/figura1.svg')
            .col-xxl-11.col-xl-11.col-lg-10.col-md-9.col-sm-8.col-8
              h4 Motivación para realizar el viaje
              p Cada turista o excursionista a su vez, tiene diferentes motivaciones para realizar su viaje. En el contexto turístico, este término se define como el conjunto de necesidades o fuerzas psicológicas que “predisponen a una persona a participar en una actividad turística”. 

    .row.justify-content-center.my-5
      .col-xxl-6.col-xl-6.col-lg-6.col-md-8.col-sm-9.col-11
        img(src='@/assets/curso/tema1/piramide.svg')

    p Respecto a la satisfacción de necesidades, se ha hablado mucho en la literatura, sin embargo, el autor que ha sido más reconocido en el tema, ha sido Maslow, quien brindó una teoría psicológica a partir de la cual se diseñó la jerarquía de las necesidades humanas que incluye las de seguridad (protección, seguridad o refugio), las fisiológicas (hambre, descanso o sed), las necesidades de estima (autoestima, estatus o reconocimiento por los demás), las necesidades sociales (de amor o pertenencia), y las necesidades de autorrealización (de realización y desarrollo personal).  
    p Así pues, se puede decir que todos los viajes pueden tener un objetivo o finalidad diferente; habrá quienes busquen recreación, o quienes lo hagan por motivos profesionales o bien por otras razones como estudio, salud entre otros (ver tabla1).  
    .titulo-sexto.color-acento-contenido.my-5
      span.text-small.mb-0 Tabla 1 
      span.text-small.mb-0 Relación entre necesidades, motivación y referencia turísticas
    .tabla-c
      table
        tr.fondo6
          th 
            h4.text-center Necesidad
          td
            h4.text-center Motivación
          td
            h4.text-center Referencia turística
        tr
          th 
            p.text-bold.text-center Fisiológica
          td 
            p.text-center Relax
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Escapada
              li
                i.lista-ul__vineta
                | Relax
              li 
                i.lista-ul__vineta
                | Alivio de la tensión
              li 
                i.lista-ul__vineta
                | Deseo de sol
              li 
                i.lista-ul__vineta
                | Relajación mental y física
        tr
          th 
            p.text-bold.text-center Seguridad
          td 
            p.text-center Seguridad
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Salud
              li
                i.lista-ul__vineta
                | Diversión
              li 
                i.lista-ul__vineta
                | Mantenerse en forma
        tr
          th 
            p.text-bold.text-center Pertenencia
          td 
            p.text-center Amor
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Unión familiar
              li
                i.lista-ul__vineta
                | Relaciones sociales
              li 
                i.lista-ul__vineta
                | Compañerismo
              li 
                i.lista-ul__vineta
                | Mantenimiento de lazos personales
              li 
                i.lista-ul__vineta
                | Relaciones interpersonales
              li 
                i.lista-ul__vineta
                | Raíces y etnia
              li 
                i.lista-ul__vineta
                | Afecto familiar
        tr
          th 
            p.text-bold.text-center Estima
          td 
            p.text-center Obtención de status
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Auto convencimiento de logros
              li
                i.lista-ul__vineta
                | Prestigio
              li 
                i.lista-ul__vineta
                | Reconocimiento social
              li 
                i.lista-ul__vineta
                | Mejora del ego
              li 
                i.lista-ul__vineta
                | Reconocimiento profesional
              li 
                i.lista-ul__vineta
                | Desarrollo personal
              li 
                i.lista-ul__vineta
                | Status y prestigio
        tr
          th 
            p.text-bold.text-center Autodesarrollo
          td 
            p.text-center Ser sincero con uno mismo
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Exploración y autoevaluación
              li
                i.lista-ul__vineta
                | Autodescubrimiento 
              li 
                i.lista-ul__vineta
                | Satisfacción interna 
        tr
          th 
            p.text-bold.text-center Saber y entender
          td 
            p.text-center Conocimientos
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Cultura 
              li
                i.lista-ul__vineta
                | Educación 
              li 
                i.lista-ul__vineta
                | Pasión por viajar
              li 
                i.lista-ul__vineta
                | Interés en otras culturas
        tr
          th 
            p.text-bold.text-center Estética
          td 
            p.text-center Aprecio de la belleza
          td
            ul.lista-ul--color.otralista
              li 
                i.lista-ul__vineta
                | Paisajes
              li
                i.lista-ul__vineta
                | Medioambiente
              li 
                i.lista-ul__vineta
                | Manifestaciones culturales y artísticas
    p.my-5.text-center Nota. Adaptado de Gutiérrez y Bordas (1993) por Cordente Rodríguez, M; Mondéjar Jiménez, J.A; Esteban Talaya, A (s.f.).
    p.mt-5 Según la OMT, el perfil del turista ha ido evolucionando durante los últimos años. Hoy por hoy, se puede encontrar un viajero mucho más exigente, informado, digital y comprometido con el medio ambiente y el entorno. 
    p.mb-5 A pesar de que se siguen presentando las motivaciones descritas en la sección anterior, también se han venido presentando otras como la práctica de negocios, actividades saludables, formación o aprendizaje; actividades de sanación o espiritualidad y enriquecimiento cultural; todas ellas han dado lugar a nuevas tipologías de turista como puede apreciarse en el siguiente recurso educativo, se puede ver:

    //-slider    
    .tarjeta.tarjeta--azul.p-4.mb-5.fondo7
      SlyderA.pt-4(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista gastronómico
            p También llamado <i>“foodie”</i>, su viaje se basa en su pasión por la gastronomía. Les gusta conocer bares, <i>pubs</i> o restaurantes, degustando la comida local del país.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/gastronomico.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista cultural
            p Visita lugares donde la cultura y el patrimonio histórico-artístico son destacables. Son turistas con alta capacidad de gasto y altos niveles de educación que son capaces de estimular la actividad cultural de un destino turístico.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/cultural.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista de negocios y los nómadas digitales 
            p El turista de negocios es impulsado por su trabajo para viajar por negocios y reuniones. Los nómadas digitales trabajan como freelancers y encuentran en los viajes una fuente de inspiración para poder trabajar. Este colectivo dispone de cortos periodos de tiempo para conocer nuevos destinos.

          .col-md-7
            figure
              img(src='@/assets/curso/tema1/nomada.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista comprador
            p La principal motivación para viajar es adquirir productos por fuera de su país de origen. En el <i>"shopping"</i> se prioriza la calidad tanto en los comercios donde se realizan las compras como en el tiempo que se dedica a las mismas.
            p Este tipo de turistas combina su viajes con el turismo cultural conociendo así los lugares más importantes del destino, así como sus mejores lugares para comprar.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/comprador.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 El turista aventurero
            p Es el interesado por las nuevas sensaciones; cuenta con un gran sentido de libertad que lo mueve a conocer el mundo sin mucha planificación.
            p Busca recreación activa para su entretenimiento, por ello normalmente se le asocia con actividades al aire libre.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/aventurero.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Mascotas con dueño
            p Dentro de los nuevos perfiles de viajeros ocupa un lugar cada vez más importante el de los turistas que viajan con mascotas, o más bien, las mascotas que viajan con sus dueños, ya que es el animal de compañía el verdadero protagonista del viaje y el que condiciona el destino, el alojamiento elegido y el transporte.
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/mascotas.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 <i>PANK</i>: tías con sobrinos
            p Las <i>PANK (Professional Aunt, No Kids)</i> son mujeres que no tienen hijos pero que se llevan de viaje a sus sobrinos. 
            p Es una tendencia al alza que ya se está convirtiendo en todo un nicho de mercado, sobre todo en EEUU y Europa.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/pank.png')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Viajeros solos
            p Con edades entre los 35 y los 60 en busca de destinos poco convencionales durante cualquier época del año.
            p Ese es el perfil predominante del viajero single, un nuevo tipo de turista que apuesta por descubrir el mundo en solitario.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema1/solos.png')
    separador
    #evolucion.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.5 Evolución del turismo
    p.mb-5 Para el caso colombiano, el turismo comenzó a desarrollarse en mayor medida con la llegada del tren a comienzos del siglo XX, lo que permitió que varias familias pudieran realizar viajes cortos de descanso y diversión a los destinos cercanos a sus hogares. Lo anterior también impulsó la organización de “tours”, ya que algunas personas comenzaron a ofrecer viajes incluyendo los pasajes de tren, alimentación, alojamientos en establecimientos como fincas y hoteles, y visitas a monumentos y recintos religiosos. Se podrá entender un poco más sobre la evolución del turismo con la siguiente línea del tiempo:
    .row.justify-content-center
      .col-xxl-10.col-lg-10.col-md-11.col-11.fondo9
        LineaTiempoB.m-5(:datos="datosLineaTiempoB")    

    p.my-5 Así surgieron las primeras agencias de viajes, que posteriormente a mediados de siglo, con la llegada de la aviación al país, crecieron en mayor medida, porque tuvieron la oportunidad de incursionar en el ámbito internacional.
    .row.justify-content-around.align-items-center
      .col-xxl-10.col-xl-10.col-11.col-md-11
        .tarjeta.fondo8.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Se invita a conocer un poco más sobre el turismo, revisando el siguiente artículo publicado por El Tiempo el 16 de octubre del 2008, que agrupa los 25 hitos de la historia del turismo colombiano, y que puede consultar en el siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/25 hitos de la historia del turismo colombiano.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.my-5 En cuanto a las tendencias que rigen el turismo, se encuentra que la FITUR (2021), que es la feria de turismo más importante de España y Procolombia (2021), indica que entre las preferencias del turismo en los años entrantes estarán:
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-6.col-sm-10.col-11
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Ecoturismo y turismo sostenible") Un modo de hacer turismo que consiste en el respeto por el medio ambiente y el planeta, acorde con los principios de sostenibilidad y la conservación de los recursos de los destinos turísticos.

          p.text-small(numero="2" titulo="<i>Mindful Travel</i>") Es un modo de viajar relacionado con el bienestar, autocuidado y la transformación personal. Son viajes tranquilos donde no se cumple con horarios estrictos ya que su principal objetivo es que los turistas, realmente conecten con el destino, con su cultura, sus costumbres y tradiciones.

          p.text-small(numero="3" titulo="Experiencias turísticas") Los turistas buscan experiencias memorables, sentir emociones y vivir aventuras placenteras en cada uno de sus viajes. El viajero experto busca actividades distintas, destinos turísticos que ofrezcan atractivos y experiencias diferentes, lejos del turismo masivo y en busca de vivencias en lugares especiales.

          
          p.text-small(numero="4" titulo="Turismo de viajes nómadas") Son los empresarios y empleados que se desplazan hacia cualquier destino con la intención de trabajar a distancia. Este tipo de turismo también combinado con los viajes, es una oportunidad excelente para que los destinos ofrezcan espacios ideales para trabajar y a la vez viajar. 
      .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-8
        img.mt-4(src="@/assets/curso/tema1/imagen5.jpg")
    p.my-5 También se puede encontrar nuevas preferencias de los turistas a la hora de viajar como:
    .row.justify-content-center.align-items-center
      .col-xxl-6.col-lg-6.col-md-6.col-sm-7.col-8
        img.mb-4(src="@/assets/curso/tema1/imagen6.jpg")
      .col-xxl-6.col-lg-6.col-md-6.col-sm-10.col-11
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Preferencia por destinos turísticos no masificados y viajes de una corta estancia en fechas de baja demanda.
          li
            i.fas.fa-check
            | Búsqueda de alojamientos de pequeño tamaño y sin espacios compartidos, como viviendas de turismo rural, apartamentos turísticos y bungalow.
          li 
            i.fas.fa-check
            | Interés en destinos de naturaleza, donde sea posible la realización de actividades al aire libre y espacios abiertos.
          li 
            i.fas.fa-check
            | Reservas a última hora y políticas que permitan la cancelación gratuita.
          li 
            i.fas.fa-check
            | Actividades turísticas en grupos reducidos.
          li 
            i.fas.fa-check
            | Turismo individual.
    separador
    #morfologia.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.6 Morfología del turismo
    p El turismo se puede clasificar según el tipo de desplazamiento que se haga, como se puede apreciar en la siguiente figura 2:
    .titulo-sexto.color-acento-contenido
      span.text-bold.mb-0 Figura 2 
      span Clasificación de los tipos de turismo, según el desplazamiento

    .row.mb-5.justificar.align-items-center
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-6.margenesx
        .tarjeta-avatar.tamanotipo.fondo10
          .tarjeta
            p.px-5.ms-3 Realizado por los no residentes, en el territorio económico del país.

      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-6.margenesx
        .tarjeta-avatar.fondo11.tamanotipo
          .tarjeta
            p.px-5.ms-3 Residentes de propio país se dirigen a otros países.
      .col-xxl-3.col-xl-3.col-lg-3.col-md-6.col-sm-6.col-6.margenesx
        .tarjeta-avatar.tamanotipo.fondo12
          .tarjeta
            p.px-5.ms-3 El realizado por los residentes en el territorio económico del país.
    p.my-5 En cuanto al turismo según la actividad desarrollada, en el siguiente recurso se podrá consultar con mayor detalle, la clasificación respectiva:
    .row.justify-content-center
      .col-xxl-6.col-xl-7.col-lg-8.col-md-10.col-12.fondo2.mb-5
        h3.text-white.text-center.pt-2.pb-3.mb-0 Tipos de turismo según la actividad desarrollada
    //-slider    
    .tarjeta.tarjeta--azul.p-4.mb-5.fondo13
      SlyderA.pt-4.otroslide(tipo="b")
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo sostenible
            p El turismo que tiene plenamente en cuenta las repercusiones actuales y futuras, económicas, sociales y medioambientales para satisfacer las necesidades de los visitantes, de la industria, del entorno y de las comunidades anfitrionas. 
            p Poco a poco la sociedad es cada vez más consciente del impacto que sus acciones tienen en el entorno y el turismo no es una excepción.
            p Muchas personas buscan que sus vacaciones no tengan repercusiones en el medio ambiente o al menos reducirlas al máximo.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/sostenible.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo rural
            p Ofrece al turista la oportunidad de experimentar el encuentro con las diferentes formas de vivir de las comunidades que cohabitan en un ambiente rural y además lo sensibiliza sobre el respeto y valor de su identidad cultural.
            p Este tipo de turismo de complementa con el agroturismo, que consiste en involucras al turista, con las labores del campo y agrícolas, en donde se puede aprender técnicas, cultura y vivir en el entorno natural de conservación.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/rural.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo de aventura
            p Son los viajes que tienen como fin, realizar actividades recreativas, asociadas a desafíos impuestos por la naturaleza.
            p En tierra, agua, aire, disfrutar de: ciclismo de montaña, alpinismo, <i>rappel</i>, espeleísmo, cabalgata, descenso ríos, pesca recreativa, <i>rafting</i> / kayakismo, vuelo en parapente vuelo en ala delta y <i>bungee jumping</i>.

          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/aventura.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo gastronómico
            p Es un tipo de turismo emergente que atrae a viajeros que no solo buscan comer bien, sino descubrir que hay detrás de la gastronomía de un destino, vivir experiencias culinarias, recorrer la zona con rutas de vinos y tapas y visitar mercados en los que descubrir productos autóctonos.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/gastro.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo de negocios
            p Los viajes de negocios, MICE (por sus siglas en ingles,<i> Meetings, Incentives, Conventions and Exhibitions</i>),se refiere a los traslados de una ciudad o país a otra, relacionados con actividades corporativas o laborales. Este puede ser individual o grupal.
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right
                | Es utilizado por empresarios, ejecutivos, comerciales y otros profesionales para cerrar negocios, captar clientes o prestar servicios.
              li
                i.fas.fa-caret-right
                | El cliente suele ser de alto poder adquisitivo.
              li 
                i.fas.fa-caret-right
                | Turismo fundamentalmente urbano
              li 
                i.fas.fa-caret-right
                | Se destacan las reuniones, congresos, convenciones, viajes de incentivos.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/negocios.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo de bienestar
            p Este incremento responde, sobre todo, a un cambio de mentalidad en la sociedad. Las personas están más implicadas en cuestiones relacionadas con su bienestar físico y mental. De ahí que cada vez surjan más ofertas de viajes que incluyen retiros de yoga, una alimentación saludable, tratamientos <i>wellness</i> y demás actividades relacionadas con el turismo de bienestar.
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/bienestar.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo sol y playa
            p Aunque generalmente es masivo, de alto consumo y tiene un impacto considerable sobre los ecosistemas y la cultura anfitriona; hoy por hoy este tipo de turismo se viene combinando con la sostenibilidad, iniciativas de cuidados del medio ambiente y los viajes de bienestar, con la intención de disminuir los impactos adversos y cuidar de los ecosistemas.

          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/solyplaya.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 El turismo urbano
            p Son los viajes realizados a las grandes ciudades y centros urbanos del mundo. El turista busca grandes aeropuertos con vuelos directos a cualquier parte del mundo, amplia infraestructura hotelera (adaptada a todas las necesidades) y una gran oferta gastronómica y actividades de ocio. El turismo urbano engloba a su vez relaciones de negocios, turismo educativo y turismo cultural puesto que las ciudades aglutinan una variada y robusta oferta de ocio y entretenimiento.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/noche.png')
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo médico/salud
            p Es aquel en el que el turista se moviliza con la finalidad de realizar una consulta médica o someterse a un proceso quirúrgico al que no tiene acceso en su lugar de origen. Dentro de este grupo, la cirugía estética es una de las más demandadas, aunque puede tratarse de cualquier procedimiento o consulta.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/salud.png') 
        .row.justify-content-center
          .col-lg-4.col-md-10.mb-4.mb-md-0
            h4 Turismo educativo
            p Es aquel en el que el turista se moviliza con la finalidad de realizar una consulta médica o someterse a un proceso quirúrgico al que no tiene acceso en su lugar de origen. Dentro de este grupo, la cirugía estética es una de las más demandadas, aunque puede tratarse de cualquier procedimiento o consulta.
        
          .col-lg-7.col-md-8
            figure
              img(src='@/assets/curso/tema1/educativo.png') 

    separador
    #leyes.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.7 Leyes en turismo
    p El turismo no está exento de la aplicación de leyes y normativas que regulan la industria de este sector, desde 1996 se ha ido reconociendo no sólo su importancia, sino también la reglamentación que favorece el servicio, y el renglón económico al que pertenece y que genera un importante aporte a la economía del país. Las principales leyes que enmarcan la industria del turismo son (ver tabla 2):

    .titulo-sexto.color-acento-contenido.my-5
      span.text-small.mb-0 Tabla 2 
      span.text-small.mb-0 Normatividad que regula el sector turístico
    .tabla-c
      table
        tr.fondo14
          th 
            h4.text-center.text-white 
          td
            h4.text-center.text-white Ley 300 de 1996
          td
            h4.text-center.text-white Ley 1101 de 2006
          td
            h4.text-center.text-white Ley 1558 de 2012
          td
            h4.text-center.text-white Ley 2068 de 2020
        tr
          th 
            h4.text-center Objeto de la ley
          td 
            p Ley general del turismo, reconoce la importancia del turismo para el desarrollo nacional.
          td
            p Modifica la ley 300 de 1996 y crea el impuesto nacional con destino al turismo como inversión social mediante la promoción y el fortalecimiento de la competitividad que comprende la capacitación y la calidad turísticas.
          td
            p Fomenta, el desarrollo, la promoción, la competitividad del sector y la regulación de la actividad turística, mediante el aprovechamiento de los recursos y atractivos turísticos nacionales.
          td
            p Fomenta la sostenibilidad e implementa mecanismos para la conservación, protección y aprovechamiento de los destinos y atractivos turísticos, formaliza la competitividad del sector y promueve la recuperación de la industria turística, mediante incentivos, la calidad y el impulso de oportunidades del sector.
        tr
          th 
            h4.text-center Concepción del turismo
          td 
            p Una industria esencial para el desarrollo del país con una función social.
          td
            p Una industria esencial para el desarrollo del país con una función social.
          td
            p El turismo se concibe, como una industria esencial para el desarrollo del país con una función social, una actividad comercial o industrial.
          td
            p Un sector esencial para el desarrollo del país con funciones económicas, sociales y ambientales que se debe reactivar y velar por su crecimiento.
    .row.ampliarambos.fondo15
      .col-xxl-12.px-5
        p.my-5.text-center Nota. SENA (2022).
        p.mb-5 En relación con la ley 1558 de 2012, como ya se indicó, su objetivo fue conseguir más recursos para promoción y competitividad a partir del pago de impuestos de los prestadores de servicios turísticos. Teniendo en cuenta que estos recursos se destinan a:
        .row.justify-content-center
          .col-xxl-3.col-xl-3.col-lg-3.col-md-4.col-sm-4.col-5
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Promoción nacional e internacional.
              li
                i.fas.fa-check
                | Competitividad.
              li 
                i.fas.fa-check
                | Prevención del turismo sexual infantil.     
          .col-xxl-7.col-xl-7.col-lg-7.col-md-6.col-sm-6.col-5
            p Para recolectarlos se crea el Fondo de Promoción Turística que se encarga de administrar el recaudo del impuesto al turismo, los recursos que entran a financiar la infraestructura turística, y también el dinero que se invertirá posteriormente en los temas relacionados con la promoción y la competitividad turística de los destinos.
        .cajon.color-primario.p-4.mb-4.mt-4.fondo1
          p En esta ley se deja determinado el cumplimiento obligatorio para los prestadores de servicios turísticos en cuanto a la inscripción al Registro Nacional de Turismo, que es el documento legal que les confiere el permiso a estas empresas para que desempeñen su función y también para que puedan acceder a las diferentes fuentes de apoyo del Gobierno Nacional y sus programas regionales.
        p.my-5 Este Registro Nacional de Turismo, brinda unos beneficios, entre los que se puede encontrar:
        .titulo-sexto.color-acento-contenido
          span.text-bold.mb-0 Figura 3 
          span Beneficios Registro Nacional de Turismo
        .row.justify-content-center
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6
            img(src='@/assets/curso/tema1/beneficio1.svg')
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6
            img(src='@/assets/curso/tema1/beneficio2.svg')
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6
            img(src='@/assets/curso/tema1/beneficio3.svg')
          .col-xxl-2.col-xl-3.col-lg-3.col-md-5.col-sm-5.col-6
            img.anchoimg(src='@/assets/curso/tema1/beneficio4.svg')
        p.text-center.mt-5 Nota. SENA (2022)
    p.mb-5 De manera adicional, en esta misma ley se generaron varios proyectos relacionados con el gremio, como puede verse a continuación:

    TabsC.color-primario
      .py-3.py-md-4(titulo="Proyectos generados en la ley 1558 de 2012 de turismo")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            p Comités locales para la Organización de las Playas  que divide las zonas así:
            ul.lista-ul--color
              li 
                i.fas.fa-caret-right
                | Zonas destinadas al baño y al descanso.
              li
                i.fas.fa-caret-right
                | Zonas destinadas a la recreación.
              li 
                i.fas.fa-caret-right
                | Zonas destinadas a las ventas de bienes de consumo. 
              li 
                i.fas.fa-caret-right
                | Zonas destinadas a la prestación de otros servicios relacionados con las actividades de aprovechamiento del tiempo libre que desarrollen los usuarios de las playas.
              li 
                i.fas.fa-caret-right
                | Aprovechamiento del tiempo libre que desarrollen los usuarios de las playas.
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/ley1.jpg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Programas de inversión social en las comunidades")
        .row.justify-content-around
          .col-md-7
            p Teniendo especial cuidado aquellas comunidades/personas, en condición de vulnerabilidad.
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/ley2.jpg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Destinación al turismo de bienes incautados al narcotráfico")
        .row.justify-content-around
          .col-md-7.mb-4.mb-md-0
            p Los bienes inmuebles con vocación turística incautados por delitos de narcotráfico, serán administrados por el Fondo Nacional de Turismo o la entidad pública que este contrate.
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/ley3.jpg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Medalla al mérito turístico")
        .row.justify-content-around
          .col-md-7
            p Esta medalla, tiene como fin el reconocimiento a los prestadores de servicios turísticos que se destaquen por su innovación, promoción o internacionalización del turismo otorgada por el Ministerio de Comercio, Industria y Turismo.
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/ley4.jpg', alt='Texto que describa la imagen')

    p.mt-5 La última ley generada para regular las actividades del sector es la 2060 de 2020, esta ley modifica el programa de apoyo al empleo formal PAEF y el programa de apoyo para el pago de la prima de servicios PAP.
    p.mb-5 Entre sus objetivos principales está fortalecer la sostenibilidad, la formalización y la competitividad del sector y promover la reactivación del turismo, para consolidar el país como un destino altamente reconocido, sostenible, responsable y de alta calidad. Además de tener como propósito fundamental, reactivar económicamente al sector después de un año de pandemia, combinando medidas de corto, mediano y largo plazo.
    p.mb-5 Entre las medidas tributarias transitorias de la ley y que serán de gran ayuda se encuentran las indicadas en la siguiente figura 4:
    .titulo-sexto.color-acento-contenido
      span.text-bold.mb-0 Figura 4 
      span  Medidas tributarias transitorias en la Ley 2060 de 2020 de Turismo

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Prehistoria</p>',
        texto:
          '<p style="color: #111E61;">Primeros desplazamientos por cuestiones climáticas, de alimentación y presiones de grupos.</p>',
        icono: require('@/assets/curso/tema1/prehistoria.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Edad antigua</p>',
        texto:
          '<p style="color: #111E61;">Aparecen actividades de tiempo libre y de ocio creativo en la Antigua Grecia. Con la cultura Romana inician las primeras actividades de termalismo. Primeros viajes hacia el mar en época dorada de la antigua Roma, así como las actividades de teatro.</p>',
        icono: require('@/assets/curso/tema1/antigua.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Edad media</p>',
        texto:
          '<ul style="list-style-type: disc; margin-left:1em; color:#008BD2;"><li><p style="color: #111E61;">Primeros peregrinaciones hacia lugares cristianos.</p></li><li><p style="color: #111E61;">Surgen las Cruzadas con el objetivo de recuperar territorios cristianos invadidos por los árabes.</p></li><li><p style="color: #111E61;">Primeros mapas y rutas de caminos de peregrinación.</p></li><li><p style="color: #111E61;">Nacen los refugios y hospedajes en dichos caminos por Europa.</p></li></ul>',
        icono: require('@/assets/curso/tema1/media.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Edad moderna</p>',
        texto:
          '<p style="color: #111E61;">Aparecen las primeras formas de alojamiento y surge el concepto de Hotel. Por cuenta de los viajes a América, aparece la geografía como ciencia. Surgen las expediciones para jóvenes aristócratas <i>“El Grand Tour”</i>.Aumenta la demanda de visitas a aguas termales.</p>',
        icono: require('@/assets/curso/tema1/moderna.png'),
      },
      {
        titulo:
          '<p style="color: #111E61; font-weight: 700;">Edad contemporánea</p>',
        texto:
          '<p style="color: #111E61;">Revolución industrial que aumenta actividades de tiempo libre y viajes. El inglés Thomas Cook organiza el primer viaje y crea su agencia de viajes. Se fortalecen hoteles y la administración en este campo. Se potencializan los viajes en automóvil y avión. Se universaliza el mercado turístico a partir de la apertura de fronteras.</p>',
        icono: require('@/assets/curso/tema1/contemporanea.png'),
      },
      {
        titulo: '<p style="color: #111E61; font-weight: 700;">Siglo XXI</p>',
        texto:
          '<p style="color: #111E61;">Aumentan los viajes a destinos como Asia Central y el Pacífico. Entra el auge del Turismo de aventura y de naturaleza. Con las tendencias del siglo XXI se potencializa el turismo experiencial. En turismo de sol y playa, los viajes se dirigen hacia lugares lejanos.</p>',
        icono: require('@/assets/curso/tema1/xxi.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
