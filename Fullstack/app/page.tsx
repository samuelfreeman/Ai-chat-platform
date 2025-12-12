"use client"
import Form from "./components/Form";
import { useEffect, useState } from "react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { fetchModels } from "./api/actions";

export default function Home() {
  const [models, setModel] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("");
  useEffect( () => {
    async function loadModels() {
      const data = await fetchModels();
      setModel(data.models.map(m => m.name));

    }
    loadModels();
  },[])


  return (
    <div className="flex flex-col h-full items-center  justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-5 w-1/2 flex justify-end">
        <NativeSelect onChange={(e)=>setSelectedModel(e.target.value)}>
          <NativeSelectOption value="">Select Model</NativeSelectOption>
          {models?.map((model: any) => (
            <NativeSelectOption key={model} value={model}>
              {model}
            </NativeSelectOption>
          ))}
          
        </NativeSelect>
      </div>
      <Form selectedModel={selectedModel}/>
    </div>
  );
}
