const MONTHS: Record<string, number> = {
  jan: 0, january: 0,
  feb: 1, february: 1,
  mar: 2, march: 2,
  apr: 3, april: 3,
  may: 4,
  jun: 5, june: 5,
  jul: 6, july: 6,
  aug: 7, august: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, october: 9,
  nov: 10, november: 10,
  dec: 11, december: 11,
};

function parseMonthYear(token: string): Date | null {
  const s = token.trim().toLowerCase();

  // "Present"
  if (s === "present") return new Date(9999, 11, 31);

  // "2025"
  if (/^\d{4}$/.test(s)) return new Date(Number(s), 11, 31);

  // "Mar 2025" or "March 2025"
  const parts = s.split(/\s+/);
  if (parts.length === 2 && /^\d{4}$/.test(parts[1])) {
    const m = MONTHS[parts[0]];
    if (m !== undefined) return new Date(Number(parts[1]), m, 1);
  }

  return null;
}

export function getRangeEnd(dateRange: string): Date {
  // supports: "June 2022 - August 2022", "Mar 2025 - Sep 2025", "2025 - Present"
  const [startRaw, endRaw] = dateRange.split("-").map(s => s.trim());

  const end = endRaw ? parseMonthYear(endRaw) : null;
  if (end) return end;

  // fallback: if no end, treat start as end
  const start = startRaw ? parseMonthYear(startRaw) : null;
  return start ?? new Date(0);
}

export function getRangeStart(dateRange: string): Date {
  const [startRaw] = dateRange.split("-").map(s => s.trim());
  const start = startRaw ? parseMonthYear(startRaw) : null;
  return start ?? new Date(0);
}
