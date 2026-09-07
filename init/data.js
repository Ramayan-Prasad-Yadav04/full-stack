const sampleListings = [
  {
    title: "The Taj Mahal Palace",
    description: "Built in 1903, this legendary 5-star flagship hotel overlooks the Arabian Sea and Gateway of India, offering fine dining at Wasabi by Morimoto and private sea-view balconies.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    price: 34500,
    location: "Apollo Bandar, Colaba, Mumbai",
    country: "India"
  },
  {
    title: "The Oberoi Udaivilas",
    description: "Spanning 50 acres on the banks of Lake Pichola, this royal resort features interconnected outdoor swimming pools, domes, courtyards, and boat transfers from the private jetty.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    price: 46000,
    location: "Haridas Ji Ki Magri, Udaipur",
    country: "India"
  },
  {
    title: "Rambagh Palace",
    description: "The former official residence of the Maharaja of Jaipur, featuring 78 restored Art Deco suites, peacocks roaming through 47 acres of gardens, and fine Indian dining at Suvarna Mahal.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    price: 58000,
    location: "Bhawani Singh Road, Jaipur",
    country: "India"
  },
  {
    title: "ITC Grand Chola",
    description: "Inspired by the architecture of South India's historic Chola dynasty, this palatial hotel features carved marble pillars, ten distinct restaurants, and three swimming pools.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    price: 15500,
    location: "Guindy, Chennai",
    country: "India"
  },
  {
    title: "The Leela Palace New Delhi",
    description: "A luxury hotel in the Diplomatic Enclave blending Lutyens architectural style with royal Indian motifs, featuring a temperature-controlled rooftop infinity pool and Michelin-branded dining.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    price: 26000,
    location: "Chanakyapuri, New Delhi",
    country: "India"
  },
  {
    title: "Wildflower Hall, An Oberoi Resort",
    description: "Located at 8,250 feet above sea level in the Shimla hills, this colonial-style retreat boasts cedar forest trails, outdoor heated hydrotherapy whirlpools, and Himalayan views.",
    image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=1200&q=80",
    price: 38500,
    location: "Chharabra, Shimla",
    country: "India"
  },
  {
    title: "Taj Falaknuma Palace",
    description: "The former palace of the Nizam of Hyderabad elevated 2,000 feet above the city, reachable by horse carriage, with Belgian crystal chandeliers and a 101-seat dining hall.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    price: 49000,
    location: "Engine Bowli, Falaknuma, Hyderabad",
    country: "India"
  },
  {
    title: "W Goa",
    description: "Overlooking the red cliffs of Vagator Beach and Chapora Fort, featuring beachfront chalets, Rock Pool sundowners, and contemporary Mediterranean-Indian fusion restaurants.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    price: 22000,
    location: "Vagator Beach, Goa",
    country: "India"
  },
  {
    title: "Marina Bay Sands",
    description: "An iconic landmark featuring a 150-meter rooftop infinity pool atop three hotel towers, an observation deck, integrated casino, and immediate access to the Shoppes canal.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    price: 54000,
    location: "10 Bayfront Avenue",
    country: "Singapore"
  },
  {
    title: "Burj Al Arab Jumeirah",
    description: "Standing on an artificial island off Jumeirah Beach, this sail-shaped property features two-story duplex suites, 24-karat gold-leaf interiors, and chauffeur-driven Rolls-Royces.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    price: 142000,
    location: "Umm Suqeim 3, Dubai",
    country: "United Arab Emirates"
  },
  {
    title: "The Plaza Hotel",
    description: "Situated directly on Fifth Avenue and Central Park South, this 1907 Beaux-Arts landmark offers gilded suites, the Palm Court afternoon tea service, and Guerlain Spa access.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    price: 78000,
    location: "768 5th Ave, New York City",
    country: "United States"
  },
  {
    title: "The Ritz Paris",
    description: "Located on Place Vendôme, this historic palace hotel features classic French neoclassical decor, the Bar Hemingway, and private subterranean Roman-style indoor pools.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    price: 125000,
    location: "15 Place Vendôme, Paris",
    country: "France"
  },
  {
    title: "Hoshinoya Kyoto",
    description: "A riverside luxury ryokan in the Arashiyama district accessible only by traditional wooden boat, offering tatami rooms with hand-blocked wallpaper and seasonal kaiseki dinners.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    price: 92000,
    location: "Arashiyama, Ukyo Ward, Kyoto",
    country: "Japan"
  },
  {
    title: "Katikies Santorini",
    description: "Perched 300 feet above the blue waters of the caldera basin, this Oia cliffside retreat offers cave suites, private whirlpools, and open-air sunset dining overlooking the Aegean Sea.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    price: 64000,
    location: "Oia, Santorini",
    country: "Greece"
  },
  {
    title: "Amangiri",
    description: "A 600-acre minimalist luxury resort tucked into a canyon valley in Southern Utah, featuring sandstone-toned pavilions, a canyon-framing swimming pool, and Navajo guided excursions.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    price: 185000,
    location: "Canyon Point, Utah",
    country: "United States"
  }
];

module.exports = { data: sampleListings };