/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect } from "react";

export default function SideAd() {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (_) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: 160, height: 600 }}
      data-ad-client="ca-pub-1122929914390904"
      data-ad-slot="6325574466"
      data-ad-format="auto"
    ></ins>
  );
}
