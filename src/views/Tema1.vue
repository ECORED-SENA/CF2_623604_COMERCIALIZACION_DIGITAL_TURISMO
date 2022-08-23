<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La gastronomía en la industria del turismo
    p En los últimos años los destinos turísticos han encontrado en la gastronomía una oportunidad para destacar y brindar un mayor valor a la experiencia turística. Este tema se ha vuelto una poderosa motivación para viajar, ya que el comer no solo se percibe como una necesidad, sino como una experiencia estimulante que produce memorias placenteras y duraderas.
    .row.justify-content-center(data-aos="fade-up")
      .col-lg-6
        img(src='@/assets/curso/tema1/1.png', alt='Texto que describa la imagen')
      .col-lg-6.mt-3
        p Todo ello ha influido en que la gastronomía se haya convertido en uno de los segmentos más dinámicos y con mayor crecimiento de la industria turística, y se debe en gran parte, a que permite a los turistas conectar con lo local de una manera más experiencial y participativa. 
        .row.color1.justify-content-center
          .col-lg-11
            p.p-2 Todos tenemos necesidad de comer y dentro de los viajes, buscamos alimentos que puedan saciar esa necesidad; sin embargo, no todos los turistas buscan viajes donde la gastronomía influya decisivamente en la elección del destino; por tanto, este tipo de turismo es aquel donde el visitante, realmente desea saciar su apetito hedónico y cultural, más allá de lo fisiológico; es aquel basado en la intención de conocer, aprender, degustar y disfrutar ante todo de la cultura gastronómica del destino.
    .row.mt-5(data-aos="fade-up")
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-4.ttt
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
        )
          .imagen-superior.position-absolute(style='bottom:0 ; left: 51% ; z-index: 1' ): img(src='@/assets/curso/tema1/333.png' style='width: 350px')
        .bloque-texto-g__texto.p-5
          h4 Turismo gastronómico
          br
          br
          p El destino se convierte en el eje central de la oferta gastronómica, ya que no solo aporta los productos tradicionales, sino también los paisajes, la cultura, técnicas y platos que definen dicha cultura y que constituyen las experiencias turísticas que se le brindan al visitante.
    p.mt-4 Con esto claro, también podemos entender que la gastronomía contribuye a la sostenibilidad de un destino, ya que para transformar un producto agroalimentario en recurso turístico, se debe velar por un correcto mantenimiento del patrimonio gastronómico a través de la investigación, la innovación, el profesionalismo y las buenas prácticas; que posteriormente impacten en la economía y la cultura del lugar, dando a conocer gran cantidad de tradiciones, costumbres y aspectos relacionados con la forma de vivir de los residentes del destino.
    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Hoy día una buena oferta gastronómica no se puede quedar solo en la comida, esta tiene que estar rodeada de una atmósfera, una decoración y una ambientación adecuada que aporte originalidad, y que acerque la cocina al turista para que obtenga una conexión no solo con lo local, sino también con los cocineros y quienes aportan su profesionalismo al sector. 
          p En Colombia ya se han implementado varias rutas gastronómicas que invitan al turista a recorrer y conocer la comida regional de manera guiada y ordenada; así mismo incentivan a los extranjeros a tener una experiencia distinta y comprender otras maneras de ver el mundo.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1	Tipos de alimentos            
    .row.justify-content-center(data-aos="fade-up")
      .col-lg-6
        img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
      .col-lg-6.mt-4
        .row.justify-content-center.color2
          .col-lg-11
            p.p-3 Un alimento es cualquier sustancia de naturaleza compleja que es consumida por los seres vivos para mantener las funciones vitales del cuerpo y reponer lo que se pierde en la actividad física del día a día; sus sustancias son las encargadas de ayudar al ser humano en la formación de algunos tejidos y permitir la locomoción y calor en el cuerpo; adicional a ello, contienen nutrientes y no-nutrientes, como la fibra vegetal que favorece el funcionamiento de la digestión.
        p.mt-2 Casi todos los alimentos son de origen animal o vegetal, aunque existen algunos que no provienen de estas fuentes como los hongos comestibles, incluidos los champiñones y las bacterias que son usadas en la preparación de alimentos encurtidos y fermentados como pan con levadura, vino, cerveza, queso, pepinillos y yogur. Por otro lado, no se consideran alimentos las sustancias que no se ingieren o que, una vez ingeridas, alteran las funciones metabólicas del organismo como la goma de mascar, el tabaco, los medicamentos y demás drogas.
    .row.justify-content-center.mt-4
      .col-lg-6
        p En cuanto al valor nutritivo de los alimentos, se puede decir que éste depende de la cantidad y calidad de sus componentes y de la presencia o ausencia de sustancias que afecten a su utilización nutritiva (digestibilidad, absorción o metabolismo) o que tengan efectos tóxicos (Clínica Universidad de Navarra, sf.) 
        p La ausencia o disminución de nutrientes en el organismo, puede ocasionar enfermedades después de transcurrido un determinado tiempo, por ello se deben tener presentes los nutrientes esenciales que se deben consumir en una dieta diaria: vitamina A, hierro, calcio, carbohidratos, grasas y ciertos aminoácidos.
         

      .col-lg-6
        img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
    p.mt-4 Los alimentos se han clasiﬁcado de acuerdo a su valor nutritivo en seis grupos básicos. De estos, dos pertenecen a alimentos de origen animal y cuatro de origen vegetal, y por obvias razones, cada uno ofrece una diferente calidad de proteínas, tal como puede apreciar en el siguiente recurso educativo, veamos:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/111.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 1. Alimentos de origen vegetal 
            
            p.mt-5 <strong>Comprenden las verduras, las frutas y los cereales y semillas</strong> dentro de las cuales se encuentran, las legumbres (lentejas, guisantes y frijoles) los cereales (trigo, arroz, maíz, avena) y las nueces.
      .col-lg-4.mb-3
        .tarjetas-up
          img(src='@/assets/curso/tema1/112.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 2. Alimentos de origen animal
            
            p.mt-5 Comprenden <strong>toda especie de ganado (ovino, porcino, caprino, bovino),</strong> todas las aves de corral (pavo, pollo, ganso, entre otros), los mariscos y las distintas especies de pescados. Entre los productos derivados de los animales están comprendidos: leche, queso, mantequilla, huevos, miel, salchichas. 
      .col-lg-4.mb-3
        .tarjetas-up
          img(src='@/assets/curso/tema1/113.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 3. Alimentos de origen mineral 
              
            p.mt-5 En este grupo se encuentra la sal de mesa (cloruro de sodio) que le da sabor a las comidas. Las sales minerales mantienen el equilibrio del metabolismo en conjunto con los azúcares, evitando la deshidratación del cuerpo y ayudando a retener agua.    
    p Todos necesitamos una alimentación lo suficientemente variada que nos garantice un aporte nutritivo adecuado, es por esto que hay otro modo de clasificar los alimentos, que se denomina la rueda de los alimentos, se trata de un recurso gráfico proporcionado a la población para seguir una alimentación segura y equilibrada, basado en la clasificación de los alimentos en diferentes grupos que tengan características nutricionales similares. El informe de 2019 del Programa Nacional de Promoción de Alimentos Saludables (PNPAS) incluyó una nueva revisión de la rueda de los alimentos para este 2020, podrá ver más en detalle al respecto en el siguiente recurso:
    .row.justify-content-center.mt-5
      .col-lg-4.bg1
        h4.text-white.text-center.mt-3 Rueda de alimentos
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-lg-12
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')

          div(x="22.5%" y="17%" tooltip="1. Grupo de los cereales, pan, patatas, azúcares")
            .row.justify-content-center.p-4
              .col-lg-5
                h5 1. Grupo de los cereales, pan, patatas, azúcares
                p Este grupo contiene gran cantidad de hidratos de carbono, de tal forma que son los utilizados para el suministro de calorías en la dieta. También poseen cantidades de algunos minerales y vitaminas del complejo B. La digestibilidad es variable en función del contenido en materia no degradable.
                p <strong>Ejemplo de cereales y sus derivados:</strong> arroz, pasta, pan, galletas, avena, cereales matutinos, harinas de cereales, patatas, boniatos, ñames, mandioca, maíz, trigo, centeno, cuscús.
                p <strong>Ejemplo de tubérculos:</strong> calabaza, berro, lechuga, acelga, apio, puerro, berenjena, remolacha, brócoli, cebolla, zanahoria, chucrut, calabacín, col, col de Saboya, col de Bruselas, espárragos, espinacas, judías verdes, nabo, nabo, pepino, pimiento, rábano, col, rúcula, tomate.

              .col-lg-7.mt-5
                img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')

          div(x="58%" y="3%" tooltip="2. Grupo de los aceites y las grasas")
            .row.justify-content-center.p-4
              .col-lg-5
                h5 2. Grupo de los aceites y las grasas

                p <strong>Ejemplo de estos alimentos son:</strong> aceite de oliva, otros aceites vegetales (cacahuete, soja, girasol, maíz, palma) margarina, cremas vegetales para untar, mantequilla, manteca, crem.
              .col-lg-7.mt-5
                img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')

          div(x="76.6%" y="24.5%" tooltip="3. Grupo de las carnes, pescados, huevos, legumbres y frutos secos")
            .row.justify-content-center.p-4
              .col-lg-5
                h5 3. Grupo de las carnes, pescados, huevos, legumbres y frutos secos


                p <strong>Ejemplos de estos alimentos:</strong>  carne roja (ternera, cerdo, cordero) carne blanca (pollo, pavo y conejo) pescado, huevos.
                p Los alimentos de este grupo aportan proteínas y son ricos en ciertos minerales como hierro, fósforo, magnesio, zinc... y vitaminas del complejo B. Los pescados son excelentes fuentes de yodo y flúor.

              .col-lg-7.mt-5
                img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')
          div(x="83%" y="50%" tooltip="4. Grupo de los lácteos")
            .row.justify-content-center.p-4
              .col-lg-5
                h5 4. Grupo de los lácteos
                p Este grupo no sólo incluye la leche de diferentes orígenes, sino también sus derivados como los quesos, yogures, etc. Estos alimentos tienen una alta digestibilidad y su valor nutritivo se fundamenta en la alta calidad de las proteínas y de lactosa, así como niveles altos de minerales, como calcio, fósforo, de vitaminas del complejo B y de vitamina A. En ocasiones, los productos lácteos están reforzados con vitamina D o hierro y son buenas fuentes de estos nutrientes.
                p <strong>Ejemplos de estos alimentos son:</strong> leche, yogur líquido, yogur sólido, queso fresco, queso maduro, requesón, bebidas de soja enriquecidas con calcio, leche de soja, entre otros.
              .col-lg-7.mt-5
                img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')
          div(x="72%" y="89%" tooltip="5. Grupo de las legumbres")
            .row.justify-content-center.p-4
              .col-lg-5
                h5 5. Grupo de las legumbres
                p <strong>Ejemplos de estos alimentos:</strong>  guisantes, habas, frijoles, caupí, garbanzos, lentejas, soja.

              .col-lg-7.mt-5
                img(src='@/assets/curso/tema1/11.png', alt='Texto que describa la imagen')
          div(x="28%" y="90%" tooltip="6. Grupo de las frutas")
            .row.justify-content-center.p-4
              .col-lg-5
                h5 6. Grupo de las frutas
                p Está constituido por un grupo de alimentos cuyo valor nutritivo se atribuye al aporte de vitaminas hidrosolubles (B y C), carotenoides (precursores de la vitamina A) y minerales, tales como el hierro, calcio, magnesio, etc.

                p <strong>Ejemplos de alimentos:</strong> piña, piña, albaricoque, ciruela, mora, piña, plátano, cereza, clementina, caqui, higo, frambuesa, guayaba, grosella, kiwi, naranja, limón, lima, manzana, mango, sandía, melón, arándano, maracuyá, fresa, nectarina, espárragos, papaya, pera, melocotón, granada, mandarina, pomelo.


              .col-lg-7.mt-5
                img(src='@/assets/curso/tema1/12.png', alt='Texto que describa la imagen')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2	Propiedades organolépticas de los alimentos
    p Los alimentos son una fuente imperiosa de estímulos relacionados directamente con la calidad. Es por eso que los expertos analizan esta calidad a partir de los sentidos. Cuando disfrutamos de una buena comida los cinco sentidos están activos; no solo el gusto está involucrado en la acción de comer, sino también todos los otros sentidos y por ello se habla de propiedades organolépticas, que son las características físicas que son percibidas por los distintos sentidos, como el sabor, el olor, la textura y el color.
    p Los expertos en restaurantes o los especialistas en nutrición los utilizan para comprobar la calidad de los alimentos o para conocer los gustos de los consumidores o para innovar en las recetas. Su función es la siguiente:
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-lg-6.bg2
        h4.text-white.text-center.mt-3 Propiedades organolépticas de los alimentos
    .row.justify-content-center.mt-5(data-aos="fade-up")
      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/133.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.wii(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
              p Es el sentido más obvio cuando se degusta un plato y es posible gracias a las papilas gustativas de la lengua que son capaces de identificar cinco tipos de sabores: dulce, salado, amargo, ácido y umami (sabroso) Dependiendo del área de la lengua, se percibirán más unos sabores que otros.
 

      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/fon.png')})`}")
              img.wii(src='@/assets/curso/tema1/ico3.svg', alt='Texto que describa la imagen')
              p Es un indicador de la calidad del alimento, del tiempo de su cocción, su frescura o deterioro. Nos permite observar reacciones químicas que se producen en los alimentos tras someterlos a algún proceso térmico, como por ejemplo la carne; es un alimento que puede variar en su color dependiendo del término en el que esté cocinada; así podrá ser en ocasiones más oscura o más clara, dependiendo del gusto del comensal. Muchas de las variaciones de color son normales y no afectan la inocuidad. 

            .tarjeta-flip__contenido.t1
              img(src='@/assets/curso/tema1/15.png', alt='Texto que describa la imagen')

      .col-sm-6.col-xl-6.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/fon.png')})`}")
              img.wii(src='@/assets/curso/tema1/ico4.svg', alt='Texto que describa la imagen')
              p Es clave para determinar las preferencias de los consumidores. Por ejemplo, hay quienes les encanta oír crujir una barra de pan recién sacada del horno o unas patatas fritas de bolsa. Encontramos diferentes texturas. Los alimentos pueden ser viscosos, granulosos, consistentes.


            .tarjeta-flip__contenido
              img.wii2(src='@/assets/curso/tema1/166.png', alt='Texto que describa la imagen')

      .col-sm-6.col-xl-6.mb-4.mb-xl-0.mt-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/14.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              img.wii(src='@/assets/curso/tema1/ico2.svg', alt='Texto que describa la imagen')
              p Lo percibimos gracias al sentido del olfato, pero es considerada una de las sensaciones más difíciles de definir y caracterizar, ya que se da debido a las moléculas volátiles que desprenden los alimentos, bien sea de manera natural o a partir de su procesado (por medio de aditivos alimentarios, como los aromas artificiales). 
              p Los seres humanos podemos distinguir hasta diez mil olores diferentes aunque es muy difícil catalogar el olor, lo que normalmente sucede, es que creamos analogías para describirlo como, por ejemplo: aromas que se asemejan a la madera, las flores o algo que se está ahumando. 
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3	Parámetros de inocuidad alimentaria
    p La inocuidad de los alimentos puede definirse como el conjunto de condiciones y medidas necesarias durante la producción, almacenamiento, distribución y preparación de alimentos para asegurar que una vez ingeridos, no representen un riesgo para la salud (Ministerio de Salud Colombiano, sf.)
    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/tema1/177.png', alt='Texto que describa la imagen')
      .col-lg-6.mt-3
        p Este aspecto es fundamental en la salud pública y es esencial para la gestión de la calidad total, por lo cual es tema de alta prioridad para todos los gobiernos, consumidores y productores. En cuanto a los restaurantes como tal, este tema es primordial: son ellos los llamados a asegurar las condiciones necesarias para brindar preparaciones en óptimo estado, que cuenten con una buena higiene y que garanticen la máxima seguridad. En concordancia, los establecimientos gastronómicos deben evitar intoxicaciones por bacterias (como Salmonella, transmitidas a través de comida contaminada) tanto en empleados como en clientes, y que generan el desprestigio del establecimiento, la imposición posterior de multas o en su defecto, cierre obligatorio por parte de las entidades de inspección sanitaria.
        .row
          .col-lg-12
            .cajon.color-acento-botones.p-1.mb-4
              p.p-4 Dichas entidades son las encargadas de visitar a los restaurantes para inspeccionar si cumplen o no, con los requisitos legales para la venta y distribución de alimentos. Se puede incluir la toma de muestras para el análisis científico y los registros de inspección. 
    .row.justify-content-center.mt-4
      .col-lg-10.col2.p-4
        .row
          .col-lg-1
            img.tamimg(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-lg-9.mt-2
            p.text-small.mb-0 Para minimizar los riesgos en los establecimientos gastronómicos colombianos, el gobierno y puntualmente la Subdirección de Salud Nutricional, Alimentos y Bebidas, han creado una guía orientadora de la normatividad sanitaria vigente, dirigida a quienes ejercen actividades de manipulación de alimentos y bebidas en establecimientos gastronómicos; la puede consultar en el siguiente enlace: 
          .col-lg-2
            .mt-3
              a.boton.me-3.indicador__container(
                :href="('https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-establecimientos-gastronomicos-restaurantes.pdf ')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span Descargar
                i.fas.fa-link
                .indicador--click(v-if="mostrarIndicador")
    p.mt-5 En cuanto a la higiene de los alimentos más comunes en los restaurantes, debe regularse por el conjunto de normas, pautas y procedimientos que cada organización debe seguir, asegurando de esta forma la inocuidad e idoneidad de los alimentos. El objetivo es preservar la salud del consumidor respetando los principios que se explican a continuación en cada una de las etapas de la cadena alimenticia.
    SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
      .tarjeta.color-primario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/18.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 Verduras con hoja
          p Hay que eliminar las hojas dañadas y sucias, lavarlas con agua potable y desinfectarlas con productos adecuados para tal fin.

      .tarjeta.color-primario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/19.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 Sopas y guisos
          p.mb-5 Debemos asegurarnos de que alcanzan los 70ºC de cocción.

      .tarjeta.color-primario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/20.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 Huevos
          p.mb-4 Hay que refrigerarlos a una temperatura de 5ºC o inferior y cocinarlos a 63ºC salvo que se indique lo contrario.

      .tarjeta.color-primario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/21.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 Pescado
          p.mb-4 Si es fresco, los ojos deberían estar limpios, las agallas y la carne firme.

      .tarjeta.color-primario
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/tema1/222.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 Carne
          p.mb-5 Para pollos y carnes rojas los jugos deben ser de un color claro.
    p En cuanto a los factores de riesgo habituales que pueden afectar los alimentos, se encuentran principalmente:
    .row.mt-5
    .row.justify-content-center
      .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Mantenimiento de alimentos a temperaturas inadecuadas") Este riesgo suele aparecer cuando se rompe la cadena del frío, que provoca que los alimentos no se conserven adecuadamente. Esto ocurre cuando por ejemplo pasa un cierto lapso de tiempo entre la entrega de productos por parte de los proveedores y el almacenamiento por parte de los empleados del restaurante.
          
          p.text-small(numero="2" titulo="Cocción inadecuada") Un huevo frito poco hecho, una hamburguesa medio cruda o unos calamares poco pasados pueden ser un riesgo, ya que generan una mayor proliferación de microorganismos patógenos que generan las intoxicaciones en el ser humano. Por ello, se debe insistir en la profesionalización de los cocineros y en sus certificados de manipulación de alimentos al interior de cualquier restaurante.
          
          p.text-small(numero="3" titulo="Contaminación en utensilios e instalaciones") Es necesario hacer uso de productos desinfectantes para reducir el riesgo de posibles microorganismos.
          
          p.text-small(numero="4" titulo="Proveedores de alimentos poco fiables") Para cada restaurante debe ser un hábito revisar y controlar la entrega de productos por parte de proveedores. Se debe tener en cuenta la temperatura, el etiquetado, los envases y embalajes, los medios en los que se transportan los productos, etc.; adicional a ello, se deben pedir los correspondientes certificados de calidad a quienes proveen los alimentos al establecimiento. 
          
          p.text-small(numero="5" titulo="Mala gestión de residuos") Eso incluye mantener residuos en áreas de trabajo o botes sin la debida separación de los alimentos.
          
          p.text-small(numero="6" titulo="Malas prácticas de almacenamiento de productos") Garantizar la salubridad de los mismos. Para ello, es esencial seguir unas estrictas pautas de almacenamiento y evitar malas prácticas como, por ejemplo, colocar los productos en el suelo aunque estén protegidos por cajas.
          p.text-small(numero="7" titulo="Mala higiene personal de los manipuladores de alimentos") Se debe procurar que todos los empleados del restaurante tengan claro los habitos básicos en cuanto a su aseo personal, indumentaria e higiene en general.
      
      .col-lg-6
        img(src='@/assets/curso/tema1/233.png' alt='AvatarTop')
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4	Caracterización de menús 
    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/tema1/232.png' alt='AvatarTop')
      .col-lg-6.mt-3
        .row.justify-content-center.color2
          .col-lg-12
            p.p-3 La palabra menú nació en los primeros restaurantes de Francia y tiene su raíz en el vocablo latino “minutus”, que significa “pequeño”. El término se comienza a usar en 1718 y muchos autores lo han definido en resumen como una presentación de las comidas, bebidas y postres disponibles para el comensal. Es el conjunto cerrado de platos que un establecimiento ofrece al cliente.
        p.mt-4 Este término en ocasiones se confunde con la palabra “carta”, sin embargo, existe una diferencia puntual y es que ésta última está hecha en cartón, papel o cualquier otro medio y describe detalladamente los precios de los platos y bebidas; es decir, presenta el conjunto de todos los platos que ofrece el restaurante y en el que suele estar incluido el menú del día.
    .row.justify-content-center.mt-4
      .col-lg-6
        p Otra diferencia es que de una carta se pueden elegir varias combinaciones de platos; pero cuando se habla de menú, se está haciendo referencia a una propuesta de comida diseñada por el chef cuya composición puede variar dependiendo de su gusto, de la ocasión o del tipo de restaurante. 
        .row.justify-content-center.color3
          .col-lg-12
            p.p-3 Adicional a lo anterior, el precio también es un diferencial ya que el del menú es un valor cerrado, mientras que la elección de varias combinaciones desde la carta, tiene un valor variable. 
            p.p-3 A estos dos términos se le puede agregar el tercero y es la comanda; que es la elección de platos que se ha hecho después de consultar la carta y que es llevada hasta la cocina, directamente por el mesero quien atendió la mesa.

      .col-lg-6
        img(src='@/assets/curso/tema1/24.png' alt='AvatarTop')
    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Elaborar el menú parece fácil, pero en realidad es uno de los aspectos más difíciles de hacer dentro de una cocina, ya que debe buscar el equilibrio entre varios factores como lo son los productos disponibles, la especialidad del restaurante, el tipo de comensal al cual va enfocado, los precios de los alimentos, margen de utilidad, entre otros.  El objetivo principal siempre será crear platos rentables para el restaurante y que estos sean los más pedidos por los comensales, por ello es importante analizar la composición del menú teniendo en cuenta las variables mencionadas.
    p.mt-4 Una vez terminado el diseño del menú y de la carta, será importante darlas a conocer de manera digital, haciendo uso de redes sociales o de la página <i>web</i> del restaurante; esto con la intención de impulsar las ventas y dar a conocer la marca a más clientes.
    p En cuanto a los principales tipos de menús, son incontables, pues dependen del tipo de oferta de cada establecimiento, además de la manera en que se encuentren agrupados los platos ofertados, sin embargo, a continuación, podrá tener una clasificación general de estos menús:
    .tarjeta.tarjeta--azul.p-4.bg3
      SlyderA(tipo="b")
        .row.p-4
          .col-md-5.mb-4.mb-md-0.mt-5
            .row.mt-5
            .row-mt-5
            <br>
            h5.mt-5 Menú a la carta
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Los precios tienden a ser más altos.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Ofrecen mucha más flexibilidad ya que los comensales pueden elegir productos individuales y combinarlos como quieran.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Brindan una mejor experiencia gastronómica a los clientes.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Contienen la sección de la comida: ensaladas, pastas, carnes, pescados, etc.; y de las bebidas como refrescos, cervezas, vinos y licores
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Los menús a la carta son especialmente fáciles de leer.
          .col-md-6
        .row.p-4
          .col-md-5.mb-4.mb-md-0.mt-5
            .row.mt-5
            .row-mt-5
            <br>
            h5.mt-5 Menú del día o menú ejecutivo
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Cambian a diario, según los productos que estén disponibles o lo que haya preparado el cocinero.

              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Este menú por lo general, incluye en el precio una entrada, un plato principal, un postre, y una bebida.

              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Los menús del día pueden parecer rígidos, pero son una opción excelente para que los cocineros tengan mayor flexibilidad a la hora de elegir los alimentos que desean servir en un restaurante.
          .col-md-6
        .row.p-4
          .col-md-5.mb-4.mb-md-0.mt-5
            .row.mt-5
            .row-mt-5
            <br>
            h5.mt-5 Menú cíclico
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Son menús preparados para abarcar determinado periodo de tiempo: una semana, un mes, 3 meses, etc.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Por ejemplo, podría haber un menú del día diferente durante dos semanas, y luego el ciclo del menú comenzaría nuevamente desde el principio.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Al final de cada período pueden ser usados de nuevo los menús, evitando así la necesidad de crear unos nuevos.
          
          .col-md-6
        .row.p-4
          .col-md-5.mb-4.mb-md-0.mt-5
            .row.mt-5
            .row-mt-5
            <br>
            h5.mt-5 Menú degustación
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Está compuesto por una gran cantidad de platos elegidos por el restaurante y generalmente considerados especialidades de la casa.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Se utiliza para dar a los comensales la oportunidad de que puedan probar una gran variedad de platos elegidos por el chef.

              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Algunos de ellos suelen llevar algunas técnicas de gastronomía molecular, como la esferificación, espuma, deconstrucción, etc.

          .col-md-6
        .row.p-4
          .col-md-5.mb-4.mb-md-0.mt-5
            .row.mt-5
            .row-mt-5
            <br>
            h5.mt-5 Menú por tiempos
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Es un menú que el cliente ha contratado con antelación y es concertado con el chef del restaurante, tanto en el precio como en la composición de los platos que lo integran.

              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Este tipo de menú es el más usado para grandes grupos en <i>catering</i> y eventos.
        .row.p-4
          .col-md-5.mb-4.mb-md-0.mt-5
            .row.mt-5
            .row-mt-5
            <br>
            h5.mt-5 Menú por tiempos
            ul.lista-ul
              li 
                p.text-small.mb-0 Se refiere a que cada uno de los tiempos es un diferente platillo por servir. Existen menús de tres y cuatro tiempos
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Menú de tres tiempos: entrada, plato fuerte y postre.
              li 
                i.fas.fa-angle-right.ss
                p.text-small.mb-0 Menú de cuatro tiempos: pasabocas, entrada, plato fuerte y postre.
    .row.justify-content-center.mt-5
      .col-lg-4
        .row.justify-content-center.color2
          .col-lg-12
            p.p-3 Como ya se había indicado también existe la carta de platos, cuyo objetivo es promocionar y dar a conocer los productos que se ofrecen en un restaurante, por ello es fundamental su diseño, para obtener la atención de los comensales.
            p.p-3.mb-0 Es necesario pensar en diferentes ítems cuando se está a punto de diseñar la carta: en caso de ser impresa, se deberá considerar la resistencia, la firmeza, la textura, el color y la tipografía para describir los platos; esto con el fin de generarle una fácil lectura al cliente.

      .col-lg-4.mt-2
        img(src='@/assets/curso/tema1/25.png' alt='AvatarTop')
      .col-lg-4
        .row.justify-content-center.color4
          .col-lg-12
            p.p-3 En caso de ser una carta digital, se tendrán en cuenta los mismos factores, omitiendo obviamente lo concerniente al tipo de papel.
            p.p-3.mb-5 Se debe tener especial cuidado con el uso del color, ya que, según el neuromarketing, este puede estimular el apetito del cliente y reflejar la imagen del restaurante. A continuación, se explican los diferentes tipos de cartas que hay, así como las consideraciones en su diseño, veamos:
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5.bg4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Carta central
            p.mt-5 Este formato sirve para menús cortos, de servicio rápido y donde los clientes están familiarizados con las opciones que van a encontrar en el menú. Es común encontrarlo en restaurantes de comidas rápidas ya que permite que el comensal lea el menú mientras hace la fila. 
        
          .col-md-6  
              img(src='@/assets/curso/tema1/80.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Formato de una sola página
            p.mt-5 Se utiliza cuando se tienen pocos productos para ofrecer y no requieren de mucha explicación. Es muy común encontrarlos en restaurantes de comida casual y <i>gourmet</i>. Funcionan en diferentes tipos y formas, a una sola cara o por ambas. La ventaja de este estilo de menú es que es muy sencillo y flexible, además de que es de bajo costo. 

        
          .col-md-6   
              img(src='@/assets/curso/tema1/26.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Formato de múltiples páginas
            p.mt-5 Este menú es utilizado cuando existe una larga lista de platos que requieren de una descripción. También, si en su oferta tiene entradas, postres, platos fuertes y bebidas. El problema que tiene este tipo de menú es que el comensal se demora más tiempo en decidir, revisar y pedir. Lo que trae como consecuencia que se retrase la facturación y se estanque la rotación.
          .col-md-6
              img(src='@/assets/curso/tema1/27.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Secciones de la carta
            p.mt-5 Para crear y diseñar una carta de restaurante, es importante que la dividas por grupos:
          .col-md-6.azxc
            .row.pt1.p-2
              p <strong>Primero</strong> pueden incluir aquellos platos que estimulan el apetito del cliente “Para picar”: entradas, sopas, cremas, aperitivos…
            .row.pt2.p-2
              p En un <strong>segundo grupo</strong> se colocan los platos ligeros: ensaladas, sándwiches, tortillas, arroces y pastas.
            .row.pt1.p-2
              p En una <strong>tercera parte</strong> coloca los platos principales y fuertes: carnes blancas, rojas, pescados o platos de la casa.
            .row.pt2.p-2
              p Por último, coloca los postres (tanto fríos como calientes), y las principales bebidas.
              p Si se tiene una selección grande de vinos, <i>cocktails</i> o alcoholes fuertes, incluye otra carta especial para este tipo de bebidas.
   
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Aspectos que se deben incluir para diseñar la carta

            p.mt-5 <strong>1. Datos del negocio:</strong> son elementos que ayudarán al cliente a identificar el negocio: nombre, logotipo de manera visible, dirección, teléfono de contacto, correo electrónico y, muy importante hoy en día ¡las redes sociales!
            p <strong>2. Define tu público objetivo:</strong>  esto es esencial para saber cuál será el mejor estilo de carta y también ayudará a elegir los colores, los gráficos, los platos destacados, etc.
            p <strong>3. La propuesta gastronómica:</strong>   se debe tener por escrito los platillos que se quieren ofrecer, una breve reseña que describa su preparación y el precio. <strong>Comienza con los títulos o categorías y luego detalla las opciones.</strong> 
          .col-md-6 
              img(src='@/assets/curso/tema1/29.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Categoriza y simplifica la información


            p.mb-0 Debes categorizar el orden en el que va a presentar la oferta gastronómica. Los comensales están acostumbrados a leer primero: entradas, primer plato, segundo plato.  Si la oferta de postres y bebidas es grande, se recomienda tener una carta aparte.

            p.mb-0 <strong>Establece los precios de la carta</strong>
            p.mb-0 Se pueden seguir dos estrategias. 
            p.mb-0 Hacer que el cliente no piense en el gasto y no se guie por los precios: no se incluye el símbolo de $ o se coloca el precio con la letra K a lo último (que indica miles). Ejemplo 10 K.
            p Otra opción es exponer el valor de lo que se ofrece, es decir, mostrar por qué los platos más caros de la carta cuestan más. Por ejemplo, infórmale al cliente si el plato incluye una carne de primera calidad, verduras orgánicas o un proceso artesanal que consume más tiempo.

          .col-md-6
              img(src='@/assets/curso/tema1/300.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Define la línea de diseño
            p esto va depender del público objetivo y la propuesta de tu restaurante.
            p.mb-0 Acá se deben tener en cuenta:
            p.mb-0 <strong>- Los colores:</strong> Establecer un fondo neutro, preferiblemente blanco, es recomendable para lograr que la comida luzca bien y se destaque; también cuida la iluminación y el formato de las imágenes. El rojo, naranja, amarillo son tonos secundarios ideales para abrir el apetito. Si se desea una carta elegante, se puede optar por los clásicos negro y blanco.
            p.mb-0 - <strong>El tipo de papel</strong>, tipo de acabado o la plataforma digital en la que se hará
            p.mb-0 - <strong>El tipo de letra:</strong> tamaño equilibrado, que sea legible (y ayudar a la percepción del cliente), con letras de color oscuro sobre un fondo claro, y facilitando la lectura.
            p.mb-0 - <strong>El tipo de carta a diseñar</strong> (según lo que ya se vio anteriormente).
            p Tono de la redacción: según el tipo de cliente que se tenga, sus edades, su estilo. En un establecimiento de jóvenes puedes redactar la carta en un lenguaje informal o jovial, destacar las redes sociales o los elementes interactivos del menú.
          .col-md-6
              img(src='@/assets/curso/tema1/311.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h5 Y por último, pero no menos importante, esmérate con las fotos

            p.mt-5 No es imprescindible que en una carta de restaurante haya fotos de los platos, pero si se incluyen, deben ser de buena calidad.

          .col-md-6 
              img(src='@/assets/curso/tema1/32.png', alt='Texto que describa la imagen')
    separador            
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5	 Caracterización de bebidas 
    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/tema1/33.png', alt='Texto que describa la imagen')
      .col-lg-6
        .row
          .col-lg-12
            .cajon.color-primario.p-4.mb-4.mt-2
              p La palabra bebida es de uso común, y se refiere a todo tipo de líquidos (naturales o artificiales) que puedan ser utilizados para el consumo humano y cuyo principal objeto es calmar la sed o hidratar nuestro organismo. 
              p El concepto de bebida se relaciona puntualmente con una de las necesidades primarias del ser humano que es reponer los líquidos que utiliza en la realización de sus actividades diarias. 
        
        p La bebida por excelencia es el agua ya que es la más recomendada para cumplir dicha función de reposición de líquidos; sin embargo, el ser humano también ha creado otras bebidas más complejas que son frecuentemente usadas en celebraciones. Como lo son las bebidas alcohólicas y las gaseosas, cuyo objetivo primordial es sumarle placer, gusto y elementos visuales a la experiencia de beber. Adicional a estas, también existen las infusiones o jugos de frutas que pueden ser o no, artificiales o contener o no, azúcares añadidos. 
    p Hoy en día, se puede encontrar en el mercado una gran variedad de bebidas con un presupuesto y un tipo de consumidor específico al que van dirigidas; algunas de ellas estarán solo enfocadas en adultos, mientras que otras serán de consumo apto para todos.
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Bebidas alcohólicas" :icono="require('@/assets/curso/tema1/ico5.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Se considera una bebida alcohólica si contiene más de 2.5 grados de alcohol etílico.
            .row
              .col-lg-6.color22
                p.mb-0.p-2 Existen dos tipos de bebidas alcohólicas: 
                ul.lista-ul.p-2.mb-0
                  li.mb-0
                    i.fas.fa-angle-right.ss
                    p.mb-0 Las fermentadas.
                  li 
                    i.fas.fa-angle-right.ss
                    p.mb-0 Las destiladas.
            p.mb-0.mt-4 Las bebidas fermentadas son las procedentes de frutas o de cereales que, por acción de ciertas sustancias microscópicas (levaduras), convierten el azúcar en alcohol.
            p Las bebidas fermentadas más comunes son el vino, la cerveza y la sidra.
            p.mb-0 Las bebidas destiladas son el resultado del proceso de separación de agua y alcohol de un líquido previamente fermentado. El método de destilación puede ser industrial o artesanal, dependiendo del volumen de producción y de la calidad deseada para el producto final. En cualquier caso, su objetivo es el de obtener una bebida de alcohol puro con un nivel superior a los 40°.
            p Entre las bebidas destiladas más conocidas se encuentran: el <i>coñac</i> o <i>brandy</i>, la ginebra, el <i>whisky</i>, el ron y el <i>vodka</i>.

          .col-md-5
              img(src='@/assets/curso/tema1/i1.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Bebidas no alcohólicas" :icono="require('@/assets/curso/tema1/ico6.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p Son las que en su composición entra el agua potable gasificada o no, adicionada con cualquiera de las sustancias siguientes: azúcares, jugos de frutas, extractos vegetales permitidos, ácidos orgánicos (cítrico, láctico, fumárico, glucónico, málico y tartárico), esencias y colorantes naturales o sintéticos autorizados.
            p Entre ellas se encuentran:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Las gaseosas

              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Los jugos
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Las bebidas energizantes
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 El agua
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Las aguas saborizadas
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Bebidas deportivas
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 El té
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Las infusiones
          .col-md-5
              img(src='@/assets/curso/tema1/i2.png', alt='Texto que describa la imagen')
    p.mb-0 Al igual que con el menú de alimentos, las bebidas también exigen unas consideraciones en el diseño de su carta.
    p Si hablamos del mercado de bebidas debemos saber que tiene un gran margen de beneficio, llegando a triplicar su coste con respecto al precio de venta al público (PVP). Además, las bebidas son un producto que se puede vender por unidades y de rápido servicio.
  
    .row.mt-5
      .col-lg-5.bg5
        h4.text-white.text-center.mt-3 Consideraciones en la carta de bebidas    
    .row.justify.content-center.mt-4
      .col-lg-6
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Estructura clara") Una estructura sencilla facilitará la elección de los clientes, por ejemplo: <br>Bebidas calientes o frías.<br>Bebidas clásicas o especiales.<br>Bebidas pequeñas o grandes.
          p(numero="2" titulo="Mezcla los precios") Los precios de la carta de bebidas tienen que estar mezclados, es decir, no coloques las bebidas más caras por un lado y las menos costosas por otro. <br>Mezclar los precios hará que tu cliente consuma más de lo que tenía pensado.          
          p(numero="3" titulo="Texto") El objetivo es llamar la atención del cliente, un exceso de texto en la carta hará que no le preste tanta atención al producto. El texto de la carta tiene que ser breve, explicativo y claro. Se pueden usar palabras atractivas como “natural”, “fresco” o “local”
          p(numero="4" titulo="Separa las cartas de bebida") Un error clásico es juntar los vinos con el resto de bebidas, debe crear dos cartas, una con los vinos de comercialización, y otra con el resto de las bebidas. 
          p(numero="5" titulo="Destaque sugerencias o especialidades de la casa") Ponga algunas bebidas en negrita, mayúsculas o cursiva, reálcelas con imágenes atractivas o colores sugerentes. Pero no exagere demasiado o el efecto se esfumará.
          p(numero="6" titulo="El diseño") Una vez definida la estructura hay que decidir el diseño. La carta es un buen escaparate, se deben tener en cuenta varios factores para su elaboración, como el estilo y el diseño de la portada, el tipo de letra, el color e imágenes, el tipo de papel y la distribución del contenido.
      .col-lg-6.mt-2  
        img(src='@/assets/curso/tema1/i3.png', alt='Texto que describa la imagen')
    p.mt-5 La tendencia actual es tener cartas reducidas porque facilitan al cliente su elección, acortan el tiempo de toma de la comanda y reducen el número de artículos de almacén.
    .row.justify-content-center.mt-4
      .col-lg-10.col2.p-4
        .row
          .col-lg-1
            img.tamimg(src='@/assets/curso/tema1/ico.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h5.mt-4 Puede consultar una carta de bebidas a manera de ejemplo, en el siguiente enlace:

          .col-lg-2
            .mt-3
              a.boton.me-3.indicador__container(
                :href="('https://fliphtml5.com/kseay/jvwf/basic')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span Ingresar
                i.fas.fa-link
                .indicador--click(v-if="mostrarIndicador")
    
    p.mt-4 En relación a la colección de bebidas nacionales, son varias y variadas las que degustan el paladar de propios y foráneos, podrá consultar las más conocidas en el siguiente recurso educativo: 
    .tarjeta.tarjeta--gris.p-4
      //- PasosB debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      PasosB.color-primario
        .row.justify-content-center(titulo="Agua de panela")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Agua de panela
            p El agua de panela, o ‘aguapanela’, como se le conoce comúnmente, es una de las bebidas tradicionales, es refrescante, energizante y al mismo tiempo, un “remedio” casero para aliviar los días de resfriado. Se prepara con panela, agua y en algunas ocasiones, con zumo de limón, y se consume en todas las regiones de Colombia, ya sea caliente o fría.
            p La aguapanela es especialmente popular en la cultura colombiana, pues hace parte del día a día de los colombianos. Se suele acompañar con queso, almojábana o arepa. Incluso, tiene una versión con alcohol conocida como “canelazo” una preparación a base de canela y aguardiente.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/50.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Champús colombiano")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Champús colombiano
            p Esta bebida, mayormente conocida y consumida en el Valle del Cauca, se prepara con melado de panela, maíz y frutas locales como: lulo, piña o guanábana, clavos de olor y canela al gusto. Una preparación que se licúa y se sirve con mucho hielo como refresco para los intensos días de calor en la capital de la salsa. Se suele acompañar del tradicional ‘pandebono’ o de empanadas vallunas.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/51.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="La chicha")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 La chicha
            p Es una de las bebidas tradicionales latinoamericanas, a base de maíz fermentado con azúcar. En Colombia, dependiendo de la región del país se prepara a base de piña o yuca, aunque es propia de la región andina colombiana. Su grado de alcohol, así como su sabor dulce o amargo varía dependiendo del tiempo de fermentación.
            p La chicha es originariamente una bebida indígena Muisca, que poco a poco se volvió del común, tanto así que hoy en día se puede conseguir en el centro de Bogotá.

          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/52.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Refajo")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Refajo
            p Nada más colombiano que un refajo, una bebida que resulta al combinar cerveza con gaseosa, generalmente de sabor kola roja o con la famosa ‘Colombiana’. Esta es una de las bebidas más apetecidas en la mesa de los colombianos, ya sea para celebrar o simplemente para compartir una comida, pues desde los años 90’s se convirtió en una costumbre, tanto así que llegó al mercado con una presentación propia.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/53.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Masato")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Masato
            p Es una de las bebidas artesanales más populares en los departamentos de Cundinamarca, Santander y Tolima. Al igual que la chicha, es fermentada y elaborada a base de cereales como el arroz, el maíz y el trigo, o tubérculos como la yuca. Se suele acompañar de una almojábana o pan de yuca, se consume fría y como merienda (en la mañana o en la tarde).

          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/54.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Viche")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Viche
            p Esta bebida artesanal típica del Pacífico colombiano se fabrica a partir del jugo de la caña de azúcar y se le agregan diferentes ingredientes para darle un sabor más agradable. Su contenido de alcohol es similar al del aguardiente, incluso del viche se derivan otras bebidas colombianas como el ‘arrechón’, el ‘tumbacatre’ y el ‘tomaseca’. En el pasado, el viche fue utilizado para dolores estomacales, así como para aumentar el vigor y la fertilidad, y siempre ha sido conocido por sus efectos afrodisíacos.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/i4.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Aguardiente")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Aguardiente
            p Es coloquialmente conocido como ‘guaro’ y representa una de las bebidas colombianas por excelencia. El aguardiente es una bebida destilada a base de caña de azúcar y anís, considerada por los colombianos como el licor nacional. Tradicionalmente se disfruta solo y frío.
            p Su consumo es muy popular en las diferentes ciudades de Colombia, en donde se comercializan marcas emblemáticas como el Tapa Roja del Tolima, el Doble Anís del Huila, el Antioqueño, el Néctar de Cundinamarca, entre otros. Incluso, hoy en día han salido al mercado marcas colombianas premium o ultra premium como el Aguardiente Mil Demonios.

          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/i5.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Chirrinchi")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Chirrinchi
            p Es una de las bebidas tradicionales de los pueblos originarios Wayuu en La Guajira colombiana. Es un licor que se obtiene al destilar la panela de caña de azúcar, mezclado con varias especias. Para los indígenas Wayuu es una bebida muy importante como parte de sus celebraciones y rituales. Sin embargo, en Bogotá se puede probar un chirrinchi distinto, a base de hierbas y frutos como el hinojo, la limonaria y la manzanilla.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/i6.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Borojó")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Borojó
            p A esta bebida se le atribuyen efectos afrodisíacos, al mismo tiempo, propiedades nutricionales y sanadoras. 
            p Se trata de un jugo preparado con borojó, una fruta de color morado o marrón (que solo se da en el Chocó), agua, leche, azúcar o panela, vainilla, huevos y hielo. Usualmente se toma al desayuno o para acompañar una merienda.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/i7.png', alt='Texto que describa la imagen')
        .row.justify-content-center(titulo="Sabajón")
          .col-md-5.mb-4.mb-md-0.mt-5
            h5 Sabajón
            p Es un licor a base de aguardiente, muy popular por su sabor dulce y cremoso, debido a que incluye: leche, yema de huevo, leche condensada y canela. 

            p Esta es una de las bebidas tradicionales de las Navidades colombianas, pero también se disfruta durante todo el año. Generalmente se sirve frío, como aperitivo.
          .col-md-6.mt-5
            figure
              img(src='@/assets/curso/tema1/56.png', alt='Texto que describa la imagen')
    separador
    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6	 Emplatados y presentación de platos
    .row.justify-content-center
      .col-lg-4
        .row.justify-content-center
          .col-lg-12
            .cajon.color-acento-contenido.p-4
              p.mb-0 Desde tiempos de los romanos, se comenzaron a presentar platos originales que tuvieran coherencia con el gusto por los excesos y el lujo que marcaba dicha época. Se valoraba entonces el mérito de un cocinero por su capacidad de innovar e impresionar a los comensales.
        p.mt-4 En otras culturas, por el contrario, simplemente se prestaba atención a la distribución de los trozos de comida en el plato para que al comensal le fuera más sencillo el acto de comer; con el tiempo, la evolución de la cocina introdujo aspectos artísticos, donde los alimentos se disponen de diferentes maneras y se tiene en cuenta el color y las formas para generar emociones y sorprender al comensal.        
      .col-lg-4
        img.tamimg(src='@/assets/curso/tema1/i8.png', alt='Texto que describa la imagen')

      .col-lg-4.mt-2
        p.mb-0 En la actualidad, el emplatado sigue tomando un rol importante a la hora de generar un efecto agradable a la vista de quien degustará la preparación. 
        p Lo que se ve, es el primer estímulo que participa en el juego de las sensaciones a la hora de evaluar o querer consumir un plato, por esta razón la armonía y la estética deben tener un peso importante; posteriormente aparece el olfato y por último el gusto, por tanto, si queremos que la receta cautive, se debe prestar atención a la presentación que será lo primero que se juzgue.
        p Justamente para lograr dicho objetivo, se habla de las técnicas de emplatado que son parte importante de la cocina contemporánea donde el atractivo visual es clave para el éxito de un plato. 
    .row.justify-content-center.mt-5
      .col-lg-10
        .row
          .col-lg-12
            .cajon.color-primario.p-4.mb-4
              h5 Emplatar
              p Es colocar los elementos de una preparación en el plato, de modo que al comensal le resulte agradable a la vista y le resulte fácil y placentero de comer.
    p Al momento de emplatar, es necesario tener en cuenta cuales son los componentes del plato a servir, algunas de las consideraciones más comunes para llevar a cabo esta tarea, se encuentran descritas a continuación:        
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.color12
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/tema1/82.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 La proteína
          p.mb-5 En general es la protagonista del plato.
          .row.mt-5

      .tarjeta.color-acento-contenido.color12
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/tema1/58.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 La guarnición de carbohidratos
          p.mb-5 Constituye el acompañamiento primario del plato, está constituida por el arroz, las patatas, la pasta, etc.

      .tarjeta.color-acento-contenido.color12
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/tema1/60.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 La guarnición vegetal
          p.mb-5 Son las verduras que dan vitaminas y color.
          .row.mt-4
      .tarjeta.color-acento-contenido.color12
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/tema1/61.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 Las salsas
          p.mb-4 Son el elemento líquido del plato, además de aportar sabor contribuye a unificar los diferentes elementos del plato.

      .tarjeta.color-acento-contenido.color12
        .row.justify-content-center
          .col-12
            img(src='@/assets/curso/tema1/62.png' alt='AvatarTop')
        .row.p-3
          h4.mb-1 La decoración
          p.mb-5 No es obligatorio, pero aporta originalidad.
          .row.mt-4
    .row.justify-content-center
      .col-lg-10
        p Por otra parte, en cuanto a las reglas que deben tenerse en cuenta, cada cocinero puede encontrar sus propias presentaciones, pero en general se considera que todas deben responder a las siguientes reglas:
        .row.justify-content-center
          .col-lg-10
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 <strong>Equilibrio:</strong> implica una búsqueda de armonía entre los diferentes elementos del plato, desde formas a colores y sabores, etc.
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 <strong>Unidad:</strong> se busca que los diferentes elementos se unan de un modo cohesionado y elegante.

              li 
                i.fas.fa-angle-right.ss
                p.mb-0 <strong>Punto focal:</strong> es el área que llama en un primer momento la atención del consumidor.

              li 
                i.fas.fa-angle-right.ss
                p.mb-0 <strong>Flujo:</strong> es una sensación sutil que parece dar vida al plato jugando con todos los elementos anteriores.
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 <strong>Altura:</strong> gracias a la altura podemos jugar con los relieves y el movimiento en el plato.
          
          .col-lg-2
            img.azx(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')
    p.mt-4 A continuación, encontrará descrita estas reglas para una mejor apreciación de cómo llevar a cabo el servicio:
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5.bg7
      SlyderA.tema1-6(tipo="b")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Reglas y tipos de emplatado
            p.mt-5 Para comenzar, tenemos que tener en cuenta que para emplatar se puede jugar con todas estas variables:
            ul.lista-ul
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Colores   

              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Texturas      

              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Alturas      
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Guarniciones       
              li 
                i.fas.fa-angle-right.ss
                p.mb-0 Salsas 
            p Y vajillas para colocar los alimentos, de una manera armónica, tenemos que ver el plato, como si fuera un reloj, tal como vemos en la imagen:
            p.mb-0 Si el plato es caliente, poner la carne a las a las 6 y el resto de componentes del plato a las 3 y a las 9, si es frío el plato, comenzar por el centro y desde ahí seguir con el montaje.

        
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t1.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Diferentes técnicas de emplatado
            p.mt-5 <strong>Emplatado tradicional:</strong> en este emplatado se divide el plato como si se tratase de un reloj. La proteína se coloca a las 6, la guarnición de carbohidratos a las 2 y la de verduras a las 10. Se trata de un emplatado rápido y sencillo que deja a la vista todos los ingredientes.

          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t2.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado NO tradicional
            p.mt-5 Aquí entra a formar parte la creatividad del cocinero, dejaremos las normas clásicas y nos vamos a utilizar la imaginación y la vena artística del chef, aparece con la <i>Nouvelle Cuisine</i> en Francia.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t3.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado estructurado o centrado
            p.mt-5 Se caracteriza por la aparición de elementos decorativos y el cuidado de los detalles y aunque tengamos libertad, esta forma de emplatar se subdivide en dos categorías: estructurado y disperso
            p Todos los elementos se unen formando un conjunto y, vamos a jugar con la altura y el volumen, en la base, la guarnición, encima la proteína o el ingrediente principal, rodeando a la torre, la salsa y la decoración por encima de los alimentos.

          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t4.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado disperso
            p.mt-5 Ni números ni alturas, los ingredientes se integran por todo el plato, lo habitual es que el más importante o principal vaya en el centro y el resto a su alrededor. Se busca la armonía horizontal, todos los elementos lucen por sí mismos y se aprecian texturas y técnicas Este es el primer paso para aprender a emplatar, nos quedan más capítulos, los elementos y la composición serán los siguientes capítulos.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t5.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado simétrico
            p.mt-5 El plato se divide en dos partes y los elementos se colocan manteniendo un equilibrio proporcional entre ellas. 
            p Existe igualdad de peso en las dos partes del plato, como alas de mariposa. Transmite una sensación de orden y armonía procedente de la misma naturaleza.

          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t6.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 El emplatado asimétrico
            p.mt-5 Al igual que en el caso anterior, dividimos el plato en dos partes, sin embargo, una tiene más peso visual que la otra.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t7.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado rítmico
            p.mt-5 Se emplea mucho en los postres y la pastelería. Se trata de hacer repeticiones en el plato de los diferentes elementos para conseguir un diseño dinámico y atractivo aunque ordenado.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t8.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado triangular o romboidal
            p.mt-5 Al utilizar este tipo de emplatado conseguimos que el ojo se pasee por todo el plato. También permite jugar con las diferentes alturas.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t9.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado cuadrado u horizontal
            p.mt-5 Se utilizan los elementos en forma de cubos o formas similares.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t10.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Emplatado circular
            p.mt-5 El punto focal en este caso se sitúa en el centro del plato y los diferentes elementos se disponen a su alrededor.
          .col-md-6.mt-5   
              img(src='@/assets/curso/tema1/t11.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-4
      .col-lg-10.col2.p-4
        .row
          .col-lg-1
            img.tamimg(src='@/assets/curso/tema1/13.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h5.mt-4 Puede consultar más acerca de este interesante tema sobre el emplatado, en el siguiente enlace:


          .col-lg-2
            .mt-3
              a.boton.me-3.indicador__container(
                :href="('https://www.youtube.com/watch?v=02Brgs60BiY&t=8s')"
                target="_blank"
                type="application/pdf"
                @mouseover="mostrarIndicador = false"
              )
                span Ingresar
                i.fas.fa-link
                .indicador--click(v-if="mostrarIndicador")
    separador 
    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7	 Menaje
    .row.justify-content-center
      .col-lg-4
        .row.justify-content-center
          .col-lg-12
            .cajon.color-acento-botones.p-1
              p.p-3 Cada restaurante tiene unas necesidades diferentes con relación a los utensilios que requiere para poder crear sus preparaciones y para servirlas a sus clientes; esto normalmente depende del presupuesto disponible, del tipo de público al que se apunta y la imagen que se desea transmitir a los comensales.

          p.p-3.mb-0 Cuando se habla entonces de menaje, se hace referencia a los utensilios utilizados en la presentación de los alimentos: la vajilla empleada para servir y presentar los platos y bebidas a los comensales, vasos, copas, platos y <i>bowls</i>, cubiertos, entre otros. Con lo anterior, se puede decir que el mensaje no se resume solo a los utensilios utilizados dentro de la cocina, sino también a los que salen a las mesas y los que se utilizan en las barras. 
      .col-lg-4
        img(src='@/assets/curso/tema1/ttt.png', alt='Texto que describa la imagen')
      .col-lg-4.mt-2
        p Este tema juega un rol primordial ya que es la carta de presentación del establecimiento. Una vez se ha creado la experiencia para el comensal, la estética y la presentación de los platos, tienen un papel protagónico a la hora de generar una percepción agradable y una recompra en el servicio. La vajilla, por ejemplo, es uno de los factores que más genera diferenciación entre los restaurantes y recordación en un comensal, quien normalmente no consume solo el alimento, sino que se percata también del cubierto que se utiliza, el material de los platos, el color, los diseños etc. 
        p.mb-0 Los clientes esperan mucho más que un buen servicio, buscan vivir una experiencia única por lo que cada utensilio de la mesa juega un papel relevante.
    .row.mb-5.justify-content-center.mt-4
      .col-lg-8.mb-5.mb-lg-0
        //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones

        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 “Recuerde que la diferencia reside en la originalidad del diseño, la cual cada vez está más alineada con los parámetros de calidad y buen gusto” 
            i.fas.fa-quote-right    
      
    p Son varios los factores que influyen en una experiencia positiva con respecto al menaje, a continuación, encontrará descrito cada uno de estos y su injerencia en la presentación del plato, y el gusto e interés de los comensales
    .row.justify.content-center.mt-4
      .col-lg-8
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Innovación") En este aspecto se debe considerar el tipo de restaurante, tipo de comensal y funcionalidad de la vajilla. Se puede ofrecer una vajilla comercial que sea segura y que funcione con cualquier comida y cualquier decoración o una vajilla completamente innovadora y única, que brinde una ventaja competitiva.
          
          p(numero="2" titulo="Ambiente") Se debe tener en cuenta el tipo de sensación que se desea crear con la decoración de su restaurante y la manera en que se desea que los clientes perciban el establecimiento. El menaje adecuado será de gran ayuda para asegurar el estilo de su negocio.
          p(numero="3" titulo="Durabilidad") Es esencial considerar qué tan duradero es el servicio de mesa. Si tiene un restaurante grande con plazos de entrega rápidos, necesitará invertir en vajillas comerciales que sean mucho más duraderas que las que se necesitarían para un pequeño restaurante de estilo boutique donde el número de invitados es menor y la rotación o reposición de los utensilios será más progresiva. 
          
          p(numero="4" titulo="Materiales") Se debe definir entre los diferentes materiales que existen para el menaje, teniendo en cuenta que cada utensilio puede contribuir a la generación de valor de la marca. Existe la cerámica, la porcelana, la melamina, el barro, etc. 
          p(numero="5" titulo="Características del menaje") <strong>Platos:</strong> de pan, de presentación, trincheros, soperos, de postre, de consomé (también pueden ser tazas) <br><br> <strong>Copas (según tipo de bebida):</strong> agua, vino blanco, vino tinto champán, <i>vermouth</i>, jerez <i>coñac</i>, licor. <br><br><strong>Vasos:</strong> básico, tubo, <i>highBall</i>, <i>pilsner</i>, chupito <br><br> <strong>Cubiertos (puede variar según estilo/especialización del restaurante):</strong> cuchara sopera, tenedor y cuchillo de mesa, tenedor y cuchillo de trinchar, cuchillo de carne, tenedor y pala de pescado, pinzas de marisco, cuchara salsera, cuchara, tenedor y cuchillo de postre, cortador y pala de tartas. <br><br><strong>Utensilios de cocina:</strong> cucharas y cucharones, de acero inoxidable, juego de cuchillos de cocina y tijeras, tablas de cortar batería completa de sartenes y cacerolas, incluyendo ollas de presión,cazos y cestillos, <i>bowls</i> de diferentes tamaños, biberones para salsas, bandejas, moldes para hornear, brochetas, espátulas, colador.
 
      .col-lg-4.mt-4
        img(src='@/assets/curso/tema1/66.png', alt='Texto que describa la imagen')
    separador
    #t_1_8.titulo-segundo.color-acento-contenido
      h2 1.8	 Tipos de servicio en un restaurante
    p Entendemos por tipos de servicio las diferentes formas en las que podemos hacer llegar el alimento preparado a la persona que lo va a degustar, pudiendo ser éste el cliente de un restaurante, o cualquier miembro familiar que se siente en la mesa para comer.
    p Los principales tipos de servicio son: emplatado, inglesa, y <i>bufet</i>, cada uno de ellos con unas características específicas que lo hacen idóneo en función de las consideraciones oportunas que determinan la naturaleza del servicio. En el siguiente vídeo se explica con más detalle las características de cada uno de estos tipos de servicio:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4iYlPsNTcGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_1_9.titulo-segundo.color-acento-contenido
      h2 1.9	 Mercadeo digital para restaurantes
    .row.justify-content-center
      .col-lg-6
        img(src='@/assets/curso/tema1/67.png', alt='Texto que describa la imagen')

      .col-lg-6.mt-2
        p El mercadeo es el conjunto de técnicas y estudios que buscan mejorar la comercialización de un producto a partir de la identificación de las necesidades de los consumidores; al hablar puntualmente de restaurantes, este término se refiere a todas las acciones y estrategias (tanto <i>offline</i> como <i>online</i>) que buscan fidelizar al cliente, mejorar la relación con él, llegar a nuevos consumidores, promover los productos, aumentar ventas y diferenciar a la compañía.
        p En la actualidad, se debe prestar gran importancia al mercadeo digital ya que el Internet es el canal por excelencia para llegar a una mayor cantidad de clientes. La mayoría de los usuarios hoy día, usan su celular para reservar su mesa en restaurantes y una vez visitado el establecimiento, comparten opiniones que llevan a una más alta reputación digital del establecimiento. Las tendencias son claras: todos los negocios están migrando hacia una mayor virtualización de sus servicios, así que el sector gastronómico no se puede quedar atrás. 
        .row.justify-content-center
          .col-lg-12
            .cajon.color-acento-botones.p-4
              h5 Fidelización
              p.mb-0 Atraer y fidelizar comensales son de los retos más grandes que enfrenta la industria gastronómica, y el mercadeo digital es un aliado importante en este proceso.
    p.mt-4 Las estrategias de <i>marketing</i>, se utilizan con el propósito de conectar a los consumidores con la empresa, en este caso el restaurante, a nivel de los productos que se ofrecen o que se pueden llegar a ofrecer en el futuro.   No basta con dar a conocer lo que queremos vender, sino que es necesario crear planteamientos de venta con perspectiva de futuro, tomando en cuenta los canales disponibles y jugando de acuerdo a sus dinámicas. Este es el motivo por el que cada sector tiene estrategias de <i>marketing</i> específicas orientadas a cubrir sus necesidades y peculiaridades. En el siguiente recurso, podrá enterarse de las principales condiciones a tener en cuenta cuando se plantea una estrategia de mercado para restaurantes, veamos:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FH4Vv68uxCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Otra de las indicaciones establecidas dentro de esta forma de ofrecimiento del producto, son las plataformas de reserva <i>online</i>. Aunque aún existen personas que prefiere llamar para reservar una mesa en un restaurante, el uso <i>online</i> crece a medida que la edad del comensal disminuye, por ello, es importante aplicar diferentes estrategias a la hora de generar las reservas para un establecimiento gastronómico:
    .row.justify-content-center
      .col-lg-4
        .row.colort.p-4
          h3.mt-4 Económica
          p.mt-4 Las más económica pero no tan funcional: se trata de colocar un formulario en la <i>web</i> del restaurante que servirá para obtener los datos del cliente, sin embargo, se requiere de alguien que esté encargado de lo que sucede en la <i>web</i> para recibir dichos formularios a tiempo, ya que esta opción no permite confirmar la reserva al momento, ni permite cierta conectividad.
      
      .col-lg-4
        img(src='@/assets/curso/tema1/68.png', alt='Texto que describa la imagen')

      .col-lg-4
        .row.color2.p-4
          h3.mt-4 Mejor opción
          p.mt-4 La mejor opción: <i>software</i> de reservas asociado a un canal de venta. Esta es la mejor opción para restaurantes que desean difusión y notoriedad <i>online</i>. Los canales de venta, son a la vez guías y buscadores de restaurantes que te traerán nuevos clientes, pero también cobrarán su porcentaje cada que un comensal haga una reserva.
    p.mt-4 Entre las ventajas de las plataformas de reservas <i>online</i> se encuentran las siguientes:
    ul.lista-ul
      li 
        i.fas.fa-angle-right.ss
        p.mb-0 Captar nuevos clientes: con ellas se puede impactar a un público más amplio de manera que muchos clientes nuevos, podrán conocer y visitar el restaurante. 
 
      li 
        i.fas.fa-angle-right.ss
        p.mb-0 El uso del teléfono se reduce: los empleados del restaurante podrán ejercer sus tareas sin necesidad de preocuparse por contestar el teléfono y atender las reservas.
     
      li 
        i.fas.fa-angle-right.ss
        p.mb-0 No tiene horarios: los clientes pueden hacer su reserva en cualquier día y horario, sin importar si el local está abierto o cerrado.

      li 
        i.fas.fa-angle-right.ss
        p.mb-0 Recordatorios de reserva: estas plataformas siempre envían notificaciones a los clientes, por lo que éstos no olvidarán su cita con tu restaurante. 
    p.mt-4 Algunos ejemplos de plataformas de reserva <i>online</i> pueden observarse a continuación:        
    h3.mt-5  Plataformas de reserva <i>online</i>
    .row.t1.mt-5
      .col-lg-4.grupo1.p-5
        .row.mt-5
        .row.mt-5
        p.mt-4 Comprueba las reservas en tiempo real con tan solo un clic.<br>Recibe una notificación por cada nueva reserva.<br>Crea distintas cuentas de usuario para empleados concretos.<br>Registra todos los cambios en las reservas.
      .col-lg-4.grupo2.p-5
        .row.mt-5
        .row.mt-5
        p.mt-4 El restaurante debes tener su perfil en Google My Business.
        p Esta aplicación recomienda restaurantes cercanos al lugar desde donde el cliente hace la búsqueda. 
        p Hace su propia valoración de los mejores locales. Para ello tiene en cuenta las opiniones de los clientes y la información más completa y actualizada que haya proporcionado el propietario del restaurante.
      .col-lg-4.grupo3.p-5
        .row.mt-5
        .row.mt-5
        p.mt-4 Esta plataforma es casi una comunidad, donde todos los usuarios cuelgan sus opiniones de las diferentes experiencias que han vivido.

        p Cuando se acumulan las opiniones de los clientes y si en su gran mayoría son positivas, TripAdvisor proporciona al restaurante una recomendación como “el mejor restaurante del año según los usuarios”. Lo que hace que aún más clientes se decidan a probar las delicias de las que todo el mundo habla.


    p.text-center Nota. https://bit.ly/3kYCXW4
    separador
    #t_1_10.titulo-segundo.color-acento-contenido
      h2 1.10	 Costos para restaurantes
    p Calcular el costo de los alimentos es muy importante para un restaurante, principalmente porque permite tener claridad sobre el margen de utilidad y rentabilidad del negocio, además de establecer el precio de los alimentos y bebidas. A continuación, encontrará información ampliada al respecto, además de invitar a consultar el artículo de Morillo Moreno, M (2009). Costos del servicio de alimentos y bebidas en establecimientos de alojamientos turísticos Visión Gerencial, núm. 2, pp. 304-327 Universidad de los Andes Mérida, Venezuela. <a href="https://www.redalyc.org/pdf/4655/465545881013.pdf">https://www.redalyc.org/pdf/4655/465545881013.pdf</a>  en su sección 2, encontrará explicación a este tema tan interesante. 
    SlyderF.mb-5.mt-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4.mt-5
        .row.justify-content-center.mb-3.mt-4
          .col-7.marg
            img(src='@/assets/curso/tema1/icono1.svg' alt='AvatarTop')
        h4.text-center Crea una lista de inventario
        p.text-center.mb-5 Lista todos los ingredientes de los platillos que recibe cuando comienza a semana.


      .tarjeta.color-acento-contenido.p-4.mt-5
        .row.justify-content-center.mb-3.mt-4
          .col-7.marg
            img(src='@/assets/curso/tema1/icono2.svg' alt='AvatarTop')
        h4.text-center Calcula el precio de cada alimento
        p.text-center.mb-5 Calcula cuánto has gastado en tu inventario. Suma el costo de cada artículo.

      .tarjeta.color-acento-contenido.p-4.mt-5
        .row.justify-content-center.mb-3.mt-4
          .col-7.marg
            img(src='@/assets/curso/tema1/icono3.svg' alt='AvatarTop')
        h4.text-center Lleva un control de todas las compras del servicio
        p.text-center.mb-4 Mantén un control de cualquier otra compra realizada durante esa semana y agrégala a la lista.

      .tarjeta.color-acento-contenido.p-4.mt-5
        .row.justify-content-center.mb-3.mt-4
          .col-7.marg
            img(src='@/assets/curso/tema1/icono4.svg' alt='AvatarTop')
        h4.text-center Contabiliza las ventas
        p.text-center.mb-5 Contabiliza las ventas totales de tu restaurante al final de la semana o el mes.

      .tarjeta.color-acento-contenido.p-4.mt-5
        .row.justify-content-center.mb-3.mt-4
          .col-7.marg
            img(src='@/assets/curso/tema1/icono5.svg' alt='AvatarTop')
        h4.text-center Utiliza esta fórmula
        p.text-center.mb-0 Porcentaje de costo de alimentos - (Inventario inicial + compras - inventario final) + ventas de alimentos.
        p.text-center ¡Y listo! 
        p.text-center.mb-0 Porcentaje de costos = (l.l + C - l.f.) + ventas



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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

<style lang="sass">
.azxc
  @media screen and ( max-width: 420px)
    width: 93%!important
</style>
