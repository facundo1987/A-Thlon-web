const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const translations = {
  'A-THLON · Nutrición deportiva y entrenamiento': 'A-THLON · Sports nutrition and training',
  'Servicios': 'Services',
  'Planes': 'Programs',
  'Quiénes somos': 'About us',
  'Preguntas': 'Questions',
  'Reservar consulta': 'Book a consultation',
  'Nutrición + movimiento + seguimiento': 'Nutrition + movement + support',
  'Un plan pensado para tu': 'A plan designed for your',
  'vida real': 'real life',
  'Mejorá tu alimentación, tu rendimiento y tus hábitos con un acompañamiento adaptado a vos.': 'Improve your nutrition, performance and habits with support tailored to you.',
  'Conocé los planes': 'Explore the programs',
  'Cómo trabajamos': 'How we work',
  'Atención online': 'Online consultations',
  'Seguimiento personalizado': 'Personalized support',
  'Desde cualquier lugar': 'From anywhere',
  'adaptado a tus objetivos': 'tailored to your goals',
  'Tu objetivo marca el camino': 'Your goal sets the direction',
  'No necesitás ser atleta para empezar': 'You do not need to be an athlete to start',
  'Trabajamos con personas activas y deportistas que buscan decisiones simples, un plan posible y seguimiento profesional.': 'We work with active people and athletes looking for straightforward choices, a realistic plan and professional support.',
  'Mejorar hábitos': 'Build better habits',
  'Organizá tu alimentación sin planes imposibles de sostener.': 'Organize your nutrition without plans that are impossible to maintain.',
  'Composición corporal': 'Body composition',
  'Conocé tu progreso más allá del número de la balanza.': 'Understand your progress beyond the number on the scale.',
  'Rendir mejor': 'Improve performance',
  'Acompañá tu entrenamiento con una estrategia nutricional adecuada.': 'Support your training with the right nutrition strategy.',
  'Alcanzar un desafío': 'Reach a new goal',
  'Prepará una carrera, competencia o nueva etapa con un rumbo claro.': 'Prepare for a race, competition or new stage with a clear direction.',
  'Entendé qué estás contratando': 'Know exactly what you are choosing',
  'Sin tecnicismos innecesarios: te explicamos qué incluye cada instancia y para qué sirve.': 'No unnecessary jargon: we explain what every service includes and why it matters.',
  'Consulta nutricional': 'Nutrition consultation',
  'Conversamos sobre tu salud, alimentación, actividad y objetivos para crear un plan personalizado.': 'We discuss your health, nutrition, activity and goals to create a personalized plan.',
  'Ver modalidad': 'View details',
  'Control y seguimiento': 'Progress review and support',
  'Evaluamos avances, resolvemos dudas y ajustamos el plan cuando tu proceso lo necesita.': 'We review your progress, answer questions and adjust the plan whenever your process requires it.',
  'Evaluación ISAK': 'ISAK assessment',
  'Realizamos mediciones antropométricas a domicilio bajo protocolo ISAK y te explicamos los resultados.': 'We perform at-home anthropometric measurements following the ISAK protocol and explain your results.',
  'Ver evaluación': 'View assessment',
  'Consulta online': 'Online consultation',
  'Recibí atención personalizada por videollamada, estés donde estés.': 'Receive personalized support by video call, wherever you are.',
  'Planes y precios': 'Programs and pricing',
  'Elegí cómo empezar': 'Choose how to begin',
  'Si no sabés qué opción necesitás, escribinos y te orientamos antes de reservar.': 'If you are unsure which option is right for you, message us and we will guide you before booking.',
  'Programas de 3 meses · Atención 100% online': '3-month programs · 100% online',
  'Todos los programas online incluyen': 'All online programs include',
  'Videollamadas por Google Meet': 'Video calls via Google Meet',
  'WhatsApp directo con los profesionales': 'Direct WhatsApp contact with the professionals',
  'Grupo privado con otros socios': 'Private group with other members',
  'Charlas grupales de apoyo': 'Group support sessions',
  'Nutrición · 3 meses': 'Nutrition · 3 months',
  'Consulta inicial por Meet': 'Initial consultation via Meet',
  'Plan alimentario personalizado': 'Personalized nutrition plan',
  '2 consultas de control': '2 follow-up consultations',
  'Ajustes según evolución': 'Adjustments based on your progress',
  'Seguimiento por WhatsApp': 'WhatsApp support',
  'Consultar': 'Ask about this program',
  'Entrenamiento · 3 meses': 'Training · 3 months',
  'Evaluación inicial por Meet': 'Initial assessment via Meet',
  'Rutina personalizada': 'Personalized training routine',
  'Actualización mensual': 'Monthly updates',
  'Revisión técnica por videos': 'Video-based technique review',
  'Más elegido': 'Most popular',
  'Aprox. $6.200 UYU': 'Approx. UYU 6,200',
  'Aprox. $7.600 UYU': 'Approx. UYU 7,600',
  'Aprox. $13.500 UYU': 'Approx. UYU 13,500',
  'Aprox. $1.800 UYU': 'Approx. UYU 1,800',
  'Promo lanzamiento': 'Launch offer',
  'Días': 'Days',
  'Horas': 'Hours',
  'Seg': 'Sec',
  'La promoción se renueva cada 24 horas': 'The promotion renews every 24 hours',
  'A-THLON 360 · 3 meses': 'A-THLON 360 · 3 months',
  'O 3 cuotas de $4.600': 'Or 3 installments of UYU 4,600',
  'Nutrición + entrenamiento': 'Nutrition + training',
  'Planes coordinados entre profesionales': 'Programs coordinated by both professionals',
  'Controles y ajustes mensuales': 'Monthly reviews and adjustments',
  'WhatsApp directo con ambos': 'Direct WhatsApp contact with both',
  'Reevaluación final': 'Final reassessment',
  'Antropometría ISAK a domicilio': 'At-home ISAK anthropometry',
  'Medición antropométrica a domicilio': 'At-home anthropometric assessment',
  'Protocolo ISAK': 'ISAK protocol',
  'Informe digital': 'Digital report',
  'Interpretación de resultados': 'Results explained',
  'Disponible en Unión, Parque Batlle, Pocitos, Centro, Cordón y Ciudad Vieja': 'Available in Unión, Parque Batlle, Pocitos, Centro, Cordón and Ciudad Vieja',
  'Consultá disponibilidad para otras zonas de Montevideo': 'Ask about availability in other areas of Montevideo',
  'Formas de pago: transferencia bancaria o Mercado Pago': 'Payment methods: bank transfer or Mercado Pago',
  'Cómo funciona': 'How it works',
  'Empezar puede ser simple': 'Getting started can be simple',
  'Te acompañamos desde la primera conversación hasta cada ajuste de tu plan.': 'We support you from the first conversation through every adjustment to your plan.',
  'Quiero coordinar': 'I want to book',
  'Nos escribís': 'Message us',
  'Contanos qué querés mejorar y qué modalidad preferís.': 'Tell us what you want to improve and which option you prefer.',
  'Conocemos tu punto de partida': 'We learn about your starting point',
  'Revisamos tus hábitos, rutina, antecedentes y objetivos.': 'We review your habits, routine, background and goals.',
  'Armamos tu estrategia': 'We build your strategy',
  'Recibís recomendaciones adaptadas a tus horarios y necesidades.': 'You receive recommendations adapted to your schedule and needs.',
  'Ajustamos con vos': 'We adjust the plan with you',
  'Seguimos el proceso y hacemos cambios según tu evolución.': 'We follow your progress and make changes as you evolve.',
  'Dos miradas': 'Two perspectives',
  'Un mismo objetivo': 'One shared goal',
  'A-THLON nace para unir nutrición y movimiento en un acompañamiento integral, claro y cercano. Porque un buen plan no se limita a lo que comés: tiene que entender cómo vivís y cómo te movés.': 'A-THLON brings nutrition and movement together through comprehensive, clear and approachable support. A good plan is not limited to what you eat: it must understand how you live and move.',
  'Nutrición y entrenamiento adaptados a tus objetivos.': 'Nutrition and training tailored to your goals.',
  'Nutricionista deportivo · Antropometrista ISAK Nivel 1': 'Sports nutritionist · ISAK Level 1 anthropometrist',
  'Soy Lautaro Castelo, nutricionista especializado en rendimiento deportivo y descenso de peso, y antropometrista ISAK Nivel 1. Desde hace más de dos años acompaño a personas que buscan transformar su composición corporal, mejorar su rendimiento y alcanzar sus objetivos de una manera saludable y sostenible': 'I am Lautaro Castelo, a nutritionist specializing in sports performance and weight loss, and an ISAK Level 1 anthropometrist. For more than two years, I have supported people seeking to transform their body composition, improve their performance and achieve their goals in a healthy and sustainable way',
  'Cuento con formación en suplementación, ayudas ergogénicas y nutrición aplicada a deportes de fuerza, resistencia e híbridos. Mi trabajo se enfoca especialmente en la creación y el mantenimiento de masa muscular, la optimización de la recuperación y el desarrollo de estrategias nutricionales que contribuyan a prevenir lesiones y potenciar el desempeño deportivo': 'I have training in supplementation, ergogenic aids and nutrition applied to strength, endurance and hybrid sports. My work focuses especially on building and maintaining muscle mass, optimizing recovery and developing nutrition strategies that help prevent injuries and enhance athletic performance',
  'Mi principal objetivo es adaptar la alimentación a tu ritmo de vida, tus necesidades y el deporte que practicás. Ya sea que quieras alcanzar el físico que deseás, perder grasa, ganar masa muscular o rendir mejor, voy a ayudarte a construir un plan realista y pensado para vos': 'My main goal is to adapt nutrition to your lifestyle, needs and sport. Whether you want to achieve your desired physique, lose fat, gain muscle mass or perform better, I will help you build a realistic plan designed for you',
  'Creo que obtener resultados no debería implicar dejar de disfrutar la comida ni vivir rodeado de restricciones. No se trata de prohibir alimentos, sino de aprender a alimentarse inteligentemente, tomando mejores decisiones y construyendo una relación equilibrada con la comida': 'I believe that achieving results should not mean giving up the enjoyment of food or living with constant restrictions. It is not about banning foods, but about learning to eat intelligently, making better choices and building a balanced relationship with food',
  'Entrenador personal': 'Personal trainer',
  'Soy Federico Campiño, entrenador personal con más de 15 años de experiencia ayudando a personas a mejorar su condición física, su salud y su calidad de vida': 'I am Federico Campiño, a personal trainer with more than 15 years of experience helping people improve their fitness, health and quality of life',
  'Mi forma de trabajar parte de una idea simple: el entrenamiento tiene que adaptarse a la persona, y no la persona al entrenamiento. Por eso, cada planificación es personalizada según tus objetivos, tu nivel, tus tiempos y tu realidad': 'My approach is based on a simple idea: training should adapt to the person, not the person to the training. Every program is therefore personalized around your goals, level, schedule and circumstances',
  'Ya sea que busques perder grasa, ganar masa muscular, mejorar tu rendimiento o simplemente sentirte mejor y más fuerte, mi objetivo es acompañarte con un plan claro, progresivo y sostenible': 'Whether you want to lose fat, gain muscle, improve performance or simply feel better and stronger, my goal is to support you with a clear, progressive and sustainable plan',
  'Ver más': 'Read more',
  'Ver menos': 'Read less',
  'Preguntas frecuentes': 'Frequently asked questions',
  'Antes de empezar': 'Before you begin',
  '¿Necesito ser deportista para consultar?': 'Do I need to be an athlete?',
  'No. La propuesta también está pensada para personas que quieren ordenar su alimentación, mejorar hábitos o comenzar a moverse con una guía.': 'No. Our services are also designed for people who want to organize their nutrition, improve their habits or start moving with professional guidance.',
  '¿Cómo funciona una consulta online?': 'How does an online consultation work?',
  'Coordinamos una videollamada para conocer tus hábitos y objetivos. Después recibís las recomendaciones acordadas y continuamos en contacto para el seguimiento.': 'We arrange a video call to learn about your habits and goals. You then receive the agreed recommendations and we remain in contact for follow-up support.',
  '¿Qué es una evaluación antropométrica?': 'What is an anthropometric assessment?',
  'Es una serie de mediciones corporales realizadas a domicilio bajo protocolo ISAK. Permite observar la composición corporal y comparar cambios durante el proceso.': 'It is a series of body measurements performed at your home following the ISAK protocol. It helps assess body composition and compare changes throughout the process.',
  '¿En qué zonas realizan la antropometría a domicilio?': 'Where is the at-home anthropometry service available?',
  'El servicio se realiza en Montevideo, principalmente en Unión, Parque Batlle, Pocitos, Centro, Cordón y Ciudad Vieja. Si estás en otro barrio, consultanos para confirmar disponibilidad.': 'The service is available in Montevideo, mainly in Unión, Parque Batlle, Pocitos, Centro, Cordón and Ciudad Vieja. If you are in another neighborhood, contact us to confirm availability.',
  'Tu próximo paso': 'Your next step',
  '¿Hablamos de tus objetivos?': 'Shall we talk about your goals?',
  'Escribinos por WhatsApp. Te ayudamos a encontrar la modalidad adecuada para vos.': 'Message us on WhatsApp. We will help you find the right option for your goals.',
  'Escribir por WhatsApp': 'Message us on WhatsApp',
  'Nutrición deportiva y entrenamiento personalizado.': 'Sports nutrition and personalized training.',
  'Explorar': 'Explore',
  'Contacto': 'Contact',
  'Montevideo, Uruguay': 'Montevideo, Uruguay',
  'Programas y precios vigentes': 'Current programs and pricing'
};

const serviceTranslations = {
  'el programa de nutrición de 3 meses': 'the 3-month nutrition program',
  'el programa de entrenamiento de 3 meses': 'the 3-month training program',
  'el programa A-THLON 360 de 3 meses': 'the 3-month A-THLON 360 program',
  'una consulta': 'a consultation'
};

const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const original = node.nodeValue.trim();
  if (original && translations[original]) {
    textNodes.push({ node, original, translated: translations[original] });
  }
}

let currentLanguage = localStorage.getItem('athlon-language') === 'en' ? 'en' : 'es';
const whatsappNumber = '59894959168';

function updateWhatsAppLinks() {
  document.querySelectorAll('.js-whatsapp').forEach((link) => {
    const service = link.dataset.service || 'una consulta';
    let message;
    if (currentLanguage === 'en') {
      message = link.dataset.messageEn || 'Hello, I visited the A-THLON website and would like information about ' + (serviceTranslations[service] || 'a consultation') + '.';
    } else {
      message = link.dataset.message || 'Hola, vi la web de A-THLON y quisiera información sobre ' + service + '.';
    }
    link.href = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
    link.target = '_blank';
    link.rel = 'noopener';
  });
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  textNodes.forEach(({ node, original, translated }) => {
    const whitespaceStart = node.nodeValue.match(/^\s*/)[0];
    const whitespaceEnd = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = whitespaceStart + (language === 'en' ? translated : original) + whitespaceEnd;
  });

  document.title = language === 'en' ? 'A-THLON | Sports nutrition' : 'A-THLON | Nutrición deportiva';
  document.querySelector('meta[name="description"]').content = language === 'en'
    ? 'A-THLON: sports nutrition and personalized training in Montevideo.'
    : 'A-THLON: nutrición deportiva y entrenamiento personalizado en Montevideo.';

  document.querySelector('.brand').setAttribute('aria-label', language === 'en' ? 'A-THLON, home' : 'A-THLON, inicio');
  menuButton?.setAttribute('aria-label', language === 'en' ? 'Open menu' : 'Abrir menú');
  menu?.setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Navegación principal');
  document.querySelector('.hero-points')?.setAttribute('aria-label', language === 'en' ? 'Features' : 'Características');
  document.querySelector('.language-switch')?.setAttribute('aria-label', language === 'en' ? 'Language' : 'Idioma');

  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === language;
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('.bio-more').forEach((details) => {
    details.querySelector('summary').textContent = language === 'en'
      ? (details.open ? 'Read less' : 'Read more')
      : (details.open ? 'Ver menos' : 'Ver más');
  });

  localStorage.setItem('athlon-language', language);
  updateWhatsAppLinks();
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});

document.querySelectorAll('.bio-more').forEach((details) => {
  details.addEventListener('toggle', () => {
    details.querySelector('summary').textContent = currentLanguage === 'en'
      ? (details.open ? 'Read less' : 'Read more')
      : (details.open ? 'Ver menos' : 'Ver más');
  });
});

const countdownElement = document.querySelector('.countdown');

if (countdownElement) {
  const countdownKey = 'athlon-launch-offer-deadline';
  const cycleDuration = 24 * 60 * 60 * 1000;
  let deadline = Number(localStorage.getItem(countdownKey));

  if (!deadline || deadline <= Date.now()) {
    deadline = Date.now() + cycleDuration;
    localStorage.setItem(countdownKey, String(deadline));
  }

  const padCountdown = (value) => String(value).padStart(2, '0');
  const updateCountdown = () => {
    const now = Date.now();

    while (deadline <= now) {
      deadline += cycleDuration;
    }

    localStorage.setItem(countdownKey, String(deadline));
    const remaining = deadline - now;
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    countdownElement.querySelector('[data-countdown-days]').textContent = padCountdown(days);
    countdownElement.querySelector('[data-countdown-hours]').textContent = padCountdown(hours);
    countdownElement.querySelector('[data-countdown-minutes]').textContent = padCountdown(minutes);
    countdownElement.querySelector('[data-countdown-seconds]').textContent = padCountdown(seconds);
    countdownElement.setAttribute(
      'aria-label',
      currentLanguage === 'en'
        ? 'Time until the next promotion renewal'
        : 'Tiempo hasta la próxima renovación de la promoción'
    );
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

document.getElementById('year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}

applyLanguage(currentLanguage);
