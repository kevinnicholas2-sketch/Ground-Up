/** Rotated "Freshly roasted · Williamsburg · Brooklyn" stamp. The cup is taken unchanged from the supplied logo. */
export function Stamp() {
  return (
    <svg className="stamp" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="98" fill="#A63E18" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#FBF6EE" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="#FBF6EE" strokeWidth="1.5" strokeDasharray="2 5" />
      <defs>
        <path id="gu-stamp-ring" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <text fill="#FBF6EE" style={{ fontSize: 13, letterSpacing: 2.4, fontWeight: 500 }}>
        <textPath href="#gu-stamp-ring">FRESHLY ROASTED · WILLIAMSBURG · BROOKLYN ·</textPath>
      </text>
      <g transform="translate(-109 72) scale(2)" fill="#FBF6EE">
        <path d="M118.12,13.24h-1.36c.2-1.24.33-2.32.41-3.15a1.65,1.65,0,0,0-1.66-1.82H90.89a1.68,1.68,0,0,0-1.66,1.82c.54,5.45,3,21.39,14,21.39,6,0,9.41-4.75,11.42-9.95h1.85A2.69,2.69,0,0,0,119,20.29a6.9,6.9,0,0,0,1.66-4.18C120.61,14.55,119.74,13.24,118.12,13.24Zm-9.3,14.43a8.41,8.41,0,0,1-11.23,0,16.14,16.14,0,0,1-3.75-5.49A41.7,41.7,0,0,1,91,10.56.55.55,0,0,1,91.5,10h23.24a.69.69,0,0,1,.69.77,41.66,41.66,0,0,1-2.86,11.48A16.39,16.39,0,0,1,108.82,27.67Zm8.62-8a1.53,1.53,0,0,1-1,.24l-1.34,0s1.18-4.06,1.4-5h1.59c.52,0,.76.64.81,1.35A6.19,6.19,0,0,1,117.44,19.63Z" />
        <path d="M111.1,18.22H95.31a.83.83,0,0,0-.79,1.1l.5,1.36c2,5,4.68,7.48,8.18,7.48s6.18-2.44,8.19-7.48c.19-.45.35-.91.5-1.36A.83.83,0,0,0,111.1,18.22Z" />
      </g>
    </svg>
  );
}
