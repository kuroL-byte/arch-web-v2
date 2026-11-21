/**
 * Faded SketchUp-style 2-point perspective architectural line drawing background.
 * Uses delicate dashed projection guidelines layered with crisp architectural mullions
 * and a dual linear + radial mask so it dissolves gently into the light canvas.
 */
export function SketchUpBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
      style={{
        maskImage:
          "radial-gradient(ellipse 85% 75% at 55% 45%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.45) 60%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 75% at 55% 45%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.45) 60%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-[0.13]"
      >
        {/* Horizon line & Vanishing Point projection guides */}
        <g stroke="#475569" strokeWidth="0.5" strokeDasharray="4 4">
          <line x1="0" y1="540" x2="1440" y2="540" />
          {/* Left vanishing point rays (VP1: -180, 540) */}
          <line x1="-180" y1="540" x2="1440" y2="95" />
          <line x1="-180" y1="540" x2="1440" y2="210" />
          <line x1="-180" y1="540" x2="1440" y2="335" />
          <line x1="-180" y1="540" x2="1440" y2="445" />
          <line x1="-180" y1="540" x2="1440" y2="635" />
          <line x1="-180" y1="540" x2="1440" y2="780" />
          {/* Right vanishing point rays (VP2: 1620, 540) */}
          <line x1="1620" y1="540" x2="0" y2="115" />
          <line x1="1620" y1="540" x2="0" y2="245" />
          <line x1="1620" y1="540" x2="0" y2="380" />
          <line x1="1620" y1="540" x2="0" y2="465" />
          <line x1="1620" y1="540" x2="0" y2="660" />
          <line x1="1620" y1="540" x2="0" y2="820" />
          {/* Vertical construction alignment ticks */}
          <line x1="480" y1="60" x2="480" y2="840" />
          <line x1="820" y1="30" x2="820" y2="860" />
          <line x1="1120" y1="80" x2="1120" y2="830" />
        </g>

        {/* Primary 2-Point Perspective Architectural Volume */}
        <g stroke="#334155" strokeWidth="1.05" strokeLinejoin="round">
          {/* Corner spine */}
          <line x1="820" y1="185" x2="820" y2="690" strokeWidth="1.15" />

          {/* Main upper cantilevered roof slab (right & left planes) */}
          <polygon points="340,310 820,185 1290,305 1290,332 820,214 340,332" />
          {/* Roof soffit underside return */}
          <polyline points="340,332 375,342 820,234 1255,342 1290,332" strokeWidth="0.8" />

          {/* Left facade primary structural bay */}
          <polyline points="375,342 375,620 820,690" />
          {/* Right facade primary structural bay */}
          <polyline points="820,690 1255,615 1255,342" />

          {/* Recessed upper terrace / clerestory volume */}
          <polyline points="540,260 540,165 820,105 1090,175 1090,254" strokeWidth="0.9" />
          <line x1="820" y1="105" x2="820" y2="185" strokeWidth="0.9" />

          {/* Second floor datum slab */}
          <polyline points="375,478 820,458 1255,478" strokeWidth="0.95" />
          <polyline points="375,492 820,473 1255,492" strokeWidth="0.75" />

          {/* Ground plinth & stepped podium */}
          <polyline points="260,645 820,730 1340,640" strokeWidth="0.95" />
          <polyline points="210,665 820,760 1385,660" strokeWidth="0.7" />
        </g>

        {/* Fine Architectural Mullions, Curtain Wall &Louvers */}
        <g stroke="#334155" strokeWidth="0.72">
          {/* Left facade vertical mullions */}
          <line x1="455" y1="322" x2="455" y2="632" />
          <line x1="535" y1="302" x2="535" y2="645" />
          <line x1="620" y1="282" x2="620" y2="658" />
          <line x1="715" y1="260" x2="715" y2="674" />

          {/* Left facade horizontal transoms */}
          <line x1="375" y1="395" x2="820" y2="335" />
          <line x1="375" y1="548" x2="820" y2="555" />

          {/* Right facade curtain wall mullions */}
          <line x1="910" y1="258" x2="910" y2="675" />
          <line x1="995" y1="280" x2="995" y2="660" />
          <line x1="1080" y1="300" x2="1080" y2="645" />
          <line x1="1170" y1="322" x2="1170" y2="630" />

          {/* Right facade horizontal transoms */}
          <line x1="820" y1="335" x2="1255" y2="395" />
          <line x1="820" y1="555" x2="1255" y2="545" />

          {/* Upper clerestory mullions */}
          <line x1="610" y1="150" x2="610" y2="242" />
          <line x1="680" y1="135" x2="680" y2="225" />
          <line x1="750" y1="120" x2="750" y2="205" />
          <line x1="895" y1="124" x2="895" y2="208" />
          <line x1="965" y1="142" x2="965" y2="226" />
          <line x1="1030" y1="158" x2="1030" y2="240" />

          {/* Architectural louver fins on right wing */}
          <line x1="1080" y1="365" x2="1170" y2="380" />
          <line x1="1080" y1="382" x2="1170" y2="396" />
          <line x1="1080" y1="399" x2="1170" y2="412" />
          <line x1="1080" y1="416" x2="1170" y2="428" />
          <line x1="1080" y1="433" x2="1170" y2="444" />
        </g>

        {/* Subtle foreground landscape / site axis lines */}
        <g stroke="#475569" strokeWidth="0.6" strokeDasharray="3 5">
          <line x1="140" y1="710" x2="820" y2="800" />
          <line x1="820" y1="800" x2="1400" y2="705" />
          <line x1="820" y1="730" x2="820" y2="855" />
        </g>
      </svg>
    </div>
  );
}
