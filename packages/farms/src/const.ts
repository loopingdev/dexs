import { FixedNumber } from '@ethersproject/bignumber'
import { getFullDecimalMultiplier } from './getFullDecimalMultiplier'

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE = FixedNumber.from(1)
export const FIXED_TWO = FixedNumber.from(2)

export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(getFullDecimalMultiplier(18))

export const masterChefAddresses = {
  32520: '0x090B19ea55b93C969EC98E1D8E3db0695698efCa',
  2000: "0xc44a6eb41f02740A6778CCb9591448a5EBC73b74",
  61916: "0x509733EaB85DEbdAE55306Aa81e3E4326f71cE0D",
  122: "0xBbB4CCfc93657AC125F4b1f734111349d1bFF611",
  50: "0xdD156cA7bff002f7827BDfFd38a0651CFBbe400e",
  1116: "0xe3277bb0f3C4b9C6FC1DBf81E328E14F3C9368C3",
  2415: "0xBD2e577dEa54602C7c367fa144981c8ACA6FD570",
  40: "0xBD2e577dEa54602C7c367fa144981c8ACA6FD570",
  1072: "0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42",
  8453: "0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42",
  148: "0xC4b5F645134DDc57c25D44095e5C1318A83C8481",
}

export const nonBSCVaultAddresses = {
  1: '0x2e71B2688019ebdFDdE5A45e6921aaebb15b25fb',
  5: '0xE6c904424417D03451fADd6E3f5b6c26BcC43841',
}
