import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-red-500'>Hello world</h1>
      <Button variant='outline'>Hello!</Button>
    </main>
  );
}
