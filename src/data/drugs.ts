export interface Drug {
  id: string;
  name: string;
  genericName: string;
  category: string;
  usage: string;
  description: string;
  dosageForm: string;
  commonDosage: string;
  warnings: string[];
  lookAlikeIds: string[];
  isHighAlert?: boolean;
  antidote?: string;
  wrongDrugAction?: string;
}

export const drugs: Drug[] = [
  // Celebrex vs Celexa
  {
    id: "celebrex",
    name: "Celebrex",
    genericName: "Celecoxib",
    category: "NSAID (COX-2 Inhibitor)",
    usage: "Pain and inflammation",
    description: "Used to treat pain and inflammation caused by arthritis, ankylosing spondylitis, and menstrual pain. Works by reducing hormones that cause inflammation and pain.",
    dosageForm: "Capsule",
    commonDosage: "100-200mg twice daily",
    warnings: ["Cardiovascular risk", "GI bleeding risk", "Avoid in sulfa allergy"],
    lookAlikeIds: ["celexa", "cerebyx"],
    wrongDrugAction: "Monitor for GI bleeding, cardiovascular events. Administer PPI if GI upset occurs. Supportive care and hydration.",
  },
  {
    id: "celexa",
    name: "Celexa",
    genericName: "Citalopram",
    category: "SSRI Antidepressant",
    usage: "Depression",
    description: "Selective serotonin reuptake inhibitor used to treat major depressive disorder. Helps restore the balance of serotonin in the brain.",
    dosageForm: "Tablet/Solution",
    commonDosage: "20-40mg once daily",
    warnings: ["QT prolongation", "Serotonin syndrome risk", "Suicidal thoughts warning"],
    lookAlikeIds: ["celebrex", "zyprexa"],
    isHighAlert: true,
    antidote: "Cyproheptadine for serotonin syndrome (4-8mg initially, then 2mg q2h). Benzodiazepines for agitation.",
    wrongDrugAction: "Monitor ECG for QT prolongation. Watch for serotonin syndrome signs. Activated charcoal within 1 hour if large dose.",
  },
  {
    id: "cerebyx",
    name: "Cerebyx",
    genericName: "Fosphenytoin",
    category: "Anticonvulsant",
    usage: "Seizures",
    description: "Used for short-term treatment of generalized convulsive status epilepticus and prevention of seizures during neurosurgery.",
    dosageForm: "Injection",
    commonDosage: "10-20mg PE/kg IV",
    warnings: ["Cardiovascular depression", "Purple glove syndrome", "Hypotension"],
    lookAlikeIds: ["celebrex"],
    isHighAlert: true,
    antidote: "No specific antidote. Supportive care with IV fluids for hypotension. Consider hemodialysis for severe toxicity.",
    wrongDrugAction: "Stop infusion immediately. Monitor BP, HR, ECG continuously. Treat hypotension with fluids/vasopressors.",
  },

  // Zantac vs Zyrtec vs Xanax
  {
    id: "zantac",
    name: "Zantac",
    genericName: "Ranitidine",
    category: "H2 Blocker",
    usage: "Acid reflux/GERD",
    description: "Reduces stomach acid production. Used to treat and prevent ulcers, GERD, and conditions where the stomach produces too much acid.",
    dosageForm: "Tablet/Syrup",
    commonDosage: "150mg twice daily",
    warnings: ["Discontinued in many markets", "NDMA contamination concerns"],
    lookAlikeIds: ["zyrtec", "xanax", "zocor"],
    wrongDrugAction: "Generally safe single dose. Monitor for CNS effects (confusion, headache). Supportive care.",
  },
  {
    id: "zyrtec",
    name: "Zyrtec",
    genericName: "Cetirizine",
    category: "Antihistamine",
    usage: "Allergies",
    description: "Second-generation antihistamine for relief of allergic rhinitis symptoms and chronic urticaria. Less sedating than first-generation antihistamines.",
    dosageForm: "Tablet/Syrup",
    commonDosage: "10mg once daily",
    warnings: ["May cause drowsiness", "Caution in renal impairment"],
    lookAlikeIds: ["zantac", "xanax", "zyprexa"],
    wrongDrugAction: "Monitor for excessive drowsiness. Single dose usually well-tolerated. Supportive care if symptomatic.",
  },
  {
    id: "xanax",
    name: "Xanax",
    genericName: "Alprazolam",
    category: "Benzodiazepine",
    usage: "Anxiety/Panic disorders",
    description: "Short-acting benzodiazepine used for anxiety and panic disorders. Works by enhancing the effect of GABA neurotransmitter.",
    dosageForm: "Tablet",
    commonDosage: "0.25-0.5mg three times daily",
    warnings: ["High addiction potential", "CNS depression", "Withdrawal symptoms"],
    lookAlikeIds: ["zantac", "zyrtec"],
    isHighAlert: true,
    antidote: "Flumazenil 0.2mg IV over 15 sec, repeat 0.2mg q60sec to max 1mg. CAUTION: May precipitate seizures in chronic users.",
    wrongDrugAction: "Monitor respiratory status closely. Keep patient supine with airway protection. Avoid Flumazenil in chronic benzo users.",
  },

  // Lamictal vs Lamisil vs Lamictal
  {
    id: "lamictal",
    name: "Lamictal",
    genericName: "Lamotrigine",
    category: "Anticonvulsant/Mood Stabilizer",
    usage: "Epilepsy/Bipolar disorder",
    description: "Used to prevent seizures and mood episodes in bipolar disorder. Works by stabilizing electrical activity in the brain.",
    dosageForm: "Tablet",
    commonDosage: "100-200mg twice daily",
    warnings: ["Stevens-Johnson syndrome risk", "Slow titration required", "Rash monitoring"],
    lookAlikeIds: ["lamisil", "lomotil"],
    isHighAlert: true,
    antidote: "No specific antidote. Activated charcoal if recent ingestion. Hemodialysis may help in severe cases.",
    wrongDrugAction: "Monitor for rash (SJS risk), dizziness, ataxia. Stop immediately if rash develops. Supportive care.",
  },
  {
    id: "lamisil",
    name: "Lamisil",
    genericName: "Terbinafine",
    category: "Antifungal",
    usage: "Fungal infections",
    description: "Treats fungal infections of the skin and nails. Works by stopping the growth of fungi.",
    dosageForm: "Tablet/Cream",
    commonDosage: "250mg once daily for nail fungus",
    warnings: ["Liver toxicity risk", "Taste disturbance", "Monitor LFTs"],
    lookAlikeIds: ["lamictal", "lomotil"],
    wrongDrugAction: "Monitor LFTs. Single dose usually safe. Watch for taste disturbance, GI upset. Supportive care.",
  },
  {
    id: "lomotil",
    name: "Lomotil",
    genericName: "Diphenoxylate/Atropine",
    category: "Antidiarrheal",
    usage: "Diarrhea",
    description: "Controls diarrhea by slowing intestinal movement. Contains atropine to prevent abuse.",
    dosageForm: "Tablet/Liquid",
    commonDosage: "5mg four times daily",
    warnings: ["Opioid-like effects", "Anticholinergic effects", "Not for infectious diarrhea"],
    lookAlikeIds: ["lamictal", "lamisil"],
    isHighAlert: true,
    antidote: "Naloxone for opioid effects (0.4-2mg IV, may repeat). Physostigmine for severe anticholinergic toxicity.",
    wrongDrugAction: "Monitor for CNS/respiratory depression (may be delayed 12-24h). Watch for anticholinergic signs. Keep Naloxone ready.",
  },

  // Metformin vs Metronidazole
  {
    id: "metformin",
    name: "Metformin",
    genericName: "Metformin HCl",
    category: "Antidiabetic",
    usage: "Type 2 Diabetes",
    description: "First-line treatment for type 2 diabetes. Decreases glucose production in liver and improves insulin sensitivity.",
    dosageForm: "Tablet",
    commonDosage: "500-1000mg twice daily",
    warnings: ["Lactic acidosis risk", "Hold before contrast", "GI side effects common"],
    lookAlikeIds: ["metronidazole", "methotrexate"],
    isHighAlert: true,
    antidote: "Sodium bicarbonate for lactic acidosis. Hemodialysis for severe toxicity. IV dextrose if hypoglycemia.",
    wrongDrugAction: "Monitor blood glucose, lactate levels, and renal function. Ensure hydration. Dialysis for severe lactic acidosis.",
  },
  {
    id: "metronidazole",
    name: "Metronidazole",
    genericName: "Metronidazole",
    category: "Antibiotic/Antiprotozoal",
    usage: "Bacterial/Parasitic infections",
    description: "Treats bacterial and parasitic infections including C. diff, H. pylori, and protozoal infections.",
    dosageForm: "Tablet/IV/Gel",
    commonDosage: "500mg three times daily",
    warnings: ["Disulfiram reaction with alcohol", "Metallic taste", "Peripheral neuropathy"],
    lookAlikeIds: ["metformin", "methotrexate"],
    wrongDrugAction: "Warn patient to avoid alcohol for 48h. Monitor for nausea, metallic taste. Generally well-tolerated single dose.",
  },
  {
    id: "methotrexate",
    name: "Methotrexate",
    genericName: "Methotrexate",
    category: "Immunosuppressant/Antimetabolite",
    usage: "Rheumatoid arthritis/Cancer",
    description: "Used for autoimmune conditions and certain cancers. Works by inhibiting cell division and immune response.",
    dosageForm: "Tablet/Injection",
    commonDosage: "7.5-25mg weekly for RA",
    warnings: ["Weekly dosing only for RA", "Bone marrow suppression", "Hepatotoxicity"],
    lookAlikeIds: ["metformin", "metronidazole"],
    isHighAlert: true,
    antidote: "Leucovorin (folinic acid) 10-25mg IV/PO q6h until MTX level <0.05μM. Glucarpidase for severe toxicity.",
    wrongDrugAction: "URGENT: Check CBC, renal/liver function. Start Leucovorin immediately. High-dose fluids + urine alkalinization. Monitor for mucositis.",
  },

  // Zyprexa vs Zyrtec
  {
    id: "zyprexa",
    name: "Zyprexa",
    genericName: "Olanzapine",
    category: "Atypical Antipsychotic",
    usage: "Schizophrenia/Bipolar disorder",
    description: "Treats schizophrenia and bipolar disorder. Works by affecting dopamine and serotonin receptors in the brain.",
    dosageForm: "Tablet/IM injection",
    commonDosage: "5-20mg once daily",
    warnings: ["Metabolic syndrome", "Weight gain", "Diabetes risk"],
    lookAlikeIds: ["zyrtec", "celexa"],
    isHighAlert: true,
    antidote: "No specific antidote. Activated charcoal if recent ingestion. Treat hypotension with fluids (avoid epinephrine).",
    wrongDrugAction: "Monitor BP, HR, level of consciousness. Watch for QT prolongation. Supportive care. Avoid benzodiazepines if IM olanzapine given.",
  },

  // Zocor vs Zoloft
  {
    id: "zocor",
    name: "Zocor",
    genericName: "Simvastatin",
    category: "Statin",
    usage: "High cholesterol",
    description: "Lowers LDL cholesterol and triglycerides while raising HDL cholesterol. Reduces cardiovascular disease risk.",
    dosageForm: "Tablet",
    commonDosage: "10-40mg once daily at night",
    warnings: ["Muscle pain/rhabdomyolysis", "Drug interactions", "Avoid grapefruit"],
    lookAlikeIds: ["zoloft", "zantac"],
    wrongDrugAction: "Monitor for muscle pain/weakness. Check CK levels if symptomatic. Usually single dose is well-tolerated.",
  },
  {
    id: "zoloft",
    name: "Zoloft",
    genericName: "Sertraline",
    category: "SSRI Antidepressant",
    usage: "Depression/Anxiety",
    description: "Treats depression, anxiety, PTSD, OCD, and panic disorder. Works by increasing serotonin levels in the brain.",
    dosageForm: "Tablet/Solution",
    commonDosage: "50-200mg once daily",
    warnings: ["Serotonin syndrome risk", "Suicidal thoughts warning", "GI upset"],
    lookAlikeIds: ["zocor"],
    isHighAlert: true,
    antidote: "Cyproheptadine for serotonin syndrome (4-8mg initially, then 2mg q2h). Benzodiazepines for agitation.",
    wrongDrugAction: "Monitor for serotonin syndrome (agitation, hyperthermia, tremor). Activated charcoal if within 1h. ECG monitoring.",
  },

  // Hydroxyzine vs Hydralazine
  {
    id: "hydroxyzine",
    name: "Hydroxyzine",
    genericName: "Hydroxyzine",
    category: "Antihistamine/Anxiolytic",
    usage: "Anxiety/Itching/Sedation",
    description: "First-generation antihistamine used for anxiety, allergic itching, and as a sedative. Also used for nausea.",
    dosageForm: "Tablet/Capsule/Syrup",
    commonDosage: "25-100mg up to four times daily",
    warnings: ["QT prolongation at high doses", "Sedation", "Anticholinergic effects"],
    lookAlikeIds: ["hydralazine"],
    wrongDrugAction: "Monitor for excessive sedation, QT prolongation. ECG if high dose. Supportive care, airway protection if needed.",
  },
  {
    id: "hydralazine",
    name: "Hydralazine",
    genericName: "Hydralazine",
    category: "Vasodilator",
    usage: "Hypertension/Heart failure",
    description: "Direct-acting vasodilator for severe hypertension and heart failure. Often used in pregnancy-induced hypertension.",
    dosageForm: "Tablet/Injection",
    commonDosage: "25-50mg three to four times daily",
    warnings: ["Lupus-like syndrome", "Reflex tachycardia", "Headache"],
    lookAlikeIds: ["hydroxyzine"],
    isHighAlert: true,
    antidote: "No specific antidote. IV fluids for hypotension. Vasopressors (norepinephrine) if refractory hypotension.",
    wrongDrugAction: "Monitor BP closely, place patient supine. IV fluids for hypotension. Watch for reflex tachycardia, headache.",
  },

  // Clonidine vs Klonopin
  {
    id: "clonidine",
    name: "Clonidine",
    genericName: "Clonidine",
    category: "Alpha-2 Agonist",
    usage: "Hypertension/ADHD",
    description: "Central alpha-2 agonist used for hypertension, ADHD, and opioid withdrawal. Reduces sympathetic outflow.",
    dosageForm: "Tablet/Patch",
    commonDosage: "0.1-0.3mg twice daily",
    warnings: ["Rebound hypertension if stopped suddenly", "Sedation", "Bradycardia"],
    lookAlikeIds: ["klonopin"],
    isHighAlert: true,
    antidote: "Tolazoline or phentolamine for severe hypotension. Atropine for symptomatic bradycardia. Naloxone may help.",
    wrongDrugAction: "Monitor BP, HR continuously. IV fluids for hypotension. Atropine for bradycardia. Watch for CNS depression.",
  },
  {
    id: "klonopin",
    name: "Klonopin",
    genericName: "Clonazepam",
    category: "Benzodiazepine",
    usage: "Seizures/Panic disorder",
    description: "Long-acting benzodiazepine for seizure disorders and panic disorder. Enhances GABA effect in the brain.",
    dosageForm: "Tablet",
    commonDosage: "0.5-2mg twice daily",
    warnings: ["High addiction potential", "CNS depression", "Withdrawal seizures"],
    lookAlikeIds: ["clonidine"],
    isHighAlert: true,
    antidote: "Flumazenil 0.2mg IV over 15 sec, repeat q60sec to max 1mg. CAUTION: Risk of seizures in chronic users or mixed ingestion.",
    wrongDrugAction: "Monitor respiratory status, level of consciousness. Airway protection. Avoid Flumazenil in chronic benzo users.",
  },
];

export function searchDrugs(query: string): Drug[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  return drugs.filter(
    (drug) =>
      drug.name.toLowerCase().includes(lowerQuery) ||
      drug.genericName.toLowerCase().includes(lowerQuery)
  );
}

export function getDrugById(id: string): Drug | undefined {
  return drugs.find((drug) => drug.id === id);
}

export function getLookAlikeDrugs(drug: Drug): Drug[] {
  return drug.lookAlikeIds
    .map((id) => getDrugById(id))
    .filter((d): d is Drug => d !== undefined);
}
