export const projectsData = [
  {
    id: 1,
    slug: "juno",
    title: "Juno",
    subtitle: "Voice-Native Financial Operating System",
    category: "Voice-Native AI",
    tagline: "2nd Runner-Up — Google Cloud Agentic AI Day 2025",
    description: "Multi-agent voice-first financial advisor built for *Google Cloud Agentic AI Day 2025*. A **Coordinator MCP** orchestrates *Gemini*-powered specialist agents; users ask plain-language questions in multiple Indian languages and receive grounded financial reasoning.",
    detailedDescription: "Multi-agent advisory system where a **Coordinator MCP** orchestrates specialized *Gemini*-powered agents (*Growth, Security, Context, Feedback*). Integrated with the *Fi Money MCP Server* to securely stream normalized assets, liabilities, cash-flow, and risk metrics into agent context. Built in **30 hours** and awarded **2nd Runner-Up** among **1,941 developers** across **700+ teams** at the *Guinness World Record-certified* Google Cloud Agentic AI Day 2025.",
    features: [
      "**Multi-agent reasoning**: Coordinator MCP orchestrates *Growth, Security, Context, and Feedback* agents",
      "**Fi Money MCP integration** streams normalized assets, liabilities, cash-flow, and risk metrics into agent context",
      "**Voice-first multilingual UX** in multiple Indian languages via *Cloud Speech-to-Text + TTS* — queries like 'Could I retire at 50 if my SIP grows 12%?' converted to Monte-Carlo simulations",
      "**Monte-Carlo retirement and goal simulations** grounded with real-time market and regulatory data via *Search Grounding*",
      "**Serverless backend**: *Cloud Run* micro-agents, *Firebase Auth* (Phone-OTP, passkey), *Firestore* for per-user agent memory and life-event store"
    ],
    technologies: ["Flutter", "Vertex AI (Gemini 2.5 Flash Lite)", "Firebase", "Firestore", "Cloud Run", "Cloud Speech-to-Text", "MCP"],
    metrics: {
      recognition: "2nd Runner-Up — Google Cloud Agentic AI Day 2025",
      cohort: "1,941 developers / 700+ teams",
      prize: "INR 1 Lakh",
      stack: "Flutter + GCP serverless"
    },
    status: "Completed",
    github: null,
    demo: "https://drive.google.com/file/d/12SFmxkaDG8kcLFpLTg6fAuKgeOlFq4Y8/view?usp=sharing",
    embed: "https://drive.google.com/file/d/12SFmxkaDG8kcLFpLTg6fAuKgeOlFq4Y8/preview",
    accent: "#A8451F",
    gradient: "linear-gradient(135deg, #F4D5C2 0%, #F0DFB8 50%, #E8C5A0 100%)",
    image: "/images/agentic-ai-day-team.jpg",
    imageAlt: "Neeharika's team at Google Cloud Agentic AI Day 2025",
    gallery: [
      {
        src: "/images/agentic-ai-day-podium.jpg",
        alt: "Top 3 teams on stage during the closing ceremony, gold confetti falling",
        caption: "Closing ceremony — Top 3 winners on stage"
      }
    ]
  },
  {
    id: 2,
    slug: "digital-twin",
    title: "Wind Turbine Digital Twin",
    subtitle: "GBT Predictive Modeling on a 5D Azure Digital Twin",
    category: "Machine Learning",
    tagline: "Forecasting the wind before it arrives",
    description: "A **5G-NG-RAN-assisted cloud-based digital twin** framework on *Microsoft Azure* that virtually monitors wind turbines 24/7 and forecasts power generation. **Gradient Boosting Trees (GBT)** trained on SCADA logs achieved **94.5% accuracy** — outperforming the **KNN** baseline (92%).",
    detailedDescription: "Built a five-dimensional digital twin (PaaS) on *Microsoft Azure* connecting physical wind turbines to a virtual replica via SCADA telemetry, REST APIs, and a 5G-NG-RAN edge link (gNB-CU/DU). The two-stage ML pipeline first **forecasts wind speed** from temporal SCADA streams, then **predicts power generation** for horizons from one week up to a quarter, enabling energy management teams to plan dispatch in advance without on-site visits.",
    features: [
      "**Five-dimensional digital twin** on *Microsoft Azure* — physical entity, virtual representation, data curation, communication scheme, and services — synced via REST API to the Azure Digital Twin Explorer",
      "**Two-stage ML pipeline**: wind-speed forecasting from SCADA temporal data, then power-generation prediction across week / month / quarter horizons",
      "**Gradient Boosting Trees regression** (CART base learners with shrinkage) achieving **94.5% accuracy** — beat the KNN baseline (92%) on the same SCADA dataset",
      "**5G-NG-RAN edge link** splits gNB into Control Unit (AMF/UPF/security) and Distributed Unit at the wind farm — lower latency, better coverage, less near-farm data-center cost",
      "**24/7 virtual monitoring** of wind speed, direction, generated power, and theoretical power for geographically isolated wind farms — eliminating one-day analyst snapshots"
    ],
    technologies: ["Python", "Microsoft Azure", "Gradient Boosting Trees", "SCADA", "5G-NG-RAN", "REST API", "Pandas", "NumPy", "Matplotlib"],
    metrics: {
      accuracy: "94.5% (GBT) vs 92% (KNN baseline)",
      platform: "Microsoft Azure (5D Digital Twin, PaaS)",
      dataSource: "SCADA temporal streams",
      focus: "Wind-speed forecasting & power-generation prediction"
    },
    status: "Completed",
    github: null,
    demo: null,
    embed: null,
    accent: "#1A6B4A",
    gradient: "linear-gradient(135deg, #C8E6DA 0%, #A8D5C2 50%, #7EC4A8 100%)"
  },
  {
    id: 3,
    slug: "fake-account-detection",
    title: "Fake and Clone Account Detection",
    subtitle: "SVM Classifier + Distance Measures for Twitter OSN",
    category: "NLP & Social AI",
    tagline: "Hyperplanes against the imposters",
    description: "Detection of **fake and clone profiles** on Twitter using **SVM classification** combined with **distance-measure algorithms** (Jaccard, Cosine, Euclidean) to spot both *Same-Site* and *Cross-Site* profile cloning attacks across Online Social Networks.",
    detailedDescription: "Built a two-pronged detection system that addresses two distinct OSN threats: **fake profiles** (impersonation accounts created for malicious activity) and **clone profiles** (existing user details stolen to create duplicates on the same or a different network). Replaced the existing decision-tree baseline — which is unstable on noisy Twitter data and overfits — with an **SVM** that uses kernel-based separation in high-dimensional feature space.",
    features: [
      "**SVM classifier** with kernel functions (Linear, Polynomial, RBF) — chosen over decision trees to avoid overfitting and handle high-dimensional, noisy social-network features",
      "**Distance-measure algorithms** — Jaccard Similarity, Cosine Similarity, and Euclidean Distance — score profile/tweet similarity to flag clone candidates",
      "Detects both **Same-Site Profile Cloning** (duplicate within Twitter) and **Cross-Site Profile Cloning** (Twitter identity reused on another network)",
      "Feature engineering across **user metadata, tweet content, and network interactions** for the labeled OSN dataset",
      "**Two-tier UI** — Service Provider admin interface for dataset/account management, and a Remote User interface to query tweet scores and view flagged fake/clone accounts"
    ],
    technologies: ["Python", "SVM", "RBF Kernel", "Jaccard Similarity", "Cosine Similarity", "Euclidean Distance", "NLP", "Twitter Dataset"],
    metrics: {
      classifier: "SVM (replacing decision-tree baseline)",
      similarity: "Jaccard / Cosine / Euclidean",
      features: "Metadata + tweet content + network interactions",
      focus: "Same-Site & Cross-Site profile-clone detection"
    },
    status: "Completed",
    github: null,
    demo: null,
    embed: null,
    accent: "#3B3B8F",
    gradient: "linear-gradient(135deg, #D4D4F0 0%, #B8B8E0 50%, #9494CC 100%)"
  },
  {
    id: 4,
    slug: "sign-language-detection",
    title: "Dynamic Sign Language Detection",
    subtitle: "MediaPipe Holistic + LSTM for Indian Sign Language",
    category: "Deep Learning",
    tagline: "IEEE INNOCOMP 2024 — Published Research (DOI 10.1109/INNOCOMP63224.2024.00061)",
    description: "Co-authored deep-learning system for **dynamic Indian Sign Language (ISL) recognition** combining *MediaPipe Holistic* keypoint extraction with a **stacked LSTM** classifier. Achieves **96% testing accuracy** — outperforming CNN (91.9%) and KNN (85%) baselines. Published at **IEEE INNOCOMP 2024**.",
    detailedDescription: "Designed a real-time dynamic sign-language pipeline that converts ISL gestures to text/speech for the deaf and hard-of-hearing community. *MediaPipe Holistic* extracts hand, body, and face landmarks frame-by-frame; **30-frame sequences** are stored as NumPy arrays and fed into a **two-layer LSTM** for temporal classification. Trained on **2,000 videos** (80/20 split) on a Google Colab Tesla T4 GPU using *Keras*; OpenCV drives live webcam inference and gesture-to-speech output.",
    features: [
      "**MediaPipe Holistic** captures hand, body, and face keypoints simultaneously — stored as NumPy arrays in **30-frame sequence windows**",
      "**Stacked LSTM** (2 layers, 64 units, dropout 0.2, Adam, 50 epochs) — accuracy climbs from **90.5% → 96%** across training, beating CNN (89.2 → 91.9%) and KNN (70.8 → 85%) baselines",
      "**93% training / 96% testing accuracy** on a custom 2,000-video ISL dataset (80% train / 20% validation)",
      "**Real-time inference** via OpenCV webcam pipeline — concurrent gesture-to-speech transcription for ISL → English",
      "Published as *'Dynamic Sign Language Detection System using MediaPipe Holistic and LSTM-based Deep Learning Model'* at **IEEE INNOCOMP 2024**, B.M Institute of Engineering & Technology, Sonipat — May 2024"
    ],
    technologies: ["Python", "MediaPipe Holistic", "LSTM", "Keras", "TensorFlow", "OpenCV", "NumPy", "Adam Optimizer"],
    metrics: {
      publication: "IEEE INNOCOMP 2024 (DOI 10.1109/INNOCOMP63224.2024.00061)",
      accuracy: "96% testing / 93% training",
      dataset: "2,000 ISL videos (80/20 split)",
      focus: "Real-time ISL → text/speech for accessibility"
    },
    status: "Published",
    github: null,
    demo: null,
    embed: "https://ieeexplore.ieee.org/document/10664073",
    accent: "#7C2D5F",
    gradient: "linear-gradient(135deg, #F0D4DD 0%, #E0B8C8 50%, #C595A8 100%)"
  }
];

export const projectCategories = [
  "All",
  "Voice-Native AI",
  "Machine Learning",
  "NLP & Social AI",
  "Deep Learning"
];

export const featuredProjects = [1, 2, 3, 4];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);
