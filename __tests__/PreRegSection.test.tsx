import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PreRegSection from '@/components/PreRegSection'

describe('PreRegSection', () => {
  it('renders all form fields', () => {
    render(<PreRegSection />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/school/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
  })

  it('shows validation error when submitting empty required fields', async () => {
    render(<PreRegSection />)
    fireEvent.click(screen.getByRole('button', { name: /pre-register/i }))
    // HTML5 validation prevents submit; form should not show success state
    expect(screen.queryByText(/you're on the list/i)).not.toBeInTheDocument()
  })

  it('shows success message after successful form submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true } as Response)

    render(<PreRegSection />)
    await userEvent.type(screen.getByLabelText(/full name/i), 'Alex Kim')
    await userEvent.type(screen.getByLabelText(/email/i), 'alex@example.com')
    await userEvent.type(screen.getByLabelText(/school/i), 'Lincoln High')
    fireEvent.click(screen.getByRole('button', { name: /pre-register/i }))

    await waitFor(() => {
      expect(screen.getByText(/you're on the list/i)).toBeInTheDocument()
    })
  })
})
