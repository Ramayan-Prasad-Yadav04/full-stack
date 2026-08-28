const sampleListings = [
  {
    title: "Cozy Mountain Chalet",
    description: "Enjoy breathtaking valley views from this warm wooden cottage equipped with an indoor fireplace and private patio.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaSEdUEf828A4CmYhRDMnmgHdSZ-rfwjybHqPHOhtCg&s=10" ,
    price: 4500,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Seaside Heritage Villa",
    description: "Step directly onto golden sands from this Portuguese-inspired beach house featuring an open courtyard and private pool.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdGZxHMQZ6gvQo6jwsES8pgn2FEYl_Mvbhv1ARbMRLQ&s=10" ,
    price: 8200,
    location: "Anjuna, Goa",
    country: "India"
  },
  {
    title: "Modern Minimalist Loft",
    description: "A sunlit studio apartment in the heart of the arts district, complete with high ceilings, exposed brick, and ultra-fast Wi-Fi.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqSQxJPYaFWTjqYPOxIBw_0OUj1Tu0ykRFpynqbS_fA&s=10",
    price: 12000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Rustic Lakefront Cabin",
    description: "Unplug in nature with panoramic lakefront views, a private boat dock, and an outdoor fire pit perfect for starry evenings.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH96TL79Uvu3P6RqLMm0xOij8difv-lRs7nq5-4mRIIg&s" ,
    price: 6700,
    location: "Lake Louise, Alberta",
    country: "Canada"
  },
  {
    title: "Historic Tuscan Farmhouse",
    description: "Surrounded by rolling vineyards and olive groves, this restored stone villa includes an authentic wood-fired pizza oven.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DL9tvXl2sqMkJpzYFbqjKHeQolXqdX937Vxv8mJ4ew&s=10",
    price: 15400,
    location: "Siena, Tuscany",
    country: "Italy"
  },
  {
    title: "Desert Glamping Dome",
    description: "Experience luxury desert camping under starlit skies with climate control, en-suite bathroom, and traditional folk music dinners.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5RiWV1ThpIyvZMSiggy88QJRxRPTrUWPrxWWeEl-Ug&s=10" ,
    price: 5200,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Tropical Treehouse Retreat",
    description: "Nestled high up in lush jungle canopy, enjoy panoramic views of organic tea plantations and visits from exotic birds.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToq0OfneWMUErsrVOBO4FdBZmpU7tTNQZsqHEGJvc40Q&s=10",
    price: 3900,
    location: "Wayanad, Kerala",
    country: "India"
  },
  {
    title: "Santorini Cliffside Cave Suite",
    description: "Iconic whitewashed architecture overlooking the Aegean caldera, complete with a private cliffside plunge pool.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEAhE9fhmoLqFYz_xzfvl4C0FzWIcJL1pvRJqkXt-KA&s=10",
    price: 22000,
    location: "Oia, Santorini",
    country: "Greece"
  },
  {
    title: "Traditional Heritage Haveli",
    description: "Stay in a royal heritage haveli featuring intricate jharokhas, marble courtyards, and authentic rooftop dining.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1WNK3O6M7eElHTGDjApJTWfm-oYEG1bMlSO02bkCeQ&s=10",
    price: 7800,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Alpine Ski Chalet",
    description: "Ski-in/ski-out chalet with heated boot rooms, an outdoor cedar hot tub, and panoramic views of the Matterhorn.",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhYIuTZBMnZAcYu0z-ZDU4Xd8sYR2wKGsk_IgcqwBCw&s=10",
    price: 19500,
    location: "Zermatt",
    country: "Switzerland"
  },


  {
    title: "The Oberoi Udaivilas",
    description: "Regal luxury resort on the banks of Lake Pichola offering traditional architecture, interconnected pools, fine dining restaurants, and lush courtyard gardens.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    price: 43908,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "The Taj Mahal Palace",
    description: "Iconic heritage hotel overlooking the Gateway of India and the Arabian Sea, featuring refined rooms, fine dining restaurants, and a luxury spa.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    price: 36122,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Rambagh Palace",
    description: "Grand heritage property set in a converted 19th-century royal palace, featuring manicured gardens, extravagant suites, and royal butler service.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    price: 89328,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Taj Lake Palace",
    description: "18th-century marble palace floating in the middle of Lake Pichola, offering lavish rooms, open-air courtyards, and panoramic water views.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    price: 54398,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "The Leela Palace",
    description: "Modern palace hotel with lakefront suites, private plunge pools, royal spa treatments, and scenic dining overlooking the Aravalli hills.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    price: 40196,
    location: "Udaipur",
    country: "India"
  }
];

module.exports = { data: sampleListings };