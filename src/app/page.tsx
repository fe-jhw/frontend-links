import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AdSense from "@/components/AdSense";
import SideAd from "@/components/SideAd";

const LINKS_MD_PATH = path.join(process.cwd(), "links.md");

function getLinksMarkdown() {
  return fs.readFileSync(LINKS_MD_PATH, "utf-8");
}

export default function Home() {
  const markdown = getLinksMarkdown();

  return (
    <div className="flex justify-center">
      {/* 왼쪽 광고 */}
      <div className="hidden lg:block mr-4">
        <AdSense />
      </div>
      {/* 본문 */}
      <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto py-8 px-4">
        <h1>
          <span role="img" aria-label="globe">
            🌐
          </span>{" "}
          프론트엔드 링크 모음
        </h1>
        {/* Google Adsense 광고 영역(본문 상단은 제거) */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
      {/* 오른쪽 광고 */}
      <div className="hidden lg:block ml-4">
        <SideAd />
      </div>
    </div>
  );
}
