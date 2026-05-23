/* ═══════════════════════════════════════════════════════
   TOUR DATA
═══════════════════════════════════════════════════════ */

const tours = {
  'nusa-penida': {
    title: 'Nusa Penida West Day Tour',
    img: 'assets/images/nusa-penida.jpg',
    thumb: 'assets/images/nusa-penida.jpg',
    price: 'USD 65', originalPrice: 'USD 103', priceNum: 65,
    category: 'island', badge: 'Best Seller', badgeColor: 'bg-orange-500',
    rating: 5.0, reviews: 128,
    waMessage: "Hi! I'm interested in booking the Nusa Penida West Day Tour. Can you share more details?",
    prices: ['$65 / person (min. 2 persons)', '$55 / person (group of 4+)', 'Includes: transport, fast boat, guide'],
    destinations: ['Atuh Beach', 'Diamond Beach', 'Tree House Viewpoint', 'Kelingking Beach (T-Rex cliff)'],
    itinerary: [
      { session: 'MORNING', activities: ['Meet at Sanur Harbor (06:00)', 'Fast boat transfer to Nusa Penida (45 min)', 'Arrival & pickup by local guide', 'Explore Diamond Beach'] },
      { session: 'AFTERNOON', activities: ['Visit Atuh Beach viewpoint', 'Lunch at local warung', 'Tree House Viewpoint photo stop', 'Kelingking Beach viewpoint'] },
      { session: 'RETURN', activities: ['Head back to Nusa Penida harbor', 'Fast boat back to Sanur (16:30)', 'Drop off at hotel/villa'] }
    ]
  },
  'lempuyang': {
    title: 'Lempuyang Gate of Heaven',
    img: 'assets/images/lempuyang.jpg',
    thumb: 'assets/images/lempuyang.jpg',
    price: 'USD 55', originalPrice: 'USD 85', priceNum: 55,
    category: 'temple', badge: 'Iconic', badgeColor: 'bg-teal-600',
    rating: 5.0, reviews: 96,
    waMessage: "Hi! I'm interested in booking the Lempuyang Gate of Heaven Tour. Please share the details!",
    prices: ['$55 / person (min. 2 persons)', '$48 / person (group of 4+)', 'Includes: private car, driver/guide, entrance'],
    destinations: ['Lempuyang Temple (Gate of Heaven)', 'Tirta Gangga Water Palace', 'Pura Besakih (Mother Temple)', 'Sidemen Valley Scenic Stop'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (05:30)', 'Arrive Lempuyang Temple (07:00)', 'Iconic photo at Gate of Heaven', 'Explore temple complex'] },
      { session: 'AFTERNOON', activities: ['Visit Tirta Gangga Water Palace', 'Lunch at local restaurant (rice fields view)', 'Besakih Mother Temple', 'Sidemen Valley overlook'] },
      { session: 'RETURN', activities: ['Depart for hotel (16:30)', 'Sunset stop en route (optional)', 'Hotel drop off (~18:30)'] }
    ]
  },
  'atv': {
    title: 'Bali ATV Ride Adventure',
    img: 'assets/images/shibupavizha-george-zZeh-USTxeE-unsplash.jpg',
    thumb: 'assets/images/shibupavizha-george-zZeh-USTxeE-unsplash.jpg',
    price: 'USD 60', originalPrice: 'USD 90', priceNum: 60,
    category: 'adventure', badge: 'Adventure', badgeColor: 'bg-red-500',
    rating: 4.5, reviews: 74,
    waMessage: "Hi! I'd like to book the Bali ATV Ride Adventure. Can you help me?",
    prices: ['$60 / person (min. 2 persons)', '$52 / person (group of 4+)', 'Includes: transport, ATV, safety gear, guide'],
    destinations: ['Ubud ATV Track', 'Tegallalang Rice Terrace', 'Tegenungan Waterfall', 'Ubud Monkey Forest (optional)'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (08:00)', 'Arrive ATV Operator (09:30)', 'Safety briefing & gear up', 'ATV ride through jungle & rice fields (2hrs)'] },
      { session: 'AFTERNOON', activities: ['Shower & freshen up', 'Lunch at local restaurant', 'Visit Tegallalang Rice Terraces', 'Tegenungan Waterfall swim'] },
      { session: 'RETURN', activities: ['Depart Ubud area (16:00)', 'Optional Monkey Forest stop', 'Hotel drop off (~17:30)'] }
    ]
  },
  'ubud-highlands': {
    title: 'Ubud Highlands & Rice Terrace',
    img: 'assets/images/ubud.jpg',
    thumb: 'assets/images/ubud.jpg',
    price: 'USD 50', originalPrice: 'USD 75', priceNum: 50,
    category: 'nature', badge: 'Nature', badgeColor: 'bg-green-600',
    rating: 4.9, reviews: 88,
    waMessage: "Hi! I'm interested in the Ubud Highlands & Rice Terrace tour!",
    prices: ['$50 / person (min. 2 persons)', '$42 / person (group of 4+)', 'Includes: private car, driver/guide'],
    destinations: ['Tegallalang Rice Terrace', 'Kanto Lampo Waterfall', 'Tirta Empul Holy Spring', 'Campuhan Ridge Walk'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (08:00)', 'Campuhan Ridge Walk', 'Tegallalang Rice Terrace visit'] },
      { session: 'AFTERNOON', activities: ['Lunch in Ubud village', 'Tirta Empul Holy Spring', 'Kanto Lampo Waterfall'] },
      { session: 'RETURN', activities: ['Ubud town stroll (optional)', 'Hotel drop off (~17:00)'] }
    ]
  },
  'tanah-lot-sunset': {
    title: 'Tanah Lot Sunset Tour',
    img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
    thumb: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
    price: 'USD 45', originalPrice: 'USD 70', priceNum: 45,
    category: 'temple', badge: 'Romantic', badgeColor: 'bg-pink-500',
    rating: 4.8, reviews: 112,
    waMessage: "Hi! I want to book the Tanah Lot Sunset Tour!",
    prices: ['$45 / person (min. 2 persons)', '$38 / person (group of 4+)', 'Includes: private car, driver/guide, entrance'],
    destinations: ['Jatiluwih UNESCO Rice Terrace', 'Pura Taman Ayun Royal Temple', 'Tanah Lot Sea Temple', 'Beraban Village'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (09:00)', 'Jatiluwih Rice Terrace walk', 'Taman Ayun Temple visit'] },
      { session: 'AFTERNOON', activities: ['Lunch at local restaurant', 'Free time in Tabanan area', 'Head to Tanah Lot (arrive ~17:00)'] },
      { session: 'EVENING', activities: ['Sunset at Tanah Lot Temple', 'Souvenir shopping', 'Hotel drop off (~19:30)'] }
    ]
  },
  'kintamani-volcano': {
    title: 'Kintamani Volcano & Batur Lake',
    img: 'assets/images/kintamani.jpg',
    thumb: 'assets/images/kintamani.jpg',
    price: 'USD 55', originalPrice: 'USD 85', priceNum: 55,
    category: 'nature', badge: 'Scenic', badgeColor: 'bg-blue-600',
    rating: 4.8, reviews: 67,
    waMessage: "Hi! I'd like to book the Kintamani Volcano & Batur Lake tour!",
    prices: ['$55 / person (min. 2 persons)', '$46 / person (group of 4+)', 'Includes: private car, driver/guide'],
    destinations: ['Mount Batur Active Volcano', 'Lake Batur Panoramic View', 'Kintamani Highland Villages', 'Penelokan Viewpoint'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (08:00)', 'Drive through scenic highlands', 'Penelokan viewpoint stop'] },
      { session: 'MIDDAY', activities: ['Lunch with volcano view', 'Lake Batur exploration', 'Local village visit'] },
      { session: 'RETURN', activities: ['Optional coffee plantation stop', 'Hotel drop off (~16:30)'] }
    ]
  },
  'nusa-lembongan': {
    title: 'Nusa Lembongan Island Day Tour',
    img: 'https://images.unsplash.com/photo-1620034441342-0287f2b0f91b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumb: 'https://images.unsplash.com/photo-1620034441342-0287f2b0f91b?q=80&w=600&q=80',
    price: 'USD 70', originalPrice: 'USD 110', priceNum: 70,
    category: 'island', badge: 'Island Hopping', badgeColor: 'bg-cyan-600',
    rating: 4.9, reviews: 54,
    waMessage: "Hi! I want to book the Nusa Lembongan Island Day Tour!",
    prices: ['$70 / person (min. 2 persons)', '$60 / person (group of 4+)', 'Includes: fast boat, snorkeling gear, guide'],
    destinations: ['Dream Beach', 'Devil\'s Tear Blowhole', 'Yellow Bridge to Nusa Ceningan', 'Mangrove Forest'],
    itinerary: [
      { session: 'MORNING', activities: ['Sanur Harbor departure (07:30)', 'Fast boat to Lembongan (30 min)', 'Snorkeling at Mangrove Point'] },
      { session: 'AFTERNOON', activities: ['Dream Beach swim & relax', 'Devil\'s Tear viewpoint', 'Yellow Bridge crossing', 'Local seafood lunch'] },
      { session: 'RETURN', activities: ['Fast boat back to Sanur (16:00)', 'Hotel drop off'] }
    ]
  },
  'white-water-rafting': {
    title: 'Ayung River White Water Rafting',
    img: 'https://images.pexels.com/photos/37097420/pexels-photo-37097420.jpeg',
    thumb: 'https://images.pexels.com/photos/37097420/pexels-photo-37097420.jpeg',
    price: 'USD 55', originalPrice: 'USD 80', priceNum: 55,
    category: 'adventure', badge: 'Thrilling', badgeColor: 'bg-red-600',
    rating: 4.7, reviews: 91,
    waMessage: "Hi! I'm interested in the Ayung River White Water Rafting tour!",
    prices: ['$55 / person (min. 2 persons)', '$48 / person (group of 4+)', 'Includes: transport, equipment, guide, lunch'],
    destinations: ['Ayung River Gorge', 'Ubud Jungle Surroundings', 'Traditional Villages en Route'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (08:00)', 'Arrive rafting base (09:30)', 'Safety briefing & gear up'] },
      { session: 'ACTIVITY', activities: ['2-hour rafting through 25+ rapids', 'Scenic gorge & waterfall views', 'Photo opportunities along the way'] },
      { session: 'RETURN', activities: ['Shower & change', 'Buffet lunch included', 'Hotel drop off (~14:00)'] }
    ]
  },
  'east-bali': {
    title: 'East Bali Full Day Explorer',
    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
    price: 'USD 60', originalPrice: 'USD 90', priceNum: 60,
    category: 'temple', badge: 'Cultural', badgeColor: 'bg-amber-600',
    rating: 4.8, reviews: 43,
    waMessage: "Hi! I want to book the East Bali Full Day Explorer tour!",
    prices: ['$60 / person (min. 2 persons)', '$50 / person (group of 4+)', 'Includes: private car, guide, entrance fees'],
    destinations: ['Besakih Mother Temple', 'Amed Fishing Village', 'Candidasa Beach', 'Virgin Beach (White Sand)'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (07:00)', 'Besakih Temple — Bali\'s holiest', 'Traditional sarong provided'] },
      { session: 'AFTERNOON', activities: ['Amed village & salt flats', 'Lunch with ocean view', 'Candidasa & Virgin Beach'] },
      { session: 'RETURN', activities: ['Scenic coastal drive back', 'Hotel drop off (~18:00)'] }
    ]
  },
  'private-transport': {
    title: 'Bali Private Airport Transfer',
    img: 'https://images.unsplash.com/photo-1715232207853-e4fe86c1feae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumb: 'https://images.unsplash.com/photo-1715232207853-e4fe86c1feae?q=80&w=600&q=80',
    price: 'USD 25', originalPrice: 'USD 40', priceNum: 25,
    category: 'transport', badge: 'Airport', badgeColor: 'bg-slate-600',
    rating: 5.0, reviews: 203,
    waMessage: "Hi! I need a private airport transfer in Bali. Can you help?",
    prices: ['$25 one-way (any area in Bali)', '$40 round-trip discount', 'Includes: meet & greet, luggage help'],
    destinations: ['Ngurah Rai International Airport', 'All Bali Hotels & Villas', 'Ubud, Seminyak, Canggu & more'],
    itinerary: [
      { session: 'PICKUP', activities: ['Flight monitoring for delays', 'Meet & greet at arrivals with name sign', 'Luggage assistance'] },
      { session: 'TRANSFER', activities: ['Direct route to your accommodation', 'Air-conditioned clean vehicle', 'Bottled water provided'] },
      { session: 'ARRIVAL', activities: ['Drop off at your hotel/villa', 'Available 24/7 any time of day'] }
    ]
  },
  'cooking-class': {
    title: 'Balinese Cooking Class + Market',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    price: 'USD 55', originalPrice: 'USD 80', priceNum: 55,
    category: 'nature', badge: 'Cultural', badgeColor: 'bg-yellow-600',
    rating: 4.9, reviews: 61,
    waMessage: "Hi! I want to book the Balinese Cooking Class + Market tour!",
    prices: ['$55 / person (min. 2 persons)', '$48 / person (group of 4+)', 'Includes: market visit, cooking class, lunch'],
    destinations: ['Ubud Traditional Market', 'Local Balinese Kitchen', 'Rice Paddy Walk'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (08:00)', 'Ubud morning market with chef guide', 'Learn about local ingredients & spices'] },
      { session: 'CLASS', activities: ['Hands-on cooking class (4–5 dishes)', 'Learn Nasi Goreng, Satay, Lawar & more', 'Eat what you cook for lunch!'] },
      { session: 'RETURN', activities: ['Recipe booklet to take home', 'Optional rice paddy walk', 'Hotel drop off (~14:30)'] }
    ]
  },
  'south-bali': {
    title: 'South Bali Beach & Cliff Tour',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    thumb: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    price: 'USD 50', originalPrice: 'USD 75', priceNum: 50,
    category: 'nature', badge: 'Scenic', badgeColor: 'bg-indigo-600',
    rating: 4.7, reviews: 79,
    waMessage: "Hi! I'm interested in the South Bali Beach & Cliff Tour!",
    prices: ['$50 / person (min. 2 persons)', '$42 / person (group of 4+)', 'Includes: private car, guide'],
    destinations: ['Uluwatu Temple & Kecak Dance', 'Padang Padang Beach', 'Suluban Cave Beach', 'GWK Cultural Park'],
    itinerary: [
      { session: 'MORNING', activities: ['Hotel pickup (09:00)', 'GWK Cultural Park', 'Padang Padang Beach (surfing area)'] },
      { session: 'AFTERNOON', activities: ['Suluban hidden cave beach', 'Lunch at Jimbaran seafood (optional)', 'Uluwatu Temple sunset kecak dance (18:00)'] },
      { session: 'RETURN', activities: ['Hotel drop off (~20:00)'] }
    ]
  }
};

let currentFilter = 'all';
let currentDetailFrom = 'tours';

/* ═══════════════════════════════════════════════════════
   UTILITY FUNCTIONS
═══════════════════════════════════════════════════════ */

function goToDetail(tourKey) {
  window.location.href = 'detail.html?tour=' + tourKey;
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '<i class="fas fa-star"></i>';
  if (half) s += '<i class="fas fa-star-half-alt"></i>';
  return s;
}

/* ── Show detail page ── */
function showDetail(tourKey, fromPage) {
  const t = tours[tourKey];
  if (!t) return;
  currentDetailTour = tourKey;

  const backPage = fromPage || activePage;
  document.getElementById('detail-back-btn').onclick = () => showPage(backPage);
  document.getElementById('detail-back-label').textContent = backPage === 'tours' ? 'Back to All Tours' : 'Back to Home';

  document.getElementById('detail-title').textContent = t.title;
  document.getElementById('detail-hero-img').src = t.imgFull || t.img;
  document.getElementById('detail-prices').innerHTML = t.prices.map(p => `<li>${p}</li>`).join('');
  document.getElementById('detail-destinations').innerHTML = t.destinations.map(d => `<li>${d}</li>`).join('');

  let tHtml = `<thead><tr><th class="text-center w-28">SESSION</th><th>ACTIVITY</th></tr></thead><tbody>`;
  t.itinerary.forEach(block => {
    block.activities.forEach((act, i) => {
      tHtml += `<tr>`;
      if (i === 0) tHtml += `<td rowspan="${block.activities.length}" class="text-center font-bold text-teal-800 bg-teal-50/60 tracking-wide text-xs uppercase align-middle">${block.session}</td>`;
      tHtml += `<td class="text-gray-700">${act}</td></tr>`;
    });
  });
  document.getElementById('detail-table').innerHTML = tHtml + '</tbody>';

  const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(t.waMessage)}`;
  document.getElementById('sidebar-price').textContent = t.price;
  document.getElementById('sidebar-original-price').textContent = t.originalPrice;
  document.getElementById('sidebar-wa-link').href = waUrl;
  document.getElementById('mobile-price-bar').textContent = t.price;
  document.getElementById('sidebar-popular-list').innerHTML = tourKeys
    .filter(k => k !== tourKey).slice(0, 5)
    .map(k => `
      <a href="#" onclick="showDetail('${k}','tours'); return false;"
         class="flex items-center justify-between text-sm text-gray-700 hover:text-teal-700 py-2.5 border-b border-gray-50 transition group">
        <span class="group-hover:underline leading-snug">${tours[k].title}</span>
        <i class="fas fa-arrow-right text-teal-400 text-xs ml-3 flex-shrink-0 group-hover:translate-x-1 transition"></i>
      </a>`).join('');

  qbInit(t);

  showPage('detail');
}


/* ═══════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════ */

function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const icon = document.querySelector('#menuToggle i');
  if (m) {
    m.classList.toggle('hidden');
    // Toggle between bars and times icon
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  }
}

function closeMenu() {
  const m = document.getElementById('mobileMenu');
  const icon = document.querySelector('#menuToggle i');
  if (m && !m.classList.contains('hidden')) {
    m.classList.add('hidden');
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }
}

/* ═══════════════════════════════════════════════════════
   TOURS PAGE FUNCTIONS
═══════════════════════════════════════════════════════ */

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  filterTours();
}

function filterTours() {
  const search = document.getElementById('tourSearch')?.value.toLowerCase() || '';
  renderTours(search);
}

function renderTours(search = '') {
  const grid = document.getElementById('toursGrid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('tourCount');
  if (!grid) return;

  const filtered = Object.entries(tours).filter(([key, t]) => {
    const matchCat = currentFilter === 'all' || t.category === currentFilter;
    const matchSearch = !search || t.title.toLowerCase().includes(search) || t.category.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  grid.innerHTML = filtered.map(([key, t]) => `
    <div class="tour-card bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 cursor-pointer" onclick="goToDetail('${key}')">
      <div class="relative">
        <img src="${t.thumb}" alt="${t.title}" class="w-full h-52 object-cover" loading="lazy"/>
        <div class="absolute top-4 left-4 ${t.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          ${t.badge}
        </div>
        <div class="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div class="p-5">
        <h3 class="font-bold text-teal-800 text-base mb-1 leading-snug">${t.title}</h3>
        <div class="flex items-center gap-2 text-gray-400 text-xs mb-3">
          <i class="fas fa-map-marker-alt text-teal-500"></i> Bali, Indonesia
          <span class="ml-auto text-green-500 font-semibold">✓ Available</span>
        </div>
        <div class="flex text-yellow-400 text-sm mb-4">
          ${getStars(t.rating)}
          <span class="text-gray-400 ml-2 text-xs">(${t.reviews} reviews)</span>
        </div>
        <div class="flex items-end justify-between">
          <div>
            <div class="text-gray-400 text-xs line-through">${t.originalPrice}</div>
            <div class="text-orange-500 font-extrabold text-xl">${t.price}</div>
          </div>
          <a href="https://wa.me/6281234567890?text=${encodeURIComponent(t.waMessage)}" target="_blank"
             class="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
             onclick="event.stopPropagation()">
            Book Now
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════
   QUICK BOOKING FORM (detail page)
══════════════════════════════════════ */
const QB_ADULT_CHILD_CATS = ['island', 'temple', 'adventure'];

let qbState = {
  formType: 'simple',
  tourTitle: '',
  priceStr: '',
  basePrice: 0,
  childPrice: 0,
  simple: 1,
  adults: 1,
  children: 0,
};

function qbFmtPrice(num) {
  return 'USD ' + num;
}

function qbUpdateTotalSimple() {
  const n = qbState.simple;
  const base = qbState.basePrice;
  const row = document.getElementById('qb-total-simple');
  if (n > 1) {
    row.style.display = 'flex';
    document.getElementById('qb-pax-s').textContent = n;
    document.getElementById('qb-unit-s').textContent = qbFmtPrice(base);
    document.getElementById('qb-total-s').textContent = qbFmtPrice(n * base);
  } else {
    row.style.display = 'none';
  }
}

function qbUpdateTotalOptions() {
  const a = qbState.adults;
  const c = qbState.children;
  const ap = qbState.basePrice;
  const cp = qbState.childPrice;
  const row = document.getElementById('qb-total-options');

  if (a > 0 || c > 0) {
    const total = a * ap + c * cp;
    let label = '';
    if (a > 0) label += `${a} adult${a > 1 ? 's' : ''} × USD ${ap}`;
    if (c > 0) label += (a > 0 ? ' + ' : '') + `${c} child${c > 1 ? 'ren' : ''} × USD ${cp}`;
    row.style.display = 'flex';
    document.getElementById('qb-total-options-label').textContent = label;
    document.getElementById('qb-total-o').textContent = qbFmtPrice(total);
  } else {
    row.style.display = 'none';
  }
}

function qbAdjust(type, delta) {
  if (type === 'simple') {
    qbState.simple = Math.max(1, Math.min(12, qbState.simple + delta));
    document.getElementById('qb-guests-simple').textContent = qbState.simple;
    qbUpdateTotalSimple();
  }
}

function qbAdjustOpt(type, delta) {
  if (type === 'adult') {
    qbState.adults = Math.max(0, Math.min(12, qbState.adults + delta));
    document.getElementById('qb-adults').textContent = qbState.adults;
  } else {
    qbState.children = Math.max(0, Math.min(12, qbState.children + delta));
    document.getElementById('qb-children').textContent = qbState.children;
  }
  qbUpdateTotalOptions();
}

function qbInit(tour) {
  const num = parseInt((tour.price || '').replace(/[^0-9]/g, '')) || 0;
  const childNum = Math.round(num * 0.7);
  const useOptions = QB_ADULT_CHILD_CATS.includes(tour.category);

  qbState = {
    formType: useOptions ? 'options' : 'simple',
    tourTitle: tour.title,
    priceStr: tour.price,
    basePrice: num,
    childPrice: childNum,
    simple: 1, adults: 1, children: 0,
  };

  document.getElementById('qb-price-display').textContent = tour.price;

  document.getElementById('qb-date').value = '';
  document.getElementById('qb-err-date').classList.add('hidden');
  document.getElementById('qb-date').classList.remove('border-red-400');
  document.getElementById('qb-date').min = new Date().toISOString().split('T')[0];
  document.getElementById('qb-date-spacer').style.display = 'block';

  const simple = document.getElementById('qb-form-simple');
  const options = document.getElementById('qb-form-options');

  if (useOptions) {
    simple.classList.add('hidden');
    options.classList.remove('hidden');
    document.getElementById('qb-adult-price-label').textContent = `USD ${num}`;
    document.getElementById('qb-child-price-label').textContent = `USD ${childNum}`;
    document.getElementById('qb-adults').textContent = '1';
    document.getElementById('qb-children').textContent = '0';
    document.getElementById('qb-total-options').style.display = 'none';
  } else {
    options.classList.add('hidden');
    simple.classList.remove('hidden');
    document.getElementById('qb-guests-simple').textContent = '1';
    document.getElementById('qb-unit-s').textContent = tour.price;
    document.getElementById('qb-total-simple').style.display = 'none';
  }
}

function qbSubmit() {
  const dateEl = document.getElementById('qb-date');
  const errEl = document.getElementById('qb-err-date');

  if (!dateEl.value) {
    errEl.classList.remove('hidden');
    dateEl.classList.add('border-red-400');
    dateEl.focus();
    setTimeout(() => {
      errEl.classList.add('hidden');
      dateEl.classList.remove('border-red-400');
    }, 3000);
    return;
  }

  const dateFormatted = new Date(dateEl.value + 'T00:00:00')
    .toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  let guestLine = '';
  let totalLine = '';

  if (qbState.formType === 'simple') {
    const n = qbState.simple;
    guestLine = `👥 Guests  : ${n} person(s)`;
    totalLine = `💰 Total   : USD ${n * qbState.basePrice}`;
  } else {
    const a = qbState.adults, c = qbState.children;
    guestLine = `👥 Guests  : ${a} Adult${a !== 1 ? 's' : ''} + ${c} Child${c !== 1 ? 'ren' : ''}`;
    totalLine = `💰 Total   : USD ${a * qbState.basePrice + c * qbState.childPrice}`;
  }

  const msg = [
    '🌴 *Tour Reservation — Bali Bagus Journey*',
    '━━━━━━━━━━━━━━━━━━',
    `🗺️ Tour    : ${qbState.tourTitle}`,
    `📅 Date    : ${dateFormatted}`,
    guestLine,
    totalLine,
    '━━━━━━━━━━━━━━━━━━',
    '_Sent from Bali Bagus Journey website_'
  ].join('\n');

  window.open('https://wa.me/6281234567890?text=' + encodeURIComponent(msg), '_blank');
}

/* ── Keyboard: Escape closes modals ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const bookingOverlay = document.getElementById('booking-overlay');
    const successOverlay = document.getElementById('success-overlay');
    if (bookingOverlay) bookingOverlay.classList.add('hidden');
    if (successOverlay) successOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('toursGrid')) {
    renderTours();
  }
});
