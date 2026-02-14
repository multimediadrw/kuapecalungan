interface MosqueIconProps {
  className?: string;
}

export default function MosqueIcon({ className = "w-6 h-6" }: MosqueIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Kubah tengah */}
      <path d="M12 2C10.5 2 9.5 3 9.5 4.5C9.5 5.5 10 6 10.5 6.5V8H13.5V6.5C14 6 14.5 5.5 14.5 4.5C14.5 3 13.5 2 12 2Z" />
      
      {/* Kubah kiri */}
      <path d="M6 6C5 6 4.5 6.5 4.5 7.5C4.5 8.2 4.8 8.5 5 9V10H7V9C7.2 8.5 7.5 8.2 7.5 7.5C7.5 6.5 7 6 6 6Z" />
      
      {/* Kubah kanan */}
      <path d="M18 6C17 6 16.5 6.5 16.5 7.5C16.5 8.2 16.8 8.5 17 9V10H19V9C19.2 8.5 19.5 8.2 19.5 7.5C19.5 6.5 19 6 18 6Z" />
      
      {/* Bangunan utama */}
      <rect x="8" y="10" width="8" height="12" />
      
      {/* Menara kiri */}
      <rect x="3" y="10" width="4" height="12" />
      
      {/* Menara kanan */}
      <rect x="17" y="10" width="4" height="12" />
      
      {/* Pintu */}
      <path d="M10.5 16C10.5 15.5 10.7 15 11 15H13C13.3 15 13.5 15.5 13.5 16V22H10.5V16Z" />
      
      {/* Base */}
      <line x1="2" y1="22" x2="22" y2="22" />
    </svg>
  );
}
