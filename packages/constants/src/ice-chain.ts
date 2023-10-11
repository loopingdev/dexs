import { Chain } from 'wagmi'

type ChainFeature = 'swap' | 'bridge' | 'info' | 'farms' | 'staking' | 'locks' | 'launchpad' | 'tokenDeployer' | 'akkaRouter'

interface SwapConfig {
  factoryAddress: string
  initCodeHash: string
}

interface LocksConfig {
  factoryAddress: string
  factoryAddress2?: string
}

interface TokenDeployerConfig {
  address: string
  feeToken: string
}

interface KycConfig {
  stableCoin: string
  fee: number
  feeWallet: string
  tokenAddress: string
  contractKycMinter: string
  contractKycAddress: string
}

interface ChainBase {
  features: ChainFeature[]
  swap?: SwapConfig
  locks?: LocksConfig
  tokenDeployerDividend?: TokenDeployerConfig
  blockInterval: number
  wrappedNative: {
    name: string
    symbol: string
    address: string
    decimals: number
  }
  campaignFactory?: string
  kyc?: KycConfig
}

type IceChain = ChainBase & Chain

export default IceChain
