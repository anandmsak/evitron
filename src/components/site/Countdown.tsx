import { useEffect, useState } from "react";

function diff(target: string) {
  const ms = new Date(target).getTime() - Date.now();
  const clamped = Math.max(0, ms);
  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped % 86400000) / 3600000),
    minutes: Math.floor((clamped % 3600000) / 60000),
    seconds: Math.floor((clamped % 60000) / 1000),
  };
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(diff(target));
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number][] = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {cells.map(([label, value]) => (
        <div key={label} className="panel px-2 py-3 text-center sm:px-4 sm:py-4">
          <div className="font-display text-2xl font-bold tabular-nums text-metal-gradient sm:text-4xl">
            {mounted ? String(value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
