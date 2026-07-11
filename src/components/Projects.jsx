import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "AI-Powered Automatic Attendance System",
    description: "Features n8n, Python, ML/Face Recognition. Seamless webcam integration removes manual entry.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000",
    links: { live: "#", github: "#" },
    code: `import face_recognition
import cv2
import numpy as np

# Initialize webcam
video_capture = cv2.VideoCapture(0)
known_face_encodings = [load_encoding("admin.jpg")]
known_face_names = ["Aldrin K Johni"]

while True:
    ret, frame = video_capture.read()
    rgb_frame = frame[:, :, ::-1]
    
    # Find all faces in the current frame
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        if True in matches:
            mark_attendance("Aldrin K Johni")`
  },
  {
    id: "02",
    title: "Worker Finance & Labor Management",
    description: "Visualizes complex workforce data. Clean single-page UI/UX concept.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    links: { live: "#", github: "#" },
    code: `const express = require('express');
const db = require('../config/database');
const LaborMetrics = require('../models/LaborMetrics');

// Fetch financial distribution analytics
router.get('/salary-distribution', async (req, res) => {
  try {
    const data = await LaborMetrics.aggregate([
      { $group: { _id: "$dept", total: { $sum: "$payout" } } }
    ]);
    res.status(200).json({ success: true, payload: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`
  },
  {
    id: "03",
    title: "Cinematic Title Sequence Concept",
    description: "High-end motion design inspired by modern cinema layouts. Focus on structural pacing and storytelling.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    links: { live: "#", github: "#" },
    code: `#version 300 es
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
out vec4 fragColor;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float glow = sin(uv.x * 10.0 + u_time) * 0.5 + 0.5;
    vec3 scarlet = vec3(1.0, 0.14, 0.0);
    vec3 darkSurface = vec3(0.05, 0.05, 0.05);
    
    vec3 finalColor = mix(darkSurface, scarlet, glow * 0.15);
    fragColor = vec4(finalColor, 1.0);
}`
  }
];

const XRayReveal = ({ image, title, codeSnippet }) => {
  const containerRef = useRef(null);
  const [mouseX, setMouseX] = useState(50);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setMouseX(percentage);
  };

  const handleMouseLeave = () => {
    setMouseX(50);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-64 md:h-80 overflow-hidden cursor-ew-resize bg-black select-none rounded-t-lg"
    >
      {/* Base Layer (Monospace Code representation) */}
      <div className="absolute inset-0 p-6 font-mono text-[10px] text-gray-500 overflow-hidden opacity-75 bg-[#080808] leading-relaxed select-none">
        <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
      </div>

      {/* Top Layer (Polished Image) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${mouseX}% 0, ${mouseX}% 100%, 0 100%)`,
          willChange: 'clip-path'
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-scarlet pointer-events-none"
        style={{
          left: `${mouseX}%`,
          boxShadow: '0 0 15px #FF2400',
          willChange: 'left'
        }}
      />
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="projects" className="relative h-[400vh] bg-dark-bg">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center px-6 md:px-12">
        <div className="container mx-auto max-w-5xl w-full flex flex-col items-center">
          
          <div className="w-full mb-12 text-left self-start">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
              Selected <span className="text-gray-500">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-scarlet mt-4" />
          </div>

          {/* Perspective Container */}
          <div 
            className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            {projects.map((project, index) => {
              // 3D Stacking Deck transforms
              // Each card has its active stage
              const start = index * 0.25;
              const end = (index + 1) * 0.25;

              // Translate cards forward past the camera
              const z = useTransform(scrollYProgress, [start, end], [index * -50, 0]);
              const rotateX = useTransform(scrollYProgress, [start, end], [15, 0]);
              
              // Scale card up to fly past camera
              const scale = useTransform(scrollYProgress, [start, end, end + 0.15], [0.95 - index * 0.05, 1, 2.5]);
              const opacity = useTransform(scrollYProgress, [start, end, end + 0.1], [0.6 - index * 0.2, 1, 0]);

              return (
                <motion.div
                  key={project.id}
                  style={{
                    z,
                    rotateX,
                    scale,
                    opacity,
                    zIndex: projects.length - index,
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity"
                  }}
                  className="absolute w-full max-w-4xl bg-dark-surface border border-dark-border rounded-lg shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-12"
                >
                  {/* Left Column: X-Ray Slider */}
                  <div className="col-span-12 md:col-span-6 relative">
                    <XRayReveal
                      image={project.image}
                      title={project.title}
                      codeSnippet={project.code}
                    />
                  </div>

                  {/* Right Column: Title & Description */}
                  <div className="col-span-12 md:col-span-6 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-scarlet font-display font-bold text-4xl leading-none">
                          {project.id}
                        </span>
                        <span className="text-xs bg-scarlet/10 border border-scarlet/30 text-scarlet px-3 py-1 font-semibold uppercase tracking-wider rounded-full">
                          AI & Engineering
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-6 pt-6 border-t border-dark-border">
                      <a
                        href={project.links.live}
                        className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white hover:text-scarlet transition-colors duration-300"
                      >
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white hover:text-scarlet transition-colors duration-300"
                      >
                        GitHub <Github size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-3">
            <span>Scroll to browse deck</span>
            <div className="w-1.5 h-1.5 bg-scarlet rounded-full animate-ping"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
