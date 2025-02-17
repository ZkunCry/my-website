export const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-zinc-700 p-6 rounded-xl">
    <h3 className="text-xl font-bold mb-4">
      {icon} {title}
    </h3>
    <p className="opacity-90">{description}</p>
  </div>
);

export const KeyFeatures = ({ features }) => (
  <div className="grid md:grid-cols-2 gap-8">
    {features.map((feature, index) => (
      <FeatureCard key={index} {...feature} />
    ))}
  </div>
);
