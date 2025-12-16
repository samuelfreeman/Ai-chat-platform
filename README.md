# AI Chat Platform

A full-stack AI chat application built with Next.js, featuring local AI model integration via Ollama, persistent chat history, and image upload capabilities.

## Features

- **Multi-Model Support**: Choose from various AI models available through Ollama
- **Persistent Chat History**: Conversations are saved locally using Zustand state management
- **Automatic Title Generation**: AI-generated concise titles for each chat session
- **Image Upload**: Support for uploading images to include in conversations
- **Responsive UI**: Modern interface built with Tailwind CSS and Radix UI components
- **Real-time Chat**: Smooth scrolling chat interface with user and assistant message bubbles

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: Zustand with persistence
- **AI Integration**: Ollama for local AI model access
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- Ollama installed and running locally
- At least one AI model pulled in Ollama (e.g., `ollama pull llama2`)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/samuelfreeman/Ai-chat-platform.git
   cd Ai-chat-platform/Fullstack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Select an AI model from the dropdown in the top-right corner
2. Start chatting by typing messages in the input field
3. Upload images using the plus button next to the input field
4. Chat history is automatically saved and titled
5. Delete individual chats using the trash icon next to the chat title
