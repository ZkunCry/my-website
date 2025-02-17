export type Achieve = {
  text?: string;
};
type ProjectAchievementsProps = {
  achieve: Achieve[];
};
export const ProjectAchievements: React.FC<ProjectAchievementsProps> = ({
  achieve,
}) => (
  <div>
    <h3 className="text-2xl font-bold mb-4">🚀 Достижения</h3>
    <ul className="list-disc pl-6 opacity-90">
      {achieve &&
        achieve.map((item, index) => <li key={index}>{item.text}</li>)}
    </ul>
  </div>
);
