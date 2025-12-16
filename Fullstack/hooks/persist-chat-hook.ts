import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export type message = {
    role: "user" | "assistant"
    content: string;
}
export type ChatState = {
    messages: message[]
    addMessage: (msg: message) => void;
    clearMessages: () => void;
}


export const useChatStore = create(persist<ChatState>(
    (set) => ({
        messages: [],
        addMessage: (msg) =>
            set((state) => ({
                messages: [...state.messages, msg],
            })),
        clearMessages: () => set({ messages: [] }),
    }),
    {
        name: "chat-history",
    }
)
);