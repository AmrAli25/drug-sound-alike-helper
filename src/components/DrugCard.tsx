import { Drug } from "@/data/drugs";
import { AlertTriangle, Pill, FileText, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrugCardProps {
  drug: Drug;
  isMain?: boolean;
  showWarning?: boolean;
}

export function DrugCard({ drug, isMain = false, showWarning = false }: DrugCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden transition-all duration-300",
        isMain
          ? "bg-card border-2 border-primary/30 shadow-lg shadow-primary/10"
          : "bg-card border border-border shadow-card hover:shadow-card-hover hover:border-accent/30",
        "animate-slide-up"
      )}
      style={{ animationDelay: isMain ? "0ms" : "100ms" }}
    >
      {/* Warning Banner for Look-Alike */}
      {showWarning && (
        <div className="gradient-warning px-4 py-2 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium text-accent-foreground">
            Sound-alike drug — Different usage!
          </span>
        </div>
      )}

      {/* Header */}
      <div className={cn("px-6 pt-6 pb-4", isMain && "gradient-hero")}>
        <div className="flex items-start justify-between">
          <div>
            <h3
              className={cn(
                "text-2xl font-bold",
                isMain ? "text-primary-foreground" : "text-foreground"
              )}
            >
              {drug.name}
            </h3>
            <p
              className={cn(
                "text-sm mt-1",
                isMain ? "text-primary-foreground/80" : "text-muted-foreground"
              )}
            >
              {drug.genericName}
            </p>
          </div>
          <span
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium",
              isMain
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-primary/10 text-primary"
            )}
          >
            {drug.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-5">
        {/* Usage Badge */}
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center",
              isMain ? "bg-primary/10" : "bg-accent/10"
            )}
          >
            <Pill className={cn("w-5 h-5", isMain ? "text-primary" : "text-accent")} />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Primary Use
            </p>
            <p className="text-lg font-semibold text-foreground">{drug.usage}</p>
          </div>
        </div>

        {/* Description */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
              Description
            </p>
            <p className="text-sm text-foreground leading-relaxed">{drug.description}</p>
          </div>
        </div>

        {/* Dosage Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-secondary/50">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Dosage Form
            </p>
            <p className="text-sm font-medium text-foreground mt-1">{drug.dosageForm}</p>
          </div>
          <div className="p-3 rounded-xl bg-secondary/50">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Common Dosage
            </p>
            <p className="text-sm font-medium text-foreground mt-1">{drug.commonDosage}</p>
          </div>
        </div>

        {/* Warnings */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-warning" />
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Key Warnings
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {drug.warnings.map((warning, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-warning/10 text-warning border border-warning/20"
              >
                {warning}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
