import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { searchDrugs, Drug } from "@/data/drugs";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSelectDrug: (drug: Drug) => void;
}

export function SearchBar({ onSelectDrug }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Drug[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchDrugs(query);
      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleSelect = (drug: Drug) => {
    onSelectDrug(drug);
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center">
          <Search className="absolute left-5 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
            placeholder="Search for a drug name (e.g., Celebrex, Metformin...)"
            className={cn(
              "w-full h-14 pl-14 pr-12 rounded-2xl",
              "bg-card border-2 border-border",
              "text-foreground placeholder:text-muted-foreground",
              "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10",
              "transition-all duration-300",
              "text-lg font-medium shadow-card"
            )}
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-5 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 rounded-xl bg-card border border-border shadow-card-hover overflow-hidden animate-fade-in">
          {results.map((drug, index) => (
            <button
              key={drug.id}
              onClick={() => handleSelect(drug)}
              className={cn(
                "w-full px-5 py-4 text-left flex items-start gap-4",
                "hover:bg-secondary/50 transition-colors",
                selectedIndex === index && "bg-secondary/50"
              )}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{drug.name}</span>
                  <span className="text-sm text-muted-foreground">({drug.genericName})</span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{drug.category}</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {drug.usage}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
