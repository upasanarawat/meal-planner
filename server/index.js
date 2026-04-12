import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MEALS = ['breakfast', 'lunch', 'dinner']

function buildPlanPrompt(preferences) {
  const prefText = preferences.length > 0
    ? `Dietary preferences: ${preferences.join(', ')}.`
    : 'No specific dietary preferences.'

  return `Generate a weekly meal plan for Monday through Sunday with breakfast, lunch, and dinner for each day.
${prefText}

Return ONLY valid JSON (no markdown, no code fences) in this exact format:
{
  "days": [
    {
      "day": "Monday",
      "meals": {
        "breakfast": { "emoji": "🥣", "name": "Meal Name", "description": "Short 8-12 word description", "calories": 350 },
        "lunch": { "emoji": "🥗", "name": "Meal Name", "description": "Short 8-12 word description", "calories": 500 },
        "dinner": { "emoji": "🍝", "name": "Meal Name", "description": "Short 8-12 word description", "calories": 650 }
      }
    }
  ]
}

Requirements:
- Include all 7 days (Monday through Sunday)
- Each meal must have: emoji (single food emoji), name, description (8-12 words), calories (realistic estimate)
- Ensure variety across the week
- Respect the dietary preferences strictly
- Use realistic calorie counts`
}

function buildMealPrompt(day, mealType, preferences, currentMealName) {
  const prefText = preferences.length > 0
    ? `Dietary preferences: ${preferences.join(', ')}.`
    : 'No specific dietary preferences.'

  return `Generate a single replacement ${mealType} meal for ${day}.
${prefText}
The current meal is "${currentMealName}" — provide something different.

Return ONLY valid JSON (no markdown, no code fences):
{ "emoji": "🍳", "name": "Meal Name", "description": "Short 8-12 word description", "calories": 400 }

Requirements:
- Must be different from "${currentMealName}"
- Single food emoji
- Description 8-12 words
- Realistic calorie count
- Respect dietary preferences strictly`
}

app.post('/api/generate-plan', async (req, res) => {
  try {
    const { preferences = [] } = req.body

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [
        { role: 'user', content: buildPlanPrompt(preferences) }
      ],
    })

    const text = message.content[0].text
    const plan = JSON.parse(text)

    res.json(plan)
  } catch (error) {
    console.error('Error generating plan:', error)
    res.status(500).json({ error: 'Failed to generate meal plan' })
  }
})

app.post('/api/regenerate-meal', async (req, res) => {
  try {
    const { day, mealType, preferences = [], currentMealName } = req.body

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      messages: [
        { role: 'user', content: buildMealPrompt(day, mealType, preferences, currentMealName) }
      ],
    })

    const text = message.content[0].text
    const meal = JSON.parse(text)

    res.json(meal)
  } catch (error) {
    console.error('Error regenerating meal:', error)
    res.status(500).json({ error: 'Failed to regenerate meal' })
  }
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
