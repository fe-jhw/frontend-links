/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect } from "react";

export default function AdSense() {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (_) {
      // ignore
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1122929914390904"
      data-ad-slot="5363846581"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
