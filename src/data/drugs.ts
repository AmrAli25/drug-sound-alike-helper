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
  imageUrl?: string;
}

export const drugs: Drug[] = [
  // Amaryl vs Amarel vs Reminyl
  {
    id: "amaryl",
    name: "Amaryl",
    genericName: "Glimepiride",
    category: "Sulfonylurea",
    usage: "Type 2 Diabetes",
    description: "Oral antidiabetic drug that stimulates insulin release from pancreatic beta cells. Used to control blood sugar in type 2 diabetes.",
    dosageForm: "Tablet",
    commonDosage: "1-4mg once daily",
    warnings: ["Hypoglycemia risk", "Take with breakfast", "Avoid in renal impairment"],
    lookAlikeIds: ["reminyl"],
    isHighAlert: true,
    antidote: "IV Dextrose 50% (25-50ml bolus). Glucagon 1mg IM/SC if no IV access. Continuous glucose monitoring.",
    wrongDrugAction: "URGENT: Monitor blood glucose every 15-30 min. Give oral glucose if conscious. IV Dextrose for severe hypoglycemia. May need prolonged monitoring (24-48h).",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop"
  },
  {
    id: "reminyl",
    name: "Reminyl",
    genericName: "Galantamine",
    category: "Cholinesterase Inhibitor",
    usage: "Alzheimer's Disease",
    description: "Used to treat mild to moderate Alzheimer's dementia. Improves cognitive function by increasing acetylcholine levels.",
    dosageForm: "Tablet/Capsule",
    commonDosage: "4-12mg twice daily",
    warnings: ["GI upset common", "Bradycardia risk", "Start low and titrate"],
    lookAlikeIds: ["amaryl"],
    wrongDrugAction: "Monitor for cholinergic effects (bradycardia, nausea, vomiting). Atropine for severe bradycardia. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop"
  },

  // Lasix vs Losec
  {
    id: "lasix",
    name: "Lasix",
    genericName: "Furosemide",
    category: "Loop Diuretic",
    usage: "Edema/Heart Failure",
    description: "Potent loop diuretic used for edema in heart failure, renal disease, and hepatic cirrhosis. Also used for hypertension.",
    dosageForm: "Tablet/Injection",
    commonDosage: "20-80mg once or twice daily",
    warnings: ["Electrolyte imbalance", "Ototoxicity at high doses", "Dehydration risk"],
    lookAlikeIds: ["losec"],
    isHighAlert: true,
    antidote: "No specific antidote. IV fluids for dehydration. Replace electrolytes (K+, Na+, Mg2+). Monitor renal function.",
    wrongDrugAction: "Monitor BP, urine output, electrolytes. IV fluids if hypotensive. Replace potassium if low. Monitor for dehydration.",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop"
  },
  {
    id: "losec",
    name: "Losec",
    genericName: "Omeprazole",
    category: "Proton Pump Inhibitor",
    usage: "GERD/Peptic Ulcer",
    description: "Reduces stomach acid production. Used for GERD, peptic ulcers, and H. pylori eradication therapy.",
    dosageForm: "Capsule",
    commonDosage: "20-40mg once daily",
    warnings: ["Long-term use risks", "Mg deficiency", "C. diff risk"],
    lookAlikeIds: ["lasix"],
    wrongDrugAction: "Generally well tolerated. Monitor for headache, GI upset. Single dose is usually safe. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop"
  },

  // Tegretol vs Tegral
  {
    id: "tegretol",
    name: "Tegretol",
    genericName: "Carbamazepine",
    category: "Anticonvulsant",
    usage: "Epilepsy/Trigeminal Neuralgia",
    description: "Used for partial and generalized tonic-clonic seizures, trigeminal neuralgia, and bipolar disorder.",
    dosageForm: "Tablet/Syrup",
    commonDosage: "200-400mg twice daily",
    warnings: ["Stevens-Johnson syndrome", "Bone marrow suppression", "Drug interactions"],
    lookAlikeIds: ["tegral"],
    isHighAlert: true,
    antidote: "No specific antidote. Activated charcoal if recent. Charcoal hemoperfusion for severe toxicity. Supportive care.",
    wrongDrugAction: "Monitor ECG, electrolytes, CBC. Watch for cardiac arrhythmias, CNS depression. Activated charcoal within 2h. ICU if severe.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&h=200&fit=crop"
  },
  {
    id: "tegral",
    name: "Tegral",
    genericName: "Carbamazepine",
    category: "Anticonvulsant",
    usage: "Epilepsy/Nerve Pain",
    description: "Local brand of carbamazepine. Same active ingredient as Tegretol. Used for seizures and neuropathic pain.",
    dosageForm: "Tablet",
    commonDosage: "200-400mg twice daily",
    warnings: ["Blood dyscrasias", "Skin reactions", "Hepatotoxicity"],
    lookAlikeIds: ["tegretol"],
    isHighAlert: true,
    antidote: "No specific antidote. Activated charcoal if recent. Charcoal hemoperfusion for severe toxicity.",
    wrongDrugAction: "Same as Tegretol - Monitor cardiac, CNS status. These are the same drug, different brands.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },

  // Zantac vs Zyrtec vs Xanax (Available in Egypt)
  {
    id: "zantac",
    name: "Zantac",
    genericName: "Ranitidine",
    category: "H2 Blocker",
    usage: "Acid Reflux/Peptic Ulcer",
    description: "Reduces stomach acid. Note: Withdrawn in many markets due to NDMA concerns. Check local availability.",
    dosageForm: "Tablet/Syrup",
    commonDosage: "150mg twice daily",
    warnings: ["NDMA contamination concerns", "Check availability", "Consider alternatives"],
    lookAlikeIds: ["zyrtec", "xanax"],
    wrongDrugAction: "Generally safe. Monitor for headache, GI upset. Single dose well-tolerated. Consider alternative H2 blocker.",
    imageUrl: "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?w=200&h=200&fit=crop"
  },
  {
    id: "zyrtec",
    name: "Zyrtec",
    genericName: "Cetirizine",
    category: "Antihistamine",
    usage: "Allergies/Urticaria",
    description: "Second-generation antihistamine for allergic rhinitis and chronic urticaria. Less sedating than older antihistamines.",
    dosageForm: "Tablet/Syrup",
    commonDosage: "10mg once daily",
    warnings: ["Drowsiness possible", "Reduce dose in renal impairment", "Avoid alcohol"],
    lookAlikeIds: ["zantac", "xanax"],
    wrongDrugAction: "Monitor for drowsiness. Generally safe single dose. Supportive care if excessive sedation.",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=200&h=200&fit=crop"
  },
  {
    id: "xanax",
    name: "Xanax",
    genericName: "Alprazolam",
    category: "Benzodiazepine",
    usage: "Anxiety/Panic Disorder",
    description: "Short-acting benzodiazepine for anxiety and panic disorders. High potential for dependence.",
    dosageForm: "Tablet",
    commonDosage: "0.25-0.5mg three times daily",
    warnings: ["Addiction potential", "CNS depression", "Avoid abrupt discontinuation"],
    lookAlikeIds: ["zantac", "zyrtec"],
    isHighAlert: true,
    antidote: "Flumazenil 0.2mg IV over 15 sec, repeat q60sec to max 1mg. CAUTION: May precipitate seizures in chronic users.",
    wrongDrugAction: "Monitor respiratory status, consciousness. Keep airway protected. AVOID Flumazenil in chronic benzo users.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop"
  },

  // Cataflam vs Catapress
  {
    id: "cataflam",
    name: "Cataflam",
    genericName: "Diclofenac Potassium",
    category: "NSAID",
    usage: "Pain/Inflammation",
    description: "Fast-acting NSAID for acute pain, inflammation, dysmenorrhea, and migraine attacks.",
    dosageForm: "Tablet",
    commonDosage: "50mg two to three times daily",
    warnings: ["GI bleeding risk", "Cardiovascular risk", "Renal impairment"],
    lookAlikeIds: ["catapress"],
    wrongDrugAction: "Monitor for GI bleeding, renal function. PPI for GI protection. Supportive care. Single dose usually tolerated.",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop"
  },
  {
    id: "catapress",
    name: "Catapres",
    genericName: "Clonidine",
    category: "Alpha-2 Agonist",
    usage: "Hypertension",
    description: "Central alpha-2 agonist for hypertension. Also used for ADHD and opioid withdrawal.",
    dosageForm: "Tablet/Patch",
    commonDosage: "0.1-0.2mg twice daily",
    warnings: ["Rebound hypertension", "Sedation", "Bradycardia"],
    lookAlikeIds: ["cataflam"],
    isHighAlert: true,
    antidote: "No specific antidote. IV fluids, vasopressors for hypotension. Atropine for bradycardia. Tolazoline may help.",
    wrongDrugAction: "Monitor BP, HR continuously. Trendelenburg position. IV fluids. Atropine for symptomatic bradycardia.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },

  // Glucophage vs Glucovance
  {
    id: "glucophage",
    name: "Glucophage",
    genericName: "Metformin",
    category: "Biguanide",
    usage: "Type 2 Diabetes",
    description: "First-line oral antidiabetic. Decreases hepatic glucose production and improves insulin sensitivity.",
    dosageForm: "Tablet",
    commonDosage: "500-1000mg twice daily",
    warnings: ["Lactic acidosis risk", "Hold before contrast", "GI upset common"],
    lookAlikeIds: ["glucovance"],
    isHighAlert: true,
    antidote: "Sodium bicarbonate for lactic acidosis. Hemodialysis for severe toxicity. IV dextrose if hypoglycemia.",
    wrongDrugAction: "Monitor blood glucose, lactate, renal function. Hydration essential. Dialysis for severe lactic acidosis.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop"
  },
  {
    id: "glucovance",
    name: "Glucovance",
    genericName: "Metformin + Glibenclamide",
    category: "Combination Antidiabetic",
    usage: "Type 2 Diabetes",
    description: "Combination of metformin and sulfonylurea for better glycemic control. Higher hypoglycemia risk than metformin alone.",
    dosageForm: "Tablet",
    commonDosage: "500/2.5mg to 500/5mg twice daily",
    warnings: ["Hypoglycemia risk higher", "Lactic acidosis", "Monitor blood glucose"],
    lookAlikeIds: ["glucophage"],
    isHighAlert: true,
    antidote: "IV Dextrose for hypoglycemia. Sodium bicarbonate for lactic acidosis. May need prolonged glucose monitoring.",
    wrongDrugAction: "URGENT: Contains sulfonylurea - higher hypo risk. Monitor glucose q15-30min. IV Dextrose ready. May need 24-48h observation.",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop"
  },

  // Neurobion vs Neurontin
  {
    id: "neurobion",
    name: "Neurobion",
    genericName: "Vitamin B Complex",
    category: "Vitamin Supplement",
    usage: "Vitamin B Deficiency",
    description: "Combination of B vitamins (B1, B6, B12) for peripheral neuropathy and vitamin deficiency states.",
    dosageForm: "Tablet/Injection",
    commonDosage: "1 tablet daily or injection as prescribed",
    warnings: ["Allergic reactions rare", "High dose B6 neuropathy", "Injection site reactions"],
    lookAlikeIds: ["neurontin"],
    wrongDrugAction: "Generally very safe. Monitor for allergic reaction. Water-soluble vitamins - excess excreted. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },
  {
    id: "neurontin",
    name: "Neurontin",
    genericName: "Gabapentin",
    category: "Anticonvulsant/Analgesic",
    usage: "Neuropathic Pain/Epilepsy",
    description: "Used for partial seizures and neuropathic pain including diabetic neuropathy and postherpetic neuralgia.",
    dosageForm: "Capsule/Tablet",
    commonDosage: "300-600mg three times daily",
    warnings: ["Sedation", "Dizziness", "Reduce in renal impairment"],
    lookAlikeIds: ["neurobion"],
    wrongDrugAction: "Monitor for CNS depression, respiratory status. Supportive care. Symptoms usually resolve with time.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&h=200&fit=crop"
  },

  // Concor vs Concore
  {
    id: "concor",
    name: "Concor",
    genericName: "Bisoprolol",
    category: "Beta Blocker",
    usage: "Hypertension/Heart Failure",
    description: "Cardioselective beta-blocker for hypertension, angina, and heart failure. Well-tolerated.",
    dosageForm: "Tablet",
    commonDosage: "2.5-10mg once daily",
    warnings: ["Bradycardia", "Avoid abrupt withdrawal", "Mask hypoglycemia symptoms"],
    lookAlikeIds: ["coversyl"],
    isHighAlert: true,
    antidote: "Glucagon 5-10mg IV bolus then 1-5mg/h infusion. Atropine for bradycardia. Calcium, vasopressors for hypotension.",
    wrongDrugAction: "Monitor HR, BP, ECG. Atropine 0.5-1mg IV for bradycardia. Glucagon for severe toxicity. IV fluids.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop"
  },
  {
    id: "coversyl",
    name: "Coversyl",
    genericName: "Perindopril",
    category: "ACE Inhibitor",
    usage: "Hypertension/Heart Failure",
    description: "ACE inhibitor for hypertension, heart failure, and cardiovascular protection. Reduces mortality post-MI.",
    dosageForm: "Tablet",
    commonDosage: "4-8mg once daily",
    warnings: ["Dry cough", "Angioedema risk", "Hyperkalemia"],
    lookAlikeIds: ["concor"],
    isHighAlert: true,
    antidote: "Epinephrine for angioedema. IV fluids for hypotension. Stop drug immediately if angioedema occurs.",
    wrongDrugAction: "Monitor BP, renal function, potassium. IV fluids for hypotension. WATCH for angioedema (swelling of face/throat).",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop"
  },

  // Aspirin vs Aspartic
  {
    id: "aspirin",
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    category: "NSAID/Antiplatelet",
    usage: "Pain/Fever/Cardiovascular",
    description: "Used for pain, fever, inflammation, and cardiovascular protection. Irreversibly inhibits platelet aggregation.",
    dosageForm: "Tablet",
    commonDosage: "75-325mg daily for cardiovascular; 500-1000mg for pain",
    warnings: ["GI bleeding", "Reye syndrome in children", "Bleeding risk"],
    lookAlikeIds: ["astonin"],
    wrongDrugAction: "Monitor for GI bleeding, tinnitus. Activated charcoal if recent large dose. Supportive care. Alkalinize urine if severe.",
    imageUrl: "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?w=200&h=200&fit=crop"
  },
  {
    id: "astonin",
    name: "Astonin-H",
    genericName: "Fludrocortisone",
    category: "Mineralocorticoid",
    usage: "Adrenal Insufficiency",
    description: "Synthetic mineralocorticoid for Addison's disease and orthostatic hypotension. Promotes sodium and water retention.",
    dosageForm: "Tablet",
    commonDosage: "0.1mg once daily",
    warnings: ["Fluid retention", "Hypertension", "Hypokalemia"],
    lookAlikeIds: ["aspirin"],
    isHighAlert: true,
    antidote: "No specific antidote. Manage fluid overload with diuretics. Correct electrolyte abnormalities. Supportive care.",
    wrongDrugAction: "Monitor BP, weight, electrolytes (especially K+). Watch for fluid overload. Reduce sodium intake. Potassium supplement if needed.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop"
  },

  // Augmentin vs Amoxil
  {
    id: "augmentin",
    name: "Augmentin",
    genericName: "Amoxicillin/Clavulanic Acid",
    category: "Antibiotic",
    usage: "Bacterial Infections",
    description: "Broad-spectrum antibiotic combining amoxicillin with beta-lactamase inhibitor. Covers more resistant organisms.",
    dosageForm: "Tablet/Suspension",
    commonDosage: "625mg-1g twice daily",
    warnings: ["Diarrhea common", "Hepatotoxicity rare", "Allergic reactions"],
    lookAlikeIds: ["amoxil"],
    wrongDrugAction: "Check for penicillin allergy. Monitor for allergic reaction, GI upset. Generally well-tolerated. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop"
  },
  {
    id: "amoxil",
    name: "Amoxil",
    genericName: "Amoxicillin",
    category: "Antibiotic",
    usage: "Bacterial Infections",
    description: "Broad-spectrum penicillin antibiotic for respiratory, urinary, and skin infections.",
    dosageForm: "Capsule/Suspension",
    commonDosage: "500mg three times daily",
    warnings: ["Penicillin allergy", "Rash with EBV", "GI upset"],
    lookAlikeIds: ["augmentin"],
    wrongDrugAction: "Check allergy history. Monitor for anaphylaxis. Generally safe if no penicillin allergy. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },

  // Voltaren vs Valtarex (Valtrex)
  {
    id: "voltaren",
    name: "Voltaren",
    genericName: "Diclofenac Sodium",
    category: "NSAID",
    usage: "Pain/Inflammation",
    description: "Potent NSAID for pain, inflammation, arthritis, and post-operative pain. Available in multiple formulations.",
    dosageForm: "Tablet/Gel/Injection",
    commonDosage: "50mg two to three times daily",
    warnings: ["GI bleeding", "Cardiovascular risk", "Renal impairment"],
    lookAlikeIds: ["valtrex"],
    wrongDrugAction: "Monitor for GI bleeding, renal function. Give PPI for protection. Supportive care. Usually single dose tolerated.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&h=200&fit=crop"
  },
  {
    id: "valtrex",
    name: "Valtrex",
    genericName: "Valacyclovir",
    category: "Antiviral",
    usage: "Herpes Infections",
    description: "Antiviral for herpes simplex (genital, labial), herpes zoster (shingles), and CMV prophylaxis.",
    dosageForm: "Tablet",
    commonDosage: "500mg-1g twice daily",
    warnings: ["Reduce in renal impairment", "TTP/HUS rare", "Adequate hydration"],
    lookAlikeIds: ["voltaren"],
    wrongDrugAction: "Monitor renal function. Ensure adequate hydration. Generally well-tolerated. Adjust dose if renal impairment.",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop"
  },

  // Tavanic vs Tavegyl
  {
    id: "tavanic",
    name: "Tavanic",
    genericName: "Levofloxacin",
    category: "Fluoroquinolone Antibiotic",
    usage: "Bacterial Infections",
    description: "Broad-spectrum fluoroquinolone for respiratory, urinary, and skin infections. Reserve for serious infections.",
    dosageForm: "Tablet/IV",
    commonDosage: "500-750mg once daily",
    warnings: ["Tendon rupture risk", "QT prolongation", "CNS effects"],
    lookAlikeIds: ["tavegyl"],
    wrongDrugAction: "Monitor ECG for QT. Watch for tendon pain, CNS effects. Discontinue if tendon symptoms. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop"
  },
  {
    id: "tavegyl",
    name: "Tavegyl",
    genericName: "Clemastine",
    category: "Antihistamine",
    usage: "Allergies",
    description: "First-generation antihistamine for allergic rhinitis and urticaria. More sedating than newer antihistamines.",
    dosageForm: "Tablet/Syrup",
    commonDosage: "1mg twice daily",
    warnings: ["Sedation", "Anticholinergic effects", "Avoid in elderly"],
    lookAlikeIds: ["tavanic"],
    wrongDrugAction: "Monitor for sedation, anticholinergic effects. Supportive care. Usually well-tolerated. Avoid driving.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },

  // Depakine vs Depakin (same drug, confusion in spelling)
  {
    id: "depakine",
    name: "Depakine",
    genericName: "Sodium Valproate",
    category: "Anticonvulsant/Mood Stabilizer",
    usage: "Epilepsy/Bipolar Disorder",
    description: "Broad-spectrum anticonvulsant for all seizure types. Also used as mood stabilizer in bipolar disorder.",
    dosageForm: "Tablet/Syrup/IV",
    commonDosage: "500-1000mg twice daily",
    warnings: ["Hepatotoxicity", "Teratogenic", "Pancreatitis", "Thrombocytopenia"],
    lookAlikeIds: ["diamicron"],
    isHighAlert: true,
    antidote: "L-Carnitine 100mg/kg IV (max 6g) for hepatotoxicity. Hemodialysis for severe toxicity. Supportive care.",
    wrongDrugAction: "Monitor LFTs, ammonia, CBC, valproate level. L-carnitine for hyperammonemia. Watch for CNS depression, hepatotoxicity.",
    imageUrl: "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?w=200&h=200&fit=crop"
  },
  {
    id: "diamicron",
    name: "Diamicron",
    genericName: "Gliclazide",
    category: "Sulfonylurea",
    usage: "Type 2 Diabetes",
    description: "Oral antidiabetic that stimulates insulin secretion. Better safety profile than other sulfonylureas.",
    dosageForm: "Tablet",
    commonDosage: "30-120mg once daily (MR) or 80mg twice daily",
    warnings: ["Hypoglycemia", "Take with meals", "Caution in elderly"],
    lookAlikeIds: ["depakine"],
    isHighAlert: true,
    antidote: "IV Dextrose 50% for hypoglycemia. Glucagon if no IV access. Octreotide 50-100mcg SC for refractory hypoglycemia.",
    wrongDrugAction: "Monitor blood glucose q15-30min. IV Dextrose ready. May need prolonged monitoring 24-48h. Octreotide for refractory cases.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop"
  },

  // Risperdal vs Requip
  {
    id: "risperdal",
    name: "Risperdal",
    genericName: "Risperidone",
    category: "Atypical Antipsychotic",
    usage: "Schizophrenia/Bipolar",
    description: "Atypical antipsychotic for schizophrenia, bipolar disorder, and irritability in autism.",
    dosageForm: "Tablet/Solution/Injection",
    commonDosage: "2-6mg daily",
    warnings: ["EPS", "Metabolic effects", "Prolactin elevation"],
    lookAlikeIds: ["requip"],
    isHighAlert: true,
    antidote: "No specific antidote. Benztropine/Diphenhydramine for EPS. IV fluids for hypotension. Avoid epinephrine.",
    wrongDrugAction: "Monitor ECG, BP, temperature. Watch for EPS, dystonia. Benztropine 1-2mg IV/IM for acute dystonia. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop"
  },
  {
    id: "requip",
    name: "Requip",
    genericName: "Ropinirole",
    category: "Dopamine Agonist",
    usage: "Parkinson's Disease/RLS",
    description: "Dopamine agonist for Parkinson's disease and restless legs syndrome. Reduces motor symptoms.",
    dosageForm: "Tablet",
    commonDosage: "0.25-8mg three times daily",
    warnings: ["Sudden sleep onset", "Impulse control disorders", "Orthostatic hypotension"],
    lookAlikeIds: ["risperdal"],
    wrongDrugAction: "Monitor BP for hypotension. Watch for sudden sleep onset. Avoid driving. Supportive care for symptoms.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },

  // Flagyl vs Fasigyn
  {
    id: "flagyl",
    name: "Flagyl",
    genericName: "Metronidazole",
    category: "Antibiotic/Antiprotozoal",
    usage: "Anaerobic/Protozoal Infections",
    description: "Treats anaerobic bacterial infections, protozoal infections, H. pylori, and C. difficile.",
    dosageForm: "Tablet/IV/Gel",
    commonDosage: "500mg three times daily",
    warnings: ["Disulfiram reaction with alcohol", "Metallic taste", "Peripheral neuropathy"],
    lookAlikeIds: ["fasigyn"],
    wrongDrugAction: "WARN: No alcohol for 48-72h. Monitor for metallic taste, nausea. Generally well-tolerated.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=200&h=200&fit=crop"
  },
  {
    id: "fasigyn",
    name: "Fasigyn",
    genericName: "Tinidazole",
    category: "Antiprotozoal",
    usage: "Protozoal Infections",
    description: "Similar to metronidazole but longer half-life. Single-dose treatment for many protozoal infections.",
    dosageForm: "Tablet",
    commonDosage: "2g single dose or 500mg twice daily",
    warnings: ["Avoid alcohol", "GI upset", "Headache"],
    lookAlikeIds: ["flagyl"],
    wrongDrugAction: "Similar to Flagyl - avoid alcohol 72h. Monitor for nausea, metallic taste. Usually well-tolerated.",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop"
  },

  // Motilium vs Maalox
  {
    id: "motilium",
    name: "Motilium",
    genericName: "Domperidone",
    category: "Prokinetic/Antiemetic",
    usage: "Nausea/Gastroparesis",
    description: "Promotes gastric emptying and relieves nausea/vomiting. Does not cross BBB significantly.",
    dosageForm: "Tablet/Suspension",
    commonDosage: "10mg three times daily",
    warnings: ["QT prolongation", "Cardiac risk", "Avoid in hepatic impairment"],
    lookAlikeIds: ["maalox"],
    wrongDrugAction: "ECG monitoring for QT prolongation. Generally well-tolerated at normal doses. Avoid in cardiac patients.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop"
  },
  {
    id: "maalox",
    name: "Maalox",
    genericName: "Aluminum/Magnesium Hydroxide",
    category: "Antacid",
    usage: "Heartburn/Dyspepsia",
    description: "Combination antacid for symptomatic relief of heartburn, acid indigestion, and upset stomach.",
    dosageForm: "Suspension/Tablet",
    commonDosage: "10-20ml after meals and at bedtime",
    warnings: ["Drug interactions", "Renal impairment", "Electrolyte effects"],
    lookAlikeIds: ["motilium"],
    wrongDrugAction: "Very safe. May cause diarrhea (Mg) or constipation (Al). Check for drug interactions. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-7cb036e0e82a?w=200&h=200&fit=crop"
  },

  // Lanoxin vs Lasix
  {
    id: "lanoxin",
    name: "Lanoxin",
    genericName: "Digoxin",
    category: "Cardiac Glycoside",
    usage: "Heart Failure/AF",
    description: "Increases cardiac contractility and controls ventricular rate in atrial fibrillation. Narrow therapeutic index.",
    dosageForm: "Tablet/IV",
    commonDosage: "0.125-0.25mg once daily",
    warnings: ["Narrow therapeutic index", "Toxicity with hypokalemia", "Drug interactions"],
    lookAlikeIds: ["lasix"],
    isHighAlert: true,
    antidote: "Digoxin Immune Fab (DigiFab) - dose based on ingested amount or serum level. Correct electrolytes.",
    wrongDrugAction: "URGENT: Check digoxin level, electrolytes (K+, Mg2+, Ca2+). ECG monitoring. DigiFab for toxicity. Correct hypokalemia FIRST.",
    imageUrl: "https://images.unsplash.com/photo-1626716493137-b67fe9501e76?w=200&h=200&fit=crop"
  },

  // Librax vs Lipitor
  {
    id: "librax",
    name: "Librax",
    genericName: "Chlordiazepoxide/Clidinium",
    category: "Antispasmodic/Anxiolytic",
    usage: "IBS/Peptic Ulcer",
    description: "Combination for GI disorders with anxiety component. Contains benzodiazepine and anticholinergic.",
    dosageForm: "Capsule",
    commonDosage: "1-2 capsules three to four times daily",
    warnings: ["Dependence potential", "Anticholinergic effects", "Sedation"],
    lookAlikeIds: ["lipitor"],
    wrongDrugAction: "Monitor for sedation, anticholinergic effects. Contains benzo - watch respiratory status. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop"
  },
  {
    id: "lipitor",
    name: "Lipitor",
    genericName: "Atorvastatin",
    category: "Statin",
    usage: "High Cholesterol",
    description: "HMG-CoA reductase inhibitor for hypercholesterolemia and cardiovascular risk reduction.",
    dosageForm: "Tablet",
    commonDosage: "10-80mg once daily",
    warnings: ["Muscle pain", "Rhabdomyolysis rare", "LFT monitoring"],
    lookAlikeIds: ["librax"],
    wrongDrugAction: "Monitor for muscle symptoms. Check CK if symptomatic. Single dose usually well-tolerated. Supportive care.",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop"
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
