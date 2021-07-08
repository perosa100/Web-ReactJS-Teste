import * as S from './styles'
import { Shimmer } from 'react-shimmer'
export const LoaderCard = () => (
  <S.Wrapper>
    <S.LoaderCard>
      <S.Header>
        <h1>Seu resumo</h1>
        <img src="/icons/more_vert-24px.svg" alt="" />
      </S.Header>

      <S.Content>
        <S.ContentTitle>Valor investido</S.ContentTitle>
        <S.ContentAmount>
          <Shimmer width={280} height={50} />
        </S.ContentAmount>
      </S.Content>

      <S.Content>
        <S.ContentLayer>
          <S.ContentLayerItem>
            <S.ContentLayerItemName>Rentabilidade/mês</S.ContentLayerItemName>
            <S.ContentLayerItemValue>
              <Shimmer width={120} height={20} />
            </S.ContentLayerItemValue>
          </S.ContentLayerItem>

          <S.ContentLayerItem>
            <S.ContentLayerItemName>CDI</S.ContentLayerItemName>
            <S.ContentLayerItemValue>
              <Shimmer width={120} height={20} />
            </S.ContentLayerItemValue>
          </S.ContentLayerItem>

          <S.ContentLayerItem>
            <S.ContentLayerItemName>Ganho/mês</S.ContentLayerItemName>
            <S.ContentLayerItemValue>
              <Shimmer width={120} height={20} />
            </S.ContentLayerItemValue>
          </S.ContentLayerItem>
        </S.ContentLayer>
      </S.Content>
    </S.LoaderCard>
  </S.Wrapper>
)
