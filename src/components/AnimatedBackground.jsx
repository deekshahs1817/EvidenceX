import { useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useData();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = Math.floor((width * height) / 15000); // Responsive density
    const connectionDistance = 120;

    // Is dark theme?
    const isDark = theme === 'dark';
    
    // Choose professional, subtle colors based on theme
    const dotColor = isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)';
    const slowSpeed = 0.3;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * slowSpeed,
            vy: (Math.random() - 0.5) * slowSpeed,
            radius: Math.random() * 1.5 + 0.5
        });
    }

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Determine line color dynamic to theme
      const lineBase = isDark ? '59, 130, 246' : '37, 99, 235';

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
          let p = particles[i];
          
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();

          // Draw connections
          for (let j = i + 1; j < particleCount; j++) {
              let p2 = particles[j];
              let dx = p.x - p2.x;
              let dy = p.y - p2.y;
              let distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < connectionDistance) {
                  let opacity = 1 - (distance / connectionDistance);
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.strokeStyle = `rgba(${lineBase}, ${opacity * (isDark ? 0.2 : 0.15)})`;
                  ctx.lineWidth = 0.8;
                  ctx.stroke();
              }
          }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-render when theme changes so dot colors update

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default AnimatedBackground;
