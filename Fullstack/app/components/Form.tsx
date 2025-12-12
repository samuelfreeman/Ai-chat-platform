import { sendMessage } from '../api/actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react';
import { useActionState } from 'react';
const initialState = {
    message: "",
    response: "",
}

const Form = ({ selectedModel }: { selectedModel: string }) => {
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const [state, formAction, pending] = useActionState(sendMessage, initialState)
    const [chat, setChat] = useState<{ role: string; content: string }[]>([]);
    useEffect(() => {
        if (!state) return;

        if (state.message) {
            setChat((prev) => [...prev, { role: "user", content: state.message ?? "" }]);
        }
        if (state.response) {
            setChat((prev) => [...prev, { role: "assistant", content: state.response }]);
        }
        bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [state]);
    return (
        <div className=' w-175 h-[70vh]  '>
            <div className="flex-1 overflow-y-auto  h-full space-y-4 p-4  rounded-lg  scroll-auto  items-end">
                {chat.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex  ${msg.role === "user" ? "justify-end " : "justify-start  "
                            }`}
                    >
                        <div
                            className={`max-w-[70%] p-3 rounded-xl text-sm shadow
                                ${msg.role === "user"
                                    ? "bg-gray-200 text-gray-900 border rounded-bl-none"
                                    : "bg-white text-black rounded-br-none"
                                }
                                `}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>
            <form action={formAction} className="flex">
                <Input type='hidden' name='model' value={selectedModel} /> 
                <Input type="text" placeholder="Enter your prompt" name="message" />
                <Button type="submit" variant="outline">
                    <Send />
                </Button>
            </form>
        </div>
    )
}

export default Form
