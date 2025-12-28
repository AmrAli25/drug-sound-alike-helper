import { Search, AlertTriangle, Pill, ArrowRight } from "lucide-react";

const exampleDrugs = [
  { name: "Celebrex", lookAlike: "Celexa" },
  { name: "Lamictal", lookAlike: "Lamisil" },
  { name: "Metformin", lookAlike: "Metronidazole" },
];

interface EmptyStateProps {
  onExampleClick: (drugName: string) => void;
}

export function EmptyState({ onExampleClick }: EmptyStateProps) {
  return (
    <div className="text-center py-16 animate-fade-in">
      <div className="w-20 h-20 rounded-3xl gradient-hero mx-auto flex items-center justify-center shadow-glow mb-6">
        <Pill className="w-10 h-10 text-primary-foreground" />
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-3">
        Search for a Drug
      </h2>
      <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
        Type a drug name to see its details and identify similar-sounding medications that could be
        confused.
      </p>

      {/* How it works */}
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
        <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
          <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto flex items-center justify-center mb-3">
            <Search className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Search</h3>
          <p className="text-sm text-muted-foreground">
            Enter a drug name in the search bar
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
          <div className="w-12 h-12 rounded-xl bg-accent/10 mx-auto flex items-center justify-center mb-3">
            <AlertTriangle className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Identify</h3>
          <p className="text-sm text-muted-foreground">
            View look-alike drugs that sound similar
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
          <div className="w-12 h-12 rounded-xl bg-success/10 mx-auto flex items-center justify-center mb-3">
            <Pill className="w-6 h-6 text-success" />
          </div>
          <h3 className="font-semibold text-foreground mb-1">Compare</h3>
          <p className="text-sm text-muted-foreground">
            Review usage differences to prevent errors
          </p>
        </div>
      </div>

      {/* Example Searches */}
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-4">Try these examples:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {exampleDrugs.map((example) => (
            <button
              key={example.name}
              onClick={() => onExampleClick(example.name)}
              className="group px-5 py-3 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
            >
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {example.name}
              </span>
              <span className="text-muted-foreground mx-2">
                <ArrowRight className="w-4 h-4 inline" />
              </span>
              <span className="text-accent font-medium">{example.lookAlike}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
