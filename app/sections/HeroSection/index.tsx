export default function HeroSection() {
  return (
    <section
      className={`
        min-h-screen
        bg-main
        flex items-center justify-center
        relative overflow-hidden
      `}
    >
      <div
        className={`
          text-center 
          z-10
        `}
      >
        <h1
          className={`
            text-4xl md:text-6xl lg:text-8xl
            font-[family-name:var(--font-heading)]
            font-bold
            text-text_primary
            mb-4
          `}
        >
          Zavetoria
        </h1>
        <p
          className={`
            text-lg md:text-xl lg:text-2xl
            font-[family-name:var(--font-body)]
            text-text_primary
            opacity-80
          `}
        >
          Laksana Kemenangan
        </p>
      </div>

      {/* Floating elements will be added here */}
      <div
        className={`
          absolute inset-0
          pointer-events-none
        `}
      >
        {/* Background decorations placeholder */}
      </div>
    </section>
  );
}
