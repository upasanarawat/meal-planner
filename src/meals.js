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
    { emoji: '🥜', name: 'Almond Butter Toast', description: 'Whole grain toast with almond butter, banana, and honey drizzle', calories: 350, tags: ['vegetarian', 'dairy-free', 'high-protein'] },
    { emoji: '🍓', name: 'Strawberry Smoothie Bowl', description: 'Thick strawberry blend with granola, coconut, and hemp seeds', calories: 330, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🧀', name: 'Cheese Omelette', description: 'Three-egg omelette with cheddar, herbs, and buttered toast', calories: 420, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🫓', name: 'Shakshuka Morning', description: 'Eggs poached in spiced tomato sauce with warm crusty bread', calories: 390, tags: ['vegetarian', 'mediterranean', 'high-protein'] },
    { emoji: '🥯', name: 'Everything Bagel & Lox', description: 'Toasted bagel with cream cheese, smoked salmon, and capers', calories: 460, tags: ['high-protein', 'mediterranean'] },
    { emoji: '🍇', name: 'Granola & Milk', description: 'Crunchy house granola with cold milk and fresh blueberries', calories: 310, tags: ['vegetarian'] },
    { emoji: '🥥', name: 'Coconut Porridge', description: 'Warm coconut milk porridge with mango and toasted almonds', calories: 340, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🍳', name: 'Huevos Rancheros', description: 'Fried eggs on tortilla with salsa, beans, and avocado', calories: 480, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🥕', name: 'Carrot Cake Oats', description: 'Oatmeal with shredded carrot, walnuts, raisins, and cinnamon', calories: 350, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🍌', name: 'Banana Walnut Muffin', description: 'Warm banana muffin with walnuts and a pat of butter', calories: 380, tags: ['vegetarian'] },
    { emoji: '🫛', name: 'Tofu Scramble', description: 'Seasoned crumbled tofu with vegetables and nutritional yeast', calories: 280, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein', 'low-carb'] },
    { emoji: '🥞', name: 'Blueberry Pancakes', description: 'Buttermilk pancakes studded with fresh blueberries and syrup', calories: 460, tags: ['vegetarian'] },
    { emoji: '🍳', name: 'Mushroom & Spinach Omelette', description: 'Fluffy omelette filled with sautéed mushrooms and baby spinach', calories: 320, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🥤', name: 'Green Power Smoothie', description: 'Spinach, banana, protein powder, and almond milk blended smooth', calories: 270, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍯', name: 'Honey Ricotta Toast', description: 'Sourdough with whipped ricotta, honey, and crushed pistachios', calories: 360, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🌽', name: 'Cornmeal Porridge', description: 'Creamy cornmeal porridge with butter, cinnamon, and brown sugar', calories: 300, tags: ['vegetarian', 'gluten-free'] },
    { emoji: '🥚', name: 'Soft Boiled Eggs & Soldiers', description: 'Two soft boiled eggs with buttered toast strips for dipping', calories: 310, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🫘', name: 'Beans on Toast', description: 'Savory baked beans on thick buttered sourdough toast', calories: 370, tags: ['vegetarian', 'dairy-free', 'high-protein'] },
    { emoji: '🥭', name: 'Mango Lassi Bowl', description: 'Thick mango yogurt bowl with cardamom and crushed pistachios', calories: 300, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🍳', name: 'Spanish Tortilla', description: 'Thick potato and egg omelette with onions served in wedges', calories: 400, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🧁', name: 'Morning Glory Muffin', description: 'Carrot, apple, and raisin muffin with warm spices baked fresh', calories: 340, tags: ['vegetarian'] },
    { emoji: '🥑', name: 'Avocado Egg Cup', description: 'Baked egg inside avocado half with everything bagel seasoning', calories: 280, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🍌', name: 'Banana Oat Pancakes', description: 'Two-ingredient pancakes made with banana and oats only', calories: 250, tags: ['vegetarian', 'dairy-free', 'gluten-free'] },
    { emoji: '🫐', name: 'Blueberry Muffin', description: 'Classic bakery-style blueberry muffin with streusel crumb topping', calories: 380, tags: ['vegetarian'] },
    { emoji: '🥣', name: 'Steel Cut Oats', description: 'Hearty steel cut oats with brown sugar, pecans, and cream', calories: 360, tags: ['vegetarian'] },
    { emoji: '🍳', name: 'Denver Omelette', description: 'Egg omelette with ham, bell peppers, onions, and cheddar cheese', calories: 430, tags: ['gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🥯', name: 'Peanut Butter Bagel', description: 'Toasted bagel with peanut butter, banana slices, and honey', calories: 440, tags: ['vegetarian', 'dairy-free', 'high-protein'] },
    { emoji: '🥥', name: 'Tropical Smoothie', description: 'Pineapple, mango, coconut milk, and lime blended until smooth', calories: 260, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🍠', name: 'Sweet Potato Hash', description: 'Diced sweet potato with peppers, onions, and a fried egg', calories: 380, tags: ['vegetarian', 'gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥒', name: 'Cucumber Cream Cheese Toast', description: 'Rye toast with cream cheese, cucumber, dill, and lemon', calories: 270, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🧈', name: 'Crumpets & Honey', description: 'Toasted crumpets with melted butter and a drizzle of honey', calories: 290, tags: ['vegetarian'] },
    { emoji: '🍳', name: 'Egg & Cheese Muffin', description: 'English muffin with fried egg, cheese, and a dash of hot sauce', calories: 350, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🫙', name: 'Overnight Protein Oats', description: 'Oats soaked with protein powder, peanut butter, and banana', calories: 400, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🥝', name: 'Kiwi Chia Pudding', description: 'Vanilla chia pudding topped with kiwi slices and hemp seeds', calories: 240, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🍞', name: 'Cinnamon Raisin Toast', description: 'Thick cinnamon raisin bread toasted with butter and jam', calories: 320, tags: ['vegetarian'] },
    { emoji: '🥚', name: 'Egg White Veggie Wrap', description: 'Egg whites with spinach, tomato, and feta in a wheat wrap', calories: 260, tags: ['vegetarian', 'high-protein', 'low-carb'] },
    { emoji: '🫕', name: 'Turkish Eggs', description: 'Poached eggs over garlicky yogurt with chili butter drizzle', calories: 340, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'mediterranean'] },
    { emoji: '🥐', name: 'Ham & Cheese Croissant', description: 'Flaky croissant filled with smoked ham and melted gruyère cheese', calories: 450, tags: ['high-protein'] },
    { emoji: '🍇', name: 'Bircher Muesli', description: 'Swiss-style muesli soaked overnight with apple and yogurt', calories: 330, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🥤', name: 'Berry Protein Shake', description: 'Mixed berry shake with whey protein, banana, and almond milk', calories: 300, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🌮', name: 'Breakfast Taco', description: 'Corn tortilla with scrambled eggs, avocado, and pico de gallo', calories: 330, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🫓', name: 'Labneh & Za\'atar Toast', description: 'Thick labneh on toast with za\'atar, olive oil, and tomatoes', calories: 310, tags: ['vegetarian', 'mediterranean', 'high-protein'] },
    { emoji: '🥞', name: 'Protein Pancakes', description: 'High-protein pancakes with cottage cheese, oats, and blueberries', calories: 380, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🍵', name: 'Turmeric Latte & Toast', description: 'Golden turmeric latte with a slice of seeded toast', calories: 230, tags: ['vegetarian', 'dairy-free'] },
    { emoji: '🧀', name: 'Gruyère & Herb Scramble', description: 'Creamy scrambled eggs with gruyère, chives, and sourdough toast', calories: 410, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🍎', name: 'Apple Cinnamon Oatmeal', description: 'Warm oatmeal with diced apple, cinnamon, and brown sugar', calories: 310, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🥑', name: 'Smashed Avo & Feta', description: 'Multigrain toast with smashed avocado, feta, and chili flakes', calories: 370, tags: ['vegetarian', 'high-protein', 'mediterranean'] },
    { emoji: '🍳', name: 'Corned Beef Hash', description: 'Crispy corned beef hash with potatoes and a sunny-side egg', calories: 520, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🫐', name: 'Blueberry Yogurt Bowl', description: 'Greek yogurt with blueberries, flax seeds, and drizzled honey', calories: 260, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🥖', name: 'French Baguette & Butter', description: 'Warm crusty baguette with salted butter and strawberry preserves', calories: 340, tags: ['vegetarian'] },
    { emoji: '🍳', name: 'Eggs Florentine', description: 'Poached eggs on toasted muffin with wilted spinach and hollandaise', calories: 440, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🌰', name: 'Hazelnut Spread Toast', description: 'Thick toast spread with hazelnut butter and sliced strawberries', calories: 380, tags: ['vegetarian', 'dairy-free'] },
    { emoji: '🥣', name: 'Maple Pecan Oatmeal', description: 'Creamy oatmeal with toasted pecans and real maple syrup', calories: 370, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🫛', name: 'Chickpea Flour Omelette', description: 'Savory chickpea flour omelette with herbs and roasted vegetables', calories: 300, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🥞', name: 'Lemon Ricotta Pancakes', description: 'Light and fluffy lemon ricotta pancakes with powdered sugar', calories: 420, tags: ['vegetarian'] },
    { emoji: '🍌', name: 'Chocolate Banana Smoothie', description: 'Rich chocolate banana smoothie with oat milk and peanut butter', calories: 350, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🥚', name: 'Scotch Eggs', description: 'Hard-boiled eggs wrapped in sausage meat, breaded and baked', calories: 480, tags: ['high-protein'] },
    { emoji: '🫓', name: 'Mediterranean Breakfast Plate', description: 'Hummus, olives, cucumber, tomato, and warm pita bread', calories: 380, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🥤', name: 'Mango Protein Smoothie', description: 'Fresh mango blended with protein powder, yogurt, and turmeric', calories: 290, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🌽', name: 'Corn Fritters', description: 'Crispy corn fritters with sour cream and sweet chili sauce', calories: 390, tags: ['vegetarian'] },
    { emoji: '🍞', name: 'Pesto Egg Toast', description: 'Sourdough toast with basil pesto, fried egg, and parmesan', calories: 370, tags: ['vegetarian', 'high-protein', 'mediterranean'] },
    { emoji: '🥣', name: 'Quinoa Breakfast Bowl', description: 'Warm quinoa with almond milk, berries, and toasted coconut', calories: 320, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍳', name: 'Smoked Salmon Scramble', description: 'Scrambled eggs with smoked salmon, dill, and cream cheese', calories: 400, tags: ['gluten-free', 'high-protein', 'keto', 'low-carb'] },
    { emoji: '🥑', name: 'Avo & Kimchi Toast', description: 'Toasted sourdough with avocado, kimchi, and sesame seeds', calories: 330, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🫘', name: 'Full English Breakfast', description: 'Eggs, bacon, sausage, beans, toast, and grilled tomatoes', calories: 550, tags: ['high-protein'] },
    { emoji: '🥝', name: 'Green Smoothie Bowl', description: 'Thick spinach, kiwi, and banana blend topped with granola', calories: 290, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🧀', name: 'Croque Monsieur', description: 'Grilled ham and cheese sandwich with creamy béchamel sauce', calories: 490, tags: ['high-protein'] },
    { emoji: '🍠', name: 'Sweet Potato Toast', description: 'Sliced sweet potato toasted and topped with almond butter', calories: 250, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb'] },
    { emoji: '🥞', name: 'Buckwheat Crepes', description: 'Thin buckwheat crepes with ham, cheese, and a fried egg', calories: 410, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍳', name: 'Frittata Slice', description: 'Baked egg frittata with zucchini, red pepper, and goat cheese', calories: 330, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein', 'mediterranean'] },
    { emoji: '🫓', name: 'Cottage Cheese Bowl', description: 'Cottage cheese with peaches, honey, and a sprinkle of granola', calories: 270, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🥐', name: 'Almond Croissant', description: 'Flaky croissant filled with almond cream and sliced almonds', calories: 420, tags: ['vegetarian'] },
    { emoji: '🍌', name: 'Banana Bread Slice', description: 'Thick slice of homemade banana bread with salted butter', calories: 350, tags: ['vegetarian'] },
    { emoji: '🥣', name: 'Pumpkin Spice Oatmeal', description: 'Oatmeal with pumpkin purée, warm spices, and pecans', calories: 340, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🍳', name: 'Poached Eggs & Avocado', description: 'Two poached eggs on smashed avocado with everything seasoning', calories: 310, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🥤', name: 'Açaí Protein Smoothie', description: 'Açaí, banana, and protein powder blended with coconut water', calories: 280, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🫙', name: 'Yogurt & Granola Jar', description: 'Layered vanilla yogurt with crunchy granola and mixed berries', calories: 320, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🌮', name: 'Migas', description: 'Scrambled eggs with crispy tortilla strips, cheese, and salsa', calories: 410, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🥖', name: 'Tartine with Egg', description: 'Open-faced sourdough with ricotta, soft egg, and microgreens', calories: 340, tags: ['vegetarian', 'mediterranean', 'high-protein'] },
    { emoji: '🍓', name: 'Strawberry Crepes', description: 'Thin crepes filled with fresh strawberries and whipped cream', calories: 380, tags: ['vegetarian'] },
    { emoji: '🫕', name: 'Congee', description: 'Silky rice porridge with ginger, scallions, and a soft egg', calories: 290, tags: ['gluten-free', 'dairy-free'] },
    { emoji: '🥚', name: 'Cloud Eggs', description: 'Whipped egg whites baked with yolk center and chive garnish', calories: 200, tags: ['vegetarian', 'gluten-free', 'keto', 'low-carb', 'high-protein'] },
    { emoji: '🍞', name: 'Vegemite Toast', description: 'Thick-cut toast with butter and a thin spread of vegemite', calories: 220, tags: ['vegetarian', 'dairy-free'] },
    { emoji: '🥣', name: 'Porridge with Dates', description: 'Warm oat porridge with medjool dates, walnuts, and cinnamon', calories: 340, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🍳', name: 'Egg Fried Rice', description: 'Leftover rice stir-fried with egg, peas, and sesame oil', calories: 360, tags: ['dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🫓', name: 'Halloumi & Tomato Plate', description: 'Grilled halloumi with roasted tomatoes, olives, and warm bread', calories: 420, tags: ['vegetarian', 'gluten-free', 'mediterranean', 'high-protein'] },
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
    { emoji: '🥗', name: 'Cobb Salad', description: 'Romaine with chicken, bacon, egg, avocado, and blue cheese', calories: 520, tags: ['gluten-free', 'high-protein', 'keto', 'low-carb'] },
    { emoji: '🍜', name: 'Pho Bo', description: 'Vietnamese beef noodle soup with herbs, bean sprouts, and lime', calories: 450, tags: ['dairy-free', 'gluten-free'] },
    { emoji: '🥪', name: 'Turkey Club Sandwich', description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo', calories: 540, tags: ['high-protein'] },
    { emoji: '🍲', name: 'Minestrone Soup', description: 'Italian vegetable soup with pasta, beans, and parmesan cheese', calories: 350, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🫔', name: 'Fish Taco Bowl', description: 'Grilled fish over rice with mango salsa and pickled onions', calories: 460, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥙', name: 'Shawarma Plate', description: 'Spiced chicken shawarma with rice, hummus, and garlic sauce', calories: 580, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍣', name: 'Tuna Poke Bowl', description: 'Fresh ahi tuna over sushi rice with cucumber and sesame', calories: 480, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥗', name: 'Kale Caesar Salad', description: 'Massaged kale with parmesan, croutons, and creamy Caesar dressing', calories: 380, tags: ['vegetarian'] },
    { emoji: '🌯', name: 'Veggie Burrito Bowl', description: 'Rice bowl with black beans, corn, guacamole, and pico de gallo', calories: 490, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍜', name: 'Laksa', description: 'Spicy coconut noodle soup with shrimp, tofu, and bean sprouts', calories: 530, tags: ['dairy-free'] },
    { emoji: '🥪', name: 'BLT Sandwich', description: 'Crispy bacon, lettuce, and tomato on toasted sourdough bread', calories: 420, tags: ['dairy-free'] },
    { emoji: '🍲', name: 'Butternut Squash Soup', description: 'Velvety roasted butternut squash soup with sage and cream', calories: 320, tags: ['vegetarian', 'gluten-free'] },
    { emoji: '🥘', name: 'Bibimbap', description: 'Korean rice bowl with vegetables, beef, gochujang, and fried egg', calories: 550, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍝', name: 'Carbonara', description: 'Spaghetti with pancetta, egg, parmesan, and black pepper', calories: 560, tags: ['high-protein'] },
    { emoji: '🥗', name: 'Niçoise Salad', description: 'French salad with tuna, green beans, eggs, olives, and potatoes', calories: 440, tags: ['gluten-free', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🌮', name: 'Korean Beef Tacos', description: 'Flour tortillas with bulgogi beef, kimchi, and sesame mayo', calories: 490, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍛', name: 'Dal Tadka', description: 'Yellow lentil dal tempered with cumin, garlic, and ghee', calories: 380, tags: ['vegetarian', 'gluten-free', 'high-protein'] },
    { emoji: '🥙', name: 'Greek Gyro', description: 'Warm pita with lamb, tzatziki, tomato, onion, and lettuce', calories: 520, tags: ['high-protein', 'mediterranean'] },
    { emoji: '🍣', name: 'Chirashi Bowl', description: 'Assorted sashimi over seasoned sushi rice with pickled ginger', calories: 460, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥬', name: 'Asian Chopped Salad', description: 'Crunchy cabbage salad with edamame, mandarin, and sesame dressing', calories: 340, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🌯', name: 'Mediterranean Wrap', description: 'Spinach tortilla with hummus, roasted vegetables, and feta cheese', calories: 420, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🍜', name: 'Udon Noodle Soup', description: 'Thick udon noodles in dashi broth with tofu and scallions', calories: 400, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🥪', name: 'Grilled Cheese & Tomato Soup', description: 'Classic grilled cheese sandwich with a cup of tomato soup', calories: 480, tags: ['vegetarian'] },
    { emoji: '🍲', name: 'Black Bean Soup', description: 'Smoky black bean soup with cumin, lime, and cilantro', calories: 360, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🥘', name: 'Paella', description: 'Spanish saffron rice with shrimp, mussels, and chorizo', calories: 580, tags: ['gluten-free', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🫔', name: 'Carnitas Tacos', description: 'Slow-cooked pulled pork tacos with onion, cilantro, and salsa', calories: 510, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥗', name: 'Waldorf Salad', description: 'Crisp apple, celery, grapes, and walnuts with creamy dressing', calories: 350, tags: ['vegetarian', 'gluten-free'] },
    { emoji: '🍝', name: 'Cacio e Pepe', description: 'Simple Roman pasta with pecorino cheese and black pepper', calories: 450, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🌮', name: 'Shrimp Tacos', description: 'Grilled shrimp tacos with avocado crema and pickled red onion', calories: 430, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍛', name: 'Palak Paneer', description: 'Creamy spinach curry with paneer cheese and warm naan bread', calories: 480, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🥙', name: 'Sabich Pita', description: 'Iraqi pita with fried eggplant, hard egg, and tahini sauce', calories: 470, tags: ['vegetarian', 'dairy-free', 'mediterranean'] },
    { emoji: '🍜', name: 'Wonton Soup', description: 'Delicate pork wontons in clear ginger broth with bok choy', calories: 320, tags: ['dairy-free'] },
    { emoji: '🥪', name: 'Banh Mi', description: 'Vietnamese baguette with pork, pickled vegetables, and cilantro', calories: 450, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🥗', name: 'Fattoush Salad', description: 'Lebanese salad with toasted pita, sumac, and lemon dressing', calories: 330, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🍲', name: 'French Onion Soup', description: 'Caramelized onion soup with crusty bread and melted gruyère', calories: 420, tags: ['vegetarian'] },
    { emoji: '🌯', name: 'Fajita Wrap', description: 'Grilled chicken and peppers with guacamole in a flour tortilla', calories: 500, tags: ['high-protein'] },
    { emoji: '🥘', name: 'Jollof Rice', description: 'West African tomato rice with grilled chicken and fried plantain', calories: 540, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍣', name: 'California Roll Bowl', description: 'Deconstructed California roll with crab, avocado, and cucumber', calories: 400, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🫕', name: 'Tortilla Soup', description: 'Spiced tomato broth with chicken, avocado, and crispy tortilla strips', calories: 380, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥬', name: 'Buddha Bowl', description: 'Quinoa bowl with roasted vegetables, chickpeas, and tahini drizzle', calories: 450, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍝', name: 'Aglio e Olio', description: 'Spaghetti tossed with garlic, olive oil, chili, and parsley', calories: 420, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🥪', name: 'Cubano Sandwich', description: 'Pressed sandwich with roast pork, ham, Swiss, and pickles', calories: 530, tags: ['high-protein'] },
    { emoji: '🍲', name: 'Pozole Verde', description: 'Mexican hominy soup with chicken, tomatillos, and radish garnish', calories: 400, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥗', name: 'Tabbouleh', description: 'Bulgur wheat salad with parsley, tomato, mint, and lemon juice', calories: 280, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🌮', name: 'Chicken Tinga Tacos', description: 'Shredded chicken in chipotle tomato sauce on corn tortillas', calories: 440, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍛', name: 'Massaman Curry', description: 'Rich peanut curry with chicken, potatoes, and jasmine rice', calories: 560, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥙', name: 'Chicken Souvlaki Wrap', description: 'Grilled chicken in pita with tzatziki, tomato, and red onion', calories: 470, tags: ['high-protein', 'mediterranean'] },
    { emoji: '🍜', name: 'Pad See Ew', description: 'Wide rice noodles stir-fried with chicken, broccoli, and soy', calories: 490, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🥪', name: 'Tuna Melt', description: 'Open-faced tuna salad sandwich with melted cheddar on sourdough', calories: 460, tags: ['high-protein'] },
    { emoji: '🥘', name: 'Stuffed Grape Leaves', description: 'Rice and herb stuffed grape leaves with lemon yogurt sauce', calories: 320, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🍲', name: 'Mulligatawny Soup', description: 'Curried lentil soup with apple, coconut cream, and warm spices', calories: 370, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🥗', name: 'Grain Bowl', description: 'Farro with roasted beets, goat cheese, arugula, and walnuts', calories: 430, tags: ['vegetarian', 'high-protein', 'mediterranean'] },
    { emoji: '🌯', name: 'Tofu Lettuce Wraps', description: 'Seasoned crumbled tofu in butter lettuce with hoisin sauce', calories: 290, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb'] },
    { emoji: '🍝', name: 'Pasta Primavera', description: 'Penne with sautéed seasonal vegetables and light garlic sauce', calories: 410, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🫔', name: 'Veggie Quesadilla', description: 'Flour tortilla with beans, peppers, cheese, and sour cream', calories: 450, tags: ['vegetarian'] },
    { emoji: '🥬', name: 'Larb Lettuce Cups', description: 'Thai minced chicken in lettuce cups with mint and lime', calories: 310, tags: ['gluten-free', 'dairy-free', 'low-carb', 'high-protein'] },
    { emoji: '🍛', name: 'Butter Chicken', description: 'Tender chicken in creamy tomato sauce with fragrant basmati rice', calories: 550, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🥪', name: 'Falafel Sandwich', description: 'Crispy falafel in flatbread with tahini, veggies, and pickles', calories: 470, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🍲', name: 'Corn Chowder', description: 'Creamy sweet corn chowder with potatoes, bacon, and chives', calories: 400, tags: ['gluten-free'] },
    { emoji: '🥗', name: 'Quinoa Taco Salad', description: 'Quinoa with black beans, corn, tomato, and chipotle dressing', calories: 430, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍜', name: 'Dan Dan Noodles', description: 'Sichuan noodles in spicy sesame pork sauce with bok choy', calories: 510, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🌮', name: 'Al Pastor Tacos', description: 'Marinated pork tacos with pineapple, onion, and cilantro', calories: 470, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥙', name: 'Lamb Kofta Wrap', description: 'Spiced lamb kofta in flatbread with yogurt and pickled turnip', calories: 500, tags: ['high-protein', 'mediterranean'] },
    { emoji: '🍣', name: 'Sashimi Salad', description: 'Fresh sashimi over mixed greens with ponzu and sesame dressing', calories: 320, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto'] },
    { emoji: '🥪', name: 'Reuben Sandwich', description: 'Corned beef with sauerkraut, Swiss cheese, and Russian dressing', calories: 530, tags: ['high-protein'] },
    { emoji: '🍲', name: 'Gazpacho', description: 'Chilled Spanish tomato soup with cucumber, pepper, and croutons', calories: 250, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb', 'mediterranean'] },
    { emoji: '🥘', name: 'Chicken Tikka Bowl', description: 'Tandoori chicken tikka over rice with raita and naan', calories: 530, tags: ['high-protein'] },
    { emoji: '🥗', name: 'Pear & Gorgonzola Salad', description: 'Mixed greens with sliced pear, gorgonzola, and candied pecans', calories: 370, tags: ['vegetarian', 'gluten-free'] },
    { emoji: '🌯', name: 'Teriyaki Chicken Wrap', description: 'Teriyaki glazed chicken with rice, edamame, and spicy mayo', calories: 490, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍛', name: 'Chana Masala', description: 'Spiced chickpea stew with tomatoes, ginger, and cilantro naan', calories: 440, tags: ['vegetarian', 'vegan', 'dairy-free', 'high-protein'] },
    { emoji: '🥬', name: 'Spring Rolls', description: 'Fresh rice paper rolls with shrimp, herbs, and peanut sauce', calories: 300, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍝', name: 'Mac & Cheese', description: 'Creamy baked macaroni with sharp cheddar and breadcrumb topping', calories: 520, tags: ['vegetarian'] },
    { emoji: '🫕', name: 'Hot & Sour Soup', description: 'Spicy and tangy Chinese soup with tofu, mushrooms, and egg', calories: 280, tags: ['dairy-free'] },
    { emoji: '🥗', name: 'Roasted Beet Salad', description: 'Roasted beets with goat cheese, arugula, and candied walnuts', calories: 360, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🍲', name: 'Miso Soup & Onigiri', description: 'Silky miso soup with two rice balls filled with pickled plum', calories: 340, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🌯', name: 'Grilled Veggie Wrap', description: 'Charred zucchini, peppers, and eggplant with goat cheese wrap', calories: 400, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🥪', name: 'Chicken Pesto Panini', description: 'Pressed panini with grilled chicken, pesto, and melted mozzarella', calories: 490, tags: ['high-protein'] },
    { emoji: '🍛', name: 'Aloo Gobi', description: 'Spiced cauliflower and potato curry with warm chapati bread', calories: 390, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🥘', name: 'Harira Soup', description: 'Moroccan chickpea and lentil soup with tomatoes and warm spices', calories: 350, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍜', name: 'Soba Noodle Bowl', description: 'Chilled buckwheat soba noodles with dashi, nori, and scallions', calories: 380, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🥙', name: 'Hummus & Veggie Plate', description: 'Creamy hummus with fresh vegetables, olives, and warm pita', calories: 360, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🍝', name: 'Orzo Salad', description: 'Orzo pasta with sun-dried tomatoes, spinach, and feta cheese', calories: 410, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🌮', name: 'Tempeh Tacos', description: 'Seasoned tempeh in corn tortillas with avocado and pickled onion', calories: 420, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🥬', name: 'Sesame Ginger Salad', description: 'Crunchy Asian salad with tofu, edamame, and sesame ginger dressing', calories: 350, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free'] },
    { emoji: '🍲', name: 'Ribollita', description: 'Tuscan bread and bean soup with kale, vegetables, and olive oil', calories: 370, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🥪', name: 'Smoked Turkey Wrap', description: 'Smoked turkey with cranberry sauce, brie, and arugula in wrap', calories: 430, tags: ['high-protein'] },
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
    { emoji: '🍗', name: 'Chicken Parmesan', description: 'Breaded chicken cutlet with marinara, mozzarella, and spaghetti', calories: 720, tags: ['high-protein'] },
    { emoji: '🐟', name: 'Miso Glazed Salmon', description: 'White miso marinated salmon with steamed bok choy and rice', calories: 540, tags: ['dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍛', name: 'Butter Chicken Dinner', description: 'Creamy tomato butter chicken with garlic naan and basmati rice', calories: 680, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🥩', name: 'Filet Mignon', description: 'Pan-seared filet with garlic mashed potatoes and asparagus', calories: 750, tags: ['gluten-free', 'high-protein', 'low-carb'] },
    { emoji: '🍕', name: 'Pepperoni Pizza', description: 'Classic pepperoni pizza with mozzarella on thin crispy crust', calories: 680, tags: ['high-protein'] },
    { emoji: '🌮', name: 'Carne Asada Tacos', description: 'Grilled steak tacos with guacamole, onion, and fresh cilantro', calories: 560, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍱', name: 'Sushi Platter', description: 'Assorted nigiri and maki rolls with ginger, wasabi, and soy', calories: 520, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🫕', name: 'Seafood Risotto', description: 'Creamy risotto with shrimp, mussels, and a touch of saffron', calories: 600, tags: ['gluten-free', 'high-protein', 'mediterranean'] },
    { emoji: '🥘', name: 'Chicken Cacciatore', description: 'Braised chicken with tomatoes, peppers, olives, and herbs', calories: 550, tags: ['gluten-free', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍔', name: 'Black Bean Burger', description: 'Spiced black bean patty with avocado, lettuce, and chipotle mayo', calories: 480, tags: ['vegetarian', 'vegan', 'dairy-free', 'high-protein'] },
    { emoji: '🧆', name: 'Falafel Dinner Plate', description: 'Crispy falafel with hummus, tabbouleh, and warm pita bread', calories: 520, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean', 'high-protein'] },
    { emoji: '🥦', name: 'Vegetable Stir-Fry', description: 'Wok-tossed vegetables with tofu in garlic ginger sauce', calories: 380, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb'] },
    { emoji: '🐠', name: 'Fish & Chips', description: 'Beer-battered cod with thick-cut fries and tartar sauce', calories: 680, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍗', name: 'Lemon Garlic Chicken', description: 'Roasted lemon garlic chicken with orzo and roasted vegetables', calories: 580, tags: ['dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍝', name: 'Shrimp Scampi', description: 'Garlic butter shrimp over linguine with white wine and parsley', calories: 560, tags: ['high-protein', 'mediterranean'] },
    { emoji: '🍛', name: 'Tikka Masala', description: 'Tender chicken in rich spiced tomato cream sauce with rice', calories: 620, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🥩', name: 'BBQ Ribs', description: 'Slow-cooked baby back ribs with smoky BBQ sauce and coleslaw', calories: 750, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🌮', name: 'Chicken Enchiladas', description: 'Corn tortillas with shredded chicken, salsa verde, and cheese', calories: 580, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍱', name: 'Katsu Curry', description: 'Crispy breaded chicken cutlet with Japanese curry sauce and rice', calories: 650, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🫕', name: 'Lobster Risotto', description: 'Rich creamy risotto with chunks of lobster and fresh tarragon', calories: 620, tags: ['gluten-free', 'high-protein', 'mediterranean'] },
    { emoji: '🥘', name: 'Beef Bourguignon', description: 'French braised beef stew with red wine, carrots, and mushrooms', calories: 640, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍔', name: 'Turkey Burger', description: 'Lean turkey patty with cranberry aioli, arugula, and Swiss cheese', calories: 480, tags: ['high-protein'] },
    { emoji: '🍝', name: 'Lasagna', description: 'Layered pasta with beef ragu, béchamel, and melted mozzarella', calories: 700, tags: ['high-protein'] },
    { emoji: '🐟', name: 'Seared Tuna Steak', description: 'Sesame-crusted ahi tuna with wasabi, soy, and pickled ginger', calories: 420, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto'] },
    { emoji: '🍗', name: 'Chicken Marsala', description: 'Pan-fried chicken in marsala wine sauce with mushrooms and pasta', calories: 600, tags: ['high-protein'] },
    { emoji: '🍛', name: 'Lamb Rogan Josh', description: 'Kashmiri lamb curry with aromatic spices and steamed basmati rice', calories: 640, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥩', name: 'Pork Tenderloin', description: 'Herb-crusted pork tenderloin with apple chutney and roasted fennel', calories: 520, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb'] },
    { emoji: '🌮', name: 'Birria Tacos', description: 'Braised beef birria tacos dipped in consommé with onion and cilantro', calories: 580, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍱', name: 'Bibimbap Dinner', description: 'Korean mixed rice with beef, vegetables, gochujang, and fried egg', calories: 590, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🫕', name: 'Truffle Risotto', description: 'Creamy parmesan risotto finished with black truffle shavings', calories: 580, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🥘', name: 'Osso Buco', description: 'Braised veal shanks with gremolata and saffron risotto', calories: 700, tags: ['gluten-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍔', name: 'Lamb Burger', description: 'Spiced lamb patty with feta, cucumber yogurt, and pickled onion', calories: 560, tags: ['high-protein', 'mediterranean'] },
    { emoji: '🧆', name: 'Veggie Moussaka', description: 'Layered eggplant and potato bake with spiced lentils and béchamel', calories: 480, tags: ['vegetarian', 'mediterranean'] },
    { emoji: '🥦', name: 'Cauliflower Steak', description: 'Roasted cauliflower steak with chimichurri and roasted chickpeas', calories: 360, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb'] },
    { emoji: '🐠', name: 'Coconut Shrimp', description: 'Crispy coconut-crusted shrimp with sweet chili dipping sauce', calories: 480, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍗', name: 'Jerk Chicken', description: 'Jamaican jerk spiced chicken with rice, peas, and fried plantain', calories: 620, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍝', name: 'Pappardelle Ragu', description: 'Wide ribbon pasta with slow-cooked beef and pork ragu', calories: 660, tags: ['high-protein'] },
    { emoji: '🍛', name: 'Saag Paneer Dinner', description: 'Creamy spinach curry with paneer, served with garlic naan', calories: 540, tags: ['vegetarian', 'high-protein'] },
    { emoji: '🥩', name: 'Rack of Lamb', description: 'Herb-crusted rack of lamb with mint sauce and roasted potatoes', calories: 680, tags: ['gluten-free', 'high-protein', 'mediterranean'] },
    { emoji: '🌮', name: 'Mahi Mahi Tacos', description: 'Grilled mahi mahi with tropical salsa and cilantro lime crema', calories: 460, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍱', name: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp, peanuts, and tamarind sauce', calories: 550, tags: ['dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🫕', name: 'Pumpkin Risotto', description: 'Creamy risotto with roasted pumpkin, sage, and toasted pine nuts', calories: 500, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🥘', name: 'Chicken Pot Pie', description: 'Flaky pastry crust filled with chicken, vegetables, and cream sauce', calories: 620, tags: ['high-protein'] },
    { emoji: '🍔', name: 'Portobello Burger', description: 'Grilled portobello cap with goat cheese, arugula, and balsamic glaze', calories: 380, tags: ['vegetarian', 'gluten-free', 'low-carb'] },
    { emoji: '🍝', name: 'Penne Arrabbiata', description: 'Penne pasta in spicy tomato sauce with garlic and fresh basil', calories: 480, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean'] },
    { emoji: '🐟', name: 'Teriyaki Salmon', description: 'Glazed teriyaki salmon with stir-fried vegetables and steamed rice', calories: 560, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🍗', name: 'Coq au Vin', description: 'French braised chicken in red wine with pearl onions and mushrooms', calories: 580, tags: ['gluten-free', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍛', name: 'Thai Red Curry', description: 'Spicy red curry with chicken, basil, and coconut milk over rice', calories: 570, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🥩', name: 'Beef Tacos', description: 'Seasoned ground beef tacos with cheese, lettuce, and sour cream', calories: 520, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🌮', name: 'Lobster Tacos', description: 'Butter-poached lobster tacos with mango salsa and avocado crema', calories: 480, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍱', name: 'Chicken Yakitori', description: 'Grilled chicken skewers with tare sauce, rice, and pickled ginger', calories: 500, tags: ['dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🫕', name: 'Wild Mushroom Pasta', description: 'Tagliatelle with mixed wild mushrooms in truffle cream sauce', calories: 540, tags: ['vegetarian'] },
    { emoji: '🥘', name: 'Shakshuka Dinner', description: 'Spiced eggs in tomato sauce with feta, served with warm bread', calories: 440, tags: ['vegetarian', 'mediterranean', 'high-protein'] },
    { emoji: '🧆', name: 'Falafel Bowl', description: 'Crispy falafel over greens with tahini, pickles, and warm rice', calories: 480, tags: ['vegetarian', 'vegan', 'dairy-free', 'mediterranean', 'high-protein'] },
    { emoji: '🥦', name: 'Tofu Pad See Ew', description: 'Wide rice noodles with tofu, broccoli, and sweet soy sauce', calories: 440, tags: ['vegetarian', 'vegan', 'dairy-free'] },
    { emoji: '🐠', name: 'Cioppino', description: 'San Francisco seafood stew with fish, clams, and crusty bread', calories: 480, tags: ['dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🍗', name: 'Tandoori Chicken', description: 'Yogurt-marinated chicken roasted with spices, served with rice', calories: 520, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍝', name: 'Mushroom Carbonara', description: 'Fettuccine with mushrooms, egg, pecorino, and crispy pancetta', calories: 600, tags: ['high-protein'] },
    { emoji: '🍛', name: 'Japanese Curry', description: 'Rich Japanese curry with chicken, potatoes, and steamed rice', calories: 580, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🥩', name: 'Beef Stroganoff', description: 'Tender beef strips in creamy mushroom sauce over egg noodles', calories: 640, tags: ['high-protein'] },
    { emoji: '🍱', name: 'Poke Dinner Bowl', description: 'Marinated tuna and salmon over rice with all the toppings', calories: 520, tags: ['dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🥘', name: 'Ratatouille', description: 'Provençal baked vegetables with herbs, served with crusty bread', calories: 350, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb', 'mediterranean'] },
    { emoji: '🍔', name: 'Smash Burger', description: 'Double smash patties with American cheese, pickles, and special sauce', calories: 650, tags: ['high-protein'] },
    { emoji: '🍝', name: 'Seafood Linguine', description: 'Linguine with clams, mussels, and shrimp in white wine sauce', calories: 580, tags: ['dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🐟', name: 'Baked Sea Bass', description: 'Whole baked sea bass with fennel, olives, and roasted tomatoes', calories: 460, tags: ['gluten-free', 'dairy-free', 'high-protein', 'low-carb', 'keto', 'mediterranean'] },
    { emoji: '🍗', name: 'Chicken Kiev', description: 'Breaded chicken breast stuffed with garlic herb butter and mash', calories: 640, tags: ['high-protein'] },
    { emoji: '🌮', name: 'Veggie Fajitas', description: 'Sizzling peppers, onions, and mushrooms with guacamole and sour cream', calories: 420, tags: ['vegetarian', 'gluten-free'] },
    { emoji: '🫕', name: 'Lemon Risotto', description: 'Light and zesty lemon risotto with fresh herbs and parmesan', calories: 480, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🥩', name: 'Lamb Chops', description: 'Grilled lamb chops with mint pesto, roasted potatoes, and greens', calories: 600, tags: ['gluten-free', 'high-protein', 'low-carb', 'mediterranean'] },
    { emoji: '🍛', name: 'Vindaloo', description: 'Fiery Goan vindaloo curry with tender pork and steamed rice', calories: 580, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🧆', name: 'Chickpea Stew', description: 'Hearty Mediterranean chickpea stew with spinach and crusty bread', calories: 400, tags: ['vegetarian', 'vegan', 'dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🐠', name: 'Salmon en Croûte', description: 'Salmon wrapped in puff pastry with spinach and cream cheese', calories: 620, tags: ['high-protein'] },
    { emoji: '🍱', name: 'Korean Fried Chicken', description: 'Crispy gochujang-glazed fried chicken with pickled radish and rice', calories: 640, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🥘', name: 'Goulash', description: 'Hungarian beef and paprika stew with egg noodles and sour cream', calories: 580, tags: ['high-protein'] },
    { emoji: '🍔', name: 'Chicken Burger', description: 'Grilled chicken breast burger with pesto, mozzarella, and tomato', calories: 500, tags: ['high-protein'] },
    { emoji: '🥦', name: 'Buddha Bowl Dinner', description: 'Roasted sweet potato, quinoa, avocado, and tahini dressing bowl', calories: 450, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'high-protein'] },
    { emoji: '🍝', name: 'Vodka Rigatoni', description: 'Rigatoni in creamy tomato vodka sauce with parmesan and basil', calories: 560, tags: ['vegetarian'] },
    { emoji: '🍗', name: 'Orange Chicken', description: 'Crispy orange-glazed chicken with steamed broccoli and fried rice', calories: 620, tags: ['dairy-free', 'high-protein'] },
    { emoji: '🌮', name: 'Pulled Pork Tacos', description: 'Slow-cooked pulled pork with pineapple slaw on corn tortillas', calories: 520, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🫕', name: 'Cacio e Pepe Risotto', description: 'Creamy risotto finished with pecorino romano and cracked pepper', calories: 520, tags: ['vegetarian', 'gluten-free', 'mediterranean'] },
    { emoji: '🥩', name: 'Shepherd\'s Pie', description: 'Classic lamb mince pie topped with creamy mashed potato crust', calories: 580, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🍗', name: 'Honey Garlic Chicken', description: 'Sticky honey garlic chicken thighs with jasmine rice and greens', calories: 580, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🍝', name: 'Puttanesca', description: 'Spaghetti with olives, capers, anchovies, and spicy tomato sauce', calories: 500, tags: ['dairy-free', 'high-protein', 'mediterranean'] },
    { emoji: '🥘', name: 'Chili Con Carne', description: 'Smoky beef and bean chili with sour cream and cornbread', calories: 560, tags: ['gluten-free', 'high-protein'] },
    { emoji: '🐟', name: 'Blackened Catfish', description: 'Cajun-spiced catfish with dirty rice and collard greens', calories: 480, tags: ['gluten-free', 'dairy-free', 'high-protein'] },
    { emoji: '🌮', name: 'Tofu Lettuce Wraps', description: 'Crispy tofu in butter lettuce with hoisin, peanuts, and herbs', calories: 360, tags: ['vegetarian', 'vegan', 'dairy-free', 'gluten-free', 'low-carb'] },
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

function getPool(mealType, preferences, exclude = []) {
  let pool = filterByPreferences(MEALS_DB[mealType], preferences)
  pool = pool.filter(m => !exclude.includes(m.name))
  if (pool.length === 0) pool = MEALS_DB[mealType].filter(m => !exclude.includes(m.name))
  if (pool.length === 0) pool = MEALS_DB[mealType]
  return pool
}

function pickBestCombo(breakfastPool, lunchPool, dinnerPool, dailyTarget) {
  // Try random combos and pick the one closest to the daily target
  const tolerance = dailyTarget * 0.1 // 10% tolerance
  let bestCombo = null
  let bestDiff = Infinity

  const bShuffled = shuffle(breakfastPool)
  const lShuffled = shuffle(lunchPool)
  const dShuffled = shuffle(dinnerPool)

  for (let b = 0; b < bShuffled.length; b++) {
    for (let l = 0; l < lShuffled.length; l++) {
      for (let d = 0; d < dShuffled.length; d++) {
        const total = bShuffled[b].calories + lShuffled[l].calories + dShuffled[d].calories
        const diff = Math.abs(total - dailyTarget)
        if (diff < bestDiff) {
          bestDiff = diff
          bestCombo = { breakfast: bShuffled[b], lunch: lShuffled[l], dinner: dShuffled[d] }
          if (diff <= tolerance) return bestCombo
        }
      }
    }
  }
  return bestCombo
}

export function generatePlan(preferences, calorieTarget) {
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  if (!calorieTarget) {
    // No target — just shuffle and assign
    const breakfasts = shuffle(getPool('breakfast', preferences))
    const lunches = shuffle(getPool('lunch', preferences))
    const dinners = shuffle(getPool('dinner', preferences))
    return {
      days: DAYS.map((day, i) => ({
        day,
        meals: {
          breakfast: { ...breakfasts[i % breakfasts.length] },
          lunch: { ...lunches[i % lunches.length] },
          dinner: { ...dinners[i % dinners.length] },
        },
      })),
    }
  }

  // With calorie target — pick combos that hit the daily goal
  const breakfastPool = getPool('breakfast', preferences)
  const lunchPool = getPool('lunch', preferences)
  const dinnerPool = getPool('dinner', preferences)

  const days = DAYS.map(day => {
    const combo = pickBestCombo(breakfastPool, lunchPool, dinnerPool, calorieTarget)
    return {
      day,
      meals: {
        breakfast: { ...combo.breakfast },
        lunch: { ...combo.lunch },
        dinner: { ...combo.dinner },
      },
    }
  })

  return { days }
}

export function regenerateMeal(mealType, preferences, currentMealName, calorieTarget) {
  let pool = getPool(mealType, preferences, [currentMealName])

  if (calorieTarget) {
    const perMealBudget = Math.round(calorieTarget / 3)
    const tolerance = perMealBudget * 0.25
    const filtered = pool.filter(m => Math.abs(m.calories - perMealBudget) <= tolerance)
    if (filtered.length > 0) pool = filtered
  }

  const picked = shuffle(pool)[0]
  return { ...picked }
}
