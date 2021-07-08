import Card, { WealthSummary } from 'components/Card'
import { LoaderCard } from 'components/LoaderCard'

import { useQuery } from 'react-apollo'
import { GET_WEALTH_SUMMARY } from 'services/Data/getWealthSummary'

import * as S from './styles'

function Dashboard() {
  const { loading, error, data } = useQuery(GET_WEALTH_SUMMARY)
  if (loading)
    return (
      <S.Wrapper>
        <LoaderCard />
      </S.Wrapper>
    )
  if (error) return <>{error.message}</>

  const wealthSummarys: WealthSummary[] = data.wealthSummary
  return (
    <S.Wrapper>
      {wealthSummarys.map((wealthSummary) => {
        console.log(wealthSummary)

        return <Card key={wealthSummary.id} wealthSummary={wealthSummary} />
      })}
    </S.Wrapper>
  )
}

export default Dashboard
