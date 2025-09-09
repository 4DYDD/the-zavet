export default function SejarahSection() {
  return (
    <section
      // style={{ backgroundImage: "url(images/hero_image.jpg)" }}
      className={`
        min-h-screen w-full
        bg-cover bg-center
        relative
      `}
    >
      <div
        className={`
          relative
          min-h-screen w-full
        bg-black
          text-center
          px-4 md:px-8 py-16 md:py-24
        `}
      >
        {/* Floating elements will be added here */}
        <div
          className={`
            absolute 
            w-full h-full top-0 left-0
            pointer-events-none
            `}
        />
        <div
          className={`
          w-full max-w-5xl
          text-center
          px-4 md:px-8 py-16 md:py-24
          mx-auto
          `}
        >
          <h2
            className={`
            text-3xl md:text-5xl lg:text-6xl
            font-[family-name:var(--font-heading)]
            font-bold
            text-text_primary
            mb-8
          `}
          >
            Sejarah Zavetoria
          </h2>

          <div
            className={`
            text-base md:text-lg lg:text-3xl
            font-[family-name:var(--font-body)]
            text-text_primary
            opacity-90
            leading-relaxed
            space-y-6
          `}
          >
            <p className="text-justify last-line:text-center">
              Zavetoria, sebuah singkatan yang kemudian memiliki makna asli
              antara zaverin dan victoria, berasal dari bahasa turki, yang
              maknanya selaras dengan ambisi kami yaitu &ldquo;Laksana
              Kemenangan&rdquo;. 10 juli 2022, zaverin victoria terbentuk,
              beranggotakan 46 putra-putri paripurna yang akan menjawab
              tantangan zaman. Zavetoria Boys, keluarga tak sedarah yang terdiri
              dari 22 putra. keluarga seperjuangan menempuh pendidikan di MANPK
              Martapura. yang sekarang sudah berpencar menempuh pendidikan
              masing-masing demi mencapai impian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
