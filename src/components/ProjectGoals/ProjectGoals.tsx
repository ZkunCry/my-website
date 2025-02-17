type ProjectGoalsProps = {
  description?: string;
};
export const ProjectGoals: React.FC<ProjectGoalsProps> = ({ description }) => (
  <div>
    <h3 className="text-2xl font-bold mb-4">🎯 Goal</h3>
    <p className="opacity-90">{description}</p>
  </div>
);
