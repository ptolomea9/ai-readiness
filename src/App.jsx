
import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import GlossaryTooltip from "./components/ui/glossary-tooltip";

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

        <Tabs defaultValue="foundation" className="mt-8">
          <TabsList className="flex justify-start flex-wrap gap-2">
            <TabsTrigger value="foundation">Data Foundations</TabsTrigger>
            <TabsTrigger value="bidding">Smart Bidding</TabsTrigger>
            <TabsTrigger value="dsa">DSA & Feed Automation</TabsTrigger>
            <TabsTrigger value="ai">AI Creative + Media</TabsTrigger>
          </TabsList>

          <TabsContent value="foundation">
            <Card className="mt-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">The Shift to First-Party Data</h2>
                <p className="text-slate-700">
                  With cookies deprecating and privacy legislation tightening, advertisers must rely on owned audience data.
                  Ensure consent is captured and CRM systems are integrated with platforms like Google Ads and Microsoft Ads.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bidding">
            <Card className="mt-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">Smart Bidding: From Rules to AI</h2>
                <p className="text-slate-700 mb-4">
                  Google and Microsoft continue improving auction-time bidding using AI to process user intent, context, and likelihood to convert.
                </p>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversionLiftData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="lift" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dsa">
            <Card className="mt-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">Dynamic Search Ads + Feeds</h2>
                <p className="text-slate-700">
                  Use DSA for long-tail coverage and feed-based campaigns for scale. Tag pages, categorize content, and let AI surface the most relevant ad experience.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai">
            <Card className="mt-4">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">AI Media Planning & Creative</h2>
                <p className="text-slate-700 mb-4">
                  Large Language Models (LLMs) are being integrated into Performance Max and campaign management. Google’s Gemini and Microsoft’s Copilot aim to reduce manual lift and spark creative ideation.
                </p>
                <iframe
                  className="w-full aspect-video rounded"
                  src="https://www.youtube.com/embed/oQFjZGGYqSk"
                  title="AI in Google Marketing Live 2024"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <Button size="lg">Download the Full 2025 Readiness PDF</Button>
        </div>
      </section>
    </main>
  );
}
