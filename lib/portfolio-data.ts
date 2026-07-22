export type FlowNode = {
  kicker: string
  title: string
}

export type Product = {
  name: string
  tagline: string
  metric: string
  desc: string
  tags: string[]
  skills: string[]
  flow: FlowNode[]
}

export type PersonalBuild = {
  name: string
  stack: string
  desc: string
}

export type ChatQA = {
  q: string
  sources: string[]
  a: string
}

export const products: Product[] = [
  {
    name: "Journey Assist",
    tagline: "RAG + real-time behavioral ML · BFSI",
    metric: "<200ms",
    desc: "A semantic retrieval system pairing a Qdrant vector DB with BiLSTM-generated behavioral embeddings, alongside a multi-model LLM gateway routing across OpenAI, Claude and Mistral with automatic failover — delivering grounded contextual interventions at query latency under 200ms across enterprise websites.",
    tags: ["Qdrant", "BiLSTM", "LLM Gateway", "HMM labels", "OpenAI/Claude/Mistral"],
    skills: [
      "Vector retrieval architecture with Qdrant",
      "Multi-model LLM routing with automatic failover",
      "Real-time behavioral embedding via BiLSTM",
      "Self-supervised labeling (HMM) — zero manual labels",
    ],
    flow: [
      { kicker: "INPUT", title: "User telemetry" },
      { kicker: "ENCODE", title: "BiLSTM embeddings" },
      { kicker: "STORE", title: "Qdrant retrieval" },
      { kicker: "ROUTE", title: "LLM gateway" },
      { kicker: "OUTPUT", title: "Grounded intervention" },
    ],
  },
  {
    name: "Conversational BI",
    tagline: "Agentic natural-language analytics",
    metric: "0 SQL",
    desc: "A PocketFlow agentic pipeline translating natural language into Cube.js semantic queries over a dbt star-schema warehouse, rendering real-time Plotly visualizations across ad-hoc, exploratory and dashboard modes — eliminating SQL dependency for non-technical business users.",
    tags: ["PocketFlow", "Cube.js", "dbt", "Plotly", "Agentic"],
    skills: [
      "Agentic NL→query orchestration (PocketFlow)",
      "Semantic modeling over a dbt star schema",
      "Cube.js semantic-layer integration",
      "Auto-generated Plotly visualizations",
    ],
    flow: [
      { kicker: "INPUT", title: "NL question" },
      { kicker: "AGENT", title: "PocketFlow plan" },
      { kicker: "QUERY", title: "Cube.js semantic" },
      { kicker: "DATA", title: "dbt warehouse" },
      { kicker: "OUTPUT", title: "Plotly viz" },
    ],
  },
  {
    name: "Scoutigo",
    tagline: "Multi-agent recruitment platform",
    metric: "12 buckets",
    desc: "A LangGraph-based multi-agent platform with deterministic nodes for bias-free JD generation (Clarity Score 0–100), 12-bucket SBERT-powered resume scoring, and an AI interviewer auto-generating 10–15 personalized questions per candidate with adaptive follow-up probes.",
    tags: ["LangGraph", "SBERT", "Clarity Score", "Multi-agent"],
    skills: [
      "Multi-agent orchestration with LangGraph",
      "SBERT resume scoring across 12 dimensions",
      "Deterministic, bias-free JD generation",
      "Adaptive AI interviewer with follow-up probes",
    ],
    flow: [
      { kicker: "INPUT", title: "JD + resumes" },
      { kicker: "AGENTS", title: "LangGraph nodes" },
      { kicker: "SCORE", title: "SBERT · 12 buckets" },
      { kicker: "INTERVIEW", title: "AI interviewer" },
      { kicker: "OUTPUT", title: "Ranked shortlist" },
    ],
  },
  {
    name: "Heritage Assist",
    tagline: "Voice RAG · Indian Army",
    metric: "voice",
    desc: "A speech-to-text + RAG pipeline enabling voice-based conversational access to regimental history, FAQs and institutional archives — combining Whisper-based STT with a semantic retrieval layer over ingested documents, served via FastAPI for low-latency voice query resolution.",
    tags: ["Whisper STT", "RAG", "FastAPI", "Semantic search"],
    skills: [
      "Speech-to-text integration with Whisper",
      "Voice-first RAG retrieval layer",
      "Low-latency serving on FastAPI",
      "Document ingestion & semantic indexing",
    ],
    flow: [
      { kicker: "INPUT", title: "Voice query" },
      { kicker: "STT", title: "Whisper" },
      { kicker: "RETRIEVE", title: "Semantic search" },
      { kicker: "ANSWER", title: "LLM response" },
      { kicker: "OUTPUT", title: "Voice / text" },
    ],
  },
  {
    name: "AI Gateway",
    tagline: "LLM safety & guardrail middleware",
    metric: "<2s",
    desc: "A pipeline-based AI safety middleware with 31 configurable guardrails spanning content safety, PII auto-redaction, prompt-injection defense, jailbreak detection and data-leakage prevention — processing all LLM I/O under 2s latency for enterprise deployments.",
    tags: ["31 guardrails", "PII redaction", "Jailbreak detection", "Prompt-injection"],
    skills: [
      "31-guardrail safety pipeline design",
      "PII detection & automatic redaction",
      "Prompt-injection & jailbreak defense",
      "Data-leakage prevention under 2s",
    ],
    flow: [
      { kicker: "INPUT", title: "LLM I/O" },
      { kicker: "SCAN", title: "31 guardrails" },
      { kicker: "REDACT", title: "PII removal" },
      { kicker: "DEFEND", title: "Injection block" },
      { kicker: "OUTPUT", title: "Safe output" },
    ],
  },
]

export const personalBuilds: PersonalBuild[] = [
  {
    name: "Choose and Chat — No-Code AI Chatbot Builder",
    stack: "Next.js 16 · React 19 · TypeScript · Python",
    desc: "A no-code SaaS where anyone configures and deploys an AI chatbot through a 6-step wizard and goes live with one embed snippet — persistent wizard state and a live preview panel so non-technical users watch it take shape before deploy.",
  },
  {
    name: "Cursor Project Automation Tool",
    stack: "Python · LangChain · YAML · CLI",
    desc: "A CLI that ingests a product idea and auto-generates a full local Cursor IDE project — PRD, TAD, IAD docs plus a scaffolded backend — by orchestrating LLM calls through a LangChain pipeline with YAML-driven templates.",
  },
]

export const stackList = [
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "dbt",
  "Cube.js",
  "LangGraph",
  "LangChain",
  "Qdrant",
  "RAG",
  "BiLSTM",
]

export const chatQA: Record<string, ChatQA> = {
  xerago: {
    q: "What did you ship at Xerago?",
    sources: ["resume · Experience", "6 products"],
    a: "In ~18 months at Xerago I've shipped 6 production AI products — spanning RAG pipelines, multi-agent systems, real-time ML inference and conversational BI, for BFSI, recruitment and SaaS clients. Alongside that I ran internal LLM benchmarking (GPT-4 vs Claude 3 vs Mistral vs Gemini) to tune the cost/performance tradeoff, and I mentor junior engineers on pipeline architecture.",
  },
  rag: {
    q: "Show me your RAG work",
    sources: ["Journey Assist", "Heritage Assist"],
    a: "Two flagship RAG builds. Journey Assist pairs a Qdrant vector DB with BiLSTM behavioral embeddings and a multi-model LLM gateway (OpenAI / Claude / Mistral, automatic failover) to deliver grounded interventions at under 200ms. Heritage Assist, for the Indian Army, is a voice RAG — Whisper STT over a semantic retrieval layer, served on FastAPI for low-latency voice queries.",
  },
  hard: {
    q: "Hardest problem you've solved?",
    sources: ["Journey Assist", "Real-time ML"],
    a: "The real-time ML inside Journey Assist. I built a multi-task BiLSTM that fuses behavioral telemetry — scroll velocity, dwell time, rage clicks — with semantic content embeddings to infer user intent, journey stage and friction at under 100ms. The catch was zero manual labeling: I generated labels with an HMM instead, so the whole system trains without a human annotation pipeline.",
  },
  safety: {
    q: "What is the AI Gateway?",
    sources: ["AI Gateway", "31 guardrails"],
    a: "Safety middleware with 31 configurable guardrails — content safety, PII auto-redaction, prompt-injection defense, jailbreak detection and data-leakage prevention. It processes all LLM input and output in under 2s, so enterprises can deploy models without hand-rolling their own safety layer.",
  },
  agents: {
    q: "Tell me about your multi-agent work",
    sources: ["Scoutigo", "LangGraph"],
    a: "Scoutigo — a LangGraph multi-agent recruitment platform. Deterministic nodes generate bias-free JDs with a 0–100 Clarity Score, an SBERT engine scores resumes across 12 buckets, and an AI interviewer auto-writes 10–15 personalized questions per candidate with adaptive follow-up probes.",
  },
  stack: {
    q: "What is your stack?",
    sources: ["Technical Skills"],
    a: "Python + FastAPI on the backend, Next.js / React / TypeScript on the front. Data + vector layer: Qdrant, PostgreSQL, Redis, dbt, Cube.js. AI: RAG, LangGraph, LangChain, BiLSTM, and the OpenAI / Claude / Mistral APIs. Everything ships in Docker.",
  },
}

export const chatChips = [
  { label: "What did you ship at Xerago?", key: "xerago" },
  { label: "Show me your RAG work", key: "rag" },
  { label: "Hardest problem?", key: "hard" },
  { label: "What is the AI Gateway?", key: "safety" },
]

export function matchChatKey(text: string): string {
  const t = text.toLowerCase()
  if (/gateway|guardrail|safety|pii|jailbreak|injection/.test(t)) return "safety"
  if (/rag|retriev|qdrant|vector|voice|whisper|heritage/.test(t)) return "rag"
  if (/agent|scout|langgraph|recruit|interview/.test(t)) return "agents"
  if (/hard|difficult|challenge|proud|bilstm|real.?time|ml/.test(t)) return "hard"
  if (/stack|tech|tool|language|framework/.test(t)) return "stack"
  return "xerago"
}

export const contact = {
  email: "bpraveenkumar7781@gmail.com",
  phone: "+91 63748 30654",
  phoneHref: "tel:+916374830654",
  linkedin: "https://www.linkedin.com/in/bpraveenkumarin",
  github: "https://github.com/praveenkumarb7781",
  resume: "/Praveen_Kumar_B.pdf",
  location: "Chennai, IN",
  company: "Xerago",
}
