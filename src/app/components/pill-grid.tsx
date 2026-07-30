export default function PillGrid({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="rounded-2xl bg-surface ring-1 ring-brand/10 p-4 shadow-[0_10px_24px_-12px_rgba(91,58,41,0.25)]">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full text-sm bg-white/70 text-brand ring-1 ring-black/5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
