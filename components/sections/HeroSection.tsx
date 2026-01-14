import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

interface HeroSectionProps {
  darkMode: boolean;
}

export function HeroSection({ darkMode }: HeroSectionProps) {
  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
  };

  return (
    <section
      className={`py-20 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* PROFILE IMAGE */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            <Image
              src="/images/body.jpg"
              alt="Eddie Xiao profile photo"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2
              className={`text-5xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hello, I&apos;m <span className="text-blue-500">Eddie Xiao</span>
            </h2>

            <p
              className={`text-xl mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Third-year Computer Science & Economics Student at UVA
            </p>

            <p
              className={`text-lg mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full-stack Developer | AI/ML Enthusiast | Researcher
            </p>

            <p
              className={`text-base mb-8 max-w-2xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Passionate about building intelligent systems and exploring the
              intersection of technology and economics. Experienced in
              full-stack development, machine learning, and robotics research.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-colors ${
                      darkMode
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
