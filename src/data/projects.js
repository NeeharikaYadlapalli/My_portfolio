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
    subtitle: "ML-Based Predictive Modeling Framework",
    category: "Machine Learning",
    tagline: "5G-NG-RAN Assisted Cloud-Based Research Project",
    description: "A **5G-NG-RAN assisted cloud-based digital twin** framework using *Microsoft Azure* to virtually monitor wind turbines and predict power generation. *Gradient Boosting Trees* regression on SCADA data achieves **85% accuracy** in forecasting wind speed and energy output.",
    detailedDescription: "Developed a machine learning-based digital twin framework that leverages 5G-NG-RAN connectivity and *Microsoft Azure* cloud infrastructure to create a virtual replica of wind turbines. The system uses **Gradient Boosting Trees (GBT)** regression trained on real SCADA sensor data to predict power generation patterns in real time.",
    features: [
      "**5G-NG-RAN assisted cloud framework** on *Microsoft Azure* for low-latency virtual monitoring",
      "**GBT regression model** trained on SCADA data achieving **85% accuracy** in wind speed and energy forecasting",
      "Real-time digital twin synchronization between physical turbine and virtual model",
      "Predictive maintenance alerts based on anomaly detection in sensor readings",
      "Scalable cloud architecture supporting multi-turbine farm monitoring"
    ],
    technologies: ["Python", "Microsoft Azure", "GBT Regression", "SCADA", "5G-NG-RAN", "Pandas", "NumPy", "Matplotlib"],
    metrics: {
      accuracy: "85% forecasting accuracy",
      platform: "Microsoft Azure",
      dataSource: "SCADA sensors",
      focus: "Predictive Maintenance & Energy"
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
    title: "Fake Account Detection",
    subtitle: "Twitter Clone & Bot Profile Classifier",
    category: "NLP & Social AI",
    tagline: "SVM-Based Social Network Security",
    description: "ML-based system detecting **fake and clone profiles** on Twitter using **Support Vector Machine (SVM)** classification — analyzing user metadata, tweet content, and behavioral features to identify malicious accounts in Online Social Networks.",
    detailedDescription: "Built a comprehensive machine learning pipeline to identify fake, clone, and bot accounts on Twitter. The system analyzes multi-dimensional user signals including profile metadata, tweet frequency patterns, follower-following ratios, and linguistic content features using a **Support Vector Machine** classifier.",
    features: [
      "**SVM classifier** trained on labeled Twitter user profiles with multi-class detection (fake, clone, genuine)",
      "Feature engineering across **user metadata** (profile age, bio completeness, verification status)",
      "**Tweet content analysis** using NLP — linguistic patterns, repetition detection, sentiment consistency",
      "**Behavioral feature extraction** — posting frequency, retweet ratios, engagement anomalies",
      "Distance measure algorithms for clone detection based on profile similarity scoring"
    ],
    technologies: ["Python", "Scikit-learn", "SVM", "NLP", "Pandas", "NumPy", "Twitter API"],
    metrics: {
      classifier: "Support Vector Machine",
      features: "User metadata + tweet content + behavioral",
      target: "Online Social Networks (OSN)",
      focus: "Social Media Security"
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
    subtitle: "MediaPipe Holistic + LSTM Deep Learning",
    category: "Deep Learning",
    tagline: "IEEE Published Research — INNOCOMP 2024",
    description: "Co-authored research on a **dynamic sign language detection system** using *MediaPipe Holistic* and **LSTM-based deep learning**. Detects full-body gesture sequences in real time. Presented at **IEEE conference**, May 2024.",
    detailedDescription: "Research project developing a real-time dynamic sign language recognition system that combines *MediaPipe Holistic* for full-body landmark extraction with an **LSTM-based deep learning model** for temporal sequence classification. The system processes video frames to detect hand, face, and body keypoints, enabling robust recognition of dynamic gestures.",
    features: [
      "**MediaPipe Holistic** extracts 543 keypoints per frame — hands, face, and body pose simultaneously",
      "**LSTM neural network** classifies temporal sequences of keypoint data for dynamic gesture recognition",
      "Real-time inference pipeline processing live webcam feed with low latency",
      "Multi-class sign classification with confidence scoring and gesture disambiguation",
      "Published research at **IEEE conference** under Emerging Innovations and Advanced Computing — May 2024"
    ],
    technologies: ["Python", "MediaPipe", "LSTM", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
    metrics: {
      publication: "IEEE INNOCOMP 2024",
      keypoints: "543 per frame",
      model: "LSTM sequence classifier",
      focus: "Accessibility & HCI"
    },
    status: "Published",
    github: null,
    demo: null,
    embed: null,
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
