import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { withBasePath } from "@/lib/utils"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Praveen Kumar | Applied AI Engineer",
  description:
    "Applied AI Engineer in Chennai — RAG, agents & real-time ML. 6 shipped products across BFSI, recruitment & enterprise analytics.",
  generator: "v0.app",
  icons: {
    icon: [{ url: withBasePath("/favicon.png"), type: "image/png" }],
    shortcut: withBasePath("/favicon.png"),
    apple: [{ url: withBasePath("/apple-touch-icon.png"), type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
