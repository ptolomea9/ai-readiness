export default function GlossaryTooltip({ term, definition, children }) {
  return (
    <span title={definition} className="relative group">
      {children}
    </span>
  );
}
