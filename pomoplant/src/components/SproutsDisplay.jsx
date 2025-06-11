import { useEffect } from "react";

export default function SproutsDisplay({ sprouts}) {
    return (
        <div className="bg-white text-green-800 px-4 py-2 rounded shadow font-mono w-32 text-center">
            🌱 {sprouts}
        </div>
    );
}