import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
    return (
        <section className="w-full flex items-center justify-center my-20">
            <div className="w-[85%] min-h-[80vh] relative">
                <Image src="/Video card.png" alt="video" layout="fill" className="w-full h-full object-cover rounded-2xl" quality={100} />
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="p-6 rounded-full text-white text-center bg-[#23A6F0]">
                        <FaPlay size={30}/>
                    </div>
                </div>
            </div>
        </section>
    );
};