import { motion } from "framer-motion";

export default function Animate({ text = "This is animated text." }) {
  const colors = [
    "#FF5733", "#FF8C00", "#FFD700", "#008000", "#0000FF", "#800080",
    "#FF4500", "#32CD32", "#1E90FF", "#9400D3", "#DC143C", "#00CED1",
    "#FFD700", "#4682B4", "#FF69B4"
  ];

  const maxCharsPerLine = 10;
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length <= maxCharsPerLine) {
      currentLine += (currentLine ? " " : "") + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);

  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 600 ${lines.length * 80}`}
        className="w-full h-auto"
      >
        {lines.map((line, lineIndex) =>
          line.split("").map((char, index) => (
            <motion.text
              key={`${lineIndex}-${index}`}
              x={`${5 + index * 6}%`}
              y={`${(lineIndex + 1) * 50}`}
              textAnchor="middle"
              fontSize="30"
              fontWeight="bold"
              stroke={colors[(index + lineIndex) % colors.length]}
              strokeWidth="1"
              fill="none"
              initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 3 + index * 0.2,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.text>
          ))
        )}
      </svg>
    </div>
  );
}
