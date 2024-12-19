import { FaCheckCircle } from "react-icons/fa";

export default function UnorderedItem({name, color}: {color: string; name: string;}) {
    return (
        <div className="flex items-center gap-3">
            <FaCheckCircle color={color} size={30} className="bg-white rounded-full" />
            <p className="text-sm">{name}</p>
        </div>
    );
};