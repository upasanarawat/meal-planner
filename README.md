# Mise en Place

A weekly meal planner powered by Claude AI. Generate personalized 7-day meal plans based on your dietary preferences.

## Setup

```bash
npm install
cp .env.example .env
# Add your Anthropic API key to .env
```

## Development

```bash
npm run dev
```

This starts both the Vite dev server (port 5173) and the Express API server (port 3001).

## Features

- 7-day meal plan grid (Mon–Sun) with breakfast, lunch, and dinner
- Dietary preference filters (vegetarian, vegan, keto, gluten-free, etc.)
- AI-generated meals with emoji, name, description, and calorie estimates
- Regenerate individual meals with one click
- Daily and weekly calorie totals
- Today's column highlighted

## Stack

- **Frontend**: React + Vite
- **Backend**: Express
- **AI**: Anthropic Claude API
