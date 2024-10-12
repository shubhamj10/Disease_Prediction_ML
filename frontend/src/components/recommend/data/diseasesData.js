const diseasesData = [
     {
       name: "Influenza",
       prevention: [
         "Get vaccinated annually.",
         "Wash hands frequently.",
         "Avoid close contact with sick individuals.",
         "Practice good respiratory hygiene."
       ],
       medicines: [
         "Oseltamivir (Tamiflu)",
         "Zanamivir (Relenza)",
         "Paracetamol"
       ],
       homeRemedies: [
         "Stay hydrated with warm fluids like tea and soup.",
         "Ginger tea for sore throat.",
         "Honey and lemon for cough relief.",
         "Steam inhalation for nasal congestion."
       ]
     },
     {
       name: "Diabetes",
       prevention: [
         "Maintain a healthy weight.",
         "Eat a balanced diet low in refined sugars.",
         "Exercise regularly.",
         "Monitor blood sugar levels."
       ],
       medicines: [
         "Metformin",
         "Insulin",
         "Sulfonylureas"
       ],
       homeRemedies: [
         "Cinnamon can help lower blood sugar levels.",
         "Bitter melon juice may improve insulin sensitivity.",
         "Fenugreek seeds soaked in water overnight.",
         "Maintain a diet rich in fiber."
       ]
     },
     {
       name: "Hypertension",
       prevention: [
         "Reduce salt intake.",
         "Exercise regularly.",
         "Maintain a healthy weight.",
         "Limit alcohol consumption."
       ],
       medicines: [
         "Lisinopril",
         "Amlodipine",
         "Losartan"
       ],
       homeRemedies: [
         "Garlic may help lower blood pressure.",
         "Hibiscus tea can be beneficial.",
         "Increase potassium intake with bananas and spinach.",
         "Practice yoga and meditation for stress relief."
       ]
     },
     {
       name: "HIV/AIDS",
       prevention: [
         "Practice safe sex.",
         "Get tested regularly.",
         "Limit sexual partners.",
         "Use PrEP if at high risk."
       ],
       medicines: [
         "Antiretroviral therapy (ART)",
         "Tenofovir",
         "Emtricitabine"
       ],
       homeRemedies: [
         "Balanced diet rich in fruits and vegetables.",
         "Ginger and turmeric for immune support.",
         "Stay hydrated.",
         "Regular moderate exercise."
       ]
     },
     {
       name: "COVID-19",
       prevention: [
         "Get vaccinated.",
         "Wear masks in crowded places.",
         "Practice social distancing.",
         "Wash hands frequently."
       ],
       medicines: [
         "Remdesivir",
         "Monoclonal antibodies",
         "Over-the-counter medications"
       ],
       homeRemedies: [
         "Ginger and turmeric tea for inflammation.",
         "Honey and lemon for throat soothing.",
         "Steam inhalation with eucalyptus oil.",
         "Stay hydrated and rest."
       ]
     },
     {
       name: "Tuberculosis",
       prevention: [
         "Get vaccinated (BCG vaccine).",
         "Avoid close contact with infected individuals.",
         "Maintain good ventilation.",
         "Practice good hygiene."
       ],
       medicines: [
         "Isoniazid",
         "Rifampicin",
         "Ethambutol"
       ],
       homeRemedies: [
         "Turmeric milk for its anti-inflammatory properties.",
         "Garlic for its antimicrobial benefits.",
         "A diet rich in protein and vitamins.",
         "Stay hydrated."
       ]
     },
     {
       name: "Malaria",
       prevention: [
         "Use insecticide-treated bed nets.",
         "Use mosquito repellents.",
         "Eliminate standing water.",
         "Take preventive antimalarial medication if at risk."
       ],
       medicines: [
         "Artemisinin-based combination therapies (ACTs)",
         "Chloroquine",
         "Mefloquine"
       ],
       homeRemedies: [
         "Drink papaya leaf juice.",
         "Use neem leaves in your diet.",
         "Stay in well-ventilated areas.",
         "Use natural mosquito repellents."
       ]
     },
     {
       name: "Cholesterol (Hyperlipidemia)",
       prevention: [
         "Eat a heart-healthy diet.",
         "Exercise regularly.",
         "Maintain a healthy weight.",
         "Avoid tobacco."
       ],
       medicines: [
         "Statins (e.g., Atorvastatin)",
         "Fibrates",
         "Niacin"
       ],
       homeRemedies: [
         "Increase fiber intake with oats and beans.",
         "Garlic may help lower cholesterol levels.",
         "Green tea can aid in reducing LDL levels.",
         "Omega-3 fatty acids from fish or flaxseed."
       ]
     },
     {
       name: "Asthma",
       prevention: [
         "Avoid allergens and irritants.",
         "Use air purifiers.",
         "Exercise regularly.",
         "Follow asthma action plan."
       ],
       medicines: [
         "Inhaled corticosteroids",
         "Beta-agonists",
         "Leukotriene modifiers"
       ],
       homeRemedies: [
         "Ginger tea for its anti-inflammatory properties.",
         "Turmeric milk to soothe the airways.",
         "Steam inhalation to relieve congestion.",
         "Regular exercise to strengthen lungs."
       ]
     },
     {
       name: "Heart Disease",
       prevention: [
         "Maintain a healthy diet.",
         "Exercise regularly.",
         "Avoid smoking.",
         "Manage stress."
       ],
       medicines: [
         "Aspirin",
         "Statins",
         "Beta-blockers"
       ],
       homeRemedies: [
         "Olive oil in diet for heart health.",
         "Garlic may help lower blood pressure.",
         "Green tea for its antioxidant properties.",
         "Regular physical activity."
       ]
     },
     {
       name: "Cancer",
       prevention: [
         "Avoid tobacco.",
         "Maintain a healthy weight.",
         "Limit alcohol consumption.",
         "Get regular screenings."
       ],
       medicines: [
         "Chemotherapy agents",
         "Immunotherapy",
         "Targeted therapy"
       ],
       homeRemedies: [
         "Turmeric for its anti-inflammatory properties.",
         "Green tea may have protective effects.",
         "Ginger can help with nausea.",
         "Maintain a balanced diet rich in antioxidants."
       ]
     },
     {
       name: "Gastroesophageal Reflux Disease (GERD)",
       prevention: [
         "Avoid large meals.",
         "Don’t lie down after eating.",
         "Elevate the head while sleeping.",
         "Limit alcohol and caffeine."
       ],
       medicines: [
         "Proton pump inhibitors (PPIs)",
         "H2-receptor antagonists",
         "Antacids"
       ],
       homeRemedies: [
         "Ginger tea for soothing the stomach.",
         "Aloe vera juice may help.",
         "Apple cider vinegar diluted in water.",
         "Avoid spicy and fatty foods."
       ]
     },
     {
       name: "Kidney Stones",
       prevention: [
         "Stay hydrated.",
         "Limit salt and animal protein.",
         "Avoid foods high in oxalates.",
         "Eat a balanced diet."
       ],
       medicines: [
         "Pain relievers (e.g., Ibuprofen)",
         "Alpha-blockers",
         "Potassium citrate"
       ],
       homeRemedies: [
         "Stay hydrated with plenty of fluids.",
         "Lemon juice diluted in water.",
         "Apple cider vinegar may help dissolve stones.",
         "Basil juice for its anti-inflammatory properties."
       ]
     },
     {
       name: "Osteoporosis",
       prevention: [
         "Get enough calcium and vitamin D.",
         "Exercise regularly (weight-bearing activities).",
         "Avoid smoking.",
         "Limit alcohol consumption."
       ],
       medicines: [
         "Bisphosphonates",
         "Calcitonin",
         "Hormone replacement therapy"
       ],
       homeRemedies: [
         "Increase calcium intake with dairy or leafy greens.",
         "Vitamin D from sunlight or supplements.",
         "Regular weight-bearing exercises.",
         "Avoid excessive caffeine and alcohol."
       ]
     },
     {
       name: "Anxiety Disorders",
       prevention: [
         "Practice stress management techniques.",
         "Exercise regularly.",
         "Limit caffeine and alcohol.",
         "Seek therapy if needed."
       ],
       medicines: [
         "Selective serotonin reuptake inhibitors (SSRIs)",
         "Benzodiazepines",
         "Buspirone"
       ],
       homeRemedies: [
         "Practice deep breathing exercises.",
         "Herbal teas like chamomile or lavender.",
         "Meditation and yoga.",
         "Regular exercise."
       ]
     },
     {
       name: "Depression",
       prevention: [
         "Stay active and engage socially.",
         "Practice good sleep hygiene.",
         "Eat a balanced diet.",
         "Seek help if feeling overwhelmed."
       ],
       medicines: [
         "Antidepressants (e.g., SSRIs)",
         "Cognitive Behavioral Therapy (CBT)",
         "Mood stabilizers"
       ],
       homeRemedies: [
         "Regular physical activity.",
         "Omega-3 fatty acids from fish.",
         "Dark chocolate in moderation.",
         "Maintain a balanced diet rich in nutrients."
       ]
     },
     {
       name: "Eczema",
       prevention: [
         "Moisturize regularly.",
         "Avoid known irritants.",
         "Use gentle skin care products.",
         "Stay hydrated."
       ],
       medicines: [
         "Topical corticosteroids",
         "Calcineurin inhibitors",
         "Antihistamines"
       ],
       homeRemedies: [
         "Moisturize regularly with coconut oil.",
         "Oatmeal baths for soothing the skin.",
         "Aloe vera gel for its healing properties.",
         "Avoid known irritants."
       ]
     },
     {
       name: "Psoriasis",
       prevention: [
         "Moisturize regularly.",
         "Avoid triggers (stress, smoking).",
         "Get regular exercise.",
         "Eat a healthy diet."
       ],
       medicines: [
         "Topical corticosteroids",
         "Vitamin D analogs",
         "Biologics"
       ],
       homeRemedies: [
         "Moisturize with coconut or olive oil.",
         "Apple cider vinegar diluted in water.",
         "Aloe vera gel for skin soothing.",
         "Epsom salt baths."
       ]
     },
     {
       name: "Acne",
       prevention: [
         "Keep skin clean.",
         "Avoid touching face.",
         "Use non-comedogenic products.",
         "Manage stress."
       ],
       medicines: [
         "Benzoyl peroxide",
         "Retinoids",
         "Antibiotics"
       ],
       homeRemedies: [
         "Tea tree oil for its antibacterial properties.",
         "Honey as a natural moisturizer.",
         "Aloe vera for soothing the skin.",
         "Green tea extract for its antioxidant properties."
       ]
     },
     {
       name: "Allergies",
       prevention: [
         "Avoid known allergens.",
         "Keep windows closed during pollen season.",
         "Use air purifiers.",
         "Consult an allergist."
       ],
       medicines: [
         "Antihistamines",
         "Corticosteroids",
         "Leukotriene receptor antagonists"
       ],
       homeRemedies: [
         "Saline nasal rinse to clear allergens.",
         "Local honey may help with pollen allergies.",
         "Ginger tea for its anti-inflammatory properties.",
         "Stay hydrated to thin mucus."
       ]
     },
     {
       name: "Gout",
       prevention: [
         "Maintain a healthy weight.",
         "Limit alcohol consumption.",
         "Stay hydrated.",
         "Avoid high-purine foods."
       ],
       medicines: [
         "Colchicine",
         "Nonsteroidal anti-inflammatory drugs (NSAIDs)",
         "Allopurinol"
       ],
       homeRemedies: [
         "Cherries may reduce uric acid levels.",
         "Apple cider vinegar may help.",
         "Stay hydrated.",
         "Warm compresses for pain relief."
       ]
     },
     {
       name: "Fibromyalgia",
       prevention: [
         "Manage stress.",
         "Exercise regularly.",
         "Get enough sleep.",
         "Practice relaxation techniques."
       ],
       medicines: [
         "Antidepressants",
         "Gabapentin",
         "Pregabalin"
       ],
       homeRemedies: [
         "Warm baths to soothe sore muscles.",
         "Gentle stretching and yoga.",
         "Massage therapy.",
         "Adequate rest and sleep."
       ]
     },
     {
       name: "Chronic Obstructive Pulmonary Disease (COPD)",
       prevention: [
         "Quit smoking.",
         "Avoid lung irritants.",
         "Exercise regularly.",
         "Get vaccinated against respiratory infections."
       ],
       medicines: [
         "Bronchodilators",
         "Inhaled corticosteroids",
         "Phosphodiesterase-4 inhibitors"
       ],
       homeRemedies: [
         "Stay hydrated.",
         "Use a humidifier.",
         "Ginger tea for its anti-inflammatory properties.",
         "Breathing exercises."
       ]
     },
     {
       name: "Peptic Ulcer Disease",
       prevention: [
         "Avoid NSAIDs and smoking.",
         "Limit alcohol consumption.",
         "Manage stress.",
         "Eat a balanced diet."
       ],
       medicines: [
         "Proton pump inhibitors (PPIs)",
         "Antibiotics (if H. pylori is present)",
         "Antacids"
       ],
       homeRemedies: [
         "Drink aloe vera juice.",
         "Eat bananas for soothing effects.",
         "Avoid spicy foods.",
         "Ginger tea for its anti-inflammatory properties."
       ]
     },
     {
       name: "Sciatica",
       prevention: [
         "Maintain good posture.",
         "Exercise regularly.",
         "Lift objects properly.",
         "Maintain a healthy weight."
       ],
       medicines: [
         "Pain relievers (e.g., Ibuprofen)",
         "Muscle relaxants",
         "Physical therapy"
       ],
       homeRemedies: [
         "Cold packs to reduce inflammation.",
         "Heat therapy to relax muscles.",
         "Gentle stretching exercises.",
         "Turmeric milk for its anti-inflammatory properties."
       ]
     },
     {
       name: "Thyroid Disorders",
       prevention: [
         "Regular screenings.",
         "Maintain a healthy diet.",
         "Manage stress.",
         "Consult a healthcare provider if symptoms occur."
       ],
       medicines: [
         "Levothyroxine (for hypothyroidism)",
         "Antithyroid medications (for hyperthyroidism)",
         "Radioactive iodine"
       ],
       homeRemedies: [
         "Consume foods rich in iodine (e.g., seaweed).",
         "Limit goitrogenic foods (e.g., soy, cruciferous vegetables).",
         "Stay hydrated.",
         "Exercise regularly."
       ]
     },
     {
       name: "Sleep Apnea",
       prevention: [
         "Maintain a healthy weight.",
         "Avoid alcohol and sedatives.",
         "Sleep on your side.",
         "Use a humidifier."
       ],
       medicines: [
         "Continuous positive airway pressure (CPAP) therapy",
         "Oral appliances",
         "Surgery (in some cases)"
       ],
       homeRemedies: [
         "Practice good sleep hygiene.",
         "Avoid sleeping on your back.",
         "Use essential oils like lavender for relaxation.",
         "Maintain a regular sleep schedule."
       ]
     },
     {
       name: "Vertigo",
       prevention: [
         "Avoid sudden movements.",
         "Manage stress.",
         "Stay hydrated.",
         "Consult a healthcare provider for chronic symptoms."
       ],
       medicines: [
         "Antihistamines (e.g., Meclizine)",
         "Vestibular rehabilitation",
         "Benzodiazepines (short-term)"
       ],
       homeRemedies: [
         "Ginger tea for nausea.",
         "Stay hydrated.",
         "Practice balance exercises.",
         "Use acupressure for relief."
       ]
     },
     {
       name: "Appendicitis",
       prevention: [
         "Maintain a high-fiber diet.",
         "Stay hydrated.",
         "Avoid processed foods.",
         "Consult a healthcare provider for symptoms."
       ],
       medicines: [
         "Antibiotics (pre-operative)",
         "Surgery (appendectomy)"
       ],
       homeRemedies: [
         "Apply heat to the abdomen for relief.",
         "Ginger tea to reduce inflammation.",
         "Stay hydrated.",
         "Rest and avoid heavy lifting."
       ]
     },
     {
       name: "Diverticulitis",
       prevention: [
         "Eat a high-fiber diet.",
         "Stay hydrated.",
         "Exercise regularly.",
         "Consult a healthcare provider for symptoms."
       ],
       medicines: [
         "Antibiotics",
         "Pain relievers",
         "Surgery (in severe cases)"
       ],
       homeRemedies: [
         "Increase fiber intake gradually.",
         "Stay hydrated.",
         "Warm compresses on the abdomen for pain relief.",
         "Avoid seeds and nuts during flare-ups."
       ]
     },
     {
       name: "Bacterial Infections",
       prevention: [
         "Practice good hygiene.",
         "Get vaccinated (where applicable).",
         "Avoid close contact with infected individuals.",
         "Keep wounds clean and covered."
       ],
       medicines: [
         "Antibiotics (specific to the infection)",
         "Supportive care"
       ],
       homeRemedies: [
         "Garlic for its antibacterial properties.",
         "Honey for wound healing.",
         "Ginger tea to boost immunity.",
         "Stay hydrated."
       ]
     },
     {
       name: "Viral Infections",
       prevention: [
         "Practice good hygiene.",
         "Get vaccinated (where applicable).",
         "Avoid close contact with infected individuals.",
         "Wash hands frequently."
       ],
       medicines: [
         "Antivirals (specific to the virus)",
         "Supportive care"
       ],
       homeRemedies: [
         "Stay hydrated with fluids.",
         "Ginger tea for its anti-inflammatory properties.",
         "Honey and lemon for soothing.",
         "Rest to boost the immune system."
       ]
     }
   ];
   
  //  module.exports = diseasesData;
  export default diseasesData;
   