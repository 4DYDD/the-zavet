export default function MemoriesSection() {
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
        `}
      >
        <div
          className={`
            text-center
            mb-12
          `}
        >
          <h2
            className={`
              text-3xl md:text-5xl lg:text-6xl
              font-[family-name:var(--font-heading)]
              font-bold
              text-text_primary
              mb-4
            `}
          >
            Kenang-kenangan
          </h2>
          <p
            className={`
              text-base md:text-lg
              font-[family-name:var(--font-body)]
              text-text_primary
              opacity-80
            `}
          >
            Perjalanan dan Cerita Bersama
          </p>
        </div>

        {/* Timeline will be implemented here */}
        <div
          className={`
            relative
            border-l-2 border-primary
            pl-8
            space-y-8
          `}
        >
          {/* Timeline items placeholder */}
          <div
            className={`
              bg-main
              rounded-lg
              p-6
              relative
            `}
          >
            <div
              className={`
                absolute -left-10
                w-4 h-4
                bg-primary
                rounded-full
                border-4 border-light
              `}
            />
            <div
              className={`
                text-text_primary
                opacity-50
              `}
            >
              Memory Timeline Coming Soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
