import Divider from "@/components/Divider";
import FriendList from "@/components/sections/FriendList";
import Hero from "@/components/sections/Hero";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Divider />
      <Suspense fallback={<div className="max-w-277.5 mx-auto h-60 mb-20 flex items-center justify-center text-lg text-text-primary font-semibold">
        Loading...
      </div>}>
        <FriendList />
      </Suspense>
    </div>
  );
}
