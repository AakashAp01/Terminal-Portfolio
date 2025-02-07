import { motion } from "framer-motion";
import resume from "../assets/Aakash_Prajapati_Resume.pdf"


export default function Resume() {
    return (
        <>
            <div className="text-white">
                <p className="text-white">Click the links below to view or download the resume:</p>

                <div className="mt-2 space-x-4">

                    <motion.a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-500 underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        View
                    </motion.a>

                    <motion.a
                        href={resume}
                        download="Aakash_Prajapati_Resume.pdf"
                        className="text-green-400 hover:text-green-500 underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        Download
                    </motion.a>
                </div>
            </div>

        </>
    )

}