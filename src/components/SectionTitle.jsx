function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-4 text-sm font-semibold uppercase tracking-[0.24em] ${
          light ? 'text-sand' : 'text-pine-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-8 sm:text-lg ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle
