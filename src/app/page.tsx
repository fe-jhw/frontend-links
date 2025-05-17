import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AdSense from "@/components/AdSense";

const LINKS_MD_PATH = path.join(process.cwd(), "links.md");

function getLinksMarkdown() {
  return fs.readFileSync(LINKS_MD_PATH, "utf-8");
}

export default function Home() {
  const markdown = getLinksMarkdown();

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto py-8 px-4">
      <h1>
        <span role="img" aria-label="globe">
          🌐
        </span>{" "}
        프론트엔드 링크 모음
      </h1>
      {/* Google Adsense 광고 영역 */}
      <div className="flex justify-center mb-8">
        <AdSense />
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
