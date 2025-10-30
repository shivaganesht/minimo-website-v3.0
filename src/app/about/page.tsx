export default function AboutPage() {
  return (
    <main className="relative max-w-6xl mx-auto px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_20%,black,transparent_80%)]">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[55rem] w-[55rem] rounded-full bg-[conic-gradient(at_30%_30%,#FFB74D_0deg,#FF9500_120deg,#FFF3E0_240deg,#FFB74D_360deg)] blur-3xl opacity-25" />
      </div>

      <header className="text-center">
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">About Minimo</h1>
        <p className="mt-2 opacity-80 max-w-2xl mx-auto">Minimo is a little wonderland where everyday style meets delightful surprises.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_0_1px_rgba(255,255,255,0.35)]">
          <h2 className="text-lg font-semibold">About Us</h2>

          <p className="mt-4 text-sm opacity-90">
            Minimo is a little wonderland where everyday style meets delightful surprises. Inspired by a love for
            minimal design and maximum happiness, our range covers everything cute from ladies’ bags and quirky stationery
            to cuddly soft toys and countless adorable must-haves.
          </p>

          <blockquote className="mt-6 text-center italic text-xl font-serif opacity-90 px-6">
            “a better life doesn’t have to be expensive”
          </blockquote>

          <p className="mt-6 text-sm opacity-90">
            Minimo curates high-quality, playful, and affordable treasures that make gifting or treating yourself a true joy.
            Whether you’re looking to spark creativity, add some fun to your day, or find that perfect accessory, Minimo is
            your happy place to explore.
          </p>

          <p className="mt-4 text-sm opacity-90">
            Step into the world of Minimo, where simplicity meets charm, happiness is found in the little things, and every
            day brings a new reason to smile.
          </p>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 h-fit">
          <h2 className="font-medium">Visit Us</h2>
          <p className="mt-2 text-sm opacity-80">582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076</p>
          <p className="mt-2 text-sm opacity-80">Mon–Sun · 11:00 AM – 8:00 PM</p>
          <a
            href="https://maps.google.com/?q=582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center mt-3 h-10 px-4 rounded-full bg-[#FF9500] text-white shadow-[0_16px_40px_-16px_rgba(255,149,0,0.9)] hover:-translate-y-0.5 transition"
          >
            Open in Maps
          </a>
        </aside>
      </section>
    </main>
  );
}