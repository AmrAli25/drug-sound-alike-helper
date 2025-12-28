import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { DrugCard } from "@/components/DrugCard";
import { LookAlikeSection } from "@/components/LookAlikeSection";
import { EmptyState } from "@/components/EmptyState";
import { Drug, searchDrugs } from "@/data/drugs";

const Index = () => {
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleExampleClick = (drugName: string) => {
    const results = searchDrugs(drugName);
    if (results.length > 0) {
      setSelectedDrug(results[0]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Identify Look-Alike,{" "}
            <span className="text-primary">Sound-Alike Drugs</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reduce medication errors by quickly identifying LASA drugs and understanding their
            differences in usage and indications.
          </p>
        </div>

        {/* Search Bar */}
        <div ref={searchRef} className="mb-12">
          <SearchBar onSelectDrug={setSelectedDrug} />
        </div>

        {/* Results or Empty State */}
        {selectedDrug ? (
          <div className="space-y-8">
            {/* Selected Drug Card */}
            <section>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Selected Drug
              </p>
              <DrugCard drug={selectedDrug} isMain />
            </section>

            {/* Look-Alike Drugs */}
            <LookAlikeSection drug={selectedDrug} />

            {/* Back Button */}
            <div className="text-center pt-8">
              <button
                onClick={() => setSelectedDrug(null)}
                className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                Search Another Drug
              </button>
            </div>
          </div>
        ) : (
          <EmptyState onExampleClick={handleExampleClick} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            DrugSafe LASA Checker — For professional pharmacist use only. Always verify with
            official drug references.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
