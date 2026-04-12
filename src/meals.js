const MEALS_DB = {
  breakfast: [
    { emoji: '🥣', name: 'Berry Overnight Oats', description: 'Creamy oats soaked with mixed berries and chia seeds', calories: 320, tags: ['vegetarian', 'dairy-free', 'mediterranean'] },
    { emoji: '🍳', name: 'Veggie Scramble', description: 'Scrambled eggs with peppers, spinach, and feta cheese', calories: 380, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🥞', name: 'Banana Pancakes', description: 'Fluffy pancakes topped with sliced banana and maple syrup', calories: 450, tags: ['vegetarian'] },
    { emoji: '🥑', name: 'Avocado Toast', description: 'Sourdough toast with smashed avocado, egg, and chili flakes', calories: 360, tags: ['vegetarian', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🫐', name: 'Açaí Bowl', description: 'Blended açaí topped with granola, coconut, and fresh fruit', calories: 340, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🧇', name: 'Belgian Waffles', description: 'Golden waffles with strawberries and a drizzle of honey', calories: 420, tags: ['vegetarian'] },
    { emoji: '🥐', name: 'Croissant & Jam', description: 'Buttery croissant with apricot jam and fresh orange juice', calories: 380, tags: ['vegetarian'] },
    { emoji: '🍌', name: 'Peanut Butter Smoothie', description: 'Banana peanut butter smoothie with oat milk and cinnamon', calories: 310, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🥚', name: 'Eggs Benedict', description: 'Poached eggs on English muffin with hollandaise and spinach', calories: 480, tags: ['vegetarian'] },
    { emoji: '🫓', name: 'Greek Yogurt Parfait', description: 'Thick yogurt layered with honey, walnuts, and mixed berries', calories: 290, tags: ['vegetarian', 'gluten-free', 'high-protein', 'mediterranean'] },
    { emoji: '🌯', name: 'Breakfast Burrito', description: 'Flour tortilla with eggs, black beans, salsa, and cheese', calories: 520, tags: ['high-protein'] },
    { emoji: '🍞', name: 'French Toast', description: 'Cinnamon French toast with powdered sugar and fresh berries', calories: 440, tags: ['vegetarian'] },
    { emoji: '🥗', name: 'Light Fruit Bowl', description: 'Seasonal fresh fruits with a squeeze of lime juice', calories: 180, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb'] },
    { emoji: '🍵', name: 'Matcha Chia Pudding', description: 'Creamy matcha chia pudding topped with toasted coconut flakes', calories: 220, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
  ],
  lunch: [
    { emoji: '🥗', name: 'Mediterranean Salad', description: 'Mixed greens with feta, olives, cucumber, and lemon dressing', calories: 420, tags: ['vegetarian', 'gluten-free', 'low-carb', 'mediterranean'] },
    { emoji: '🍜', name: 'Miso Ramen', description: 'Rich miso broth with noodles, soft egg, and scallions', calories: 520, tags: ['dairy-free'] },
    { emoji: '🌯', name: 'Chicken Caesar Wrap', description: 'Grilled chicken with romaine, parmesan, and Caesar dressing', calories: 480, tags: ['high-protein'] },
    { emoji: '🥪', name: 'Caprese Sandwich', description: 'Fresh mozzarella, tomato, and basil on ciabatta with pesto', calories: 460, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🍲', name: 'Lentil Soup', description: 'Hearty red lentil soup with carrots, cumin, and crusty bread', calories: 380, tags: ['vegetarian', 'vegan', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🥙', name: 'Falafel Pita', description: 'Crispy falafel in warm pita with hummus and pickled vegetables', calories: 490, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean', 'high-protein'] },
    { emoji: '🍣', name: 'Salmon Poke Bowl', description: 'Fresh salmon over rice with avocado, edamame, and soy glaze', calories: 530, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥘', name: 'Shakshuka', description: 'Poached eggs in spiced tomato sauce with crusty sourdough bread', calories: 410, tags: ['vegetarian', 'gluten-free', 'low-carb', 'mediterranean'] },
    { emoji: '🍝', name: 'Pesto Pasta Salad', description: 'Fusilli with basil pesto, cherry tomatoes, and pine nuts', calories: 470, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🫔', name: 'Black Bean Tacos', description: 'Soft corn tortillas with seasoned black beans and lime crema', calories: 440, tags: ['vegetarian', 'vegan', 'dairy-free', 'high-protein'] },
    { emoji: '🥬', name: 'Thai Peanut Bowl', description: 'Rice noodles with crunchy veggies and creamy peanut sauce', calories: 500, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🍛', name: 'Chickpea Curry', description: 'Spiced chickpeas in coconut curry sauce with basmati rice', calories: 510, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🥒', name: 'Garden Veggie Wrap', description: 'Light tortilla wrap with hummus, cucumber, and sprouts', calories: 280, tags: ['vegetarian', 'vegan', 'dairy-free', 'low-carb'] },
    { emoji: '🍵', name: 'Tom Yum Soup', description: 'Spicy Thai lemongrass soup with shrimp and mushrooms', calories: 310, tags: ['gluten-free', 'dairy-free', 'low-carb', 'high-protein'] },
  ],
  dinner: [
    { emoji: '🍝', name: 'Spaghetti Bolognese', description: 'Classic beef ragu over spaghetti with fresh parmesan cheese', calories: 680, tags: ['high-protein'] },
    { emoji: '🍗', name: 'Herb Roast Chicken', description: 'Roasted chicken thighs with rosemary potatoes and green beans', calories: 620, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto'] },
    { emoji: '🐟', name: 'Grilled Salmon', description: 'Pan-seared salmon with asparagus, lemon butter, and wild rice', calories: 580, tags: ['gluten-free', 'high-protein', 'low-carb', 'keto', 'mediterranean'] },
    { emoji: '🍛', name: 'Thai Green Curry', description: 'Coconut green curry with tofu, bamboo shoots, and jasmine rice', calories: 550, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🥩', name: 'Steak & Vegetables', description: 'Grilled sirloin with roasted sweet potato and broccolini', calories: 720, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto'] },
    { emoji: '🍕', name: 'Margherita Pizza', description: 'Wood-fired pizza with San Marzano tomatoes, mozzarella, and basil', calories: 650, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🌮', name: 'Fish Tacos', description: 'Battered cod tacos with cabbage slaw and chipotle mayo', calories: 540, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍱', name: 'Teriyaki Bowl', description: 'Teriyaki glazed chicken over rice with steamed broccoli', calories: 600, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🫕', name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms, thyme, and parmesan', calories: 560, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🥘', name: 'Lamb Tagine', description: 'Slow-cooked lamb with apricots, almonds, and fluffy couscous', calories: 640, tags: ['gluten-free', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍔', name: 'Gourmet Burger', description: 'Brioche bun with grass-fed beef, caramelized onions, and truffle aioli', calories: 710, tags: ['high-protein'] },
    { emoji: '🧆', name: 'Eggplant Parmesan', description: 'Baked eggplant with marinara sauce, mozzarella, and fresh basil', calories: 520, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🥦', name: 'Stuffed Bell Peppers', description: 'Bell peppers stuffed with quinoa, black beans, and corn', calories: 420, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🐠', name: 'Lemon Herb Cod', description: 'Baked cod fillet with roasted zucchini and cherry tomatoes', calories: 380, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto', 'mediterranean'] },
  ],
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function filterByPreferences(meals, preferences) {
  if (preferences.length === 0) return meals
  return meals.filter(m => preferences.every(p => m.tags.includes(p)))
}

function pickMeals(mealType, preferences, count, exclude = [], calorieTarget) {
  let pool = filterByPreferences(MEALS_DB[mealType], preferences)
  pool = pool.filter(m => !exclude.includes(m.name))
  if (pool.length === 0) pool = MEALS_DB[mealType].filter(m => !exclude.includes(m.name))
  if (pool.length === 0) pool = MEALS_DB[mealType]

  // If calorie target is set, sort by proximity to per-meal budget
  if (calorieTarget) {
    const perMealBudget = Math.round(calorieTarget / 3)
    pool = [...pool].sort((a, b) => Math.abs(a.calories - perMealBudget) - Math.abs(b.calories - perMealBudget))
    // Take the closest half, then shuffle for variety
    const half = Math.max(Math.ceil(pool.length / 2), count)
    pool = shuffle(pool.slice(0, half))
  } else {
    pool = shuffle(pool)
  }

  const result = []
  for (let i = 0; i < count; i++) {
    result.push(pool[i % pool.length])
  }
  return result
}

export function generatePlan(preferences, calorieTarget) {
  const breakfasts = pickMeals('breakfast', preferences, 7, [], calorieTarget)
  const lunches = pickMeals('lunch', preferences, 7, [], calorieTarget)
  const dinners = pickMeals('dinner', preferences, 7, [], calorieTarget)

  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return {
    days: DAYS.map((day, i) => ({
      day,
      meals: {
        breakfast: { ...breakfasts[i] },
        lunch: { ...lunches[i] },
        dinner: { ...dinners[i] },
      },
    })),
  }
}

export function regenerateMeal(mealType, preferences, currentMealName, calorieTarget) {
  const [meal] = pickMeals(mealType, preferences, 1, [currentMealName], calorieTarget)
  return { ...meal }
}
