import { lazy, Suspense, useMemo } from "react";

// CSS-only fallback for environments without WebGL
const CSSFallback = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-black to-black overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(200,160,80,0.08)_0%,transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(200,160,80,0.05)_0%,transparent_40%)]" />
    {/* Animated dots with pure CSS */}
    <div className="absolute inset-0">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gold/20"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: Math.random() * 2 + "s",
          }}
        />
      ))}
    </div>
  </div>
);

// Check WebGL with no side-effects — tries to create a context
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    return !!gl;
  } catch {
    return false;
  }
}

// The actual Three.js scene in a separate file so it can be lazy-loaded
const ThreeScene = lazy(() => import("./particle-cosmos-scene"));

interface ParticleCosmosProps {
  className?: string;
}

const ParticleCosmos = ({ className }: ParticleCosmosProps) => {
  const hasWebGL = useMemo(() => isWebGLAvailable(), []);

  return (
    <div className={`absolute inset-0 z-0 ${className || ""}`}>
      {hasWebGL ? (
        <Suspense fallback={<CSSFallback />}>
          <ThreeScene />
        </Suspense>
      ) : (
        <CSSFallback />
      )}
    </div>
  );
};

export default ParticleCosmos;
