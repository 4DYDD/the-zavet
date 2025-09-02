export default function SejarahSection() {
  return (
    <section
      className={`
        min-h-screen
        bg-light
        py-16 md:py-24
        px-4 md:px-8
      `}
    >
      <div
        className={`
          max-w-6xl 
          mx-auto
          text-center
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
            text-base md:text-lg
            font-[family-name:var(--font-body)]
            text-text_primary
            opacity-90
            leading-relaxed
            space-y-6
          `}
        >
          <p>
            Zavetoria, sebuah singkatan yang kemudian memiliki makna asli antara
            zaverin dan victoria, berasal dari bahasa turki, yang maknanya
            selaras dengan ambisi kami yaitu &ldquo;Laksana Kemenangan&rdquo;.
          </p>

          <p>
            10 juli 2022, zaverin victoria terbentuk, beranggotakan 46
            putra-putri paripurna yang akan menjawab tantangan zaman.
          </p>

          <p>
            Zavetoria Boys, keluarga tak sedarah yang terdiri dari 22 putra.
            keluarga seperjuangan menempuh pendidikan di MANPK Martapura. yang
            sekarang sudah berpencar menempuh pendidikan masing-masing demi
            mencapai impian.
          </p>
        </div>
      </div>
    </section>
  );
}
