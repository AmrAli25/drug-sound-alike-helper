import { Pill, Shield } from "lucide-react";

export function Header() {
  return (
    <header className="py-6 px-4 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-glow">
            <Pill className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">DrugSafe</h1>
            <p className="text-xs text-muted-foreground">LASA Drug Checker</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-success" />
          <span>For Pharmacist Use</span>
        </div>
      </div>
    </header>
  );
}
