export default function MembersSection() {
  return (
    <section
      className={`
        min-h-screen
        bg-main
        py-16 md:py-24
        px-4 md:px-8
      `}
    >
      <div
        className={`
          max-w-7xl 
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
            Zavetoria Boys
          </h2>
          <p
            className={`
              text-base md:text-lg
              font-[family-name:var(--font-body)]
              text-text_primary
              opacity-80
            `}
          >
            22 Putra Alumni MANPK Martapura
          </p>
        </div>

        {/* Member grid will be implemented here */}
        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-6 md:gap-8
          `}
        >
          {/* Member cards will be mapped here */}
          <div
            className={`
              bg-light
              rounded-lg
              p-6
              text-center
              h-64
              flex items-center justify-center
              text-text_primary
              opacity-50
            `}
          >
            Member Cards Coming Soon...
          </div>
        </div>
      </div>
    </section>
  );
}
