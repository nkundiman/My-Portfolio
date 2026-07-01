type Props = {
  title: string;
  subtitle: string;
  description?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  description,
}: Props) {
  return (
    <div className="text-center mb-20">

      <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold uppercase tracking-widest text-sm">
        {subtitle}
      </span>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}

      <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mt-8"></div>

    </div>
  );
}