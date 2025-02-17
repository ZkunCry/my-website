type Technologie = {
  icon: string;
  name: string;
};
type TechnologiesListProps = {
  technologies: Technologie[];
};
export const TechnologiesList: React.FC<TechnologiesListProps> = ({
  technologies,
}) => (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
    {technologies.map((tech, index) => (
      <img
        key={index}
        src={tech.icon}
        className="tech-icon h-16 w-16 mx-auto"
        alt={tech.name}
      />
    ))}
  </div>
);
