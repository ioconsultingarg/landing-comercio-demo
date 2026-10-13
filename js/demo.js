/* Capa de demo: le muestra al dueño de un comercio cómo se vería la landing con su negocio.
   Al adaptar la landing para un cliente real se borra este archivo y la barra .demo-bar. */
(function () {
  // Número de WhatsApp de IO Consulting: solo dígitos, con código de país (ej.: 54911...).
  // Vacío = WhatsApp abre y deja elegir el contacto.
  var IO_WHATSAPP = '';
  var SUFIJO = ' (prueba desde la demo de IO Consulting)';

  // Horarios por día (domingo a sábado) en minutos desde las 00:00; null = cerrado
  var RUBROS = {
    pizzeria: {
      label: 'Pizzería', nav: 'Menú',
      title: 'Pizza artesanal a la piedra, como la de siempre.',
      sub: 'Más de 15 años en el barrio. Ingredientes frescos, masa de fermentación lenta y delivery en el día.',
      ctaHero: 'Pedir ahora', ctaSee: 'Ver el menú', ctaNav: 'Pedir por WhatsApp', ctaLoc: 'Hacer un pedido',
      order: 'Hola, quiero hacer un pedido',
      itemsTitle: 'Nuestros clásicos', itemsSub: 'Tocá una pizza y el pedido sale armado por WhatsApp.',
      itemLink: 'Pedir', itemMsg: 'Hola, quiero pedir una ', badge: 'La más pedida',
      items: [
        ['Muzzarella', 'Salsa de tomate casera, muzzarella y aceitunas.', '$6.500'],
        ['Napolitana', 'Muzzarella, tomate en rodajas, ajo y orégano.', '$7.200'],
        ['Fugazzeta rellena', 'Doble masa, muzzarella y cebolla a la parrilla.', '$8.900', true],
        ['Calabresa', 'Muzzarella, longaniza calabresa y morrones.', '$8.200']
      ],
      features: [
        ['Ingredientes frescos', 'Compramos todos los días en el mercado del barrio. Nada de congelados.'],
        ['Delivery rápido', 'Entrega propia en menos de 40 minutos dentro del barrio.'],
        ['15 años en el barrio', 'Atendemos a las mismas familias desde 2011. Somos parte del barrio.']
      ],
      hours: [['Martes a jueves y domingos:', '19:00 a 00:00'], ['Viernes y sábados:', '19:00 a 01:00'], ['Lunes:', 'cerrado']],
      schedule: [[1140, 1440], null, [1140, 1440], [1140, 1440], [1140, 1440], [1140, 1500], [1140, 1500]],
      quotes: [
        ['"La fugazzeta rellena es un golazo. Pedimos casi todos los viernes."', '— Marina, vecina del barrio'],
        ['"Llega siempre caliente y en horario. Se nota que la hacen al momento."', '— Ezequiel, cliente habitué']
      ]
    },
    peluqueria: {
      label: 'Peluquería', nav: 'Servicios',
      title: 'Tu mejor corte, sin esperar turno por teléfono.',
      sub: 'Más de 10 años en el barrio. Corte, color y peinado con turno confirmado por WhatsApp.',
      ctaHero: 'Reservar turno', ctaSee: 'Ver servicios', ctaNav: 'Reservar por WhatsApp', ctaLoc: 'Reservar un turno',
      order: 'Hola, quiero reservar un turno',
      itemsTitle: 'Nuestros servicios', itemsSub: 'Tocá un servicio y el turno sale pedido por WhatsApp.',
      itemLink: 'Reservar', itemMsg: 'Hola, quiero reservar turno para ', badge: 'El más pedido',
      items: [
        ['Corte y peinado', 'Lavado, corte y brushing.', '$12.000'],
        ['Color completo', 'Tintura de raíz a puntas con productos sin amoníaco.', '$28.000', true],
        ['Mechas y balayage', 'Iluminación a mano alzada y matizado.', '$45.000'],
        ['Barbería', 'Corte de pelo y perfilado de barba.', '$9.000']
      ],
      features: [
        ['Turnos sin espera', 'Reservás por WhatsApp y te confirmamos en el momento.'],
        ['Productos profesionales', 'Trabajamos con líneas de salón, sin amoníaco.'],
        ['10 años en el barrio', 'Un equipo estable que ya conoce tu pelo.']
      ],
      hours: [['Martes a sábados:', '9:00 a 19:00'], ['Domingos y lunes:', 'cerrado']],
      schedule: [null, null, [540, 1140], [540, 1140], [540, 1140], [540, 1140], [540, 1140]],
      quotes: [
        ['"Reservé por WhatsApp a la noche y al otro día ya tenía turno."', '— Carla, clienta'],
        ['"Siempre salgo conforme y respetan el horario."', '— Julián, cliente']
      ]
    },
    taller: {
      label: 'Taller mecánico', nav: 'Servicios',
      title: 'Tu auto en buenas manos, con presupuesto antes de empezar.',
      sub: 'Mecánica general, frenos y service. Consultá por WhatsApp y te respondemos en el día.',
      ctaHero: 'Pedir presupuesto', ctaSee: 'Ver servicios', ctaNav: 'Consultar por WhatsApp', ctaLoc: 'Pedir un turno',
      order: 'Hola, quiero pedir un presupuesto',
      itemsTitle: 'Servicios más pedidos', itemsSub: 'Tocá un servicio y la consulta sale armada por WhatsApp.',
      itemLink: 'Consultar', itemMsg: 'Hola, quiero consultar por ', badge: 'El más pedido',
      items: [
        ['Service completo', 'Aceite, filtros y revisión de 20 puntos.', '$85.000', true],
        ['Frenos', 'Cambio de pastillas y rectificado de discos.', '$60.000'],
        ['Tren delantero', 'Diagnóstico, alineación y balanceo.', '$95.000'],
        ['Diagnóstico por escáner', 'Lectura de fallas y presupuesto sin compromiso.', '$25.000']
      ],
      features: [
        ['Presupuesto previo', 'No tocamos nada sin que lo apruebes.'],
        ['Entrega en el día', 'La mayoría de los trabajos sale en la misma jornada.'],
        ['Garantía escrita', 'Todos los trabajos salen con garantía de mano de obra.']
      ],
      hours: [['Lunes a viernes:', '8:00 a 18:00'], ['Sábados:', '8:00 a 13:00'], ['Domingos:', 'cerrado']],
      schedule: [null, [480, 1080], [480, 1080], [480, 1080], [480, 1080], [480, 1080], [480, 780]],
      quotes: [
        ['"Me pasaron el presupuesto por WhatsApp y respetaron el precio."', '— Hernán, cliente'],
        ['"Lo dejé a la mañana y a la tarde estaba listo."', '— Paula, clienta']
      ]
    },
    consultorio: {
      label: 'Consultorio', nav: 'Especialidades',
      title: 'Atención cercana, con turnos que se piden en un mensaje.',
      sub: 'Clínica médica, pediatría y nutrición. Pedí tu turno por WhatsApp, sin esperar en línea.',
      ctaHero: 'Pedir turno', ctaSee: 'Ver especialidades', ctaNav: 'Turnos por WhatsApp', ctaLoc: 'Pedir un turno',
      order: 'Hola, quiero pedir un turno',
      itemsTitle: 'Especialidades', itemsSub: 'Tocá una especialidad y el pedido de turno sale armado por WhatsApp.',
      itemLink: 'Pedir turno', itemMsg: 'Hola, quiero pedir turno para ', badge: 'La más pedida',
      items: [
        ['Clínica médica', 'Consulta general y control anual.', '$18.000', true],
        ['Pediatría', 'Controles de niño sano y consultas del día.', '$20.000'],
        ['Nutrición', 'Plan alimentario y seguimiento mensual.', '$22.000'],
        ['Cardiología', 'Consulta con electrocardiograma.', '$30.000']
      ],
      features: [
        ['Turnos en el día', 'Sobreturnos para consultas que no pueden esperar.'],
        ['Puntualidad', 'Respetamos tu horario, sin salas de espera llenas.'],
        ['Obras sociales', 'Consultá por tu cobertura antes de venir.']
      ],
      hours: [['Lunes a viernes:', '9:00 a 20:00'], ['Sábados y domingos:', 'cerrado']],
      schedule: [null, [540, 1200], [540, 1200], [540, 1200], [540, 1200], [540, 1200], null],
      quotes: [
        ['"Pedí el turno por WhatsApp y me atendieron puntual."', '— Lucía, paciente'],
        ['"Muy buena atención, me explicaron todo con tiempo."', '— Roberto, paciente']
      ]
    }
  };

  var state = { name: '', rubro: 'pizzeria' };
  try {
    var params = new URLSearchParams(window.location.search);
    if (RUBROS[params.get('rubro')]) state.rubro = params.get('rubro');
    state.name = (params.get('negocio') || '').trim().slice(0, 40);
  } catch (e) { /* sin parámetros */ }
  var personalizado = !!state.name || state.rubro !== 'pizzeria';

  // main.js lee este horario para el indicador "Abierto ahora"
  window.landingSchedule = RUBROS[state.rubro].schedule;

  function wa(number, text) { return 'https://wa.me/' + number + '?text=' + encodeURIComponent(text); }
  function setText(key, text) {
    document.querySelectorAll('[data-t="' + key + '"]').forEach(function (el) { el.textContent = text; });
  }
  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function setLinks() {
    var r = RUBROS[state.rubro];
    var quiero = 'Hola, vi la demo de landing y quiero una para ' + (state.name || 'mi negocio') + ' (' + r.label.toLowerCase() + ')';
    document.querySelectorAll('[data-wa="order"]').forEach(function (a) { a.href = wa('', r.order + SUFIJO); });
    document.querySelectorAll('[data-wa="io"]').forEach(function (a) { a.href = wa(IO_WHATSAPP, quiero); });
  }

  function apply() {
    var r = RUBROS[state.rubro];
    var root = document.documentElement;
    if (state.rubro === 'pizzeria') root.removeAttribute('data-rubro'); else root.setAttribute('data-rubro', state.rubro);

    var marca = state.name || (r.label + ' IO Consulting');
    setText('brand', state.name || 'IO Consulting');
    setText('brandFull', marca);
    setText('ownerTitle', state.name ? 'Esto, para ' + state.name + '.' : 'Esto, para tu negocio.');
    document.title = marca + ' — demo de IO Consulting';

    var mark = document.getElementById('logoMark');
    var initial = document.getElementById('logoInitial');
    var usaInicial = !!state.name || state.rubro !== 'pizzeria';
    if (mark) mark.style.display = usaInicial ? 'none' : '';
    if (initial) { initial.hidden = !usaInicial; initial.textContent = marca.charAt(0).toUpperCase(); }

    ['nav', 'title', 'sub', 'ctaHero', 'ctaSee', 'ctaNav', 'ctaLoc', 'itemsTitle', 'itemsSub'].forEach(function (k) { setText(k, r[k]); });
    r.features.forEach(function (f, i) { setText('f' + i + 't', f[0]); setText('f' + i + 'd', f[1]); });
    r.quotes.forEach(function (q, i) { setText('q' + i, q[0]); setText('a' + i, q[1]); });

    var carta = document.getElementById('carta');
    if (carta) {
      carta.textContent = '';
      r.items.forEach(function (it) {
        var li = el('li', 'carta-item');
        var h3 = el('h3', 'carta-name', it[0]);
        if (it[3]) { h3.appendChild(document.createTextNode(' ')); h3.appendChild(el('span', 'badge', r.badge)); }
        var dots = el('span', 'carta-dots'); dots.setAttribute('aria-hidden', 'true');
        var link = el('a', 'carta-link', r.itemLink + ' ');
        var arrow = el('span', '', '→'); arrow.setAttribute('aria-hidden', 'true');
        link.appendChild(arrow);
        link.href = wa('', r.itemMsg + it[0] + SUFIJO);
        link.target = '_blank';
        link.rel = 'noopener';
        link.setAttribute('aria-label', r.itemLink + ': ' + it[0] + ', por WhatsApp');
        [h3, dots, el('span', 'carta-price', it[2]), el('p', 'carta-desc', it[1]), link].forEach(function (n) { li.appendChild(n); });
        carta.appendChild(li);
      });
    }

    var horarios = document.getElementById('horarios');
    if (horarios) {
      horarios.textContent = '';
      r.hours.forEach(function (h) {
        var li = el('li');
        li.appendChild(el('strong', '', h[0]));
        li.appendChild(document.createTextNode(' ' + h[1]));
        horarios.appendChild(li);
      });
    }

    var heroArt = document.querySelector('.hero-art');
    if (heroArt) heroArt.classList.toggle('is-icon', state.rubro !== 'pizzeria');
    document.querySelectorAll('.art').forEach(function (a) { a.hidden = a.getAttribute('data-art') !== state.rubro; });

    window.landingSchedule = r.schedule;
    if (window.landing) window.landing.renderStatus(r.schedule);
    setLinks();
  }

  function syncUrl() {
    if (!window.history || !history.replaceState) return;
    var qs = [];
    if (state.name) qs.push('negocio=' + encodeURIComponent(state.name));
    if (state.rubro !== 'pizzeria') qs.push('rubro=' + state.rubro);
    history.replaceState(null, '', window.location.pathname + (qs.length ? '?' + qs.join('&') : ''));
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (personalizado) apply(); else setLinks();

    var toggle = document.getElementById('demoToggle');
    var panel = document.getElementById('demoPanel');
    var nameInput = document.getElementById('demoName');
    var copy = document.getElementById('demoCopy');
    if (!toggle || !panel || !nameInput) return;

    nameInput.value = state.name;
    var radios = panel.querySelectorAll('input[name="rubro"]');
    radios.forEach(function (radio) {
      radio.checked = radio.value === state.rubro;
      radio.addEventListener('change', function () { state.rubro = radio.value; apply(); syncUrl(); });
    });
    nameInput.addEventListener('input', function () { state.name = nameInput.value.trim().slice(0, 40); apply(); syncUrl(); });

    toggle.addEventListener('click', function () {
      panel.hidden = !panel.hidden;
      toggle.setAttribute('aria-expanded', panel.hidden ? 'false' : 'true');
      toggle.textContent = panel.hidden ? 'Probalo con el tuyo' : 'Cerrar';
      if (!panel.hidden) nameInput.focus();
    });

    if (copy) {
      if (!navigator.clipboard) { copy.hidden = true; return; }
      copy.addEventListener('click', function () {
        navigator.clipboard.writeText(window.location.href).then(function () {
          copy.textContent = 'Link copiado';
          setTimeout(function () { copy.textContent = 'Copiar link para compartir'; }, 2000);
        });
      });
    }
  });
})();
