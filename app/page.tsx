"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#002e42] font-sans">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center justify-center py-16 px-4"
        style={{
          background: "linear-gradient(90deg, #002e42 0%, #5aceff 100%)",
        }}
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg mb-4 text-center"
        >
          Zavetoria Yearbook
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl text-white/80 max-w-2xl text-center mb-8"
        >
          Laksana Kemenangan
        </motion.p>
        {/* <Image src="/zavetoria-hero.jpg" alt="Zavetoria" width={320} height={180} /> */}
        <div className="w-64 h-40 rounded-xl bg-[#5aceff] flex items-center justify-center shadow-lg mb-4">
          {/* Hero image placeholder */}
          <span className="text-white text-2xl font-bold">Zavetoria</span>
        </div>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="max-w-3xl w-full px-6 py-10"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#002e42]">
          Sejarah Zavetoria
        </h2>
        <p className="text-lg mb-4 text-[#002e42]">
          Zavetoria, sebuah singkatan yang kemudian memiliki makna asli antara
          zaverin dan victoria, berasal dari bahasa turki, yang maknanya selaras
          dengan ambisi kami yaitu &quot;Laksana Kemenangan&quot;. 10 juli 2022,
          zaverin victoria terbentuk, beranggotakan 46 putra-putri paripurna
          yang akan menjawab tantangan zaman.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-[#002e42]">
          Zavetoria Boys
        </h3>
        <p className="text-lg text-[#002e42]">
          Keluarga tak sedarah yang terdiri dari 22 putra. Keluarga seperjuangan
          menempuh pendidikan di MANPK Martapura. Yang sekarang sudah berpencar
          menempuh pendidikan masing-masing demi mencapai impian.
        </p>
      </motion.section>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full py-6 flex items-center justify-center bg-[#002e42] text-white mt-auto"
      >
        <span className="text-center">© 2025 Zavetoria Yearbook</span>
      </motion.footer>
    </div>
  );
}
