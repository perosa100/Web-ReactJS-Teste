import { formatAmount } from 'utils/formatAmount'
import { formatPercent } from 'utils/formatPercent'
import * as S from './styles'

export interface WealthSummary {
  cdi: number
  gain: number
  hasHistory: boolean
  id: number
  profitability: number
  total: number
}

export interface WealthSummaryPropsData {
  wealthSummary: WealthSummary
}

const Card = ({ wealthSummary }: WealthSummaryPropsData) => (
  <S.Wrapper>
    <S.Card>
      <S.Header>
        <h1>Seu resumo</h1>
        <img src="/icons/more_vert-24px.svg" alt="" />
      </S.Header>

      <S.Content>
        <S.ContentTitle>Valor investido</S.ContentTitle>
        <S.ContentAmount>{formatAmount(wealthSummary.total)}</S.ContentAmount>
      </S.Content>

      <S.Content>
        <S.ContentLayer hasHistory={wealthSummary.hasHistory}>
          <S.ContentLayerItem>
            <S.ContentLayerItemName>Rentabilidade/mês</S.ContentLayerItemName>
            <S.ContentLayerItemValue>
              {formatPercent(wealthSummary.profitability, 3)}%
            </S.ContentLayerItemValue>
          </S.ContentLayerItem>

          <S.ContentLayerItem>
            <S.ContentLayerItemName>CDI</S.ContentLayerItemName>
            <S.ContentLayerItemValue>
              {formatPercent(wealthSummary.cdi, 2)}%
            </S.ContentLayerItemValue>
          </S.ContentLayerItem>

          <S.ContentLayerItem>
            <S.ContentLayerItemName>Ganho/mês</S.ContentLayerItemName>
            <S.ContentLayerItemValue>
              {formatAmount(wealthSummary.gain)}
            </S.ContentLayerItemValue>
          </S.ContentLayerItem>
        </S.ContentLayer>
      </S.Content>

      {wealthSummary.hasHistory && (
        <>
          <S.Divider />

          <S.Footer>
            <S.Button>VER MAIS</S.Button>
          </S.Footer>
        </>
      )}
    </S.Card>
  </S.Wrapper>
)

export default Card
