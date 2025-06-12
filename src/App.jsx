
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import Link from "next/link";
import GlossaryTooltip from "@/components/ui/glossary-tooltip";

const conversionLiftData = [
  { name: "AI Max", lift: 27 },
  { name: "Performance Max", lift: 18 },
  { name: "Smart Bidding", lift: 20 },
];

const glossary = {
  "DSA": "Dynamic Search Ads. Google Ads format that automatically shows your ad based on content from your website.",
  "First-party data": "Information collected directly from your audience or customers, such as email addresses, purchase history, and site interactions."
};

function GlossaryInline({ children }) {
  const terms = Object.keys(glossary);
  const parsed = children.split(/(DSA|First-party data)/g).map((word, i) => {
    if (terms.includes(word)) {
      return (
        <GlossaryTooltip key={i} term={word} definition={glossary[word]}>
          <span className="underline decoration-dotted cursor-help text-blue-700">{word}</span>
        </GlossaryTooltip>
      );
    }
    return <span key={i}>{word}</span>;
  });
  return <>{parsed}</>;
}

export default function App() {
  const [showChart, setShowChart] = useState(true);

  return (
    <main className="p-6 bg-gradient-to-br from-slate-100 to-white min-h-screen">
      <section className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-slate-900"
        >
          AI Readiness in Paid Search Advertising
        </motion.h1>
        <p className="text-lg text-slate-600 mb-8">
          <GlossaryInline>
            2025 Strategic Guide for SMBs & Enterprises. Insights from Google Marketing Live and Microsoft Advertising's AI trajectory including smart bidding, DSA, and applications of First-party data.
          </GlossaryInline>
        </p>

        {/* Additional Tabs and Content Sections Go Here */}

        <div className="text-center mt-10">
          <Button size="lg">Download the Full 2025 Readiness PDF</Button>
        </div>
      </section>
    </main>
  );
}
