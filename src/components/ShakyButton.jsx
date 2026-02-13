export default function ShakyButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="shaky-btn"
    >
      {children}
    </button>
  )
}
