interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{heading}</h2>
      {subheading && <p className="text-slate-500 text-lg">{subheading}</p>}
    </div>
  );
}
