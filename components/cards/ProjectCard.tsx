import React from "react";
import { ChevronRight } from "lucide-react";
import { ItemWithCategory } from "@/lib/types";
import { TechStackBadge } from "./TechStackBadge";

interface ProjectCardProps {
  item: ItemWithCategory;
  darkMode: boolean;
}

export function ProjectCard({ item, darkMode }: ProjectCardProps) {
  return (
    <div
      className={`rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
        darkMode
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3
              className={`text-lg sm:text-xl font-semibold leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`mt-1 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {item.company}
            </p>
          </div>

          <span
            className={`shrink-0 text-xs px-3 py-1 rounded-full font-medium ${
              darkMode
                ? "bg-blue-950 text-blue-200 border border-blue-900/40"
                : "bg-blue-50 text-blue-700 border border-blue-100"
            }`}
          >
            {item.dateRange}
          </span>
        </div>

        {/* Summary */}
        {item.summary && (
          <p
            className={`text-sm leading-relaxed mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {item.summary}
          </p>
        )}

        {/* Description (optional) */}
        {"description" in item && item.description && (
          <p
            className={`text-sm leading-relaxed mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {item.description}
          </p>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.techStack.map((tech, idx) => (
            <TechStackBadge key={idx} tech={tech} darkMode={darkMode} />
          ))}
        </div>

        {/* Link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              darkMode
                ? "text-blue-300 hover:text-blue-200"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            View Details <ChevronRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
