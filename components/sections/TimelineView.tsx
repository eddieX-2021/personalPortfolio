import React from 'react';
import { ItemWithCategory } from '@/lib/types';

interface TimelineViewProps {
  items: ItemWithCategory[];
  darkMode: boolean;
}

type ParsedRange = {
  start: number; // timestamp
  end: number;   // timestamp
};

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

function parseTokenToDate(token: string, isEnd: boolean): Date | null {
  const s = token.trim().toLowerCase();

  if (s === 'present') {
    // keep Present always newest
    return new Date(9999, 11, 31);
  }

  // "2025"
  if (/^\d{4}$/.test(s)) {
    const y = Number(s);
    return isEnd ? new Date(y, 11, 31) : new Date(y, 0, 1);
  }

  // "Mar 2025" / "March 2025"
  const parts = s.split(/\s+/);
  if (parts.length === 2 && /^\d{4}$/.test(parts[1])) {
    const m = MONTHS[parts[0]];
    if (m !== undefined) {
      const y = Number(parts[1]);
      return new Date(y, m, 1);
    }
  }

  return null;
}

function parseDateRange(dateRange: string): ParsedRange {
  // expects: "June 2022 - August 2022", "2025 - Present", "Mar 2025 - Sep 2025"
  const parts = dateRange.split('-').map((p) => p.trim());
  const startRaw = parts[0] ?? '';
  const endRaw = parts[1] ?? '';

  const startDate = parseTokenToDate(startRaw, false) ?? new Date(0);
  const endDate =
    (endRaw ? parseTokenToDate(endRaw, true) : null) ??
    // if no end provided, treat as single point range
    (parseTokenToDate(startRaw, true) ?? new Date(0));

  return { start: startDate.getTime(), end: endDate.getTime() };
}

function sortByEndDateDesc(items: ItemWithCategory[]) {
  return [...items].sort((a, b) => {
    const ra = parseDateRange(a.dateRange);
    const rb = parseDateRange(b.dateRange);

    // primary: end desc
    if (rb.end !== ra.end) return rb.end - ra.end;
    // secondary: start desc
    return rb.start - ra.start;
  });
}

export function TimelineView({ items, darkMode }: TimelineViewProps) {
  const sortedItems = sortByEndDateDesc(items);

  return (
    <div
      className={`mb-12 p-6 rounded-2xl border shadow-sm ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      }`}
    >
      <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Timeline
      </h3>

      <div className="space-y-2">
        {sortedItems.map((item) => {
          const row = (
            <div className="flex gap-5 items-start">
              {/* date */}
              <div
                className={`w-28 flex-shrink-0 text-sm font-semibold ${
                  darkMode ? 'text-blue-300' : 'text-blue-600'
                }`}
              >
                {item.dateRange}
              </div>

              {/* content */}
              <div
                className={`flex-1 pb-4 border-l pl-5 ${
                  darkMode ? 'border-gray-800' : 'border-gray-200'
                }`}
              >
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </div>

                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.company}
                </div>

                {item.summary && (
                  <div className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.summary}
                  </div>
                )}
              </div>
            </div>
          );

          // clickable if link exists
          return item.link ? (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-xl p-3 -m-3 transition ${
                darkMode ? 'hover:bg-gray-800/60' : 'hover:bg-gray-50'
              }`}
            >
              {row}
            </a>
          ) : (
            <div key={item.id} className="block rounded-xl p-3 -m-3">
              {row}
            </div>
          );
        })}
      </div>
    </div>
  );
}
