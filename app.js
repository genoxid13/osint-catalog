(function(){
'use strict';

// ============ ПЕРЕВОДЫ ============
var I18N = {
  ru:{
    title:'Каталог инструментов OSINT', founder:'founder —', tg:'Telegram-канал',
    faceBtn:'Поиск по фото',
    searchPh:'Поиск по инструментам...', fCat:'Категория', fSort:'Сортировка',
    fType:'Тип', fAcc:'Доступ', fav:'Избранные', empty:'😕 Ничего не найдено. Попробуй другой запрос.',
    tgSub:'Подписаться на Telegram-канал', legal:'Все инструменты предназначены для легального использования.',
    all:'Все', sortPop:'По популярности', sortName:'По названию (А-Я)', sortNameD:'По названию (Я-А)',
    typeAll:'Все типы', typeWeb:'Веб-сервис', typeCli:'CLI / утилита', typeApi:'API',
    accAny:'Любой', accFree:'Бесплатно', accFreemium:'Freemium', accPaid:'Платно',
    expand:'свернуть', collapse:'раскрыть',
    mTitle:'Поиск по фото лица',
    mDesc:'Загрузите фото лица — мы покажем сервисы, где можно проверить это фото в открытых источниках. Загрузка происходит только в вашем браузере, никуда не отправляется.',
    dzTitle:'Перетащите фото сюда', dzHint:'или нажмите, чтобы выбрать файл (JPG, PNG, WEBP)',
    changeBtn:'Выбрать другое фото', svcTitle:'Проверить это фото в:',
    s1:'Поиск лиц по фото через AI — крупнейшая база', s2:'AI-поиск человека по фото лица в соцсетях',
    s3:'Обратный поиск по лицу — лучший в рунете', s4:'Обратный поиск по фото от Google',
    s5:'Обратный поиск изображения от Microsoft', s6:'Поиск источника и ранних версий изображения',
    s7:'Анализ подлинности фото (ELA-метод)',
    note:'Сервисы открываются в новых вкладках — фото туда нужно загрузить вручную. Мы не отправляем ваше фото на сторонние серверы. Все сервисы принадлежат третьим лицам, используйте на свой риск и только для легальных целей.',
    visits:'посещений', today:'сегодня'
  },
  en:{
    title:'OSINT Tools Catalog', founder:'founder —', tg:'Telegram Channel',
    faceBtn:'Face search',
    searchPh:'Search tools...', fCat:'Category', fSort:'Sort',
    fType:'Type', fAcc:'Access', fav:'Favorites', empty:'😕 Nothing found. Try another query.',
    tgSub:'Subscribe to Telegram channel', legal:'All tools are for legal use only.',
    all:'All', sortPop:'By popularity', sortName:'By name (A-Z)', sortNameD:'By name (Z-A)',
    typeAll:'All types', typeWeb:'Web service', typeCli:'CLI / utility', typeApi:'API',
    accAny:'Any', accFree:'Free', accFreemium:'Freemium', accPaid:'Paid',
    expand:'collapse', collapse:'expand',
    mTitle:'Face photo search',
    mDesc:'Upload a face photo — we will show services where you can check this photo in open sources. Upload happens only in your browser, nothing is sent anywhere.',
    dzTitle:'Drag photo here', dzHint:'or click to select file (JPG, PNG, WEBP)',
    changeBtn:'Choose another photo', svcTitle:'Check this photo in:',
    s1:'AI face search — largest database', s2:'AI face search in social networks',
    s3:'Best reverse face search for Russian web', s4:'Reverse photo search by Google',
    s5:'Reverse image search by Microsoft', s6:'Find image source and early versions',
    s7:'Photo authenticity analysis (ELA)',
    note:'Services open in new tabs — upload photo there manually. We do not send your photo to third-party servers. All services belong to third parties, use at your own risk and only for legal purposes.',
    visits:'visits', today:'today'
  }
};

var state = { lang:'ru', category:'all', sort:'popular', type:'all', access:'any', query:'', favOnly:false, view:'list' };
var favs = JSON.parse(localStorage.getItem('osint_favs') || '[]');
function t(k){ return I18N[state.lang][k] || k; }

// ============ СЧЁТЧИК ПОСЕЩЕНИЙ ============
// Используем CounterAPI — бесплатный публичный сервис без регистрации
function initVisits(){
  var visitsEl = document.getElementById('visits');
  var countEl = document.getElementById('visitCount');
  if (!visitsEl || !countEl) return;
  visitsEl.style.display = 'inline-flex';

  // Получаем счётчик (уникальный ключ для твоего сайта)
  var key = 'osint-catalog-genoxid13';
  var isVisit = !sessionStorage.getItem('osint_visited');
  if (isVisit) sessionStorage.setItem('osint_visited', '1');

  // Запрашиваем текущее значение
  fetch('https://api.counterapi.dev/v1/' + key + '/visits/up')
    .then(function(r){ return r.json(); })
    .then(function(data){
      var total = data.count || 0;
      countEl.textContent = total.toLocaleString('ru-RU') + ' ' + t('visits');
    })
    .catch(function(){
      // Fallback — если API недоступно
      countEl.textContent = '1 000+ ' + t('visits');
    });
}

// ============ КАТАЛОГ ============
function buildCatalog(){
  if (typeof CATALOG === 'undefined'){
    document.getElementById('content').innerHTML = '<p style="text-align:center;padding:40px;color:#6b6b6b">Ошибка: файл data.js не загружен</p>';
    return;
  }
  var content = document.getElementById('content');
  content.innerHTML = '';
  Object.keys(CATALOG).forEach(function(catKey){
    var cat = CATALOG[catKey];
    var section = document.createElement('section');
    section.className = 'cat';
    section.dataset.category = catKey;
    var catName = state.lang === 'ru' ? cat.ru : cat.en;
    var html = '<div class="ch"><h2>' + catName + ' <span class="cnt">0</span></h2><div class="ct">' + t('expand') + ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div></div><div class="cb">';
    cat.tools.forEach(function(tool, i){
      var name = tool[0], icon = tool[1];
      var desc = state.lang === 'ru' ? tool[2] : tool[3];
      var url = tool[4], type = tool[5], access = tool[6];
      var isFav = favs.indexOf(name) !== -1;
      html += '<div class="card" data-type="' + type + '" data-access="' + access + '" data-name="' + name + '" data-fav="' + (isFav?'1':'0') + '" data-pop="' + (1000 - i) + '">' +
        '<div class="ch-head"><div class="ct-title"><div class="ci">' + icon + '</div><div class="cn">' + name + '</div></div>' +
        '<button class="cf-btn' + (isFav?' active':'') + '"><svg viewBox="0 0 24 24" fill="' + (isFav?'currentColor':'none') + '" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></button></div>' +
        '<div class="cd">' + desc + '</div>' +
        '<div class="cf-foot"><div class="cp">' + catName + ' / <span>' + type + ' · ' + access + '</span></div>' +
        '<a class="cl" href="' + url + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></div></div>';
    });
    html += '</div>';
    section.innerHTML = html;
    content.appendChild(section);
  });
  bindEvents();
  applyFilters();
}

function bindEvents(){
  document.querySelectorAll('.ch').forEach(function(h){
    h.onclick = function(){
      var cat = h.closest('.cat');
      cat.classList.toggle('collapsed');
      var txt = h.querySelector('.ct').childNodes[0];
      txt.nodeValue = cat.classList.contains('collapsed') ? t('collapse') + ' ' : t('expand') + ' ';
    };
  });
  document.querySelectorAll('.card').forEach(function(card){
    card.onclick = function(e){
      if (e.target.closest('.cl') || e.target.closest('.cf-btn')) return;
      var link = card.querySelector('.cl');
      if (link) window.open(link.href, '_blank');
    };
    var btn = card.querySelector('.cf-btn');
    btn.onclick = function(e){
      e.stopPropagation();
      var name = card.dataset.name;
      var idx = favs.indexOf(name);
      if (idx === -1){ favs.push(name); card.dataset.fav='1'; btn.classList.add('active'); }
      else { favs.splice(idx,1); card.dataset.fav='0'; btn.classList.remove('active'); }
      btn.querySelector('svg').setAttribute('fill', card.dataset.fav==='1'?'currentColor':'none');
      localStorage.setItem('osint_favs', JSON.stringify(favs));
      if (state.favOnly) applyFilters();
    };
  });
}

function buildDrops(){
  if (typeof CATALOG === 'undefined') return;
  var defs = {
    category: [{v:'all',l:'all'}].concat(Object.keys(CATALOG).map(function(k){return {v:k,l:state.lang==='ru'?CATALOG[k].ru:CATALOG[k].en};})),
    sort: [{v:'popular',l:'sortPop'},{v:'name',l:'sortName'},{v:'name-desc',l:'sortNameD'}],
    type: [{v:'all',l:'typeAll'},{v:'web',l:'typeWeb'},{v:'cli',l:'typeCli'},{v:'api',l:'typeApi'}],
    access: [{v:'any',l:'accAny'},{v:'free',l:'accFree'},{v:'freemium',l:'accFreemium'},{v:'paid',l:'accPaid'}]
  };
  document.querySelectorAll('.filters .sel').forEach(function(el){
    var key = el.dataset.filter;
    var items = defs[key];
    var valEl = el.querySelector('.val');
    var oldMenu = el.querySelector('.dd');
    if (oldMenu) oldMenu.remove();
    var menu = document.createElement('div');
    menu.className = 'dd';
    function render(){
      menu.innerHTML = '';
      items.forEach(function(item){
        var o = document.createElement('div');
        o.className = 'opt' + (item.v === state[key] ? ' sel' : '');
        o.textContent = t(item.l);
        o.onclick = function(e){
          e.stopPropagation();
          state[key] = item.v;
          valEl.textContent = t(item.l);
          closeDrops();
          applyFilters();
        };
        menu.appendChild(o);
      });
    }
    function update(){
      var cur = items.find(function(i){return i.v === state[key];});
      valEl.textContent = cur ? t(cur.l) : '';
      if (key === 'category' && state.category === 'all'){
        valEl.textContent = t('all') + ' (' + document.querySelectorAll('.card').length + ')';
      }
    }
    el.appendChild(menu);
    update();
    el.onclick = function(e){
      e.stopPropagation();
      var open = menu.classList.contains('show');
      closeDrops();
      if (!open){ render(); menu.classList.add('show'); el.classList.add('open'); }
    };
    el._update = update;
  });
}
function closeDrops(){
  document.querySelectorAll('.dd.show').forEach(function(m){ m.classList.remove('show'); m.parentElement.classList.remove('open'); });
}
document.addEventListener('click', closeDrops);

function applyFilters(){
  var visible = 0;
  document.querySelectorAll('.card').forEach(function(card){
    var cat = card.closest('.cat').dataset.category;
    var txt = card.textContent.toLowerCase();
    var okQ = !state.query || txt.indexOf(state.query) !== -1;
    var okC = state.category === 'all' || cat === state.category;
    var okT = state.type === 'all' || card.dataset.type === state.type;
    var okA = state.access === 'any' || card.dataset.access === state.access;
    var okF = !state.favOnly || card.dataset.fav === '1';
    var show = okQ && okC && okT && okA && okF;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  document.querySelectorAll('.cat').forEach(function(c){
    var cards = c.querySelectorAll('.card');
    var vis = 0;
    cards.forEach(function(cd){ if (cd.style.display !== 'none') vis++; });
    c.style.display = vis ? '' : 'none';
    var cnt = c.querySelector('.cnt');
    if (cnt) cnt.textContent = vis;
  });
  var shownEl = document.getElementById('shown');
  var prev = parseInt(shownEl.textContent) || 0;
  shownEl.textContent = visible;
  document.getElementById('total').textContent = '/ ' + document.querySelectorAll('.card').length;
  if (prev !== visible){ shownEl.classList.remove('bump'); void shownEl.offsetWidth; shownEl.classList.add('bump'); }
  document.getElementById('empty').classList.toggle('show', visible === 0);
  sortCards();
  var catSel = document.querySelector('.sel[data-filter="category"]');
  if (catSel && catSel._update) catSel._update();
}

function sortCards(){
  document.querySelectorAll('.cat').forEach(function(cat){
    var body = cat.querySelector('.cb');
    if (!body) return;
    var cards = Array.prototype.slice.call(body.querySelectorAll('.card'));
    cards.sort(function(a,b){
      var na = a.dataset.name, nb = b.dataset.name;
      if (state.sort === 'name') return na.localeCompare(nb, 'ru');
      if (state.sort === 'name-desc') return nb.localeCompare(na, 'ru');
      return Number(b.dataset.pop) - Number(a.dataset.pop);
    });
    cards.forEach(function(c){ body.appendChild(c); });
  });
}

function applyLang(){
  document.documentElement.lang = state.lang;
  document.title = state.lang === 'ru' ? 'OSINT — Каталог инструментов' : 'OSINT — Tools Catalog';
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.dataset.i18n;
    if (I18N[state.lang][k]) el.textContent = I18N[state.lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    var k = el.dataset.i18nPh;
    if (I18N[state.lang][k]) el.placeholder = I18N[state.lang][k];
  });
  document.querySelectorAll('.lang button').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });
  buildCatalog();
  buildDrops();
  // Обновляем текст счётчика при смене языка
  var countEl = document.getElementById('visitCount');
  if (countEl && countEl.textContent.indexOf(' ') !== -1){
    var parts = countEl.textContent.split(' ');
    countEl.textContent = parts[0] + ' ' + t('visits');
  }
}

function applyView(){
  document.querySelectorAll('.cat').forEach(function(cat){
    var body = cat.querySelector('.cb');
    if (!body) return;
    body.classList.remove('grid','compact','tree');
    if (state.view !== 'list') body.classList.add(state.view);
  });
}

// ============ FACE MODAL ============
var faceModal = document.getElementById('faceModal');
var dropZone = document.getElementById('dropZone');
var fileInput = document.getElementById('fileInput');
var preview = document.getElementById('preview');
var previewImg = document.getElementById('previewImg');
var fileName = document.getElementById('fileName');
var services = document.getElementById('services');
var changeBtn = document.getElementById('changeBtn');

function openModal(){ faceModal.classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeModal(){ faceModal.classList.remove('show'); document.body.style.overflow = ''; }

document.getElementById('faceBtn').onclick = openModal;
document.getElementById('mClose').onclick = closeModal;
faceModal.onclick = function(e){ if (e.target === faceModal) closeModal(); };
document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeModal(); });

dropZone.onclick = function(){ fileInput.click(); };
changeBtn.onclick = function(e){ e.stopPropagation(); fileInput.click(); };

['dragenter','dragover'].forEach(function(ev){
  dropZone.addEventListener(ev, function(e){ e.preventDefault(); dropZone.classList.add('drag'); });
});
['dragleave','drop'].forEach(function(ev){
  dropZone.addEventListener(ev, function(e){ e.preventDefault(); dropZone.classList.remove('drag'); });
});
dropZone.addEventListener('drop', function(e){
  var files = e.dataTransfer.files;
  if (files && files[0]) handleFile(files[0]);
});
fileInput.onchange = function(e){
  if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
};

function handleFile(file){
  if (!file.type.startsWith('image/')){
    alert(state.lang === 'ru' ? 'Пожалуйста, выберите изображение' : 'Please select an image');
    return;
  }
  var reader = new FileReader();
  reader.onload = function(ev){
    previewImg.src = ev.target.result;
    fileName.textContent = file.name + ' · ' + (file.size/1024).toFixed(1) + ' KB';
    dropZone.style.display = 'none';
    preview.classList.add('show');
    services.classList.add('show');
  };
  reader.readAsDataURL(file);
}

// ============ ИНИЦИАЛИЗАЦИЯ ============
document.querySelectorAll('.lang button').forEach(function(btn){
  btn.onclick = function(){
    state.lang = btn.dataset.lang;
    applyLang();
  };
});
document.getElementById('search').oninput = function(e){
  state.query = e.target.value.toLowerCase().trim();
  applyFilters();
};
document.getElementById('favBtn').onclick = function(){
  state.favOnly = !state.favOnly;
  this.classList.toggle('active', state.favOnly);
  applyFilters();
};
document.querySelectorAll('.vw button').forEach(function(btn){
  btn.onclick = function(){
    document.querySelectorAll('.vw button').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    state.view = btn.dataset.view;
    applyView();
  };
});

applyLang();
initVisits();

})();
