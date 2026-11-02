import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 18, strokeWidth = 2, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg strokeWidth={2.2} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const Bag = (p: IconProps) => (
  <Svg {...p}><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></Svg>
);
export const Close = (p: IconProps) => (
  <Svg size={20} strokeWidth={2.2} {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>
);
export const MenuLines = (p: IconProps) => (
  <Svg size={20} strokeWidth={2.2} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>
);
export const Check = (p: IconProps) => (
  <Svg size={16} strokeWidth={3} {...p}><path d="M5 12l5 5L20 7" /></Svg>
);
export const Plus = (p: IconProps) => (
  <Svg size={16} strokeWidth={2.4} {...p}><path d="M12 5v14M5 12h14" /></Svg>
);
export const Minus = (p: IconProps) => (
  <Svg size={16} strokeWidth={2.6} {...p}><path d="M5 12h14" /></Svg>
);
export const Trash = (p: IconProps) => (
  <Svg size={16} {...p}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></Svg>
);
export const Pin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Svg>
);
export const Clock = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>
);
export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </Svg>
);
export const Info = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.01" /></Svg>
);
export const Alert = (p: IconProps) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 16.5v.01" /></Svg>
);
