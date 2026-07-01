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
    <div className="mb-20 text-center">

      {/* Subtitle */}
      <span className="inline-block rounded-full bg-green-100 dark:bg-green-900 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-green-700 dark:text-green-300">
        {subtitle}
      </span>

      {/* Title */}
      <h2 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}

      {/* Decorative Line */}
      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-green-600 dark:bg-green-400"></div>

    </div>
  );
}