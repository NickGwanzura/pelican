"use client";

import { useEffect, useState } from "react";

const opensAt = Date.parse("2026-10-21T06:44:42Z");

function remainingTime() {
  return Math.max(0, opensAt - Date.now());
}

export default function ComingSoonCountdown() {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const update = () => {
      const next = remainingTime();
      setRemaining(next);
      if (next === 0) window.location.reload();
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1_000);

  return (
    <div className="coming-countdown" role="timer" aria-label="Time until the website opens">
      <div><strong>{String(hours).padStart(2, "0")}</strong><span>HOURS</span></div>
      <i aria-hidden="true">:</i>
      <div><strong>{String(minutes).padStart(2, "0")}</strong><span>MINUTES</span></div>
      <i aria-hidden="true">:</i>
      <div><strong>{String(seconds).padStart(2, "0")}</strong><span>SECONDS</span></div>
    </div>
  );
}
