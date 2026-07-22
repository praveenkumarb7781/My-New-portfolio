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

Associate AI Software Engineer — Xerago, Chennai, Tamil Nadu — Jan 2025 – Present
• Designed and shipped 6 enterprise-grade AI products spanning RAG pipelines, multi-agent systems, real-time ML inference, and conversational BI for clients across BFSI, recruitment, and SaaS verticals.
• Led internal LLM benchmarking comparing GPT-4, Claude 3, Mistral, and Gemini to optimize cost-performance tradeoffs; mentored junior engineers on AI pipeline architecture and LangChain best practices.

## Technical Skills

AI / ML: RAG • LLMs • Prompt Engineering • BiLSTM • Agentic AI • LangGraph • LangChain • Qdrant • OpenAI API
Stack: Python • FastAPI • Next.js • React • TypeScript • PostgreSQL • Redis • Docker • dbt • Cube.js

## Education

B.Tech in Artificial Intelligence — 8.54 CGPA — 2020 – 2024 — Mahendra Institutions
`.trim()
