/** Extracted text from Praveen_Kumar_B_12_5.pdf for Ask-me grounding. */
export const RESUME_DOCUMENT = `
Praveen Kumar B
Applied AI Engineer
Chennai, Tamil Nadu | bpraveenkumar7781@gmail.com | +91 63748 30654
linkedin.com/in/bpraveenkumarin | github.com/praveenkumarb7781

Building production AI systems at the intersection of RAG, LLM orchestration, and real-time ML — 6 shipped products across BFSI, recruitment, and enterprise analytics.

## Core — Skills Demonstrated Through Products

RAG Pipeline & LLM Orchestration [ Journey Assist ]
Built a semantic retrieval system pairing Qdrant vector DB with BiLSTM-generated behavioral embeddings, alongside a multi-model LLM Gateway routing across OpenAI, Claude, and Mistral with automatic failover — delivering grounded contextual interventions at <200ms query latency across enterprise websites.

Real-Time ML Model Design [ Journey Assist ]
Architected a multi-task BiLSTM pipeline fusing behavioral telemetry signals (scroll velocity, dwell time, rage clicks) with semantic content embeddings to infer user intent, journey stage, and friction at <100ms inference — zero manual labeling via HMM-based label generation.

Conversational BI & Agentic Query Orchestration [ Conversational BI ]
Designed a PocketFlow agentic pipeline translating natural language into Cube.js semantic queries over a dbt star-schema warehouse, rendering real-time Plotly visualizations across ad-hoc, exploratory, and dashboard modes — eliminating SQL dependency for non-technical business users.

Multi-Agent Pipeline Design & Interview Question Generation [ Scoutigo ]
Built a LangGraph-based multi-agent recruitment platform with deterministic nodes for bias-free JD generation (Clarity Score 0–100), 12-bucket SBERT-powered resume scoring, and an AI interviewer auto-generating 10–15 personalized questions per candidate with adaptive follow-up probes.

Heritage Voice RAG [ Indian Army — Heritage Assist ]
Developed a speech-to-text + RAG pipeline enabling voice-based conversational access to regimental history, FAQs, and institutional archives — combining Whisper-based STT with a semantic retrieval layer over ingested documents, served via FastAPI for low-latency voice query resolution.

LLM Safety & Guardrail Engineering [ AI Gateway ]
Engineered a pipeline-based AI safety middleware with 31 configurable guardrails spanning content safety, PII auto-redaction, prompt injection defense, jailbreak detection, and data leakage prevention — processing all LLM I/O under 2s latency for enterprise deployments.

## Personal Builds

Choose and Chat — No-Code AI Chatbot Builder (Next.js 16 • React 19 • TypeScript • Python)
Built a no-code SaaS platform where anyone configures and deploys an AI chatbot through a 6-step wizard (data source, modules, design, settings) and goes live with a single embed snippet. Designed with persistent wizard-context state across steps and a live preview panel so non-technical users can see their chatbot take shape before deploying.

Cursor Project Automation Tool (Python • LangChain • YAML • CLI)
Built a CLI tool that ingests a product idea and auto-generates a full local Cursor IDE project structure — including PRD, TAD, IAD documents and a scaffolded backend — by orchestrating LLM calls through a LangChain pipeline with YAML-driven template rendering.

## Experience

AI Software Engineer — Xerago, Chennai, Tamil Nadu — Jul 2025 – Present
• Shipping production Applied AI systems — RAG, multi-agent platforms, real-time ML, and conversational BI for BFSI, recruitment, and SaaS clients.
• Owns end-to-end delivery across FastAPI + React, multi-model LLM orchestration, and mentoring juniors on pipeline architecture.

AI Engineer — Xerago, Chennai, Tamil Nadu — Jan 2025 – Jun 2025
• Designed & shipped enterprise GenAI apps with LangChain, RAG pipelines, and full-stack FastAPI / React journeys.
• Built multi-model orchestration (OpenAI, Claude, Mistral), prompt evaluation workflows, and Smart Assist integrations that lifted engagement ~30%.

Intern — Artificial Intelligence (Innovation) — Xerago, Chennai, Tamil Nadu — Nov 2024 – Dec 2024
• Built AI prototypes with LLMs, ML algorithms, prompt workflows, and early agentic patterns on the Innovation team.

Technical Trainer — CSC Computer Education Pvt Ltd, Cuddalore, Tamil Nadu — Mar 2024 – Jul 2024
• Trained learners on core computing and technology fundamentals.

Data Annotator — TECHY GEEKS, Puducherry — Dec 2023 – Jan 2024
• Labeled and structured datasets for ML workflows.

Career map at Xerago: Intern → AI Engineer → AI Software Engineer (Applied AI).

## Technical Skills

AI / ML: RAG • LLMs • Prompt Engineering • BiLSTM • Agentic AI • LangGraph • LangChain • Qdrant • OpenAI API
Stack: Python • FastAPI • Next.js • React • TypeScript • PostgreSQL • Redis • Docker • dbt • Cube.js

## Education

B.Tech in Artificial Intelligence — 8.54 CGPA — 2020 – 2024 — Mahendra Institutions
`.trim()
