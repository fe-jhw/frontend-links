/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LINKS_MD_PATH = path.join(process.cwd(), "links.md");

function getLinksMarkdown() {
  return fs.readFileSync(LINKS_MD_PATH, "utf-8");
}

export default function Home() {
  const markdown = getLinksMarkdown();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // 광고 스크립트 실행
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (_) {
        // ignore
      }
    }
  }, []);

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto py-8 px-4">
      <h1>프론트엔드 링크 모음</h1>
      {/* Google Adsense 광고 영역 */}
      <div className="flex justify-center mb-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1122929914390904"
          data-ad-slot="5363846581"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
