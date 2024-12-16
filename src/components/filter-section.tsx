import { TfiMenuAlt } from "react-icons/tfi";
import { AiFillAppstore } from "react-icons/ai";
import { Button } from "./ui/button";

export default function FilterSection() {
    return (
        <section className="w-full my-5 flex items-center justify-center">
            <div className="w-[85%] flex flex-col gap-5 md:flex-row justify-between items-center text-[#737373] font-bold">
                <p>Showing all 12 results</p>
                <div className="flex items-center justify-between gap-3">
                    <h6>Views:</h6>
                    <div className="p-3 text-xl border rounded-sm">
                        <AiFillAppstore color="black" />
                    </div>
                    <div className="p-3 text-xl border rounded-sm">
                        <TfiMenuAlt />
                    </div>
                </div>
                <div className="flex gap-2 items-center font-normal text-sm">
                    <select name="filter" id="" className="h-12 outline-none border rounded-md bg-[#DDDDDD] text-sm font-medium">
                        <option value="popularity">Popularity</option>
                        <option value="popularity">Popularity Mean</option>
                        <option value="popularity">Popularity</option>
                        <option value="popularity">Popularity</option>
                    </select>
                    <Button variant="blue" className="px-6 h-12">Filter</Button>
                </div>
            </div>
        </section>
    );
};