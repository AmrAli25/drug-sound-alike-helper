import { Drug, getLookAlikeDrugs } from "@/data/drugs";
import { DrugCard } from "./DrugCard";
import { AlertCircle } from "lucide-react";

interface LookAlikeSectionProps {
  drug: Drug;
}

export function LookAlikeSection({ drug }: LookAlikeSectionProps) {
  const lookAlikes = getLookAlikeDrugs(drug);

  if (lookAlikes.length === 0) return null;

  return (
    <section className="mt-12 animate-slide-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Look-Alike Drugs</h2>
          <p className="text-muted-foreground">
            These drugs sound similar to <span className="font-semibold">{drug.name}</span> but
            have different uses
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lookAlikes.map((lookAlike, index) => (
          <div
            key={lookAlike.id}
            className="animate-slide-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <DrugCard drug={lookAlike} showWarning />
          </div>
        ))}
      </div>
    </section>
  );
}
