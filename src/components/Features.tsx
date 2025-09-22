// src/components/Features.tsx
import { Sparkles } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Everything you need, all in one place</h2>
        <p className="mt-2 opacity-70">From toys to trending products, cosmetics to daily essentials—discover our diverse collection.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Toys & Games",
            desc: "Fun and engaging toys for kids of all ages, from educational to entertainment.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M5 4h14a1 1 0 0 1 1 1v8.5a4.5 4.5 0 0 1-4.5 4.5H9A5 5 0 0 1 4 13V5a1 1 0 0 1 1-1Z"/></svg>
            )
          },
          {
            title: "Viral Products",
            desc: "Trending items and viral products that everyone's talking about.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"/></svg>
            )
          },
          {
            title: "Beauty & Cosmetics",
            desc: "Quality cosmetics and beauty products for your daily routine.",
            icon: (
              <Sparkles className="h-6 w-6" />
            )
          },
          {
            title: "Home & Lifestyle",
            desc: "Décor, bags, stationery, and daily essentials for modern living.",
            icon: (
              <svg viewBox="0 0 24 24" className="h-6 w-6"><path fill="currentColor" d="M3 6h18v10H3zM7 18h10v2H7z"/></svg>
            )
          },
        ].map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-5 shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_20px_80px_-30px_rgba(255,149,0,0.45)] hover:shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_30px_120px_-30px_rgba(255,149,0,0.55)] transition duration-300 will-change-transform hover:-translate-y-0.5"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB74D]/20 to-[#FF9500]/20 text-foreground shadow-inner">
              {f.icon}
            </div>
            <h3 className="mt-3 font-medium">{f.title}</h3>
            <p className="mt-1 text-sm opacity-70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};