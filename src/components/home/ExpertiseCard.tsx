import { expertise } from "@/data/expertise";
import { BentoCard, Chip } from "./BentoCard";

const ExpertiseCard = ({ className }: { className?: string }) => (
  <BentoCard title="Expertise" className={className} bodyClassName="bento:overflow-y-auto">
    <dl className="space-y-3 bento:space-y-2.5">
      {expertise.map((group) => (
        <div key={group.label}>
          <dt className="mb-1.5 text-xs font-medium text-muted-foreground">{group.label}</dt>
          <dd className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </BentoCard>
);

export default ExpertiseCard;
