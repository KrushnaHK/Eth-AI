import './index.css'

const Roadmap = () => {
  const phases = [
    {phase: 'Kicking Off', details: 'Launch of EthAi dApp...'},
    {phase: 'Bigger Insights', details: 'AI Agent expansion...'},
    {
      phase: 'Full Power',
      details: 'New features and community integrations...',
    },
  ]

  return (
    <section className="roadmap">
      {phases.map(item => (
        <div className="roadmap-phase">
          <h3>{item.phase}</h3>
          <p>{item.details}</p>
        </div>
      ))}
    </section>
  )
}

export default Roadmap
