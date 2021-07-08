import { gql } from 'apollo-boost'

export const GET_WEALTH_SUMMARY = gql`
  {
    wealthSummary {
      cdi
      gain
      hasHistory
      id
      profitability
      total
    }
  }
`
