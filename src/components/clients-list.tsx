import Image from "next/image";

export default function ClientsList() {
    return (
        <section className="w-full my-5 flex items-center justify-center bg-[#FAFAFA] py-20">
            <div className="w-[85%] flex flex-col md:flex-row justify-between items-center gap-5">
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
                <Image src="/logo.png" width={103} height={100} alt="Logo" />
            </div>
        </section>
    );
};