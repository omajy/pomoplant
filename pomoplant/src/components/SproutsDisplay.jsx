import { useEffect } from "react";

export default function SproutsDisplay({ sprouts, setSprouts }) {
    useEffect(() => {
        const sproutsInterval = setInterval(() => {
            setSprouts(prev => prev + 1);
        }, 10000);

        return () => clearInterval(sproutsInterval);
    }, [setSprouts]);

    return (
        <div className="absolute top-4 right-4 bg-white text-green-800 px-4 py-2 rounded shadow font-mono">
            🌱 {sprouts}
        </div>
    );
}