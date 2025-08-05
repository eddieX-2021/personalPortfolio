import React from 'react'
import {
  FaPython,
  FaJava,
  FaAws,
  FaReact,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaEnvelope,
} from 'react-icons/fa'
import {
  SiFlask,
  SiPostgresql,
  SiR,
  SiGooglemaps,
  SiKotlin,
  SiPytorch,
  SiAndroid,
  SiFigma,
  SiAnaconda,
  SiJsonwebtokens,
  SiMongodb,
} from 'react-icons/si'

// custom SVG for MATLAB
export const MatlabIcon = ({ size = 20, color = '#0076a8' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M3.433 17.325 4.49 20.16l1.554-3.642.006-.003.006.003 1.554 3.642 1.055-2.835 3.9-8.923s-6.325 4.037-9.132 7.923zM16.57 11.726l-3.9 8.923s6.325-4.037 9.132-7.923l-1.055 2.835-1.554-3.642-.006-.003-.006.003-1.554 3.642-1.055-2.835z"/>
  </svg>
)

// custom SVG for Auth0
export const Auth0Icon = ({ size = 20, color = '#eb5424' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-16c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
  </svg>
)

// custom SVG for NAOqi
export const NaoqiIcon = ({ size = 20, color = '#ff6600' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
)

// custom SVG for AutoGen
export const AutogenIcon = ({ size = 20, color = '#4CAF50' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
)

// custom SVG for Llama-2
export const LlamaIcon = ({ size = 20, color = '#ff9900' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
)

export const techIcons = {
  matlab:            { component: MatlabIcon,      color: '#0076a8' },
  python:            { component: FaPython,         color: '#3776ab' },
  aws:               { component: FaAws,            color: '#ff9900' },
  java:              { component: FaJava,           color: '#007396' },
  react:             { component: FaReact,          color: '#61dafb' },
  auth0:             { component: Auth0Icon,        color: '#eb5424' },
  naoqi:             { component: NaoqiIcon,        color: '#ff6600' },
  autogen:           { component: AutogenIcon,      color: '#4CAF50' },
  llama:             { component: LlamaIcon,        color: '#ff9900' },
  pytorch:           { component: SiPytorch,        color: '#EE4C2C' },
  flask:             { component: SiFlask,          color: '#000000' },
  html:              { component: FaHtml5,          color: '#E34F26' },
  javascript:        { component: FaJs,             color: '#F7DF1E' },
  nodejs:            { component: FaNodeJs,         color: '#339933' },
  sql:               { component: FaDatabase,       color: '#4479A1' },
  postgresql:        { component: SiPostgresql,     color: '#336791' },
  r:                 { component: SiR,              color: '#276DC3' },
  googlemaps:        { component: SiGooglemaps,     color: '#4285F4' },
  kotlin:            { component: SiKotlin,        color: '#A97BFF' },
  androidstudio:     { component: SiAndroid,        color: '#3ddc84' },
  figma:             { component: SiFigma,          color: '#F24E1E' },
  conda:             { component: SiAnaconda,       color: '#44A833' },
  jwt:               { component: SiJsonwebtokens, color: '#000000' },
  mongodb:           { component: SiMongodb,        color: '#47A248' },
  shadcn:            { component: FaReact,          color: '#61dafb' },
  emailjs:           { component: FaEnvelope,       color: '#D44638' },
  frontend:          { component: FaReact,          color: '#61dafb' },
  webui:             { component: FaReact,          color: '#61dafb' },
  // NOTE: for the following—FastAPI, Streamlit, OpenCV, Next.js, Hugging Face—
  // your version of react-icons doesn’t export those yet.
  // they’ll just render a one-letter placeholder:
}

export const TechIcon = ({ name, size = 20 }) => {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  const iconData = techIcons[key]
  if (!iconData) {
    // fallback: first letter
    return (
      <div
        style={{
          width: size,
          height: size,
          lineHeight: size + 'px',
          textAlign: 'center',
          borderRadius: '4px',
          background: '#eee',
          color: '#555',
          fontSize: size * 0.75
        }}
      >
        {name[0].toUpperCase()}
      </div>
    )
  }
  const Icon = iconData.component
  return <Icon size={size} color={iconData.color} />
}
