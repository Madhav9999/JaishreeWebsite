import { CountUp } from "./Reveal";

export function Stats() {
  return (
    <section className="py-20 text-white" style={{ background: "var(--gradient-navy)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <Big value={<><CountUp end={20} />+</>} label="Years of Experience" />
        <Big value={<><CountUp end={300} />+</>} label="Satisfied Clients" />
        <Big value={<><CountUp end={10000} />+</>} label="Successful Deliveries" />
        <Big value={<>2</>} label="Trusted Business Divisions" />
      </div>
    </section>
  );
}

function Big({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-5xl sm:text-6xl text-orange mb-2">{value}</div>
      <div className="text-white/80 text-sm sm:text-base">{label}</div>
    </div>
  );
}
