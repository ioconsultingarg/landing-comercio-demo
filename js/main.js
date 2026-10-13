document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // Año dinámico en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú mobile
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // "Abierto ahora" según el horario del local (hora de Buenos Aires).
  // schedule: un par [abre, cierra] por día, de domingo a sábado, en minutos; null = cerrado.
  var DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  function hora(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); }
  function renderStatus(schedule) {
    var statusEl = document.getElementById('status');
    var statusText = document.getElementById('statusText');
    if (!statusEl || !statusText || !window.Intl) return;
    try {
      var now = {};
      new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Argentina/Buenos_Aires', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23'
      }).formatToParts(new Date()).forEach(function (p) { now[p.type] = p.value; });
      var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(now.weekday);
      var mins = parseInt(now.hour, 10) * 60 + parseInt(now.minute, 10);
      var ayer = schedule[(day + 6) % 7];
      var hoy = schedule[day];
      var cierre = null;
      if (ayer && ayer[1] > 1440 && mins < ayer[1] - 1440) cierre = ayer[1]; // trasnoche del día anterior
      else if (hoy && mins >= hoy[0] && mins < hoy[1]) cierre = hoy[1];
      statusEl.classList.remove('is-open', 'is-closed');
      if (cierre !== null) {
        statusEl.classList.add('is-open');
        statusText.textContent = 'Abierto ahora · cierra a las ' + hora(cierre);
        return;
      }
      var cuando = 'hoy', abre = hoy && mins < hoy[0] ? hoy[0] : null;
      for (var k = 1; abre === null && k <= 7; k++) {
        var d = schedule[(day + k) % 7];
        if (d) { abre = d[0]; cuando = k === 1 ? 'mañana' : 'el ' + DIAS[(day + k) % 7]; }
      }
      if (abre === null) return;
      statusEl.classList.add('is-closed');
      statusText.textContent = 'Cerrado ahora · abre ' + cuando + ' a las ' + hora(abre);
    } catch (e) { /* queda el texto fijo del HTML */ }
  }
  // Pizzería: martes a jueves y domingo de 19 a 00; viernes y sábado de 19 a 01; lunes cerrado
  renderStatus(window.landingSchedule || [[1140, 1440], null, [1140, 1440], [1140, 1440], [1140, 1440], [1140, 1500], [1140, 1500]]);
  window.landing = { renderStatus: renderStatus };

  // Titular: entra palabra por palabra
  var title = document.getElementById('heroTitle');
  if (title && title.animate && !reduceMotion) {
    var words = title.textContent.trim().split(/\s+/);
    title.textContent = '';
    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'w';
      span.textContent = word;
      title.appendChild(span);
      if (i < words.length - 1) title.appendChild(document.createTextNode(' '));
      span.animate(
        [{ opacity: 0, transform: 'translateY(0.5em)', filter: 'blur(8px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
        { duration: 700, delay: 120 + i * 80, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' }
      );
    });
  }

  // Pizza del hero: una porción se sirve al terminar el dibujo, se aleja con el CTA y todo gira con el scroll
  var pizza = document.getElementById('pizza');
  var heroCta = document.getElementById('heroCta');
  if (pizza) {
    setTimeout(function () { pizza.classList.add('is-served'); }, reduceMotion ? 0 : 1700);
    if (heroCta) {
      ['mouseenter', 'focus'].forEach(function (ev) {
        heroCta.addEventListener(ev, function () { pizza.classList.add('is-hot'); });
      });
      ['mouseleave', 'blur'].forEach(function (ev) {
        heroCta.addEventListener(ev, function () { pizza.classList.remove('is-hot'); });
      });
    }
    if (!reduceMotion) {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          pizza.style.setProperty('--pz-rot', (window.scrollY * 0.08).toFixed(2) + 'deg');
          ticking = false;
        });
      }, { passive: true });
    }
  }

  // Animación simple de aparición al hacer scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
