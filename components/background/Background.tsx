export default function Background() {
  return (
    <>
      {/* Main Gradient */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b 
          from-white via-[#FAFBFF] to-[#F5F3FF]
          dark:from-[#0a0a0a] dark:via-[#0f0f12] dark:to-[#15121f]
        "
      />

      {/* Blur */}
      <div className="absolute start-0 top-20 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute end-0 bottom-10 h-[450px] w-[450px] rounded-full bg-violet-300/10 dark:bg-violet-500/10 blur-[150px]" />

      {/* Circle */}
      <div className="absolute start-28 top-24 h-52 w-52 rounded-full border border-primary/10 dark:border-primary/20" />

      {/* Dots */}
      <div className="absolute end-24 bottom-20 grid grid-cols-6 gap-3 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>

      {/* Pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.03] dark:opacity-[0.05]
          [background-image:radial-gradient(#000_1px,transparent_1px)]
          dark:[background-image:radial-gradient(#fff_1px,transparent_1px)]
          [background-size:18px_18px]
        "
      />
    </>
  );
}