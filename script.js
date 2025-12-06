const recipes = [
    // --- EAST INDIA RECIPES ---
    {
        id: 1,
        title: "Assam Mix",
        category: "East India",
        description: "A nutritious complementary food mix for infants and children.",
        image: "https://images.unsplash.com/photo-1590051661643-4f18b3d64c1b?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Rice", "Green Gram Dal", "Gingelly Seed", "Groundnut", "Sucrose"],
        method: "1. Clean and wash rice and dals separately.<br>2. Roast all ingredients separately until golden.<br>3. Grind them into a fine powder.<br>4. Mix with sucrose and store in an airtight container.",
        nutrition: "Energy: 366 Kcal | Protein: 15g | Calcium: 369mg"
    },
    {
        id: 2,
        title: "Tishee (Linseed) Ladoos",
        category: "East India",
        description: "Energy-rich sweet balls ideal for winter.",
        image: "https://images.unsplash.com/photo-1605335803328-3e4210d481f1?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Linseed (100g)", "Ragi Flour (100g)", "Gum (Gond) (20g)", "Sesame Seeds (10g)", "Jaggery (120g)", "Ghee (30g)"],
        method: "1. Roast ragi flour, linseed, gond, and sesame seeds separately.<br>2. Grind them into a coarse powder.<br>3. Prepare jaggery syrup.<br>4. Mix all ingredients with the syrup.<br>5. Shape into small round ladoos using ghee.",
        nutrition: "Energy: 550 Kcal | Protein: 5g | Iron: 1mg"
    },
    {
        id: 3,
        title: "Multigrain Roti Mix",
        category: "East India",
        description: "A healthy flour mix for making nutritious Indian flatbreads.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Wheat Flour", "Soya Flour", "Chickpea Flour", "Barley Flour"],
        method: "1. Mix all flours in specific proportions.<br>2. Knead into a soft dough with water.<br>3. Roll out into flat circles and cook on a hot griddle.",
        nutrition: "High Fiber | Protein Rich"
    },
    { id: 4, title: "Thekua", category: "East India", description: "Traditional sweet snack from Bihar.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", ingredients: ["Wheat flour", "Jaggery", "Ghee", "Coconut"], method: "Deep fry the dough shapes.", nutrition: "Energy Dense" },
    { id: 5, title: "Jackfruit Leather", category: "East India", description: "Preserved sun-dried layers of ripe jackfruit pulp.", image: "https://images.unsplash.com/photo-1597393353415-b34013788919?auto=format&fit=crop&w=600&q=80", ingredients: ["Ripe Jackfruit pulp", "Sugar/Jaggery", "Ghee"], method: "Spread pulp on greased plates and sun dry.", nutrition: "High Energy" },
    { id: 6, title: "Gluten Free Biscuit", category: "East India", description: "Biscuits suitable for those with gluten intolerance.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80", ingredients: ["Rice flour", "Amaranth flour", "Butter", "Sugar"], method: "Cream butter and sugar, add flour, bake at 180°C.", nutrition: "Gluten Free" },
    { id: 7, title: "Weaning Mix", category: "East India", description: "Nutritious mix for babies starting solids.", image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80", ingredients: ["Cereals", "Pulses", "Nuts"], method: "Roast and powder ingredients.", nutrition: "Balanced Diet" },
    { id: 8, title: "Jalpan Mix", category: "East India", description: "Instant breakfast mix.", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80", ingredients: ["Beaten Rice", "Gram", "Peanuts"], method: "Mix with hot water or milk.", nutrition: "Instant Energy" },
    { id: 9, title: "Mathri", category: "East India", description: "Crispy savory snack.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", ingredients: ["Flour", "Carom seeds", "Oil", "Salt"], method: "Deep fry stiff dough discs.", nutrition: "High Calorie" },
    { id: 10, title: "Nutritious Laddu", category: "East India", description: "General health supplement balls.", image: "https://images.unsplash.com/photo-1589301760574-0a6f91dce7d7?auto=format&fit=crop&w=600&q=80", ingredients: ["Wheat", "Besan", "Ghee", "Nuts"], method: "Roast flours and mix with ghee and sugar.", nutrition: "Protein Rich" },

    // --- WEST INDIA RECIPES ---
    {
        id: 11,
        title: "Bajra Biscuit",
        category: "West India",
        description: "Crunchy biscuits made from Pearl Millet, rich in calcium and iron.",
        image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Bajra Flour", "Wheat Flour", "Butter", "Peanuts", "Sugar", "Ammonia", "Milk"],
        method: "1. Sieve flours and baking powder.<br>2. Cream butter, ammonia and sugar.<br>3. Add flour and knead with milk.<br>4. Add peanuts, roll, cut and bake at 175°C for 10 mins.",
        nutrition: "Energy: 366 Kcal | Protein: 6.7g | Calcium: 132mg"
    },
    {
        id: 12,
        title: "Sorghum Cookies",
        category: "West India",
        description: "Gluten-free cookies made from Jowar flour.",
        image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Sorghum Flour", "Coconut", "Fat", "Liquid Glucose", "Sugar", "Milk Powder", "Baking Powder"],
        method: "1. Blend sorghum powder with fat.<br>2. Add other ingredients and knead.<br>3. Shape into balls and bake at 225°C.",
        nutrition: "Energy: 345 Kcal | Calcium: 248mg"
    },
    {
        id: 13,
        title: "Poha Ladoo",
        category: "West India",
        description: "Iron-rich sweet made from flattened rice.",
        image: "https://images.unsplash.com/photo-1595861781675-d14b1b3b24f5?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Poha (Flattened Rice)", "Wheat flour", "Besan", "Soybean flour", "Coconut", "Sesame", "Groundnut", "Jaggery"],
        method: "1. Roast poha and powder it.<br>2. Roast other flours separately.<br>3. Mix all with jaggery and ghee.<br>4. Shape into balls.",
        nutrition: "Iron: 7.41mg | Protein: 20.3g"
    },
    { id: 14, title: "Gur Para", category: "West India", description: "Sweet fried strips coated in jaggery.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", ingredients: ["Wheat flour", "Jaggery", "Ghee"], method: "Fry flour strips and coat in syrup.", nutrition: "Energy Rich" },
    { id: 15, title: "Guar Phali Fry", category: "West India", description: "Cluster beans stir fry.", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=600&q=80", ingredients: ["Cluster beans", "Spices", "Oil"], method: "Stir fry with spices.", nutrition: "Fiber Rich" },
    { id: 16, title: "Moong Dal Ladoo", category: "West India", description: "Sweet balls made of green gram.", image: "https://images.unsplash.com/photo-1589301760574-0a6f91dce7d7?auto=format&fit=crop&w=600&q=80", ingredients: ["Moong Dal flour", "Ghee", "Sugar"], method: "Roast flour in ghee and mix sugar.", nutrition: "Protein Rich" },
    { id: 17, title: "Murmura Sattu Ladoo", category: "West India", description: "Puffed rice and roasted gram flour sweet.", image: "https://images.unsplash.com/photo-1590051661643-4f18b3d64c1b?auto=format&fit=crop&w=600&q=80", ingredients: ["Puffed Rice", "Sattu", "Jaggery"], method: "Bind with melted jaggery.", nutrition: "Light & Healthy" },
    { id: 18, title: "Panjiri", category: "West India", description: "Traditional curative sweet mix.", image: "https://images.unsplash.com/photo-1597393353415-b34013788919?auto=format&fit=crop&w=600&q=80", ingredients: ["Wheat flour", "Ghee", "Dry fruits", "Gum"], method: "Roast flour and mix nuts.", nutrition: "Post-natal Care" },
    { id: 19, title: "Paushtik Baati", category: "West India", description: "Nutritious baked wheat balls.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", ingredients: ["Wheat", "Soy", "Gram flour"], method: "Bake in clay oven.", nutrition: "Carb Rich" },
    { id: 20, title: "Amla Candy", category: "West India", description: "Dried Indian Gooseberry candy.", image: "https://images.unsplash.com/photo-1576088235288-129b8004f1a4?auto=format&fit=crop&w=600&q=80", ingredients: ["Amla", "Sugar"], method: "Boil amla, soak in sugar syrup, dry.", nutrition: "Vitamin C Rich" },
    
    // --- SOUTH INDIA RECIPES ---
    {
        id: 21,
        title: "Garden Cress Ladoo",
        category: "South India",
        description: "Iron-rich supplement for adolescent girls.",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a45ddfa?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Garden Cress Seeds (70g)", "Groundnuts (10g)", "Jaggery (20g)", "Ghee"],
        method: "1. Roast seeds and nuts separately.<br>2. Pulverize to coarse powder.<br>3. Mix with fine jaggery and ghee.<br>4. Shape into ladoos.",
        nutrition: "Protein: 11.6g | Iron: 5.39mg"
    },
    {
        id: 22,
        title: "Pearl Millet Cookie",
        category: "South India",
        description: "Cookies rich in minerals and dietary fiber.",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Processed Pearl Millet", "Refined Wheat Flour", "Sugar", "Fat"],
        method: "1. Sift flours.<br>2. Cream fat and sugar.<br>3. Blend all ingredients.<br>4. Extrude and bake.",
        nutrition: "Energy: 462 Kcal | Iron: 8.66mg"
    },
    {
        id: 23,
        title: "Barnyard Millet Idli Mix",
        category: "South India",
        description: "A dry mix for healthy millet steamed cakes.",
        image: "https://images.unsplash.com/photo-1589301760574-0a6f91dce7d7?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Barnyard Millet", "Black Gram Flour", "Salt"],
        method: "1. Clean, pulverize, and sieve ingredients.<br>2. Blend in standardized ratio.<br>3. Pack for storage.",
        nutrition: "Energy: 426 Kcal | Protein: 5.69g"
    },
    { id: 24, title: "Millet Icecream", category: "South India", description: "Healthy dessert option.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80", ingredients: ["Millet Milk", "Cream", "Sugar"], method: "Churn in ice cream maker.", nutrition: "Calcium Rich" },
    { id: 25, title: "Coconut Icecream", category: "South India", description: "Tropical flavored dessert.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80", ingredients: ["Coconut milk", "Fresh cream", "Sugar"], method: "Freeze and churn.", nutrition: "High Fat" },
    { id: 26, title: "Moringa Pasta", category: "South India", description: "Pasta fortified with drumstick leaves.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80", ingredients: ["Wheat semolina", "Moringa powder"], method: "Extrude dough into pasta shapes.", nutrition: "Vitamin A Rich" },
    { id: 27, title: "Grape Pomace Cookies", category: "South India", description: "Antioxidant rich cookies.", image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&w=600&q=80", ingredients: ["Grape pomace", "Flour", "Sugar", "Butter"], method: "Bake at 180°C.", nutrition: "Fiber Rich" },
    { id: 28, title: "Ragi Biscuit", category: "South India", description: "Finger millet biscuits.", image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&w=600&q=80", ingredients: ["Ragi flour", "Wheat flour", "Sugar"], method: "Bake until crisp.", nutrition: "Calcium Rich" },
    { id: 29, title: "Sesame Nutritious Ladoo", category: "South India", description: "Calcium rich sweet balls.", image: "https://images.unsplash.com/photo-1599599810769-bcde5a45ddfa?auto=format&fit=crop&w=600&q=80", ingredients: ["Sesame seeds", "Jaggery", "Peanuts"], method: "Roast and bind with jaggery.", nutrition: "High Calcium" },
    { id: 30, title: "Fortified Mango Bar", category: "South India", description: "Vitamin enriched fruit leather.", image: "https://images.unsplash.com/photo-1590051661643-4f18b3d64c1b?auto=format&fit=crop&w=600&q=80", ingredients: ["Mango pulp", "Sugar", "Nutrients"], method: "Dry in trays.", nutrition: "Vitamin A" },

    // --- NORTH INDIA RECIPES ---
    {
        id: 31,
        title: "Flax Seed Ladoo",
        category: "North India",
        description: "Omega-3 rich sweets, good for arthritis.",
        image: "https://images.unsplash.com/photo-1605335803328-3e4210d481f1?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Flax seeds", "Jaggery", "Groundnut"],
        method: "1. Roast flax seeds and grind to powder.<br>2. Melt jaggery.<br>3. Mix powder and crushed groundnut with jaggery.<br>4. Shape into balls.",
        nutrition: "Energy: 534 Kcal | Omega-3: 22.8g"
    },
    {
        id: 32,
        title: "Garlic Drumstick Soup",
        category: "North India",
        description: "Soup beneficial for arthritis and anemia.",
        image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Drumstick powder", "Garlic powder", "Corn flour", "Spices"],
        method: "1. Mix powders with water.<br>2. Boil for 3-4 minutes stirring continuously.<br>3. Serve hot.",
        nutrition: "Beta Carotene: 1008µg"
    },
    {
        id: 33,
        title: "Ragi Flax Cookies",
        category: "North India",
        description: "Cookies rich in calcium and Omega-3.",
        image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Ragi flour", "Flax seeds", "Wheat flour", "Cinnamon"],
        method: "1. Cream fat and sugar.<br>2. Add flours and seeds.<br>3. Bake until golden.",
        nutrition: "Antioxidant Rich"
    },
    {
        id: 34,
        title: "Multigrain Ginger Ladoo",
        category: "North India",
        description: "Warming winter sweet.",
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a45ddfa?auto=format&fit=crop&w=600&q=80",
        ingredients: ["Various Flours", "Ginger powder", "Jaggery", "Ghee"],
        method: "1. Roast flours.<br>2. Mix with ginger and jaggery syrup.<br>3. Form balls.",
        nutrition: "Immunity Booster"
    },
    { id: 35, title: "Sweet Potato Papad", category: "North India", description: "Sun dried sweet potato discs.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", ingredients: ["Sweet potato mash", "Spices"], method: "Roll and sun dry.", nutrition: "Vitamin A" },
    { id: 36, title: "Guava Candy", category: "North India", description: "Sweet and tangy fruit squares.", image: "https://images.unsplash.com/photo-1589301760574-0a6f91dce7d7?auto=format&fit=crop&w=600&q=80", ingredients: ["Guava pulp", "Sugar", "Citric acid"], method: "Cook pulp with sugar until thick, set and cut.", nutrition: "Vitamin C" },
    { id: 37, title: "Soya Fortified Dal Pitha", category: "North India", description: "Steamed rice dumplings with lentil filling.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", ingredients: ["Rice flour", "Soya flour", "Dal paste"], method: "Stuff dough with dal and steam.", nutrition: "Protein Rich" },
    { id: 38, title: "Beetroot Candy", category: "North India", description: "Healthy vegetable candy.", image: "https://images.unsplash.com/photo-1590051661643-4f18b3d64c1b?auto=format&fit=crop&w=600&q=80", ingredients: ["Beetroot", "Sugar"], method: "Soak beetroot pieces in sugar syrup and dry.", nutrition: "Iron Rich" },
    { id: 39, title: "Herbal Tofu Tikka", category: "North India", description: "Spiced grilled soy paneer.", image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=600&q=80", ingredients: ["Tofu", "Herbs", "Spices"], method: "Marinate and grill.", nutrition: "High Protein" },
    { id: 40, title: "Spirulina Cookies", category: "North India", description: "Superfood enriched cookies.", image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&w=600&q=80", ingredients: ["Flour", "Spirulina powder", "Sugar", "Butter"], method: "Bake at 180°C.", nutrition: "Micronutrient Rich" },
    
    // --- ADDITIONAL & CENTRAL INDIA RECIPES ---
    { id: 41, title: "Sattu", category: "Central India", description: "Roasted gram flour drink mix.", image: "https://images.unsplash.com/photo-1597393353415-b34013788919?auto=format&fit=crop&w=600&q=80", ingredients: ["Roasted Gram"], method: "Mix with water, salt/sugar.", nutrition: "Cooling & Protein" },
    { id: 42, title: "Drumstick Leaf Powder", category: "Central India", description: "Nutrient density enhancer.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", ingredients: ["Drumstick leaves"], method: "Shade dry and powder.", nutrition: "Vitamin A & Iron" },
    { id: 43, title: "Amylase Rich Flour", category: "Central India", description: "Enzyme rich flour for gruels.", image: "https://images.unsplash.com/photo-1605335803328-3e4210d481f1?auto=format&fit=crop&w=600&q=80", ingredients: ["Germinated Wheat/Ragi"], method: "Germinate, dry, and powder.", nutrition: "Easy Digestion" },
    { id: 44, title: "Mahua Nutribar", category: "Central India", description: "Energy bar from Mahua flowers.", image: "https://images.unsplash.com/photo-1590051661643-4f18b3d64c1b?auto=format&fit=crop&w=600&q=80", ingredients: ["Mahua", "Nuts", "Binder"], method: "Mix and set in trays.", nutrition: "Energy Dense" },
    { id: 45, title: "Ragi Sattu Sharbat", category: "North India", description: "Summer cooling drink.", image: "https://images.unsplash.com/photo-1597393353415-b34013788919?auto=format&fit=crop&w=600&q=80", ingredients: ["Ragi flour", "Water", "Lemon"], method: "Mix and serve chilled.", nutrition: "Calcium Rich" },
    { id: 46, title: "Cauliflower Leaf Powder", category: "North India", description: "Waste-to-wealth nutrition.", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", ingredients: ["Cauliflower greens"], method: "Dehydrate and powder.", nutrition: "Iron Rich" },
    { id: 47, title: "Potato Flour Biscuit", category: "North India", description: "Biscuits using tuber flour.", image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&w=600&q=80", ingredients: ["Potato flour", "Wheat flour"], method: "Bake.", nutrition: "Gluten Reduced" },
    { id: 48, title: "Apple Spread", category: "North India", description: "Fruit preserve.", image: "https://images.unsplash.com/photo-1589301760574-0a6f91dce7d7?auto=format&fit=crop&w=600&q=80", ingredients: ["Apples", "Sugar"], method: "Cook to jam consistency.", nutrition: "Energy" },
    { id: 49, title: "Mushroom Pickle", category: "East India", description: "Spicy preserved mushrooms.", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=600&q=80", ingredients: ["Mushrooms", "Oil", "Spices"], method: "Pickle in oil and spices.", nutrition: "Probiotic" },
    { id: 50, title: "Papaya Chutney", category: "West India", description: "Raw papaya condiment.", image: "https://images.unsplash.com/photo-1597393353415-b34013788919?auto=format&fit=crop&w=600&q=80", ingredients: ["Raw Papaya", "Mustard seeds"], method: "Grate and temper.", nutrition: "Enzyme Rich" }
];

const recipeContainer = document.getElementById('recipe-container');

// Render Recipes
function displayRecipes(filter = 'all') {
    recipeContaine