const rutinasFamosos = [
  // Nivel EXTREMO
  {
    id: 'cr7',
    dificultad: 'extrema',
    nombre: 'Cristiano Ronaldo',
    descripcion: 'Fuerza explosiva, agilidad, resistencia cardiovascular, core de acero y definición muscular sin perder rendimiento',
    dias: [
      {
        dia: 'Lunes - Tren inferior + Sprint + Core',
        extras: ['Calentamiento Jumping jacks 2 min, sentadillas con peso corporal x 20 y skiping alto x 30 seg', 'Sprint:10 x 40 metros (descanso 30 seg)'],
        ejercicios: [
          { nombre: 'Sentadillas con barra', repeticiones: '4 x 8' },
          { nombre: 'Peso muerto rumano', repeticiones: '4 x 10' },
          { nombre: 'Prensa 45', repeticiones: '4 x 12' },
          { nombre: 'Zancadas caminando con mancuernas', repeticiones: '3 x 15 c/pierna' },
          { nombre: 'Elevación de talones', repeticiones: '4 x 20' },
          { nombre: 'Plancha frontal', repeticiones: '3 x 1 min' },
          { nombre: 'Ab wheel', repeticiones: '3 x 10' },
          { nombre: 'Elevación de piernas colgado', repeticiones: '3 x 15' },
          { nombre: 'Crunch bicicleta', repeticiones: '3 x 30' }
        ]
      },
      {
        dia: 'Martes - Tren superior + Circuito funcional',
        extras: ['Circuito funcional 3 vueltas, sin descanso entre ejercicios): Burpees x 10, Battle ropes x 30”, Wall balls x 15, Saltos laterales con vallas x 10'],
        ejercicios: [
          { nombre: 'Press banca plano', repeticiones: '4 x 10' },
          { nombre: 'Remo con barra', repeticiones: '4 x 10' },
          { nombre: 'Fondos en paralelas', repeticiones: '3 x 15' },
          { nombre: 'Dominadas estrictas', repeticiones: '4 x fallo' },
          { nombre: 'Press militar con mancuernas', repeticiones: '3 x 10' },
          { nombre: 'Curl bíceps barra Z', repeticiones: '3 x 12' },
          { nombre: 'Tríceps cuerda en polea', repeticiones: '3 x 12' }
        ]
      },
            {
        dia: 'Miercoles - HIIT + Core + Técnica',
        extras: ['30 seg sprint / 30 seg trote x 10, 1 min descanso, 20 seg sprint / 10 seg descanso x 8'],
        ejercicios: [
          { nombre: 'Russian twists con balón', repeticiones: '4 x 20' },
          { nombre: 'Crunch con polea alta', repeticiones: '4 x 15' },
          { nombre: 'Plancha con extensión de brazo', repeticiones: '3 x 12 c/brazo' },
          { nombre: 'L-sit en paralelas', repeticiones: '3 x 30 seg' }
        ]
      },
      {
        dia: 'Jueves - Cardio técnico',
        extras: ['Sprint + trote combinado 10 min'],
        ejercicios: [
          { nombre: 'Burpees con salto alto', repeticiones: '5 x 15' },
          { nombre: 'Mountain climbers rápidos', repeticiones: '4 x 30s' },
          { nombre: 'Sprints en escalera (simulado)', repeticiones: '5 x 15s' }
        ]
      },
      {
        dia: 'Viernes - Tren superior explosivo',
        extras: ['Activación de hombros y dorsales'],
        ejercicios: [
          { nombre: 'Flexiones con palmada', repeticiones: '5 x 12' },
          { nombre: 'Remo con mochila', repeticiones: '4 x 15' },
          { nombre: 'Plancha con rotación', repeticiones: '4 x 30s' }
        ]
      },
      {
        dia: 'Sábado - Full body recuperación activa',
        extras: ['Movilidad completa, 20 min', 'Soga suave + respiración profunda'],
        ejercicios: [
          { nombre: 'Jumping jacks', repeticiones: '4 x 1min' },
          { nombre: 'Squats controladas', repeticiones: '3 x 20' },
          { nombre: 'Stretching dinámico', repeticiones: '20 min guiado' }
        ]
      }
    ]
  },

  {
    id: 'batman',
    dificultad: 'extrema',
    nombre: 'Batman',
    descripcion: 'Fuerza, combate cuerpo a cuerpo y disciplina total. Rutina tipo militar para cuerpo completo.',
    dias: [
      {
        dia: 'Lunes - Fuerza total y core',
        extras: ['Calentamiento con sombra de combate 5 min'],
        ejercicios: [
          { nombre: 'Flexiones diamante', repeticiones: '5 x 15' },
          { nombre: 'Plancha con peso (mochila)', repeticiones: '5 x 1min' },
          { nombre: 'Crunch con golpe', repeticiones: '5 x 20' }
        ]
      },
      {
        dia: 'Miércoles - Agilidad y combate',
        extras: ['Shadow boxing + movilidad articular'],
        ejercicios: [
          { nombre: 'Burpees rápidos', repeticiones: '4 x 15' },
          { nombre: 'Salto lateral explosivo', repeticiones: '4 x 30s' },
          { nombre: 'Planchas rotativas', repeticiones: '4 x 45s' }
        ]
      },
      {
        dia: 'Viernes - Estabilidad + tren inferior',
        extras: ['Movilidad de tobillos y core lateral'],
        ejercicios: [
          { nombre: 'Sentadillas isométricas', repeticiones: '4 x 1min' },
          { nombre: 'Lunges con peso (mochila)', repeticiones: '4 x 15 por pierna' },
          { nombre: 'Abdominales tipo murciélago (encogidos invertidos)', repeticiones: '4 x 20' }
        ]
      },
      {
        dia: 'Sábado - Técnica y enfoque mental',
        extras: ['Estiramiento largo + respiración box 4x4x4x4'],
        ejercicios: [
          { nombre: 'Flexiones lentas con control', repeticiones: '3 x 10' },
          { nombre: 'Meditación guiada 10 min', repeticiones: '' },
          { nombre: 'Movilidad de cadena posterior', repeticiones: '15 min' }
        ]
      }
    ]
  },

  {
    id: 'rocky',
    dificultad: 'extrema',
    nombre: 'Rocky Balboa',
    descripcion: 'Boxeo clásico, resistencia callejera, rounds de sombra y cuerda. Ideal para peleadores.',
    dias: [
      {
        dia: 'Lunes - Técnica y sombra',
        extras: ['Soga 5 min', '3 rounds de sombra con temporizador'],
        ejercicios: [
          { nombre: 'Flexiones explosivas', repeticiones: '4 x 20' },
          { nombre: 'Shadow boxing', repeticiones: '3 x 2min' },
          { nombre: 'Abdominales tipo boxeador', repeticiones: '4 x 25' }
        ]
      },
      {
        dia: 'Martes - Cardio y piernas',
        extras: ['Soga alterna + saltos bajos'],
        ejercicios: [
          { nombre: 'Soga continua', repeticiones: '4 x 2min' },
          { nombre: 'Zancadas cruzadas', repeticiones: '3 x 15 por pierna' },
          { nombre: 'Sentadillas con salto', repeticiones: '4 x 15' }
        ]
      },
      {
        dia: 'Jueves - Core y reflejos',
        extras: ['Ejercicios con timer de reacción'],
        ejercicios: [
          { nombre: 'Crunches con golpe', repeticiones: '4 x 25' },
          { nombre: 'Plancha con toques', repeticiones: '4 x 30s' },
          { nombre: 'Rodillas al pecho', repeticiones: '4 x 30s' }
        ]
      },
      {
        dia: 'Viernes - Sparring técnico (simulado)',
        extras: ['Sombra reactiva con audio (puede usarse app de boxeo)'],
        ejercicios: [
          { nombre: 'Shadow boxing a velocidad', repeticiones: '3 x 1min' },
          { nombre: 'Push-ups al fallo', repeticiones: '3 sets' },
          { nombre: 'Soga con doble salto', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Sábado - Recuperación activa de boxeador',
        extras: ['Caminata + soga suave 15 min', 'Estiramiento profundo guiado'],
        ejercicios: [
          { nombre: 'Jumping jacks', repeticiones: '3 x 1min' },
          { nombre: 'Trote en el lugar', repeticiones: '3 x 2min' },
          { nombre: 'Stretching dinámico', repeticiones: '15 min' }
        ]
      }
    ]
  },
    {
    id: 'wonderwoman',
    dificultad: 'alta',
    nombre: 'Wonder Woman',
    descripcion: 'Fuerza funcional, equilibrio y potencia femenina inspirada en la amazona.',
    dias: [
      {
        dia: 'Lunes - Estabilidad y glúteos',
        extras: ['Activación de glúteos con banda', 'Estiramientos de cadera y tobillos'],
        ejercicios: [
          { nombre: 'Zancadas con pausa', repeticiones: '3 x 15' },
          { nombre: 'Step-ups en banco', repeticiones: '3 x 10 por pierna' },
          { nombre: 'Sentadillas búlgaras', repeticiones: '3 x 12' }
        ]
      },
      {
        dia: 'Miércoles - Fuerza y escudo',
        extras: ['Activación de hombros', 'Soga suave 3 min'],
        ejercicios: [
          { nombre: 'Flexiones inclinadas', repeticiones: '3 x 15' },
          { nombre: 'Remo con mochila', repeticiones: '3 x 12' },
          { nombre: 'Plancha con extensión de brazos', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Viernes - Core amazona',
        extras: ['Circuito abdominal 5 min'],
        ejercicios: [
          { nombre: 'Crunches', repeticiones: '3 x 20' },
          { nombre: 'Elevación de piernas', repeticiones: '3 x 15' },
          { nombre: 'Plancha frontal', repeticiones: '3 x 1min' }
        ]
      },
      {
        dia: 'Sábado - Agilidad funcional',
        extras: ['Movilidad total guiada 10 min'],
        ejercicios: [
          { nombre: 'Saltos laterales', repeticiones: '3 x 30s' },
          { nombre: 'Mountain climbers', repeticiones: '3 x 30s' },
          { nombre: 'Flexiones rodilla al codo', repeticiones: '3 x 12' }
        ]
      }
    ]
  },
  {
    id: 'goku',
    dificultad: 'alta',
    nombre: 'Goku',
    descripcion: 'Potencia, cardio de combate y meditación al estilo Saiyajin.',
    dias: [
      {
        dia: 'Lunes - Fuerza básica Saiyajin',
        extras: ['Respiración controlada + movilidad articular'],
        ejercicios: [
          { nombre: 'Flexiones estándar', repeticiones: '4 x 15' },
          { nombre: 'Sentadillas con salto', repeticiones: '4 x 15' },
          { nombre: 'Abdominales con giro', repeticiones: '4 x 20' }
        ]
      },
      {
        dia: 'Miércoles - Combate y explosividad',
        extras: ['Sombra marcial estilo Dragon Ball Z 3 min'],
        ejercicios: [
          { nombre: 'Burpees', repeticiones: '4 x 15' },
          { nombre: 'Sprints en el lugar', repeticiones: '4 x 20s' },
          { nombre: 'Shadow combo (box + patadas)', repeticiones: '3 x 1min' }
        ]
      },
      {
        dia: 'Viernes - Core y poder interior',
        extras: ['Meditación guiada 5 min', 'Estiramiento estático'],
        ejercicios: [
          { nombre: 'Crunch inverso', repeticiones: '3 x 25' },
          { nombre: 'Plancha lateral con elevación', repeticiones: '3 x 30s por lado' },
          { nombre: 'Elevaciones de pierna recta', repeticiones: '3 x 15' }
        ]
      },
      {
        dia: 'Sábado - Control mental y técnica',
        extras: ['Yoga dinámico', 'Respiración cuadrada'],
        ejercicios: [
          { nombre: 'Plancha con brazo extendido', repeticiones: '3 x 30s' },
          { nombre: 'Shadow con pausas', repeticiones: '3 x 1min' },
          { nombre: 'Posturas estables (guerrero, tabla)', repeticiones: '10 min guiado' }
        ]
      }
    ]
  },
  {
    id: 'capitan',
    dificultad: 'alta',
    nombre: 'Capitán América',
    descripcion: 'Entrenamiento funcional completo, fuerza, agilidad y estabilidad al estilo supersoldado.',
    dias: [
      {
        dia: 'Lunes - Tren superior de escudo',
        extras: ['Movilidad escapular', 'Activación de espalda y hombros'],
        ejercicios: [
          { nombre: 'Flexiones abiertas', repeticiones: '4 x 15' },
          { nombre: 'Remo unilateral con mochila', repeticiones: '4 x 12 por lado' },
          { nombre: 'Plancha con toque de hombro', repeticiones: '4 x 45s' }
        ]
      },
      {
        dia: 'Miércoles - Piernas y reacción',
        extras: ['Saltos de reacción al sonido', 'Estiramientos dinámicos'],
        ejercicios: [
          { nombre: 'Sentadillas con mochila', repeticiones: '4 x 20' },
          { nombre: 'Jump squats', repeticiones: '3 x 12' },
          { nombre: 'Sprints bajos en el lugar', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Viernes - Core vibranium',
        extras: ['Core dinámico 5 min'],
        ejercicios: [
          { nombre: 'Crunches bicicleta', repeticiones: '4 x 30s' },
          { nombre: 'Plancha con desplazamiento', repeticiones: '3 x 1min' },
          { nombre: 'Abdominales laterales con peso', repeticiones: '3 x 20 por lado' }
        ]
      },
      {
        dia: 'Sábado - Combate funcional',
        extras: ['Sombra reactiva + desplazamientos'],
        ejercicios: [
          { nombre: 'Shadow boxing + esquives', repeticiones: '3 x 1min' },
          { nombre: 'Push-up con salto lateral', repeticiones: '3 x 12' },
          { nombre: 'Trote con frenadas cortas', repeticiones: '3 x 30s' }
        ]
      }
    ]
  },
    {
    id: 'spiderman',
    dificultad: 'media',
    nombre: 'Spider-Man',
    descripcion: 'Agilidad, flexibilidad y resistencia urbana para un héroe acrobático.',
    dias: [
      {
        dia: 'Lunes - Agilidad de telaraña',
        extras: ['Movilidad de tobillos y muñecas', 'Saltos coordinados'],
        ejercicios: [
          { nombre: 'Saltos laterales rápidos', repeticiones: '3 x 30s' },
          { nombre: 'Mountain climbers', repeticiones: '3 x 30s' },
          { nombre: 'Flexiones con toque de hombro', repeticiones: '3 x 12' }
        ]
      },
      {
        dia: 'Miércoles - Core y equilibrio',
        extras: ['Plancha en equilibrio con apoyo reducido'],
        ejercicios: [
          { nombre: 'Plancha alternando pierna y brazo', repeticiones: '3 x 30s' },
          { nombre: 'Crunches cruzados', repeticiones: '3 x 20' },
          { nombre: 'Elevación de piernas', repeticiones: '3 x 15' }
        ]
      },
      {
        dia: 'Viernes - Resistencia urbana',
        extras: ['Saltos a escalón bajo', 'Caminata ligera previa'],
        ejercicios: [
          { nombre: 'Sentadillas normales', repeticiones: '3 x 20' },
          { nombre: 'Trote en el lugar', repeticiones: '3 x 1min' },
          { nombre: 'Sombra libre tipo parkour', repeticiones: '3 x 1min' }
        ]
      }
    ]
  },

  {
    id: 'laracroft',
    dificultad: 'media',
    nombre: 'Lara Croft',
    descripcion: 'Entrenamiento funcional aventurero con movilidad, fuerza práctica y cardio de terreno.',
    dias: [
      {
        dia: 'Lunes - Fuerza práctica',
        extras: ['Cargada de mochila para movilidad de brazos'],
        ejercicios: [
          { nombre: 'Push-ups estándar', repeticiones: '3 x 15' },
          { nombre: 'Remo con mochila', repeticiones: '3 x 12' },
          { nombre: 'Flexión con rotación', repeticiones: '3 x 10' }
        ]
      },
      {
        dia: 'Miércoles - Piernas de exploradora',
        extras: ['Desplantes largos', 'Sentadillas con desplazamiento lateral'],
        ejercicios: [
          { nombre: 'Lunges hacia atrás', repeticiones: '3 x 15' },
          { nombre: 'Step-ups', repeticiones: '3 x 10 por pierna' },
          { nombre: 'Sentadilla isométrica', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Viernes - Core de equilibrio',
        extras: ['Plancha lateral alterna', 'Movilidad pélvica'],
        ejercicios: [
          { nombre: 'Crunch inverso', repeticiones: '3 x 20' },
          { nombre: 'Plancha frontal', repeticiones: '3 x 45s' },
          { nombre: 'Elevación alternada de pierna', repeticiones: '3 x 20' }
        ]
      }
    ]
  },

  {
    id: 'blackpanther',
    dificultad: 'media',
    nombre: 'Black Panther',
    descripcion: 'Movilidad felina, fuerza ágil y cardio de caza para reflejos y elasticidad.',
    dias: [
      {
        dia: 'Martes - Movimiento felino',
        extras: ['Ejercicios de movilidad articular de caderas y hombros'],
        ejercicios: [
          { nombre: 'Salto lateral bajo', repeticiones: '3 x 30s' },
          { nombre: 'Bear crawl', repeticiones: '3 x 20s' },
          { nombre: 'Desplante con desplazamiento', repeticiones: '3 x 12 por pierna' }
        ]
      },
      {
        dia: 'Jueves - Estabilidad Wakanda',
        extras: ['Yoga dinámico 5 min'],
        ejercicios: [
          { nombre: 'Plancha lateral', repeticiones: '3 x 30s por lado' },
          { nombre: 'Crunch en V', repeticiones: '3 x 20' },
          { nombre: 'Postura animal (pantera)', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Sábado - Resistencia real',
        extras: ['Sombra ágil con desplazamientos laterales'],
        ejercicios: [
          { nombre: 'Sprint en el lugar', repeticiones: '3 x 30s' },
          { nombre: 'Mountain climbers', repeticiones: '3 x 30s' },
          { nombre: 'Jump squats', repeticiones: '3 x 12' }
        ]
      }
    ]
  },
    {
    id: 'mariofit',
    dificultad: 'baja',
    nombre: 'Mario Fit',
    descripcion: 'Un fontanero activo con fuerza básica, saltos constantes y energía positiva.',
    dias: [
      {
        dia: 'Lunes - Saltos y piernas',
        extras: ['Movilidad de rodillas', 'Saltos en el lugar con música'],
        ejercicios: [
          { nombre: 'Jumping jacks', repeticiones: '3 x 30s' },
          { nombre: 'Sentadillas normales', repeticiones: '3 x 15' },
          { nombre: 'Saltitos con rodillas al pecho', repeticiones: '3 x 20s' }
        ]
      },
      {
        dia: 'Miércoles - Core básico',
        extras: ['Respiración y elongación lumbar'],
        ejercicios: [
          { nombre: 'Crunches', repeticiones: '3 x 15' },
          { nombre: 'Plancha frontal', repeticiones: '3 x 30s' },
          { nombre: 'Abdominales laterales', repeticiones: '3 x 15 por lado' }
        ]
      },
      {
        dia: 'Viernes - Fuerza ligera',
        extras: ['Caminata de activación 10 min'],
        ejercicios: [
          { nombre: 'Flexiones con rodillas apoyadas', repeticiones: '3 x 10' },
          { nombre: 'Remo con botella', repeticiones: '3 x 12' },
          { nombre: 'Estiramientos activos', repeticiones: '5 min' }
        ]
      }
    ]
  },

  {
    id: 'steve',
    dificultad: 'baja',
    nombre: 'Steve (Minecraft)',
    descripcion: 'Trabajo físico funcional para sobrevivir en el mundo cúbico: carga, agilidad y vida en la naturaleza.',
    dias: [
      {
        dia: 'Martes - Carga básica',
        extras: ['Caminata con mochila 10 min'],
        ejercicios: [
          { nombre: 'Sentadillas con mochila', repeticiones: '3 x 15' },
          { nombre: 'Push-ups suaves', repeticiones: '3 x 10' },
          { nombre: 'Zancadas simples', repeticiones: '3 x 10 por pierna' }
        ]
      },
      {
        dia: 'Jueves - Agilidad del cubo',
        extras: ['Saltar sobre una caja baja'],
        ejercicios: [
          { nombre: 'Step-ups en escalón', repeticiones: '3 x 12 por pierna' },
          { nombre: 'Saltitos en el lugar', repeticiones: '3 x 30s' },
          { nombre: 'Shadow survival (agacharse y pararse)', repeticiones: '3 x 10' }
        ]
      },
      {
        dia: 'Sábado - Exploración y core',
        extras: ['Respiración + movilidad de columna'],
        ejercicios: [
          { nombre: 'Crunch básico', repeticiones: '3 x 20' },
          { nombre: 'Plancha apoyando rodillas', repeticiones: '3 x 30s' },
          { nombre: 'Marcha con elevación de piernas', repeticiones: '3 x 20s' }
        ]
      }
    ]
  },

  {
    id: 'eleven',
    dificultad: 'baja',
    nombre: 'Eleven (Stranger Things)',
    descripcion: 'Rutina mental-física de control interno, estabilidad y concentración con activación corporal.',
    dias: [
      {
        dia: 'Lunes - Control y enfoque',
        extras: ['Respiración cuadrada', 'Meditación guiada'],
        ejercicios: [
          { nombre: 'Plancha frontal', repeticiones: '3 x 30s' },
          { nombre: 'Flexiones suaves', repeticiones: '3 x 8' },
          { nombre: 'Postura de superman', repeticiones: '3 x 20s' }
        ]
      },
      {
        dia: 'Miércoles - Estabilidad mental y core',
        extras: ['Visualización guiada 5 min'],
        ejercicios: [
          { nombre: 'Crunch lento', repeticiones: '3 x 20' },
          { nombre: 'Plancha lateral', repeticiones: '3 x 20s por lado' },
          { nombre: 'Elevación alternada de brazos y piernas', repeticiones: '3 x 20' }
        ]
      },
      {
        dia: 'Viernes - Activación extrasensorial',
        extras: ['Estiramientos lentos con respiración', 'Música de ambiente'],
        ejercicios: [
          { nombre: 'Trote en el lugar', repeticiones: '3 x 1min' },
          { nombre: 'Jumping jacks suaves', repeticiones: '3 x 30s' },
          { nombre: 'Postura del árbol (yoga)', repeticiones: '3 x 30s' }
        ]
      }
    ]
  },
    {
    id: 'ted',
    dificultad: 'inicial',
    nombre: 'Ted Lasso',
    descripcion: 'Rutina positiva, gentil y de iniciación, pensada para moverse con una sonrisa.',
    dias: [
      {
        dia: 'Lunes - Movimiento optimista',
        extras: ['Música alegre', 'Estiramientos suaves'],
        ejercicios: [
          { nombre: 'Caminata en el lugar', repeticiones: '3 x 1min' },
          { nombre: 'Marcha con brazos arriba', repeticiones: '3 x 45s' },
          { nombre: 'Estiramiento de brazos y cuello', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Miércoles - Energía baja pero activa',
        extras: ['Respiración nasal', 'Afirmaciones positivas'],
        ejercicios: [
          { nombre: 'Trote suave en el lugar', repeticiones: '3 x 30s' },
          { nombre: 'Elevaciones de rodilla sentado', repeticiones: '3 x 12 por pierna' },
          { nombre: 'Giros de torso sentado', repeticiones: '3 x 15' }
        ]
      }
    ]
  },
  {
    id: 'poohfit',
    dificultad: 'inicial',
    nombre: 'Winnie Pooh Fit',
    descripcion: 'Rutina divertida para comenzar a moverse con dulzura, sin esfuerzo ni prisa.',
    dias: [
      {
        dia: 'Martes - Despertar corporal',
        extras: ['Respiración lenta', 'Movilidad con suavidad'],
        ejercicios: [
          { nombre: 'Estiramiento de cuerpo entero', repeticiones: '3 x 30s' },
          { nombre: 'Movimientos de brazos y hombros', repeticiones: '3 x 12' },
          { nombre: 'Sentado: marcha leve', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Jueves - Movimiento con alegría',
        extras: ['Canción favorita', 'Sonrisa garantizada'],
        ejercicios: [
          { nombre: 'Saltitos suaves', repeticiones: '3 x 20s' },
          { nombre: 'Movimientos circulares de piernas', repeticiones: '3 x 10 por lado' },
          { nombre: 'Sombra de osito (movimiento libre)', repeticiones: '3 x 1min' }
        ]
      }
    ]
  },
  {
    id: 'bobfit',
    dificultad: 'inicial',
    nombre: 'Bob Esponja Fit',
    descripcion: 'Rutina con energía marina para principiantes alegres. Ideal para romper el hielo.',
    dias: [
      {
        dia: 'Miércoles - Fondo de bikini warm-up',
        extras: ['Baile libre', 'Respiración burbujeante'],
        ejercicios: [
          { nombre: 'Jumping jacks muy suaves', repeticiones: '3 x 20s' },
          { nombre: 'Giros de cintura', repeticiones: '3 x 15' },
          { nombre: 'Estiramiento como estrella de mar', repeticiones: '3 x 30s' }
        ]
      },
      {
        dia: 'Viernes - Energía marina',
        extras: ['Agua cerca para beber', 'Movimiento sin presión'],
        ejercicios: [
          { nombre: 'Saltitos con brazos', repeticiones: '3 x 20s' },
          { nombre: 'Sentadillas al ritmo', repeticiones: '3 x 10' },
          { nombre: 'Plancha de estrella', repeticiones: '3 x 20s' }
        ]
      }
    ]
  }
]

export default rutinasFamosos;
