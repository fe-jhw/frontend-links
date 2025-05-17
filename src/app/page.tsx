import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LINKS_MD_PATH = path.join(process.cwd(), "links.md");

function getLinksMarkdown() {
  return fs.readFileSync(LINKS_MD_PATH, "utf-8");
}

export default function Home() {
  const markdown = getLinksMarkdown();
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto py-8 px-4">
      <h1>프론트엔드 링크 모음</h1>
      {/* Google Adsense 광고 영역 */}
      <div className="flex justify-center mb-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
