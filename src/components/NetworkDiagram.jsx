function NetworkDiagram() {
  return (
    <svg
      className="network-diagram"
      viewBox="0 0 320 220"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* connections */}
      <g className="nd-lines">
        <line x1="40" y1="50" x2="160" y2="40" />
        <line x1="40" y1="110" x2="160" y2="40" />
        <line x1="40" y1="110" x2="160" y2="110" />
        <line x1="40" y1="170" x2="160" y2="110" />
        <line x1="40" y1="170" x2="160" y2="180" />
        <line x1="40" y1="110" x2="160" y2="180" />

        <line x1="160" y1="40" x2="280" y2="75" />
        <line x1="160" y1="110" x2="280" y2="75" />
        <line x1="160" y1="110" x2="280" y2="145" />
        <line x1="160" y1="180" x2="280" y2="145" />
      </g>

      {/* input layer */}
      <circle className="nd-node nd-node-input" cx="40" cy="50" r="9" />
      <circle className="nd-node nd-node-input" cx="40" cy="110" r="9" />
      <circle className="nd-node nd-node-input" cx="40" cy="170" r="9" />

      {/* hidden layer */}
      <circle className="nd-node nd-node-hidden" cx="160" cy="40" r="9" />
      <circle className="nd-node nd-node-hidden" cx="160" cy="110" r="9" />
      <circle className="nd-node nd-node-hidden" cx="160" cy="180" r="9" />

      {/* output layer */}
      <circle className="nd-node nd-node-output" cx="280" cy="75" r="9" />
      <circle className="nd-node nd-node-output" cx="280" cy="145" r="9" />
    </svg>
  )
}

export default NetworkDiagram
