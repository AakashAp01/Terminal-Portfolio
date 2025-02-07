import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
    // General Motivational Quotes
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Do what you love and you'll never work a day in your life. – Confucius",

    // Bhagavad Gita Quotes
    "You have the right to perform your duty, but never to the fruits of your work. – Bhagavad Gita 2.47",
    "Change is the law of the universe. You can be a millionaire or a pauper in an instant. – Bhagavad Gita",
    "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. Because each person is his own friend or enemy. – Bhagavad Gita 6.5",
    "Set thy heart upon thy work, but never on its reward. – Bhagavad Gita",
    "The soul is neither born, and nor does it die. – Bhagavad Gita",
    "There is neither this world nor the world beyond nor happiness for the one who doubts. – Bhagavad Gita 4.40",
    "Man is made by his belief. As he believes, so he is. – Bhagavad Gita",

    // Inspirational Quotes About India 🇮🇳
    "The power of the youth is the common wealth for the entire world. – Dr. A.P.J. Abdul Kalam",
    "A nation's culture resides in the hearts and in the soul of its people. – Mahatma Gandhi",
    "India is not a country, but a home for many cultures and traditions. – Radhanath Swami",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    "The world’s biggest power is the youth and beauty of a woman. – Chanakya",
    "We are not just a nation, we are a civilization. – Narendra Modi",
    "The true measure of any society can be found in how it treats its most vulnerable members. – Mahatma Gandhi",
    "Arise, awake, and stop not till the goal is reached. – Swami Vivekananda",
    "Strength is life, weakness is death. Expansion is life, contraction is death. Love is life, hatred is death. – Swami Vivekananda",
    "India is a land of great diversity but even greater unity. – Sardar Patel",
];


// Available Colors (excluding black)
const colors = [
    "text-green-400", "text-green-500", "text-green-600",
    "text-red-400", "text-red-500", "text-red-600",
    "text-yellow-400", "text-yellow-500", "text-yellow-600",
    "text-blue-400", "text-blue-500", "text-blue-600",
    "text-purple-400", "text-purple-500", "text-purple-600",
    "text-pink-400", "text-pink-500", "text-pink-600",
    "text-orange-400", "text-orange-500", "text-orange-600",
    "text-teal-400", "text-teal-500", "text-teal-600",
    "text-cyan-400", "text-cyan-500", "text-cyan-600",
    "text-emerald-400", "text-emerald-500", "text-emerald-600",
    "text-indigo-400", "text-indigo-500", "text-indigo-600",
    "text-lime-400", "text-lime-500", "text-lime-600",
    "text-rose-400", "text-rose-500", "text-rose-600"
];

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

