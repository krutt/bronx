import { WalletStatus } from '../components/WalletStatus'
import { Container } from '../components/elements/Container'

export const Swap = () => {
  return (
    <Container data-testid="swap-page">
      <WalletStatus />
    </Container>
  )
}
