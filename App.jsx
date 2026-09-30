
import React, { useState } from 'react';

const mockCooks = [
  {
    id: 1,
    name: "Aarti's Kitchen",
    chef: "Aarti Sharma",
    location: "Salt Lake, Sector V",
    rating: 4.9,
    reviewsCount: 142,
    cuisine: "North Indian & Punjabi",
    type: "Pure Veg",
    fssai: "22823012000451",
    pricePerMeal: 110,
    tags: ["Homely", "Less Oil", "Desi Ghee Phulkas"],
    description: "Authentic North Indian thalis with daily rotating fresh seasonal vegetables and phulkas.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Dal Tadka, Aloo Gobhi, 4 Phulkas, Jeera Rice, Salad", dinner: "Paneer Bhurji, Mix Dal, 4 Tawa Roti, Kheer" },
      Tuesday: { lunch: "Rajma Masala, Steamed Basmati Rice, Boondi Raita, Salad", dinner: "Bhindi Masala, Yellow Moong Dal, 4 Phulkas" },
      Wednesday: { lunch: "Kadhi Pakoda, Methi Aloo, Steamed Rice, Papad", dinner: "Matar Paneer, Chana Dal, 4 Phulkas, Salad" }
    }
  },
  {
    id: 2,
    name: "Maa er Henshel",
    chef: "Basanti Mukherjee",
    location: "New Town, Action Area 1",
    rating: 4.85,
    reviewsCount: 98,
    cuisine: "Bengali Traditional",
    type: "Non-Veg",
    fssai: "22822005001198",
    pricePerMeal: 130,
    tags: ["Authentic Bengali", "Mustard Fish", "Posto"],
    description: "Authentic Bengali home-cooked meals prepared with mustard oil and traditional panch phoron.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhaat, Macher Jhol (Rahu), Shobji Dal, Aloo Bhaja", dinner: "4 Roti, Dim Kosha (Egg Curry), Musur Dal" },
      Tuesday: { lunch: "Bhaat, Doi Katla, Jhinge Aloo Posto, Tok Dal", dinner: "4 Roti, Chanar Dalna, Moong Dal, Chutney" }
    }
  },
  {
    id: 3,
    name: "Swad Kathiyawadi",
    chef: "Bhavna Ben Patel",
    location: "Kankurgachi",
    rating: 4.78,
    reviewsCount: 76,
    cuisine: "Gujarati & Jain",
    type: "Jain Available",
    fssai: "22824009000832",
    pricePerMeal: 95,
    tags: ["No Onion No Garlic", "Mild Spiced", "Soft Rotlis"],
    description: "Everyday Gujarati thalis with soft phulkas, mild dals, and light khichdi.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Sev Tameta Nu Shaak, Gujarati Dal, 5 Rotli, Rice", dinner: "Vaghireli Khichdi, Gujarati Kadhi, Papad" },
      Tuesday: { lunch: "Ringan No Olo, Bajra Rotla, Ghor, Chaas", dinner: "Moong Dal Chilka, 5 Phulka Rotli, Bhindi Sambhariya" }
    }
  },
{
    id: 4,
    name: "Annapurna Rasoi",
    chef: "Sunita Agarwal",
    location: "Ballygunge, Kolkata",
    rating: 4.92,
    reviewsCount: 164,
    cuisine: "Marwari & Rajasthani",
    type: "Pure Veg",
    fssai: "22824011000912",
    pricePerMeal: 120,
    tags: ["Pure Ghee", "Gatta Curry", "Homely Spices"],
    description: "Traditional Marwari home meals prepared in pure cow ghee without excess spice or soda.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Dal Baati Churma, Gatta Curry, Chaas", dinner: "Sev Tamatar, 4 Phulkas, Moong Dal Khichdi" },
      Tuesday: { lunch: "Panchmel Dal, Aloo Shimla Mirch, 4 Phulkas, Jeera Rice", dinner: "Kadhi Pakoda, 4 Methi Poori, Papad" },
      Wednesday: { lunch: "Chana Masala, Kaju Pulao, Boondi Raita, Salad", dinner: "Paneer Butter Masala, 4 Tawa Roti, Gulab Jamun" },
      Thursday: { lunch: "Pithod Ki Sabzi, Arhar Dal, 4 Phulkas, Rice", dinner: "Dal Khichdi, Dahi, Papad, Achar" },
      Friday: { lunch: "Ker Sangri / Rajma, Steamed Rice, 4 Phulkas", dinner: "Palak Paneer, Yellow Dal, 4 Tawa Roti" }
    }
  },
  {
    id: 5,
    name: "Amma's Sambar Pot",
    chef: "Lakshmi Narayanan",
    location: "Jadavpur, Kolkata",
    rating: 4.88,
    reviewsCount: 112,
    cuisine: "South Indian Homestyle",
    type: "Pure Veg",
    fssai: "22823008001742",
    pricePerMeal: 100,
    tags: ["Authentic Filter Coffee", "Drumstick Sambar", "Curd Rice"],
    description: "Authentic Tamilian home lunch and dinner packs with fresh roasted spice sambar, rasam, and light poriyal.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Steamed Ponni Rice, Drumstick Sambar, Beans Poriyal, Rasam, Curd", dinner: "4 Soft Idlis, Medu Vada, Coconut Chutney, Sambar" },
      Tuesday: { lunch: "Lemon Rice, Potato Roast, Tomato Rasam, Papad, Curd", dinner: "3 Homestyle Uttapams with Tomato & Coriander Chutney" },
      Wednesday: { lunch: "Bisibelebath, Boondi Raitha, Papad, Ghee", dinner: "4 Chapathis, Vegetable Kurma, Curd Rice" },
      Thursday: { lunch: "Steamed Rice, Mor Kuzhambu, Cabbage Poriyal, Rasam", dinner: "Ven Pongal, Gothsu, Coconut Chutney" },
      Friday: { lunch: "Steamed Rice, Mysore Rasam, Vazhaikkai Varuval (Raw Banana Fry), Curd", dinner: "4 Poori with Potato Masala, Payasam" }
    }
  },
  {
    id: 6,
    name: "Dada's Tiffin Corner",
    chef: "Subrata Sen",
    location: "Dum Dum, Cantonment",
    rating: 4.72,
    reviewsCount: 84,
    cuisine: "Bengali & Office Lunch",
    type: "Non-Veg",
    fssai: "22825001002340",
    pricePerMeal: 115,
    tags: ["Pocket Friendly", "Egg Curry", "Fish Thali"],
    description: "Budget-friendly daily tiffin subscription tailored specially for college students and working professionals.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Rice, Masoor Dal, Aloo Seddho, Dim Bhuna (Egg)", dinner: "4 Roti, Tadka Dal, Onion Salad" },
      Tuesday: { lunch: "Rice, Macher Jhol, Kumro Chokka, Dal", dinner: "4 Roti, Soyabean Curry, Dal" },
      Wednesday: { lunch: "Rice, Chicken Jhol, Tomato Chutney, Dal", dinner: "4 Roti, Egg Omelette Curry, Salad" },
      Thursday: { lunch: "Rice, Cholar Dal, Bandhakopi, Papad", dinner: "4 Roti, Paneer Masala, Salad" },
      Friday: { lunch: "Rice, Rui Macher Kalia, Musur Dal, Bhaja", dinner: "4 Roti, Egg Bhurji, Dal Tadka" }
    }
  },
  {
    id: 7,
    name: "Satvik Bhojan",
    chef: "Pramila Daga",
    location: "Howrah, Shibpur",
    rating: 4.81,
    reviewsCount: 65,
    cuisine: "Pure Satvik & Jain",
    type: "Jain Available",
    fssai: "22826002008811",
    pricePerMeal: 105,
    tags: ["Strictly Jain", "No Root Vegetables", "Rock Salt"],
    description: "Zero garlic, onion, potato, or root veggies. Cooked cleanly strictly abiding by satvik dietary guidelines.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Lauki Tamatar Curry, Moong Dal, 4 Phulkas, Rice", dinner: "Khichdi with Desi Ghee, Gujarati Kadhi, Papad" },
      Tuesday: { lunch: "Karela Fry (mild), Arhar Dal, 4 Phulkas, Rice", dinner: "Doodhi Halwa, 4 Phulkas, Tuar Dal Fry" },
      Wednesday: { lunch: "Paneer Makhana Curry, 4 Phulkas, Jeera Rice", dinner: "Moong Mogar, 4 Phulkas, Chaas, Salad" },
      Thursday: { lunch: "Kobi (Cabbage) Sambhariya, Chana Dal, 4 Phulkas", dinner: "Tomato Saar, Rice, 4 Phulkas, Papad" },
      Friday: { lunch: "Kaju Curry (Jain Style), Jeera Rice, 4 Phulkas", dinner: "Yellow Dal, 4 Phulkas, Bhindi Masala" }
    }
  },
  {
    id: 8,
    name: "Ruchira's Kitchen",
    chef: "Ruchira Chatterjee",
    location: "Gariahat, South Kolkata",
    rating: 4.95,
    reviewsCount: 189,
    cuisine: "Continental & Healthy Bowls",
    type: "Non-Veg",
    fssai: "22824003009102",
    pricePerMeal: 150,
    tags: ["High Protein", "Salads", "Grilled Chicken"],
    description: "Balanced, portion-controlled meals designed for fitness enthusiasts. High protein, calculated carbs, and zero refined oil.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Herb Grilled Chicken Breast, Brown Rice, Steamed Veggies", dinner: "Grilled Paneer/Chicken Salad with Olive Oil Dressing, Multi-grain Toast" },
      Tuesday: { lunch: "Fish Piccata (Bhetki), Quinoa Pilaf, Sautéed Beans", dinner: "Boiled Egg Salad Bowl with Chickpeas and Lime Vinaigrette" },
      Wednesday: { lunch: "Chicken Stroganoff (light yogurt base), Whole Wheat Pasta", dinner: "Tofu / Chicken Stir Fry with Broccoli and Bell Peppers" },
      Thursday: { lunch: "Lemon Herb Grilled Bhetki, Mashed Potatoes, Green Salad", dinner: "Mixed Lentil Salad with Paneer, Cucumber, and Sprouts" },
      Friday: { lunch: "Roast Chicken Breast, Roasted Sweet Potato, Tossed Greens", dinner: "Clear Chicken Soup, Sautéed Exotic Veggies, Garlic Toast" }
    }
  },
  {
    id: 9,
    name: "Shyam's North Indian Zaika",
    chef: "Shyam Sundar Saini",
    location: "Salt Lake, Sector I",
    rating: 4.82,
    reviewsCount: 114,
    cuisine: "North Indian & Mughlai Homestyle",
    type: "Non-Veg",
    fssai: "22824011002231",
    pricePerMeal: 125,
    tags: ["Tandoori Roti", "Desi Murgh", "Light Spiced"],
    description: "Low-oil North Indian home curries cooked with whole spices, daily warm phulkas, and slow-simmered dals.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Chicken Tariwala, Steamed Basmati Rice, 3 Phulkas, Onion Salad", dinner: "Mix Veg Curry, Tadka Dal, 4 Tawa Roti, Papad" },
      Tuesday: { lunch: "Rajma Masala, Steamed Rice, Cucumber Raita, 2 Tawa Parathas", dinner: "Egg Bhurji Curry, Yellow Moong Dal, 4 Phulkas" },
      Wednesday: { lunch: "Homestyle Mutton Curry, Steamed Rice, Green Salad", dinner: "Aloo Palak, Chana Dal, 4 Phulkas, Pickle" },
      Thursday: { lunch: "Kadhi Pakoda, Methi Aloo, Steamed Rice, Boondi Raita", dinner: "Paneer Bhurji, Arhar Dal, 4 Phulkas" },
      Friday: { lunch: "Chicken Masala, Jeera Rice, 3 Phulkas, Sirka Onion", dinner: "Dal Makhani (low cream), Mix Veg, 4 Phulkas, Kheer" }
    }
  },
  {
    id: 10,
    name: "Nani Ka Rasoi",
    chef: "Pushpa Devi Gupta",
    location: "Burrabazar, Central Kolkata",
    rating: 4.91,
    reviewsCount: 220,
    cuisine: "Traditional Bihari & UP Style",
    type: "Pure Veg",
    fssai: "22822002005432",
    pricePerMeal: 90,
    tags: ["Sattu Dishes", "Mustard Aloo Gobhi", "Desi Ghee"],
    description: "Simple, highly digestible rustic meals cooked by grandmother pushpa featuring sattu parathas, khichdi, and chokha.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bihari Aloo Gobhi Bhujia, Dal Rahar, 4 Ghee Phulkas, Chawal", dinner: "2 Sattu Paratha, Baingan Chokha, Tomato Chutney" },
      Tuesday: { lunch: "Kadhi Bari, Steamed Rice, Aloo Chokha, Papad", dinner: "Parwal Bhujia, Masoor Dal, 4 Phulkas" },
      Wednesday: { lunch: "Chana Dal Tadka, Aloo Shimla Mirch, Steamed Rice, 4 Rotis", dinner: "Dal Khichdi, Desi Ghee, Papad, Chokha" },
      Thursday: { lunch: "Besan Ki Sabzi, Arhar Dal, 4 Phulkas, Jeera Chawal", dinner: "Aloo Palak Saag, 4 Phulkas, Salad" },
      Friday: { lunch: "Lauki Chana Dal, Steamed Rice, 4 Phulkas, Boondi Raita", dinner: "Paneer Masala, 4 Tawa Roti, Sevaiyan Kheer" }
    }
  },
  {
    id: 11,
    name: "Shorshe Baata Tiffin",
    chef: "Tanushree Paul",
    location: "Baranagar, North Kolkata",
    rating: 4.79,
    reviewsCount: 88,
    cuisine: "Ghoti-Bangal Fusion",
    type: "Non-Veg",
    fssai: "22825008003112",
    pricePerMeal: 135,
    tags: ["Shorshe Fish", "Aloo Posto", "Bengali Meals"],
    description: "Everyday authentic North Kolkata Bengali meals with mild shorshe baata, seasonal shak, and light macher jhol.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhaat, Tilapia Macher Jhol, Kolmi Shak Bhaja, Musur Dal", dinner: "4 Roti, Dim Kosha (2 Eggs), Salad" },
      Tuesday: { lunch: "Bhaat, Shorshe Pabda, Cholar Dal Coconut, Beguni", dinner: "4 Roti, Chanar Dalna, Moong Dal" },
      Wednesday: { lunch: "Bhaat, Bhetki Macher Jhal, Lau Ghonto, Tok Dal", dinner: "4 Roti, Desi Murgir Jhol, Cucumber Salad" },
      Thursday: { lunch: "Bhaat, Rui Posto, Moong Dal, Potol Bhaja", dinner: "4 Roti, Soya Chaap Bengali Style, Dal" },
      Friday: { lunch: "Bhaat, Chicken Kosha, Aloo Bhaja, Musur Dal", dinner: "4 Roti, Macher Matha Diye Dal, Begun Pora" }
    }
  },
  {
    id: 12,
    name: "Pawanputra Jain Rasoi",
    chef: "Manju Sethia",
    location: "Bangur Avenue",
    rating: 4.86,
    reviewsCount: 94,
    cuisine: "Strict Jain Satvik",
    type: "Jain Available",
    fssai: "22824005009841",
    pricePerMeal: 100,
    tags: ["No Potato", "Zero Garlic/Onion", "Moong Dal"],
    description: "Strictly prepared under Agam principles with fresh rock salt, boiled spices, and wholesome satvik lentils.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Lauki Moong Dal, 5 Ghee Phulkas, Steamed Rice, Chaas", dinner: "Vaghireli Moong Khichdi, Jain Kadhi, Papad" },
      Tuesday: { lunch: "Gatte Ki Sabzi (Jain), 5 Soft Rotis, Rice, Papad", dinner: "Toor Dal Fry, 5 Phulkas, Bhindi Masala" },
      Wednesday: { lunch: "Paneer Bhurji (No Onion), Arhar Dal, 5 Phulkas, Rice", dinner: "Sev Tameta Nu Shaak (Jain), 5 Rotlis, Chaas" },
      Thursday: { lunch: "Moong Mogar Sukhi, 5 Phulkas, Rice, Khatti Kadhi", dinner: "Doodhi Halwa, 4 Phulkas, Masoor Dal" },
      Friday: { lunch: "Kaju Makhana Curry (Jain), Steamed Rice, 5 Phulkas", dinner: "Kadhi Khichdi, Athana (Jain Pickle), Papad" }
    }
  },
  {
    id: 13,
    name: "Konaseema Kitchen",
    chef: "Padma Venkatachalam",
    location: "Lake Gardens, South Kolkata",
    rating: 4.93,
    reviewsCount: 156,
    cuisine: "Andhra & Rayalaseema Homestyle",
    type: "Pure Veg",
    fssai: "22823004001923",
    pricePerMeal: 110,
    tags: ["Gongura Pachadi", "Pappu", "Tomato Rasam"],
    description: "Authentic Andhra home meals with gun powder, gongura thogayal, mudda pappu, and traditional rasam bowls.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Steamed Sona Masoori Rice, Tomato Pappu, Gongura Pachadi, Ghee, Rasam", dinner: "4 Chapathis, Potato Senagapappu Kura, Curd Rice" },
      Tuesday: { lunch: "Rice, Palakura Pappu (Spinach Dal), Bendakaya Vepudu (Bhindi Fry), Charu", dinner: "Upma, Palli Chutney, Sambar" },
      Wednesday: { lunch: "Rice, Dosakaya Pappu (Cucumber Dal), Aratikaya Vepudu, Majjiga Pulusu", dinner: "4 Phulkas, Mix Veg Kurma, Rasam Sadam" },
      Thursday: { lunch: "Lemon Rice, Potato Roast, Miriyala Charu (Pepper Rasam), Curd", dinner: "Pesarattu (Moong Dal Dosa), Ginger Pachadi" },
      Friday: { lunch: "Rice, Mudda Pappu, Avakaya Pickle, Ghee, Majjiga (Spiced Buttermilk)", dinner: "4 Chapathis, Paneer Tomato Kura, Curd" }
    }
  },
  {
    id: 14,
    name: "The Healthy Pot",
    chef: "Ananya Sengupta",
    location: "Kasba, Ruby Connector",
    rating: 4.88,
    reviewsCount: 130,
    cuisine: "Calorie-Counted Fitness Diet",
    type: "Non-Veg",
    fssai: "22825002008441",
    pricePerMeal: 160,
    tags: ["High Protein", "Brown Rice", "Steam Grilled"],
    description: "Every meal macro-calculated with 30g+ protein, low glycemic carbs, zero palm oil, and fresh tossed salad greens.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "150g Grilled Herb Chicken, Brown Rice Pilaf, Steamed Broccoli & Carrots", dinner: "Boiled Egg White Bowl (4 Eggs), Hummus, Multigrain Flatbread" },
      Tuesday: { lunch: "Pan Seared Bhetki Fish, Quinoa Salad, Lemon Vinaigrette", dinner: "Grilled Tofu / Chicken Skewers, Roasted Zucchini, Clear Soup" },
      Wednesday: { lunch: "Chicken Breast in Rosemary Gravy, Mashed Sweet Potato, Tossed Greens", dinner: "Chickpea & Boiled Egg Protein Salad, Whole Wheat Toast" },
      Thursday: { lunch: "Grilled Cottage Cheese / Chicken Bowl, Millet Pulao, Cucumber Raita", dinner: "Lentil Soup with Shredded Chicken, Sautéed Mushrooms" },
      Friday: { lunch: "Slow Cooked Chicken Breast, Red Rice, Garlic Green Beans", dinner: "Stir Fry Chicken Veggies with Sesame, Light Soy Glaze" }
    }
  },
  {
    id: 15,
    name: "Punjabi Rasoi By Harpreet",
    chef: "Harpreet Kaur",
    location: "Chinar Park, Rajarhat",
    rating: 4.77,
    reviewsCount: 92,
    cuisine: "Authentic Amritsari Punjabi",
    type: "Pure Veg",
    fssai: "22823009001452",
    pricePerMeal: 115,
    tags: ["Desi Ghee", "Rajma Chawal", "Amritsari Dal"],
    description: "Classic Amritsari flavours featuring thick creamy rajma, slow-boiled black dal, and flaky whole wheat parathas.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Amritsari Chole, 2 Kulcha Parathas, Jeera Pulao, Boondi Raita", dinner: "Aloo Matar Tariwala, Yellow Moong Dal, 4 Phulkas" },
      Tuesday: { lunch: "Rajma Masala (Jammu Style), Steamed Basmati Rice, Onion Lacha", dinner: "Bhindi Do Pyaza, Arhar Dal, 4 Phulkas" },
      Wednesday: { lunch: "Dal Makhani (low butter), Jeera Aloo, 4 Phulkas, Rice", dinner: "Shahi Paneer (Homestyle), 4 Tawa Roti, Sirka Onion" },
      Thursday: { lunch: "Kadhi Pakoda, Steamed Rice, Papad, Mint Chutney", dinner: "Baingan Bharta, Panchmel Dal, 4 Phulkas" },
      Friday: { lunch: "Matar Paneer, Steamed Basmati Rice, 3 Phulkas, Kheer", dinner: "Nutri Soya Keema, 4 Phulkas, Onion Salad" }
    }
  },
  {
    id: 16,
    name: "Annapurna Shuddh Bhojanalay",
    chef: "Saroj Baid",
    location: "Alipore, Kolkata",
    rating: 4.94,
    reviewsCount: 175,
    cuisine: "Marwari Satvik",
    type: "Jain Available",
    fssai: "22824003004521",
    pricePerMeal: 130,
    tags: ["Pure Cow Ghee", "No Garlic", "Organic Dal"],
    description: "Clean homestyle Jain thalis prepared using cold-pressed oils, pure cow ghee, and hand-ground spice mixes.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Gatta Curry, Moong Mogar Dal, 4 Ghee Phulkas, Rice, Papad", dinner: "Sev Tamatar (Jain), 4 Phulkas, Chaas, Pickle" },
      Tuesday: { lunch: "Panchmel Dal, Aloo Shimla Mirch (Jain substitute), 4 Phulkas, Rice", dinner: "Vaghireli Khichdi, Gujarati Kadhi, Papad" },
      Wednesday: { lunch: "Paneer Makhana (No Onion), Steamed Rice, 4 Phulkas, Salad", dinner: "Lauki Kofta (Jain), Arhar Dal, 4 Phulkas" },
      Thursday: { lunch: "Chana Dal Fry, Bhindi Fry (Jain), 4 Phulkas, Jeera Chawal", dinner: "Moong Dal Chilka Khichdi, Dahi, Papad" },
      Friday: { lunch: "Dal Baati Churma (2 Baati), Gatta Curry, Chaas", dinner: "Paneer Bhurji (Jain), 4 Tawa Roti, Badam Kheer" }
    }
  },
  {
    id: 17,
    name: "Roshui Ghor",
    chef: "Manju Ganguly",
    location: "Behala Chowrasta",
    rating: 4.81,
    reviewsCount: 103,
    cuisine: "Classic South Kolkata Bengali",
    type: "Non-Veg",
    fssai: "22822007008129",
    pricePerMeal: 120,
    tags: ["Panch Phoron", "Katla Kalia", "Home Dal"],
    description: "Affordable everyday South Kolkata Bengali home tiffins with seasonal greens, lentils, and authentic fish curries.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhaat, Katla Macher Kalia, Musur Dal, Aloo Bhaja", dinner: "4 Roti, Dim Kosha, Salad" },
      Tuesday: { lunch: "Bhaat, Rui Macher Jhol, Bandhakopi Ghonto, Moong Dal", dinner: "4 Roti, Chanar Dalna, Musur Dal" },
      Wednesday: { lunch: "Bhaat, Shorshe Tilapia, Tok Dal, Begun Bhaja", dinner: "4 Roti, Chicken Jhol, Onion Salad" },
      Thursday: { lunch: "Bhaat, Parshey Macher Jhol, Lau Dal, Jhuri Aloo Bhaja", dinner: "4 Roti, Aloo Posto, Moong Dal" },
      Friday: { lunch: "Bhaat, Desi Murgi Curry, Musur Dal, Chutney", dinner: "4 Roti, Paneer Butter Masala, Papad" }
    }
  },
  {
    id: 18,
    name: "Sowcarpet Tiffin Centre",
    chef: "M. Soundararajan",
    location: "Park Circus",
    rating: 4.87,
    reviewsCount: 139,
    cuisine: "Traditional Tamilian",
    type: "Pure Veg",
    fssai: "22825001004901",
    pricePerMeal: 105,
    tags: ["Authentic Sambar", "Kootu", "Pepper Rasam"],
    description: "Tamil Brahmin style vegetarian meals with zero onion/garlic options, homemade podi, and fresh ground rasam.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Steamed Ponni Rice, Murungakkai Sambar, Chow Chow Kootu, Rasam", dinner: "3 Idli, 1 Medu Vada, Coconut Chutney, Sambar" },
      Tuesday: { lunch: "Curd Rice with Pomegranate, Potato Roast, Mor Kuzhambu, Papad", dinner: "3 Homestyle Dosas with Tomato Onion Chutney" },
      Wednesday: { lunch: "Lemon Sevai, Tomato Thokku, Avial, Steamed Rice, Rasam", dinner: "4 Chapathis, Mix Veg Sagu, Curd" },
      Thursday: { lunch: "Steamed Rice, Kathirikai Kara Kuzhambu, Beetroot Poriyal, Rasam", dinner: "Adai (Lentil Pancake) with Avial & Jaggery" },
      Friday: { lunch: "Bisi Bele Bath, Kara Boondi, Appalam, Curd Rice", dinner: "3 Rava Idli, Saagu, Chutney" }
    }
  },
  {
    id: 19,
    name: "Odisha Swad Tiffin",
    chef: "Bikash Mahapatra",
    location: "Kestopur, VIP Road",
    rating: 4.74,
    reviewsCount: 78,
    cuisine: "Odia Homestyle",
    type: "Non-Veg",
    fssai: "22824006001872",
    pricePerMeal: 110,
    tags: ["Dalma", "Badi Chura", "Macha Besara"],
    description: "Authentic Odia cuisine cooked in home kitchens: aromatic Dalma with roasted cumin and light mustard fish curries.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Steamed Rice, Odia Dalma (Veggies & Dal), Badi Chura, Salad", dinner: "4 Roti, Santula (Boiled Veg Medley), Moong Dal" },
      Tuesday: { lunch: "Steamed Rice, Macha Besara (Mustard Fish), Saga Bhaja, Dal", dinner: "4 Roti, Egg Tarkari, Cucumber Salad" },
      Wednesday: { lunch: "Steamed Rice, Mansha Jholo (Mutton Curry Odia Style), Onion", dinner: "4 Roti, Paneer Besara, Dal" },
      Thursday: { lunch: "Steamed Rice, Rohi Macha Jhola, Potola Rasa, Dal", dinner: "4 Roti, Aloo Potala Rasa, Moong Dal" },
      Friday: { lunch: "Steamed Rice, Kukuda Kasa (Chicken Masala), Tomato Khatta, Dal", dinner: "4 Roti, Chhena Tarkari (Cottage Cheese Curry)" }
    }
  },
  {
    id: 20,
    name: "Ghar Ka Dabba By Rekha",
    chef: "Rekha Sharma",
    location: "Tollygunge, Netaji Nagar",
    rating: 4.89,
    reviewsCount: 168,
    cuisine: "Delhi & Punjabi Homestyle",
    type: "Pure Veg",
    fssai: "22823002008712",
    pricePerMeal: 105,
    tags: ["Homely Taste", "Ghee Phulkas", "Dal Makhani"],
    description: "Hearty North Indian meals for office executives and PG students: soft rotis, aromatic pulao, and seasonal gravies.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Rajma Masala, Steamed Rice, 3 Phulkas, Boondi Raita", dinner: "Aloo Gobhi, Yellow Dal Tadka, 4 Phulkas" },
      Tuesday: { lunch: "Chole Masala, Jeera Rice, 2 Tawa Parathas, Pickle", dinner: "Paneer Do Pyaza, Arhar Dal, 4 Phulkas" },
      Wednesday: { lunch: "Dal Makhani (home style), Mix Veg, 4 Phulkas, Rice", dinner: "Lauki Kofta Curry, Moong Dal, 4 Phulkas" },
      Thursday: { lunch: "Kadhi Pakoda, Steamed Rice, Aloo Jeera, Papad", dinner: "Bhindi Masala, Yellow Dal, 4 Phulkas" },
      Friday: { lunch: "Matar Paneer, Steamed Basmati Rice, 3 Phulkas, Kheer", dinner: "Soya Chaap Curry, 4 Tawa Roti, Salad" }
    }
  },
  {
    id: 21,
    name: "Kathiyawadi Thali Express",
    chef: "Hasmukh Bhai",
    location: "Bhowanipore",
    rating: 4.83,
    reviewsCount: 119,
    cuisine: "Kathiyawadi Gujarati",
    type: "Pure Veg",
    fssai: "22825004003290",
    pricePerMeal: 115,
    tags: ["Bajra Rotla", "Ringan Olo", "Garlic Chutney"],
    description: "Robust Saurashtra flavours with clay-baked rotlas, spiced roasted brinjals, and wholesome kathiyawadi dals.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Sev Tameta Nu Shaak, 5 Soft Rotlis, Gujarati Dal, Rice", dinner: "Ringan No Olo, 2 Bajra Rotla, Ghor (Jaggery), Chaas" },
      Tuesday: { lunch: "Bateta Nu Shaak, Gujarati Kadhi, Steamed Rice, 5 Rotlis", dinner: "Vaghireli Khichdi, Kadhi, Papad, Athana" },
      Wednesday: { lunch: "Kaju Gathiya Nu Shaak, 5 Rotlis, Dal, Jeera Rice", dinner: "Moong Dal Khichdi, Chaas, Papad, Lasaniya Chutney" },
      Thursday: { lunch: "Panchmel Dal, 5 Phulkas, Tindora Sambhariya, Rice", dinner: "Dahi Tikhari, 2 Bajra Rotla, Chaas" },
      Friday: { lunch: "Undhiyu (winter) / Chana Masala, 5 Rotlis, Shrikhand", dinner: "Dal Dhokli, Jeera Rice, Chaas, Papad" }
    }
  },
  {
    id: 22,
    name: "Meera's Pure Veg Kitchen",
    chef: "Meera Agarwal",
    location: "Girish Park, Central Kolkata",
    rating: 4.90,
    reviewsCount: 145,
    cuisine: "Marwari Homestyle",
    type: "Jain Available",
    fssai: "22822003001891",
    pricePerMeal: 110,
    tags: ["Jain Friendly", "Desi Ghee", "Fresh Phulkas"],
    description: "Delicious home-style Marwari food with zero artificial colors or restaurant thickening pastes.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Panchmel Dal, 4 Phulkas, Gatta Curry, Steamed Rice", dinner: "Sev Tamatar, 4 Phulkas, Moong Dal Khichdi" },
      Tuesday: { lunch: "Chana Dal Tadka, Aloo Shimla Mirch, 4 Phulkas, Rice", dinner: "Kadhi Pakoda, 4 Methi Parathas, Papad" },
      Wednesday: { lunch: "Shahi Paneer (Jain option), Jeera Rice, 4 Phulkas", dinner: "Bhindi Masala, Arhar Dal, 4 Phulkas" },
      Thursday: { lunch: "Lauki Chana Dal, Steamed Rice, 4 Phulkas, Chaas", dinner: "Dal Baati (2 Baatis), Churma, Gatte Ki Sabzi" },
      Friday: { lunch: "Rajma Masala, Steamed Rice, 4 Phulkas, Boondi Raita", dinner: "Paneer Bhurji, 4 Tawa Roti, Sewai Kheer" }
    }
  },
  {
    id: 23,
    name: "Fisherman's Wharf Tiffin",
    chef: "Sandhya Roy",
    location: "Baguiati, VIP Road",
    rating: 4.86,
    reviewsCount: 110,
    cuisine: "Authentic East Bengal (Bangal)",
    type: "Non-Veg",
    fssai: "22824008006124",
    pricePerMeal: 140,
    tags: ["Ilish / Pabda", "Spicy Macher Jhol", "Mustard Oil"],
    description: "Specialized in fragrant Bangal recipes featuring aromatic freshwater fish curries, shutki (optional), and moong dal.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhaat, Shorshe Pabda Jhal, Musur Dal, Shak Bhaja", dinner: "4 Roti, Dim Kosha, Salad" },
      Tuesday: { lunch: "Bhaat, Katla Macher Kalia, Bhaja Moong Dal, Begun Bhaja", dinner: "4 Roti, Cholar Dal, Aloo Dum" },
      Wednesday: { lunch: "Bhaat, Mourala Macher Tok, Musur Dal, Aloo Bhate", dinner: "4 Roti, Chicken Kasha, Onion Salad" },
      Thursday: { lunch: "Bhaat, Tangra Macher Jhol, Lau Chingri, Dal", dinner: "4 Roti, Dim Bhurji Curry, Salad" },
      Friday: { lunch: "Bhaat, Rohu Kalia, Musur Dal, Amer Chutney", dinner: "4 Roti, Desi Murgi Curry, Papad" }
    }
  },
  {
    id: 24,
    name: "Kerala Home Meal Hub",
    chef: "Laly Mathew",
    location: "Salt Lake, Sector III",
    rating: 4.92,
    reviewsCount: 134,
    cuisine: "Authentic Kerala Syrian & Malabar",
    type: "Non-Veg",
    fssai: "22823004005912",
    pricePerMeal: 145,
    tags: ["Matta Rice", "Kerala Fish Curry", "Thorans"],
    description: "Coconut-infused Kerala home meals: red Matta rice, tart Kudampuli fish curry, Avial, and homemade coconut pudding.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Kerala Matta Rice, Alleppey Fish Curry (Kudampuli), Cabbage Thoran, Moru Curry", dinner: "4 Malabar Parathas, Egg Roast, Salad" },
      Tuesday: { lunch: "Matta Rice, Sambar, Avial, Beetroot Pachadi, Pappadam", dinner: "Appam (3 pcs), Vegetable Stew, Coconut Chutney" },
      Wednesday: { lunch: "Matta Rice, Nadan Chicken Curry, Beans Thoran, Rasam", dinner: "4 Chapathis, Chicken Stew, Salad" },
      Thursday: { lunch: "Matta Rice, Meen Peera (Fish with shredded coconut), Pulissery, Payasam", dinner: "Idiyappam (4 pcs), Egg Curry, Coconut Milk" },
      Friday: { lunch: "Matta Rice, Kerala Beef/Chicken Fry, Parippu Curry, Ghee, Pappadam", dinner: "4 Chapathis, Fish Molee, Salad" }
    }
  },
  {
    id: 25,
    name: "Mother's Touch Tiffin",
    chef: "Bina Paul",
    location: "Jadavpur, Sulekha",
    rating: 4.76,
    reviewsCount: 82,
    cuisine: "Light Bengali Everyday",
    type: "Pure Veg",
    fssai: "22825003001990",
    pricePerMeal: 85,
    tags: ["Student Budget", "Zero Soda", "Light Meals"],
    description: "Designed specifically for university students staying in PGs: simple, low-spice, digestion-friendly daily meals.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhaat, Shobji Dal, Aloo Bhate, Potol Bhaja", dinner: "4 Roti, Chanar Dalna, Salad" },
      Tuesday: { lunch: "Bhaat, Musur Dal, Bandhakopi Torkari, Begun Bhaja", dinner: "4 Roti, Soyabean Aloo Curry, Dal" },
      Wednesday: { lunch: "Bhaat, Moong Dal, Jhinge Aloo Posto, Papad", dinner: "4 Roti, Paneer Dalna, Cucumber Salad" },
      Thursday: { lunch: "Bhaat, Cholar Dal, Kumro Chokka, Beguni", dinner: "4 Roti, Mix Veg Curry, Musur Dal" },
      Friday: { lunch: "Bhaat, Tok Dal, Aloo Dum, Papad, Chutney", dinner: "4 Roti, Dal Tadka, Salad" }
    }
  },
  {
    id: 26,
    name: "Tripti Bhojan",
    chef: "Kavita Tiwari",
    location: "Kankurgachi, Phoolbagan",
    rating: 4.84,
    reviewsCount: 99,
    cuisine: "UP & Banarasi Homestyle",
    type: "Pure Veg",
    fssai: "22824009002281",
    pricePerMeal: 100,
    tags: ["Panchmel Dal", "Hing Jeera Aloo", "Desi Ghee"],
    description: "Flavourful Banarasi vegetarian food cooked with fragrant heeng, mustard greens, homemade pickles, and soft rotis.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Hing Wale Aloo Tamatar, Urad Dal Tadka, 4 Phulkas, Rice", dinner: "Lauki Ki Sabzi, 4 Phulkas, Arhar Dal" },
      Tuesday: { lunch: "Banarasi Dum Aloo, 4 Phulkas, Chana Dal, Steamed Rice", dinner: "Matar Paneer, 4 Tawa Roti, Salad" },
      Wednesday: { lunch: "Kadhi Pakoda, Steamed Rice, Aloo Bhujia, Papad", dinner: "Palak Paneer, Moong Dal, 4 Phulkas" },
      Thursday: { lunch: "Arhar Dal Tadka, Baingan Kalonji, 4 Phulkas, Rice", dinner: "Dal Khichdi, Desi Ghee, Papad, Chokha" },
      Friday: { lunch: "Chole Masala, 2 Bedmi Poori / 4 Phulkas, Rice, Kheer", dinner: "Sev Bhujia Curry, 4 Phulkas, Salad" }
    }
  },
  {
    id: 27,
    name: "Protein & Green Kitchen",
    chef: "Arunav Dasgupta",
    location: "Salt Lake, Sector II",
    rating: 4.93,
    reviewsCount: 161,
    cuisine: "Clean Fitness Bowls",
    type: "Pure Veg",
    fssai: "22826001007812",
    pricePerMeal: 155,
    tags: ["Plant Protein", "Tofu & Paneer", "Cold Pressed"],
    description: "Plant-based high protein tiffins: organic tofu, sprouts, low-fat paneer bowls, and cold-pressed dressing greens.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Tofu Brown Rice Bowl with Sautéed Broccoli, Tahini Dressing", dinner: "Paneer Tikka Salad with Sprouted Moong, Multigrain Flatbread" },
      Tuesday: { lunch: "Millet Khichdi with Edamame, Mixed Seeds, Low Fat Curd", dinner: "Grilled Tofu Steaks, Zucchini Ribbons, Roasted Almond Soup" },
      Wednesday: { lunch: "Rajma & Black Rice Power Bowl, Avocado Dressing, Greens", dinner: "Lentil Pasta in Roasted Tomato Basil Sauce with Tofu" },
      Thursday: { lunch: "Soya Chunk Pulao, Cucumber Raita, Tossed Bell Peppers", dinner: "Warm Quinoa Salad with Roasted Pumpkin & Paneer" },
      Friday: { lunch: "Paneer Bhurji with Flax Seed Roti (3), Steamed Veggies", dinner: "Spiced Chickpea Buddha Bowl with Lemon Herb Yogurt" }
    }
  },
  {
    id: 28,
    name: "Chitpur Mughlai Henshel",
    chef: "Parveen Begum",
    location: "Park Circus, Beckbagan",
    rating: 4.88,
    reviewsCount: 147,
    cuisine: "Kolkata Mughlai Homestyle",
    type: "Non-Veg",
    fssai: "22823001009121",
    pricePerMeal: 140,
    tags: ["Light Biryani", "Murgh Rezala", "Shami Kebab"],
    description: "Family recipes of old Kolkata Mughlai curries prepared with light essence, low dalda, and homemade garam masala.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Homestyle Kolkata Chicken Biryani (1 Aloo, 1 Chicken, 1 Egg), Salad", dinner: "4 Roti, Chicken Chaap (Low Oil), Onion Salad" },
      Tuesday: { lunch: "Steamed Rice, Murgh Rezala (Homestyle), Musur Dal", dinner: "4 Rumali Rotis, Chicken Tikka Kebab (3 pcs), Green Chutney" },
      Wednesday: { lunch: "Mutton Korma, Steamed Basmati Rice, 3 Phulkas", dinner: "4 Roti, Egg Curry, Dal Tadka" },
      Thursday: { lunch: "Jeera Pulao, Chicken Kasha, Sirka Onion, Raita", dinner: "4 Roti, Keema Matar (Chicken), Salad" },
      Friday: { lunch: "Kolkata Mutton Biryani (Special), Burani Raita, Salad", dinner: "4 Roti, Chicken Stew, Garlic Toast" }
    }
  },
  {
    id: 29,
    name: "Sindhi Rasoi",
    chef: "Komal Motwani",
    location: "New Alipore",
    rating: 4.85,
    reviewsCount: 79,
    cuisine: "Authentic Sindhi Homestyle",
    type: "Pure Veg",
    fssai: "22824007003419",
    pricePerMeal: 120,
    tags: ["Sindhi Kadhi", "Dal Pakwan", "Sai Bhaji"],
    description: "Authentic Sindhi food cooked with tamarind, lotus stem (bhee), gram flour kadhi, and nutritious sai bhaji.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Sindhi Kadhi, Steamed Basmati Rice, Aloo Tuk, Sweet Boondi", dinner: "4 Phulkas, Sai Bhaji (Spinach-Lentil medley), Papad" },
      Tuesday: { lunch: "Bhee Aloo (Lotus Stem Curry), Arhar Dal, 4 Phulkas, Rice", dinner: "Seyun Patata (Vermicelli & Spiced Potatoes), 4 Phulkas" },
      Wednesday: { lunch: "Dal Pakwan (2 Pakwans), Chana Dal, Sweet-Sour Chutney", dinner: "Paneer in Green Masala, 4 Phulkas, Rice" },
      Thursday: { lunch: "Koki (2 Spiced Sindhi Rotis), Dahi, Papad, Pickle", dinner: "Yellow Moong Dal, 4 Phulkas, Bhindi Sambhariya" },
      Friday: { lunch: "Taryal Vangan (Fried Brinjal), Toor Dal, 4 Phulkas, Rice", dinner: "Sindhi Biryani (Veg), Boondi Raita, Papad" }
    }
  },
  {
    id: 30,
    name: "Bhojohori Tiffin Express",
    chef: "Soma Bhattacharya",
    location: "Dum Dum Park",
    rating: 4.80,
    reviewsCount: 96,
    cuisine: "Traditional Bengali",
    type: "Non-Veg",
    fssai: "22825007001438",
    pricePerMeal: 125,
    tags: ["Kosha Mangsho", "Chhanar Dalna", "Mustard Fish"],
    description: "Everyday wholesome Bengali meals cooked fresh every morning with handpicked market vegetables and fresh fish.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhaat, Rui Macher Jhol, Musur Dal, Aloo Posto", dinner: "4 Roti, Dim Kosha, Salad" },
      Tuesday: { lunch: "Bhaat, Katla Macher Kalia, Lau Shobji Dal, Bhaja", dinner: "4 Roti, Chhanar Dalna, Moong Dal" },
      Wednesday: { lunch: "Bhaat, Chicken Curry, Musur Dal, Tomato Khejur Chutney", dinner: "4 Roti, Paneer Butter Masala, Salad" },
      Thursday: { lunch: "Bhaat, Shorshe Bhetki / Tilapia, Tok Dal, Begun Bhaja", dinner: "4 Roti, Egg Curry, Salad" },
      Friday: { lunch: "Bhaat, Kosha Murgi (Sunday special style), Dal, Papad", dinner: "4 Roti, Echorer Dalna, Chutney" }
    }
  },
  {
    id: 31,
    name: "Jain Rasoda By Harshita",
    chef: "Harshita Chordiya",
    location: "Lake Town, Block B",
    rating: 4.89,
    reviewsCount: 115,
    cuisine: "Strict Jain Marwari",
    type: "Jain Available",
    fssai: "22824003006712",
    pricePerMeal: 105,
    tags: ["Strictly Jain", "Ghee Phulkas", "No Root Veggies"],
    description: "Prepared under strictly monitored Jain conditions: filtered water, sundried spices, and no underground vegetables.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Lauki Chana Dal, 5 Ghee Phulkas, Steamed Rice, Chaas", dinner: "Moong Mogar Khichdi, Jain Kadhi, Papad" },
      Tuesday: { lunch: "Gatte Ki Sabzi, 5 Phulkas, Steamed Rice, Boondi Raita (Jain)", dinner: "Sev Tamatar (Jain), 5 Soft Rotis, Chaas" },
      Wednesday: { lunch: "Paneer Tomato Gravy (Jain), 5 Phulkas, Jeera Rice", dinner: "Toor Dal, 5 Phulkas, Kobi Nu Shaak" },
      Thursday: { lunch: "Panchmel Dal, Tindora Sambhariya, 5 Phulkas, Rice", dinner: "Kadhi Khichdi, Papad, Athana" },
      Friday: { lunch: "Kaju Curry (Jain), Steamed Rice, 5 Phulkas, Sweet", dinner: "Doodhi Halwa, 4 Phulkas, Masoor Dal" }
    }
  },
  {
    id: 32,
    name: "Udupi Sri Krishna Tiffin",
    chef: "Nagaraj Rao",
    location: "Garia, Mahamayatala",
    rating: 4.91,
    reviewsCount: 140,
    cuisine: "Karnataka Udupi Style",
    type: "Pure Veg",
    fssai: "22823005008234",
    pricePerMeal: 95,
    tags: ["Bisi Bele Bath", "Udupi Sambar", "Coconut Chutney"],
    description: "Famous Udupi temple style meals: spiced jaggery sambar, steamed idlis, fresh rasam, and traditional coconut gravies.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Rice, Udupi Sambar, Cabbage Poriyal, Saaru (Rasam), Curd", dinner: "4 Thatte Idlis, Coconut Chutney, Sambar" },
      Tuesday: { lunch: "Bisi Bele Bath with Boondi, Potato Roast, Curd Rice", dinner: "Set Dosa (3 pcs), Vegetable Sagu, Chutney" },
      Wednesday: { lunch: "Rice, Majjige Huli (Ash Gourd Buttermilk Stew), Beans Palya, Rasam", dinner: "Akki Roti (2 pcs), Badanekayi Yennegai (Brinjal Curry)" },
      Thursday: { lunch: "Vangi Bath (Brinjal Rice), Mosaru Bajji (Raita), Papad, Curd", dinner: "Neer Dosa (4 pcs), Coconut Jaggery Mix, Tomato Chutney" },
      Friday: { lunch: "Rice, Mysore Rasam, Avial, Appalam, Semiya Payasam", dinner: "4 Chapathis, Mix Veg Kurma, Curd Rice" }
    }
  },
  {
    id: 33,
    name: "Kolkata Corporate Dabba",
    chef: "Debasis Kundu",
    location: "New Town, Action Area 2",
    rating: 4.75,
    reviewsCount: 104,
    cuisine: "Multi-Cuisine Working Lunch",
    type: "Non-Veg",
    fssai: "22826004001928",
    pricePerMeal: 120,
    tags: ["Corporate Pack", "Prompt Delivery", "Less Oil"],
    description: "Designed for IT corridor employees in New Town and Sector V with leakproof sealed packaging and quick delivery.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Rice, Chicken Curry, Dal Tadka, 2 Tawa Rotis, Salad", dinner: "4 Roti, Egg Bhurji Curry, Dal" },
      Tuesday: { lunch: "Rice, Fish Kalia, Shobji Dal, 2 Rotis, Bhaja", dinner: "4 Roti, Paneer Butter Masala, Salad" },
      Wednesday: { lunch: "Jeera Rice, Rajma Masala, 3 Phulkas, Boondi Raita", dinner: "4 Roti, Chicken Kasha, Onion Salad" },
      Thursday: { lunch: "Rice, Egg Curry, Cholar Dal, 2 Rotis, Salad", dinner: "4 Roti, Dal Makhani, Mix Veg" },
      Friday: { lunch: "Fried Rice (mild), Chilli Chicken (homestyle, dry), Salad", dinner: "4 Roti, Tadka Dal with Egg, Onion" }
    }
  },
  {
    id: 34,
    name: "Chatori Dadi's Kitchen",
    chef: "Urmila Jha",
    location: "Salt Lake, Sector IV",
    rating: 4.87,
    reviewsCount: 128,
    cuisine: "Mithila & North Bihar",
    type: "Pure Veg",
    fssai: "22822008003189",
    pricePerMeal: 95,
    tags: ["Mithila Style", "Ol Ki Sabzi", "Sattu Paratha"],
    description: "Ancient Mithila traditional recipes cooked by 68-year-old grandmother Urmila using hand-pounded spices and ghee.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Bhat, Rahar Dal, Aloo Chokha, Tilkor Tarua (Fritters)", dinner: "2 Sattu Paratha, Baingan Chokha, Curd" },
      Tuesday: { lunch: "Bhat, Kadhi Bari, Aloo Bhujia, Papad", dinner: "4 Phulkas, Parwal Ki Bhujia, Dal" },
      Wednesday: { lunch: "Bhat, Ol (Yam) Ki Sabzi, Moong Dal, Chutney", dinner: "4 Phulkas, Paneer Makhana, Salad" },
      Thursday: { lunch: "Khichdi (Desi Ghee), Chokha, Papad, Achar, Dahi", dinner: "4 Phulkas, Lauki Chana Dal, Salad" },
      Friday: { lunch: "Bhat, Chana Dal Tadka, Aloo Gobhi Matar, Raita", dinner: "4 Phulkas, Palak Saag, Dal" }
    }
  },
  {
    id: 35,
    name: "Chettinad Curry House",
    chef: "Meenakshi Alagappan",
    location: "Lansdowne, South Kolkata",
    rating: 4.90,
    reviewsCount: 152,
    cuisine: "Chettinad & Madurai Homestyle",
    type: "Non-Veg",
    fssai: "22824005004112",
    pricePerMeal: 150,
    tags: ["Pepper Chicken", "Chettinad Spices", "Kozhambu"],
    description: "Hand-roasted stone ground Chettinad spices, kalpasi flowers, pepper chicken curries, and aromatic rasams.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Steamed Rice, Chettinad Chicken Kozhambu, Cabbage Kootu, Pepper Rasam", dinner: "3 Veechu Parathas, Egg Salna, Onion Raita" },
      Tuesday: { lunch: "Steamed Rice, Meen Kozhambu (Fish in tamarind shallot gravy), Beans Poriyal", dinner: "3 Idlis, 1 Medu Vada, Chettinad Sambar, Tomato Kara Chutney" },
      Wednesday: { lunch: "Steamed Rice, Chettinad Mutton Sukka, Paruppu, Ghee, Rasam", dinner: "4 Chapathis, Chicken Chukka, Salad" },
      Thursday: { lunch: "Kuska (Biryani Rice), Pepper Chicken Gravy, Onion Pachadi, Boiled Egg", dinner: "3 Dosa, Chettinad Egg Curry, Chutney" },
      Friday: { lunch: "Steamed Rice, Nethili Meen Varuval (Fish Fry), Mor Kuzhambu, Rasam", dinner: "4 Chapathis, Chettinad Paneer Masala, Salad" }
    }
  },
  {
    id: 36,
    name: "Ahare Bahar Tiffin",
    chef: "Pallabi Mukherjee",
    location: "Santoshpur, Jadavpur",
    rating: 4.82,
    reviewsCount: 110,
    cuisine: "Traditional Zamindari Bengali",
    type: "Non-Veg",
    fssai: "22823006009845",
    pricePerMeal: 135,
    tags: ["Doi Katla", "Ilish Bhapa", "Posto"],
    description: "Centuries-old Kolkata Zamindari heritage recipes: gentle sweet-spiced curries cooked in brass utensils.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Gobindobhog Rice, Doi Katla, Shukto, Biulir Dal", dinner: "4 Roti, Dim Kosha, Onion Salad" },
      Tuesday: { lunch: "Bhaat, Bhetki Paturi, Musur Dal, Aloo Bhaja", dinner: "4 Roti, Chanar Dalna, Moong Dal" },
      Wednesday: { lunch: "Bhaat, Chingri Malai Curry, Moong Dal, Beguni", dinner: "4 Roti, Desi Murgir Jhol, Salad" },
      Thursday: { lunch: "Bhaat, Rui Posto, Cholar Dal, Jhuri Aloo Bhaja", dinner: "4 Roti, Echorer Dalna, Papad" },
      Friday: { lunch: "Bhaat, Kasha Mangsho (Chicken), Dal, Chutney, Papad", dinner: "4 Roti, Paneer Dalna, Salad" }
    }
  },
  {
    id: 37,
    name: "Pali Hill Bombay Dabba",
    chef: "Siddhesh Kadam",
    location: "Rajarhat, City Centre 2",
    rating: 4.83,
    reviewsCount: 97,
    cuisine: "Maharashtrian Homestyle",
    type: "Pure Veg",
    fssai: "22825002005619",
    pricePerMeal: 110,
    tags: ["Pithla Bhakri", "Varan Bhaat", "Kanda Poha"],
    description: "Homestyle Maharashtrian comfort meals with goda masala, authentic varan bhaat with pure ghee, and zunka pithla.",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Varan Bhaat (Toor Dal & Rice) with pure Sajuk Tup (Ghee), Batata Sukhi Bhaji, 3 Chapati", dinner: "Pithla, 2 Jowar Bhakri, Thecha, Onion" },
      Tuesday: { lunch: "Matki Usal (Sprouted Moth Beans), 4 Chapati, Steamed Rice, Amti Dal", dinner: "Shev Bhaji, 4 Phulkas, Koshimbir (Salad)" },
      Wednesday: { lunch: "Katachi Amti, Chana Dal Pulao, 3 Chapati, Batata Rassa", dinner: "Moong Dal Khichdi, Kadhi, Papad, Pickle" },
      Thursday: { lunch: "Bharli Vangi (Stuffed Brinjal), 4 Chapati, Varan Bhaat, Papad", dinner: "Aloo Palak, 4 Phulkas, Toor Dal" },
      Friday: { lunch: "Puri Bhaji (4 Puris), Shrikhand, Varan Rice", dinner: "Paneer Kolhapuri (mild), 4 Chapati, Salad" }
    }
  },
  {
    id: 38,
    name: "Green Apple Diet Tiffin",
    chef: "Pooja Chhabra",
    location: "Salt Lake, Sector V (College More)",
    rating: 4.96,
    reviewsCount: 204,
    cuisine: "Gluten-Free & Keto Nutrition",
    type: "Pure Veg",
    fssai: "22824001007890",
    pricePerMeal: 165,
    tags: ["Gluten Free", "Keto Friendly", "Almond Flour"],
    description: "Specialized clinical dietary meals: gluten-free grains, low GI carbs, keto salads, and diabetic-safe menus.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60",
    menuWeekly: {
      Monday: { lunch: "Cauliflower Rice Bowl with Grilled Cottage Cheese, Sautéed Asparagus & Walnuts", dinner: "Zucchini Noodles (Zoodles) in Pesto, Cherry Tomatoes, Pine Nuts" },
      Tuesday: { lunch: "Almond Flour Rotis (3), Spinach Paneer Bhurji, Cucumber Flaxseed Raita", dinner: "Avocado & Sprouted Moong Salad with Lemon Dressing, Clear Soup" },
      Wednesday: { lunch: "Quinoa Veggie Pilaf, Low GI Sprouted Lentil Curry, Steamed Beans", dinner: "Roasted Pumpkin Soup, Sautéed Tofu & Mushroom Skewers" },
      Thursday: { lunch: "Buckwheat (Kuttu) Khichdi, Roasted Peanut Raita, Green Salad", dinner: "Stir Fried Exotic Veggies with Edamame & Roasted Sesame" },
      Friday: { lunch: "Millet Rotis (3), Yellow Moong Dal (low salt), Steamed Broccoli", dinner: "Keto Paneer Tikka, Green Bell Peppers, Mint Yogurt Dip" }
    }
  },
]


export default function App() {
  const [currentRole, setCurrentRole] = useState('customer');
  const [selectedCook, setSelectedCook] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('explore');
  const [notification, setNotification] = useState(null);

  const [selectedDuration, setSelectedDuration] = useState('monthly');
  const [selectedMealType, setSelectedMealType] = useState('both');

  const [subscriptions, setSubscriptions] = useState([
    {
      id: "SUB-8091",
      cookName: "Aarti's Kitchen",
      plan: "Monthly Plan",
      mealType: "LUNCH & DINNER",
      diet: "Pure Veg",
      status: "Active",
      nextDelivery: "Today, 1:15 PM (Lunch)",
      skippedDays: 1,
      totalAmount: 5500
    }
  ]);

  const [cookRequests, setCookRequests] = useState([
    { id: 101, customer: "Rahul Sen", locality: "Sector V", plan: "Monthly Lunch", start: "Tomorrow", amount: "₹2,800" },
    { id: 102, customer: "Pooja Roy", locality: "Salt Lake Block CF", plan: "Weekly Both", start: "Oct 2", amount: "₹1,540" }
  ]);

  const triggerToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSkipMeal = (id) => {
    setSubscriptions(prev => prev.map(s => s.id === id ? { ...s, skippedDays: s.skippedDays + 1 } : s));
    triggerToast("Today's meal paused! Wallet credited with ₹110.");
  };

  const calculatePrice = (cook) => {
    if (!cook) return 0;
    const mealsPerDay = selectedMealType === 'both' ? 2 : 1;
    const days = selectedDuration === 'daily' ? 1 : selectedDuration === 'weekly' ? 7 : 28;
    const discount = selectedDuration === 'monthly' ? 0.9 : selectedDuration === 'weekly' ? 0.95 : 1;
    return Math.round(cook.pricePerMeal * mealsPerDay * days * discount);
  };

  const filteredCooks = mockCooks.filter(cook => {
    const matchesFilter = selectedFilter === 'All' || cook.type.includes(selectedFilter);
    const matchesSearch = cook.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cook.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cook.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafaf9', color: '#1c1917', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Toast */}
      {notification && (
        <div style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 100, backgroundColor: '#1c1917', color: '#fff', padding: '12px 20px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          ✓ {notification}
        </div>
      )}

      {/* Navbar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, backgroundColor: '#ffffff', borderBottom: '1px solid #e7e5e4', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => { setCurrentRole('customer'); setActiveTab('explore'); }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#d97706', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            🍲
          </div>
          <span style={{ fontSize: '20px', fontWeight: '800' }}>Home<span style={{ color: '#d97706' }}>Feast</span></span>
          <span style={{ marginLeft: '6px', fontSize: '11px', backgroundColor: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: '999px', fontWeight: '600' }}>Tiffin Service</span>
        </div>

        {/* Role Switcher */}
        <div style={{ display: 'flex', backgroundColor: '#f5f5f4', padding: '4px', borderRadius: '10px', gap: '4px' }}>
          {[
            { id: 'customer', label: 'Customer' },
            { id: 'provider', label: 'Kitchen Hub' },
            { id: 'admin', label: 'Admin HQ' }
          ].map(role => (
            <button
              key={role.id}
              onClick={() => setCurrentRole(role.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currentRole === role.id ? '#ffffff' : 'transparent',
                color: currentRole === role.id ? '#1c1917' : '#78716c',
                boxShadow: currentRole === role.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {role.label}
            </button>
          ))}
        </div>
      </header>

      {/* CUSTOMER PORTAL */}
      {currentRole === 'customer' && (
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '28px 16px' }}>
          <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #e7e5e4', marginBottom: '24px' }}>
            <button 
              onClick={() => setActiveTab('explore')}
              style={{ paddingBottom: '12px', background: 'none', border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer', color: activeTab === 'explore' ? '#d97706' : '#78716c', borderBottom: activeTab === 'explore' ? '2px solid #d97706' : 'none' }}
            >
              Explore Tiffin Kitchens
            </button>
            <button 
              onClick={() => setActiveTab('subscriptions')}
              style={{ paddingBottom: '12px', background: 'none', border: 'none', fontWeight: '600', fontSize: '14px', cursor: 'pointer', color: activeTab === 'subscriptions' ? '#d97706' : '#78716c', borderBottom: activeTab === 'subscriptions' ? '2px solid #d97706' : 'none' }}
            >
              My Subscriptions ({subscriptions.length})
            </button>
          </div>

          {activeTab === 'explore' && (
            <>
              {/* Banner */}
              <div style={{ background: 'linear-gradient(135deg, #d97706 0%, #ea580c 100%)', borderRadius: '24px', padding: '36px', color: '#fff', marginBottom: '28px' }}>
                <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>
                  Authentic Homemade Food
                </span>
                <h1 style={{ fontSize: '28px', fontWeight: '900', margin: '12px 0 8px 0' }}>
                  Wholesome daily home-cooked meals delivered to your door.
                </h1>
                <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>
                  Say goodbye to restaurant oil. Subscribe to verified mother-led kitchens across your city.
                </p>
              </div>

              {/* Search & Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                <input
                  type="text"
                  placeholder="🔍 Search dishes, cuisine, or locality (e.g. Salt Lake, Bengali, Jain)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ flex: 1, minWidth: '240px', padding: '10px 14px', borderRadius: '12px', border: '1px solid #d6d3d1', fontSize: '14px' }}
                />
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['All', 'Pure Veg', 'Non-Veg', 'Jain Available'].map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedFilter(type)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        border: selectedFilter === type ? '1px solid #d97706' : '1px solid #e7e5e4',
                        backgroundColor: selectedFilter === type ? '#d97706' : '#ffffff',
                        color: selectedFilter === type ? '#ffffff' : '#44403c'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kitchen Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '20px' }}>
                {filteredCooks.map((cook) => (
                  <div key={cook.id} style={{ backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #e7e5e4', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', height: '170px' }}>
                      <img src={cook.image} alt={cook.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(255,255,255,0.95)', padding: '4px 8px', borderRadius: '16px', fontSize: '11px', fontWeight: '700' }}>
                        ⭐ {cook.rating} ({cook.reviewsCount})
                      </div>
                      <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#059669', color: '#fff', padding: '3px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: '700' }}>
                        FSSAI Verified
                      </div>
                    </div>

                    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700' }}>{cook.name}</h3>
                          <span style={{ fontSize: '11px', fontWeight: '600', color: '#b45309', backgroundColor: '#fef3c7', padding: '2px 6px', borderRadius: '6px' }}>{cook.type}</span>
                        </div>
                        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#78716c' }}>
                          👩‍🍳 By {cook.chef} • 📍 {cook.location}
                        </p>
                        <p style={{ fontSize: '12px', color: '#57534e', margin: '0 0 12px 0' }}>{cook.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                          {cook.tags.map((t, i) => (
                            <span key={i} style={{ fontSize: '10px', backgroundColor: '#f5f5f4', padding: '2px 6px', borderRadius: '4px', color: '#57534e' }}>{t}</span>
                          ))}
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f5f4', paddingTop: '12px' }}>
                        <div>
                          <span style={{ fontSize: '10px', color: '#a8a29e', textTransform: 'uppercase', display: 'block' }}>Starting</span>
                          <span style={{ fontSize: '16px', fontWeight: '800' }}>₹{cook.pricePerMeal}</span>
                          <span style={{ fontSize: '11px', color: '#78716c' }}> / meal</span>
                        </div>
                        <button
                          onClick={() => setSelectedCook(cook)}
                          style={{ backgroundColor: '#d97706', color: '#ffffff', border: 'none', padding: '8px 14px', borderRadius: '10px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
                        >
                          View Menu & Subscribe →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'subscriptions' && (
            <div style={{ maxWidth: '650px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {subscriptions.map(sub => (
                <div key={sub.id} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e7e5e4' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700' }}>{sub.cookName}</h3>
                      <p style={{ margin: 0, fontSize: '12px', color: '#78716c' }}>{sub.plan} • {sub.mealType} • {sub.diet}</p>
                    </div>
                    <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>{sub.status}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f5f4', paddingTop: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#57534e' }}>
                      Next Meal: <strong style={{ color: '#d97706' }}>{sub.nextDelivery}</strong>
                    </div>
                    <button
                      onClick={() => handleSkipMeal(sub.id)}
                      style={{ backgroundColor: '#fff1f2', color: '#e11d48', border: '1px solid #fecdd3', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}
                    >
                      Skip Today's Meal (Credit Wallet)
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {/* KITCHEN PROVIDER DASHBOARD */}
      {currentRole === 'provider' && (
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '28px 16px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', border: '1px solid #e7e5e4', marginBottom: '24px' }}>
            <h2 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '800' }}>Aarti's Kitchen – Provider Hub</h2>
            <p style={{ margin: 0, fontSize: '12px', color: '#78716c' }}>Salt Lake, Sector V • FSSAI #22823012000451</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginTop: '16px' }}>
              <div style={{ backgroundColor: '#f5f5f4', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '11px', color: '#78716c' }}>Today's Lunch Thalis</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '20px', fontWeight: '800' }}>28</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f4', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '11px', color: '#78716c' }}>Phulkas to Make</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '20px', fontWeight: '800', color: '#d97706' }}>112</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f4', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '11px', color: '#78716c' }}>Active Subscribers</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '20px', fontWeight: '800' }}>34</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f4', padding: '12px', borderRadius: '12px' }}>
                <span style={{ fontSize: '11px', color: '#78716c' }}>September Payout</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '20px', fontWeight: '800', color: '#059669' }}>₹42,800</p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '24px', border: '1px solid #e7e5e4' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '15px', fontWeight: '700' }}>Pending Subscription Requests</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cookRequests.map(req => (
                <div key={req.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f5f5f4', padding: '12px 16px', borderRadius: '12px' }}>
                  <div>
                    <strong style={{ fontSize: '13px' }}>{req.customer} ({req.locality})</strong>
                    <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#78716c' }}>{req.plan} • Starts: {req.start} • {req.amount}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => {
                        setCookRequests(prev => prev.filter(r => r.id !== req.id));
                        triggerToast(`Subscription approved for ${req.customer}!`);
                      }}
                      style={{ backgroundColor: '#059669', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}
                    >
                      Accept
                    </button>
                    <button 
                      onClick={() => setCookRequests(prev => prev.filter(r => r.id !== req.id))}
                      style={{ backgroundColor: '#e7e5e4', color: '#44403c', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ADMIN CONTROL CENTER */}
      {currentRole === 'admin' && (
        <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '28px 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e7e5e4' }}>
              <span style={{ fontSize: '11px', color: '#78716c', textTransform: 'uppercase', fontWeight: '600' }}>Platform Monthly GMV</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '24px', fontWeight: '800' }}>₹4,82,400</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e7e5e4' }}>
              <span style={{ fontSize: '11px', color: '#78716c', textTransform: 'uppercase', fontWeight: '600' }}>Verified Kitchens</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '24px', fontWeight: '800', color: '#d97706' }}>48</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '16px', border: '1px solid #e7e5e4' }}>
              <span style={{ fontSize: '11px', color: '#78716c', textTransform: 'uppercase', fontWeight: '600' }}>Subscriber Retention</span>
              <p style={{ margin: '8px 0 0 0', fontSize: '24px', fontWeight: '800', color: '#059669' }}>87.4%</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '20px', border: '1px solid #e7e5e4' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', fontWeight: '700' }}>Kitchen FSSAI Audit Queue</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '12px 16px', borderRadius: '12px' }}>
              <div>
                <strong style={{ fontSize: '13px' }}>Radha's Rasoi (Howrah)</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#78716c' }}>FSSAI #22826001009941 • Audit Status: Passed</p>
              </div>
              <button 
                onClick={() => triggerToast("Cook verified and launched live!")}
                style={{ backgroundColor: '#1c1917', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}
              >
                Approve & Launch
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Detail / Subscription Modal */}
      {selectedCook && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 50 }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', maxWidth: '550px', width: '100%', maxHeight: '85vh', overflowY: 'auto', padding: '24px', position: 'relative' }}>
            <button 
              onClick={() => setSelectedCook(null)} 
              style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', backgroundColor: '#f5f5f4', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer' }}
            >
              ✕
            </button>

            <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: '800' }}>{selectedCook.name}</h2>
            <p style={{ margin: 0, fontSize: '12px', color: '#78716c' }}>{selectedCook.cuisine} • FSSAI #{selectedCook.fssai}</p>

            <div style={{ margin: '20px 0', borderTop: '1px solid #f5f5f4', paddingTop: '16px' }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '13px', fontWeight: '700' }}>
                📅 Rotating Weekly Menu Schedule
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {Object.entries(selectedCook.menuWeekly).map(([day, meals]) => (
                  <div key={day} style={{ backgroundColor: '#f5f5f4', padding: '12px', borderRadius: '12px', fontSize: '12px' }}>
                    <strong style={{ color: '#b45309', display: 'block', marginBottom: '2px' }}>{day}</strong>
                    <div><strong>Lunch:</strong> {meals.lunch}</div>
                    <div style={{ marginTop: '2px' }}><strong>Dinner:</strong> {meals.dinner}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Choose Plan */}
            <div style={{ margin: '20px 0', borderTop: '1px solid #f5f5f4', paddingTop: '16px' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: '700' }}>Select Subscription Plan</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
                {[
                  { id: 'daily', label: '1 Day Trial', disc: '' },
                  { id: 'weekly', label: '7 Days', disc: '5% OFF' },
                  { id: 'monthly', label: '28 Days', disc: '10% OFF' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedDuration(p.id)}
                    style={{
                      padding: '10px 4px',
                      borderRadius: '12px',
                      border: selectedDuration === p.id ? '2px solid #d97706' : '1px solid #e7e5e4',
                      backgroundColor: selectedDuration === p.id ? '#fef3c7' : '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: '700', color: selectedDuration === p.id ? '#92400e' : '#44403c' }}>{p.label}</div>
                    {p.disc && <div style={{ fontSize: '10px', color: '#059669', fontWeight: '600' }}>{p.disc}</div>}
                  </button>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { id: 'lunch', label: 'Lunch Only' },
                  { id: 'dinner', label: 'Dinner Only' },
                  { id: 'both', label: 'Both Meals' }
                ].map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMealType(m.id)}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '10px',
                      border: selectedMealType === m.id ? '1px solid #1c1917' : '1px solid #e7e5e4',
                      backgroundColor: selectedMealType === m.id ? '#1c1917' : '#fff',
                      color: selectedMealType === m.id ? '#fff' : '#44403c',
                      fontSize: '11px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f5f4', paddingTop: '16px' }}>
              <div>
                <span style={{ fontSize: '10px', color: '#a8a29e', display: 'block' }}>Calculated Total</span>
                <span style={{ fontSize: '18px', fontWeight: '800' }}>₹{calculatePrice(selectedCook)}</span>
              </div>
              <button 
                onClick={() => {
                  setSubscriptions(prev => [
                    ...prev,
                    {
                      id: `SUB-${Math.floor(1000 + Math.random() * 9000)}`,
                      cookName: selectedCook.name,
                      plan: `${selectedDuration.toUpperCase()} Plan`,
                      mealType: selectedMealType.toUpperCase(),
                      diet: selectedCook.type,
                      status: "Active",
                      nextDelivery: "Tomorrow, 1:00 PM (Lunch)",
                      skippedDays: 0,
                      totalAmount: calculatePrice(selectedCook)
                    }
                  ]);
                  setSelectedCook(null);
                  setActiveTab('subscriptions');
                  triggerToast(`Subscribed successfully to ${selectedCook.name}!`);
                }}
                style={{ backgroundColor: '#d97706', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
              >
                Confirm Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}