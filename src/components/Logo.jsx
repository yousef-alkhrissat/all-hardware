export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="AllHardware home">
      <img src="/mark.png" alt="" width="260" height="305" className="logo-mark" />
      <span className="logo-word">
        <span className="t-blue">All</span>
        <span className="t-red">Hardware</span>
      </span>
    </a>
  )
}
