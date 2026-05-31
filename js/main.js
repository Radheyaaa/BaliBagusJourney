/* ═══════════════════════════════════════════════════════
   TOUR DATA
═══════════════════════════════════════════════════════ */

const tours = {
  'airport-welcome': {
    title: 'Premium Airport Transfer & Warm Welcome',
    img: 'https://images.unsplash.com/photo-1715232207853-e4fe86c1feae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0',
    thumb: 'https://images.unsplash.com/photo-1715232207853-e4fe86c1feae?q=80&w=600&q=80',
    price: 'USD 25', originalPrice: 'USD 40', priceNum: 25,
    category: 'transport', badge: 'VIP Welcome', badgeColor: 'bg-slate-600',
    rating: 5.0, reviews: 203,
    waMessage: "Hi! I'd like to book the Premium Airport Transfer & Warm Welcome service. Could you help coordinate?",
    prices: ['$25 one-way transfer (any resort in Bali)', '$45 round-trip transfer deal', 'Includes: Meet & Greet, Toll fees, Aircon van, Luggage help'],
    destinations: ['Ngurah Rai Airport Arrivals', 'Personalized Welcome Sign 🤝', 'Your Hotel/Villa in Bali'],
    itinerary: [
      { session: 'ARRIVALS', activities: ['Real-time flight tracking for delays', 'Meet & greet at arrival gate with personalized name card 🤝', 'Luggage collection and professional porter assistance'] },
      { session: 'THE JOURNEY', activities: ['Step into a fully air-conditioned, spotlessly clean private vehicle', 'Enjoy complimentary chilled mineral water & fresh wipes', 'Interesting local stories and custom recommendations from our professional driver'] },
      { session: 'CHECK-IN', activities: ['Direct, comfortable drop-off at your hotel or villa lobby', 'Check-in coordination assistance with lobby team', 'Available 24 hours a day, 7 days a week'] }
    ],
    rates: [
      { area: 'Kuta', price: '200.000 IDR' },
      { area: 'Legian', price: '250.000 IDR' },
      { area: 'Seminyak', price: '300.000 IDR' },
      { area: 'Sanur', price: '300.000 IDR' },
      { area: 'Jimbaran', price: '250.000 IDR' },
      { area: 'Canggu', price: '400.000 IDR' },
      { area: 'Nusa Dua', price: '300.000 IDR' },
      { area: 'Ubud', price: '400.000 IDR' },
      { area: 'Uluwatu', price: '400.000 IDR' },
      { area: 'Padang Bai', price: '500.000 IDR' },
      { area: 'Tanah Lot', price: '450.000 IDR' },
      { area: 'Candidasa', price: '700.000 IDR' },
      { area: 'Kintamani', price: '700.000 IDR' },
      { area: 'Lovina', price: '800.000 IDR' },
      { area: 'Pemuteran', price: '900.000 IDR' },
      { area: 'Amed', price: '900.000 IDR' }
    ]
  },
  'ubud-heartbeat': {
    title: "Ubud's Cultural Heartbeat: Forests, Swings & Cascades",
    img: 'assets/images/ubud.jpg',
    thumb: 'assets/images/ubud.jpg',
    price: 'USD 55', originalPrice: 'USD 85', priceNum: 55,
    category: 'temple', badge: 'Most Popular', badgeColor: 'bg-teal-600',
    rating: 5.0, reviews: 128,
    waMessage: "Hi! I am interested in the Ubud's Cultural Heartbeat Tour. Can you tell me more about it?",
    prices: ['$55 / person (minimum 2 persons)', '$45 / person (group of 4+)', 'Includes: Private car, Driver/Guide, Sacred Monkey Forest entry, Swing tickets'],
    destinations: ['Sacred Monkey Forest Sanctuary', 'High-Flying Jungle Swing 🏞️', 'Artisanal Coffee & Tea Plantation', 'Hidden Ubud Waterfall 💧'],
    itinerary: [
      { session: 'MORNING', activities: ['08:00 - Private hotel pickup by our professional driver', '09:30 - Enter the Sacred Monkey Forest and meet playful macaques 🐒', '11:00 - Soar high over the jungle canopy at the famous Bali Swing 🏞️'] },
      { session: 'AFTERNOON', activities: ['12:30 - Delicious traditional Balinese lunch with tropical views', '14:00 - Experience local coffee roasting and a premium tea tasting ☕', '15:30 - Walk down and swim at a serene, hidden Ubud Waterfall 💧'] },
      { session: 'RETURN', activities: ['17:00 - Relaxing drive back with stunning scenery', '18:00 - Arrival and drop-off at your hotel or villa'] }
    ]
  },
  'ubud-adventures': {
    title: 'Ubud Wild Jungle ATV Ride & River Rafting',
    img: 'assets/images/shibupavizha-george-zZeh-USTxeE-unsplash.jpg',
    thumb: 'assets/images/shibupavizha-george-zZeh-USTxeE-unsplash.jpg',
    price: 'USD 65', originalPrice: 'USD 95', priceNum: 65,
    category: 'adventure', badge: 'Adrenaline', badgeColor: 'bg-red-500',
    rating: 4.9, reviews: 94,
    waMessage: "Hi! I'd love to book the Ubud Wild Jungle ATV Ride & River Rafting package. Can you share availability?",
    prices: ['$65 / person (ATV Ride + Rafting Combo)', '$58 / person (Group of 4+ discount)', 'Includes: Safety gear, Expert guides, ATV rental, Rafting raft, Lunch buffet'],
    destinations: ['Rugged ATV Jungle Trails 🏍️💨', 'Ayung River White Water Rafting 🚣', 'Cretya Ubud or Tlaga Singha Infinity Pools 🏊'],
    itinerary: [
      { session: 'MORNING', activities: ['08:00 - Private air-conditioned lobby pickup', '09:30 - Unleash the power of an ATV Quad Bike through wild terrains & muddy caves 🏍️💨', '11:30 - Challenge yourself with exhilarating Ayung River white water rafting 🚣'] },
      { session: 'AFTERNOON', activities: ['13:30 - Gourmet Indonesian buffet lunch overlooking the lush river valley', '15:00 - Treat yourself to a swim at the luxury Cretya Ubud or Tlaga Singha infinity pools 🏊', '16:30 - Relax and enjoy local tropical smoothies overlooking steep rice field cliffs 🍹'] },
      { session: 'RETURN', activities: ['17:30 - Smooth transit back to your hotel or villa'] }
    ]
  },
  'batur-sunrise': {
    title: 'Mount Batur Sunrise 4x4 Jeep & Black Lava Adventure',
    img: 'assets/images/kintamani.jpg',
    thumb: 'assets/images/kintamani.jpg',
    price: 'USD 75', originalPrice: 'USD 120', priceNum: 75,
    category: 'nature', badge: 'Must Do', badgeColor: 'bg-orange-500',
    rating: 5.0, reviews: 186,
    waMessage: "Hi! I'm interested in the Mount Batur Sunrise 4x4 Jeep Tour. What is the itinerary and pickup time?",
    prices: ['$75 / person (minimum 2 persons)', '$65 / person (group of 4+)', 'Includes: 4x4 off-road Jeep, Volcano entrance, Hot breakfast, Warm jackets'],
    destinations: ['Mount Batur Caldera Sunrise Point ☀️', 'Rugged Volcanic Black Lava Formations ⚫', 'Serene Lake Batur Coastline 🌊', 'Batur Mountain View Restaurant 🍽️'],
    itinerary: [
      { session: 'MIDNIGHT', activities: ['03:00 - Midnight hotel pickup in a warm, cozy private vehicle', '04:30 - Arrive at Batur base camp & board custom open-air 4x4 Jeeps 🚙'] },
      { session: 'SUNRISE', activities: ['05:45 - Secure a prime spot at the caldera edge to witness a fiery sunrise ☀️', '06:15 - Chef-prepared breakfast on the jeep bonnet (eggs, banana pancakes, coffee) 🍳', '07:30 - Off-road adventure through ancient Black Lava fields and rock formations ⚫'] },
      { session: 'AFTERNOON', activities: ['09:30 - Admire pristine views of Lake Batur, Bali\'s largest volcanic lake 🌊', '11:30 - Conclude the expedition with a gorgeous valley buffet lunch 🍽️'] },
      { session: 'RETURN', activities: ['13:00 - Comfortable drive back with an optional coffee plantation stop', '14:30 - Return to your accommodation'] }
    ]
  },
  'blue-lagoon': {
    title: 'Blue Lagoon Marine Safari & Bella Vista Escape',
    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
    price: 'USD 50', originalPrice: 'USD 75', priceNum: 50,
    category: 'island', badge: 'Best Value', badgeColor: 'bg-cyan-600',
    rating: 4.8, reviews: 72,
    waMessage: "Hi! The Blue Lagoon Marine Safari & Bella Vista Escape looks amazing. Can you share availability details?",
    prices: ['$50 / person (minimum 2 persons)', '$43 / person (group of 4+)', 'Includes: Snorkeling equipment, Boat captain, Seafood lunch, Monkey Bar access'],
    destinations: ['Blue Lagoon Snorkeling Bay 🐠', 'Tanjung Jepun Coral Gardens 🐡', 'Monkey Bar at Bella Vista 🍹'],
    itinerary: [
      { session: 'MORNING', activities: ['08:00 - Scenic drive to beautiful East Bali (Karangasem area) 🚗', '09:30 - Board a traditional boat to the pristine Blue Lagoon snorkeling spot 🐠', '11:00 - Explore Tanjung Jepun\'s neon coral gardens and search for sea turtles 🐡'] },
      { session: 'AFTERNOON', activities: ['12:30 - Relish a fresh seafood lunch right on the sandy coast', '14:00 - Dive, swim, and sip cocktails at the amazing Monkey Bar at Bella Vista 🍹'] },
      { session: 'RETURN', activities: ['16:30 - Departure and coastal drive past terraced hillsides', '18:00 - Hotel drop-off'] }
    ]
  },
  'northern-wonders': {
    title: 'Northern Lovina Dolphins & Jungle Gate Wonders',
    img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
    price: 'USD 80', originalPrice: 'USD 130', priceNum: 80,
    category: 'nature', badge: 'Magical Day', badgeColor: 'bg-blue-600',
    rating: 4.9, reviews: 68,
    waMessage: "Hi! I'd like to book the Northern Lovina Dolphins & Jungle Gate Wonders tour. When can we start?",
    prices: ['$80 / person (minimum 2 persons)', '$70 / person (group of 4+)', 'Includes: Lovina outrigger boat, Snorkel gear with dolphins, All temple tickets'],
    destinations: ['Lovina Sunrise Beach 🐬', 'Handara Jungle Gate (Gate of Heaven) 🌿📸', 'Ulun Danu Beratan Water Temple 🛶', 'Lake Beratan Scenic Overlooks 🏞️'],
    itinerary: [
      { session: 'MIDNIGHT', activities: ['02:00 - Early morning private pickup from your lobby', '05:45 - Board a traditional outrigger boat at Lovina beach 🛶'] },
      { session: 'DAWN & DOLPHINS', activities: ['06:15 - Marvel at wild, playful dolphins jumping alongside the rising sun 🐬', '07:30 - Unforgettable snorkeling right next to these beautiful creatures in the calm sea 🌊', '09:00 - Warm, hearty breakfast on Lovina\'s dark volcanic sand beach'] },
      { session: 'AFTERNOON', activities: ['11:00 - Capture iconic photographs at the famous Handara Gate (Gate of the Jungle) 🌿📸', '12:30 - Tour the magical Ulun Danu Beratan water temple floating on the lake', '13:30 - Lakeside lunch with crisp, cool mountain air and gorgeous panoramic views 🏞️'] },
      { session: 'RETURN', activities: ['15:00 - Scenic drive back through the Bedugul mountain valleys', '18:00 - Arrive safely back at your hotel or villa'] }
    ]
  },
  'water-extravaganza': {
    title: 'Nusa Dua Watersports & Uluwatu Cliff Kecak',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    price: 'USD 85', originalPrice: 'USD 140', priceNum: 85,
    category: 'adventure', badge: 'Action & Culture', badgeColor: 'bg-indigo-600',
    rating: 4.9, reviews: 112,
    waMessage: "Hi! The Nusa Dua Watersports & Uluwatu Cliff Kecak combo looks perfect. What is the scheduling for watersports?",
    prices: ['$85 / person (minimum 2 persons)', '$75 / person (group of 4+)', 'Includes: Adventure Parasailing, Banana Boat, Jet Ski, GWK Entry, Uluwatu Temple, Kecak Show'],
    destinations: ['Nusa Dua Watersports Beach 🏄‍♀️', 'Garuda Wisnu Kencana (GWK) 🗿', 'Uluwatu Cliff Temple 🛕', 'Sunset Kecak Fire Dance Arena 🌅🔥'],
    itinerary: [
      { session: 'MORNING', activities: ['09:00 - Lobby pickup to explore vibrant South Bali', '10:00 - Exhilarating water sports: Fly above with Adventure Parasailing, splash on the Banana Boat, and speed on a Jet Ski! 🚤', '11:30 - Optional additions: Try Fly Fish, Roulette Doughnut, Wakeboarding, or Sea Walker 🏄'] },
      { session: 'AFTERNOON', activities: ['13:30 - Tasty seaside lunch with fresh coconut water', '14:30 - Wander around the colossal Garuda Wisnu Kencana (GWK) cultural park 🗿', '16:30 - Visit the cliffside Uluwatu Temple and its mischievous resident monkeys'] },
      { session: 'EVENING', activities: ['18:00 - Witness the legendary Kecak Fire Dance during a brilliant Indian Ocean sunset 🌅🔥', '19:30 - Optional fresh grilled seafood dinner directly on Jimbaran Beach'] },
      { session: 'RETURN', activities: ['20:30 - Private transfer back to your villa'] }
    ]
  }
};

/* ═══════════════════════════════════════════════════════
   VEHICLE DATA
═══════════════════════════════════════════════════════ */

const cars = {
  'suzuki-apv': {
    name: 'Suzuki APV',
    badge: 'Standard Car', badgeColor: 'bg-blue-600',
    category: 'standard',
    img: 'https://catalogo.gac-sa.cl/assets/vehiculos/matriz/Wigo_Peru/3115/image_principal/image_principal.jpg',
    price: 'USD 35',
    priceNum: 35,
    maxTour: '6 Pax', maxAirport: '4 Pax', luggage: '4 Bags', hours: '10 hrs',
    description: 'The Suzuki APV is our most popular entry-level van, ideal for small families or groups of up to 6 people on a tour. Compact yet spacious inside, it handles Bali\'s narrow roads and mountain routes with ease. Full air-conditioning and comfortable seating make it perfect for a full-day island tour. Note: This service is for car rental/charter transport only (includes petrol, free parking, mineral water; does not include entrance tickets).',
    features: [
      'Full air conditioning','4 large luggage capacity','USB charging port',
      'Comfortable reclining seats','Ideal for narrow mountain roads',
      'Max 4 pax with luggage for airport','Max 6 pax for tour'
    ],
    pricing: [
      { service:'Airport Transfer (Kuta/Seminyak)', duration:'One way', price:'USD 20' },
      { service:'Airport Transfer (Ubud)', duration:'One way', price:'USD 30' },
      { service:'Private Tour (Full Day)', duration:'8–10 hrs', price:'USD 35' },
      { service:'Half Day Tour', duration:'4–5 hrs', price:'USD 25' },
    ],
    waMessage: "Hi! I'd like to book the Suzuki APV. Can you share availability and details?"
  },
  'toyota-avanza': {
    name: 'Toyota Avanza',
    badge: 'Standard Car', badgeColor: 'bg-blue-600',
    category: 'standard',
    img: 'https://www.dubicars.com/images/148f64/r_960x540/generations/generation_64968304ed607_toyota-avanza-cover-front-left-angled.jpg?',
    price: 'USD 40',
    priceNum: 40,
    maxTour: '6 Pax', maxAirport: '4 Pax', luggage: '4 Bags', hours: '10 hrs',
    description: 'The Toyota Avanza is a reliable and fuel-efficient MPV widely trusted across Bali. Known for its smooth ride and solid build, it comfortably seats up to 6 passengers for tours and 4 with luggage for airport transfers. A great all-rounder choice. Note: This service is for car rental/charter transport only (includes petrol, free parking, mineral water; does not include entrance tickets).',
    features: [
      'Full air conditioning','Smooth automatic transmission','USB charging port',
      'Spacious legroom','Fuel efficient engine','Comfortable for long drives',
      'Max 4 pax + luggage airport','Max 6 pax for tour'
    ],
    pricing: [
      { service:'Airport Transfer (Kuta/Seminyak)', duration:'One way', price:'USD 22' },
      { service:'Airport Transfer (Ubud)', duration:'One way', price:'USD 32' },
      { service:'Private Tour (Full Day)', duration:'8–10 hrs', price:'USD 40' },
      { service:'Half Day Tour', duration:'4–5 hrs', price:'USD 28' },
    ],
    waMessage: "Hi! I'd like to book the Toyota Avanza. Can you help me?"
  },
  'toyota-innova': {
    name: 'Toyota Innova Reborn',
    badge: 'MPV', badgeColor: 'bg-teal-700',
    category: 'mpv',
    img: 'https://momobil.id/news/wp-content/uploads/2023/09/Toyota-Kijang-Innova-Reborn-Diesel.jpg',
    price: 'USD 55',
    priceNum: 55,
    maxTour: '7 Pax', maxAirport: '6 Pax', luggage: '6 Bags', hours: '10 hrs',
    description: 'The Toyota Innova Reborn is a premium MPV that balances comfort and capacity perfectly. With dual-zone air conditioning and a spacious cabin, it is ideal for families or medium-sized groups who want extra comfort on a full-day tour across Bali. Note: This service is for car rental/charter transport only (includes petrol, free parking, mineral water; does not include entrance tickets).',
    features: [
      'Dual zone air conditioning','USB & 12V charging ports','Wide panoramic windows',
      'Reclining captain seats','Extra legroom & boot space','Great for long-distance routes',
      'Max 6 pax + luggage airport','Max 7 pax for tour'
    ],
    pricing: [
      { service:'Airport Transfer (Kuta/Seminyak)', duration:'One way', price:'USD 28' },
      { service:'Airport Transfer (Ubud)', duration:'One way', price:'USD 40' },
      { service:'Private Tour (Full Day)', duration:'8–10 hrs', price:'USD 55' },
      { service:'Half Day Tour', duration:'4–5 hrs', price:'USD 38' },
    ],
    waMessage: "Hi! I'm interested in booking the Toyota Innova Reborn."
  },
  'toyota-hiace': {
    name: 'Toyota Hi-Ace',
    badge: 'Elf', badgeColor: 'bg-indigo-700',
    category: 'elf',
    img: 'https://imgcdn.zigwheels.co.th/large/gallery/exterior/33/3369/toyota-hiace-front-angle-low-view-827028.jpg',
    price: 'USD 80',
    priceNum: 80,
    maxTour: '15 Pax', maxAirport: '11 Pax', luggage: '10 Bags', hours: '10 hrs',
    description: 'The Toyota Hi-Ace is our premium large van, perfect for bigger groups, corporate transfers, or extended family tours. With a high-roof cabin and generous luggage space, it comfortably handles up to 15 passengers for tours and 11 with full luggage for airport transfers. Note: This service is for car rental/charter transport only (includes petrol, free parking, mineral water; does not include entrance tickets).',
    features: [
      'High-roof cabin — stand-up comfortable','Dual AC units front & rear',
      'USB charging on every row','Large overhead compartments',
      'Professional licensed driver','Suitable for wedding/event transport',
      'Max 11 pax + luggage airport','Max 15 pax for tour'
    ],
    pricing: [
      { service:'Airport Transfer (Kuta/Seminyak)', duration:'One way', price:'USD 40' },
      { service:'Airport Transfer (Ubud)', duration:'One way', price:'USD 55' },
      { service:'Private Tour (Full Day)', duration:'8–10 hrs', price:'USD 80' },
      { service:'Half Day Tour', duration:'4–5 hrs', price:'USD 55' },
      { service:'Multi-day (3+ days)', duration:'per day', price:'USD 70' },
    ],
    waMessage: "Hi! I need the Toyota Hi-Ace for a group. Can you confirm availability?"
  },
  'alphard': {
    name: 'Toyota Alphard',
    badge: 'Luxury Car', badgeColor: 'bg-yellow-600',
    category: 'luxury',
    img: 'https://photo.znews.vn/Uploaded/yqdlmdxwp/2024_12_21/2025_Toyota_Alphard_Exterior_6_2_2.jpg',
    price: 'USD 195',
    priceNum: 195,
    maxTour: '5 Pax', maxAirport: '4 Pax', luggage: '4 Bags', hours: '10 hrs',
    description: 'The Toyota Alphard is the pinnacle of luxury travel in Bali. With its executive cabin, power-sliding doors, and premium leather seats, it delivers a VIP experience unlike any other. Perfect for honeymoon couples, business travelers, or those who simply want to explore Bali in style. Note: This service is for car rental/charter transport only (includes petrol, free parking, mineral water; does not include entrance tickets).',
    features: [
      'Premium leather captain seats','Power-sliding rear doors',
      'Dual-screen rear entertainment','Panoramic sunroof',
      'Refrigerator & mini bar','USB & wireless charging',
      'Privacy curtains','Full day 8–10 hours max',
      'Max 4 pax + luggage airport','Max 5 pax for tour'
    ],
    pricing: [
      { service:'Airport Transfer (Kuta/Seminyak)', duration:'One way', price:'USD 75' },
      { service:'Airport Transfer (Ubud)', duration:'One way', price:'USD 95' },
      { service:'Private Tour (Full Day)', duration:'8–10 hrs', price:'USD 195' },
      { service:'Half Day Tour', duration:'4–5 hrs', price:'USD 130' },
      { service:'Wedding/Event Transfer', duration:'4 hrs', price:'USD 150' },
    ],
    waMessage: "Hi! I'm interested in the Toyota Alphard for a luxury Bali experience. Can you help?"
  },
  'fortuner': {
    name: 'Toyota Fortuner',
    badge: 'Luxury Car', badgeColor: 'bg-yellow-600',
    category: 'luxury',
    img: 'https://media.cdntoyota.co.za/toyotacms23/attachments/cldd4dd3a01gu0psx0wnbyh1i-fortuner-exterior-front-34-high-turn-1920x1080.desktop.jpg',
    price: 'USD 120',
    priceNum: 120,
    maxTour: '6 Pax', maxAirport: '5 Pax', luggage: '5 Bags', hours: '10 hrs',
    description: 'The Toyota Fortuner is a premium SUV delivering power and prestige. Built for comfort and style, it\'s perfect for adventurous travelers and those seeking a more upscale option. With modern amenities and impressive road presence, it stands out among Bali\'s rental fleet. Note: This service is for car rental/charter transport only (includes petrol, free parking, mineral water; does not include entrance tickets).',
    features: [
      'Premium cabin design','Advanced AC climate control','Power windows & mirrors',
      'Cruise control','Leather upholstery','Modern infotainment system',
      'Max 5 pax + luggage airport','Max 6 pax for tour'
    ],
    pricing: [
      { service:'Airport Transfer (Kuta/Seminyak)', duration:'One way', price:'USD 50' },
      { service:'Airport Transfer (Ubud)', duration:'One way', price:'USD 70' },
      { service:'Private Tour (Full Day)', duration:'8–10 hrs', price:'USD 120' },
      { service:'Half Day Tour', duration:'4–5 hrs', price:'USD 85' },
    ],
    waMessage: "Hi! I'm interested in booking the Toyota Fortuner for my Bali tour."
  }
};

let carKeys = Object.keys(cars);
let activeCarCat = 'all';

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

  const waUrl = `https://wa.me/6285934484380?text=${encodeURIComponent(t.waMessage)}`;
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
            <div class="text-orange-500 font-extrabold text-xl">${t.price} <span class="text-xs font-normal text-gray-500">/ person</span></div>
            <div class="text-[10px] text-orange-600 font-bold -mt-0.5">Min. 2 Persons</div>
          </div>
          <a href="https://wa.me/6285934484380?text=${encodeURIComponent(t.waMessage)}" target="_blank"
             class="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition"
             onclick="event.stopPropagation()">
            Book Now
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════
   VEHICLES/TRANSPORTATION PAGE FUNCTIONS
═══════════════════════════════════════════════════════ */

function filterCars(cat) {
  activeCarCat = cat;
  document.querySelectorAll('.car-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderAllCars();
}

function renderAllCars() {
  const grid = document.getElementById('all-car-grid');
  const countEl = document.getElementById('car-count');
  if (!grid) return;

  const filtered = carKeys.filter(key => {
    return activeCarCat === 'all' || cars[key].category === activeCarCat;
  });

  countEl.textContent = `Showing ${filtered.length} vehicle${filtered.length !== 1 ? 's' : ''}`;

  grid.innerHTML = filtered.map(key => buildCarCard(key)).join('');
}

function buildCarCard(key) {
  const car = cars[key];
  return `
    <div class="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition" onclick="showCarDetail('${key}')">
      <div class="relative">
        <img src="${car.img}" alt="${car.name}" class="w-full h-48 object-cover" loading="lazy"/>
        <div class="absolute top-4 left-4 ${car.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          ${car.badge}
        </div>
      </div>
      <div class="p-5">
        <h3 class="font-bold text-teal-800 text-lg mb-2">${car.name}</h3>
        <div class="flex gap-4 text-gray-600 text-sm mb-4">
          <span><i class="fas fa-users text-teal-600 mr-1"></i>${car.maxTour}</span>
          <span><i class="fas fa-briefcase text-orange-500 mr-1"></i>${car.luggage}</span>
        </div>
        <div class="flex items-end justify-between">
          <span class="text-orange-500 font-bold text-2xl">${car.price}</span>
          <a href="https://wa.me/6285934484380?text=${encodeURIComponent(car.waMessage)}" target="_blank"
             class="bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition"
             onclick="event.stopPropagation()">
            Book Now
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderHomeFleet() {
  const grid = document.getElementById('home-fleet-grid');
  if (!grid) return;

  const featured = carKeys.slice(0, 3);
  grid.innerHTML = featured.map(key => buildCarCard(key)).join('');
}

function showCarDetail(carKey) {
  window.location.href = 'car-detail.html?car=' + carKey;
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
    qbState.simple = Math.max(2, Math.min(12, qbState.simple + delta));
    document.getElementById('qb-guests-simple').textContent = qbState.simple;
    qbUpdateTotalSimple();
  }
}

function qbAdjustOpt(type, delta) {
  if (type === 'adult') {
    qbState.adults = Math.max(2, Math.min(12, qbState.adults + delta));
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
    simple: 2, adults: 2, children: 0,
  };

  document.getElementById('qb-price-display').textContent = tour.price;

  document.getElementById('qb-name').value = '';
  document.getElementById('qb-err-name').classList.add('hidden');
  document.getElementById('qb-name').classList.remove('border-red-400');
  document.getElementById('qb-name-spacer').style.display = 'block';

  document.getElementById('qb-pickup').value = '';
  document.getElementById('qb-err-pickup').classList.add('hidden');
  document.getElementById('qb-pickup').classList.remove('border-red-400');
  document.getElementById('qb-pickup-spacer').style.display = 'block';

  document.getElementById('qb-notes').value = '';

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
    document.getElementById('qb-adults').textContent = '2';
    document.getElementById('qb-children').textContent = '0';
    document.getElementById('qb-total-options').style.display = 'flex';
    qbUpdateTotalOptions();
  } else {
    options.classList.add('hidden');
    simple.classList.remove('hidden');
    document.getElementById('qb-guests-simple').textContent = '2';
    document.getElementById('qb-unit-s').textContent = tour.price;
    document.getElementById('qb-total-simple').style.display = 'flex';
    qbUpdateTotalSimple();
  }
}

function qbSubmit() {
  const nameEl = document.getElementById('qb-name');
  const errNameEl = document.getElementById('qb-err-name');
  const pickupEl = document.getElementById('qb-pickup');
  const errPickupEl = document.getElementById('qb-err-pickup');
  const notesEl = document.getElementById('qb-notes');
  const dateEl = document.getElementById('qb-date');
  const errDateEl = document.getElementById('qb-err-date');

  let hasError = false;

  // Validate Name
  if (!nameEl.value.trim()) {
    errNameEl.classList.remove('hidden');
    nameEl.classList.add('border-red-400');
    if (!hasError) {
      nameEl.focus();
      hasError = true;
    }
    setTimeout(() => {
      errNameEl.classList.add('hidden');
      nameEl.classList.remove('border-red-400');
    }, 3000);
  }

  // Validate Pickup
  if (!pickupEl.value.trim()) {
    errPickupEl.classList.remove('hidden');
    pickupEl.classList.add('border-red-400');
    if (!hasError) {
      pickupEl.focus();
      hasError = true;
    }
    setTimeout(() => {
      errPickupEl.classList.add('hidden');
      pickupEl.classList.remove('border-red-400');
    }, 3000);
  }

  // Validate Date
  if (!dateEl.value) {
    errDateEl.classList.remove('hidden');
    dateEl.classList.add('border-red-400');
    if (!hasError) {
      dateEl.focus();
      hasError = true;
    }
    setTimeout(() => {
      errDateEl.classList.add('hidden');
      dateEl.classList.remove('border-red-400');
    }, 3000);
  }

  if (hasError) return;

  const dateFormatted = new Date(dateEl.value + 'T00:00:00')
    .toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  const nameVal = nameEl.value.trim();
  const pickupVal = pickupEl.value.trim();
  const notesVal = notesEl.value.trim() || 'None';

  let guestLine = '';
  let totalVal = 0;

  if (qbState.formType === 'simple') {
    const n = qbState.simple;
    guestLine = `${n} Person(s)`;
    totalVal = n * qbState.basePrice;
  } else {
    const a = qbState.adults, c = qbState.children;
    guestLine = `${a} Adult${a !== 1 ? 's' : ''} + ${c} Child${c !== 1 ? 'ren' : ''}`;
    totalVal = a * qbState.basePrice + c * qbState.childPrice;
  }

  const msg = [
    '✨ *NEW RESERVATION* ✨',
    '━━━━━━━━━━━━━━━━━━━━',
    '🌴 *BALI\'S BAGUS JOURNEY*',
    '_Premier Private Tour & Driver Service_',
    '━━━━━━━━━━━━━━━━━━━━',
    '',
    '👤 *CUSTOMER DETAILS*',
    `  ▪️ *Name*      : ${nameVal}`,
    `  ▪️ *Pickup*    : ${pickupVal}`,
    '',
    '🗺️ *TOUR DETAILS*',
    `  ▪️ *Package*   : ${qbState.tourTitle}`,
    `  ▪️ *Date*      : ${dateFormatted}`,
    `  ▪️ *Guests*    : ${guestLine}`,
    '',
    '💰 *PRICE ESTIMATE*',
    `  ▪️ *Base Price* : ${qbState.priceStr} / Person`,
    `  ▪️ *Estimated Total* : *USD ${totalVal}*`,
    '  _(No prepayment needed — pay on the day)_',
    '',
    '📝 *SPECIAL REQUESTS*',
    `  ▪️ ${notesVal}`,
    '',
    '━━━━━━━━━━━━━━━━━━━━',
    '📱 _Sent from Bali Bagus Journey website_'
  ].join('\n');

  window.open('https://wa.me/6285934484380?text=' + encodeURIComponent(msg), '_blank');
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
  if (document.getElementById('all-car-grid')) {
    renderAllCars();
  }
  if (document.getElementById('home-fleet-grid')) {
    renderHomeFleet();
  }
});
