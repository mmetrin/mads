import { PremiumVideoPage } from '../pages/premium-video'
import { PasswordGate } from './PasswordGate'

export function App() {
  return (
    <PasswordGate>
      <PremiumVideoPage />
    </PasswordGate>
  )
}
