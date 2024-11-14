import { useCurrentAccount } from '@mysten/dapp-kit'
import { Flex, Heading, Text } from '@radix-ui/themes'
import { OwnedObjects } from './OwnedObjects'

export const WalletStatus = () => {
  const account = useCurrentAccount()

  return (
    <>
      <Heading mb="2">Wallet Status</Heading>
      {account ? (
        <Flex direction="column">
          <Text>Wallet connected</Text>
          <Text>Address: {account.address}</Text>
        </Flex>
      ) : (
        <Text>Wallet not connected</Text>
      )}
      <OwnedObjects />
    </>
  )
}
