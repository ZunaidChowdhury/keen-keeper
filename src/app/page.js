import CssSpinner from "@/components/CssSpinner";
import Divider from "@/components/Divider";
import FriendList from "@/components/sections/FriendList";
import Hero from "@/components/sections/Hero";
import { Suspense } from "react";


//  text-lg text-text-primary font-semibold
export default function Home() {
  return (
    <div >
      <Hero />
      <Divider />
      <Suspense fallback={<CssSpinner />}>
        <FriendList />
      </Suspense>

    </div>
  );
}







        // <div className="max-w-277.5 mx-auto h-60 mb-20 flex items-center justify-center">
        //   {/* Loading... */}
        //   <Spinner />
        // </div>