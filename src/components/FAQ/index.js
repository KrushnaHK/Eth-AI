import './index.css'

const FAQ = () => {
  const faqs = [
    {question: 'What is EthAi?', answer: 'EthAi is an advanced dApp...'},
    {question: 'How do I start using EthAi?', answer: 'You can sign up...'},
  ]

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map(faq => (
        <div className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  )
}

export default FAQ
