import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /register/i })).toHaveAttribute('href', '#register')
    expect(screen.getByRole('link', { name: /faq/i })).toHaveAttribute('href', '#faq')
    expect(screen.getByRole('link', { name: /sponsors/i })).toHaveAttribute('href', '#sponsors')
  })
})
