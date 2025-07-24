"use client";

import { motion } from "framer-motion";
// ...existing code...

const students = [
  { name: "Faisal" },
  { name: "Jaya" },
  { name: "Nabiel" },
  { name: "Fateya" },
  { name: "Suta" },
  { name: "Adha" },
  { name: "Akbar" },
  { name: "Juna" },
  { name: "Zhohiri" },
  { name: "Azmi" },
  { name: "Faqih" },
  { name: "Fatih" },
  { name: "Daus" },
  { name: "Nabil" },
  { name: "Salim" },
  { name: "Rizky" },
  { name: "Rafly" },
  { name: "Dzaky" },
  { name: "Duan" },
  { name: "Rifqi" },
  { name: "Raghib" },
  { name: "Roihan" },
];

export default function Members() {
  return (
    <div className="min-h-screen bg-[#002e42] text-white py-16 px-4 flex flex-col items-center font-montserrat">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-4xl font-bold mb-2 text-center font-oswald tracking-wide"
      >
        zavetori<span className="text-[#5aceff]">yuun</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mb-8 text-[#5aceff] text-center text-lg font-semibold"
      >
        {students.map((s) => s.name).join(", ")}
      </motion.p>
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {students.map((student, idx) => (
            <motion.div
              key={student.name}
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.35, delay: idx * 0.05, type: "spring" }}
              className="bg-[#5aceff] justify-self-center rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 font-montserrat h-[18vw] max-h-[260px] w-full max-w-lg"
            >
              {/* IMAGE PLACEHOLDER: Uncomment below to use real image */}
              {/* <Image src={`/students/${student.name}.jpg`} alt={student.name} width={100} height={100} className="rounded-full mb-4" /> */}
              <div className="rounded-full bg-[#002e42] flex items-center justify-center mb-4 w-[6vw] h-[6vw] max-w-[90px] max-h-[90px]">
                {/* Placeholder for student image */}
                <span className="text-white text-2xl font-bold">{idx + 1}</span>
              </div>
              <span className="text-lg font-semibold text-[#002e42]">
                {student.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
