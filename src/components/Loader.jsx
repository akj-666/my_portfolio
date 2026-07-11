import React, { useEffect, useRef, useState } from 'react';

const Loader = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [isExploded, setIsExploded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const textTargetCoords = [];

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    // Particle class
    class Particle {
      constructor(tx, ty) {
        // Target coordinates
        this.tx = tx;
        this.ty = ty;

        // Current coordinates (spawn randomly)
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;

        // Microscopic particle size
        this.size = Math.random() * 1.5 + 0.8;

        // Velocity and Acceleration
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;

        // Color setup (15% Scarlet Red, 85% stark white)
        this.isRed = Math.random() < 0.15;
        this.color = this.isRed ? '#FF2400' : '#FFFFFF';

        // Physics constants
        this.springStiffness = 0.05 + Math.random() * 0.05;
        this.springDamping = 0.85 + Math.random() * 0.05;

        // Explosion state properties
        this.exploded = false;
        this.friction = 0.98;
        this.gravity = 0.25;
        this.bounceRestitution = 0.65; // bounce energy loss
        this.alpha = 1;
      }

      update(isExplodedActive) {
        if (isExplodedActive) {
          // Shockwave explosion setup
          if (!this.exploded) {
            this.exploded = true;
            // Angle from center of screen or center of the text bounds
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const dx = this.x - centerX;
            const dy = this.y - centerY;
            const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
            const speed = 15 + Math.random() * 25; // Massive burst speed

            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
          }

          // Apply Gravity
          this.vy += this.gravity;
          this.vx *= this.friction;
          this.vy *= this.friction;

          // Apply coordinates
          this.x += this.vx;
          this.y += this.vy;

          // Bounce off bottom of screen
          if (this.y + this.size >= window.innerHeight) {
            this.y = window.innerHeight - this.size;
            this.vy = -this.vy * this.bounceRestitution;
            // Also apply some horizontal friction on bounce
            this.vx *= 0.8;
          }

          // Fade alpha
          this.alpha = Math.max(0, this.alpha - 0.015);
        } else {
          // Normal behavior: Swarm forming the text + Mouse repulsion
          // 1. Spring Force to target (tx, ty)
          const forceX = (this.tx - this.x) * this.springStiffness;
          const forceY = (this.ty - this.y) * this.springStiffness;

          this.ax = forceX;
          this.ay = forceY;

          // 2. Mouse Repulsion
          if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
              const force = (mouse.radius - distance) / mouse.radius; // 0 at edge, 1 at center
              const angle = Math.atan2(dy, dx);
              // Violently push away
              const repulsionForce = force * 8;
              this.ax += Math.cos(angle) * repulsionForce;
              this.ay += Math.sin(angle) * repulsionForce;
            }
          }

          // Update velocities
          this.vx = (this.vx + this.ax) * this.springDamping;
          this.vy = (this.vy + this.ay) * this.springDamping;

          // Update position
          this.x += this.vx;
          this.y += this.vy;
        }
      }

      draw(c) {
        c.save();
        c.globalAlpha = this.alpha;
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    const init = () => {
      particles = [];
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = window.innerWidth;
      tempCanvas.height = window.innerHeight;

      // Draw massive 'AKJ' in offscreen canvas to sample coordinates
      const text = 'AKJ';
      // Responsive font sizes
      const fontSize = Math.min(window.innerWidth * 0.4, 450);
      tempCtx.font = `900 ${fontSize}px "Helvetica Neue", sans-serif`;
      tempCtx.fillStyle = 'white';
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);

      // Get pixel data from the text canvas
      const imgData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = imgData.data;

      // Sample pixels
      const step = Math.max(4, Math.floor((tempCanvas.width * tempCanvas.height) / 180000)); // Dynamic step to ensure ~1500-2000 points
      for (let y = 0; y < tempCanvas.height; y += step) {
        for (let x = 0; x < tempCanvas.width; x += step) {
          const index = (y * tempCanvas.width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            // Draw coordinate point
            textTargetCoords.push({ x, y });
          }
        }
      }

      // Populate particles array
      for (let i = 0; i < Math.max(1500, textTargetCoords.length); i++) {
        // Map target coord or pick random target if particle count exceeds target coords
        const coord = textTargetCoords[i % textTargetCoords.length];
        const tx = coord ? coord.x : Math.random() * window.innerWidth;
        const ty = coord ? coord.y : Math.random() * window.innerHeight;

        particles.push(new Particle(tx, ty));
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Slower trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let allFaded = true;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(isExploded);
        p.draw(ctx);
        if (p.alpha > 0) {
          allFaded = false;
        }
      }

      if (isExploded && allFaded) {
        setIsVisible(false);
        if (onComplete) onComplete();
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isExploded]);

  // Set timeout to trigger explosion state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExploded(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#000000] overflow-hidden transition-all duration-[1000ms] ${
        isExploded ? 'pointer-events-none opacity-90' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

export default Loader;
