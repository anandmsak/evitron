/**
 * Deterministic placeholder QR-style block.
 * TODO(backend): replace with a real QR encoding the registration id.
 */
export function MockQr({ value, size = 168 }: { value: string; size?: number }) {
  const grid = 21;
  let seed = 0;
  for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) % 100000;

  const cells: boolean[] = [];
  let s = seed || 7;
  for (let i = 0; i < grid * grid; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    cells.push((s >> 16) % 2 === 0);
  }

  const boxes: [number, number][] = [
    [0, 0],
    [0, grid - 7],
    [grid - 7, 0],
  ];

  const finder = (r: number, c: number): boolean | null => {
    for (const [r0, c0] of boxes) {
      if (r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7) {
        const dr = r - r0;
        const dc = c - c0;
        const ring = dr === 0 || dr === 6 || dc === 0 || dc === 6;
        const core = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
        return ring || core;
      }
      if (r < r0 + 8 && r >= r0 - 1 && c < c0 + 8 && c >= c0 - 1) return false;
    }
    return null;
  };

  return (
    <div
      className="rounded-lg bg-foreground p-3"
      style={{ width: size, height: size }}
      aria-label={`QR placeholder for ${value}`}
      role="img"
    >
      <div
        className="grid h-full w-full"
        style={{ gridTemplateColumns: `repeat(${grid}, 1fr)`, gridTemplateRows: `repeat(${grid}, 1fr)` }}
      >
        {cells.map((on, i) => {
          const r = Math.floor(i / grid);
          const c = i % grid;
          const f = finder(r, c);
          const dark = f === null ? on : f;
          return <div key={i} className={dark ? "bg-background" : "bg-foreground"} />;
        })}
      </div>
    </div>
  );
}
