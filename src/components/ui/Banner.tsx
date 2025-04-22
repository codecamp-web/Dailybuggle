
import scrablog from "@/imgs/gesture.jpg"
import Image from "next/image"
import{ Button }from "./button"


const Banner = () => {

   return (
<section className="py-5 dark:bg-gray-900 dark:text-white bg-gray-100">
    <div className=" grid grid-cols-1 md:grid-cols-2 
        gap-8 px-4 sm:px-6 lg:px-8 items-center py-5">
        <div className="w-full">
                <Image src={scrablog} alt="Banner img" placeholder="blur" 
                className="w-[500px] object-cover rounded-md" />
        </div>
        <div className="flex flex-col space-y-4">
            <h4 className="text-md font-semibold text-green-500">
                Technology
            </h4>
            <h2 className="text-lg font-bold ">At Ondo AI, we are redefining the 
                intersection of intelligence and 
                innovation. Built on a foundation of cutting-edge research and robust 
                engineering
            </h2>
            <p className="text-sm">
            Ondo AI delivers scalable artificial intelligence solutions designed for modern businesses.
Our name — Ondo — signifies harmony, precision, and forward momentum. We believe that 
AI should be more than just smart — it should be seamlessly integrated, intuitive to
use, and built to solve real-world challenges. <br />
From advanced language models to intelligent automation, our platform empowers organizations to unlock deeper insights,
streamline operations, and drive sustainable growth. We partner with forward-thinking
teams to bring transformative AI capabilities into their core processes — securely, 
reliably, and efficiently. At Ondo AI, we don’t just follow trends — we shape the future.
            </p>

            <Button>Read more</Button>
        </div>
    </div>
</section>
  )
}
 
export default Banner
