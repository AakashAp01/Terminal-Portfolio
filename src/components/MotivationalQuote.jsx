import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {quotes, colors } from '../assets/data';

export default function MotivationalQuote() {
    const [quote, setQuote] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        // Pick a random quote and color
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, []);

    return (
        <div className="p-4 rounded-lg bg-transparent mx-auto">
            <motion.p
                className={`text-lg font-semibold italic ${color}`}
                key={quote}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                "{quote}"
            </motion.p>
        </div>
    );
}

