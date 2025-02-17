import cn from "../../utils/cn";

export const ProjectCard = ({ children, className }) => (
  <div className={cn("project-card bg-zinc-800 rounded-3xl p-8", className)}>
    {children}
  </div>
);
