# AI Chat Platform Frontend

This is the frontend component of the AI Chat Platform, a Next.js application that provides a chat interface for interacting with local AI models via Ollama.

## Getting Started

First, ensure Ollama is installed and running with at least one model:

```bash
# Install Ollama (if not already installed)
# Visit https://ollama.ai for installation instructions

# Pull a model (example)
ollama pull llama2
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Real-time chat with AI models
- Model selection from available Ollama models
- Image upload support for multimodal conversations
- Persistent chat history with automatic title generation
- Responsive design with modern UI components

## Tech Stack

- Next.js 16 with App Router
- React 19 with TypeScript
- Tailwind CSS for styling
- Radix UI for accessible components
- Zustand for state management
- Ollama for AI model integration

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
