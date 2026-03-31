import { render, screen, fireEvent } from '@testing-library/react'
import FAQSection from '@/components/FAQSection'

describe('FAQSection', () => {
  it('renders all FAQ questions', () => {
    render(<FAQSection />)
    expect(screen.getByText(/what is a hackathon/i)).toBeInTheDocument()
    expect(screen.getByText(/do I need coding experience/i)).toBeInTheDocument()
    expect(screen.getByText(/how are teams formed/i)).toBeInTheDocument()
    expect(screen.getByText(/is there a cost/i)).toBeInTheDocument()
  })

  it('shows answer when a question is clicked', () => {
    render(<FAQSection />)
    const question = screen.getByText(/what is a hackathon/i)
    // Answer should be hidden initially
    expect(screen.queryByText(/time-limited event/i)).not.toBeVisible()
    fireEvent.click(question)
    expect(screen.getByText(/time-limited event/i)).toBeVisible()
  })

  it('collapses an open answer when clicked again', () => {
    render(<FAQSection />)
    const question = screen.getByText(/what is a hackathon/i)
    fireEvent.click(question)
    expect(screen.getByText(/time-limited event/i)).toBeVisible()
    fireEvent.click(question)
    expect(screen.queryByText(/time-limited event/i)).not.toBeVisible()
  })
})
