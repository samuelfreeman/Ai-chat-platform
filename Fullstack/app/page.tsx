import Image from "next/image";
import  {Send}from "lucide-react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendMessage } from "./actions";
export default function Home() {


   
  return (
    <div className="flex min-h-screen items-center p-5 justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="w-1/2  flex h-[70vh] items-end ">
      <form action={sendMessage}>
        <Input type="text" placeholder="Enter your prompt" name="message"/>
        <Button type="submit" variant="outline">
          <Send/>
        </Button>
      </form>

      </div>
    </div>
  );
}
