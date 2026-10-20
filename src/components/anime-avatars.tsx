import React from "react";

export function RedHairAvatar({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Anime character with red hair">
      <defs>
        <radialGradient id="redHairGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4545" />
          <stop offset="100%" stopColor="#d11111" />
        </radialGradient>
        <linearGradient id="faceGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8f4f0" />
          <stop offset="100%" stopColor="#e8e0d5" />
        </linearGradient>
      </defs>
      {/* Red hair back */}
      <path d="M40 90C35 40 70 10 100 10C130 10 165 40 160 90C165 140 175 190 180 240H20C25 190 35 140 40 90Z" fill="url(#redHairGlow)" />
      {/* Neck & Body */}
      <path d="M85 130H115V175H85V130Z" fill="#e8e0d5" />
      <path d="M60 175C60 175 75 170 100 170C125 170 140 175 140 175L150 240H50L60 175Z" fill="#0d0f07" />
      {/* Face */}
      <path d="M65 80C65 60 78 50 100 50C122 50 135 60 135 80C135 105 120 135 100 135C80 135 65 105 65 80Z" fill="url(#faceGrad)" />
      {/* Blush */}
      <ellipse cx="78" cy="95" rx="8" ry="4" fill="#ff7070" opacity="0.4" />
      <ellipse cx="122" cy="95" rx="8" ry="4" fill="#ff7070" opacity="0.4" />
      {/* Eyes */}
      <ellipse cx="82" cy="85" rx="7" ry="4" fill="#3a7bd5" />
      <circle cx="84" cy="84" r="2.5" fill="#0d1b2a" />
      <circle cx="82" cy="83" r="1.2" fill="#ffffff" />
      <path d="M74 81C77 78 87 78 90 81" stroke="#1a1c14" strokeWidth="2.5" strokeLinecap="round" />
      
      <ellipse cx="118" cy="85" rx="7" ry="4" fill="#3a7bd5" />
      <circle cx="116" cy="84" r="2.5" fill="#0d1b2a" />
      <circle cx="118" cy="83" r="1.2" fill="#ffffff" />
      <path d="M110 81C113 78 123 78 126 81" stroke="#1a1c14" strokeWidth="2.5" strokeLinecap="round" />
      {/* Nose and Mouth */}
      <circle cx="100" cy="95" r="1" fill="#c49b82" />
      <path d="M96 107C98 109 102 109 104 107" stroke="#ff3838" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bangs */}
      <path d="M60 55C75 70 85 85 85 85C85 85 92 68 100 68C108 68 115 85 115 85C115 85 125 70 140 55C130 35 118 30 100 30C82 30 70 35 60 55Z" fill="#ff2e2e" />
      <path d="M52 75C55 110 58 140 62 170C65 170 70 140 70 115C70 95 65 75 52 75Z" fill="#ff2424" />
      <path d="M148 75C145 110 142 140 138 170C135 170 130 140 130 115C130 95 135 75 148 75Z" fill="#ff2424" />
    </svg>
  );
}

export function WhiteHairGlassesAvatar({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Anime character with white hair and glasses">
      <defs>
        <linearGradient id="whiteHairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0ede6" />
        </linearGradient>
      </defs>
      {/* White Hair Base (Bob Cut) */}
      <path d="M42 90C40 45 68 20 100 20C132 20 160 45 158 90C160 120 155 140 145 155C135 140 132 120 130 110C125 110 120 110 100 110C80 110 75 110 70 110C68 120 65 140 55 155C45 140 40 120 42 90Z" fill="url(#whiteHairGrad)" />
      {/* Neck & Turtleneck */}
      <path d="M88 125H112V165H88V125Z" fill="#f5ede3" />
      <path d="M65 165C65 165 80 160 100 160C120 160 135 165 135 165L148 240H52L65 165Z" fill="#d62828" />
      {/* Face */}
      <path d="M70 80C70 65 80 55 100 55C120 55 130 65 130 80C130 102 118 128 100 128C82 128 70 102 70 80Z" fill="#fff7f0" />
      {/* Cheeks */}
      <ellipse cx="80" cy="96" rx="6" ry="3" fill="#ffb4a2" opacity="0.6" />
      <ellipse cx="120" cy="96" rx="6" ry="3" fill="#ffb4a2" opacity="0.6" />
      {/* Eyes Behind Glasses */}
      <ellipse cx="84" cy="86" rx="5" ry="3" fill="#2b2d42" />
      <ellipse cx="116" cy="86" rx="5" ry="3" fill="#2b2d42" />
      {/* Round Black Glasses */}
      <circle cx="83" cy="86" r="14" stroke="#0a0c04" strokeWidth="3" fill="none" />
      <circle cx="117" cy="86" r="14" stroke="#0a0c04" strokeWidth="3" fill="none" />
      <path d="M97 86H103" stroke="#0a0c04" strokeWidth="3" strokeLinecap="round" />
      {/* Cute Mouth */}
      <path d="M97 106C99 108 101 108 103 106" stroke="#c94b4b" strokeWidth="2" strokeLinecap="round" />
      {/* Front Bob Hair Bangs */}
      <path d="M56 65C70 78 85 85 92 82C95 65 105 65 108 82C115 85 130 78 144 65C138 45 125 35 100 35C75 35 62 45 56 65Z" fill="#ffffff" />
      {/* Dangling Earring */}
      <circle cx="64" cy="115" r="4" fill="#0a0c04" />
      <line x1="64" y1="119" x2="64" y2="129" stroke="#0a0c04" strokeWidth="1.5" />
      <ellipse cx="64" cy="133" rx="3" ry="5" fill="#ff595e" />
    </svg>
  );
}

export function PinkHairAvatar({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Anime character with pink hair">
      <defs>
        <linearGradient id="pinkHair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffb3c6" />
          <stop offset="100%" stopColor="#ff758f" />
        </linearGradient>
      </defs>
      {/* Pink Hair Back */}
      <path d="M46 88C44 42 70 18 100 18C130 18 156 42 154 88C156 125 145 160 135 180C125 155 120 120 115 110C100 110 85 110 85 110C80 120 75 155 65 180C55 160 44 125 46 88Z" fill="url(#pinkHair)" />
      {/* Neck & Black Top */}
      <path d="M88 120H112V160H88V120Z" fill="#fceedb" />
      <path d="M68 160C68 160 82 156 100 156C118 156 132 160 132 160L144 240H56L68 160Z" fill="#0a0c04" />
      {/* Face (delicate 3/4 side-profile view) */}
      <path d="M72 78C72 62 82 52 100 52C118 52 128 62 128 78C128 100 116 122 100 122C84 122 72 100 72 78Z" fill="#fff7f0" />
      {/* Delicate Eye Profile */}
      <path d="M80 82C84 80 92 81 94 85" stroke="#1f2410" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="88" cy="87" rx="3.5" ry="4.5" fill="#3a2f2f" />
      <circle cx="89" cy="85" r="1.5" fill="#ffffff" />
      
      <path d="M110 82C114 81 120 81 122 84" stroke="#1f2410" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="116" cy="87" rx="3" ry="4" fill="#3a2f2f" />
      {/* Soft Blush */}
      <ellipse cx="82" cy="93" rx="7" ry="3" fill="#ff758f" opacity="0.5" />
      {/* Lip */}
      <path d="M86 105C89 106 93 106 95 105" stroke="#e05780" strokeWidth="2" strokeLinecap="round" />
      {/* Side bangs */}
      <path d="M58 65C68 78 78 88 88 88C95 70 102 68 105 82C112 85 122 75 138 65C132 45 120 32 100 32C80 32 65 45 58 65Z" fill="#ff9ebb" />
    </svg>
  );
}

export function DarkBlueHairAvatar({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Anime character with dark blue hair">
      <defs>
        <linearGradient id="darkHair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b2d42" />
          <stop offset="100%" stopColor="#1a1c29" />
        </linearGradient>
      </defs>
      {/* Hair Back */}
      <path d="M44 85C42 40 70 15 100 15C130 15 158 40 156 85C158 135 168 185 174 240H26C32 185 42 135 44 85Z" fill="url(#darkHair)" />
      {/* Neck & Cyan/Teal Choker Collar */}
      <path d="M86 122H114V165H86V122Z" fill="#fbf0e4" />
      <path d="M86 138H114V146H86V138Z" fill="#00b4d8" />
      <path d="M64 165C64 165 80 160 100 160C120 160 136 165 136 165L148 240H52L64 165Z" fill="#121620" />
      {/* Face */}
      <path d="M68 76C68 60 80 50 100 50C120 50 132 60 132 76C132 98 120 124 100 124C80 124 68 98 68 76Z" fill="#fff7f0" />
      {/* Expressive Blue Eyes */}
      <ellipse cx="83" cy="83" rx="7" ry="5.5" fill="#0096c7" />
      <circle cx="83" cy="83" r="3.5" fill="#03045e" />
      <circle cx="81" cy="81" r="1.8" fill="#ffffff" />
      <path d="M74 76C78 73 88 74 91 78" stroke="#111318" strokeWidth="2.5" strokeLinecap="round" />
      
      <ellipse cx="117" cy="83" rx="7" ry="5.5" fill="#0096c7" />
      <circle cx="117" cy="83" r="3.5" fill="#03045e" />
      <circle cx="115" cy="81" r="1.8" fill="#ffffff" />
      <path d="M109 78C112 74 122 73 126 76" stroke="#111318" strokeWidth="2.5" strokeLinecap="round" />
      {/* Blush & Smile */}
      <ellipse cx="78" cy="94" rx="6" ry="2.5" fill="#ff758f" opacity="0.4" />
      <ellipse cx="122" cy="94" rx="6" ry="2.5" fill="#ff758f" opacity="0.4" />
      <path d="M96 104C98 106 102 106 104 104" stroke="#ff4d6d" strokeWidth="2" strokeLinecap="round" />
      {/* Sharp Sleek Bangs */}
      <path d="M55 55C68 75 75 92 82 92C88 78 95 72 100 72C105 72 112 78 118 92C125 92 132 75 145 55C135 35 120 28 100 28C80 28 65 35 55 55Z" fill="#32364c" />
    </svg>
  );
}

export function BlossomWatermark({ className = "w-96 h-96" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g fill="currentColor">
        {/* 5 Petals of Japanese Mon/Cherry Blossom Emblem */}
        <path d="M150 150C150 100 130 50 150 30C170 50 150 100 150 150Z" />
        <path d="M150 150C198 134 246 118 264 136C250 158 202 154 150 150Z" />
        <path d="M150 150C179 191 208 232 196 252C172 250 153 203 150 150Z" />
        <path d="M150 150C121 203 102 250 78 252C66 232 95 191 150 150Z" />
        <path d="M150 150C98 154 50 158 36 136C54 118 102 134 150 150Z" />
        {/* Core Ring */}
        <circle cx="150" cy="150" r="18" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="150" cy="150" r="7" />
      </g>
    </svg>
  );
}

export function SparkleStar({ className = "w-6 h-6", color = "#ccff00" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
    </svg>
  );
}
