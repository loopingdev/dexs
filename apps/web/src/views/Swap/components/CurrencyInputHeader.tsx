import {
  ChartDisableIcon,
  ChartIcon,
  Swap,
  Flex,
  HistoryIcon,
  IconButton,
  NotificationDot,
  useModal,
} from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import RefreshIcon from 'components/Svg/RefreshIcon'
import { ReactElement, useCallback, useContext } from 'react'
import { useExpertModeManager } from 'state/user/hooks'
import styled from 'styled-components'
import { SettingsMode } from '../../../components/Menu/GlobalSettings/types'
import { SwapFeaturesContext } from '../SwapFeaturesContext'

interface Props {
  title: string | ReactElement
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
  mutateAkkaRoute: () => void
}

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  subtitle,
  hasAmount,
  onRefreshPrice,
  mutateAkkaRoute
}) => {
  const { isChartSupported, isChartDisplayed, setIsChartDisplayed } = useContext(SwapFeaturesContext)
  const [expertMode] = useExpertModeManager()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  const handleOnClick = useCallback(() => {
    mutateAkkaRoute?.()
    onRefreshPrice?.()
  }, [onRefreshPrice])

  return (
    <Swap.CurrencyInputHeader
      title={
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          {isChartSupported && setIsChartDisplayed && (
            <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm" aria-label="Toggle chart">
              {isChartDisplayed ? (
                <ChartDisableIcon color="textSubtle" />
              ) : (
                <ChartIcon width="24px" color="textSubtle" />
              )}
            </ColoredIconButton>
          )}
          <Flex flexDirection="column" alignItems="flex-end" width="100%" mr={18}>
            <Swap.CurrencyInputHeaderTitle>{title}</Swap.CurrencyInputHeaderTitle>
          </Flex>
          <Flex>
            <NotificationDot show={expertMode}>
              <GlobalSettings color="textSubtle" mr="0" mode={SettingsMode.SWAP_LIQUIDITY} aria-label="Settings" />
            </NotificationDot>
            <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
              <HistoryIcon color="textSubtle" width="24px" aria-label="Swap history" />
            </IconButton>
            <IconButton variant="text" scale="sm" onClick={handleOnClick}>
              <RefreshIcon disabled={!hasAmount} color="textSubtle" width="27px" aria-label="Refresh price" />
            </IconButton>
          </Flex>
        </Flex>
      }
      subtitle={<Swap.CurrencyInputHeaderSubTitle>{subtitle}</Swap.CurrencyInputHeaderSubTitle>}
    />
  )
}

export default CurrencyInputHeader
