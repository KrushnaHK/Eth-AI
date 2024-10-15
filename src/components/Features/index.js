import './index.css'

const Features = () => {
  const features = [
    {title: 'Trade Optimizer', description: 'Maximize trading gains...'},
    {title: 'Market Insight', description: 'AI-powered analysis...'},
    {title: 'Risk Guard', description: 'Protect investments...'},
    {title: 'Portfolio Scout', description: 'Manage your portfolio...'},
  ]

  return (
    <section className="features">
      {features.map(feature => (
        <div className="feature-card">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Features
