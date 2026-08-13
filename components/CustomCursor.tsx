'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animId = requestAnimationFrame(animate);
    };

    const interactiveSelector = 'a, button, input, textarea, select, [role="button"], label, .cursor-pointer';
    const onOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setHovering(true);
      }
    };
    const onOutInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOverInteractive);
    document.addEventListener('mouseout', onOutInteractive);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOverInteractive);
      document.removeEventListener('mouseout', onOutInteractive);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary-hex, #C6A15B)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease, background-color 0.3s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          marginLeft: hovering ? -24 : -16,
          marginTop: hovering ? -24 : -16,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? 'var(--color-primary-hex, #C6A15B)' : 'rgba(var(--color-primary-rgb, 198 161 91) / 0.4)'}`,
          opacity: visible ? 1 : 0,
          transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, opacity 0.2s ease, border-color 0.3s ease, background-color 0.3s ease',
          backgroundColor: hovering ? 'rgba(var(--color-primary-rgb, 198 161 91) / 0.08)' : 'transparent',
        }}
      />
    </>
  );
}
