export const crops = [
  { 
    id: 1,
    name: "Rice", 
    soil: "Clayey", 
    temp: "20-35°C", 
    water: "High", 
    season: "Kharif",
    image: "/assets/crops/rice.jpg",
    description: "Rice is a staple crop grown primarily in Asia. It requires a warm climate and abundant water. Rice grows best in flooded fields known as paddies, which helps control weeds and pests. It is a crucial food crop worldwide, especially in countries like China and India.",
    types: [
      { name: "Indica", benefits: "High yield, resistant to pests", demerits: "Long growing period" },
      { name: "Japonica", benefits: "Shorter growing period, better quality grains", demerits: "Sensitive to pests" }
    ],
    specificNeeds: "Rice needs abundant water and a warm climate, with pH levels ranging from 5.5 to 7.0. Well-irrigated paddies are essential for optimum growth.",
    benefits: "Rice provides energy and is a key staple for over half of the world's population. It’s rich in carbohydrates and provides essential dietary energy.",
    demerits: "Rice cultivation requires significant water resources, contributing to water wastage. It can also lead to soil salinization if not managed properly."
  },
  { 
    id: 2,
    name: "Wheat", 
    soil: "Loamy", 
    temp: "10-25°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/wheat.jpg", 
    description: "Wheat is one of the most important staple crops globally. It requires cooler climates and moderate rainfall. It is grown in regions with distinct seasons, and its grains are used to make flour, which is then processed into bread, pasta, and other food products.",
    types: [
      { name: "Hard Red Winter", benefits: "High protein content, suitable for bread", demerits: "Requires cold temperatures" },
      { name: "Soft Red Winter", benefits: "Best for cakes and pastries", demerits: "Less drought resistant" }
    ],
    specificNeeds: "Wheat prefers well-drained loamy soils with a pH of 6.0 to 7.0. It requires moderate water and temperatures between 10-25°C for optimal growth.",
    benefits: "Wheat is a major source of dietary fiber, vitamins, and minerals, and is used in a wide range of products from bread to pasta.",
    demerits: "Wheat is prone to pests and diseases, such as wheat rust. Excessive irrigation can lead to waterlogging and reduced yields."
  },
  { 
    id: 3,
    name: "Maize", 
    soil: "Well-drained", 
    temp: "21-27°C", 
    water: "Low", 
    season: "Kharif/Rabi",
    image: "/assets/crops/maizwe.jpg", 
    description: "Maize, also known as corn, is a versatile crop that thrives in a variety of climates. It can be grown in both Kharif and Rabi seasons. Maize is a staple food in many countries and is used for food, animal feed, and as raw material in industries like biofuels.",
    types: [
      { name: "Dent Corn", benefits: "High yield, used for animal feed and industrial purposes", demerits: "Requires warm temperatures" },
      { name: "Sweet Corn", benefits: "Rich in sugars, excellent for fresh consumption", demerits: "Short shelf life" }
    ],
    specificNeeds: "Maize requires well-drained, fertile soils and a warm climate. It needs moderate moisture and a temperature range between 21°C and 27°C for optimal growth.",
    benefits: "Maize provides a high-energy yield and is versatile, used in food, biofuels, and animal feed. It also provides a good source of dietary fiber.",
    demerits: "Maize can be affected by pests like the corn borer, and it requires careful water management to prevent soil erosion."
  },
  { 
    id: 4,
    name: "Sugarcane", 
    soil: "Deep Loamy", 
    temp: "21-27°C", 
    water: "Very High", 
    season: "Annual",
    image: "/assets/crops/sugarcane.jpg", 
    description: "Sugarcane is a tropical crop that grows best in warm climates with abundant water. It is primarily cultivated for its sugar content, which is extracted and processed to make sugar, molasses, and ethanol. It requires rich, deep, and well-drained soil.",
    types: [
      { name: "Saccharum officinarum", benefits: "High sugar content, used for ethanol production", demerits: "Requires extensive water" },
      { name: "Saccharum spontaneum", benefits: "More drought tolerant, used for breeding programs", demerits: "Lower sugar content" }
    ],
    specificNeeds: "Sugarcane requires a warm climate, abundant water, and deep, fertile, well-drained soil. It thrives in areas with long, hot summers.",
    benefits: "Sugarcane is the primary source of sugar production and bioethanol, providing energy and essential sweeteners. It also supports rural economies.",
    demerits: "Sugarcane cultivation is water-intensive and can lead to soil degradation if not managed properly. It also has high labor and irrigation needs."
  },
  { 
    id: 5,
    name: "Cotton", 
    soil: "Black Soil", 
    temp: "25-35°C", 
    water: "Low", 
    season: "Kharif",
    image: "/assets/crops/cotton.jpg", 
    description: "Cotton is an important cash crop known for its fiber, which is used in the textile industry. It grows well in hot climates with minimal rainfall. Cotton plants require well-drained soils and a long growing season to produce high yields.",
    types: [
      { name: "Upland Cotton", benefits: "Resistant to pests, high fiber yield", demerits: "Sensitive to water stress" },
      { name: "Pima Cotton", benefits: "Superior fiber quality, used in high-end fabrics", demerits: "Requires more water" }
    ],
    specificNeeds: "Cotton thrives in well-drained, loamy soils and requires a warm climate. It needs low to moderate irrigation and can withstand high temperatures during the growing season.",
    benefits: "Cotton is essential to the global textile industry and also provides oil from its seeds. It is a key cash crop in many countries.",
    demerits: "Cotton cultivation requires heavy pesticide use, which can harm the environment. It is also water-intensive in some regions."
  },
  { 
    id: 6,
    name: "Barley", 
    soil: "Loamy", 
    temp: "10-20°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/barley.jpg", 
    description: "Barley is one of the oldest cultivated crops and thrives in cooler climates. It is often grown as a winter crop and is used for making beer, malt, and as animal feed. Barley requires moderate moisture and well-drained soils.",
    types: [
      { name: "Two-row Barley", benefits: "Higher malting quality", demerits: "Sensitive to frost" },
      { name: "Six-row Barley", benefits: "Higher yield, used for feed", demerits: "Lower malting quality" }
    ],
    specificNeeds: "Barley prefers cool temperatures, well-drained loamy soil, and moderate water. It grows best in regions with a distinct cold season.",
    benefits: "Barley is used in food products, animal feed, and in the brewing industry. It is also rich in fiber and beneficial nutrients.",
    demerits: "Barley is prone to fungal diseases and requires careful management of pests and irrigation."
  },
  { 
    id: 7,
    name: "Oats", 
    soil: "Well-drained", 
    temp: "15-25°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/oats.jpg", 
    description: "Oats are a hardy crop that grows well in cooler climates. They require fertile, well-drained soil and moderate moisture. Oats are primarily used for human consumption in cereals and also as animal feed, particularly for livestock.",
    types: [
      { name: "Avena sativa", benefits: "Higher yield, edible grains", demerits: "Requires cool conditions" }
    ],
    specificNeeds: "Oats thrive in temperate climates with cool temperatures and need well-drained, fertile soils for optimal growth.",
    benefits: "Oats are nutritious, rich in fiber, and have various health benefits, including lowering cholesterol levels. They are a common ingredient in breakfast foods.",
    demerits: "Oats are susceptible to fungal diseases and require careful soil and pest management."
  },
  { 
    id: 8,
    name: "Peanuts", 
    soil: "Sandy Loam", 
    temp: "20-30°C", 
    water: "Moderate", 
    season: "Kharif",
    image: "/assets/crops/peanuts.jpg", 
    description: "Peanuts are a legume that thrives in warm climates. They are usually planted during the Kharif season and require well-drained, sandy loam soil. Peanuts are important for their edible seeds and oil, and they are also used in making peanut butter.",
    types: [
      { name: "Virginia", benefits: "Large seeds, used for snacking and in oil production", demerits: "Requires more water" },
      { name: "Runner", benefits: "High oil content, good for peanut butter", demerits: "Vulnerable to diseases like leaf spot" }
    ],
    specificNeeds: "Peanuts need well-drained sandy loam soil and require moderate water. They grow best in warm conditions with temperatures between 20°C and 30°C.",
    benefits: "Peanuts are rich in protein, healthy fats, and vitamins, and are commonly used in snacks, oils, and peanut butter. They are a great source of energy.",
    demerits: "Peanuts can be affected by fungal diseases like aflatoxin, which can spoil the crop and make it unfit for consumption."
  },
  { 
    id: 9,
    name: "Soybean", 
    soil: "Loamy", 
    temp: "20-30°C", 
    water: "Moderate", 
    season: "Kharif/Rabi",
    image: "/assets/crops/soyabean.jpg", 
    description: "Soybean is a highly versatile crop known for its high protein content. It is grown in both Kharif and Rabi seasons and is widely used in the production of oil, animal feed, and a variety of food products, including tofu and soy milk.",
    types: [
      { name: "Yellow Soybean", benefits: "Commonly grown, used for oil extraction and food products", demerits: "Requires good irrigation management" },
      { name: "Black Soybean", benefits: "Rich in antioxidants and used in Asian cuisines", demerits: "More susceptible to pests" }
    ],
    specificNeeds: "Soybeans need warm temperatures between 20°C and 30°C, well-drained loamy soil, and moderate water during growth. They are sensitive to drought conditions.",
    benefits: "Soybeans are an excellent source of protein, essential fatty acids, and various vitamins and minerals. They are widely used for various food products, including plant-based milk and tofu.",
    demerits: "Soybean cultivation can lead to soil depletion if not managed properly and is susceptible to pests like aphids and root rot."
  },
  { 
    id: 10,
    name: "Mustard", 
    soil: "Loamy", 
    temp: "10-25°C", 
    water: "Low", 
    season: "Rabi",
    image: "/assets/crops/mustard.jpg", 
    description: "Mustard is a cool-season crop that is grown mainly for its seeds, which are used as a spice and in oil production. It is cultivated in the Rabi season and grows well in well-drained soils with moderate temperatures.",
    types: [
      { name: "Yellow Mustard", benefits: "Mild flavor, used in oil extraction and condiments", demerits: "Requires cool weather" },
      { name: "Brown Mustard", benefits: "Stronger flavor, used for pickling and in cooking", demerits: "More susceptible to pests" }
    ],
    specificNeeds: "Mustard grows well in loamy soils with a pH of 6.0 to 7.5 and requires moderate moisture. It thrives in temperatures ranging from 10°C to 25°C.",
    benefits: "Mustard seeds are rich in oil, particularly omega-3 fatty acids. The oil is commonly used in cooking, and the seeds are used as a spice.",
    demerits: "Mustard can be vulnerable to diseases like downy mildew, and excessive irrigation can lead to root rot."
  },
  { 
    id: 11,
    name: "Chili", 
    soil: "Well-drained", 
    temp: "25-35°C", 
    water: "Low", 
    season: "Kharif",
    image: "/assets/crops/chilli.jpg", 
    description: "Chili peppers are grown for their pungent fruits, which are a staple in many cuisines worldwide. They require a warm climate and well-drained soils. Chilis are known for their heat and are often used in cooking, as well as for medicinal purposes.",
    types: [
      { name: "Cayenne", benefits: "High heat, used in sauces and powders", demerits: "Sensitive to cold" },
      { name: "Jalapeno", benefits: "Moderate heat, used fresh in salsas", demerits: "Prone to fungal diseases" }
    ],
    specificNeeds: "Chili plants require warm temperatures, well-drained soils, and moderate water. They grow best in temperatures between 25°C and 35°C.",
    benefits: "Chilis are rich in Vitamin C and capsaicin, which has health benefits like pain relief and boosting metabolism.",
    demerits: "Chilis are prone to pests like aphids and fungal diseases. Excessive rainfall can damage the fruit."
  },
  { 
    id: 12,
    name: "Tomato", 
    soil: "Loamy", 
    temp: "18-30°C", 
    water: "Moderate", 
    season: "Kharif",
    image: "/assets/crops/tomato.jpg", 
    description: "Tomatoes are one of the most commonly grown vegetables worldwide. They require moderate warmth and a well-drained, fertile soil. Tomatoes are used in a wide range of culinary dishes and are rich in vitamins and antioxidants.",
    types: [
      { name: "Roma", benefits: "Firmer flesh, good for sauces and pastes", demerits: "Low resistance to blight" },
      { name: "Cherry Tomato", benefits: "Sweet flavor, perfect for salads", demerits: "More susceptible to pests" }
    ],
    specificNeeds: "Tomatoes require well-drained, fertile soils, and moderate moisture. They grow best in temperatures between 18°C and 30°C, with regular watering.",
    benefits: "Tomatoes are rich in antioxidants, particularly lycopene, which has health benefits like reducing the risk of heart disease and cancer.",
    demerits: "Tomatoes are vulnerable to pests and diseases like blight, and they require consistent watering to avoid cracking and blossom end rot."
  },
  { 
    id: 13,
    name: "Potato", 
    soil: "Loamy", 
    temp: "15-20°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/potato.jpg", 
    description: "Potatoes are a versatile root crop grown in a variety of climates. They require cool temperatures and well-drained soil. Potatoes are an important food crop, used in dishes around the world, and they are rich in carbohydrates.",
    types: [
      { name: "Russet", benefits: "High yield, great for baking", demerits: "Requires cooler temperatures" },
      { name: "Yukon Gold", benefits: "Creamy texture, good for mashed potatoes", demerits: "Less resistant to disease" }
    ],
    specificNeeds: "Potatoes prefer cool temperatures and well-drained, loose soils. They require moderate water and grow best in temperatures between 15°C and 20°C.",
    benefits: "Potatoes are a rich source of carbohydrates, vitamins, and minerals, and are widely used in cooking and as a food staple worldwide.",
    demerits: "Potatoes are susceptible to diseases like blight and require careful management of irrigation to avoid tuber rot."
  },
  { 
    id: 14,
    name: "Groundnut", 
    soil: "Sandy Loam", 
    temp: "25-30°C", 
    water: "Moderate", 
    season: "Kharif",
    image: "/assets/crops/groundnut.jpg", 
    description: "Groundnut, also known as peanut, grows well in warm climates and requires sandy, well-drained soil. It is an important source of edible oil and protein. Groundnuts are primarily used in snacks, cooking, and also in the oil industry.",
    types: [
      { name: "Virginia", benefits: "Large kernels, used for roasting and snacks", demerits: "Requires more irrigation" },
      { name: "Runner", benefits: "High oil content, good for peanut butter", demerits: "Vulnerable to fungal diseases" }
    ],
    specificNeeds: "Groundnuts need sandy loam soil, warm temperatures, and moderate water for growth. They also require deep tillage for optimal root development.",
    benefits: "Groundnuts are a great source of protein, oil, and healthy fats. They are widely used for oil extraction and in cooking, especially in snacks.",
    demerits: "Groundnuts are prone to fungal diseases like aflatoxin, which can reduce the crop yield and quality."
  },
  { 
    id: 15,
    name: "Onion", 
    soil: "Loamy", 
    temp: "15-25°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/onion.jpg", 
    description: "Onions are a key culinary crop grown in both temperate and subtropical climates. They grow well in well-drained, loamy soils and require moderate water. Onions are rich in vitamins and minerals and are used in a variety of dishes worldwide.",
    types: [
      { name: "Yellow Onion", benefits: "Popular for cooking, long shelf life", demerits: "Requires careful watering" },
      { name: "Red Onion", benefits: "Rich in antioxidants, used in salads", demerits: "Shorter shelf life" }
    ],
    specificNeeds: "Onions prefer cool temperatures, well-drained soils, and consistent watering. They need at least 4-5 months to mature.",
    benefits: "Onions are rich in vitamins C and B6, and they are a powerful source of antioxidants. They also have health benefits, such as reducing inflammation and supporting heart health.",
    demerits: "Onions are susceptible to diseases like downy mildew and require pest management to prevent crop loss."
  },
  {
    id: 16,
    name: "Barley", 
    soil: "Loamy", 
    temp: "12-15°C", 
    water: "Low", 
    season: "Rabi",
    image: "/assets/crops/barley.jpg", 
    description: "Barley is one of the oldest grains and is grown primarily for food, fodder, and as a raw material in the brewing industry. It grows best in cool climates and is relatively drought-resistant, making it ideal for areas with less rainfall.",
    types: [
      { name: "6-Row Barley", benefits: "High grain yield, used in animal feed and malting", demerits: "Lower protein content" },
      { name: "2-Row Barley", benefits: "High-quality malt, commonly used in brewing", demerits: "Requires more water and care in soil management" }
    ],
    specificNeeds: "Barley grows best in cool climates with temperatures between 12°C and 15°C. It thrives in loamy, well-drained soils with minimal water requirements.",
    benefits: "Barley is rich in fiber and antioxidants, beneficial for digestion and heart health. It's a key ingredient in beer production and is also used for animal feed.",
    demerits: "Barley is susceptible to fungal diseases like powdery mildew and requires careful management to avoid crop loss."
  },
  { 
    id: 17,
    name: "Oats", 
    soil: "Loamy", 
    temp: "15-20°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/oats.jpg", 
    description: "Oats are a cool-season crop, valued for their high nutritional content. They are often grown as a food crop but can also be used for animal fodder. Oats prefer cool and moist growing conditions and require moderate irrigation.",
    types: [
      { name: "Avena Sativa", benefits: "Common variety, used for food products like oatmeal", demerits: "Prone to rust diseases" },
      { name: "Avena byzantina", benefits: "Hardier variety, used in animal feed", demerits: "Lower yield compared to Avena Sativa" }
    ],
    specificNeeds: "Oats require cool temperatures and moist, well-drained loamy soils. They need moderate water and grow best between 15°C and 20°C.",
    benefits: "Oats are rich in fiber, particularly beta-glucans, which help in reducing cholesterol levels. They are also high in vitamins, minerals, and antioxidants.",
    demerits: "Oats are vulnerable to diseases like crown rust and require careful management of irrigation and soil conditions."
  },
  { 
    id: 18,
    name: "Spinach", 
    soil: "Loamy", 
    temp: "10-20°C", 
    water: "High", 
    season: "Rabi",
    image: "/assets/crops/spinach.jpg", 
    description: "Spinach is a leafy green vegetable known for its high vitamin and mineral content. It thrives in cool climates and is grown in well-drained, fertile soils. It is a popular crop due to its rapid growth and the nutritional benefits of its leaves.",
    types: [
      { name: "Savoy", benefits: "Curly leaves, popular in salads", demerits: "Prone to aphid infestations" },
      { name: "Flat-leaf", benefits: "Smooth leaves, used for cooking and processing", demerits: "Requires more water than Savoy variety" }
    ],
    specificNeeds: "Spinach grows best in cool weather, with temperatures between 10°C and 20°C. It requires well-drained, fertile soils and frequent irrigation to maintain moisture.",
    benefits: "Spinach is rich in iron, calcium, and vitamins A and C. It's a powerful antioxidant and helps in promoting bone health and improving blood circulation.",
    demerits: "Spinach is highly sensitive to temperature and can bolt (flower) quickly when exposed to heat, reducing its quality."
  },
  { 
    id: 19,
    name: "Cabbage", 
    soil: "Loamy", 
    temp: "15-20°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/cabbage.jpg", 
    description: "Cabbage is a cool-season crop that thrives in temperate climates. It is widely cultivated for its dense, leafy heads. Cabbage can be used fresh in salads, cooked in stews, or fermented into sauerkraut.",
    types: [
      { name: "Green Cabbage", benefits: "Commonly used in salads and cooking", demerits: "Requires consistent moisture" },
      { name: "Red Cabbage", benefits: "Rich in antioxidants, used in salads and pickles", demerits: "More sensitive to pests like aphids" }
    ],
    specificNeeds: "Cabbage grows best in cool weather, with temperatures between 15°C and 20°C. It requires fertile, well-drained loamy soil and moderate irrigation.",
    benefits: "Cabbage is rich in vitamins C and K, antioxidants, and fiber. It helps in improving digestive health and supporting the immune system.",
    demerits: "Cabbage is vulnerable to pests like aphids and cabbage worms and can be affected by diseases like black rot."
  },
  { 
    id: 20,
    name: "Cauliflower", 
    soil: "Loamy", 
    temp: "15-20°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "/assets/crops/cauliflower.jpg", 
    description: "Cauliflower is a cool-season vegetable closely related to cabbage. It is grown for its white, edible flower head, which is used in a variety of dishes. Like cabbage, cauliflower requires cool temperatures and well-drained soil.",
    types: [
      { name: "White Cauliflower", benefits: "Common variety, used in many dishes", demerits: "Sensitive to heat, can yellow under stress" },
      { name: "Purple Cauliflower", benefits: "Rich in antioxidants, used in salads", demerits: "Less popular, difficult to grow" }
    ],
    specificNeeds: "Cauliflower requires well-drained loamy soil and grows best in temperatures between 15°C and 20°C. It needs moderate water and is sensitive to heat stress.",
    benefits: "Cauliflower is rich in vitamins C and K, fiber, and antioxidants. It supports immune function and has anti-inflammatory properties.",
    demerits: "Cauliflower is highly sensitive to temperature fluctuations, and excessive heat can cause it to flower prematurely, affecting quality."
  }
];
