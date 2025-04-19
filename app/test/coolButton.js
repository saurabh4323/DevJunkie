// src/components/StyledButtons.js
import React, { useState, useEffect } from "react";
import "./buttons.css";

// Button 1: Advanced Gradient Button with Shimmer Effect
export const GradientButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`gradient-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="shimmer-effect"></span>
    </button>
  );
};

// Button 2: Elevated Outlined Button with Better Interactions
export const OutlinedButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`outlined-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="fill-effect"></span>
    </button>
  );
};

// Button 3: Enhanced Neon Button with Pulse Effect
export const NeonButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`neon-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="pulse-effect"></span>
    </button>
  );
};

// Button 4: Premium Pill Button with Improved Icon Support
export const PillButton = ({ children, onClick, className = "", icon }) => {
  return (
    <button onClick={onClick} className={`pill-button ${className}`}>
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
    </button>
  );
};

// Button 5: Advanced Glass Button with Better Effects
export const GlassButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`glass-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="glass-highlight"></span>
    </button>
  );
};

// Button 6: Premium 3D Button with Enhanced Depth Effect
export const ThreeDButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`three-d-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="button-highlight"></span>
    </button>
  );
};

// Button 7: Enhanced Toggle Button with State Animation
export const ToggleButton = ({
  isActive,
  onClick,
  activeIcon,
  inactiveIcon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`toggle-button ${isActive ? "active" : ""} ${className}`}
    >
      <div className="icon-container">
        <div className={`active-icon ${isActive ? "show" : "hide"}`}>
          {activeIcon}
        </div>
        <div className={`inactive-icon ${isActive ? "hide" : "show"}`}>
          {inactiveIcon}
        </div>
      </div>
    </button>
  );
};

// Button 8: Premium Arrow Button with Enhanced Animation
export const ArrowButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`arrow-button ${className}`}>
      <span className="button-text">{children}</span>
      <svg
        className="arrow-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="bottom-line"></span>
    </button>
  );
};

// Button 9: Advanced Pulse Button with Better Animation
export const PulseButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`pulse-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="pulse-slow"></span>
      <span className="pulse-fast"></span>
    </button>
  );
};

// Button 10: Premium Minimal Button with Enhanced Hover Effect
export const MinimalButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`minimal-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="line-effect"></span>
      <span className="dot-effect"></span>
    </button>
  );
};

// Button 11: Floating Action Button
export const FloatingActionButton = ({ icon, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`floating-button ${className}`}>
      <span className="button-icon">{icon}</span>
    </button>
  );
};

// Button 12: Splash Effect Button
export const SplashButton = ({ children, onClick, className = "" }) => {
  const [rippleEffect, setRippleEffect] = useState({
    active: false,
    x: 0,
    y: 0,
  });

  const handleClick = (e) => {
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      setRippleEffect({
        active: true,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      setTimeout(() => {
        setRippleEffect({ active: false, x: 0, y: 0 });
      }, 600);
    } catch (error) {
      console.error("Button Error:", error);
    }

    if (onClick) onClick(e);
  };

  return (
    <button onClick={handleClick} className={`splash-button ${className}`}>
      <span className="button-text">{children}</span>
      {rippleEffect.active && (
        <span
          className="ripple"
          style={{
            top: rippleEffect.y,
            left: rippleEffect.x,
          }}
        />
      )}
    </button>
  );
};

// Button 13: Underline Reveal Button
export const UnderlineRevealButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`underline-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="line-left"></span>
      <span className="line-right"></span>
    </button>
  );
};

// Button 14: Border Slide Button
export const BorderSlideButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`border-slide-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="border-top"></span>
      <span className="border-right"></span>
      <span className="border-bottom"></span>
      <span className="border-left"></span>
    </button>
  );
};

// Button 15: Spotlight Hover Button
export const SpotlightButton = ({ children, onClick, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    } catch (error) {
      console.error("Button Error:", error);
    }
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`spotlight-button ${className}`}
    >
      <span className="button-text">{children}</span>
      {isHovering && (
        <span
          className="spotlight"
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
          }}
        />
      )}
    </button>
  );
};

// Button 16: Scale Icon Button
export const ScaleIconButton = ({
  children,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`scale-icon-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="icon">{icon}</span>
    </button>
  );
};

// Button 17: Classic Slide Fill Button
export const SlideFillButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`slide-fill-button ${className}`}>
      <span className="button-text">{children}</span>
      <span className="fill"></span>
    </button>
  );
};

// Initialization function to inject the CSS
export const initButtons = () => {
  console.log("Buttons initialized successfully!");
};

// For Next.js SSR compatibility
const StylesheetInjector = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      initButtons();
    }
  }, []);
  return null;
};
export { StylesheetInjector };

// Export all buttons as a collection
const EnhancedButtons = {
  GradientButton,
  OutlinedButton,
  NeonButton,
  PillButton,
  GlassButton,
  ThreeDButton,
  ToggleButton,
  ArrowButton,
  PulseButton,
  MinimalButton,
  FloatingActionButton,
  SplashButton,
  UnderlineRevealButton,
  BorderSlideButton,
  SpotlightButton,
  ScaleIconButton,
  SlideFillButton,
  initButtons,
};

export default EnhancedButtons;
