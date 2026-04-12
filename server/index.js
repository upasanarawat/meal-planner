import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const MEALS_DB = {
  breakfast: [
    { emoji: '🥣', name: 'Berry Overnight Oats', description: 'Creamy oats soaked with mixed berries and chia seeds', calories: 320 },
    { emoji: '🍳', name: 'Veggie Scramble', description: 'Scrambled eggs with peppers, spinach, and feta cheese', calories: 380 },
    { emoji: '🥞', name: 'Banana Pancakes', description: 'Fluffy pancakes topped with sliced banana and maple syrup', calories: 450 },
    { emoji: '🥑', name: 'Avocado Toast', description: 'Sourdough toast with smashed avocado, egg, and chili flakes', calories: 360 },
    { emoji: '🫐', name: 'Açaí Bowl', description: 'Blended açaí topped with granola, coconut, and fresh fruit', calories: 340 },
    { emoji: '🧇', name: 'Belgian Waffles', description: 'Golden waffles with strawberries and a drizzle of honey', calories: 420 },
    { emoji: '🥐', name: 'Croissant & Jam', description: 'Buttery croissant with apricot jam and fresh orange juice', calories: 380 },
    { emoji: '🍌', name: 'Peanut Butter Smoothie', description: 'Banana peanut butter smoothie with oat milk and cinnamon', calories: 310 },
    { emoji: '🥚', name: 'Eggs Benedict', description: 'Poached eggs on English muffin with hollandaise and spinach', calories: 480 },
    { emoji: '🫓', name: 'Greek Yogurt Parfait', description: 'Thick yogurt layered with honey, walnuts, and mixed berries', calories: 290 },
    { emoji: '🌯', name: 'Breakfast Burrito', description: 'Flour tortilla with eggs, black beans, salsa, and cheese', calories: 520 },
    { emoji: '🍞', name: 'French Toast', description: 'Cinnamon French toast with powdered sugar and fresh berries', calories: 440 },
  ],
  lunch: [
    { emoji: '🥗', name: 'Mediterranean Salad', description: 'Mixed greens with feta, olives, cucumber, and lemon dressing', calories: 420 },
    { emoji: '🍜', name: 'Miso Ramen', description: 'Rich miso broth with noodles, soft egg, and scallions', calories: 520 },
    { emoji: '🌯', name: 'Chicken Caesar Wrap', description: 'Grilled chicken with romaine, parmesan, and Caesar dressing', calories: 480 },
    { emoji: '🥪', name: 'Caprese Sandwich', description: 'Fresh mozzarella, tomato, and basil on ciabatta with pesto', calories: 460 },
    { emoji: '🍲', name: 'Lentil Soup', description: 'Hearty red lentil soup with carrots, cumin, and crusty bread', calories: 380 },
    { emoji: '🥙', name: 'Falafel Pita', description: 'Crispy falafel in warm pita with hummus and pickled vegetables', calories: 490 },
    { emoji: '🍣', name: 'Salmon Poke Bowl', description: 'Fresh salmon over rice with avocado, edamame, and soy glaze', calories: 530 },
    { emoji: '🥘', name: 'Shakshuka', description: 'Poached eggs in spiced tomato sauce with crusty sourdough bread', calories: 410 },
    { emoji: '🍝', name: 'Pesto Pasta Salad', description: 'Fusilli with basil pesto, cherry tomatoes, and pine nuts', calories: 470 },
    { emoji: '🫔', name: 'Black Bean Tacos', description: 'Soft corn tortillas with seasoned black beans and lime crema', calories: 440 },
    { emoji: '🥬', name: 'Thai Peanut Bowl', description: 'Rice noodles with crunchy veggies and creamy peanut sauce', calories: 500 },
    { emoji: '🍛', name: 'Chickpea Curry', description: 'Spiced chickpeas in coconut curry sauce with basmati rice', calories: 510 },
  ],
  dinner: [
    { emoji: '🍝', name: 'Spaghetti Bolognese', description: 'Classic beef ragu over spaghetti with fresh parmesan cheese', calories: 680 },
    { emoji: '🍗', name: 'Herb Roast Chicken', description: 'Roasted chicken thighs with rosemary potatoes and green beans', calories: 620 },
    { emoji: '🐟', name: 'Grilled Salmon', description: 'Pan-seared salmon with asparagus, lemon butter, and wild rice', calories: 580 },
    { emoji: '🍛', name: 'Thai Green Curry', description: 'Coconut green curry with tofu, bamboo shoots, and jasmine rice', calories: 550 },
    { emoji: '🥩', name: 'Steak & Vegetables', description: 'Grilled sirloin with roasted sweet potato and broccolini', calories: 720 },
    { emoji: '🍕', name: 'Margherita Pizza', description: 'Wood-fired pizza with San Marzano tomatoes, mozzarella, and basil', calories: 650 },
    { emoji: '🌮', name: 'Fish Tacos', description: 'Battered cod tacos with cabbage slaw and chipotle mayo', calories: 540 },
    { emoji: '🍱', name: 'Teriyaki Bowl', description: 'Teriyaki glazed chicken over rice with steamed broccoli', calories: 600 },
    { emoji: '🫕', name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms, thyme, and parmesan', calories: 560 },
    { emoji: '🥘', name: 'Lamb Tagine', description: 'Slow-cooked lamb with apricots, almonds, and fluffy couscous', calories: 640 },
    { emoji: '🍔', name: 'Gourmet Burger', description: 'Brioche bun with grass-fed beef, caramelized onions, and truffle aioli', calories: 710 },
    { emoji: '🧆', name: 'Eggplant Parmesan', description: 'Baked eggplant with marinara sauce, mozzarella, and fresh basil', calories: 520 },
  ],
}

// Tag meals with dietary compatibility
const DIET_TAGS = {
  'Berry Overnight Oats': ['vegetarian', 'dairy-free', 'mediterranean'],
  'Veggie Scramble': ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'],
  'Banana Pancakes': ['vegetarian'],
  'Avocado Toast': ['vegetarian', 'dairy-free', 'high-protein', 'mediterranean'],
  'Açaí Bowl': ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'],
  'Belgian Waffles': ['vegetarian'],
  'Croissant & Jam': ['vegetarian'],
  'Peanut Butter Smoothie': ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'],
  'Eggs Benedict': ['vegetarian'],
  'Greek Yogurt Parfait': ['vegetarian', 'gluten-free', 'high-protein', 'mediterranean'],
  'Breakfast Burrito': ['high-protein'],
  'French Toast': ['vegetarian'],
  'Mediterranean Salad': ['vegetarian', 'gluten-free', 'low-carb', 'mediterranean'],
  'Miso Ramen': ['dairy-free'],
  'Chicken Caesar Wrap': ['high-protein'],
  'Caprese Sandwich': ['vegetarian', 'mediterranean'],
  'Lentil Soup': ['vegetarian', 'vegan', 'dairy-free', 'high-protein', 'mediterranean'],
  'Falafel Pita': ['vegetarian', 'vegan', 'dairy-free', 'mediterranean', 'high-protein'],
  'Salmon Poke Bowl': ['gluten-free', 'dairy-free', 'high-protein'],
  'Shakshuka': ['vegetarian', 'gluten-free', 'low-carb', 'mediterranean'],
  'Pesto Pasta Salad': ['vegetarian', 'mediterranean'],
  'Black Bean Tacos': ['vegetarian', 'vegan', 'dairy-free', 'high-protein'],
  'Thai Peanut Bowl': ['vegetarian', 'vegan', 'dairy-free'],
  'Chickpea Curry': ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'],
  'Spaghetti Bolognese': ['high-protein'],
  'Herb Roast Chicken': ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto'],
  'Grilled Salmon': ['gluten-free', 'high-protein', 'low-carb', 'keto', 'mediterranean'],
  'Thai Green Curry': ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'],
  'Steak & Vegetables': ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto'],
  'Margherita Pizza': ['vegetarian', 'mediterranean'],
  'Fish Tacos': ['dairy-free', 'high-protein'],
  'Teriyaki Bowl': ['dairy-free', 'high-protein'],
  'Mushroom Risotto': ['vegetarian', 'gluten-free', 'mediterranean'],
  'Lamb Tagine': ['gluten-free', 'dairy-free', 'high-protein', 'mediterranean'],
  'Gourmet Burger': ['high-protein'],
  'Eggplant Parmesan': ['vegetarian', 'mediterranean'],
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
  return meals.filter(m => {
    const tags = DIET_TAGS[m.name] || []
    return preferences.every(p => tags.includes(p))
  })
}

function pickMeals(mealType, preferences, count, exclude = []) {
  let pool = filterByPreferences(MEALS_DB[mealType], preferences)
  pool = pool.filter(m => !exclude.includes(m.name))
  if (pool.length === 0) pool = MEALS_DB[mealType].filter(m => !exclude.includes(m.name))
  if (pool.length === 0) pool = MEALS_DB[mealType]
  const shuffled = shuffle(pool)
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i % shuffled.length])
  }
  return result
}

app.post('/api/generate-plan', (req, res) => {
  const { preferences = [] } = req.body

  const breakfasts = pickMeals('breakfast', preferences, 7)
  const lunches = pickMeals('lunch', preferences, 7)
  const dinners = pickMeals('dinner', preferences, 7)

  const plan = {
    days: DAYS.map((day, i) => ({
      day,
      meals: {
        breakfast: { ...breakfasts[i] },
        lunch: { ...lunches[i] },
        dinner: { ...dinners[i] },
      },
    })),
  }

  res.json(plan)
})

app.post('/api/regenerate-meal', (req, res) => {
  const { mealType, preferences = [], currentMealName } = req.body
  const [meal] = pickMeals(mealType, preferences, 1, [currentMealName])
  res.json({ ...meal })
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
