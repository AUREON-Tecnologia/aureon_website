interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
