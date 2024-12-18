import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EmailGenerator from './EmailGenerator'

describe('EmailGenerator', () => {
  it('should render the component', () => {
    render(<EmailGenerator />)
    expect(screen.getByText('Professional Email Generator')).toBeInTheDocument()
  })

  it('should start with a disabled generate button', () => {
    render(<EmailGenerator />)
    const button = screen.getByRole('button', { name: /generate email/i })
    expect(button).toBeDisabled()
  })

  it('should enable button when purpose is filled', async () => {
    const user = userEvent.setup()
    render(<EmailGenerator />)
    
    const input = screen.getByRole('textbox')
    await user.type(input, 'Test purpose')
    
    const button = screen.getByRole('button', { name: /generate email/i })
    expect(button).not.toBeDisabled()
  })
})