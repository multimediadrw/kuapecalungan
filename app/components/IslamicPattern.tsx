export default function IslamicPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="islamic-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Star Pattern */}
          <g transform="translate(50,50)">
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x = Math.cos(angle) * 20;
              const y = Math.sin(angle) * 20;
              return (
                <g key={i}>
                  <line
                    x1="0"
                    y1="0"
                    x2={x}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                  <circle cx={x} cy={y} r="1.5" fill="currentColor" />
                </g>
              );
            })}
          </g>
          
          {/* Geometric Shapes */}
          <rect
            x="10"
            y="10"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            transform="rotate(45 25 25)"
          />
          <rect
            x="60"
            y="60"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            transform="rotate(45 75 75)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
    </svg>
  );
}
